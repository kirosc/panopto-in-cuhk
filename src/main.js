import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SweetScroll from 'sweet-scroll'

Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')

let forEach = function (array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      duration: 1000,                 // Specifies animation duration in integer
      easing: 'easeInOutCubic',         // Specifies the pattern of easing
    });
  },
  false,
);

window.onload = () => {
  if(!localStorage.getItem("visted")){
    localStorage.setItem("visted", true);
    window.location.replace('https://ucfyp.kirosc.com/');
  }

  setTimeout(function () {
    let loading = document.getElementById("loading");
    loading.className += 'fadeout';
    document.body.style.overflowY = "auto";
    setTimeout(function () {
      loading.style.display = 'none';
    }, 500);
  }, 1000);

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  })
}
