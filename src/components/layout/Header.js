// header is just a functional component because there's not going to be any state or anything, it's basically just markup and is the first time we're looking at a function based component (which is pretty easy)

// functional component is one return, which works like render does

import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        //will be some links for about page but won't do that just yet
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={ linkStyle } to="/">Home</Link> | <Link style={ linkStyle } to="/">About</Link>
        </header>
        )
}

//exporting function

const headerStyle={

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
    
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;