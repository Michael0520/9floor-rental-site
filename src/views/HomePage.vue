<template>
    <NavBar />

    <div class="index_content">
        <!-- index_home -->
        <div class="index_home">
            <!-- special banner -->
            <div
                class="index_banner"
                style="
                    background-image: url('https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png');
                "
            >
                <div class="index_banner-content">
                    <p class="index_banner-subtitle">
                        Live in a community <br />
                        rather than a room.
                    </p>
                    <p class="index_banner-title vertical">
                        房子是租來的，生活不是
                    </p>
                </div>
                <a
                    class="index_button index_search index_accent"
                    href="/zh-tw/room"
                    ><div>
                        <span>開始搜尋</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </a>
            </div>
            <!-- home-content -->
            <div class="index_home-content">
                <!-- side-bar -->
                <SiderBar />
                <!-- room-content -->
                <div class="index_center w-100">
                    <!-- view-marker -->
                    <div class="index_view-marker"></div>
                    <!-- co-living-slider -->
                    <div class="index_co-living-slider index_co-living-section">
                        <div class="container-fluid no-padding">
                            <div class="row gx-0">
                                <!-- <p class="vertical index_watermark">共居生活</p> -->
                                <div class="col-lg-6 col-sm-12">
                                    <div class="index_left">
                                        <p class="vertical index_watermark">
                                            共居生活
                                        </p>
                                        <div class="">
                                            <div
                                                class="
                                                    index_subTitle
                                                    index_fade-in-out
                                                    index_hide
                                                "
                                            >
                                                社群生活
                                            </div>
                                            <div
                                                class="
                                                    index_description
                                                    index_fade-in-out
                                                "
                                            >
                                                擁有輕鬆溫暖的氛圍，同時備有咖啡館的工作生活機能。不只是物件的冰冷堆疊，我們在最愛的角落放上一盞落地燈、植入綠意、以及能與室友分享私房菜的大桌。簡約的設計風格，乘載平凡生活的更多樂趣。
                                            </div>
                                            <div class="index_buttons">
                                                <a
                                                    class="
                                                        index_button
                                                        index_primary
                                                    "
                                                    href="/zh-tw/room"
                                                    ><div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            class="bi bi-search"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                                            /></svg
                                                        >搜尋物件
                                                    </div></a
                                                ><a
                                                    class="
                                                        index_button
                                                        index_primary
                                                    "
                                                    href="/zh-tw/coliving"
                                                    ><div>服務詳情</div></a
                                                >
                                            </div>
                                            <div class="index_step">
                                                <div>04 / 04</div>
                                                <div class="index_icon-buttons">
                                                    <button>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            class="
                                                                bi
                                                                bi-chevron-left
                                                            "
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                            />
                                                        </svg></button
                                                    ><button>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="14"
                                                            height="14"
                                                            fill="currentColor"
                                                            class="
                                                                bi
                                                                bi-chevron-right
                                                            "
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="index_right">
                                        <div class="index_slider-images">
                                            <img
                                                class="
                                                    index__fade-in-out___5r3iu
                                                "
                                                src="https://9floor.co/backend/web/lifestyle/20190121-edb7e9b402ccaea7a0b1ecc0d405b534.jpg"
                                                alt="slider"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- room-list-lg -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <RoomCard />
                            </div>
                            <div class="col-lg-6">
                                <RoomCard />
                            </div>
                        </div>
                    </div>
                    <!-- room-list-small -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <RoomCard />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <RoomCard />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <RoomCard />
                            </div>
                        </div>
                    </div>
                    <!-- more-room-section -->
                    <div class="index_more-room">
                        <div>
                            加入我們，分享彼此的世界，如約翰藍儂曾《想像》的那樣。
                        </div>
                        <a class="index_button index_primary" href="/zh-tw/room"
                            ><div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    class="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                    /></svg
                                >更多物件
                            </div>
                        </a>
                    </div>
                </div>
                <!-- side-bar -->
                <div class="index_side-bar index_side-bar-right">
                    <div class="index_side-bar-content index_fade-in-out"></div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import RoomCard from "../components/RoomCard.vue";
import SiderBar from "../components/SiderBar.vue";
import NavBar from "../components/NavBar.vue";
export default {
    data() {
        return {
            name: "HomePage"
        };
    },
    components: {
        Footer,
        RoomCard,
        SiderBar,
        NavBar
    }
};
</script>
<style  lang="scss" >
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
.index_content {
    opacity: 1;
    transition: opacity 0.3s;
}

