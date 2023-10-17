<template>
<button @click="navigateToPage" class="bg-yellow-400 hover:bg-yellow-500 duration-300 font-sm text-black rounded py-1.5 px-4">
    <slot></slot>
</button>

</template>

<script>

export default {
    methods:{
        navigateToPage(){
            this.$router.push('/signup')
        }
    }

}
</script>

<style>

</style>
