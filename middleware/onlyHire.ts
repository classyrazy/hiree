import { useUserStore } from "../store/user"
import axios from "axios"
export default defineNuxtRouteMiddleware(async (to, from) => {
    let store  = useUserStore()
    let baseURL = "https://hiree-server.herokuapp.com/"
    // let baseURL = "http://localhost:7000/"
    if(store.user){
        if(store.user.type === "hiring-manager"){
            store.isHiringManager = true
            return
        }else{
            return "/jobs"
        }
    }
    let userDataFetched = null
    try {
        let response = await axios.get(`${baseURL}api/user/get-user`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("USER_AUTH_TOKEN")}`
            }
        })
        if (response.data) {
            userDataFetched = response.data.user
            // console.log("userDataFetched", userDataFetched)
            if(userDataFetched.type === "hiring-manager"){
                store.isHiringManager = true
            }else{
                return "/jobs"
            }
        }
    } catch (error) {
        // console.log("error", error)
        return "/jobs"
    }
})

