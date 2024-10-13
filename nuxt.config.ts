// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'maz-ui/nuxt', 'nuxt-csurf', 'nuxt-api-shield'],
  runtimeConfig: {
    turso: {
      databaseUrl: import.meta.env.TURSO_DATABASE_URL,
      authToken: import.meta.env.TURSO_AUTH_TOKEN
    },
    cosmic: {
      calzadoUrl: import.meta.env.CMS_COSMIC_URL_CALZADO,
      ropaUrl: import.meta.env.CMS_COSMIC_URL_ROPA,
      accesorioUrl: import.meta.env.CMS_COSMIC_URL_ACCESORIO
    }
  },
  nuxtApiShield:{
    limit:{
      max: 2,
      duration: 100,
      ban: 86400
    }
  },
  mazUi:{
    injectComponents: true,
    injectCss: true
  },
  csurf:{
    methodsToProtect: ["POST", "PATCH", "PUT", "DELETE"]
  }
})