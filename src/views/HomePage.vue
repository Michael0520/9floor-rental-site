<template>
    <!-- index_home -->
    <div class="row index_home">
        <div class="col">
            <div
                class="index_banner"
                style="
                    background-image: url('https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png');
                "
            ></div>
        </div>
    </div>

    <!-- Footer -->
    <div class="row">
        <div class="col">
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            name: "HomePage",
        };
    },
    components: {
        Footer,
    },
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_home {
    display: flex;
    align-items: center;
}
.index_banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding-top: 114px;
    background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: 0.3;
    }
}
</style>