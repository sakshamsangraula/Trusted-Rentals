import React, {Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


// Here, we want to store the state values 
// of the menu items we created such as
// the title and background image
// so we can store these values as state
// and send them as props to menu-item

class Directory extends Component{
    constructor()
    {
        super();

        this.state = {
            // the categories array contains 
            // the properties title, imageUrl 
            // and id which can be passsed to 
            // menu-item
           categories: [
               {
                   title: "RENT A CAR",
                   imageUrl: 'http://pngimg.com/uploads/mercedes/mercedes_PNG80219.png',
                   id: 1,
                   size: 'large'
               },

               {
                   title: "RETURN A CAR",
                   imageUrl: "http://pngimg.com/uploads/audi/audi_PNG1742.png",
                   id: 2,
                   size: 'large'

               }
           ]
        }
    }

    render()
    {
        return (
            <div className  = 'directory-menu'>
                {
                    // destructuring title and imageUrl and passing them to 
                    // MenuItem as props
                    this.state.categories.map(({title, imageUrl, id, size}) => 
                        (<MenuItem key= {id} title = {title} imageUrl={imageUrl} size={size}/>)
                        )
                }
            </div>
        )
    }
}
export default Directory;