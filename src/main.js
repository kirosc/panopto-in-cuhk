import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SweetScroll from 'sweet-scroll'
import { tns } from "tiny-slider/src/tiny-slider"

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
  setTimeout(function () {
    let loading = document.getElementById("loading");
    loading.className += 'fadeout';
    document.body.style.overflowY = "auto";
    setTimeout(function () {
      loading.style.display = 'none';
    }, 500);
  }, 1000);

  const delay = 300
  const skill = document.getElementsByClassName('skill')
  for (let i = 0; i < skill.length; i++) {
    skill[i].dataset.aosDelay = (i + 1) * delay
  }

  let sliders = document.querySelectorAll('.project-img-slide');
  forEach(sliders, function (index, value) {
    let slider = tns({
      container: value,
      items: 1,
      slideBy: 1,
      mouseDrag: true,
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false,
      nav: false
    });
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  })
}
