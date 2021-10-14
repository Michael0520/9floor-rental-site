<template >
    <!--  -->

    <!--  -->
    <NavBar />
    <Footer />
</template>
<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

export default {
    data() {
        return {};
    },
    components: {
        Footer,
        NavBar,
    },
};
</script>
<style lang="scss">
@import "../assets/custom.scss";
</style>