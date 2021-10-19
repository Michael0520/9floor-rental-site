<template>
    <div class="container-fluid no-padding">
        <!-- NavBar -->
        <div class="row">
            <div class="col">
                <header></header>
            </div>
        </div>
        <div class="index-content index_show">
            <div class="index_room">
                <div class="index_room-detail-banner">
                    <div class="index_slide-container">
                        <div class="swipe" style="visibility: visible">
                            <div class="swipe-item">
                                <!-- TODO:swipe-item: transform style
                                style="width: 1727px; left: 0px"
                                        transition-duration: 0ms;
                                        transform: translate(1727px, 0px)
                                        translateZ(0px); -->
                                <div
                                    style="
                                        background-image: url('https://9floor.co/backend/web/roomPhoto/20200902-50a611e8ecd6f999ca037a57539c8465.png');
                                    "
                                ></div>
                            </div>
                        </div>
                        <button class="index_swipe-left">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="55"
                                    height="55"
                                    fill="currentColor"
                                    class="bi bi-chevron-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                    />
                                </svg>
                            </div>
                        </button>
                        <button class="index_swipe-right">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="55"
                                    height="55"
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
                        </button>
                    </div>
                    <div class="index_banner-content">
                        <div>
                            <div class="index_vertical-title index_subTitle">
                                <span>仁</span><span>愛</span>
                            </div>
                            <div class="index_vertical-title">
                                <span>仁</span><span>愛</span><span> </span
                                ><span>R</span><span>o</span><span>o</span
                                ><span>m</span><span>A</span>
                            </div>
                        </div>
                    </div>
                    <div class="index_buttons-wrap">
                        <button
                            class="index_button index_buttons index_inverse"
                        >
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-images"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                    />
                                    <path
                                        d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"
                                    /></svg
                                >所有照片
                            </div>
                        </button>
                    </div>
                </div>
                <!-- Breadcrumb -->
                <Breadcrumb />
                <!-- room-detail-content -->
                <div class="index_content">
                    <div class="index_booking-bar">
                        <div class="index_wrap index_booking-bar-banner">
                            <div class="index_booking-bar-left">
                                <div class="index_status">
                                    <span
                                        ><p class="small">招募中</p>
                                        <p class="index_date"></p>
                                    </span>
                                    <span class="index_price index_tablet-show"
                                        >NTD 16500
                                        <span class="index_small"
                                            >/月</span
                                        ></span
                                    >
                                    <button
                                        class="
                                            index_button-icon
                                            index_like
                                            index_mobile-show
                                        "
                                    >
                                        <i
                                            class="
                                                material-icons
                                                index__icon___1quHO
                                            "
                                            >favorite</i
                                        >
                                    </button>
                                </div>
                                <a
                                    class="index_apartment-name"
                                    href="/zh-tw/apartment/1"
                                    >仁愛</a
                                >
                                <div class="index_room-name">仁愛 RoomA</div>
                            </div>
                            <div class="index_booking-bar-right">
                                <span class="index_price index_tablet-hide"
                                    >NTD 16500<span class="index_small"
                                        >/月</span
                                    ></span
                                ><button
                                    class="
                                        index_button-icon
                                        index_like
                                        index_mobile-hide
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        fill="currentColor"
                                        class="bi bi-suit-heart-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                                        />
                                    </svg></button
                                ><button
                                    class="
                                        index_button
                                        index_textButton
                                        index_primary
                                    "
                                >
                                    <div>預約看房</div></button
                                ><button
                                    class="
                                        index_button
                                        index_textButton
                                        index_accent
                                    "
                                >
                                    <div>
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
                                        >預訂入住
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- side-bar-left -->
                    <SiderBar />
                    <div class="index_center"></div>
                    <!-- side-bar-right -->
                    <div class="index_side-bar index_side-bar-right">
                        <div
                            class="index_side-bar-content index_fade-in-out"
                        ></div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <div class="row">
                <div class="col">
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import SiderBar from "../components/SiderBar.vue";
export default {
    data() {
        return {
            name: "RoomDetailPage",
        };
    },
    components: {
        Footer,
        Breadcrumb,
        SiderBar,
    },
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

svg {
    color: #fff;
}
// show
.index-content.index_show {
    opacity: 1;
}
// room-content
.index_room {
    display: flex;
    flex-direction: column;
    align-items: center;
    // breadcrumb
    .index_breadcrumb {
        position: absolute;
        top: 100px;
        .breadcrumb-item {
            &::before {
                color: #fff;
            }
        }
        a,
        svg {
            color: #fff;
        }
    }
    .index_content {
        display: flex;
        position: relative;
        width: 100%;
        max-width: 1280px;
    }
}
.index_room-detail-banner {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: $info;
}
.index_slide-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    button {
        position: absolute;
        padding: 0;
        height: 55px;
        width: 55px;
        outline: none;
        div {
            svg {
                font-size: 55px;
                opacity: 0.7;
            }
        }
    }
    .index_swipe-left {
        top: calc(50% - 27.5px);
        left: 34px;
    }
    .index_swipe-right {
        top: calc(50% - 27.5px);
        right: 34px;
    }
}
// swipe
.swipe,
.swipe-wrap,
.swipe-wrap div {
    overflow: hidden;
    position: relative;
}
.swipe-wrap {
    div {
        float: left;
        width: 100%;
    }
}
.swipe-item {
    display: flex;
    justify-content: center;
    div {
        height: 100vh;
        width: 100vw;
        background-size: cover;
        background-position: 50%;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.4;
        }
    }
}
// banner
.index_banner-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: calc(50% - 35px);
    width: 70px;
    height: calc(100vh - 65px);
    z-index: 2;
    div {
        display: flex;
        .index_subTitle {
            margin-top: 5px;
            margin-right: 14px;
            span {
                font-size: 16px;
                font-weight: 700;
                line-height: 1.56;
                letter-spacing: 3.6px;
            }
        }
    }
}
.index_vertical-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-bottom: 2px;
        font-family: source-han-serif-japanese, serif;
        font-weight: 700;
        font-style: normal;
        font-size: 27px;
        line-height: 1.37;
        letter-spacing: 6.1px;
        color: #fff;
    }
}
.index_buttons-wrap {
    position: absolute;
    bottom: 90px;
    width: 100%;
    max-width: 1280px;
    .index_buttons {
        z-index: 2;
        margin-left: 94px;
        svg {
            margin-right: 6px;
        }
    }
}
.index_button.index_inverse {
    border-color: #fff;
    div {
        color: #fff;
    }
    svg {
        color: #fff;
    }
}
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
        color: $primary;
        svg {
            font-size: 16px;
        }
    }
}
// accent-button style
.index_button.index_accent {
    background-color: $lightOrange;
    border: 1px solid $danger;
    div {
        color: #fff;
    }
}
// booking-bar
.index_booking-bar {
    position: absolute;
    height: 65px;
    width: 100%;
    left: 0;
    z-index: 10;
    .index_wrap,
    .index_booking-bar-banner {
        margin-top: -65px;
        transition: margin-top 0.3s ease-in-out;
    }
    .index_booking-bar-banner {
        display: flex;
        justify-content: flex-end;
        height: 65px;
        width: 100%;
        padding: 0 60px;
    }
    .index_wrap {
        .index_booking-bar-left {
            display: flex;
            align-items: center;
            width: 50%;
            background-color: #fff;
            .index_status {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                height: 100%;
                width: 150px;
                padding-left: 20px;
                background-color: $lightOrange;
                span {
                    .index_date {
                        margin-top: -5px;
                        font-weight: 700;
                    }
                    p {
                        color: #fff;
                    }
                }
            }
            .index_apartment-name {
                margin-left: 26px;
                max-width: 150px;
                font-size: 15px;
                font-weight: 300;
                line-height: 1.35;
                letter-spacing: 2.5px;
                color: $success;
            }
            .index_room-name {
                margin-left: 26px;
                max-width: 200px;
                font-size: 15px;
                font-weight: 300;
                line-height: 1.35;
                letter-spacing: 2.5px;
                color: $primary;
            }
        }
        .index_booking-bar-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
            width: 50%;
            padding-right: 25px;
            background: #fff;
            .index_textButton {
                margin-left: 10px;
            }
        }
    }
}
.index_price {
    height: 30px;
    margin-right: auto;
    padding: 0 8px;
    font-size: 20px;
    font-weight: 500;
    color: $success;
    background-color: #fff7f4;
    line-height: 30px;
}
.index_button-icon {
    position: relative;
    height: 30px;
    width: 30px;
    border: 1px solid $info;
    background-color: #fff;
    line-height: 30px;
    outline: none;
    transition: all 0.3s;
    svg {
        font-size: 16px;
        color: $secondary;
        transition: all 0.3s;
    }
}
.index_small {
    margin-left: 3px;
    font-size: 12px;
    font-weight: 300;
    vertical-align: bottom;
}

// RWD
.index_mobile-show,
.index_tablet-show {
    display: none;
}
</style>