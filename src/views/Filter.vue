<template >
    <div class="">
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

        <!--  Room-content -->
        <div class="row index_content w-100">
            <!-- sider-bar -->
            <div class="col-lg-1 index_side-bar">
                <div class="index_side-bar-content">
                    <div class="index_vertical-word">
                        <span>房</span>
                        <span>源</span>
                        <span>搜</span>
                        <span>尋</span>
                    </div>
                    <div class="index_vertical-en">Room search</div>
                </div>
            </div>
            <div class="col-md-12 col-lg-8">
                <div class="row index_room-list">
                    <div class="col-sm-12 col-md-6 index_sort">
                        <div>6 筆結果</div>
                        <div class="justify-content-end">
                            <div>排序方式</div>
                            <select
                                class="
                                    form-select form-select-sm
                                    index_dropdown-basic
                                "
                                aria-label=".form-select-sm example"
                            >
                                <option selected>最新</option>
                                <option value="1">最高價格</option>
                                <option value="2">最低價格</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <RoomCard />
                    </div>
                </div>
            </div>
            <div class="col-lg-3 index_room-filter"></div>
        </div>

        <!-- footer -->
        <div class="row">
            <div class="col">
                <Footer />
            </div>
        </div>
    </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
// import RoomCard from "../components/RoomCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import RoomCard from "../components/RoomCard.vue";

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
        RoomCard,
        Footer,
    },
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_side-bar {
    align-items: center;
    width: 60px;
    border-right: 1px solid $info;
    border-top: 1px solid $info;
    border-bottom: 1px solid $info;
    opacity: 1;
    transition: opacity 0.5s;
    flex-basis: 60px;
    flex-shrink: 0;
    .index_side-bar-content {
        margin-top: 24px;
        transition: opacity 0.3s;
        opacity: 1;
        .index_vertical-word {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            span {
                margin-bottom: 2px;
                font-size: 10px;
                color: $primary;
                transform: rotate(90deg);
            }
        }
        .index_vertical-en {
            font-size: 10px;
            color: $primary;
            writing-mode: vertical-lr;
        }
    }
    @include lg {
        display: none;
    }
}
.index_room-filter {
    background-color: pink;
    @include lg {
        display: none;
    }
}
.index_room-list {
    width: 100%;
    padding: 17px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border-top: 1px solid $info;
    .index_sort {
        width: 100%;
        display: flex;
        align-self: flex-start;
        justify-content: space-between;
        margin: 17px;
        div {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 300;
            line-height: 2;
            letter-spacing: 0.5px;
            color: $primary;
            .index_dropdown-basic {
                width: 140px;
                display: inline-block;
                margin-left: 14px;
                position: relative;
                .index_dropdown-basic-content {
                    width: 100%;
                    min-height: 30px;
                    border: 1px solid $info;
                    outline: none;
                    cursor: pointer;
                    transition: border 0.2s;
                }
                .index_value {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 12px;
                }
            }
        }
    }
}
</style>