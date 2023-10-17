<template>
<div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center">
        <span class="text-yellow-500 text-4xl mr-1">
            <i class="bi bi-cup-straw"><span class="text-white"> CafePyramid</span></i>
        </span>
    </div>

    <span @click="OpenMenu" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" 
    :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6">
            <RouterLink to="/" class="text-xl hover:text-green-500">Home</RouterLink>
        </li>
        <li class="md:mx-4 md:my-0 my-6">
            <RouterLink to="/menuone" class="text-xl hover:text-green-500">Menu</RouterLink>
        </li>
        <li class="md:mx-4 md:my-0 my-6">
            <RouterLink to="/login" class="text-xl hover:text-green-500">Order</RouterLink>
        </li>
        <li class="md:mx-4 md:my-0 my-6">
            <RouterLink to="/ordereditems" class="text-xl hover:text-green-500"><i class="bi bi-cart"></i></RouterLink>
        </li>
        <ButtonOne>Sign-Up</ButtonOne>
    </ul>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ButtonOne from './ButtonOne.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
    ButtonOne,
    RouterLink
},

    setup() {
        let open = ref(false)
        let Links = [
            { name: "Home", link: "/" },
            { name: "Menu", link: "/menuone" },
            { name: "Order", link: "/LogIn" },
        ]

       function OpenMenu(){
        open.value = !open.value
       }

        return { Links, open, OpenMenu }
    }

}
</script>
