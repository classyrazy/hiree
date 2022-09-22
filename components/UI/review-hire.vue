<template>
    <div class="border border-gray-100 p-4 rounded-lg my-4">
        <div class="flex justify-between w-full items-center">
            <h2 class="text-2xl font-monts font-medium">Review {{reviewIndex + 1}}</h2>
        </div>
        <div class="flex justify-between gap-6 max-h-[300px] overflow-hidden ">
            <div class=" flex gap-4 flex-wrap">
                <skills-pill class=" my-2" v-for="skill in details.skills_selected">{{skill}}</skills-pill>
            </div>
            <div class="cta flex items-center gap-4 ">
                <router-link :to="`/hiring/review/${details.id}`" class=""
                    v-if="type == 'hiring' && details.status == 'pending'">
                    <c-button size="small">Review</c-button>
                </router-link>
                <p v-else-if="type == 'hiring' && details.status == 'complete'">Completed</p>
                <router-link :to="`/hiring/review/result/${details.id}`" class="">
                    <c-button type="b-pry-grad" size="small"> View</c-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillsPill from '../Profile/skills-pill.vue'
import CButton from './forms/c-button.vue'
interface Props {
    details: {
        id: string,
        company_id: string,
        developer_array: object[],
        results: object[],
        skills_selected: string[],
        status: "pending" | "complete",
        __createdtime__: number,
        __updatedtime__: number,
    },
    type: string,
    reviewIndex: number
}

let props = withDefaults(defineProps<Props>(), {
    type: 'hiring',
})


</script>

<style scoped>
.test-class {
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    /* fallback */
    max-height: 200px;
    /* fallback */
    -webkit-line-clamp: 2;
    /* number of lines to show */
    -webkit-box-orient: vertical;
}

.text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    /* number of lines to show */
    -webkit-box-orient: vertical;
}
</style>