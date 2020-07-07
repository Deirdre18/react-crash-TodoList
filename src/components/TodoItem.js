import React, { Component } from 'react';
//TodoItem also has a prop of todo, so we import PropTypes
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    //getStyle with any parameters it takes and arrow function, we want to strike through completed items props contains current Todo. This is called dynamic styling
  
  
    getStyle = () => {
        return {
          background: "#f4f4f4",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
      };
      //Adding method. Want to use arrow functions. When u have an event and calling a method it takes an event parameter. However below code produces error saying can't read props of undefined, so there are 2 options (1) bind (reason we can use that in render or other life cycle methods is because it's part of component class), however this is a custom method rather than component class, so doesn't have access, so we do following. 

      // since we're not using a state manager like Redux and we're not using the context API we have to basically climb the tree or what is it called component drilling. Basically we have our state inside of our app.js file so we can't  where basically we can't simply say this.set state you and then change the completed value to true or false. We have to climb the ladder climb the and we have to go from to-do item to todos and then into App.js' and the way we do that is through props and we recreate methods inside of our props and we call those. So instead of having the method below, we do as follows (see under render - added prop and by doing so, I go to todos (next level up) and to where TodoItem is and add )
      //markComplete= (e) => {
          //console.log(this.props)
      //}
    //this is called restructing, where we're pulling out values and is easier way
    render() {
        const {id,title, completed} = this.props.todo;

        return (
            //in JSX we can actually use inline style which allows us to have our markup our, our functionality and our styling all within our component, so lets add styling in <div> and we use double {} for inline styling. There is no hyphenatio in inline styling and camelCase is used. Also double curley braces {{ backgroundColor: '#9999ff' }} can be used instead of variable
            //we can use const variable as set out below
            //<div style={itemStyle}> 
            
            //can also add style as function, so use a method in a class
            <div style={this.getStyle()}>
            {/* {''} is an expression with a space} and we add an event onChange, same as vanilla javascript only camelCase using method. Binding method below shows props but better way to do this is to add an arrow function (put = and then arrow) in method (above render)*/}
                {/*binding, as we have access todo*/}
                {/*<input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />{''}*/}
                {/*destructuring - pulling out values of id and title, passing id up through todos and app.js (now we can grab id in app.js)*/}
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{''}
                {/*<input type="checkbox" onChange={this.markComplete.bind(this)}/>{''}*/}                   
                { title }
                {/*adding an event so something happens when x button is clicked} - doing same thing with props, sending onClick style up to were our state is (App.js). We use destructuring for id variable*/}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>

                </p>
                {/*<p>{ this.props.todo.title }</p>*/}
            </div>
        )
    }
}
//PropTypes
//we want to define any prop-types for this class

//so name of class (Todos) and then a single object of Prop, and is required. This is good practice to do
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//can also use variable - only need one set of {}
//const itemStyle = { backgroundColor: '#9999ff' }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'



}


export default TodoItem
