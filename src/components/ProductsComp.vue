<template>
    <div>
        
    </div>
</template>
<script >
import { computed,onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const games = computed(() => store.state.games)
onMounted(() => {
    store.dispatch('fetchMech')
});
export default {
    
}
</script>
<style scoped>
    
</style>