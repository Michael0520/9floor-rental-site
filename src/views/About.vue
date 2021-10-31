<template>
    <div class="about"></div>
    <NavBar />
    <SiderBar />
    <Footer />
</template>



<script>
import Footer from "../components/Footer.vue";
import SiderBar from "../components/SiderBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
    data() {
        return {
            name: "HomePage",
            isTop: false
        };
    },
    mounted() {
        // if isTop = 0 , add fixed class , else remove
        window.addEventListener("scroll", () => {
            let clientTop =
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                window.pageYOffset;
            this.scrollNum = clientTop;
            console.log(`目前頁面高度 ${clientTop}`);
            if (clientTop >= 900) {
                this.isTop = true;
            } else {
                this.isTop = false;
            }
        });
    },
    components: {
        NavBar,
        SiderBar,
        Footer
    }
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
</style>
