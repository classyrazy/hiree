<template>
    <div class="relative">
        <div class="">
            <h3 class="font-semibold text-xl md:text-3xl mt-9 my-6">Review Created</h3>
            <p>We suggest the developers that goes with your selected skills and you sort through them with ease</p>
            <c-button type="pry" class="my-4" size="medium" :loading="loading" @click="submitData">Start Review
            </c-button>

        </div>
    </div>
</template>
  
  <script setup lang="ts">
import CButton from './UI/forms/c-button.vue'
import useFormRequest from '~/composables/useFormRequest'
interface Props {
    testArray: string[];
    skills: string[];
}

let props = defineProps<Props>()

console.log(props.testArray)
let developersArr = props.testArray
let skillsArr = props.skills
onMounted(() => {
    console.log(props.testArray)
})
let { submitData, loading, data } = useFormRequest(
    "api/hire/review/create",
    true,
    null,
    { developersArr, skillsArr },
    (data) => {
        if (data) {
            console.log(data)
        }
    },
    (error) => {
        console.log(error)
        // loginError.value = error.response.data.error;
    }
);
</script>
  
  <style scoped>
  </style>
  