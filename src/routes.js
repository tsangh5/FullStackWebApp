import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/articleListView';
import ArticleDetail from './containers/ArticleDetailView';
import FriendDetail from './containers/FriendDetailView';
import FriendList from './containers/FriendListView';

const BaseRouter = () => (
    <div>
        <Route exact path= '/Articles' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetail} /> 
        <Route exact path= '/Friends' component={FriendList} />
        <Route exact path='/:id' component={FriendDetail} /> 
    </div>
);

export default BaseRouter;