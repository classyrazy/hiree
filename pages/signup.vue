<template>
    <div class="overflow-hidden h-screen block my-auto  center-middle md:px-0">
    <nav class="flex justify-between items-center py-4 px-10">
        <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
        <div class="md:hidden">open</div>
        <ul class="end-link gap-4 md:flex hidden">
            <li class="font-bold text-lg">
                <p type="b-pry-grad" size="medium">Already have an account?</p>
            </li>
            <li class="">
                <router-link to="/login">
                    <c-button size="medium">Log in</c-button>
                </router-link>
            </li>
        </ul>
    </nav>

    <svg class="w-full absolute bottom-0 " viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 470.639C0 379.57 61.5234 300 149.661 277.078L1189.66 6.60557C1316.34 -26.3404 1440 69.2714 1440 200.167V674H0V470.639Z" fill="url(#paint0_linear_115_138)" />
        <path d="M0 470.639C0 379.57 61.5234 300 149.661 277.078L1189.66 6.60557C1316.34 -26.3404 1440 69.2714 1440 200.167V674H0V470.639Z" fill="url(#paint1_linear_115_138)" />
        <defs>
            <linearGradient id="paint0_linear_115_138" x1="269" y1="273" x2="720" y2="674" gradientUnits="userSpaceOnUse">
                <stop offset="0.343518" stop-color="#E7298B" />
                <stop offset="1" stop-color="#9747FF" stop-opacity="0.88" />
            </linearGradient>
            <linearGradient id="paint1_linear_115_138" x1="720" y1="31" x2="720" y2="674" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE33C7" stop-opacity="0.44" />
                <stop offset="0.952701" stop-color="#ED267B" />
                <stop offset="0.967591" stop-color="#ED267B" />
            </linearGradient>
        </defs>
    </svg>

    <div class="w-full mt-24 relative px-4 ">
        <div class="bg-white border border-solid shadow-lg rounded-xl mt-10  max-w-md mx-auto">
            <form class="lg:p-8">
                <div class="p-5">
                    <h2 class="font-bold text-2xl text-center">Log In</h2>
                    <c-input type="email" placeholder="Enter email addresss" full styleType="white" class="text-sm rounded-lg mb-5" label="Email"></c-input>

                    <c-input type="password" placeholder="Enter your Password" full styleType="white" class="text-sm rounded-lg pt-3 mb-5" label="Password"></c-input>

                    <c-input type="password" placeholder="Enter your Password" full styleType="white" class="text-sm rounded-lg pt-3" label="Confirm Password"></c-input>

                    <div class="mb-24 mt-8">
                        <c-button full type="pry rounded-lg " size="">Sign Up</c-button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>
</template>

<script setup lang="ts">
import CButton from '../components/UI/forms/c-button.vue'
import CInput from '../components/UI/forms/c-input.vue'


</script>

<style scoped>
.bg-gradient-def{
    background: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%);
}
.svg{
    height: 100%;
    width: 100%;
}

</style>