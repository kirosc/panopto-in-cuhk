<template>
  <div id="app">
    <header>
      <Menu/>
      <div class="landing-text">
        <div data-aos="zoom-in-down" data-aos-delay="400">
          <h1>Panopto</h1>
          <h2>在中文大學的使用情況</h2>
        </div>
      </div>
    </header>

    <section class="about" id="about">
      <About/>
    </section>

    <section class="part1" id="part1">
      <div class="container">
        <div class="section-heading">
          <h2>Part 1</h2>
          <h3>Basic Information</h3>
        </div>
        <Pie v-bind:data="q1_1" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q1_2" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q1_3" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
      </div>
    </section>

    <section class="part2" id="part2">
      <div class="container">
        <div class="section-heading">
          <h2>Part 2</h2>
          <h3>Used Panopto Before</h3>
        </div>
        <Pie v-bind:data="q2_1" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Column v-bind:data="q2_2" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Column>
        <Column v-bind:data="q2_3" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Column>
        <Column v-bind:data="q2_4" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Column>
        <Column v-bind:data="q2_5" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Column>
        <Column v-bind:data="q2_6" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Column>
        <Pie v-bind:data="q2_7" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Column v-bind:data="q2_8" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Column>
        <Column v-bind:data="q2_9" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Column>
      </div>
    </section>

    <section class="part3" id="part3">
      <div class="container">
        <div class="section-heading">
          <h2>Part 3</h2>
          <h3>Never Used Panopto Before</h3>
        </div>
        <Pie v-bind:data="q3_1" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q3_2" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q3_3" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q3_4" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Pie>
        <Column v-bind:data="q3_5" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Column>
        <Pie v-bind:data="q3_6" v-bind:font="font" data-aos="fade-right" data-aos-delay="300"></Pie>
        <Pie v-bind:data="q3_7" v-bind:font="font" data-aos="fade-left" data-aos-delay="300"></Pie>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="container">
        <div class="section-heading" style="margin-bottom: 5rem;">
          <h2>Know</h2>
          <h3>More</h3>
        </div>
        <div class="social-media" data-aos="zoom-out">
          <ul class="nav-list">
            <li>
              <a href="#"
                 class="icon-link"
                 target="_blank"
                 title="Follow me on Linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#"
                 class="icon-link"
                 target="_blank"
                 title="Follow me on Github">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#"
                 class="icon-link"
                 title="Email me">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="copyright">
      <div class="up" id="up" tabindex="0" data-scroll>
        <i class="fas fa-chevron-up"></i>
      </div>
      <div class="footer-links">
        <nav>
          <ul>
            <li><a href="#" class="footer-link" data-scroll>Home</a></li>
            <li><a href="#about" class="footer-link" data-scroll>About</a></li>
            <li><a href="#part1" class="footer-link" data-scroll>Part I</a></li>
            <li><a href="#part2" class="footer-link" data-scroll>Part II</a></li>
            <li><a href="#part3" class="footer-link" data-scroll>Part III</a></li>
          </ul>
        </nav>
      </div>
      <p>
        &copy 2019 CUHK UCFYP Group 139 - Made with ❤  by
        <a href="https://kirosc.com" target="_blank" class="footer-link">Kiros Choi</a>
      </p>

    </footer>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue'
  import About from './components/About.vue';
  import Pie from './components/Pie.vue';
  import Column from './components/Column.vue';
  import FontFaceObserver from 'fontfaceobserver';

  const font = new FontFaceObserver('Noto Sans TC');

  export default {
    name: 'app',
    components: {
      Menu,
      About,
      Pie,
      Column,
    },
    data() {
      return {
        font: font,
        q1_1: {
          title: '所屬學院',
          result: [
            {y: 34.5, label: "理學院", toolTipContent: "{label} :57"},
            {y: 20.0, label: "醫學院", toolTipContent: "{label} :33"},
            {y: 10.3, label: "教育學院", toolTipContent: "{label} :17"},
            {y: 15.8, label: "工程學院", toolTipContent: "{label} :26"},
            {y: 7.3, label: "工商管理學院", toolTipContent: "{label} :12"},
            {y: 6.1, label: "社會科學院", toolTipContent: "{label} :10"},
            {y: 3.6, label: "法律學院", toolTipContent: "{label} :6"},
            {y: 2.4, label: "文學院", toolTipContent: "{label} :4"},
          ]
        },
        q1_2: {
          title: '所屬年級',
          result: [
            {y: 15.2, label: "一年級", toolTipContent: "{label} :25"},
            {y: 35.2, label: "二年級", toolTipContent: "{label} :58"},
            {y: 26.1, label: "三年級", toolTipContent: "{label} :43"},
            {y: 22.4, label: "四年級", toolTipContent: "{label} :37"},
            {y: 0.6, label: "五年級", toolTipContent: "{label} :1"},
            {y: 0.6, label: "六年級", toolTipContent: "{label} :1"},
          ]
        },
        q1_3: {
          title: '有否使用過Panopto？',
          result: [
            {y: 63.6, label: "有", toolTipContent: "{label} :105"},
            {y: 36.4, label: "沒有", toolTipContent: "{label} :60"},
          ]
        },
        q2_1: {
          title: '有否曾經於課堂上自行錄影或錄音？',
          result: [
            {y: 62.9, label: "有", toolTipContent: "{label} :66"},
            {y: 37.1, label: "沒有", toolTipContent: "{label} :39"},
          ]
        },
        q2_2: {
          title: '使用Panopto會令你減少親身上堂',
          result: [
            { y: 6, label: "1" },
            { y: 15, label: "2" },
            { y: 20, label: "3" },
            { y: 13, label: "4" },
            { y: 28, label: "5" },
            { y: 18, label: "6" },
            { y: 5, label: "7" },
          ]
        },
        q2_3: {
          title: '使用Panopto會令你更易掌握課堂知識',
          result: [
            { y: 0, label: "1" },
            { y: 3, label: "2" },
            { y: 6, label: "3" },
            { y: 12, label: "4" },
            { y: 32, label: "5" },
            { y: 27, label: "6" },
            { y: 25, label: "7" },
          ]
        },
        q2_4: {
          title: '使用Panopto會令你在課堂期間減少工作量',
          result: [
            { y: 2, label: "1" },
            { y: 3, label: "2" },
            { y: 5, label: "3" },
            { y: 9, label: "4" },
            { y: 47, label: "5" },
            { y: 23, label: "6" },
            { y: 16, label: "7" },
          ]
        },
        q2_5: {
          title: '使用Panopto會令你在課堂期間更加專心',
          result: [
            { y: 2, label: "1" },
            { y: 7, label: "2" },
            { y: 11, label: "3" },
            { y: 46, label: "4" },
            { y: 23, label: "5" },
            { y: 13, label: "6" },
            { y: 3, label: "7" },
          ]
        },
        q2_6: {
          title: '使用Panopto會令你在課堂外減少工作量',
          result: [
            { y: 2, label: "1" },
            { y: 8, label: "2" },
            { y: 19, label: "3" },
            { y: 21, label: "4" },
            { y: 22, label: "5" },
            { y: 23, label: "6" },
            { y: 10, label: "7" },
          ]
        },
        q2_7: {
          title: '使用Panopto的頻率',
          result: [
            { y: 8.6, label: "每天觀看", toolTipContent: "{label} :9"},
            { y: 41.0, label: "每周平均1-3次", toolTipContent: "{label} :43"},
            { y: 29.5, label: "每周平均4-6次", toolTipContent: "{label} :31"},
            { y: 20.0, label: "每月少於3次", toolTipContent: "{label} :21"},
            { y: 1.0, label: "需要時看", toolTipContent: "{label} :1"},
          ]
        },
        q2_8: {
          title: '使用Panopto的模式',
          result: [
            { y: 67, label: "觀看整個錄像"},
            { y: 64, label: "觀看課堂上錯過的部分"},
            { y: 61, label: "觀看課堂上不明白的部分"},
            { y: 60, label: "用作復習測驗或考試"},
          ],
          legendText: " "
        },
        q2_9: {
          title: '使用Panopto系統的目的',
          result: [
            { y: 41, label: "復習"},
            { y: 7, label: "走堂"},
            { y: 36, label: "兩者皆是"},
          ],
          legendText: " "
        },
        q3_1: {
          title: '是否知道什麼是Panopto',
          result: [
            { y: 80.0, label: "知道", toolTipContent: "{label} :48"},
            { y: 20.0, label: "不知道", toolTipContent: "{label} :12"},
          ]
        },
        q3_2: {
          title: '有沒有曾經於課堂上自行錄影或錄音',
          result: [
            { y: 83.3, label: "有", toolTipContent: "{label} :50"},
            { y: 16.7, label: "沒有", toolTipContent: "{label} :10"},
          ]
        },
        q3_3: {
          title: '沒有使用Panopto的原因是',
          result: [
            { y: 76.7, label: "課堂沒有提供", toolTipContent: "{label} :46"},
            { y: 10.0, label: "不知道課堂有沒有提供", toolTipContent: "{label} :6"},
            { y: 10.0, label: "不知道Panopto是什麼", toolTipContent: "{label} :6"},
            { y: 3.3, label: "課堂的資源已足夠用於復習", toolTipContent: "{label} :2"},
          ]
        },
        q3_4: {
          title: '使用Panopto會否影響你的課堂出席率',
          result: [
            { y: 65.0, label: "會，出席率會下降", toolTipContent: "{label} :39"},
            { y: 0, label: "會，出席率會上升", toolTipContent: "{label} :0"},
            { y: 35.0, label: "不會", toolTipContent: "{label} :21"},
          ]
        },
        q3_5: {
          title: '是否同意Panopto能夠幫助你的學習',
          result: [
            { y: 1, label: "1" },
            { y: 0, label: "2" },
            { y: 1, label: "3" },
            { y: 6, label: "4" },
            { y: 9, label: "5" },
            { y: 24, label: "6" },
            { y: 19, label: "7" },
          ]
        },
        q3_6: {
          title: '會否因為科目有提供Panopto而報讀該科',
          result: [
            { y: 38.3, label: "會", toolTipContent: "{label} :23"},
            { y: 31.7, label: "不會", toolTipContent: "{label} :37"},
          ]
        },
        q3_7: {
          title: '比較喜歡使用Panopto還是親身到課室上堂',
          result: [
            { y: 35.0, label: "使用Panopto", toolTipContent: "{label} :21"},
            { y: 65.0, label: "親身到課室上堂", toolTipContent: "{label} :39"},
          ]
        },
      }
    }
  }
