<template>
    <div class="justify-between bg-gray-200">
        <header class="fixed top-0 w-full px-4 md:px-10 py-6 flex justify-between items-center bg-gray-200">
            <router-link to="/hiring"><img src="/logo.svg" alt="logo"></router-link>
            <ul class="end-link gap-4 flex items-center">
                <router-link to="/jobs">
                    <li class="">
                        <c-button size="medium">Apply for jobs
                        </c-button>
                    </li>
                </router-link>
            </ul>
        </header>
        <formError :error-msg="devProfileError" @close-error="devProfileError = null" class="center-middle"></formError>

        <div class="">
            <Developer :developer="devProfile" type="profile" v-if="devProfile" class="w-full mt-10"
                :show-contact="false" />
            <div class="center-middle" v-else-if="!devProfile && !loadingProfile">
                <h2 class="text-xl">You don't have any profile yet</h2>
                <router-link to="/devlopers/create-profile">
                    <c-button size="medium" type="b-pry-grad">Create profile</c-button>
                </router-link>
            </div>
            <div class="center-middle" v-if="loadingProfile">
                <LoaderIcon :size="50" color="#d53a9d" />
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import LoaderIcon from '../../components/UI/svgs/loader-icon.vue'
import CButton from '../../components/UI/forms/c-button.vue'
import Developer from '../../components/Profile/developer.vue'
import axios from "axios"

definePageMeta({
    middleware: ['auth', 'only-dev'],
})

let baseURL = "https://hiree-server.herokuapp.com/"
let devProfile = ref(null)
let devProfileError = ref(null)
let token = localStorage.getItem("USER_AUTH_TOKEN");
let loadingProfile = ref(true)
let routeParam = useRoute().params.id

// let baseURL = "http://localhost:7000/"
async function getData() {
    try {
        loadingProfile.value = true
        let response = await axios.get(`${baseURL}api/user/get-developer/${routeParam}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        // return response.data
        if (response.data.user) {
            devProfile.value = response.data.user
        }
    } catch (error) {
        console.log(error)
        devProfileError.value = error.response.data.error
    } finally {
        loadingProfile.value = false
    }
}
getData()

</script>

<style scoped>
.center-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>