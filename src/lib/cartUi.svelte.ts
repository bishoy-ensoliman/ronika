// Shared reactive state for cart drawer visibility
let isCartOpen = $state(false);

export const cartUi = {
	get isOpen(): boolean {
		return isCartOpen;
	},
	set isOpen(value: boolean) {
		isCartOpen = value;
	},
	open() {
		isCartOpen = true;
	},
	close() {
		isCartOpen = false;
	}
};
