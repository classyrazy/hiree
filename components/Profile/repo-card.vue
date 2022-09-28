<template>
    <div class="">
        <div class="" v-if="repos">
            <div class="" v-for="(lang, idxLang) in repos">
                <div class="py-2 px-3 border-gray-300 rounded-lg bg-white">
                    <a target="_blank" :href="lang.repo.url" class="font-bold text-lg underline text-blue-500 mb-3 ">{{
                    lang.repo.name
                    }}</a>
                    <p class="text-sm">{{ lang.repo.description }}</p>
                    <span class="inline-block bg-gray-100 px-2 py-1 rounded-md my-2 mx-2"
                        v-for="(skillLang, idx) in lang.languages" :key="idx">{{
                        skillLang.language
                        }}</span>
                </div>
            </div>
        </div>
        <!-- {{repos}} -->
        <!-- <div class="flex justify-center my-10 items-center" v-if=>
            <p class="text-xl text-semi-bold">{{ devName }} does not have any repository
                with <span class="text-[#d53a9d]">{{skill}}</span></p>

        </div> -->
    </div>
</template>

<script setup lang="ts">

interface Props {
    repos: object[],
    type: string,
    skill: string,
    devName: string,
}

// let props = defineProps<Props>()
let props = withDefaults(defineProps<Props>(), {
    type: 'hiring',
})
let emit = defineEmits(["mounted"])
onMounted(() => {
    emit('mounted', props.repos)
})
</script>

<style scoped>

</style>