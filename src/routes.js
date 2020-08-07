import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/articleListView';
import ArticleDetail from './containers/ArticleDetailView';
import FriendDetail from './containers/FriendDetailView';
import FriendList from './containers/FriendListView';
import Home from './containers/Home'

const BaseRouter = () => (
    <div>
        <Route exact path= '/Articles' component={ArticleList} />
        <Route exact path='/Articles/:articleID' component={ArticleDetail} /> 
        <Route exact path= '/Friends' component={FriendList} />
        <Route exact path='/Friends/:id' component={FriendDetail} /> 
        <Route exact path='/' component={Home}/>
    </div>
);

export default BaseRouter;