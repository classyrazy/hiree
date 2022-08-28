<template>
    <div>
        <div class="flex relative px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col font-monts">
            <router-link to="/" class="ml-1"><img src="/logo.svg" alt="logo"></router-link>
            <h1 class="font-semibold text-xl md:text-3xl mt-9 lg:pt-[47px]">Create your Developer Profile</h1>
            <p class="text-sm md:text-lg font-medium mt-5 text-gray-500 tracking-normal">Hiree suggests your developer
                profile to
                hiring managers and they contact you based on your qualifications</p>

            <div class="block  mt-5">
                <div class="mb-12 w-full" >
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-36">
                        <div class="form-group mb-6">
                            <h1 class="tracking-normal min-w-[78px] min-h-[17px] required">First Name</h1>
                            <c-input type="text" class=" " full styleType="white" placeholder="Enter your first name"
                                :value="formReactive.firstname"></c-input>
                        </div>
                        <div class="form-group mb-6">
                            <h1 class="tracking-normal required">Last Name</h1>
                            <c-input type="text" class="" full styleType="white" placeholder="Enter your last name"
                                :value="formReactive.lastname"></c-input>
                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <h1 class="text-xl md:text-2xl font-semibold mb-6">About you</h1>
                        <div class="form-group flex flex-col">
                            <label class="tracking-normal required">Who are you</label>
                            <textarea class=" p-4 lg:w-[70%] h-[150px] w-full text-medium rounded-lg border my-2"
                                placeholder="tell us a little bit about yourself" id="who-are-you" v-model="formReactive.whoAreYou.value"></textarea>
                                <p class="text-[red]" v-if="formReactive.whoAreYou.error">{{formReactive.whoAreYou.error}}</p>
                        </div>
                        <div class="form-group flex flex-col">
                            <label class="tracking-normal required">Pronouns</label>
                            <textarea class=" p-4 lg:w-[70%] h-[100px] w-full text-medium rounded-lg border my-2"
                                placeholder="He/his, She/Her..." id="pronouns" v-model="formReactive.pronouns.value"></textarea>
                                <p class="text-[red]">{{formReactive.pronouns.error}}</p>

                        </div>
                        <div class="form-group flex flex-col">
                            <label class="tracking-normal">Fun fact</label>
                            <textarea class=" p-4 lg:w-[70%] h-[100px] w-full text-medium rounded-lg border my-2"
                                placeholder="One fun fact about yourself" id="fun-facts" v-model="formReactive.funFact.value"></textarea>
                                <p class="text-[red]">{{formReactive.funFact.error}}</p>

                        </div>
                        <div class="form-group flex flex-col">
                            <label class="tracking-normal">Skills Improvements</label>
                            <textarea class=" p-4 lg:w-[70%] h-[100px] w-full text-medium rounded-lg border my-2"
                                placeholder="I'm currently learning react native, nodejs..."
                                id="improvements" v-model="formReactive.skillsImprovement.value"></textarea>
                                <p class="text-[red]">{{formReactive.skillsImprovement.error}}</p>

                        </div>
                        <div class="form-group flex flex-col">
                            <label class="tracking-normal">Job Interests</label>
                            <textarea class=" p-4 lg:w-[70%] h-[100px] w-full text-medium rounded-lg border"
                                placeholder="Software Engineer,Front end Engineer technical writing..."
                                id="improvements" v-model="formReactive.jobInterests.value"></textarea>
                                <p class="text-[red]">{{formReactive.jobInterests.error}}</p>

                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal required">Country</h1>
                            <c-input type="text" class="" full styleType="white"
                                placeholder="e.g Nigeria" :value="formReactive.username"></c-input>
                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal required">State</h1>
                            <c-input type="text" class="" full styleType="white"
                                placeholder="e.g lagos" :value="formReactive.city"></c-input>
                        </div>
                    </div>

                    <div class="form-group mb-6">
                        <h1 class="tracking-normal required">Skills</h1>
                        <c-input type="text" class="" full styleType="white" placeholder="Enter your skills"
                            :value="skill" @keypress.enter="addSkill">
                        </c-input>
                        <p class="text-[red]">{{formReactive.skills.error}}</p>
                        <div class="flex gap-2 flex-wrap mt-2" v-if="skills">
                            <input-pills v-for="(arrSkill, idx) in skills" :pill-text="arrSkill" :key="idx" @remove-pill="removePill(idx)"></input-pills>
                        </div>
                        <p class="text-xs text-dark" v-if="skills.length == 0">Enter to add more than one skill</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                        <div class="form-group">
                            <h1 class="tracking-normal min-w-[78px] min-h-[17px] required">Preferred Work Model</h1>
                            <select class="form-control w-full border p-4 text-medium rounded-lg" v-model="formReactive.workmodel.value">
                                <option disabled value="">Please select one</option>
                                <option value="full time">Full Time</option>
                                <option value="part time">Part Time</option>
                                <option value="contract">Contract</option>
                            </select>
                                <p class="text-[red]">{{formReactive.workmodel.error}}</p>

                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal required">Preferred Job Location Type</h1>
                            <select class="form-control w-full border p-4 text-medium rounded-lg" v-model="formReactive.jobLocationType.value">
                                <option disabled value="">Please select one</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On site</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                                <p class="text-[red]">{{formReactive.jobLocationType.error}}</p>

                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal required">Years of Experience</h1>
                            <c-input type="number" class="" full styleType="white"
                                placeholder="Enter your years of experience" :value="formReactive.experience"></c-input>
                        </div>

                    </div>

                    <div class="form-group mb-6">
                        <h1 class="tracking-normal">Portfolio Link</h1>
                        <c-input type="text" class="form-control pr-40 lg:w-[70%] w-full text-medium rounded-lg" full
                            styleType="white" placeholder="add portfolio link" :value="formReactive.portfolio">
                        </c-input>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                        <div class="form-group">
                            <h1 class="tracking-normal min-w-[78px] min-h-[17px] required">Twitter</h1>
                            <c-input type="text" class="form-control w-full pr-40 text-medium rounded-lg" full
                                styleType="white" placeholder="Enter your twitter link" :value="formReactive.twitter">
                            </c-input>
                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal">LinkedIn</h1>
                            <c-input type="text" class="" full styleType="white" placeholder="Enter your linkedin link"
                                :value="formReactive.linkedin"></c-input>
                        </div>

                        <div class="form-group">
                            <h1 class="tracking-normal required">Github</h1>
                            <c-input type="text" class="form-control w-full text-medium rounded-lg" full
                                styleType="white" placeholder="Enter your github link" :value="formReactive.github">
                            </c-input>
                        </div>

                    </div>

                    <div class="form-group mb-6">
                        <h1 class="tracking-normalrequired ">Add your CV</h1>
                        <input type="file" class="form-control w-full md:w-[50%] border p-4 text-medium rounded-lg" full
                            styleType="white" placeholder="Upload your resume" @change="setCv($event)">
                                <p class="text-[red]">{{formReactive.file.error}}</p>
                    </div>

                    <c-button type="pry rounded-lg" size="big" :loading="loading" @click="submitHandler">Create Profile</c-button>

                </div>
                <formError :error-msg="createProfileError" @close-error="createProfileError = null"></formError>
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
let createProfileError = ref(null)
let skill = reactive({
    value: null,
    error: null,
})
let formReactive = reactive({
    firstname: {
        value: null,
        error: null
    },
    lastname: {
        value: null,
        error: null
    },
    whoAreYou: {
        value: "",
        error: null
    },
    pronouns: {
        value: null,
        error: null
    },
    funFact: {
        value: null,
        error: null
    },
    skillsImprovement: {
        value: null,
        error: null
    },
    jobInterests: {
        value: null,
        error: null
    },
    country: {
        value: null,
        error: null
    },
    city: {
        value: null,
        error: null
    },
    skills: {
        value: null,
        error: null
    },
    workmodel: {
        value: "",
        error: null
    },
    jobLocationType: {
        value: "",
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
let skills = reactive([])
// let computedSkills = computed(() => {

// })
function setCv(e) {
    formReactive.file.value = e.target.files[0]
}

let validate = () => {
    if (formReactive.firstname.value == null || formReactive.firstname.value.trim() == "") {
        formReactive.firstname.error = "First Name is required";
    }
    else {
        formReactive.firstname.error = null;
    }
    if (formReactive.lastname.value == null || formReactive.lastname.value.trim() == "") {
        formReactive.lastname.error = "Last Name is required";
    } 
    else {
        formReactive.lastname.error = null;
    }
    if (formReactive.whoAreYou.value == null || formReactive.whoAreYou.value.trim() == "") {
        formReactive.whoAreYou.error = "About you is required";
    }
    else {
        formReactive.whoAreYou.error = "";
    }
    if (formReactive.pronouns.value == null || formReactive.pronouns.value.trim() == "") {
        formReactive.pronouns.error = "Pronouns is required";
    }
    else {
        formReactive.pronouns.error = null;
    }
    if (formReactive.country.value == null || formReactive.country.value.trim() == "") {
        formReactive.country.error = "Country is required";
    }
    else {
        formReactive.country.error = null;
    }
    if (formReactive.city.value == null || formReactive.city.value.trim() == "") {
        formReactive.city.error = "State is required";
    }
    else {
        formReactive.city.error = null;
    }
    if (formReactive.skills.value == null) {
        formReactive.skills.error = "Skills is required";
    }
    else {
        formReactive.skills.error = null;
    }
    if (formReactive.username.value == null || formReactive.username.value.trim() == "") {
        formReactive.username.error = "Country is required";
    }
    else {
        formReactive.username.error = null;
    }
    if (formReactive.workmodel.value == null || formReactive.workmodel.value.trim() == "") {
        formReactive.workmodel.error = "Work model is required";
    }
    else {
        formReactive.workmodel.error = null;
    }
    if (formReactive.jobLocationType.value == null || formReactive.jobLocationType.value.trim() == "") {
        formReactive.jobLocationType.error = "Job Location is required";
    }
    else {
        formReactive.jobLocationType.error = null;
    }
    if (formReactive.experience.value == null) {
        formReactive.experience.error = "Experience is required";
    }
    else {
        formReactive.experience.error = null;
    }
    if (formReactive.twitter.value == null || formReactive.twitter.value.trim() == "") {
        formReactive.twitter.error = "Twitter link is required";
    }
    else {
        formReactive.twitter.error = null;
    }
    if (formReactive.github.value == null || formReactive.github.value.trim() == "") {
        formReactive.github.error = "Github link is required";
    }
    else {
        formReactive.github.error = null;
    }
    if (formReactive.file.value == null) {
        formReactive.file.error = "CV is required";
    }
    else {
        formReactive.file.error = null;
    }
    for (let key in formReactive) {
        if (formReactive[key].error != null) {
            return false;
        }
        return true
    }
}

function addSkill(){
    skills.push(skill.value)
    skill.value = null
    formReactive.skills.value = skills
}
function removePill(index){
    skills.splice(index, 1)
}
let { submitForm, loading, data } = useFormRequest(
    "api/user/create-profile",
    true,
    formReactive,
    null,
    (data) => {
        console.log(data)
        if(data){
            useRouter().push("/jobs");
        }

    },
    (error) => {
        console.log(error)
    if(error.response.data.error){
        createProfileError.value = error.response.data.error;
    } else{
        createProfileError.value = error.message;
    }  
}
);
let submitHandler = () => {
    if (validate()) {
        submitForm()
    }
};



</script>

<style scoped>
.required:after{
    content: "*";
    color:red
}
</style>