import React from 'react'

function About() {
    
    return (

    // if you don't need a <div> in the dom, can use react fragment, which is like a ghost element in the dom, but we need it for JSX when returning something
       <React.Fragment>
          <h1>About</h1>
           <p>This is the react-crash-todo App v0.1.0.  It is part of the React Crash Course.</p>
            
        </React.Fragment>
    )
}

export default About;
