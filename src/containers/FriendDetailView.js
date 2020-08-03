import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

class FriendDetail extends React.Component{
    state = {
        friend: {}
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/friends-api/${id}`)
            .then(res =>{
                this.setState({
                    friend: res.data
                });
            }

            )
    }
    render(){
        return(
            <Card title={this.state.friend.name}>
                <p>{this.state.friend.bio}</p>
            </Card>
        )
    }
}

export default FriendDetail;