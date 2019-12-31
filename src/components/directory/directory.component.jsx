import React, {Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


// Here, we want to store the state values 
// of the menu items we created such as
// the title and background image
// end them as props to menu-item component

class Directory extends Component{
    constructor()
    {
        super();

        this.state = {
            // the categories array contains 
            // the properties: title, imageUrl, 
            // id ,and size which can be passsed to 
            // menu-item
           categories: [
               // two objects with properties: title, imageUrl, id, and size are created
               {
                   title: "RENT A CAR",
                   imageUrl: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80219.png',
                   id: 1,
                   size: 'large',
                   linkUrl: 'rent'
               },

               {
                   title: "RETURN A CAR",
                   imageUrl: "http://pngimg.com/uploads/audi/audi_PNG1742.png",
                   id: 2,
                   size: 'large',
                   linkUrl: 'return'

               }
           ]
        }
    }

    render()
    {
        return (
            <div className  = 'directory-menu'>
                {
                    // destructuring title, imageUrl, id, and size and passing them to 
                    // MenuItem as props

                    // using the map function to take each title, imageUrl, id, and size from each object and send it to
                    // the menuItem component as a prop
                    this.state.categories.map(({title, imageUrl, id, size, linkUrl}) => 
                        (<MenuItem key= {id} title = {title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>)
                        )
                }
            </div>
        )
    }
}
export default Directory;