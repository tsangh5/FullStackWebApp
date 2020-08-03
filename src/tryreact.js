import React from 'react';

const name = {
    first_name: 'Benjamin'
}
function formatName(name){
    if (name){
        return name.first_name
    }
    return 'Stranger'
}

const element = (
    <h1>Hello, {formatName(name)}</h1>
)

ReactDOM.render(
    element
);
