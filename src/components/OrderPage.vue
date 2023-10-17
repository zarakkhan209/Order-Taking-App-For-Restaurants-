<template>
  <div class="bg-gray-100 px-4 py-40">
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Place Your Order</h2>

      <!-- Order Input Box -->
      <textarea v-model="orderTextData"
        class="border rounded-lg p-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-300 resize-none"
        placeholder="Write your order here..."></textarea>

      <!-- Place Order Button -->
      <button @click="placeOrder"
        class="mt-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300">
        Place Order
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      orderTextData: '', // Rename this to orderTextData
    };
  },
  computed: {
    // Map orderTexts from the Vuex store
    orderTexts() { // Corrected from orderText
      return this.$store.state.orderTexts;
    },
  },
  methods: {
  placeOrder() {
    if (this.orderTextData.trim() === '') {
      alert('Please enter your order before placing it.');
    } else {
      // Dispatch the 'addOrder' action to store the order text
      this.$store.dispatch('addOrder', this.orderTextData); // Make sure the action name matches your store setup

      // Clear the input field
      this.orderTextData = '';

      alert('Order placed successfully');
      this.$router.push({
        name: 'AlertPlaceOrder',
        params: { orderText: this.orderTextData },
      });
    }
  },
}
};
</script>
