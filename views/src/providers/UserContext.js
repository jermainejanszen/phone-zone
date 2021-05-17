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
        this.cart = []
    }

    addItem(item) {
        if (item.quantity === 0) {
            return;
        }

        let cartItem = this.getItem(item._id)

        if (undefined === cartItem) {
            this.cart.push(item)
        } else {
            cartItem.quantity += item.quantity;
        }
    }

    getItem(id) {
        return this.cart.find((item) => {
            if (item._id === id) {
                return item;
            }
        });
    }
}

const UserContext = React.createContext({ user: null, setUser: null });

export const UserProvider = UserContext.Provider;

export default UserContext;
