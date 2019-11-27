<template>
  <div class="side-menu">
    <div class="toggler" v-bind:class="{open: showMenu}" v-on:click="showMenu = !showMenu">
      <div class="bar half start"></div>
      <div class="bar"></div>
      <div class="bar half end"></div>
    </div>
    <nav class="top-nav" v-bind:class="{open: showMenu}">
      <ul class="nav-list" v-on:click="showMenu = false">
        <li><a href="#about" class="nav-link" data-scroll>About</a></li>
        <li><a href="#part1" class="nav-link" data-scroll>Part I</a></li>
        <li><a href="#part2" class="nav-link" data-scroll>Part II</a></li>
        <li><a href="#part3" class="nav-link" data-scroll>Part III</a></li>
        <li><a href="#part4" class="nav-link" data-scroll>Part IV</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'side-menu',
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      home: e => {
        document.getElementsByName('html, body')
      }
    }
  }
</script>


<style lang="scss">
  .toggler {
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 5rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 11;
    transition: transform $delay ease-out;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &.open {
      transform: rotate(-45deg);
    }
  }

  .bar {
    background: linear-gradient(to right, $yellow, $purple);
    width: 100%;
    height: 4px;
    border-radius: .8rem;

    &.half {
      width: 50%;
    }

    &.start {
      transform-origin: right;
      transition: transform $delay cubic-bezier(0.54, -0.81, 0.57, 0.57);
      z-index: -1;
    }

    &.end {
      background: linear-gradient(to left, $yellow, $purple);
      align-self: flex-end;
      transform-origin: left;
      transition: transform $delay cubic-bezier(0.54, -0.81, 0.57, 0.57);
      z-index: -1;
    }
  }

  .open {
    .bar.start {
      transform: rotate(-450deg) translateX(.8rem);
    }

    .bar.end {
      transform: rotate(-450deg) translateX(-.8rem);
    }
  }
  // Header
  header {
    width: 100%;
    height: 100vh;
  }

  .top-nav {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: -100vh;
    z-index: 10;
    background-color: #16162d;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
    transition: all $delay cubic-bezier(1, 0, 0, 1);

    &.open {
      top: 0;
      border-radius: initial;
    }
  }

  .nav-list {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 2rem;
  }

  .nav-link {
    font-family: 'The Historia Demo', sans-serif;
    font-size: 5rem;
    padding: 1rem;

    &:hover, &:focus {
      background: linear-gradient(to top, $yellow, $purple);
      background-clip: text;
      color: transparent;
    }
  }
</style>
