<template>
    <div class="mx-9 lg:mx-72">
        <h1 class="text-center text-5xl text-[#272343] my-16">Fran Gregori Tandazo</h1>
        <p class="text-[#2d334a] text-lg mb-24">Me considero una <strong class="bg-[#ffd803]">persona con iniciativa,
                curiosa y resolutiva</strong>. Cuando me enfrento a un
            problema, no me quedo parado: <strong class="bg-[#ffd803]">busco, pruebo, investigo</strong> y, si lo
            necesito, pregunto.
            <br />Si hay que echar horas fuera del horario para sacar adelante una tarea o seguir aprendiendo, no tengo
            problema en hacerlo. Disfruto trabajando en equipo, entendiendo las necesidades tanto del cliente como de la
            empresa, y <strong class="font-bold">aportando valor</strong> con soluciones útiles, claras y bien
            construidas.
        </p>

        <h2 class="text-center text-4xl text-[#272343] mb-14">Proyectos</h2>

        <ul class="mb-24 place-items-center">
            <li>
                <div class="border border-black rounded-lg max-w-md bg-[#272343] text-[#fffffe] p-4">
                    <img src="/public/nochedepelis.jpeg" class="rounded-lg" />
                    <div class="m-2">
                        <h3>Nochedepelis</h3>
                        <p class="mt-1 text-gray-300">Aplicación web para que mi familia y amigos puedan ver películas.
                        </p>
                        <ul class="flex gap-1 mt-3 text-[#2d334a]">
                            <TagLaravel />
                            <TagVue />
                            <TagTailwindcss />
                            <TagDaisyui />
                            <TagNginx />
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="bg-[#e3f6f5] py-12 w-full mb-24">
        <div class="mx-9 lg:mx-72">
            <h2 class="text-center text-4xl text-[#272343] mb-14">Tecnologías</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="max-w-sm rounded-lg border border-black bg-[#fffffe]">
                    <h3 class="text-center text-3xl my-3 text-[#272343]">Frontend</h3>
                    <ul class="grid grid-cols-3 gap-4 place-items-center p-3">
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#E44D26]">
                            <Icon name="skill-icons:html" size="70" />
                            <small>HTML</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#264DE4]">
                            <Icon name="skill-icons:css" size="70" />
                            <small>CSS</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#38BDF8]">
                            <Icon name="skill-icons:tailwindcss-light" size="70" />
                            <small>Tailwind CSS</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#F7DF1E]">
                            <Icon name="skill-icons:javascript" size="70" />
                            <small>JavaScript</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#3178C6]">
                            <Icon name="skill-icons:typescript" size="70" />
                            <small>TypeScript</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#42B883]">
                            <Icon name="skill-icons:vuejs-light" size="70" />
                            <small>Vue</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#61DAFB]">
                            <Icon name="skill-icons:react-light" size="70" />
                            <small>React</small>
                        </li>
                    </ul>
                </div>

                <div class="max-w-sm rounded-lg border border-black bg-[#fffffe]">
                    <h3 class="text-center text-3xl my-3 text-[#272343]">Backend</h3>
                    <ul class="grid grid-cols-3 gap-4 place-items-center p-3">
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#68217A]">
                            <Icon name="logos:c-sharp" size="70" />
                            <small>C#</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#512BD4]">
                            <Icon name="skill-icons:dotnet" size="70" />
                            <small>.Net</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#8892BF]">
                            <Icon name="skill-icons:php-light" size="70" />
                            <small>PHP</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#FF2D20]">
                            <Icon name="skill-icons:laravel-light" size="70" />
                            <small>Laravel</small>
                        </li>
                    </ul>
                </div>

                <div class="max-w-sm rounded-lg border border-black bg-[#fffffe]">
                    <h3 class="text-center text-3xl my-3 text-[#272343]">Bases de datos</h3>
                    <ul class="grid grid-cols-3 gap-4 place-items-center p-3">
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#00758F]">
                            <Icon name="skill-icons:mysql-light" size="70" />
                            <small>MySQL</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#003545]">
                            <Icon name="logos:mariadb-icon" size="70" />
                            <small>MariaDB</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#A91D22]">
                            <Icon name="devicon:microsoftsqlserver" size="70" />
                            <small>SQL Server</small>
                        </li>
                    </ul>
                </div>

                <div class="max-w-sm rounded-lg border border-black bg-[#fffffe]">
                    <h3 class="text-center text-3xl my-3 text-[#272343]">Infraestructura</h3>
                    <ul class="grid grid-cols-3 gap-1 place-items-center p-3">
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#003545]">
                            <Icon name="flat-color-icons:linux" size="70" />
                            <small>Linux</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#F05032]">
                            <Icon name="logos:git-icon" size="70" />
                            <small>Git</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#181717]">
                            <Icon name="logos:github-octocat" size="70" />
                            <small>GitHub</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#2496ED]">
                            <Icon name="skill-icons:docker" size="70" />
                            <small>Docker</small>
                        </li>
                        <li class="flex flex-col text-center duration-200 hover:drop-shadow-[0_0_10px_#009639]">
                            <Icon name="logos:nginx" size="70" />
                            <small>Nginx</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-9 lg:mx-72">
        <h2 class="text-center text-4xl text-[#272343] mb-14">Intereses</h2>
        <div class="mb-24">
            <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                <li class="max-h-64 h-full p-8 bg-[#272343] text-[#fffffe]">
                    <h4 class="text-2xl mb-3">🧼 Clean Code</h4>
                    <p class="text-lg text-gray-300 font-thin">Código autoexplicativo, aplicando DRY, funciones
                        pequeñas,
                        early return y refactorización.</p>
                </li>
                <li class="max-h-64 h-full p-8 bg-[#272343] text-[#fffffe]">
                    <h4 class="text-2xl mb-3">📐 Principios SOLID</h4>
                    <p class="text-lg text-gray-300 font-thin">Aplicados para escribir código fácil de extender y
                        mantenible.</p>
                </li>
                <li class="max-h-64 h-full p-8 bg-[#272343] text-[#fffffe]">
                    <h4 class="text-2xl mb-3">🏗️ Arquitectura de Software</h4>
                    <p class="text-lg text-gray-300 font-thin">Estructuro aplicaciones pensando en la separación de
                        responsabilidades.
                    </p>
                </li>
                <li class="max-h-64 h-full p-8 bg-[#272343] text-[#fffffe]">
                    <h4 class="text-2xl mb-3">🎨 UI/UX</h4>
                    <p class="text-lg text-gray-300 font-thin">Combino estética y usabilidad con el fin de crear
                        interfaces que
                        brindan
                        una experiencia fluida y agradable.</p>
                </li>
                <li class="max-h-64 h-full p-8 bg-[#272343] text-[#fffffe]">
                    <h4 class="text-2xl mb-3">🌈 Teoría del Color</h4>
                    <p class="text-lg text-gray-300 font-thin">Selecciono colores con conciencia de su impacto visual y
                        psicológico,
                        ofreciendo armonía y claridad</p>
                </li>
            </ul>
        </div>


        <footer class="flex space-x-12 place-content-center mb-10">
            <a href="mailto:frangregori61@gmail.com" class="flex flex-col place-items-center">
                <Icon name="logos:google-gmail" size="60"></Icon>
                <small>frangregori61@gmail.com</small>
            </a>

            <a href="https://www.linkedin.com/in/fran-gregori-849409279/" target="_blank"
                class="flex flex-col place-items-center">
                <Icon name="devicon:linkedin" size="60"></Icon>
                <small>fran gregori</small>
            </a>
            <a href="https://github.com/FranGre" target="_blank" class="flex flex-col place-items-center">
                <Icon name="ri:github-fill" size="60"></Icon>
                <small>FranGre</small>
            </a>

        </footer>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '#components';
import TagDaisyui from '~/components/TagDaisyui.vue';
import TagLaravel from '~/components/TagLaravel.vue';
import TagNginx from '~/components/TagNginx.vue';
import TagTailwindcss from '~/components/TagTailwindcss.vue';
import TagVue from '~/components/TagVue.vue';
</script>