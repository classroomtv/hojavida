export default {


  nitro: {
    preset: 'vercel-edge',
  },
  static:{
    prefix: false
  },
  css:[
    '@/css/master.css',
    "bootstrap/dist/css/bootstrap.min.css"
  ],

  importScripts: [
    'bootstrap/dist/js/bootstrap.bundle.min.js',
  ],
 
  plugins:[
    '~/plugins/umine.ts',
    '@mdi/font/css/materialdesignicons.css',
    
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
};
