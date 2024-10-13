import { useCosmic } from "../../utils/cosmic.js"
export default defineEventHandler(async (event)=>{
    return await useCosmic("accesorio");
});