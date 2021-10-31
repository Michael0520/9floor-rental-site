<template>
    <WhiteNavBar />
    <div class="index_content">
        <div class="index_aboutSection">
            <Breadcrumb />
            <div class="index_imgbox">
                <div class="index_imgboxInner">
                    <div
                        class="index_image"
                        style='background-image: url("https://9floor.co/assets/about-hero__06d0e04ed24912eb1ecded6dbc310901.jpg");'
                    ></div>
                    <div class="index_watermark">
                        <div class="index_vertical-title">
                            <span>關</span><span>於</span><span>玖</span
                            ><span>樓</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="index_aboutSection-content">
                <SiderBar />
                <div class="index_center">
                    <div
                        class="index_section-title index_sectionTitle mobile-show"
                    >
                        <div class="index_title">共居生活</div>
                        <div class="index_sub-title">Co-living</div>
                    </div>
                    <div class="index_section mobile-column">
                        <div class="index_sectionArticle">
                            <h3>房子是租來的<br />但生活不是</h3>
                            <div>
                                <p>
                                    成立於2015年，租不到像樣房子的台北，玖樓開始改造了10間老公寓，打造客廳、廚房成為類似咖啡館的半開放空間，簡約的設計吸引百餘位來臺北尋求夢想的學生、上班族、自由工作者、國際人士。新穎的物管模式，也吸引了許多屋主合作，掀起老屋欣立的新風潮。玖樓相信，人們不只在都市工作創業、上學實習，更應該「住」進一個社群，因著室友的共同生活互動，共享空間、知識、經驗與快樂。
                                </p>
                            </div>
                        </div>
                        <div class="index_sectionImage">
                            <div class="index_imgbox">
                                <div class="index_sectionImgboxInner">
                                    <div
                                        class="index_image"
                                        style='background-image: url("https://9floor.co/assets/about-1__805407ed1fce4d3e155a1a9b1b05cfcc.jpg");'
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_section mobile-column">
                        <div class="index_sectionArticle">
                            <h3>
                                不只是硬體設備，<br />更關乎人 與人之間的關係
                            </h3>
                            <div>
                                <p>
                                    藉著空間設計、管理服務以及會員制的經營，玖樓致力於提升空間居住與物業管理品質，提供市場更好的居住選擇。讓室友們一起共食、看電影，工作、讀書會或小型聚會自然地發生在日常家裡，藉由共同居住、生活，在一般認為私密的空間裡，創造人與人的連結、營造出公共性的可能。
                                </p>
                            </div>
                        </div>
                        <div class="index_sectionImage">
                            <div class="index_imgbox">
                                <div class="index_sectionImgboxInner">
                                    <div
                                        class="index_image"
                                        style='background-image: url("https://9floor.co/assets/about-2__b0e5fad9bf78bf5c1913e96d9eba312f.jpg");'
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_section mobile-column">
                        <div class="index_sectionArticle">
                            <h3>重新建立社區，<br />共同實踐理想生活的樣貌</h3>
                            <div>
                                <p>
                                    作為一個關注社會創新的品牌，玖樓近年透過許多社群活動串連橫跨不同領域的住客。同時我們也打造實體跨世代的共同生活空間如三峽青銀共居宅，持續回應我們為自己設定的挑戰；如何打造城市裡更友善、更有趣、更宜居的生活體驗。透過社群經營與串連，讓社區互相支持的概念跨越實體空間，與住民共同實踐理想生活的樣貌。
                                </p>
                            </div>
                        </div>
                        <div class="index_sectionImage mobile-hidden">
                            <div class="index_imgbox">
                                <div class="index_sectionImgboxInner">
                                    <div
                                        class="index_image"
                                        style='background-image: url("https://9floor.co/assets/about-3__b7878505b32e982c5031afe337882069.jpg");'
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="index_more-room mobile-hidden">
                        <div class="index_more-room-content">
                            加入我們，分享彼此的世界，如約翰藍儂曾《想像》的那樣。
                        </div>
                        <router-link
                            class="index_button index_primary"
                            to="/roomDetailPage"
                        >
                            <div>
                                <i
                                    class="material-icons index_icon"
                                    style="font-size:16px;margin-right:3px;"
                                    >search</i
                                >更多物件
                            </div>
                        </router-link>
                    </section>
                </div>
                <!-- left-sider-bar -->
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

export default {
    data() {
        return {
            name: "AboutPage",
            scrollNum: 0,
            isTop: false
        };
    },
    methods: {
        scrollEvent() {
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
        }
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
        WhiteNavBar,
        Breadcrumb,
        SiderBar,
        rightSiderBar,
        Footer
    }
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_aboutSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
    height: 100%;
}
.index_imgbox {
    width: 100%;
    overflow: hidden;
    .index_imgboxInner {
        width: 100%;
        padding-top: 40%;
        position: relative;
        .index_image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
        }
        .index_watermark {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            z-index: 10;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.91;
            font-family: Fanwood Text, serif;
            font-size: 34px;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.2;
            letter-spacing: 0;
            text-align: center;
            color: #fff;
        }
    }
}
.index_aboutSection {
    .index_aboutSection-content {
        display: flex;
        width: 100%;
        max-width: 1280px;
        .index_center {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .index_section {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                width: 100%;
                margin-top: 72px;
                &:nth-child(3n) {
                    flex-direction: row-reverse;
                }
                &:nth-child(4) {
                    margin-bottom: 74px;
                }

                .index_sectionArticle {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    flex: 1;
                    box-sizing: border-box;
                    h3 {
                        padding: 0 77px 0 49px;
                        margin-bottom: 14px;
                        line-height: 1.35;
                        color: $success;
                    }
                    div {
                        p {
                            padding: 0 77px 0 49px;
                        }
                    }
                }
                .index_sectionImage {
                    flex: 1;
                    width: 100%;
                    .index_imgbox {
                        width: 100%;
                        overflow: hidden;
                        .index_sectionImgboxInner {
                            width: 100%;
                            padding-top: 79%;
                            position: relative;
                            .index_image {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: 50%;
                            }
                        }
                    }
                }
            }
            .index_sectionTitle {
                text-align: center;
                margin: 28px 0 19px;
                display: none;
            }
        }
    }
    .index_more-room {
        .index_more-room-content {
            max-width: 344px;
            font-size: 15px;
            font-weight: 300;
            line-height: 1.35;
            letter-spacing: 2.5px;
            text-align: center;
            color: $primary;
            margin-bottom: 24px;
        }
    }
}

// mobile
@media screen and(max-width:576px) {
    .index_aboutSection {
        padding-top: 50px;
        .index_aboutSection-content {
            .index_center {
                .index_section-title {
                    display: block;
                }
                .index_section.mobile-column {
                    flex-direction: column;
                    margin-top: 0;
                }
                .index_section {
                    .index_sectionArticle {
                        h3 {
                            text-align: center;
                            padding: 0;
                            margin: 0 auto;
                        }
                        div {
                            margin: 30px 20px 50px;
                            p {
                                padding: 0;
                            }
                        }
                    }
                    .index_sectionImage {
                        margin-bottom: 50px;
                    }
                }
            }
        }
    }
    .index_breadcrumb {
        display: none;
    }
    .index_imgbox {
        .index_imgboxInner {
            padding: 0;
            height: 350px;
        }
    }
    .index_section {
        .mobile-hidden {
            display: none;
        }
    }
    .index_more-room.mobile-hidden {
        display: none;
    }
    .index_section-title.mobile-show {
        display: block;
    }
}
</style>
