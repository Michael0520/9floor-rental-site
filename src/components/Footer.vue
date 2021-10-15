<template>
    <p class="text-end">123123123</p>
    <!-- TODO:除了元件的樣式，其餘都吃不到樣式 -->
    <footer class="index_footer container">
        <div class="row">
            <div class="col">
                <div class="index_footer-sitmap">
                    <div class="row">
                        <div class="col">
                            <div
                                class="
                                    index_footer-column
                                    flex flex-col
                                    mr-[60px]
                                "
                            >
                                <h5 class="mb-[25px] font-medium">入住玖樓</h5>

                                <ul>
                                    <a href="#" class="">條件搜尋</a>
                                    <li></li>
                                    <a href="#" class="">地圖搜尋</a>
                                    <li></li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class=""
                                            >玖樓璞園</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div
                                class="
                                    index_footer-column
                                    flex flex-col
                                    mr-[60px]
                                "
                            >
                                <h5 class="mb-[25px] font-medium">入住玖樓</h5>

                                <ul>
                                    <a href="#" class="">條件搜尋</a>
                                    <li></li>
                                    <a href="#" class="">地圖搜尋</a>
                                    <li></li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class=""
                                            >玖樓璞園</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div
                                class="
                                    index_footer-column
                                    flex flex-col
                                    mr-[60px]
                                "
                            >
                                <h5 class="mb-[25px] font-medium">入住玖樓</h5>

                                <ul>
                                    <a href="#" class="">條件搜尋</a>
                                    <li></li>
                                    <a href="#" class="">地圖搜尋</a>
                                    <li></li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class=""
                                            >玖樓璞園</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="index_footer-logo">
                    <h3>9floor</h3>
                </div>
            </div>
        </div>
        <div class="row border border-5">
            <div class="col">
                <i class="fas fa-copyright">@copyright</i>
            </div>
            <div class="col">
                <div class="index_footer-service-role">
                    <div class="row">
                        <div class="col">服務條款</div>
                        <div class="col">服務說明</div>
                        <div class="col">隱私權政策</div>
                        <div class="col">網站地圖</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    data() {
        return {
            name: "Footer",
        };
    },
};
</script>

<style lang="scss">
// @import "../assets/custom.scss";
@import "~bootstrap/dist/css/bootstrap.css";

footer {
    background-color: #f3f2ef;
    .index_footer-top {
        max-width: 1280px;
    }
}
</style>