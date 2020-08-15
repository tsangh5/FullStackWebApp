import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LoadingOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './store/actions/auth';

const FormItem = Form.Item;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        
      }
    });
    this.props.history.push('/');
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    return (
        <div>
            {errorMessage}
            {
                this.props.loading ?

                <Spin indicator={antIcon} />

                :

                <Form onSubmit={this.handleSubmit} className="login-form">

                    <FormItem   name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
                          <Input prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>

                    <FormItem name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </FormItem>

                    <FormItem>
                    <Button type="primary" onSubmit={this.handleSubmit} htmlType="submit" style={{marginRight: '10px'}}>
                        Login
                    </Button>
                    Or 
                    <NavLink 
                        style={{marginRight: '10px'}} 
                        to='/signup/'> signup
                    </NavLink>
                    </FormItem>
                </Form>
            }
      </div>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);

