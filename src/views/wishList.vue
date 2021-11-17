<template>
    <WhiteNavBar />

    <div class="index_content">
        <div class="index_wishList">
            <Breadcrumb />
            <div class="index_user-tabs">
                <a class="" href="/zh-tw/user/overview">總覽</a
                ><a class="" href="/zh-tw/user/settings">設定</a
                ><a class="index__marked___34k-n" href="/zh-tw/user/wishlist"
                    >收藏</a
                ><a class="" href="/zh-tw/user/reservation">預約紀錄</a
                ><a class="" href="/zh-tw/user/booking">入住紀錄</a
                ><a class="" href="/zh-tw/user/community">線上社群</a
                ><a
                    class="index_report"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.surveycake.com/s/eVGgX?ssn0&amp;ssn1=%2B886%20null&amp;ssn2=po2319987%40gmail.com"
                    >聯繫我們</a
                >
            </div>
            <div class="index_wishList-content">
                <SiderBar />
                <div class="index_center">
                    <div class="index_wishList-roomList">
                        <roomCard />
                    </div>
                </div>
                <rightSiderBar />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import SiderBar from "../components/SiderBar.vue";
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import rightSiderBar from "../components/rightSiderBar.vue";
import roomCard from "../components/RoomCard.vue";
export default {
    data() {
        return {
            rooms: [],
            temp: []
        };
    },
    components: {
        WhiteNavBar,
        Breadcrumb,
        SiderBar,
        rightSiderBar,
        Footer,
        roomCard
    },
    mounted() {
        let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel
        });
        this.axios
            .get("http://localhost:3000/rooms")
            .then(result => {
                this.rooms = result.data;
                this.temp = this.rooms;
                this.renderRooms();
                // success get data
                setTimeout(() => {
                    loader.hide(); // simulate AJAX
                }, 1500);
            })
            .catch(err => {
                console.warn(err);
            });
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_content {
    .index_wishList {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 72px;
        min-height: 100%;
        .index_user-tabs {
            display: flex;
            align-items: center;
            height: 45px;
            width: 100%;
            padding-left: 60px;
            border-bottom: 1px solid $border;
            a.index_marked {
                color: $success;
            }
            a {
                padding-right: 50px;
                font-size: 10px;
                letter-spacing: 2px;
                color: $primary;
                cursor: pointer;
            }
            .index_report {
                margin-left: auto;
                margin-right: 5px;
            }
        }
    }
}
</style>