<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <NavMenu />
        <h1 class="text-center text-5xl text-[#272343] my-16">Los 5 Principios SOLID</h1>

        <p class="text-[#2d334a] text-lg">
            Si eres programador y te importa la calidad de tu código, los principios SOLID son <strong
                class="bg-[#ffd803]">esenciales</strong>.
            <br />
            <br />
            Fueron definidos por Robert C. Martin (Uncle Bob) y se han convertido en una base clave del desarrollo
            orientado a objetos moderno.
            <br />
            <br />
        </p>

        <p class="text-[#2d334a] text-lg">
            Aplicar SOLID nos ofrece:
        </p>
        <ul class="text-[#2d334a] text-lg mb-16">
            <li>Escribir <strong>código limpio y organizado</strong></li>
            <li><strong>Facilitar el mantenimiento</strong> y la evolución de tus proyectos</li>
            <li>Hace más fácil trabajar en equipo</li>
        </ul>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-24">
        <p class="text-[#2d334a] text-lg text-center mb-9">Cada principio está explicado con ejemplos claros, sencillos
            y prácticos.</p>
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <ul class="text-[#2d334a] text-lg grid grid-cols-1 md:grid-cols-2 gap-10">
                <li class="p-4 text-center max-w-sm rounded-lg border border-black bg-[#fffffe] hover:cursor-pointer transition duration-200 hover:shadow-md hover:scale-102"
                    @click="goTo('/principios/solid/single-responsibility')">
                    <h2 class="text-center text-2xl my-3 text-[#272343]">1.Responsabilidad única</h2>
                </li>
                <li class="p-4 text-center max-w-sm rounded-lg border border-black bg-[#fffffe] hover:cursor-pointer transition duration-200 hover:shadow-md hover:scale-102"
                    @click="goTo('/principios/solid/open-closed')">
                    <h2 class="text-center text-2xl my-3 text-[#272343]">2.Abierto/Cerrado</h2>
                </li>
                <li class="p-4 text-center max-w-sm rounded-lg border border-black bg-[#fffffe] hover:cursor-pointer transition duration-200 hover:shadow-md hover:scale-102"
                    @click="goTo('/principios/solid/liskov-substitution')">
                    <h2 class="text-center text-2xl my-3 text-[#272343]">3.Sustitución de Liskov</h2>
                </li>
                <li class="p-4 text-center max-w-sm rounded-lg border border-black bg-[#fffffe] hover:cursor-pointer transition duration-200 hover:shadow-md hover:scale-102"
                    @click="goTo('/principios/solid/interface-segregation')">
                    <h2 class="text-center text-2xl my-3 text-[#272343]">4.Segregación de Interfaces</h2>
                </li>
                <li class="p-4 text-center max-w-sm rounded-lg border border-black bg-[#fffffe] hover:cursor-pointer transition duration-200 hover:shadow-md hover:scale-102"
                    @click="goTo('/principios/solid/dependency-inversion')">
                    <h2 class="text-center text-2xl my-3 text-[#272343]">5.Inversión de Dependencias</h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();

function goTo(path: string) {
    router.push(path);
}
</script>