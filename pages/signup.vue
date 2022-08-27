<template>
    <div class="overflow-hidden h-screen block my-auto md:px-0 font-monts text-dark">
        <nav class="flex justify-between items-center py-6 px-10">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <ul class="end-link gap-4 flex items-center">
                <li class="font-medium font-monts-alt text-md md:block hidden">
                    <p>Already have an account?</p>
                </li>
                <li class="">
                    <router-link to="/login">
                        <c-button size="medium">Log in</c-button>
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- <div class="w-full absolute bottom-0 md:hidden block">
            <svg width="100%" height="555" viewBox="0 0 428 555" fill="none" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path
                    d="M0 218.5C5.39934 139.61 59.7265 72.5932 135.793 50.9895L300.68 4.16019C364.527 -13.973 428 33.9835 428 100.356V555H0V218.5V218.5Z"
                    fill="url(#paint0_linear_156_180)" />
                <path
                    d="M0 218.5C5.39934 139.61 59.7265 72.5932 135.793 50.9895L300.68 4.16019C364.527 -13.973 428 33.9835 428 100.356V555H0V218.5V218.5Z"
                    fill="url(#paint1_linear_156_180)" />
                <defs>
                    <linearGradient id="paint0_linear_156_180" x1="79.9528" y1="233.653" x2="296.43" y2="305.042"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.343518" stop-color="#E7298B" />
                        <stop offset="1" stop-color="#9747FF" stop-opacity="0.88" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_156_180" x1="214" y1="39.7222" x2="214" y2="555"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CE33C7" stop-opacity="0.44" />
                        <stop offset="0.952701" stop-color="#ED267B" />
                        <stop offset="0.967591" stop-color="#ED267B" />
                    </linearGradient>
                </defs>
            </svg>

        </div> -->
        <div class="w-full absolute bottom-0 hidden md:block">
            <svg class="relative" viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none" width="100%" height="455">
                <path
                    d="M0 470.639C0 379.57 61.5234 300 149.661 277.078L1189.66 6.60557C1316.34 -26.3404 1440 69.2714 1440 200.167V674H0V470.639Z"
                    fill="url(#paint0_linear_115_138)" />
                <path
                    d="M0 470.639C0 379.57 61.5234 300 149.661 277.078L1189.66 6.60557C1316.34 -26.3404 1440 69.2714 1440 200.167V674H0V470.639Z"
                    fill="url(#paint1_linear_115_138)" />
                <defs>
                    <linearGradient id="paint0_linear_115_138" x1="269" y1="273" x2="720" y2="674"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.343518" stop-color="#E7298B" />
                        <stop offset="1" stop-color="#9747FF" stop-opacity="0.88" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_115_138" x1="720" y1="31" x2="720" y2="674"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CE33C7" stop-opacity="0.44" />
                        <stop offset="0.952701" stop-color="#ED267B" />
                        <stop offset="0.967591" stop-color="#ED267B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="w-full relative px-4 center-middle">
            <formError :error-msg="signupError" @close-error="signupError = null"></formError>
            <div class="bg-white border border-solid shadow-lg rounded-xl mt-10  max-w-md mx-auto">
                <form class="lg:p-8" @submit.prevent="submitHandler">
                    <div class="p-5">
                        <h2 class="font-bold text-2xl text-center">Sign Up</h2>
                        <div class="flex flex-col gap-4">
                            <c-input type="email" placeholder="Enter email addresss" full styleType="white"
                                class="text-sm rounded-lg " label="Email" :value="formReactive.email"></c-input>

                            <c-input type="password" placeholder="Enter your Password" full styleType="white"
                                class="text-sm rounded-lg pt-3" label="Password" :value="formReactive.password"></c-input>

                            <c-input type="password" placeholder="Enter your Password" full styleType="white"
                                class="text-sm rounded-lg" label="Confirm Password" :value="formReactive.confirmPassword"></c-input>
                            <div class="">
                                <c-button full type="pry rounded-lg" size="" :loading="loading">Sign Up</c-button>
                            </div>
                            <p clas="text-xs">By signing up, you agree to our <span class="text-[#007CEF]"><a href="#">Terms and Conditions</a></span>
                            </p>
                        </div>

                    </div>
                </form>
    
            </div>
            <router-link to="/hiring/signup"><p class="text-center text-dark md:text-white my-6 underline">Sign up as an hiring manager instead</p></router-link>
        </div>

    </div>
</template>

<script setup lang="ts">
import FormError from '../components/UI/form-error.vue'
import CButton from '../components/UI/forms/c-button.vue'
import CInput from '../components/UI/forms/c-input.vue'
import useFormRequest from '../composables/useFormRequest'
let signupError = ref(null)
let formReactive  = reactive({
    email: {
        value: null,
        error: null
    },
    password: {
        value: null,
        error: null
    },
    confirmPassword: {
        value: null,
        error: null
    }
})

let validate = () => {
    if (formReactive.email.value == null || formReactive.email.value.trim() == "") {
        formReactive.email.error = "Email is required";
    }
    else {
        formReactive.email.error = null;
    }
    if (formReactive.password.value == null || formReactive.password.value.trim() == "") {
        formReactive.password.error = "Password is required";
    } else if (formReactive.password.value.trim().length < 6) {
        formReactive.password.error = "Password must be at least 6 characters";
    }
    else {
        formReactive.password.error = null;
    }
    if (formReactive.confirmPassword.value == null || formReactive.confirmPassword.value.trim() == "") {
        formReactive.confirmPassword.error = "Confirm Password is required";
    } else if (formReactive.confirmPassword.value.trim().length < 6) {
        formReactive.confirmPassword.error = "Confirm Password must be at least 6 characters";
    } else if (formReactive.confirmPassword.value.trim() !== formReactive.password.value.trim()) {
        formReactive.confirmPassword.error = "Confirm Password must be same as Password";
    }
    else {
        formReactive.confirmPassword.error = null;
    }
    if (formReactive.email.error == null && formReactive.password.error == null && formReactive.confirmPassword.error == null) {
        return true;
    }
    return false;
}
let { submitForm, loading, data } = useFormRequest(
    "http://localhost:7000/api/user/signup",
    false,
    formReactive,
    null,
    (data) => {
        console.log(data)
        if(data){
            console.log(data.data.token)
            localStorage.setItem("USER_AUTH_TOKEN", data.data.token);
            useRouter().push("/profile");
        }

    },
    (error) => {
        console.log(error)
        signupError.value = error.response.data.error;
    }
);
let submitHandler = () => {
    validate();
    console.log({ formReactive });

    if (validate()) {
        submitForm()
    }
};

</script>

<style scoped>
.bg-gradient-def {
    background: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%);
}

.center-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>