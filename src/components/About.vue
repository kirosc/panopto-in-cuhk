<template>
  <div class="about">
    <div class="container">
      <div class="profile-img" data-aos="fade-right" data-aos-delay="300">
        <picture>
          <source type="image/webp" srcset="../assets/panopto.webp">
          <img src="../assets/panopto.jpg" alt="Project picture">
        </picture>
      </div>
      <div class="about-details" data-aos="fade-left" data-aos-delay="600">
        <div class="about-heading">
          <h2>About</h2>
          <h3>The Project</h3>
        </div>
        <p>
          Panopto是一個課堂錄影系統，教師可以將課堂錄下讓學生在課堂外自由地觀看，當中亦包含教學互動功能(例：Video quizzing)，從而達到翻轉課堂的目的&#128129;
        </p>
        <p>
          中文大學的師生可免費使用Panopto，但現時大學對學科使用課堂錄影沒有統一政策，一些科目沒有設課堂錄影&#128581;
        </p>
        <p>
          我們希望透過問卷調查了解學生在Panopto上的使用情況，以下是收集回來的問卷結果📝
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {}
    },
    methods: {}
  }
</script>


<style lang="scss">
  .about {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .about-heading {
    text-align: center;
    text-transform: uppercase;
    line-height: 0;
    margin-bottom: 6rem;

    h2 {
      font-size: 10rem;
      opacity: .3;
      margin: 0;
    }

    h3 {
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .profile-img {
    flex: 1;
    margin-right: 5rem;
  }

  .about-details {
    flex: 1;

    p {
      font-family: 'Noto Sans TC', sans-serif;
      line-height: 1.5em;
      margin-bottom: 0.5em;
    }
  }

  .social-media.mobile {
    display: none;
  }
</style>
