<template>
    <div class="container mx-auto font-monts pb-[250px] bg-gray-200" :class="type === 'profile' ? 'p-8' : ''">
        <div class="md:flex no-wrap bg-gray-200">
            <div class="w-full md:w-4/12 bg-gray-200">
                <div class="">
                    <div class="image overflow-hidden">
                        <img class="h-auto rounded-full w-full max-w-[300px] mx-auto my-4"
                            :src="computedDeveloperuser.avatar_url" alt="github picture" />
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl text-center leading-8 my-1">
                        {{ developer.firstname }} {{ developer.lastname }}
                    </h1>
                    <h3 class="text-gray-600 font-medium text-lg flex items-center justify-center gap-2">
                        <span>
                            <location-icon bg-color=""></location-icon>
                        </span>{{ developer.city }}, {{ developer.country }}
                    </h3>
                    <h3 class="text-gray-600 font-medium text-lg flex items-center justify-center gap-2">
                        <span>
                            <job-type-icon bg-color=""></job-type-icon>
                        </span>{{ developer.workmodel }}
                    </h3>
                    <h3 class="text-gray-600 font-medium text-lg flex items-center justify-center gap-2">
                        <span>
                            <job-type-icon bg-color=""></job-type-icon>
                        </span>{{ developer.jobLocationType }}
                    </h3>

                    <h3 class="text-gray-600 font-medium text-lg text-center">
                        Experience: {{ developer.experience }}years
                    </h3>
                </div>
            </div>
            <div class="bg-gray-200 p-3 rounded-sm flex flex-col items-center pt-20">
                <h1 class="text-3xl font-bold">About {{ developer.firstname }}</h1>

                <div class="w-full h-[1px] bg-gray-200 mt-4"></div>
                <div class="block md:flex justify-between w-full items-start">
                    <div class="p-5 text-md w-full">
                        <p class="text-md">{{ developer.whoAreYou }}</p>

                        <p class="text-md">Here's a quick summary about me:</p>
                        <p class="">😊 Pronouns: {{ developer.pronouns }}</p>
                        <p class="" v-if="developer.funFact">
                            💡 Fun fact: {{ developer.funFact }} <br />
                        </p>
                        <p class="" v-if="developer.skillsImprovement">
                            🌱 Improving Skills: {{ developer.skillsImprovement }}
                        </p>
                        <p class="" v-if="developer.jobInterests">
                            💼 Job interests: {{ developer.jobInterests }}
                        </p>
                    </div>
                    <!-- {{developer.email}} -->
                    <a :href="`mailto:${developer.email}`" v-if="type === 'profile'">
                        <c-button class="text-center w-full mx-auto md:w-auto">Contact</c-button>
                    </a>
                </div>
                <div class="mx-8">
                    <ul class="flex gap-20 mt-3 flex-wrap">
                        <li>
                            <a :href="developer.github" class="underline flex gap-2 items-center">
                                <span>
                                    <github-icon></github-icon>
                                </span>
                                Github</a>
                        </li>
                        <li v-if="developer.linkedin">
                            <a :href="developer.linkedin" class="underline flex gap-2 items-center">
                                <span>
                                    <linkedin-icon></linkedin-icon>
                                </span>
                                Linkedin</a>
                        </li>
                        <li>
                            <a :href="developer.twitter" class="underline flex gap-2 items-center">
                                <span>
                                    <twitter-icon></twitter-icon>
                                </span>
                                Twitter</a>
                        </li>
                        <li v-if="developer.portfolio">
                            <a :href="developer.portfolio" class="underline flex gap-2 items-center">
                                <span>
                                    <web-link-icon></web-link-icon>
                                </span>
                                {{ developer.firstname }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-full bg-gray-200 py-6">
            <div class="" v-if="type === 'hiring'">
                <div class="w-full h-1 bg-gray-300"></div>

                <h1 class="text-2xl m-2 font-bold">For your search</h1>
                <p class="m-2 text-lg mx-8">
                    These are {{ developer.firstname }}'s interaction with the skills you
                    are looking for
                </p>
                <div class="grid lg:flex flex-col flex-wrap gap-6 mx-8">
                    <div class="flex flex-col gap-6" v-for="(skill, idxSkill) in review.skills_selected"
                        :key="idxSkill">
                        <skill-dropdown :skill-text="skill" @open-dropdown="hanleShowRepoError">
                            <div class="" v-if="!loadingGitRepos && resGitRepos">
                                <div class="" v-for="(eachLang, idx) in resGitRepos" :key="idx">
                                    <!-- {{eachLang[skill]}} -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                        v-if="eachLang[skill]">
                                        <!-- <RepoCard :repos="eachLang[skill]" @mounted="hanleShowRepoError"></RepoCard> -->
                                        
                                        <div class="" v-for="(lang, idxLang) in eachLang[skill]" :key="idxLang">
                                            <div class="py-2 px-3 border-gray-300 rounded-lg bg-white">
                                                <a target="_blank" :href="lang.repo.url"
                                                    class="font-bold text-lg underline text-blue-500 mb-3">{{
                                                    lang.repo.name }}</a>
                                                <p class="text-sm">{{ lang.repo.description }}</p>
                                                <span class="inline-block bg-gray-100 px-2 py-1 rounded-md my-2 mx-2"
                                                    v-for="(skillLang, idx) in lang.languages" :key="idx">{{
                                                    skillLang.language }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-center my-10 items-center" v-if="Object.keys(eachLang)[0] === skill && eachLang[skill].length === 0">
                                        <p class="text-xl text-semi-bold">
                                            {{ developer.firstname }} does not have any repository with
                                            <span class="text-[#d53a9d]">{{ skill }}</span>
                                        </p>
                                    </div> 

                                </div>
                            </div>
                            <div class="flex justify-center my-10 items-center" v-if="loadingGitRepos">
                                <LoaderIcon :size="50" color="#d53a9d" />
                            </div>
                        </skill-dropdown>
                    </div>
                </div>
            </div>

            <div class="w-full h-1 bg-gray-200 mt-4"></div>

            <h1 class="text-2xl m-2 font-bold">Efficiency</h1>
            <p class="m-2 text-lg">
                These are some highlights on {{ developer.firstname }}'s latest work
            </p>

            <h2 class="text-xl mt-4 font-semibold">Skills</h2>
            <div class="flex gap-4 flex-wrap my-4">
                <skills-pill v-for="skill in developer.skills">{{ skill }}</skills-pill>
            </div>
            <h2 class="text-xl my-6 font-semibold">Activities on Github</h2>
            <div class="grid grid-cols-2 gap-6 bg-gray-200">
                <img style="" class="img"
                    :src="`https://github-readme-stats.vercel.app/api?username=${computedDeveloperGithubUsername}&show_icons=true&theme=white`" />

                <img class="img img"
                    :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${computedDeveloperGithubUsername}&theme=white&langs_count=8&layout=compact`" />
            </div>
        </div>

        <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import SkillDropdown from "../UI/skill-dropdown.vue";
import CButton from "../UI/forms/c-button.vue";
import LoaderIcon from "../UI/svgs/loader-icon.vue";
import SkillsPill from "./skills-pill.vue";
import JobTypeIcon from "../icons/job-type-icon.vue";
import LocationIcon from "../icons/location-icon.vue";
import WebLinkIcon from "../icons/web-link-icon.vue";
import TwitterIcon from "../icons/twitter-icon.vue";
import LinkedinIcon from "../icons/linkedin-icon.vue";
import GithubIcon from "../icons/github-icon.vue";
import { useHireStore } from "../../store/hire";
import RepoCard from "./repo-card.vue";

interface Props {
    developer: object;
    review: object;
    type: "hiring" | "profile";
}

// let props = defineProps<Props>()
let props = withDefaults(defineProps<Props>(), {
    type: "hiring",
});
let emit = defineEmits(["skillsGithub"]);
let userGithub = ref(null);
let store = useHireStore();
let loadingGitRepos = ref(false);
let computedDeveloperGithubUsername = computed(() => {
    return props.developer.github.split("/")[3];
});
let toggleSkills = ref(null);
function toggleSkillsDisplay(opt) {
    toggleSkills.value = opt;
}
let currentSkillDropDownOpened = ref('');
function hanleShowRepoError(skill) {
    currentSkillDropDownOpened.value = skill;

}
let computedDeveloperuser = computed(() => {
    return userGithub.value;
});
async function getUserFromGithub(username) {
    // return fetch(`https://api.github.com/users/${username}`)
    // .then(res => res.json())
    let req = await fetch(`https://api.github.com/users/${username}`);
    let data = await req.json();
    return data;
}
let skillsSelectedArr = ref([]);
let testArr = ref([]);

async function getRepositoriesByLanguage(username) {
    if (props.type !== "hiring") return;
    loadingGitRepos.value = true;
    let req = await fetch(
        `https://api.github.com/users/${username}/repos?language&per_page=100`
    );
    let data = await req.json();
    let languagesArr = [];
    for (let repo of data) {
        // console.log(repo.name)
        let eachLanguageReq = await fetch(repo.languages_url);
        let languageReqData = await eachLanguageReq.json();
        languagesArr.push({
            repoDetails: {
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
            },
            languages: languageReqData,
        });
    }
    // return data
    let currentReviewSkills = props.review.skills_selected;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    for (let skil of currentReviewSkills) {
        let repoArr = [];
        let owsTest = languagesArr.map((lang) => {
            if (lang.languages) {
                let langKeys = Object.keys(lang.languages);
                let langKeysLower = langKeys.map((key) => key.toLowerCase());
                if (langKeysLower.includes(skil.toLowerCase())) {
                    repoArr.push({
                        repo: lang.repoDetails,
                        languages: langKeys.map((key) => {
                            return {
                                language: key,
                                count: lang.languages[key],
                            };
                        }),
                        skillPicked: skil,
                    });
                }
            }
        });
        testArr.value.push({
            [skil]: repoArr,
        });
    }

    loadingGitRepos.value = false;
    store.addNewDevData(props.developer.id, testArr.value);
    return testArr.value;
}
let computedGithubRes = computed(() => {
    return testArr.value;
});
userGithub.value = await getUserFromGithub(
    computedDeveloperGithubUsername.value
);
let resGitRepos = ref(null);
let computedDevData = computed(() => {
    return store.devData;
});
async function initPage() {
    if (store.devData.has(props.developer.id)) {
        resGitRepos.value = store.devData.get(props.developer.id);
    } else {
        resGitRepos.value = await getRepositoriesByLanguage(
            computedDeveloperGithubUsername.value
        );
    }
}
onMounted(() => {
    initPage();
    if (resGitRepos.value) {
        emit("skillsGithub", resGitRepos.value);
    }
});

// watch(useRoute(), async () => {
//     console.log("ROuteChanged", props.developer.github)
//     userGithub.value = await getUserFromGithub(computedDeveloperGithubUsername.value)
//     resGitRepos.value = await getRepositoriesByLanguage(computedDeveloperGithubUsername.value)
// })
</script>

<style>

</style>
