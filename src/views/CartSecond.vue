<template>
    <div class="container-fluid">
        <h1>Welcome To Your Cart</h1>

        <!-- Display cart Items -->
        <div v-if="cartItems && cartItems.length" class="container">
            <div v-for="item in cartItems" :key="item.mechanicalPartID" class="mb-3">
                <div class="row">
                    <div class="img col-4">
                        <img :src="item.imageURL" alt="image" class="img-fluid">
                    </div>
                    <div class="col-4">{{ item.partName }}</div>
                    <div class="col-4">{{ item.mechanicalPartID }}</div>
                </div>
                <div class="row">
                    <button class="btn btn-danger my-2" @click="confirmDelete(item.mechanicalPartID)">
                        Delete Item
                    </button>
                </div>
            </div>
            <div class="row">
                <button class="btn btn-danger my-2" @click="confirmDeleteAll()">
                    Delete All
                </button>
                <button class="btn btn-success my-2" @click="confirmProceedTPurchase()">
                    Proceed To Purchase
                </button>
            </div>
        </div>
        <div v-else>
            <p>Your cart is empty</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useCookies } from 'vue3-cookies';
import Swal from 'sweetalert2';

const store = useStore();
const { cookies } = useCookies();

const cartItems = computed(() => store.state.cart);

const getCartFromCookies = () => {
    const cart = cookies.get('cart');
    if (cart) {
        try {
            const parsedCart = JSON.parse(cart);
            store.commit('setCart', parsedCart);
        } catch (error) {
            console.error('Failed to parse cart data from cookies', error);
            store.commit('setCart', []);
        }
    } else {
        store.commit('setCart', []);
    }
};

const updateCookies = () => {
    cookies.set('cart', JSON.stringify(store.state.cart), '1d');
};

const removeItem = (itemId) => {
    store.commit('removeItem', itemId);
    updateCookies();
};

const removeAllItems = () => {
    store.commit('setCart', []);
    cookies.remove('cart');
};

const confirmDelete = async (itemId) => {
    const result = await Swal.fire({
        title: 'Are you sure you want to delete this item?',
        text: 'You will not be able to recover this item.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
        removeItem(itemId);
        Swal.fire('Deleted!', 'Item has been successfully deleted', 'success');
    }
};

const confirmDeleteAll = async () => {
    const result = await Swal.fire({
        title: 'Are you sure you would like to clear the cart?',
        text: 'You will lose all items in your cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, clear it!',
        cancelButtonText: 'No, keep them'
    });

    if (result.isConfirmed) {
        removeAllItems();
        Swal.fire('Cleared!', 'Your cart has been cleared', 'success');
    }
};

const confirmProceedTPurchase = async () => {
    const result = await Swal.fire({
        title: 'Are you sure you would like to proceed to purchase?',
        text: 'You will be taken to the payment page.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, proceed!',
        cancelButtonText: 'No, go back'
    });

    if (result.isConfirmed) {
        removeAllItems();
        Swal.fire('Cart cleared', 'You are now proceeding to purchase', 'success').then(() => {
            // Redirect to payment page or handle purchase logic here
        });
    }
};

onMounted(() => {
    getCartFromCookies();
});
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
}
.img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
