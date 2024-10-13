<script lang="jsx" setup>
    import NavBar from '~/components/NavBar.vue';
    import Footer from '~/components/Footer.vue';
    import Base from '~/layouts/Base.vue';
    import Gallery from '~/components/Gallery.vue';
    const route = useRoute();
    const ToUpperFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const RenderNavBar = () => {
        switch (String(route.params.producto)) {
            case "ropa":
                return <NavBar estado_inicio="" estado_accesorio="" estado_calzado="" estado_ropa="activate"/>;
            case "calzado":
                return <NavBar estado_inicio="" estado_accesorio="" estado_calzado="activate" estado_ropa=""/>;
            case "accesorio":
                return <NavBar estado_inicio="" estado_accesorio="activate" estado_calzado="" estado_ropa=""/>;
            default:
                return <NavBar estado_inicio="" estado_accesorio="" estado_calzado="" estado_ropa=""/>;
        }
    }
</script>
<template>
    <Base v-bind:title="ToUpperFirstLetter(String(route.params.producto))" >
        <main>
            <RenderNavBar/>
            <Gallery :producto="route.params.producto"/>
            <Footer/>
        </main>
    </Base>
</template>