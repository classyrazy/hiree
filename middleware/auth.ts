import { useRouter, useRoute } from "vue-router"
import { useUserStore } from "../store/user"
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useUserStore()
    store.checkIfUserIsLoggedIn()

    if(store.isAuthenticated){
        return
    }else{
        return "/login"
    }
})
