<template>
    <div class="relative">
        <div class="">
            <h3 class="font-semibold text-xl md:text-3xl mt-9 my-6">Review Created</h3>
            <p>We suggest the developers that goes with your selected skills and you sort through them with ease</p>
            <c-button type="pry" class="my-4" size="medium" :loading="loading" @click="submitData">Start Review
            </c-button>

        </div>
    </div>
    <formError :error-msg="testCompoError" @close-error="testCompoError = null"></formError>

</template>
  
  <script setup lang="ts">
import FormError from './UI/form-error.vue'
import CButton from './UI/forms/c-button.vue'
import useFormRequest from '~/composables/useFormRequest'
interface Props {
    testArray: string[];
    skills: string[];
}
let testCompoError = ref(null)
let props = defineProps<Props>()

let _developersArr = props.testArray
let developersArr = []
_developersArr.forEach(item => {
    if (!developersArr.includes(item)) {
        developersArr.push(item)
    }
}
)
let skillsArr = props.skills
onMounted(() => {
})
let { submitData, loading, data } = useFormRequest(
    "api/hire/review/create",
    true,
    null,
    { developersArr, skillsArr },
    (data) => {
        if (data) {
            // console.log(data)
            // console.log([...new Set(data.data)])
            // let unique = []
            // data.data[0].forEach(item => {
            //     if (!unique.includes(item)) {
            //         unique.push(item)
            //     }
            // }
            // console.log(unique)
            // )
            useRouter().push("/hiring/review/" + data.data.inserted_hashes[0])
        }
    },
    (error) => {
        console.log(error)
        // testCompoError.value = error.response.data.error;
    }
);
</script>
  
  <style scoped>
  </style>
  