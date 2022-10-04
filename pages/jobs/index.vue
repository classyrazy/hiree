<template>
    <div class="bg-white">
        <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <!-- <div class="flex gap-4 items-center"> -->
            <router-link v-if="computedUserIdFromStore" :to="`/developers/${computedUserIdFromStore}`" >
                <c-button size="medium" type="b-pry-grad">View Profile</c-button>
            </router-link>
            <!-- </div> -->
        </nav>
        <div class="w-[80%] mx-auto">
            <h2 class="text-2xl font-monts text-dark font-semibold">Jobs Available</h2>
            <form>
            <c-input type="search" class="mt-4"  full styleType="white" placeholder="Search for jobs with skills e.g react " :value="searchJobValue"></c-input>
            </form>
            <div class="my-10 max-w-5xl mx-auto ">
                <div class="max-w-5xl mx-auto " v-if="computedJobs">
                    <job-hire v-for="job in computedJobs" :details="job" :type="job"></job-hire>
                </div>
                <div class="flex flex-col justify-center my-10 items-center"
                    v-if="!loading && computedJobs.length === 0">
                    <h2 class="font-monts text-xl fext-semibold">No Job with the skill {{searchJobValue.value}}</h2>
                    <p>Try again later</p>
                </div>
                <div class="flex justify-center my-10 items-center" v-if="loading">
                    <LoaderIcon :size="50" color="#d53a9d" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CInput from '../../components/UI/forms/c-input.vue'
import CButton from '../../components/UI/forms/c-button.vue'
import LoaderIcon from '../../components/UI/svgs/loader-icon.vue'
import JobHire from '../../components/UI/job-hire.vue'
import {useUserStore} from '../../store/user'
import axios from "axios"
 

let baseURL = "https://hiree-server.herokuapp.com/"
// let baseURL = "http://localhost:7000/"
let loading = ref(true)
let jobs = ref([])
let store = useUserStore()
let computedUserIdFromStore = computed(() => {
    if(store.user){
        return store.user.dev_profile_id
    }
    return null
})
let searchJobValue = reactive({
    value: null,
    error: null
})
let token = localStorage.getItem("USER_AUTH_TOKEN");
async function getData() {
    try {
        loading.value = true
        let response = await axios.get(`${baseURL}api/hire/jobs/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        loading.value = false
        jobs.value = response.data
    } catch (error) {
        loading.value = false
        console.log(error)
    }
}
getData()
// async function
let computedJobs = computed(() => {
    if(searchJobValue.value) {
        return jobs.value.filter(job => {
            return job.skills.some(skill => {
                return skill.toLowerCase().includes(searchJobValue.value.toLowerCase())
            })
        })
    }
    return jobs.value
})
store.checkIfUserIsLoggedIn()

// onMounted(() => {
    // companyJobs.value = getData()
// })
</script>

<style scoped>
</style>