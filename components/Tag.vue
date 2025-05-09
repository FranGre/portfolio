<template>
    <li :class="className">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({ class: String });

const className = `text-sm py-1 px-2 rounded-xl hover:brightness-120 transition duration-200 ${props.class}`;
</script>