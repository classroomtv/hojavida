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
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
};
