import React from 'react';
import { Form, Input, Button } from 'antd';
import {  UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './store/actions/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
        this.props.history.push('/');
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        
        <FormItem name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        </FormItem>
        
        <FormItem name='email' rules={[{type: 'email', message: 'The input is not valid E-mail!'}, {
              required: true, message: 'Please input your E-mail!',
            }]}>
            <Input prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </FormItem>

        <FormItem name='password' rules= {[{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }]
          }>
            <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>

        <FormItem name='confirm' rules={[{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }]
          }>
            <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
        </FormItem>

        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Signup
        </Button>
        Or 
        <NavLink 
            style={{marginRight: '10px'}} 
            to='/login/'> login
        </NavLink>
        </FormItem>

      </Form>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.AuthSignUp(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);