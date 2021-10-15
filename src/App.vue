<template>
    <div id="nav">
        <router-link to="/src/views/HomePage.vue">HomePage</router-link> |
        <router-link to="/src/views/Room-detailPage.vue"
            >Room-DetailPage</router-link
        >
        |
        <router-link to="/filter">FilterPage</router-link>
    </div>

    <router-view />
</template>

<style lang="scss">
@import "./assets/reset.scss";
@import "~bootstrap/dist/css/bootstrap.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    a {
        text-decoration: none;
    }
    a.router-link-exact-active {
        color: #42b983;
    }
}
</style>
