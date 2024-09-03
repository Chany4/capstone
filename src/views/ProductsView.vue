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
    store.dispatch('fetchMech')
    store.dispatch('fetchIntExt')
})

</script>
<style scoped>
    
</style>