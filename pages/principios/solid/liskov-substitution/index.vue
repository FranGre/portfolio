<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <NavMenu />
        <h1 class="text-center text-5xl text-[#272343] my-16">Sustitución de Liskov</h1>

        <p class="text-[#2d334a] text-lg">
            Si algo <strong>funciona con la clase padre</strong>, también debería <strong>funcionar con cualquier clase hija sin errores ni sorpresas.</strong>
            <br/>
            <br/>
            Una buena forma de saber si incumples este principio es:
            <br/>
            ¿Puedo reemplazar la clase hija donde estaba la padre sin que explote nada?
            <br/>
            <br/>
        </p>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-12">
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <p class="text-[#2d334a] text-lg">Pongamos un ejemplo. Supongamos que tienes una clase base PayMethod. Cuando la diseñas, estás diciendo:
                <br/>
                Cualquier clase que herede de mí debe comportarse igual que yo, o al menos no romper nada.
                <br/>
                Pero si creas una subclase PayMethodPayPal que agrega una lógica distinta a la del padre, como modificar el monto para calcular comisiones solo dentro de la hija, entonces:
                <br/>
                - El comportamiento ya no es igual
                <br/>
                <br/>
            </p>

            <p class="text-[#2d334a] text-lg">
                📌 Solución:
                <br/>
                Si vas a calcular comisiones o aplicar reglas, hazlo en la <strong>clase base</strong>, para que todas las <strong>clases hijas sigan las mismas reglas</strong>  y no rompan la promesa del diseño.
                <br/>
            </p>
        </div>
    </div>
    <div class="mx-6 lg:mx-48 xl:mx-72 grid grid-cols-1 md:grid-cols-2 gap-12">
        <pre><code ref="goodCodeBlock" class="language-ts rounded-lg max-w-[500px]">{{ good }}</code></pre>
        <pre><code ref="badCodeBlock" class="language-ts rounded-lg max-w-[500px]">{{ bad }}</code></pre>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import hljs from 'highlight.js/lib/core';
    import typescript from 'highlight.js/lib/languages/typescript';

    hljs.registerLanguage('typescript', typescript);

    onMounted(() => {
        if (goodCodeBlock.value) {
            hljs.highlightElement(goodCodeBlock.value);
        }

        if (badCodeBlock.value) {
            hljs.highlightElement(badCodeBlock.value);
        }
    });

    const good = `// good.ts`;

    const bad = `// bad.ts`;

    const goodCodeBlock = ref(null);
    const badCodeBlock = ref(null);

    function goTo(path: string){
        router.push(path);
    }
</script>