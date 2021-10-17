<template>
    <!-- index_home -->
    <div class="index_home">
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
            <a class="index_button index_search index_accent" href="/zh-tw/room"
                ><div>
                    <span>開始搜尋</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
</style>