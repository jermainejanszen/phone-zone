import React from 'react';

export class User {
    constructor(id) {
        this.id = id;
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

        let i = this.getItem(item.id)

        if (undefined === i) {
            this.cart.push(item)
        } else {
            i.quantity += item.quantity;
            console.log(i);
        }

        console.log(this.cart)
    }

    getItem(id) {
        return this.cart.find((item) => {
            if (item.id === id) {
                return item;
            }
        });
    }
}

const UserContext = React.createContext({ user: null, setUser: null });

export const UserProvider = UserContext.Provider;

export default UserContext;
