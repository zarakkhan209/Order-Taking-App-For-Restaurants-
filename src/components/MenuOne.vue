<template>

<div class="bg-gray-100 px-5 py-10">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(menu,index) in menus" :key="index">
        <div class="bg-white p-4 rounded-lg shadow-md">
            <img :src="menu.image" alt="Menu Item 1" class="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 class="text-xl font-semibold">{{ menu.item }}</h3>
            <p class="text-gray-600">{{ menu.description }}</p>
            <p class="text-gray-700 font-bold mt-2">{{ menu.price }}</p>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
        menus:[
            {
                image: 'shamikabab.webp',
                item: 'Shami Kabab',
                price: '50 Rs'
            },
            {
                image: 'chickenqourma.webp',
                item: 'Chicken Qourma',
                price: '160 Rs'
            },
            {
                image: 'masarchawal.jpg',
                item: 'Masar Chawal',
                price: '200 Rs'
            },
            {
                image: 'andatiki.jpg',
                item: 'Anda Tikki',
                price: '90 Rs'
            },
            {
                image: 'chickensabzi.jpg',
                item: 'Chicken Sabzi',
                price: '150 Rs'
            },
            {
                image: 'andakofta.jpg',
                item: 'Anda Kofta',
                price: '160 Rs'
            },
            {
                image: 'andabhurji.jpg',
                item: 'Anda Bhurji',
                price: '130 Rs'
            },
            {
                image: 'chickendaal.jpg',
                item: 'Chicken Daal',
                price: '160 Rs'
            },
            {
                image: 'daalchanaachar.jpg',
                item: 'Daal Chana Achaar',
                price: '160 Rs'
            },
            {
                image: 'kabab masala.jpg',
                item: 'Kabab Masala',
                price: '400 Rs'
            },
            {
                image: 'chickenmethi.jpg',
                item: 'Chicken Maithee',
                price: '170 Rs'
            },
            {
                image: 'sabutmasarfry.jpg',
                item: 'Sabut Masaar Fry',
                price: '140 Rs'
            },
            {
                image: 'alochickenqeema.jpg',
                item: 'Alo Chicken Qeema',
                price: '180 Rs'
            },
            {
                image: 'karipakora.jpg',
                item: 'Karri Pakora',
                price: '160 Rs'
            },
            {
                image: 'aloo methi.jpg',
                item: 'Alo Maithi',
                price: '160 Rs'
            },
            {
                image: 'chickenshaljum.jpg',
                item: 'Chicken Shaljum',
                price: '150 Rs'
            },
        ]
        }
    }
}
</script>

<style>

</style>
