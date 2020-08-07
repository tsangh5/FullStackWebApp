import React from 'react';

class Form extends React.Component{
    handleSubmitForm = (event) => {
        event.preventDefault();
        const title = event.target.Title.value;
        const content= event.target.Content.value;

        console.log(title, content)

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <label for='title'>Title</label>
                    <input type='text' name='Title' id='title' placeholder='Your title'/>
                    <label for='content'>Content</label>
                    <textarea name='Content' id='content' placeholder='Your Content'></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        )
            
    }
}

export default Form;