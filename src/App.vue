<template>
    <div></div>
    <!-- <div id="nav"> -->
    <!-- <router-link to="/src/views/HomePage.vue">HomePage</router-link> |
        <router-link to="/src/views/Room-detailPage.vue"
            >Room-DetailPage</router-link
        >
        |
        <router-link to="/filter">FilterPage</router-link> -->
    <!-- </div> -->

    <router-view />
</template>

<style lang="scss">
@import "./assets/reset.scss";
@import "~bootstrap/dist/css/bootstrap.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    a {
        text-decoration: none;
    }
}
// html {
//     overflow: -moz-hidden-unscrollable;
//     height: 100%;
// }

// body::-webkit-scrollbar {
//     display: none;
// }

// body {
//     -ms-overflow-style: none;
//     height: 100%;
//     width: calc(100vw + 18px);
//     overflow: auto;
//     margin: 0 auto;
// }
</style>
