import { defineStore } from "pinia";
import { ref, reactive, watch, computed } from "vue";
import axios from "axios"

export const useUserStore = defineStore("user", () => {
    let baseURL = "https://hiree-server.herokuapp.com/"
    // let baseURL = "http://localhost:7000/"
    let loadingUser = ref(false)
    let user = ref(null)
    let isAuthenticated = ref(true)
    let isHiringManager = ref(false)
    let isDeveloper = ref(false)
    async function getData() {
        let token = localStorage.getItem("USER_AUTH_TOKEN") || null;
        let computedToken = computed(() => token);
        // console.log("getting data", computedToken.value, isAuthenticated.value, "isDev", isDeveloper.value, "isHire", isHiringManager.value)
        if (!computedToken.value) {
            // console.log("no token")
            isAuthenticated.value = false
            return
        } else if (!token && user.value) {
            // console.log("no token but user")
            isAuthenticated.value = false
            return
        }
        else if (user.value) {
            // console.log("user already exists", user.value)
            isAuthenticated.value = true
            return
        }
        try {
            loadingUser.value = true
            let response = await axios.get(`${baseURL}api/user/get-user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingUser.value = false
            if (response.data) {
                user.value = response.data.user
                isAuthenticated.value = true
                // console.log("getting data from try catch", user.value, isAuthenticated.value)
            }
        } catch (error) {
            console.log(error)
            isAuthenticated.value = false

        }
    }
    async function checkIfUserIsLoggedIn() {
        await getData()

    }
    async function fetchUserData() {
        let userDataFetched = null
        try {
            let response = await axios.get(`${baseURL}api/user/get-user`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("USER_AUTH_TOKEN")}`
                }
            })
            if (response.data) {
                userDataFetched = response.data.user
            }
        }catch{
            userDataFetched = null
        }
        return userDataFetched
    }
    async function checkIfUserIsHiring() {
        if (!user.value) {
            user.value = await fetchUserData()
        }
        if (user.value) {
            // console.log("user is hiring", user.value)       
            if (user.value.type === "hiring-manager") {
                isHiringManager.value = true
            } else {
                isHiringManager.value = false
            }
        }

        // console.log("checkIfUserIsHiring", user.value, isHiringManager.value)

    }
    async function checkIfUserIsDeveloper() {
        if (!user.value) {
            // console.log(" no user already fetching")
            getData()
        }
        if (user.value) {
            if (user.value.type === "developer") {
                isDeveloper.value = true
            } else {
                isDeveloper.value = false
            }
        }

        // console.log("checkIfUserIsDeveloper", user.value, isDeveloper.value)
    }
    return {
        user,
        checkIfUserIsLoggedIn,
        isAuthenticated,
        isHiringManager,
        checkIfUserIsHiring,
        isDeveloper,
        checkIfUserIsDeveloper
    }
})