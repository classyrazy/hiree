<template>
    <div>
        <div class="flex relative px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col font-monts">
            <router-link to="/" class="ml-1"><img src="/logo.svg" alt="logo"></router-link>
            <h1 class="font-semibold text-xl md:text-3xl mt-9">Find developers to hire</h1>
            <p class="text-sm md:text-lg font-medium mt-5 text-gray-500 tracking-normal">Select at least one skill</p>

            
            <div class="skills-items col-lg-6">

                <!-- skills list -->
               
            </div>

        <div class="mb-12 " >
            <div class="form-group mb-6">
                        <h1 class="tracking-normal required">Skills</h1>
                        <c-input type="text" class="" full styleType="white" placeholder="Enter your skills"
                            :value="skill" @keypress.enter="addSkill">
                        </c-input>
                        <p class="text-[red]">{{formReactive.skills.error}}</p>
                        <div class="flex gap-2 flex-wrap mt-2" v-if="skills">
                            <input-pills v-for="(arrSkill, idx) in skills" :pill-text="arrSkill" :key="idx" @remove-pill="removePill(idx)"></input-pills>
                        </div>
                    </div>
            </div>
            <div class="flex gap-4">
                <c-button type="pry rounded-lg" size="big" :loading="loading" @click="submitHandler">Continue</c-button>
                <div class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-4 rounded">Create A Job Post</div>
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
let skill = reactive({
    value: null,
    error: null,
})

let formReactive = reactive({
    skills: {
        value: null,
        error: null
    },
})

let skillsItems = reactive([
       '../../components/UI/svgs/loader-icon.vue'
    
    
])

let skills = reactive([])
// let computedSkills = computed(() => {

// })

function addSkill(){
    skills.push(skill.value)
    skill.value = null
    formReactive.skills.value = skills
}
function removePill(index){
    skills.splice(index, 1)
}



</script>

<style scoped>
.required:after{
    content: "*";
    color:red
}
</style>