.index_home {
    display: flex;
    flex-direction: column;
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
    @media screen and (max-width: 576px) {
        padding-top: 50px;
    }
    .index_banner-content {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        z-index: 2;
        min-height: 150px;
        .index_banner-subtitle {
            position: absolute;
            top: 0;
            left: 60px;
            font-weight: 400;
            writing-mode: vertical-rl;
            color: #fff;
            line-height: 1.6;
            letter-spacing: 1.3px;
            white-space: pre-line;
            @media screen and (max-width: 576px) {
                display: none;
            }
        }
        .index_banner-title {
            font-size: 27px;
            color: #fff;
            white-space: pre-line;
            max-height: 425px;
            overflow: hidden;
            text-align: center;
        }
        .vertical {
            font-family: source-han-serif-japanese, serif;
            font-weight: 700;
            font-style: normal;
            letter-spacing: 7.7px;
            line-height: 1.29;
            writing-mode: vertical-rl;
        }
    }
    // banner-button
    .index_button {
        display: flex;
        justify-content: center;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 12px;
            line-height: 1.75;
            letter-spacing: 3.4px;
            color: #444647;
        }
    }
    .index_search {
        margin-top: 30px;
    }
    .index_button,
    .index_accent {
        background-color: $success;
        border: 1px solid #6a4234;
        div {
            color: #fff;
        }
    }
}
.index_home-content {
    display: flex;
    width: 100%;
    max-width: 1280px;
    .index_center {
        padding-top: 60px;
        // TODO:不曉得為何不能加上 width 100%
        .index_co-living-slider {
            display: flex;
            position: relative;
            width: 100%;
            .index_left {
                margin-top: 110px;
                margin-left: 51px;
                .index_buttons {
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 45px;
                    a {
                        height: 30px;
                        margin-right: 20px;
                    }
                }
                .index_subTitle {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 1.35;
                    letter-spacing: 5px;
                    color: $success;
                    max-width: 405px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .index_description {
                    margin-top: 30px;
                    max-width: 405px;
                    font-size: 13px;
                    font-weight: 300;
                    line-height: 2;
                    letter-spacing: 1px;
                    color: $primary;
                }
                .index_step {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 60px;
                    max-width: 248px;
                    div {
                        &:first-child {
                            font-size: 11px;
                            font-weight: 300;
                            line-height: 2;
                            letter-spacing: 0.5px;
                            color: $primary;
                        }
                    }
                    .index_icon-buttons {
                        button {
                            margin-left: 17px;
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
            .index_right {
                .index_slider-images {
                    display: flex;
                    justify-content: center;
                    overflow: hidden;
                    width: 100%;
                    img {
                        height: 450px;
                    }
                }
                @include md {
                    display: none;
                }
            }
            .index_watermark {
                position: absolute;
                left: calc(50% - 22px);
                font-size: 34px;
                letter-spacing: 7.7px;
                font-weight: 700;
                writing-mode: vertical-rl;
                @include md {
                    display: none;
                }
            }
        }
        .index_co-living-section {
            margin-bottom: 90px;
        }
        .index_more-room {
            margin-bottom: 53px;
            color: $primary;

            div {
                margin-bottom: 24px;
            }
            svg {
                color: $primary;
            }
        }
    }
}
.index_fade-in-out {
    transition: opacity 0.3s;
    opacity: 1;
}
// side-bar
.index_side-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    border-right: 1px solid $info;
    border-top: 1px solid $info;
    opacity: 1;
    transition: opacity 0.5s;
    flex-basis: 60px;
    flex-shrink: 0;
    &:last-child {
        border-right: 0;
        border-left: 1px solid $info;
    }
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
.index_side-bar-left,
.index_side-bar-right {
    flex-basis: 60px;
}
.index_side-bar-left {
    div {
        &:first-child {
            margin-top: 60px;
        }
    }
}

// anthoer
.index_view-marker {
    width: 0;
    height: 0;
    opacity: 0;
}
.index_more-room {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 0;
    background-color: #e9ece5;
    div {
        max-width: 344px;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.35;
        letter-spacing: 2.5px;
        text-align: center;
        color: $primary;
    }
}
</style>