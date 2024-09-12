<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <!-- Spinner is shown if products() is falsy -->
        <div v-if="!products()">
            <SpinnerComp />
        </div>
        <!-- Product details are shown if products() is truthy -->
        <div v-else>
            <div class="row my-2">
                <div class="row center">
                    <div class="card mt-5">
                        <img :src="products().imageURL" class="card-img-top" alt="Product Image">
                        <div class="card-body">
                            <div class="prodName">
                                <h5 class="card-title">{{ products().name }}</h5>
                                <h4>{{ products().category }}</h4>
                            </div>
                            <div>
                                <p class="card-text">Price: R{{ products().price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    methods: {
        getProduct() {
            this.$store.dispatch('fetchIntExtSingle', this.$route.params.id);
        },
        products() {
            return this.$store.state.IntExtSingle;
        },
    },
    mounted() {
        this.getProduct();
    },
    components: {c  
        SpinnerComp
    }
}
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}
</style>
