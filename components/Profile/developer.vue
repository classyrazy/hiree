<template>
    <div class="container mx-auto font-monts pb-[250px] bg-gray-100">

        <div class="md:flex no-wrap">

            <div class="w-full md:w-4/12 ">

                <div class="">
                    <div class="image overflow-hidden">
                        <img class="h-auto rounded-full w-full max-w-[300px] mx-auto my-4"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl text-center leading-8 my-1">Zainab Tijani</h1>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><location-icon bg-color=""></location-icon></span>lagos, Nigeria</h3>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><job-type-icon bg-color=""></job-type-icon></span>Full time</h3>
                    <h3 class="text-gray-600 font-medium text-lg  flex items-center justify-center gap-2"><span><job-type-icon bg-color=""></job-type-icon></span>Remote</h3>


                    <h3 class="text-gray-600 font-medium text-lg text-center">Experience: 3 years</h3>

                </div>

            </div>

            <div class="w-full border-gray-100 ">
                <div class="bg-gray-100 p-3 rounded-sm">

                    <h1 class="text-3xl font-bold">About Zainab</h1>

                    <div class="w-full h-[1px] bg-gray-200 mt-4"></div>
                    <div class="p-5 text-md">
                        <p class="textmd">
                            I'm a Front end Developer, I am primarily focused on writing clean, elegant and efficient
                            code, I am proficient in JavaScript Es6,
                            CSS3, HTML5 and React framework. with knowledge of WordPress,
                            user interface, testing, and debugging processes.
                        </p>

                        <p class="text-md">Here's a quick summary about me:</p>
                        <p class="">😊 Pronouns: She/her </p>
                        <p class="">💡 Fun fact: I'm currently studying at AltSchool Africa School of Software
                            Engineering Class of 2022. <br /></p>
                        <p class="">🌱 I’m currently learning JavaScript, Reactjs, and Node js.</p>
                        <p class="">😊 I’m looking for help with open source projects, hackathons, internships, and
                            entry-level opportunities.</p>
                        <p class="">💼 Job interests: Software Engineer, Front end Engineer, or UI Engineer (Intern or
                            Junior level).</p>

                    </div>

                    <div class=" mx-8">
                        <ul class="flex gap-20 mt-3 flex-wrap">
                            <li><a href="#" class="underline flex gap-2 items-center"> <span>
                                        <github-icon></github-icon>
                                    </span> Github</a></li>
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
                            src="https://github-readme-stats.vercel.app/api?username=user&show_icons=true&theme=white" />

                        <img class="img img "
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=user&theme=white&langs_count=8&layout=compact" />
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
</script>

<style>
</style>