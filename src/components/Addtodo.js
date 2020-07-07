//class based component

import React, { Component } from 'react'

export class Addtodo extends Component {
    //adding functionality. Here we have a an input field. Usually you're going to want to have your fields as a piece of State for that component, so we add a state value to our state object
    state = {
        title: ''
    }

    //since it's a submit, just like in vanilla javascript, it will just submit to the file, so we want to prevent that
    
    onSubmit = (e) => {
        e.preventDefault();
        //what we want to happen is that we need to pass this up, so we call a props method, just like makeComplete and delete. As a parameter we need to pass title up (whatever we're typing in, as we're adding a title)
        this.props.Addtodo(this.state.title);
        //Here is we clearing field and setting our state object back to nothing after it's submitted. We have to again pass this up one level, to addTodo - so we go to App.js (as appTodo is embedded in App.js
        this.setState({ title: ''});
    }
    //this is an example of component state and only exists within Addtodo component (and we don't need to go back up to App.js). The Todos however are at app level state because we're sharing that between components and that's what you would use redux for or context or even something like Apollo with graph QL (different ways to manage app level state, but this here is at component level state)

    //this will give us the value of whatever we type in (so what we're doing is setting the title for whatever we type in.  We get the value using this event parameter). But what if we had other fields like name, email, password etc - we wouldn't want to do an onChange for each one, so this is what we do - so as long as name is equal to what's in the field (in this case title), that should be fine. We just have one field here but you can use as many fields as you want. 
    //onChange = (e) => {this.setState({ title: e.target.value })}
    onChange = (e) => {this.setState({ [e.target.name]: e.target.value })}


    render() {
        return (
            //here we're going to create a submit event
            <form onSubmit = {this.onSubmit} style={{ display: 'flex' }}>
                <input 
                 type="text" 
                 name="title"
                 style = {{ flex: '10', padding: '5px' }} 
                 placeholder="Add todo ..." 
                 value = {this.state.title}
                 //doesn't matter what this is called, it is just the name of the method
                 onChange = {this.onChange}
                 />

                <input 
                 type = "submit"
                 value = "Submit" 
                 className = "btn"
                 style = {{flex: '1'}}    
                 />
            </form>
        )
    }
}

export default Addtodo
