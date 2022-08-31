// This is an app component, we will import it to index, and render it in a DOM element
import React from 'react';
import CreatePost from './CreatePost'; //It is important that there is a capital letter in the begining
// of name of the component or function or it will give error

const App = () => {
       return(
       <div class = "container">
        <h1> Create a post </h1>
        <CreatePost /> 
        </div>
        );
       
       
};

export default App;