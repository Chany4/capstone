<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
            
        </div>
        <div class="row my-2" v-if="product()">
            <div class="row center">
                        <div class="card mt-5">
                            <img :src="product().imageURL" class="card-img-top">
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{product().partName}}</h5>
                                    <h4>{{product().category}}</h4>
                                </div>
                                <div>
                                    <p class="card-text">Price: R{{product().price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <div v-else>
            <SpinnerComp/>
        </div>
    </div>
</template>
<script >
import SpinnerComp from '@/components/SpinnerComp.vue';

export default{
    methods: {
        getProduct(){
            this.$store.dispatch('fetchMechSingle',this.$route.params.id);
        },
        product() {
            return this.$store.state.mechSingle;
        },
    },
    mounted() {
        this.getProduct();
    },
    components:{
        SpinnerComp
    }
}
</script>
<style scoped>
    .center{
        display: flex;
        justify-content: center;
    }
</style>


