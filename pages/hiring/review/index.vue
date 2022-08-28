<template>
    <div class=" h-screen justify-between bg-red-200">
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
                <profile class="w-[80%] bg-gray-100" />
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
import WrongIcon from '../../../components/icons/wrong-icon.vue'
import MarkIcon from '../../../components/icons/mark-icon.vue'
import LeftIcon from '../../../components/icons/left-icon.vue'
import RightIcon from '../../../components/icons/right-icon.vue'
import FormError from '../components/UI/form-error.vue'
import Profile from '../../../components/Profile/developer.vue'
import CButton from '../../../components/UI/forms/c-button.vue'
import useFormRequest from '../composables/useFormRequest'
let createJobError = ref(null)
let formReactive = reactive({
    companyName: {
        value: null,
        error: null
    },
    workModel: {
        value: null,
        error: null
    },
    title: {
        value: null,
        error: null
    },
    description: {
        value: null,
        error: null
    },
    location: {
        value: null,
        error: null
    },
    skills: {
        value: null,
        error: null
    }
})

</script>

<style scoped>
</style>