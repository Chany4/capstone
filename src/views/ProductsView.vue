<template>
    <div>
        <h2>Welcome to the Products Page</h2>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import store from '@/store';


onMounted(()=>{
    store.dispatch('fetchUsers')
})

</script>
<style scoped>
    
</style>