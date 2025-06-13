<template>
    <div class="mx-6 lg:mx-48 xl:mx-72">
        <NavMenu />
        <h1 class="text-center text-5xl text-[#272343] my-16">Dependency Inversion</h1>

        <p class="text-[#2d334a] text-lg mb-6">
            Un módulo o componente necesita de otro para poder realizar su trabajo. Sin embargo, debe <strong
                class="bg-[#ffd803]">depender
                de abstracciones</strong><strong>(interfaces o clases abstractas)</strong> y no de implementaciones
            concretas.
        </p>

        <div class="text-[#2d334a] text-lg mb-12">
            <p class="text-[#2d334a] text-lg">Esto nos ayuda con:</p>
            <ul class="text-[#2d334a] text-lg mb-6">
                <li>- Código flexible y tolerante a cambios</li>
                <li>- Facilita el testing</li>
                <li>- Hace visibles tus dependencias</li>
            </ul>
        </div>
    </div>

    <div class="bg-[#e3f6f5] py-12 w-full mb-12">
        <div class="mx-6 lg:mx-48 xl:mx-72">
            <p class="text-[#2d334a] text-lg">Pongamos un ejemplo. Imagina que tienes una clase Bank que depende
                directamente de una clase CreditCardVisa.</p>
                <br/>
            <p class="text-[#2d334a] text-lg">Si en un futuro quieres aceptar CreditCardMastercard, tendrías que
                modificar la clase Bank, rompiendo el
                código abierto/cerrado.</p>
            <div class="text-[#2d334a] text-lg my-6">
                <p>📌 Solución:</p>
                <p>Crear una <strong>interfaz CreditCard</strong> que <strong>defina</strong> los <strong>métodos comunes</strong>, y haz que tanto <strong>Visa</strong> como <strong>Mastercard</strong> la
                    <strong>implementen.</strong></p>
                <br />
                <p>Luego, la clase <strong>Bank</strong> solo <strong>depende de CreditCard (la abstracción)</strong>, no de ninguna tarjeta concreta.</p>
                <br />
                <p>No es obligatorio que la dependencia esté en el constructor, puede estar en cualquier lugar mientras
                    se inyecte.</p>
            </div>
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
interface PaymentGateway {
    pay(amount: number);
}

class VisaPaymentGateway implements PaymentGateway {
    pay(amount: number) {}
}

class MastercardPaymentGateway implements PaymentGateway {
    pay(amount: number) {}
}

class Bank {
    pay(paymentGateway: PaymentGateway, amount: number) {
        paymentGateway.pay(amount);
    }
}
`;

const bad = `// bad.ts
class Bank {
    payVisa(amount: number){
        const visaCard = new Visa();
        visa.pay(amount);
    }

    payMastercard(amount: number){
        const masterCard = new MasterCard();
        masterCard.pay(amount);
    }
}
`;

const goodCodeBlock = ref(null);
const badCodeBlock = ref(null);

function goTo(path: string) {
    router.push(path);
}
</script>