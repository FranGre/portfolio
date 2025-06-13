<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <NavMenu />
        <h1 class="text-center text-5xl text-[#272343] my-16">Abierto/Cerrado</h1>

        <p class="text-[#2d334a] text-lg">
            El código debe estar <strong class="bg-[#ffd803]">abierto para su extensión</strong>(agregar una nueva funcionalidad) pero cerrado para su modificación.
            Cada clase o módulo debe tener una única razón para cambiar.
            <br/>
            <br/>
            Si necesitamos una nueva funcionalidad, lo ideal es agregar nuevo código (por ejemplo, crear una nueva clase), sin tocar el código ya existente.
            <br/>
            <br/>
        </p>

        <p class="text-[#2d334a] text-lg">
            Esto ayuda a que:
        </p>
        <ul class="text-[#2d334a] text-lg mb-12">
            <li>- <strong>No rompamos</strong> cosas que ya funcionan rígido</li>
            <li>- <strong>Difícil</strong> de mantener</li>
            <li>- Sea más <strong>fácil de extender y mantener</strong></li>
        </ul>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-12">
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <p class="text-[#2d334a] text-lg">Pongamos un ejemplo. Imagina que tienes una clase que genera reportes de distinto tipo PDF, Excel etc...
                <br/>
                Cada vez que agregas un nuevo tipo de reporte (como "CSV"), tienes que modificar la clase original. Eso rompe el principio de abierto/cerrado.
                <br/>
                <br/>
            </p>

            <p class="text-[#2d334a] text-lg">
                👉 ¿La solución? Crear una <strong class="bg-[#ffd803]">interfaz</strong> Report, y luego <strong>una clase para cada tipo</strong>: PDFReport, CSVReport, etc.
                <br/>
                El código queda <strong>preparado para crecer sin tener que modificar lo que ya existe.</strong>
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
interface Report {
    generate();
}

class PDFReport implements Report {
    generate(){}
}

class CSVReport implements Report {
    generate(){}
}

class ReportGenerator {
    generateReport(report: Report) {
        report.generate();
    }
}`;

    const bad = `// bad.ts
class ReportGenerator {
    generateReport(reportType: string) {
        if (reportType === "PDF") {}
        else if(reportType === "CSV"){}
    }
}`;

    const goodCodeBlock = ref(null);
    const badCodeBlock = ref(null);
</script>