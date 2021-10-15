<template >
    <!--  -->

    <!--  -->
    <div class="container">
        <NavBar />
        <Breadcrumb />

        <div class="row">
            <div class="col-sm-12 col-md-6">
                <RoomCard />
            </div>
            <div class="col-sm-12 col-md-6">
                <RoomCard />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <RoomCard />
            </div>
            <div class="col-sm-12 col-md-6">
                <RoomCard />
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import RoomCard from "../components/RoomCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    data() {
        return {
            name: "FilterPage",
        };
    },
    components: {
        NavBar,
        Breadcrumb,
        RoomCard,
        Footer,
    },
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
</style>