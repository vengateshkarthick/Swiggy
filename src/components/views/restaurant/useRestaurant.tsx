import React, { useState } from 'react'
import { useLocation } from "react-router"
import { hotel_api } from "../../../api/Items"

export function useRestaurant() {
    const [selected, setSelected] = useState<any>('')
    const location = useLocation()
    const { id }: any = location.state ?? {}
    const [hotel]:any = hotel_api.filter(item => item.hotel_id === id)
    return {
        hotel,
        selected,
        setSelected,
    }

}

export type UseRestaurantContextType = ReturnType<typeof useRestaurant>

export const UseRestaurantContext = React.createContext({} as UseRestaurantContextType)