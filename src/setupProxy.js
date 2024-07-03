// const proxy = require('http-proxy-middleware');
// //     /**
// //      * proxy is required in order to make api calls to
// //      * express server while using hot-reload webpack server
// //      * routes api fetch requests from localhost:8080/api/* (webpack dev server)
// //      * to localhost:3000/api/* (where our Express server is running)
// //      */
// module.export = function(app) {
//   app.use(proxy('/api/**', {
//     target: 'http://localhost:8080/',
//     changeOrigin: true,
//     secure: false,
//   }));
  
//   app.use(proxy('/assets/**', {
//     target: 'http://localhost:8080/',
//     changeOrigin: true,
//     secure: false,
//   }));
// }