// src/lib/cart.svelte.ts

// Define what a product looks like
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

// Create the global state
let cartItems = $state<CartItem[]>([]);

// Persistent logic: Load from localStorage on initialization
if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('ronika_cart');
    if (saved) cartItems = JSON.parse(saved);
}

export const cart = {
    get items() { return cartItems; },
    
    get total() {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    get count() {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },

    add(product: Product) {
        const existing = cartItems.find(i => i.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        this.save();
    },

    // --- NEW REDUCE METHOD ---
    reduce(id: string) {
        const existing = cartItems.find(i => i.id === id);
        if (existing && existing.quantity > 1) {
            existing.quantity -= 1;
        } else {
            // Optional: If quantity is 1 and they press minus, remove it
            this.remove(id);
        }
        this.save();
    },

    remove(id: string) {
        cartItems = cartItems.filter(i => i.id !== id);
        this.save();
    },

    clear() {
        cartItems = [];
        this.save();
    },

    save() {
        if (typeof window !== 'undefined') {
            localStorage.setItem('ronika_cart', JSON.stringify(cartItems));
        }
    }
};