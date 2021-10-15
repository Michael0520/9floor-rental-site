<template >
    <div class="container-fluid">
        <!-- NavBar -->
        <div class="row">
            <div class="col-sm-12">
                <NavBar />
            </div>
        </div>
        <!-- Breadcrumb -->
        <div class="row">
            <div class="col-sm-12">
                <Breadcrumb />
            </div>
        </div>

        <!-- RoomCard -->
        <div class="row">
            <div
                class="col-sm-12 col-md-6"
                v-for="(item, index) in roomList"
                :key="index"
            >
                {{ item.name }}
                {{ item.status }}
                {{ item.price }}
                {{ index }}
            </div>
            <div class="col-sm-12 col-md-6">
                <!-- Filter -->
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
// import RoomCard from "../components/RoomCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    data() {
        return {
            name: "FilterPage",
            roomList: [
                {
                    name: "仁愛",
                    status: "招募中",
                    imgUrl: "https://9floor.co/backend/web/roomPhoto/20210910-dab1e9172fe244cb04dba6af9434cdb2.png",
                    price: 16500,
                },
                {
                    name: "仁愛",
                    status: "招募中",
                    price: 16500,
                },
                {
                    name: "仁愛",
                    status: "招募中",
                    price: 16500,
                },
                {
                    name: "仁愛",
                    status: "招募中",
                    price: 16500,
                },
                {
                    name: "仁愛",
                    status: "招募中",
                    price: 16500,
                },
                {
                    name: "仁愛",
                    status: "招募中",
                    price: 16500,
                },
            ],
        };
    },
    methods: {
        filterRow(index) {
            return index % 2 === 0;
        },
    },
    components: {
        NavBar,
        Breadcrumb,
        // RoomCard,
        Footer,
    },
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";

a {
    margin: 0;
    padding: 0;
    text-decoration: none;
}
h5,
p {
    padding: 0;
    margin: 0;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    color: #444647;
}
h5 {
    font-size: 15px;
    line-height: 1.35;
    letter-spacing: 2.5px;
}
</style>