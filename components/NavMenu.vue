<template>
    <nav class="flex space-x-2">
        <NuxtLink v-for="route in routes" :to="route.to"
            class="p-4 h-full rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition">
            {{ route.label }}
        </NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
const routes = [
    { to: '/', label: 'Portfolio' },
    { to: '/principios/solid', label: 'Principios SOLID' },
];
</script>