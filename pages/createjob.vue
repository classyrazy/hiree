<template>
    <div>
    <nav class="flex px-[15px] py-[20px] lg:px-[210px] justify-between items-center ">
        <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
        <router-link to="" class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-4 rounded">

            Find developers

        </router-link>
    </nav>

    <div class="flex relative h-screen px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col screen">

        <h1 class="font-semibold  text-3xl mt-9">Create A Job Post</h1>
        <p class="text-xl font-medium mt-5 text-gray-500 tracking-normal">Creating a job post gives you a ledge to share a link of your open position to any platform of your choice</p>

        <div class="block  mt-5">
            <form class="mb-12">

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                    <div class="form-group">
                        <h1 class="tracking-normal min-w-[78px] min-h-[17px]">Company name</h1>
                        <c-input type="text" class="form-control
          w-full
          pr-40
         text-medium rounded-lg" full styleType="white" placeholder="Enter your company name"></c-input>
                    </div>
                    <div class="form-group">
                        <h1 class="tracking-normal">Work Model</h1>
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
                        <h1 class="tracking-normal">Job title</h1>
                        <c-input type="text" class="form-control
          pr-40
          w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your job title"></c-input>
                    </div>

                    <div class="form-group">
                        <h1 class="tracking-normal">Job Location</h1>
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

                </div>


                <div class="form-group mb-6">
                    <h1 class="tracking-normal">Job Description</h1>
                    <textarea class="form-control
          p-20
          lg:w-[70%] w-full
         text-medium rounded-lg border" full styleType="white" placeholder="Enter the job description (about job, requirements, salary) "></textarea>
                </div>

                <div class="form-group mb-6">
                    <c-input type="text" class="form-control
          pr-40
          lg:w-[70%] w-full 
         text-medium rounded-lg" full styleType="white" placeholder="Enter your skills you are looking for"></c-input>
                </div>

                <c-button type="pry rounded-lg" size="big">Create Job</c-button>

            </form>
        </div>

    </div>
</div>
</template>

<script setup lang="ts">
import CButton from '../components/UI/forms/c-button.vue'
import CInput from '../components/UI/forms/c-input.vue'

</script>

<style>

</style>