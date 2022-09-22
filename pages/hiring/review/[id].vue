<template>
    <div class=" justify-between bg-gray-200">
        <header class="fixed top-0 w-full px-10 py-6 flex justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <ul class="end-link gap-4 flex items-center">
                <li class="">
                    <c-button size="medium" @click="handleSubmitReview" :loading="loadingSubmitReview">Done</c-button>
                </li>
            </ul>
        </header>

        <main class="pt-24 bg-gray-200">
            <div class="bg-gray-200">
                <div class="bg-[#D9D9D9] w-10 h-10 grid justify-center items-center rounded-full left-[20px] top-[50%] cursor-pointer fixed"
                    @click="handleClickLeft">
                    <left-icon></left-icon>

                </div>
                <div class="bg-[#D9D9D9] w-10 h-10 grid justify-center items-center rounded-full right-[20px] top-[50%] cursor-pointer fixed"
                    @click="handleClickRight">
                    <right-icon></right-icon>
                </div>
                <div class="">
                    <developer :developer="computedCurrentDeveloper" v-if="!loading && currentDeveloper"
                        :review="currentReview" class="w-[80%]" @skills-github="setCurrentSkillsGithub" />
                    <div class="flex justify-center my-10 items-center" v-if="loading">
                        <LoaderIcon :size="50" color="#d53a9d" />
                    </div>
                </div>

            </div>
        </main>

        <footer class="fixed bottom-0 w-full py-6 bg-black font-monts">
            <!-- {{currentRatingGiven}} -->
            <ul class="flex justify-center gap-6">
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 0? 'block':'hidden'"></div>
                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(0)">
                            <span class="font-bold text-2xl">
                                <wrong-icon></wrong-icon>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 4? 'block':'hidden'"></div>
                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(4)">
                            <span class="font-bold text-2xl">4</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 5? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(5)">
                            <span class="font-bold text-2xl">5</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 6? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(6)">
                            <span class="font-bold text-2xl">6</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 7? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(7)">
                            <span class="font-bold text-2xl">7</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 8? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(8)">
                            <span class="font-bold text-2xl">8</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 9? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(9)">
                            <span class="font-bold text-2xl">9</span>
                        </div>
                    </div>
                </li>
                <li class="" :class="currentSkillsGithub ? 'cursor-pointer' : 'cursor-not-allowed'">
                    <div class="relative">
                        <div class="w-3 h-3 rounded-full absolute bg-white right-1 top-0"
                            :class="currentReviewNumGiven == 10? 'block':'hidden'"></div>

                        <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center"
                            @click="handleNumberClick(10)">
                            <span class="font-bold text-2xl">
                                <mark-icon></mark-icon>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </footer>
    </div>

</template>
  
<script setup lang="ts">
import LoaderIcon from '../../../components/UI/svgs/loader-icon.vue'
import Developer from '../../../components/Profile/developer.vue'
import MarkIcon from '../../../components/icons/mark-icon.vue'
import LeftIcon from '../../../components/icons/left-icon.vue'
import RightIcon from '../../../components/icons/right-icon.vue'
import CButton from '../../../components/UI/forms/c-button.vue'
import WrongIcon from '../../../components/icons/wrong-icon.vue'
import useFormRequest from '~/composables/useFormRequest'
import axios from "axios"
import { useHireStore } from "../../../store/hire"

let store = useHireStore()

let route = useRoute()
let router = useRouter()
// interface Props {
//     testArray: string[];
//     skills: string[];
// }

// let props = defineProps<Props>()
console.log(useRoute().params)
console.log(useRoute().query)

// let loadingProfile = ref(true)
// // let baseURL = "https://hiree-server.herokuapp.com/"
// let baseURL = "http://localhost:7000/"
// let applicationError = ref(null)
// let profile = ref(null)
// let token = localStorage.getItem("USER_AUTH_TOKEN");
// async function getData() {
//     console.log(`${baseURL}api/hire/`)
//     try {
//         loadingProfile.value = true
//         let response = await axios.get(`${baseURL}api/jobs/:id`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//             params: {
//                 id: id
//             }
//         })
//         console.log(response)
//         // return response.data
//         loadingJob.value = false
//         job.value = response.data[0]
//     } catch (error) {
//         loadingJob.value = false
//         console.log(error)
//     }
// }
// getData()
let routeParam = useRoute().path.split('/')[3]
let routeQuery = useRoute().path.split('/')[4]

