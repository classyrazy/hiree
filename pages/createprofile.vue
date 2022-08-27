<template>
    <div>
    <div class="flex relative h-screen px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col screen">
        <router-link to="/" class="ml-1"><img src="/logo.svg" alt="logo"></router-link>
        <h1 class="font-semibold  text-3xl mt-9">Create your Developer Profile</h1>
        <p class="text-xl font-medium mt-5 text-gray-500 tracking-normal">Hiree suggests your developer profile to hiring managers and they contact you based on your qualifications</p>

        <div class="block  mt-5">
             <formError :error-msg="createProfileError" @close-error="createProfileError = null"></formError>
            <form class="mb-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-36">
                    <div class="form-group mb-6">
                        <h1 class="tracking-normal min-w-[78px] min-h-[17px]">First Name</h1>
                        <c-input type="text" class="form-control 
          w-full
          pr-40
         text-medium rounded-lg" full styleType="white" placeholder="Enter your first name" :value="formReactive.firstname"></c-input>
                    </div>
                    <div class="form-group mb-6">
                        <h1 class="tracking-normal">Last Name</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your last name" :value="formReactive.lastname"></c-input>
                    </div>
                </div>

                <div class="form-group mb-6">
                    <h1 class="tracking-normal">About you</h1>
                    <textarea class="form-control
          p-20
          lg:w-[70%] w-full
         text-medium rounded-lg border" full styleType="white" placeholder="tell us a little bit about yourself" ></textarea>
                </div>

                <div class="form-group mb-6">
                    <h1 class="tracking-normal">Skills</h1>
                    <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your skills" :value="formReactive.skills"></c-input>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                    <div class="form-group">
                        <h1 class="tracking-normal min-w-[78px] min-h-[17px]">Preferred Work Model</h1>
                        <select class="form-control 
          w-full
          pr-40
          border
          p-4
         text-medium rounded-lg">
                            <option value="full time">Full Time</option>
                            <option value="part time">Part Time</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <h1 class="tracking-normal">Preferred Job Location</h1>
                        <select class="form-control
          w-full
          pr-40
          border
          p-4
         text-medium rounded-lg">
                            <option value="volvo">Remote</option>
                            <option value="saab">Hybrid</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <h1 class="tracking-normal">Github</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your github username" :value="formReactive.username"></c-input>
                    </div>

                    <div class="form-group">
                        <h1 class="tracking-normal">Years of Experience</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your years of experience" :value="formReactive.experience"></c-input>
                    </div>

                </div>

                <div class="form-group mb-6">
                    <h1 class="tracking-normal">Portfolio Link</h1>
                    <c-input type="text" class="form-control
          pr-40
          lg:w-[70%] w-full
         text-medium rounded-lg" full styleType="white" placeholder="add portfolio link" :value="formReactive.portfolio"></c-input>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                    <div class="form-group">
                        <h1 class="tracking-normal min-w-[78px] min-h-[17px]">Twitter</h1>
                        <c-input type="text" class="form-control
          w-full
          pr-40
         text-medium rounded-lg" full styleType="white" placeholder="Enter your twitter link" :value="formReactive.twitter"></c-input>
                    </div>
                    <div class="form-group">
                        <h1 class="tracking-normal">LinkedIn</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your linkedin link" :value="formReactive.linkedin"></c-input>
                    </div>

                    <div class="form-group">
                        <h1 class="tracking-normal">Email</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your email" :value="formReactive.email"></c-input>
                    </div>

                    <div class="form-group">
                        <h1 class="tracking-normal">Github</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your github link" :value="formReactive.github"></c-input>
                    </div>

                </div>

                <div class="form-group mb-6">
                    <h1 class="tracking-normal">Add your CV</h1>
                    <input type="file" class="form-control
           w-[50%]
          border
          p-4
         text-medium rounded-lg" full styleType="white" placeholder="Upload your resume" :value="formReactive.file">
                </div>

                <c-button type="pry rounded-lg" size="big" :loading="loading">Create Job</c-button>

            </form>
        </div>

    </div>
</div>
</template>

<script setup lang="ts">
import FormError from '../components/UI/form-error.vue'
import CButton from '../components/UI/forms/c-button.vue'
import CInput from '../components/UI/forms/c-input.vue'
import useFormRequest from '../composables/useFormRequest'
let createProfileError = ref(null)
let formReactive  = reactive({
    firstname: {
        value: null,
        error: null
    },
    lastname: {
        value: null,
        error: null
    },
    about: {
        value: null,
        error: null
    },
    skills: {
        value: null,
        error: null
    },
    workmodel: {
        value: null,
        error: null
    },
    location: {
        value: null,
        error: null
    },
    username: {
        value: null,
        error: null
    },
    experience: {
        value: null,
        error: null
    },
    portfolio: {
        value: null,
        error: null
    },
    twitter: {
        value: null,
        error: null
    },
    linkedin: {
        value: null,
        error: null
    },
    email: {
        value: null,
        error: null
    },
    github: {
        value: null,
        error: null
    },
    file: {
        value: null,
        error: null
    },
})




</script>

<style>

</style>