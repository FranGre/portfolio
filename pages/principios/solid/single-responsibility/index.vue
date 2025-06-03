<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <h1 class="text-center text-5xl text-[#272343] my-16">Responsabilidad Única</h1>

        <p class="text-[#2d334a] text-lg">
            Cada clase o módulo debe tener <strong class="bg-[#ffd803]">una única razón para cambiar</strong>.
            <br/>
            <br/>
            Esto no significa que una clase solo haga una sola cosa. Significa que debe encargarse de un solo tipo de responsabilidad.
            <br/>
            <br/>
        </p>

        <p class="text-[#2d334a] text-lg">
            🔧 Cuando una clase tiene más de una responsabilidad, el código se vuelve:
        </p>
        <ul class="text-[#2d334a] text-lg mb-12">
            <li>- Más <strong>rígido</strong></li>
            <li>- <strong>Difícil</strong> de mantener</li>
            <li>- <strong>Menos tolerante</strong> a cambios</li>
        </ul>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-12">
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <p class="text-[#2d334a] text-lg">Pongamos un ejemplo. Imagina una clase se encarga de:</p>
            <ul class="text-[#2d334a] text-lg mb-6">
                <li>- <strong>Guardar datos</strong> de un usuario</li>
                <li>- <strong>Enviar emails</strong></li>
            </ul>
            <p class="text-[#2d334a] text-lg">
                Si cambia la forma de enviar emails, tendrás que tocar la misma clase que guarda los datos.
                Eso viola el principio de responsabilidad única.
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

    const good = `// good.ts
class UserService {
    create(){}
    update(){}
    delete(){}
}

class EmailSender {
    sendEmail(){}
}`;

    const bad = `// bad.ts
class UserService {
    create(){}
    update(){}
    delete(){}
    sendEmail(){}
}`;

    const goodCodeBlock = ref(null);
    const badCodeBlock = ref(null);

    function goTo(path: string){
        router.push(path);
    }
</script>