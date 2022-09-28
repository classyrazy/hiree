<template>
    <div class="border border-[#d53a9d] p-4 rounded-md w-full">
        <div class="flex justify-between items-center">
            <h2 class="font-bold text-md">{{rateDetails.rating}}</h2>
            <mark-icon :size="20" v-if="rateDetails.rating == 10"></mark-icon>
        </div>
        <div class="flex justify-between">
            <div class="det">
                <div class="flex gap-4 items-center my-2">
                    <img v-if="reviewedDev.githubUserData" :src="reviewedDev.githubUserData.avatar_url"
                        alt="developer image" class="w-10 h-10 rounded-full">
                    <!-- {{reviewedDev.githubUserData.avatar_url}} -->
                    <h3 class="text-xl font-semibold">{{reviewedDev.firstname}} {{reviewedDev.lastname}}</h3>
                </div>
                <p class="text-sm text-dark" v-if="reviewedDev.city && reviewedDev.country">{{reviewedDev.city}},
                    {{reviewedDev.country}}</p>
                <p class="text-sm text-dark">Experience: {{reviewedDev.experience}} years</p>
                <div class=" flex gap-4 flex-wrap">
                    <skills-pill class=" my-2" v-for="skill in reviewedDev.skills">{{skill}}</skills-pill>
                </div>

            </div>
            <div class="cta flex items-center gap-4 ">
                <!-- <router-link :to="`/developers/${reviewedDev.id}`" class=""> -->
                <c-button type="b-pry-grad" size="small" @click="viewDeveloper(devIdx)"> View</c-button>
                <!-- </router-link> -->
                <a :href="`mailto:${reviewedDev.email}`" class="">
                    <c-button size="small">Contact</c-button>
                </a>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import MarkIcon from '../icons/mark-icon.vue'
import CButton from './forms/c-button.vue'
import SkillsPill from '../Profile/skills-pill.vue';
// import { useModal } from "vue-modally-v3";
// import DevProfile from './modals/dev-profile.vue';

interface Props {
    reviewedDev: object,
    type: string,
    rateDetails: object,
    devIdx: number
}

let props = withDefaults(defineProps<Props>(), {
    type: 'hiring',
})
let emit = defineEmits(['openModal'])
function viewDeveloper(modalIdx) {
    console.log({ modalIdx })
    emit('openModal', modalIdx)
}
</script>

<style scoped>

</style>