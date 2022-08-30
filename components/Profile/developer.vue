<template>
    <div class="container mx-auto font-monts pb-[250px] bg-gray-100">

        <div class="md:flex no-wrap">

            <div class="w-full md:w-4/12 ">

                <div class="">
                    <div class="image overflow-hidden">
                        <img class="h-auto rounded-full w-full max-w-[300px] mx-auto my-4"
                            :src="computedDeveloperuser.avatar_url" alt="github picture">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl text-center leading-8 my-1">{{developer.firstname}} {{developer.lastname}}</h1>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><location-icon bg-color=""></location-icon></span>lagos, Nigeria</h3>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><job-type-icon bg-color=""></job-type-icon></span>Full time</h3>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><job-type-icon bg-color=""></job-type-icon></span>Remote</h3>


                    <h3 class="text-gray-600 font-medium text-lg text-center">Experience: {{developer.experience}}years</h3>

                </div>

            </div>

            <div class="w-full border-gray-100 ">
                <div class="bg-gray-100 p-3 rounded-sm">

                    <h1 class="text-3xl font-bold">About {{developer.firstname}}</h1>

                    <div class="w-full h-[1px] bg-gray-200 mt-4"></div>
                    <div class="p-5 text-md">
                        <p class="textmd">{{developer.whoAreYou}}</p>

                        <p class="text-md">Here's a quick summary about me:</p>
                        <p class="">😊 Pronouns: {{developer.pronouns}} </p>
                        <p class="" v-if="developer.funFact">💡 Fun fact: {{developer.funFact}} <br /></p>
                        <p class="" v-if="developer.improvements">🌱 {{developer.improvements}}</p>
                        <p class="" v-if="developer.jobInterests">💼 Job interests: {{developer.jobInterests}}</p>

                    </div>

                    <div class=" mx-8">
                        <ul class="flex gap-20 mt-3 flex-wrap">
                            <li><a href="#" class="underline flex gap-2 items-center"> <span>
                                        <github-icon></github-icon>
                                    </span> Github</a>{{computedDeveloperGithubUsername}}</li>
                            <li><a href="#" class="underline flex gap-2 items-center"> <span>
                                        <linkedin-icon></linkedin-icon>
                                    </span> Linkedin</a></li>
                            <li><a href="#" class="underline flex gap-2 items-center"> <span>
                                        <twitter-icon></twitter-icon>
                                    </span> Twitter</a></li>
                            <li><a href="#" class="underline flex gap-2 items-center"> <span>
                                        <web-link-icon></web-link-icon>
                                    </span> zainab</a></li>
                        </ul>

                    </div>

                    <div class="w-full h-1 bg-gray-200 mt-4"></div>

                    <h1 class="text-2xl m-2 font-bold">For your search</h1>
                    <p class="m-2 text-lg mx-8">These are zainab's interaction with React</p>

                    <div class="grid lg:flex gap-6 mx-8">
                        <div class="py-2 px-3 border-gray-300 rounded-lg bg-white">
                            <h1 class="font-bold text-lg underline text-blue-500 mb-3 ">alpha</h1>
                            <p class="text-sm">Written in HTML, CSS, and VanillaJS, Alpha showcase intriguing facts and
                                sites in Sambisa forest; a forest in Borno state, northeast Nigeria</p>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded-md my-2">React</span>
                        </div>

                        <div class="py-2 px-3 border-gray-300 rounded-lg bg-white">
                            <h1 class="font-bold text-lg underline text-blue-500 mb-3 ">alpha</h1>
                            <p class="text-sm">Written in HTML, CSS, and VanillaJS, Alpha showcase intriguing facts and
                                sites in Sambisa forest; a forest in Borno state, northeast Nigeria</p>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded-md my-2">React</span>
                        </div>

                        <div class="py-2 px-3 border-gray-300 rounded-lg bg-white">
                            <h1 class="font-bold text-lg underline text-blue-500 mb-3 ">alpha</h1>
                            <p class="text-sm">Written in HTML, CSS, and VanillaJS, Alpha showcase intriguing facts and
                                sites in Sambisa forest; a forest in Borno state, northeast Nigeria</p>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded-md my-2">React</span>
                        </div>
                    </div>

                    <div class="w-full h-1 bg-gray-200 mt-4"></div>

                    <h1 class="text-2xl m-2 font-bold">Efficiency</h1>
                    <p class="m-2 text-lg">These are some highlights on zainab's latest work</p>


                    <h2 class="text-xl mt-4 font-semibold">Skills</h2>
                    <div class="flex gap-4 flex-wrap my-4">
                        <skills-pill>HTMl</skills-pill>
                        <skills-pill>CSS</skills-pill>
                        <skills-pill>JavaScript</skills-pill>
                        <skills-pill>React</skills-pill>
                        <skills-pill>React Native</skills-pill>
                    </div>
                    <h2 class="text-xl  my-6 font-semibold">Activities on Github</h2>
                    <div class=' grid grid-cols-2 gap-6'>
                        <img style="" class="img "
                            :src="`https://github-readme-stats.vercel.app/api?username=${computedDeveloperGithubUsername}&show_icons=true&theme=white`" />

                        <img class="img img "
                            :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${computedDeveloperGithubUsername}&theme=white&langs_count=8&layout=compact`" />
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillsPill from './skills-pill.vue'
import JobTypeIcon from '../icons/job-type-icon.vue'
import LocationIcon from '../icons/location-icon.vue'
import WebLinkIcon from '../icons/web-link-icon.vue'
import TwitterIcon from '../icons/twitter-icon.vue'
import LinkedinIcon from '../icons/linkedin-icon.vue'
import GithubIcon from '../icons/github-icon.vue'

interface Props {
    developer: object
}

let props = defineProps<Props>()
let userGithub = ref(null)

let computedDeveloperGithubUsername = computed(() => {
    console.log(props.developer.github.split('/'))
    return props.developer.github.split('/')[3]

})
console.log(computedDeveloperGithubUsername.value)
let computedDeveloperuser = computed(() => {
    return userGithub.value
})
async function getUserFromGithub(username){
    // return fetch(`https://api.github.com/users/${username}`)
    // .then(res => res.json())
    let req = await fetch(`https://api.github.com/users/${username}`)
    let data = await req.json()
    console.log(data)
    return data
}
// if(computedDeveloperGithubUsername){
    // console.log(computedDeveloperGithubUsername)
    userGithub.value = await getUserFromGithub(computedDeveloperGithubUsername.value)
    console.log(userGithub.value)
// }

</script>

<style>
</style>