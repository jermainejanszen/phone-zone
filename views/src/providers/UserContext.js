import React from 'react';

export class User {
    constructor(details) {
        this.id = details._id;
        this.email = details.email;
        this.firstname = details.firstname;
        this.lastname = details.lastname;
        this.password = details.password;
        this.cart = new Cart();
    }
}

export class Cart {
    constructor() {
        this.items = []
    }

    addItem(item) {
        if (item.quantity === 0) {
            return;
        }

        let cartItem = this.getItem(item._id)

        if (undefined === cartItem) {
            this.items.push(item)
        } else {
            cartItem.quantity += item.quantity;
        }
    }

    getItem(id) {
        return this.items.find((item) => {
            if (item._id === id) {
                return item;
            }
        });
    }

    getRemainingStock(item) {
        let cartItem = this.getItem(item._id);
        
        if (undefined === cartItem) {
            return item.stock;
        } else {
            return item.stock - cartItem.quantity;
        }
    }

    getTotalCost() {
        let total = 0;
        this.items.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    }

    clear() {
        this.items = [];
    }
}

const UserContext = React.createContext({ user: null, setUser: null });

export const UserProvider = UserContext.Provider;

export default UserContext;
