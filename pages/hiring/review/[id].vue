<template>
    <div class=" h-screen justify-between bg-gray-200">
        <header class="fixed top-0 w-full px-10 py-6 flex justify-between items-center">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <ul class="end-link gap-4 flex items-center">
                <li class="">
                    <router-link to="/signup">
                        <c-button size="medium">Done</c-button>
                    </router-link>
                </li>
            </ul>
        </header>

        <main class="pt-24 bg-gray-100">
            <div class="">
                <div
                    class="bg-[#D9D9D9] w-10 h-10 grid justify-center items-center rounded-full left-[20px] top-[50%] cursor-pointer fixed">
                    <left-icon></left-icon>

                </div>
                <div
                    class="bg-[#D9D9D9] w-10 h-10 grid justify-center items-center rounded-full right-[20px] top-[50%] cursor-pointer fixed">
                    <right-icon></right-icon>
                </div>
                <developer class="w-[80%] bg-gray-100" />
            </div>
        </main>

        <footer class="fixed bottom-0 w-full py-6 bg-black font-monts">

            <ul class="flex justify-center gap-6">
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">
                            <wrong-icon></wrong-icon>
                        </span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">4</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">5</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">6</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">7</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">8</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">9</span>
                    </div>
                </li>
                <li class="cursor-pointer">
                    <div class="w-14 h-14 bg-[#D9D9D9] rounded-full grid justify-center items-center">
                        <span class="font-bold text-2xl">
                            <mark-icon></mark-icon>
                        </span>
                    </div>
                </li>
            </ul>
        </footer>
    </div>

</template>
  
  <script setup lang="ts">
import Developer from '../../../components/Profile/developer.vue'
import MarkIcon from '../../../components/icons/mark-icon.vue'
import LeftIcon from '../../../components/icons/left-icon.vue'
import RightIcon from '../../../components/icons/right-icon.vue'
import CButton from '../../../components/UI/forms/c-button.vue'
import WrongIcon from '../../../components/icons/wrong-icon.vue'
import useFormRequest from '~/composables/useFormRequest'
import axios from "axios"



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
let routeParam = useRoute().params.id
let routeQuery = useRoute().query.user_id
let computedRouteQuery = computed(() => {
    return routeQuery
}) 

let { submitData, loading, data } = useFormRequest(
    "api/hire/review/get-profile",
    true,
    null,
    { routeParam, routeQuery },
    (data) => {
        if (data) {
            console.log(data)
            console.log(computedRouteQuery.value)
            if(!computedRouteQuery.value){
                useRouter().push(`/hiring/review/${routeParam}?user_id=${data.data[0].developer_array[0].id}`)
            }
        }
    },
    (error) => {
        console.log(error)
        // loginError.value = error.response.data.error;
    }
);
console.log(computedRouteQuery.value)
onMounted(() => submitData())
</script>
  
  <style scoped>
  </style>
  