// 
import { useState } from "react"
import { db } from "../data/db"

export const useUserCart = () => {

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    function addToCart(item) { }
}