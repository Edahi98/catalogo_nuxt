<script setup lang="js">
    const props = defineProps(["producto"]);
    let datos_ref = ref([]);

    onMounted(async ()=>{
        const datos = await fetch(`/api/productos/${props.producto}`);
        datos_ref.value = await datos.json();
    });
    let breadcrumb = [];
    switch (props.producto) {
        case "ropa":
            breadcrumb = [
                {
                    label: "Inicio",
                    icon: "i-heroicons-home"
                },
                {
                    label: "Productos",
                    icon: "i-flowbite:cart-solid"
                },
                {
                    label: "Ropa",
                    icon: "i-mdi:store-outline"
                }
            ];
            break;
        case "calzado":
            breadcrumb = [
                {
                    label: "Inicio",
                    icon: "i-heroicons-home"
                },
                {
                    label: "Productos",
                    icon: "i-flowbite:cart-solid"
                },
                {
                    label: "Calzado",
                    icon: "i-mdi:store-outline"
                }
            ];
            break;
        case "accesorio":
            breadcrumb = [
                {
                    label: "Inicio",
                    icon: "i-heroicons-home"
                },
                {
                    label: "Productos",
                    icon: "i-flowbite:cart-solid"
                },
                {
                    label: "Accesorios",
                    icon: "i-mdi:store-outline"
                }
            ];
            break;
    
        default:
            break;
    }
</script>
<template>
    <div class="p-[100px] mt-[-90px]">
        <div>
            <UBreadcrumb :links="breadcrumb"/>
        </div>
        <br>
        <br>
        <div class="border-[1px] rounded-3xl p-5 bg-slate-800">
            <div class="mb-6">
                <span>
                    <MazAvatar src="https://image.freepik.com/vector-gratis/lindo-astronauta-volando-ilustracion-icono-dibujos-animados-espacio_138676-2702.jpg"/>
                    ㅤPor Administradorㅤ<UIcon name="i-uiw:circle-check" class="bg-cyan-300"/>
                </span>
            </div>
            <MazGallery separator-color="#212f3c" class="border-2" :images="datos_ref" :height="320"/>
        </div>
    </div>
</template>
