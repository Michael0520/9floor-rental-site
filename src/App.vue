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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
