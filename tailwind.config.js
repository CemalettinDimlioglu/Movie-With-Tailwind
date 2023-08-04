 module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx,}",
     "./node_modules/tw-elements/dist/js/**/*.js",
   ],
   theme: {
     extend: {
       colors: {
         "gray-dark-main": "#23242A",
         "gray-dark-second": "#28292D",
         "gray-light": "#D3DCE6",
         "red-main": "#FF4B45",
       },
     },
   },
   darkMode:"class",
   plugins: [require("tw-elements/dist/plugin.cjs")],
 };






