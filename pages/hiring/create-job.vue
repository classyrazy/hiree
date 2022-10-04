<template>
    <div>
        <nav class="flex px-[15px] py-[20px] lg:px-10 justify-between items-center">
            <router-link to="/hiring"><img src="/logo.svg" alt="logo" /></router-link>
            <router-link to="/hiring/select-skills"
                class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-3 rounded">
                Find developers
            </router-link>
        </nav>

        <div
            class="flex relative h-screen px-[15px] py-[20px] lg:px-[210px] lg:py-[47px] items-start flex-col screen font-monts">
            <h1 class="font-semibold text-3xl mt-9">Create A Job Post</h1>
            <p class="text-xl font-medium mt-5 text-gray-500 tracking-normal">
                Creating a job post gives you a ledge to share a link of your open
                position to any platform of your choice
            </p>

            <div class="block mt-5">
                <div class="mb-12 w-full">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                        <div class="form-group">
                            <h1 class="tracking-normal min-w-[78px] min-h-[17px] required">
                                Company name
                            </h1>
                            <c-input type="text" class="form-control w-full text-medium rounded-lg" full
                                styleType="white" placeholder="Enter your company name"
                                :value="formReactive.companyName"></c-input>
                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal min-w-[78px] min-h-[17px] required">
                                Company Location
                            </h1>
                            <c-input type="text" class="form-control w-full text-medium rounded-lg" full
                                styleType="white" placeholder="Enter company location eg. Lagos, Nigeria"
                                :value="formReactive.companyLocation"></c-input>
                        </div>
                        <div class="form-group">
                            <h1 class="tracking-normal required">Work Model</h1>
                            <select class="form-control w-full border p-4 text-medium rounded-lg"
                                v-model="formReactive.workModel.value" placeholder="Select one">
                                <option disabled value="">Please select one</option>
                                <option value="full time">Full Time</option>
                                <option value="part time">Part Time</option>
                                <option value="contract">Contract</option>
                            </select>
                            <p class="text-[red]">{{ formReactive.workModel.error }}</p>
                        </div>

                        <div class="form-group">
                            <h1 class="tracking-normal required">Job title</h1>
                            <c-input type="text" class="form-control mr-40 w-full text-medium rounded-lg" full
                                styleType="white" placeholder="Enter your job title" :value="formReactive.title">
                            </c-input>
                        </div>

                        <div class="form-group">
                            <h1 class="tracking-normal required">Job Location</h1>
                            <select class="form-control w-full border p-4 text-medium rounded-lg"
                                v-model="formReactive.jobLocationType.value">
                                <option disabled value="">Please select one</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On site</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                            <p class="text-[red] text-xs">
                                {{ formReactive.jobLocationType.error }}
                            </p>
                        </div>
                    </div>

                    <div class="form-group flex flex-col mb-4">
                        <label class="tracking-normal required">Job description</label>
                        <textarea class="p-4 lg:w-[90%] h-[300px] w-full text-medium rounded-lg border my-2"
                            placeholder="Describe the job" id="who-are-you"
                            v-model="formReactive.description.value"></textarea>
                        <p class="text-[red]" v-if="formReactive.description.error">
                            {{ formReactive.description.error }}
                        </p>
                    </div>
                    <div class="form-group flex flex-col mb-4">
                        <label class="tracking-normal required">Job Benefits</label>
                        <textarea class="p-4 lg:w-[90%] h-[300px] w-full text-medium rounded-lg border my-2"
                            placeholder="Describe Job Benefits like salary, stock options, etc" id="who-are-you"
                            v-model="formReactive.benefits.value"></textarea>
                        <p class="text-[red]" v-if="formReactive.benefits.error">
                            {{ formReactive.benefits.error }}
                        </p>
                    </div>

                    <div class="form-group mb-6">
                        <h1 class="tracking-normal required">Skills</h1>
                        <c-input type="text" class="" full styleType="white" placeholder="Enter your skills"
                            :value="skill" @keypress.enter="addSkill">
                        </c-input>
                        <p class="text-[red]">{{ formReactive.skills.error }}</p>
                        <div class="flex gap-2 flex-wrap mt-2" v-if="skills">
                            <input-pills v-for="(arrSkill, idx) in skills" :pill-text="arrSkill" :key="idx"
                                @remove-pill="removePill(idx)"></input-pills>
                        </div>
                        <p class="text-xs text-dark" v-if="skills.length == 0">
                            Enter to add more than one skill
                        </p>
                    </div>

                    <c-button type="pry rounded-lg" :loading="loading" @click="submitHandler">Create Job
                    </c-button>
                </div>
                <formError :error-msg="createJobError" @close-error="createJobError = null"></formError>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputPills from "../../components/UI/input-pills.vue";
