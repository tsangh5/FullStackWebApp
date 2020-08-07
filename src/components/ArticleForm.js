import React from 'react';
import axios from 'axios';
class Form extends React.Component{
    handleSubmitForm = (event, requestType, articleID) => {
        const title = event.target.Title.value;
        const content= event.target.Content.value;

        switch( requestType ){
            case 'post':
                return axios.post('http://127.0.0.1:8000/articles-api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            case 'put':
                return axios.put(`http://127.0.0.1:8000/articles-api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }

    }
    render(){
        return(
            <div>
                <form onSubmit={(event) => this.handleSubmitForm( event, this.props.requestType, this.props.articleID)}>
                    <label for='title'>Title</label>
                    <input type='text' name='Title' id='title' placeholder='Your title'/>
                    <label for='content'>Content</label>
                    <textarea name='Content' id='content' placeholder='Your Content'></textarea>
                    <label for='button'>{this.props.btnText}</label>
                    <input type="submit" id='button'></input>
                </form>
            </div>
        )
            
    }
}

export default Form;