</script>

<style lang="scss">
  canvas {
    font-family: 'Noto Sans TC', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    color: #eee;
  }

  body {
    width: 100%;
    height: 100%;
    background: url("assets/sitebg.jpg") no-repeat center fixed;
    background-size: cover;
    overflow-y: hidden;
  }

  section {
    padding: 6rem 0;
  }

  a {
    text-decoration: none;
    color: #eee;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
  }

  img {
    max-width: 100%;
  }

  .fadeout {
    animation: fadeout 0.5s normal forwards;
  }

  .fadein {
    animation: fadein 0.5s normal forwards;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  // Reusable
  .container {
    width: 90%;
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .section-heading {
    text-align: center;
    margin-bottom: 10rem;

    h2 {
      font-size: 3.5rem;
      color: rgba(255, 255, 255, 0.4);
      text-transform: uppercase;
      font-weight: 300;
      position: relative;
      margin-bottom: 1rem;

      &:before, &:after {
        content: '';
        position: absolute;
        bottom: -.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.75);
      }

      &:before {
        width: 10rem;
        height: 3px;
        border-radius: .8rem;
      }

      &:after {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        bottom: -1rem;
      }
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }

  // Loading screen
  #loading {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("assets/sitebg.jpg") no-repeat center fixed;
    background-size: cover;
    z-index: 99; /* Higher than anything else in the document */

    @media screen and (max-width: 768px) {
      background: url("assets/sitebg2.jpg") no-repeat center fixed;
      background-size: cover;
    }
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    align-self: center;
    margin: 0 auto;
    width: 64px;
    height: 64px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: $footer-color;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }


  /* Link stroke */
  a.footer-link {
    position: relative;
  }

  a.footer-link,
  a.footer-link:after,
  a.footer-link:before {
    transition: all .5s;
  }

  // Fixing double tapping link in iOS Safari
  @media (hover) {
    a.footer-link:hover {
      color: #c9c9c9;
    }

    a.footer-link:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0;
      content: '';
      color: transparent;
      background: #c9c9c9;
      height: 1px;
    }

    a.footer-link:hover:after {
      width: 100%;
    }
  }

  // Landing text
  .landing-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    z-index: 1;

    h1 {
      font-size: 20rem;
      font-family: 'The Historia Demo', sans-serif;
      font-weight: 300;
      background: linear-gradient(to top, $yellow, $purple);
      background-clip: text;
      color: transparent;
      margin: 0;
      user-select: none;
    }

    h2 {
      font-size: 4rem;
      font-weight: 300;
      font-family: 'Noto Sans TC';
    }
  }

  // Skills
  .my-skills {
    margin-top: 10rem;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  // Contact
  .social-media {
    margin-top: 5rem;

    i {
      padding: 1rem;
      font-size: 5rem;
      transition: all .25s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .contact {
    .social-media {
      margin-top: 2rem;
    }
  }

  .fa-linkedin:hover {
    color: #4875B4;
  }

  .fa-github:hover {
    color: #4078c0;
  }

  .fa-envelope:hover {
    color: #4078c0;
  }

  // Footer
  .copyright {
    width: 100%;
    text-align: center;
    background-color: $footer-color;
    padding: 2rem 0;
    position: relative;

    .footer-links {
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;

      ul {
        display: flex;
        list-style-type: none;
        font-size: 1.6rem;

        a {
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    p {
      font-size: 1.2rem;
    }
  }

  .up {
    position: absolute;
    width: 5rem;
    height: 5rem;
    background-color: #eeeeee;
    top: -2.5rem;
    right: 5rem;
    border-radius: 100%;
    display: flex;
    cursor: pointer;
    animation: pulse 2s infinite;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    i {
      color: #16162d;
      font-size: 2rem;
      margin: auto;
    }

    p {
      font-size: 1.4rem;
    }
  }

  // Ripple effect
  .ripple {
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #c9c9c9 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .8s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .8;
    transition: 0s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(253, 87, 191, .99);
    }
    70% {
      box-shadow: 0 0 0 2rem rgba(253, 87, 191, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(253, 87, 191, 0);
    }
  }

  @media screen and (max-width: 768px) {
    // background-size: cover is not working in mobile Safari
    // This is the workaround
    body:after {
      content:"";
      position:fixed; /* stretch a fixed position to the whole screen */
      top:0;
      height:100vh; /* fix for mobile browser address bar appearing disappearing */
      left:0;
      right:0;
      z-index:-1; /* needed to keep in the background */
      background: url("assets/sitebg2.jpg") center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    html, body {
      max-height: 100%;
      overflow-x: hidden;
    }

    .landing-text {
      h1 {
        font-size: 15rem;
        font-weight: 300;
      }

      h2 {
        font-size: 3rem;
      }
    }

    .nav-list {
      flex-direction: column;
    }

    .nav-link {
      font-size: 4.5rem;
    }

    li {
      margin: 2rem 0;
    }

    .about-heading {
      h2 {
        font-size: 8rem;
      }
    }
    .section-heading {
      h2 {
        font-size: 3rem;
      }
    }

    .about-details {
      .nav-list {
        flex-direction: initial;
      }

      li {
        margin: 0 2rem;
      }
    }

    .icon-container {
      width: 7rem;
      height: 7rem;

      i {
        font-size: 4rem;
      }
    }

    .timeline {
      ul {
        margin: 0 0 0 auto;
      }

      .date:before {
        left: -20rem;
      }

      .date:after {
        left: -5.9rem;
      }
    }

    .contact {
      .nav-list {
        flex-direction: initial;

        li {
          margin: 0 2rem;
        }
      }
    }

    .footer-links {
      li {
        margin: 0 2rem;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .toggler {
      top: 2rem;
      right: 2rem;
    }

    .landing-text {
      h1 {
        font-size: 15rem;
        font-weight: 300;
      }

      h2 {
        font-size: 2.5rem;
      }
    }

    .nav-link {
      font-size: 3.5rem;
    }

    .about .container {
      flex-direction: column;

      .social-media {
        display: none;

        i {
          padding: 0 3rem;
        }
      }

      .social-media.mobile {
        display: block;
        margin: 0 0 5rem 0;
        order: 3;

        .nav-list {
          flex-direction: row;
        }
      }
    }

    .project {
      flex-direction: column;
    }

    .profile-img {
      margin: 2rem 0;
      order: 1;
    }

    .project-description {
      margin: 0;
      order: 2;
    }

    .timeline {
      p {
        font-size: 1.6rem;
      }

      .date:before {
        font-size: 1.4rem;
      }
    }

    .footer-links {
      ul {
        flex-direction: column;

        li {
          margin: 2rem 0;
        }
      }
    }

    .up {
      right: 2rem;
    }
  }
</style>
