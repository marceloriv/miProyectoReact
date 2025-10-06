// 
import { useState } from "react"
import { db } from "../data/db"

export const useUserCart = () => {

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    function addToCart(item) {
        const itemExists = cart.findIndex((audifono) => audifono.id === item.id)
        if (itemExists >= -1) {
            if (cart[itemExists].quantity >= MAX_ITEMS) return
            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)

        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }
}