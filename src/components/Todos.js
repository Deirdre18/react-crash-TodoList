//formatted like any other class based component

import React, { Component } from 'react';
import TodoItem from './TodoItem';
//now prop-types are sort of a validation for properties that a component should have, and we can set the type we can also set them to be required or not, so our todo component has a prop of todos (App.js), so we import PropTypes
import PropTypes from 'prop-types';

class Todos extends Component {

  //markComplete = () => {
    //console.log("Hello")
  //}
  // render method (JSX attribute) React.htmlATTRIBUTES<HTMLElement.className?:string

  //then inside the class we have a render method, which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.
  render() {

    // next thing we want to do since we have this array of to do's we need to loop through them and then output something, so in react what we do is we use the map method, which is a high order array. and it's used it's used for a lot of different things but basically it can return an array from an array but we're,but we're just using it to loop through and then outputting JSX

    // we get hello three times and the reason we're seeing hello three times is because they are coming from the state (App.js), passed in as props and we're mapping through those props and then we're outputting to-do item which only has < Hello /> inside of it (TodoItem), so obviously hello is not what we want to display here.

    // remember this is a prop and todo is being passed into TodoItem as a prop
    // in console you can see error saying each child in an array or iterator should have a unique key prop okay so that when we map through something it's actually creating what's called a list and lists need they should have keys you I mean it doesn't break the application but we'll just keep seeing this warning so we just simply want to add a key onto this which should be something unique now remember we have access to the todo and that to do has an ID which is unique so I'm going to say the key is going to be to do dot ID and we'll save and now that error goes away

    return this.props.todos.map((todo) => (
      //Creating prop of markComplete to this component
      //< TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>
      //we have to go up one level, as state is in App.js, so we add props here, and then we attach markComplete to todos in App.js (and change the state)
      //here we're creating props for delTodo (going up), same as markComplete
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      
    ));

    }
  }
  //PropTypes
  //we want to define any prop-types for this class

  //so name of class (Todos) and then it's going to be an array of objects of Prop, and is required. This is good practice to do
  Todos.propTypes = { 
    todos: PropTypes.array.isRequired
    }

  export default Todos;
