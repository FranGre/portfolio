<template>
    <div class="mx-72">
        <h1 class="text-center text-4xl">Fran Gregori Tandazo</h1>
        <p>Me considero una persona con iniciativa, curiosa y resolutiva. Cuando me enfrento a un problema, no me quedo
            parado: busco, pruebo, investigo y, si lo necesito, pregunto.</p>
        <p>Si hay que echar horas fuera del horario para sacar adelante una tarea o seguir aprendiendo, no tengo
            problema
            en hacerlo. Disfruto trabajando en equipo, entendiendo las necesidades tanto del cliente como de la empresa,
            y
            aportando valor con soluciones útiles, claras y bien construidas.</p>

        <h2 class="text-center text-2xl">Proyectos</h2>

        <ul>
            <li>
                <div class="border border-black max-w-md">
                    <small>img</small>
                    <div class="m-2">
                        <h3>Nochedepelis</h3>
                        <p class="mt-1">Aplicación web para que mi familia y amigos puedan ver películas.</p>
                        <ul class="flex gap-1 mt-3">
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

        <h2 class="text-center text-2xl">Tecnologías</h2>
        <div class="grid grid-cols-2 gap-12">
            <div class="max-w-sm rounded-lg border border-black">
                <h3 class="text-center text-3xl my-3">Frontend</h3>
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

            <div class="max-w-sm rounded-lg border border-black">
                <h3 class="text-center text-3xl my-3">Backend</h3>
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

            <div class="max-w-sm rounded-lg border border-black">
                <h3 class="text-center text-3xl my-3">Bases de datos</h3>
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

            <div class="max-w-sm rounded-lg border border-black">
                <h3 class="text-center text-3xl my-3">DevOps / Infraestructura</h3>
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

    <h2 class="text-center text-2xl">En proceso de aprendizaje</h2>


    <h2 class="text-center text-2xl">Contacto</h2>
</template>

<script setup lang="ts">
import { Icon } from '#components';
import TagDaisyui from '~/components/TagDaisyui.vue';
import TagLaravel from '~/components/TagLaravel.vue';
import TagNginx from '~/components/TagNginx.vue';
import TagTailwindcss from '~/components/TagTailwindcss.vue';
import TagVue from '~/components/TagVue.vue';
</script>