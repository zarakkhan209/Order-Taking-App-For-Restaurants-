import {createWebHistory,createRouter} from 'vue-router';
import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import MenuOne from './components/MenuOne.vue';
import SignUp from './components/SignUp.vue';
import AlertLogIn from './components/AlertLogIn';
import AlertPlaceOrder from './components/AlertPlaceOrder';
import OrderPage from './components/OrderPage';
import OrderedItems from './components/OrderedItems';


const routes=[
    {
        name:'HomePage',
        path:'/',
        component: HomePage
    },
    {
        name:'LogIn',
        path:'/login',
        component: LogIn
    },
    {
        name:'MenuOne',
        path:'/menuone',
        component: MenuOne
    },
    {
        name:'SignUp',
        path:'/signup',
        component: SignUp
    },
    {
        name:'AlertLogIn',
        path:'/alertlogin',
        component: AlertLogIn
    },
    {
        name:'AlertPlaceOrder',
        path:'/alertplaceorder',
        component: AlertPlaceOrder
    },
    {
        name:'OderPage',
        path:'/order',
        component: OrderPage
    },
    {
        name:'OrderedItems',
        path:'/ordereditems',
        props: true,
        component: OrderedItems
    }
];


const router =createRouter({
    history:createWebHistory(),
    routes
});
export default router;