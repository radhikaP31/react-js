import React from 'react';

//Example for JSX and JS syntax

//JSX version
// const JSXClass = () => {
//     return (
//         <div id="name" class="name">
//             <h1 id="message" class="message"> JSX Version of print elements.</h1>
//         </div>
//     )
// }

//Without JSX
// createElement -> have 3 parameters. 1) tag name, 2) attributes, 3) element content
const JSXClass = () => {
    return React.createElement(
            'div', 
            {id:'name', className: 'name'}, 
            React.createElement(
                'h1', 
                {id: 'message', className: 'message'}, 
                'Print elements without JSX'
            )
        );
}

export default JSXClass;