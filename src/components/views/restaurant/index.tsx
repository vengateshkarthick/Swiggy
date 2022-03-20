import React, { useContext } from 'react'

import { hotel_api } from '../../../api/Items'
import { useRestaurant, UseRestaurantContext } from './useRestaurant'
const View = () => {
   

    const {
        hotel :{
            menu_items
        },
        selected,
        setSelected
    } = useContext(UseRestaurantContext)
    return (
        <div className='res-details'>
            <div className="d-flex flex-column menu">
                <ul>
                    {

                        menu_items && menu_items?.length > 0 &&
                        menu_items.map((item:any) => {
                            return (
                                <li 
                                  id={item.hash}
                                    onClick={(e) => {
                                        setSelected(e.currentTarget.id)
                                    }} 
                                    className={`${selected === item.hash ? 'active' : ''} p-4 mnu_list`}
                                >
                                    <span>
                                        {item.name}
                                    </span>
                                </li>
                            )
                        })

                    }
                </ul>
                    
            </div>
            <div className='d-flex'>

            </div>
            <div className='d-flex'>

            </div>
        </div>
    )
}

export default () => {
    const val = useRestaurant()
    return (
        <UseRestaurantContext.Provider value={val}>
            <View/>
        </UseRestaurantContext.Provider>
    )
}