<template>
    <div>
        <white-nav-bar />
        <Breadcrumb />
        <Footer />
    </div>
</template>

<script>
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { WhiteNavBar, Breadcrumb, Footer },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
</style>