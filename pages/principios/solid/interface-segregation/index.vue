<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <NavMenu />
        <h1 class="text-center text-5xl text-[#272343] my-16">Interface Segregation</h1>

        <p class="text-[#2d334a] text-lg mb-6">
            Una clase no debería estar obligada a implementar <strong class="bg-[#ffd803]">métodos que no
                necesita.</strong>
        </p>

        <p class="text-[#2d334a] text-lg mb-12">
            🔧 Una forma fácil de saber si incumples este principio es: <strong>¿Existen métodos vacíos en clases?</strong>
        </p>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-12">
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <p class="text-[#2d334a] text-lg">Pongamos un ejemplo. Imagina una interfaz Worker que se encarga de:</p>
            <ul class="text-[#2d334a] text-lg mb-6">
                <li>- Work</li>
                <li>- TakeCoffe</li>
                <li>- Eat</li>
            </ul>
            <div class="text-[#2d334a] text-lg mb-6">
                <p>¿Y si tenemos un Worker que es un Robot?</p>
                <p>El trabajador <strong>robot no tiene que parar a tomar café</strong>, ni tampoco tiene que <strong>parar a comer.</strong>
                    La solución es tener <strong class="bg-[#ffd803]">interfaces pequeñas y específicas.</strong>
                </p>
            </div>

            <div class="text-[#2d334a] text-lg">
                <p>🧠 ¿Cómo se llega al nombre de BreakTaker?</p>
                <p>La clave es describir qué hace. Vemos que hay 2 comportamientos generales:</p>
                <ul class="text-[#2d334a] text-lg mb-6">
                    <li>- Trabajar</li>
                    <li>- Descansar</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mx-6 lg:mx-48 xl:mx-72 grid grid-cols-1 md:grid-cols-2 gap-12">
        <pre><code ref="goodCodeBlock" class="language-ts rounded-lg max-w-[500px]">{{ good }}</code></pre>
        <pre><code ref="badCodeBlock" class="language-ts rounded-lg max-w-[500px]">{{ bad }}</code></pre>
    </div>

    <div class="mx-6 lg:mx-48 xl:mx-72 py-16">
        <div class="text-[#2d334a] text-lg">
            <p>💡 Tip práctico:</p>
            <p>Cuando no sepas cómo llamar una interfaz, preguntate: ¿Qué <strong>habilidad o comportamiento</strong> estoy separando?
            </p>
            <p>Y agregale un sufijo como:</p>
            <ul class="text-[#2d334a] text-lg mb-6">
                <li>- able</li>
                <li>- er</li>
            </ul>
            <p><strong>Payable -> pay(), Logger -> log()</strong></p>
        </div>
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
interface Worker {
    work();
}

interface BreakTaker {
    takeCoffe();
    eat();
}

class HumanWorker implements Worker, BreakTaker {
    work(){}
    takeCoffe(){}
    eat(){}
}

class RobotWorker implements Worker {
    work(){}
}`;

const bad = `// bad.ts
interface Worker {
    work();
    takeCoffe();
    eat();
}

class HumanWorker implements Worker {
    work(){}
    takeCoffe(){}
    eat(){}
}

class RobotWorker implements Worker {
    work(){}

    takeCoffe(){
        console.log('no tiene sentido');
    }

    eat(){
        console.log('no tiene sentido');
    }
}    
`;

const goodCodeBlock = ref(null);
const badCodeBlock = ref(null);

function goTo(path: string) {
    router.push(path);
}
</script>