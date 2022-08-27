<template>
    <button :class="__class" class="flex justify-center" style="white-space: nowrap" :disabled="disabled">
        <component v-if="icon || loading" :class="`${!iconOnly ? 'mr-2' : ''} my-auto`" size="17" :color="types[type]"
            :is="loading ? icon : icon"></component>
        <span class="my-auto" :class="!icon && !loading ? (round ? ' mt-1 ml-1 z-50' : 'm-auto') : ''">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
import Spinner from '../svgs/loader-icon.vue'


import { computed } from "@vue/reactivity"

let props = defineProps({
    size: {
        type: String,
        default: 'medium'
    },
    type: {
        type: String,
        default: 'pry'
    },
    round: {
        type: Boolean,
        default: false
    },
    icon: {
        type: Object
    },
    iconOnly: {
        type: Boolean,
        defult: false
    },
    full: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})

let base = 'font-monts-alt font-medium'
let sizes = {
    small: 'py-1 px-4 text-xs',
    medium: 'py-3 px-8 text-sm',
    big: 'py-4 px-8 txt-s-4'
}
let types = {
    'pry': {
        _class: ' text-white rounded-md bg-gradient-def',
        text: '#03053D'
    },
    'b-pry-grad': {
        _class: ' border text-dark border-[#d53a9d] rounded-md',
        text: '#03053D'
    }
}
// hover:bg-pry-dark hover:text-white transition-colors duration-500

let __class = computed(() => {
    let __base = base  + ((types[props.type] && types[props.type]._class) || types['pry']._class) + ' ' + (sizes[props.size] || sizes['medium']);
    if (props.round)
        __base += ' rounded-full h-12 w-12 max-w-12 center'
    else
        __base += ' ' + base;

    if (props.full)
        __base += ' w-full'
    if (props.disabled)
        __base += ' fade-40'

    return __base
})

</script>

<style scoped>
button {
    cursor: pointer;
}
.bg-gradient-def{
    background: linear-gradient(180deg, #CE33C7 0%, #ED267B 100%);

}
</style>