module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cart-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A shopping cart application with nuxtjs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
      strategies: {
        local: {
          endpoints: {
            login: {
              url: 'auth/login',
              method: 'post',
              propertyName: 'meta.token'
            },
            user: {
              url: 'auth/me',
              method: 'get',
              propertyName: 'data'
            }
          }
        }
      }
  },

  axios: {
    baseURL : 'http://cart.test/api/'
  },

  css: [
    '~assets/styles/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

