import React from 'react';
import MenuItem from '../menu-item/menu-item.components'
import './directory.styles.scss';
import DIRECTORY_DATA from './directory.data.js'

class Directory extends React.Component {
    constructor() {
        super();

       this.state = {
           sections : DIRECTORY_DATA
       }
    }

    render () {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps}/>
                ))}
            </div>
        )
    }

}

export default Directory;