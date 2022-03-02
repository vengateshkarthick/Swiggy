import {useEffect, useState,createContext, useContext} from 'react'
import { hotel_api } from '../../../api/Items'
import { MaincontentContext } from '../useMaincontent'


export const useItemgrid = () => {
    const {searchText} = useContext(MaincontentContext)
    const [filter, setFilter] = useState<string | undefined>('All')
    const [hotelList , setHotelList] = useState<Array<any>>()
    useEffect(
        () => {
            if(filter === 'ratings'){
                const fiveStar = hotel_api?.filter(item => item.ratings > 3)
                setHotelList(fiveStar)
            }
            if (filter === 'takeaway') {
                let list = hotel_api?.filter(item => item?.take_away === true)
                setHotelList(list)
            }
           
            else {
                setHotelList(hotel_api)
            }
            
                
            
        
            
                
            
        },[filter])

        useEffect(() => {
            if (searchText && searchText?.length > 0) {
                const filteredHotel = hotel_api?.filter(item => item.hotel_name.startsWith(searchText))
                if (filteredHotel.length > 0) {
                    setHotelList(filteredHotel)
                }
                else {
                    setHotelList(hotel_api)
                }

            }

        },[searchText])
    return {
        hotelList,
        filter,
        setFilter,
    }
}


export type ItemGridContextType = ReturnType <typeof useItemgrid>
export const ItemgridContext = createContext({} as ItemGridContextType) 
