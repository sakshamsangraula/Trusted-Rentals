import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
// withRouter takes in a component as an argument and returns a new modified component

// MenuItem takes in the title, imageUrl, id, and size from Directory component
// and displays the background image and uses size property to style the menu-component
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
     className = {`${size} menu-item`}
     onClick={() => history.push(`${match.url}${linkUrl}`)}>

       <div className = "background-image" 
       style={{
          backgroundImage: `url(${imageUrl})`
       }}
       />

            <div className = "content">
               <h1 className='title'>{title}</h1>
               <span className = 'subtitle'>FIND PEOPLE</span>
            </div>
         </div>

)

export default withRouter(MenuItem);
// it will return super powered menu item component with access to location, match, and history