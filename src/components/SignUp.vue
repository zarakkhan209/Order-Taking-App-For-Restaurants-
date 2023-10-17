<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Sign-Up</h2>

            <!-- First Name -->
            <div class="mb-4">
                <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" id="firstname" name="firstname"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your First Name" v-model="form.firstname" />
            </div>

            <!-- Last Name -->
            <div class="mb-4">
                <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="lastname" name="lastname"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your Last Name" v-model="form.lastname" />
            </div>

            <!-- Username Input -->
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="email" id="username" name="username"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="first_last123" v-model="form.username" />
            </div>

            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your password" v-model="form.password" />
            </div>

            <!-- Login Button -->
            <button v-on:click="attemptSignUp"
                class="bg-blue-500 text-white hover:bg-blue-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300">
                SignUp
            </button>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions('auth', ['signUp']), // Use the 'auth' namespace
        attemptSignUp() {
            if (!this.form.username || !this.form.password || !this.form.firstname || !this.form.lastname) {
                alert('Please fill all input fields');
            } else {
                const user = {
                    firstname: this.form.firstname,
                    lastname: this.form.lastname,
                    username: this.form.username,
                    password: this.form.password,
                };

                this.signUp(user);

                // Clear the input fields after submission
                this.form.firstname = '';
                this.form.lastname = '';
                this.form.username = '';
                this.form.password = '';
            }
        },
    }
}
</script>
  
<style></style>
  