import { defineNuxtConfig } from 'nuxt'
import vueModallyV3 from "vue-modally-v3";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    ssr: false,
    buildModules: ["@pinia/nuxt"]
})