let currentReviewNumGiven = ref(null)
let computedRouteQuery = computed(() => {
    return routeQuery
})
let currentDeveloper = ref(null)
let currentDeveloperId = ref(null)
let currentReview = ref(null)
let currentSkillsGithub = ref(null)
let testArr = ref([])
let currentRatingGiven = computed(() => {
    if (process.client) {
        if (JSON.parse(localStorage.getItem("REVIEW_DETAILS"))) {
            let arrRev = JSON.parse(localStorage.getItem("REVIEW_DETAILS"))
            let testRes = arrRev.map(rev => rev.devId).indexOf(computedRouteQuery.value)
            console.log({ arrRev })
            return arrRev[testRes]
        } return null
    }
})
console.log(currentRatingGiven.value)
onMounted(() => {
    currentReviewNumGiven.value = currentRatingGiven.value ? currentRatingGiven.value.rating : null
})
// let currentRatingGivenNum = computed(() => {
//     switch (currentRatingGiven.value.rating) {
//         case 0:
//             return 0;
//         case "1":
//             return 1;
//         case "2":
//             return 2;
//         case 
//     }
// })
let { submitData, loading, data } = useFormRequest(
    "api/hire/review/get-profile",
    true,
    null,
    { routeParam, routeQuery },
    (data) => {
        if (data) {
            let currentReviewGoingOn = JSON.parse(localStorage.getItem("CURRENT_REVIEW"))
            console.log({ currentReviewGoingOn })
            let crv: object[] = JSON.parse(localStorage.getItem("REVIEW_DETAILS"))
            let redCRV = []
            if (crv) {
                redCRV = crv.pop().devId
            }
            if (!routeQuery) {
                if (currentReviewGoingOn.currentReview === routeParam) {
                    console.log("this is the current review you have been doing")
                    console.log(redCRV)
                    useRouter().push(`/hiring/review/${routeParam}/${redCRV}`)
                } else {
                    useRouter().push(`/hiring/review/${routeParam}/${data.data.review[0].developer_array[0].id}`)

                }
            }
            currentDeveloper.value = data.data.developer[0]
            currentReview.value = data.data.review[0]
            currentDeveloperId.value = currentReview.value.developer_array.map(developer => developer.id).indexOf(computedRouteQuery.value)
        }
    },
    (error) => {
        console.log(error)
        // loginError.value = error.response.data.error;
    }
);
let computedCurrentDeveloper = computed(() => {
    return currentDeveloper.value
})
let initialData = ref([])
onMounted(() => submitData())
function setCurrentSkillsGithub(newSkills) {
    currentSkillsGithub.value = newSkills
}
function handleClickRight() {
    if (currentDeveloperId.value < currentReview.value.developer_array.map(developer => developer.id).length - 1) {
        currentDeveloperId.value++
        useRouter().push(`/hiring/review/${routeParam}/${currentReview.value.developer_array.map(developer => developer.id)[currentDeveloperId.value]}`)

    }
}
function handleClickLeft() {
    if (currentDeveloperId.value > 0) {
        currentDeveloperId.value--
        useRouter().push(`/hiring/review/${routeParam}/${currentReview.value.developer_array.map(developer => developer.id)[currentDeveloperId.value]}`)

    }
}
let ratedDet = reactive({
    rating: 0,
    devId: "",
    github: null,

})
let currentReviewFromStore = ref('')
onMounted(() => {
    store.changeCurrentReview(routeParam)
    initialData.value = store.reviewDetails
    currentReviewFromStore.value = store.currentReview
})
let currentDeveloperTheyRated = computed(() => {
    if (currentReviewFromStore.value === routeParam) {
        let crv: object[] = JSON.parse(localStorage.getItem("REVIEW_DETAILS"))
        return crv.pop().devId
    }
    return routeQuery
})
console.log({ currentDeveloperTheyRated })
let currentReviewHiring = reactive({
    currentReview: routeParam,
    currentDeveloper: currentDeveloperTheyRated.value
})
function handleNumberClick(num) {
    // if(!currentSkillsGithub.value) return
    currentReviewNumGiven.value = num
    store.changeReviewDetails({
        rating: num,
        devId: routeQuery,
        githubExplength: currentSkillsGithub.value ? currentSkillsGithub.value.length : 0,
    })

}
// function handleMarkClick(){

// }

let computedReview = computed(() => {
    return store.reviewDetails
})
let reviewDetails = computedReview.value
let { submitData: submitReview, loading: loadingSubmitReview } = useFormRequest(
    "api/hire/review/submit-review",
    true,
    null,
    { routeParam, reviewDetails },
    (data) => {
        if (data) {
            useRouter().push(`/hiring/review/result/${routeParam}`)
        }
    },
    (error) => {
        console.log(error)
        // loginError.value = error.response.data.error;
    }
);
function handleSubmitReview() {
    submitReview()

}

watchEffect(() => {
    console.log("Things are changing", currentReviewHiring)
    localStorage.setItem("CURRENT_REVIEW", JSON.stringify(currentReviewHiring))
})

</script>
  
<style scoped>

</style>
  