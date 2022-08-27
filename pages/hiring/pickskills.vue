<template>
    <div>
        <div class="flex relative px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col font-monts">
            <router-link to="/" class="ml-1"><img src="/logo.svg" alt="logo"></router-link>
            <h1 class="font-semibold text-xl md:text-3xl mt-9">Find developers to hire</h1>
            <p class="text-sm md:text-lg font-medium mt-5 text-gray-500 tracking-normal">Select at least one skill</p>

            
            <div class="skills-items col-lg-6">

                <!-- skills list -->
                <ul v-staggerdelay="50">
                  <li tabindex="0"
                    v-for="skill in skillsItems"
                    :key="skill">
                    <div class="skill-icon">
                      {{skill}}
                      
                     
                     </div>
                  </li>
                 
                </ul>
            </div>

            
        </div>
    </div>
</template>

<script setup lang="ts">
import FormError from '../../components/UI/form-error.vue'
import InputPills from '../../components/UI/input-pills.vue'
import CButton from '../../components/UI/forms/c-button.vue'
import CInput from '../../components/UI/forms/c-input.vue'
import useFormRequest from '../../composables/useFormRequest'


let skillsItems = reactive([
       '../../components/UI/svgs/loader-icon.vue'
    
    
])

let skills = reactive([
    
])
// let computedSkills = computed(() => {

// })





</script>

<style scoped>
.required:after{
    content: "*";
    color:red
}
</style>