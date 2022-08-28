<template>
    <div class="">
    <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
        <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
        <router-link to="" class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-3 rounded">
            Create Job Post
        </router-link>
    </nav>

    <div class="flex relative h-screen px-[15px] py-[20px] lg:px-[210px] items-start mb-12 flex-col screen font-monts">

        <h1 class="font-semibold  text-3xl mt-9">Choose the best from list</h1>

        <div class="grid lg:flex lg:justify-between  shadow-lg bg-white mb-12 w-full px-[4px] py-[60px] lg:px-10 border border-gray-500 mt-5 rounded">

            <div class="text-center lg:text-left mb-12">
                <h1 class="text-2xl  tracking-wide font-bold">6:</h1>
                <h1 class="text-blue-500 text-xl">Zainab Tijani</h1>
                <h3>Lagos, Nigeria, Experience: 3 years</h3>
            </div>

            <div class="flex flex-col gap-3">
                <c-button type="pry rounded-lg" :loading="loading" @click="submitHandler">Select
                </c-button>
                <router-link to="" class="cursor-pointer border text-center border-red-700 font-medium font-monts-alt text-md md:block p-3 rounded">
                    View
                </router-link>
            </div>
        </div>

        <div class="grid lg:flex lg:justify-between  shadow-lg bg-white mb-12 w-full px-[4px] py-[60px] lg:px-10 border border-gray-500 mt-5 rounded">

            <div class="text-center lg:text-left mb-12">
                <h1 class="text-2xl  tracking-wide font-bold">9:</h1>
                <h1 class="text-blue-500 text-xl">Zainab Tijani</h1>
                <h3>Lagos, Nigeria, Experience: 3 years</h3>
            </div>

            <div class="flex flex-col gap-3">
                <c-button type="pry rounded-lg" :loading="loading" @click="submitHandler">Select
                </c-button>
                <router-link to="" class="cursor-pointer border text-center border-red-700 font-medium font-monts-alt text-md md:block p-3 rounded">
                    View
                </router-link>
            </div>
        </div>


 
            <c-button type="pry rounded-lg" :loading="loading" @click="submitHandler" size="big">Choose random
        </c-button>
    
        

    </div>




</div>
</template>

<script setup lang="ts">
import CButton from '../../../../components/UI/forms/c-button.vue'
let createJobError = ref(null)
let skill = reactive({
    value: null,
    error: null,
})
let formReactive = reactive({
    companyName: {
        value: null,
        error: null
    },
    workModel: {
        value: "",
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
    jobLocationType: {
        value: "",
        error: null
    },
    skills: {
        value: null,
        error: null
    }
})

let validate = () => {
    if (formReactive.companyName.value == null || formReactive.companyName.value.trim() == "") {
        formReactive.companyName.error = "Company name is required";
    }
    else {
        formReactive.companyName.error = null;
    }
    if (formReactive.workModel.value == null || formReactive.workModel.value.trim() == "") {
        formReactive.workModel.error = "Work model is required";
    }
    else {
        formReactive.workModel.error = null;
    }
    if (formReactive.title.value == null || formReactive.title.value.trim() == "") {
        formReactive.title.error = "Title is required";
    }
    else {
        formReactive.title.error = null;
    }
    if (formReactive.description.value == null || formReactive.description.value.trim() == "") {
        formReactive.description.error = "Description is required";
    }
    else {
        formReactive.description.error = null;
    }
    if (formReactive.jobLocationType.value == null) {
        formReactive.jobLocationType.error = "Location is required";
    }
    else {
        formReactive.jobLocationType.error = null;
    }
    if (formReactive.skills.value == null) {
        formReactive.skills.error = "Skills is required";
    }
    else {
        formReactive.skills.error = null;
    }
    for (let key in formReactive) {
        if (formReactive[key].error != null) {
            return false;
        }
        return true
    }

}
let skills = reactive([])

function addSkill() {
    skills.push(skill.value)
    skill.value = null
    formReactive.skills.value = skills
}
function removePill(index) {
    skills.splice(index, 1)
}
let { submitForm, loading, data } = useFormRequest(
    "api/hire/create-job",
    true,
    formReactive,
    null,
    (data) => {
        console.log(data)
        if (data) {
            console.log(data.data.token)
            useRouter().push("/profile");
        }

    },
    (error) => {
        console.log(error)
        createJobError.value = error.response.data.error;
    }
);
let submitHandler = () => {
    validate();
    console.log({ formReactive });

    if (validate()) {
        submitForm()
    }
};
</script>

<style scoped>
.required:after {
    content: "*";
    color: red
}
</style>