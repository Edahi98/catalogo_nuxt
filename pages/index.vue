<script lang="js" setup>
    import NavBar from '~/components/NavBar.vue';
    import Footer from '~/components/Footer.vue';
    import Base from '~/layouts/Base.vue';
	const isOpen = ref(false)
</script>

<template>
    <main>
        <Base title="Inicio">
			<NavBar estado_inicio="activate" estado_accesorio="" estado_calzado="" estado_ropa=""/>
            <div class="imagen_responsive">
			    <img class="imagen_inicio" src="https://aluguefacilitoy.com.br/wp-content/uploads/2022/07/astronauta-foguete-842x1024.png" alt="">
		    </div>
            <Footer/>
        </Base>
    </main>
</template>
<style>
    @media(max-width: 756px){
		.imagen_inicio{
			width: 500px;
			height: 500px;
			margin-top: 90px;
		}
		.imagen_responsive{
			justify-content: center;
			display: flex;
		}
	}
</style>