import CInput from "../../components/UI/forms/c-input.vue";
import CButton from "../../components/UI/forms/c-button.vue";
import FormError from "../../components/UI/form-error.vue";
import useFormRequest from "../../composables/useFormRequest";

definePageMeta({
    middleware: ['auth', 'only-hire'],
})
let createJobError = ref(null);
let skill = reactive({
    value: null,
    error: null,
});
let formReactive = reactive({
    companyName: {
        value: null,
        error: null,
    },
    companyLocation: {
        value: null,
        error: null,
    },
    workModel: {
        value: "",
        error: null,
    },
    title: {
        value: null,
        error: null,
    },
    description: {
        value: null,
        error: null,
    },
    jobLocationType: {
        value: "",
        error: null,
    },
    skills: {
        value: null,
        error: null,
    },
    benefits: {
        value: null,
        error: null,
    }
});

let validate = () => {
    if (
        formReactive.companyName.value == null ||
        formReactive.companyName.value.trim() == ""
    ) {
        formReactive.companyName.error = "Company name is required";
    } else {
        formReactive.companyName.error = null;
    }
    if (
        formReactive.companyLocation.value == null ||
        formReactive.companyLocation.value.trim() == ""
    ) {
        formReactive.companyLocation.error = "Company name is required";
    } else {
        formReactive.companyLocation.error = null;
    }
    if (
        formReactive.workModel.value == null ||
        formReactive.workModel.value.trim() == ""
    ) {
        formReactive.workModel.error = "Work model is required";
    } else {
        formReactive.workModel.error = null;
    }
    if (
        formReactive.title.value == null ||
        formReactive.title.value.trim() == ""
    ) {
        formReactive.title.error = "Title is required";
    } else {
        formReactive.title.error = null;
    }
    if (
        formReactive.description.value == null ||
        formReactive.description.value.trim() == ""
    ) {
        formReactive.description.error = "Description is required";
    } else {
        formReactive.description.error = null;
    }
    if (
        formReactive.benefits.value == null ||
        formReactive.benefits.value.trim() == ""
    ) {
        formReactive.benefits.error = "Description is required";
    } else {
        formReactive.benefits.error = null;
    }
    if (formReactive.jobLocationType.value == null) {
        formReactive.jobLocationType.error = "Location is required";
    } else {
        formReactive.jobLocationType.error = null;
    }
    if (formReactive.skills.value == null) {
        formReactive.skills.error = "Skills is required";
    } else {
        formReactive.skills.error = null;
    }
    for (let key in formReactive) {
        if (formReactive[key].error != null) {
            return false;
        }
        return true;
    }
};
let skills = reactive([]);

function addSkill() {
    skills.push(skill.value);
    skill.value = null;
    formReactive.skills.value = skills;
}
function removePill(index) {
    skills.splice(index, 1);
}
let { submitForm, loading, data } = useFormRequest(
    "api/hire/create-job",
    true,
    formReactive,
    null,
    (data) => {
        if (data) {
            useRouter().push("/profile");
        }
    },
    (error) => {
        if (error.response.data.error) {
            createJobError.value = error.response.data.error;
        } else {
            createJobError.value = error.message;
        }
    }
);
let submitHandler = () => {
    validate();

    if (validate()) {
        submitForm();
    }
};
</script>

<style scoped>
.required:after {
    content: "*";
    color: red;
}
</style>
