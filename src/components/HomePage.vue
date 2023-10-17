<template>
    <div class="container min-h-screen px-10 py-5 relative">
      <div class="text-white md:mt-48 md:px-28 max-w-xl">
        <h1 class="md:text-6xl font-semibold leading-normal">FOOD<br>delivery at<span class="font-bold text-black"> CafePyramid</span></h1>
        <p class="mt-3">Anything you want to order including fresh food, meats, dairy, baked goods, and non-perishable items.</p>
        <button class="md:mt-10 mt-5">
          <a href="#" class="bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-400 hover:text-white duration-300 hover:border border border-transparent" @click="showAlert">Download App</a>
        </button>
        <img src="@/assets/chef1.png" class="w-full xl:w-1/2 xl:absolute bottom-0 right-20">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showAlert() {
        alert('App Coming SOON !'); // Display the alert when the button is clicked
      },
    },
  };
  </script>
  
  <style>
  </style>
  