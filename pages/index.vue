<template>
    <div class="mx-auto">
        <NavBar />
        <div class="w-full h-[70vh]  grid justify-center items-center mx-auto">
            <div class="mx-auto" style="max-width:1200px">
                <h1 class="text-5xl md:text-7xl font-bold font-monts text-center text-dark max-w-[700px] mx-auto">Find
                    unicorn <span class="text-grad">developers</span> with Ease</h1>
                <p
                    class="md:text-xl text-center md:max-w-[800px] max-w-[900px] px-10 md:px-auto mx-auto my-4 font-monts-alt">
                    Let’s make your hiring process
                    easier and
                    efficient by going through the filtered pool of developers right for your job without stress</p>
                <div class="w-full justify-center py-4 flex gap-4 mx-auto">
                    <router-link to="/hiring/signup">
                        <c-button>Start Hiring</c-button>

                    </router-link>
                    <router-link to="/jobs"><c-button type="b-pry-grad">View jobs</c-button></router-link>
                </div>
            </div>

        </div>
        <div class="md:flex lg:w-[80%] gap-10 mx-auto justify-center py-24 text-dark">
            <div class="px-8 w-full">
                <h2 class="text-2xl md:text-4xl font-bold font-monts">Hire the best fit for your next role today.</h2>
                <p class="text-lg  max-w-[800px] my-4 font-monts-alt">Get remote or onsite developers with strong
                    technical and communication skills with ease, ready to work in your timezone.</p>
                <div class="w-full  py-4 flex gap-4 mx-auto">
                    <router-link to="/hiring/signup">
                        <c-button>Start Hiring</c-button>

                    </router-link>
                    <router-link to="/signup"><c-button type="b-pry-grad">Apply as a developer</c-button></router-link>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4  ml-auto">
                <features-card card-header="Hiring Made Easier" right>
                    <p>Sign up and choose the stack or skill you are looking for, you can choose more than one skill</p>
                </features-card>
                <features-card card-header="Effective Developer profiles" right>
                    <p>With our well detailed developer profile you get to know and rate (1-10) the person you need for
                        your next job.</p>
                </features-card>
                <features-card card-header="You pick, or we pick " right>
                    <p>After sorting and rating the developers we suggest for you, you can pick the one best fit for the
                        role or use our algorithm to pick.</p>
                </features-card>
            </div>

        </div>
        <footer class="bg-grad-def">
            <div class="">
                <h2 class="text-white text-2xl font-monts-alt">Hiree.</h2>
                <div class="socials">
                    <!-- <a href="https://www.facebook.com/"><img src="/images/facebook.svg" alt="facebook"></a>
                <a href="https://www.twitter.com/"><img src="/images/twitter.svg" alt="twitter"></a>
                <a href="https://www.instagram.com/"><img src="/images/instagram.svg" alt="instagram"></a>
                <a href="https://www.linkedin.com/"><img src="/images/linkedin.svg" alt="linkedin"></a> -->
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import FeaturesCard from '../components/UI/features-card.vue'
import CButton from '../components/UI/forms/c-button.vue'
import NavBar from '../components/UI/NavBar.vue'

</script>

<style scoped>
.text-grad {
    background: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bg-grad-def {
    background: linear-gradient(180deg, rgba(237, 38, 123, 0.76) 19.29%, rgba(151, 71, 255, 0.88) 100%);
}
</style>