import React from 'react';
import Friends from '../components/friend';
import axios from 'axios';
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class FriendList extends React.Component{
    state = {
        friends: []
    }
    componentDidMount(){
        axios.get( 'http://127.0.0.1:8000/friends-api/')
            .then(res =>{
                this.setState({
                    friends: res.data
                });
            }

            )
    }
    render(){
        return(
            <Friends data={this.state.friends}/>
        )
    }
}

export default FriendList;