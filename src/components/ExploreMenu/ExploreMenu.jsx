import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'> Next come a few sentences for development and support, elaborating on the topic with more detail. Paragraphs end with a conclusion sentence that summarizes the topic or presents one final piece of support to wrap up</p>
            <div className='item-explore-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-menu-list-items'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                        
                    );
                })}
            </div>
            <hr/>
        </div>
    );
}

export default ExploreMenu;
