<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Login</h2>

            <!-- Username Input -->
            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="email" id="username" name="username"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your username" v-model="form.username" required />
            </div>

            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your password" v-model="form.password" required />
            </div>

            <!-- Login Button -->
            <button @click="attemptLogin"
                class="bg-blue-500 text-white hover:bg-blue-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300">Log-In</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'LogIn',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        ...mapActions('auth', ['login', 'addUser']), // Use the 'auth' namespace
        attemptLogin() {
            if (!this.form.username || !this.form.password) {
                alert('Please fill in both username and password.');
            } else {
                const credentials = {
                    username: this.form.username,
                    password: this.form.password,
                };

                this.login(credentials)
                    .then((user) => {
                        // Set the loggedInUser upon successful login
                        this.$store.dispatch('auth/setLoggedInUser', user);
                        console.log('User data in LogIn component:', user);

                        // Save the username to the Vuex store
                        this.$store.dispatch('setLoggedInUser', user.username);

                        // Navigate to 'alertlogin' with the user's data
                        this.$router.push({
                            path: '/alertlogin',
                            query: { username: user.username },
                        });
                    })
                    .catch(() => {
                        alert('Login failed. Please check your credentials.');
                    });

            }
        },
    },
}
</script>

<style></style>
