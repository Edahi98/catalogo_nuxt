"use strict";

async function ChangeKeysJson(json){
    let newData = [];
    try{
        json.forEach((key)=>{
            newData.push({
                src: key.url,
                alt: key.original_name
            });
        });
        return newData;
    }catch{
        return [];
    }
}
export async function useCosmic(nombreProducto){
    const { cosmic } = useRuntimeConfig();
    try {
        const consumeApi = async (url_producto) => await ( await fetch(url_producto)).json();

        switch (nombreProducto) {
            case "calzado":
                const json_calzado = await( await consumeApi(cosmic.calzadoUrl)).media;
                return await ChangeKeysJson(json_calzado);
            case "ropa":
                const json_ropa = await( await consumeApi(cosmic.ropaUrl)).media;
                return await ChangeKeysJson(json_ropa);
            case "accesorio":
                const json_accesorio = await( await consumeApi(cosmic.accesorioUrl)).media;
                return await ChangeKeysJson(json_accesorio);
            default:
                return [
                    {src: "", alt: ""}
                ];
        };
        
    } catch (e){
        console.error(e);
        return useCosmic(nombreProducto);
    };
};
