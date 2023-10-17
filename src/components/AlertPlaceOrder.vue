<!-- AlertComponent.vue -->
<template>
    <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 text-center p-4 py-72" v-if="showAlert">
      <p>{{ alertMessage }}</p>
      <p class="font-bold">Click Submit to go back</p>
      <button @click="redirectToPage" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
        Submit
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAlert: true,
        alertMessage: "Thanks For Ordering!",
      };
    },
    methods: {
      redirectToPage() {
        // Use Vue Router to navigate to the specific page
        this.$router.push('/'); // Replace '/specific-page' with the actual path
      },
    },
  };
  </script>
  