<template>
    <div class="mx-48">
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
        <div>
            <h3 class="text-center text-xl">Frontend</h3>
            <ul class="flex gap-6 place-content-center">
                <li>
                    <Icon name="logos:html-5" size="80" />
                </li>
                <li>
                    <Icon name="logos:css-3" size="80" />
                </li>
                <li>
                    <Icon name="logos:tailwindcss-icon" size="80" />
                </li>
                <li>
                    <Icon name="logos:javascript" size="80" />
                </li>
                <li>
                    <Icon name="logos:typescript-icon" size="80" />
                </li>
                <li>
                    <Icon name="logos:vue" size="80" />
                </li>
                <li>
                    <Icon name="logos:react" size="80" />
                </li>
            </ul>

            <h3 class="text-center text-xl">Backend</h3>
            <ul class="flex gap-6 place-content-center">
                <li>
                    <Icon name="logos:c-sharp" size="80" />
                </li>
                <li>
                    <Icon name="logos:dotnet" size="80" />
                </li>
                <li>
                    <Icon name="logos:php" size="80" />
                </li>
                <li>
                    <Icon name="logos:laravel" size="80" />
                </li>
            </ul>

            <h3 class="text-center text-xl">Bases de datos</h3>
            <ul class="flex gap-6 place-content-center">
                <li>
                    <Icon name="logos:mysql" size="80" />
                </li>
                <li>
                    <Icon name="logos:mariadb" size="80" />
                </li>
                <li>SQL Server</li>
            </ul>

            <h3 class="text-center text-xl">DevOps / Infraestructura</h3>
            <ul class="flex gap-6 place-content-center">
                <li>
                    <Icon name="logos:linux-tux" size="80" />
                </li>
                <li>
                    <Icon name="logos:git-icon" size="80" />
                </li>
                <li>
                    <Icon name="logos:github-octocat" size="80" />
                </li>
                <li>
                    <Icon name="logos:docker-icon" size="80" />
                </li>
                <li>CI/CD</li>
                <li>
                    <Icon name="logos:nginx" size="80" />
                </li>
            </ul>
        </div>

        <h2 class="text-center text-2xl">En proceso de aprendizaje</h2>


        <h2 class="text-center text-2xl">Contacto</h2>
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