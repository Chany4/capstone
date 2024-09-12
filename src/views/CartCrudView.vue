<template>
    <div class="container-fluid">
        <h1>Welcome To Your Cart</h1>

        <!-- Display cart Items -->
         <div v-if="cartItems in cart " :key="cartItems">
            <table>
                <thead>
                    <tr>
                        <td>Cart Number</td>
                        <td>Item</td>
                        <td>addUser</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>{{ cartItems.cart_id }}</div>
                            <div>{{ cartItems.mech_id }}</div>
                            <div>{{ cartItems.user_id }}</div>
                            <div>{{ cartItems.quantity }}</div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <div>
                            <p>Proceed to checkout</p>
                            <button>Purchase</button>
                        </div>
                    </tr>
                </tfoot>
            </table>
         </div>
    </div>
</template>
<script>
export default{
    
}

</script>
<style>
    
</style>