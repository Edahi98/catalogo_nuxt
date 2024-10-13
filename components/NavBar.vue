<script lang="js" setup>
    const prop = defineProps(["estado_inicio", "estado_ropa", "estado_calzado", "estado_accesorio"]);
    function RandomIcon(){
            const emojis = ["👽", "👾", "🌐","☄️"];
            let index = Math.floor(Math.random() * emojis.length);
            console.log(emojis[index])
            document.getElementById("title_navbar").innerHTML = `CATÁLOGO${emojis[index]}`;

    }

    onNuxtReady(async () =>{
        setInterval(()=>RandomIcon(), 100);
    });
    const isOpen = ref(false);

</script>
<template>
        <header>
        <h1 class="h1" id="title_navbar">CATÁLOGO☄️</h1>
        <div class="bars" @click="isOpen = true">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <USlideover v-model="isOpen" class="bg-no-repeat bg-cover  hidden max-[756px]:block bg-[url('https://th.bing.com/th/id/R.8b1497437ba0517fb3fbefddf62b4584?rik=0zelpODjUiryIQ&pid=ImgRaw&r=0')]">
            <div class="w-[100%] h-[100%] bg-[#000033] border-2 border-white rounded-2xl">
                <div class="mt-[15px]">
                    <div class="flex justify-center">
                        <h1 class="h1 text-2xl" id="title_navbar">CATÁLOGO☄️</h1>
                    </div>
                </div>
            </div>
        </USlideover>
        <nav class="nav-bar">
            <ul>
                <a href="/" v-bind:class="prop.estado_inicio">
                    <li class="font-extrabold">Inicio🌕</li>
                </a>
                <a href="/producto/ropa" v-bind:class="prop.estado_ropa">
                    <li class="underline decoration-dashed decoration-rose-500">Ropa</li>
                </a>
                <a href="/producto/calzado" v-bind:class="prop.estado_calzado">
                    <li class="underline decoration-dashed decoration-yellow-400">Calzado</li>
                </a>
                <a href="/producto/accesorio" v-bind:class="prop.estado_accesorio">
                    <li class="underline decoration-dashed decoration-lime-400">Accesorios</li>
                </a>
            </ul>
        </nav>
    </header>
</template>
<style src="./NavBar.css"></style>