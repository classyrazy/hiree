<template>
    <div>
        <nav class="flex justify-between items-center py-4 px-10">
            <router-link to="/"><img src="/logo.svg" alt="logo"></router-link>
            <div class="md:hidden">open</div>
            <ul class="end-link gap-4 md:flex hidden">
                <li class=""><router-link to="/signup"><c-button type="b-pry-grad" size="medium">Apply as a developer</c-button></router-link></li>
                <li class=""><router-link to="/hiring/signup"><c-button size="medium">Start hiring</c-button></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import CButton from './forms/c-button.vue'

</script>

<style scoped>
.border-gradient-def{
    /* border-color: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%); */
    /* border: 1px solid linear-gradient(180deg, #CE33C7 0%, #ED267B 100%); */
}
.bg-gradient-def{
    background: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%);
}
</style>