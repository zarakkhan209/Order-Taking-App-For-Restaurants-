<template>
  <div>
    <h2 class="text-3xl text-center p-4 md:p-10 font-bold mb-4 border-b border-gray-300">Ordered Items</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-96 p-6">
      <div v-for="(item, index) in orderedItems" :key="index" class="bg-white rounded-lg shadow-lg p-4">
        <div class="bg-yellow-400 text-red-800 font-bold text-lg p-2 rounded-t-lg">Order {{ index + 1 }}</div>
        <div class="p-4 font-bold">Order by :
          <span class="text-blue-600">{{ item.user.loggedInUser }}</span>
          <br />Order :
          <span class="text-red-700">{{ item.order.orderText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orderedItems() {
      const orderTexts = this.$store.state.orderTexts;
      const loggedInUsername = this.$store.state.loggedInUsername;

      // Combine user and order data into a single array
      return orderTexts.map((orderText, index) => {
        return {
          user: { loggedInUser: loggedInUsername[index] },
          order: { orderText: orderText },
        };
      });
    },
  },
}
</script>
