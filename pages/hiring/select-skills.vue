<template>
    <div>
        <div class="flex relative px-[15px] py-[20px] lg:px-[210px] lg:py-[47px]  flex-col font-monts ">
            <router-link to="/" class="ml-1"><img src="/logo.svg" alt="logo"></router-link>


            <test-compo :test-array="developersArr" v-if="developersArr.length" :skills="skills"></test-compo>

            <div class="" v-else>
                <h1 class="font-semibold text-xl md:text-3xl mt-9">Find developers to hire</h1>
                <p class="text-sm md:text-lg font-medium mt-5 text-gray-500 tracking-normal">Select at least one skill
                </p>


                <div
                    class="grid grid-auto md:grid-cols-4 grid-cols-3 w-full justify-center lg:grid-cols-6 gap-8 max-w-[1000px] my-4">

                    <!-- skills list -->
                    <!-- {{skillsItems}} -->
                    <div v-for="skill in computedSkillsItem" :key="skill.id"
                        class="border rounded-md text-center flex flex-col items-center p-4 cursor-pointer"
                        :class="skill.active? 'border-[#d53a9d]':' border-gray-200'" @click="handleSkillClick(skill)">
                        <div class="w-10 h-10 flex justify-center text-center my-4">
                            <img :src="skill.svg" v-if="typeof skill.svg === 'string'" :alt="`${skill.name} icon`" />
                            <!-- <component :is="skill.svg" class="w-50 h-50 " v-else></component> -->
                        </div>
                        <h3>{{skill.name}}</h3>
                    </div>

                </div>

                <div class="mb-12 ">
                    <div class="form-group mb-6">
                        <h1 class="tracking-normal required">Skills</h1>
                        <c-input type="text" class="" full styleType="white" placeholder="Enter your skills"
                            :value="skill" @keypress.enter="addSkill">
                        </c-input>
                        <p class="text-[red]">{{formReactive.skills.error}}</p>
                        <div class="flex gap-2 flex-wrap mt-2" v-if="skills">
                            <input-pills v-for="(arrSkill, idx) in skills" :pill-text="arrSkill" :key="idx"
                                @remove-pill="removePill(idx)"></input-pills>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <c-button type="pry rounded-lg" size="big" :loading="loading" @click="submitForm">Continue
                    </c-button>
                    <router-link to="/hiring/create-job">
                        <button
                        class="cursor-pointer border border-red-700 font-medium font-monts-alt text-md md:block p-4 rounded">
                        Create A Job Post</button>
                    </router-link>
                </div>
            </div>
        </div>
        <formError :error-msg="selectSkillError" @close-error="selectSkillError = null"></formError>

    </div>
</template>

<script setup lang="ts">
import FormError from '../../components/UI/form-error.vue'
import TestCompo from '../../components/testCompo.vue'
import InputPills from '../../components/UI/input-pills.vue'
import CButton from '../../components/UI/forms/c-button.vue'
import Jobpost from '../../components/UI/svgs/jobpost.vue'
import CInput from '../../components/UI/forms/c-input.vue'
import useFormRequest from '../../composables/useFormRequest'

let skill = reactive({
    value: null,
    error: null,
})

interface skillsType {
    id: number;
    svg: Object | string;
    name: string;
}
let selectSkillError = ref(null)
let formReactive = reactive({
    skills: {
        value: null,
        error: null
    },
})
// check type of skills
function checkSkillType(skill) {
    if (typeof skill === 'string') {
        return skill
    } else {
        return skill.name
    }
}

let skillsItems = reactive<skillsType[]>([
    {
        id: 2,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "Javascript"
    },
    {
        id: 3,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML",
    },
    {
        id: 4,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "Typescript",
    },
    {
        id: 5,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        name: "Vue"
    },
    {
        id: 6,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React"
    },
    {
        id: 7,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        name: "Django"
    },
    {
        id: 8,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        name: "Flask"
    },
    {
        id: 9,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        name: "Sass"
    },
    {
        id: 10,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        name: "java"
    },
    {
        id: 11,
        svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        name: "Python"
    }
])
let skills = reactive([])

let computedSkillsItem = computed(() => {
    // let testArr = []
    return skillsItems.map((item) => {
        return reactive({
            id: item.id,
            svg: item.svg,
            name: item.name,
            active: false
        })
    })
})
function handleSkillClick(skillObj) {
    if (skillObj.active) {
        // skillObj.active = false
        let idx = skills.indexOf(skillObj.name)
        removePill(idx)
    } else {
        if (skills.includes(skillObj.name.toLowerCase())) {
            skill.error = 'Skill already added'
            return
        }
        skill.error = null
        skillObj.active = true
        skills.push(skillObj.name.toLowerCase())
    }
    formReactive.skills.value = skills

}

function addSkill() {
    if (skills.includes(skill.value.toLowerCase())) {
        skill.error = 'Skill already added'
        return
    }
    skills.push(skill.value.toLowerCase())
    computedSkillsItem.value.map((item) => {
        if (item.name.toLowerCase() === skill.value.toLowerCase()) {
            item.active = true
        }
    })
    skill.value = null
    formReactive.skills.value = skills
}
function removePill(index) {
    let removed  = skills.splice(index, 1)
    computedSkillsItem.value.map((item) => {
        if (item.name.toLowerCase() === removed[0]) {
            item.active = false
        }
    })
    formReactive.skills.value = skills
}
let developersArr = reactive([])
let { submitForm, loading, data } = useFormRequest(
    "api/hire/review/select-skills",
    true,
    formReactive,
    null,
    (data) => {
        if (data) {
            data.data.forEach(element => {
                element.skills.forEach(skill => {
                    skills.forEach(skillClient => {
                        if (skill.toLowerCase() == skillClient.toLowerCase()) {
                            developersArr.push(element)
                        }
                    })
                }
                )
            });
        }

    },
    (error) => {
        if (error.response.data.error) {
            selectSkillError.value = error.response.data.error;
        } else {
            selectSkillError.value = error.message;
        }
    }
);


</script>

<style scoped>
.required:after {
    content: "*";
    color: red
}
</style>