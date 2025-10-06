// 
import { use, useMemo, useState } from "react"
import { db } from "../data/db"

export const useUserCart = () => {

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    /* funcion para agregar al carrito */
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

    /* funcion para disminuir la cantidad de un item */

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(audifono => audifono.id !== id))
    }
    /* funcion para aumentar la cantidad de un item */
    function increaseQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return { ...item, quantity: item.quantity + 1 }

            }
            return item
        })
        setCart(updateCart)
    }
    /* funcion para disminuir la cantidad de un item */
    function decreaseQuantity(id) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return { ...item, quantity: item.quantity - 1 }

            }
            return item
        })
        setCart(updateCart)
    }
    /* funcion para limpiar el carrito */
    function clearCart() {
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}