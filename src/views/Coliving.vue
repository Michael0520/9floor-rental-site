<template>
    <div>
        <white-nav-bar />

        <div class="index_content">
            <div class="index_coliving">
                <Breadcrumb />
                <img-box
                    :image="bannerTitle.imgUrl"
                    :title1="bannerTitle.title1"
                    :title2="bannerTitle.title2"
                    :title3="bannerTitle.title3"
                    :title4="bannerTitle.title4"
                />
                <div class="index_coliving-content">
                    <sider-bar />
                    <div class="index_center">
                        <div class="index_space-theme">
                            <h3>Hi we are 9floor</h3>
                            <p>
                                玖樓是一個以社群經營為主的全方位共同生活空間品牌，透過空間與多元的社群關係，創造更豐富的生活體驗。
                            </p>
                        </div>
                        <div class="index_coliving-section">
                            <div
                                class="index_section-article-with-slogan index_sloganContainer"
                            >
                                <div class="index_slogan">
                                    <h2 class="vertical">但生活不是。</h2>
                                    <h2 class="vertical">房子是租來的，</h2>
                                </div>
                                <div class="index_sloganContent">
                                    <h3>
                                        <span
                                            ><span
                                                >什麼是共同生活空間<br />&nbsp;(co-living
                                                space)</span
                                            ></span
                                        >
                                    </h3>
                                    <p>
                                        所謂的生活除了回家睡覺外、也包含適當的社交、活動參與、放鬆休憩等等。而共同生活空間正是為了回應當代的城市人口組成，所提供的生活空間新選擇。比起出租套房雅房，共同生活空間更強調完善的服務與透過適當比例的公共空間來凝聚社群，例如公共廚房、共同工作空間、休憩空間等等。以適切簡約為設計原則，創造每位室
                                        友能同時享受社交生活的宜居場域。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div v-for="(item, index) in circleCards" :key="index">
                            <circle-card
                                :title="item.circleCardTitle.title"
                                :titleDescription="
                                    item.circleCardTitle.titleDescription
                                "
                                :image="item.circleCard[index].image"
                                :cardDescription="
                                    item.circleCard[index].description
                                "
                            />
                        </div>
                    </div>
                    <right-sider-bar />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import ImgBox from "../components/ImgBox.vue";
import SiderBar from "../components/SiderBar.vue";
import RightSiderBar from "../components/rightSiderBar.vue";
import CircleCard from "../components/CircleCard.vue";
export default {
    components: {
        WhiteNavBar,
        Breadcrumb,
        Footer,
        ImgBox,
        SiderBar,
        RightSiderBar,
        CircleCard
    },
    data() {
        return {
            bannerTitle: {
                imgUrl:
                    "https://9floor.co/assets/coliving-hero__51cb6b6ea9987fcbe2de2cf4da936212.jpg",
                title1: "共",
                title2: "居",
                title3: "生",
                title4: "活"
            },

            circleCards: [
                {
                    circleCardTitle: {
                        title: "A.共生空間",
                        titleDescription:
                            "家鄉拿手菜、或深夜的泡麵，共煮共食的過程總能交換到些溫馨八卦。"
                    },
                    circleCard: [
                        {
                            image:
                                "https://9floor.co/assets/coliving-circle-1__1fdad77346ae5664db0cb6cb6ead878a.png",
                            description:
                                "家鄉拿手菜、或深夜的泡麵，共煮共食的過程總能交換到些溫馨八卦。"
                        },
                        {
                            image:
                                "https://9floor.co/assets/coliving-circle-1__1fdad77346ae5664db0cb6cb6ead878a.png",
                            description:
                                "家鄉拿手菜、或深夜的泡麵，共煮共食的過程總能交換到些溫馨八卦。"
                        },
                        {
                            image:
                                "https://9floor.co/assets/coliving-circle-1__1fdad77346ae5664db0cb6cb6ead878a.png",
                            description:
                                "家鄉拿手菜、或深夜的泡麵，共煮共食的過程總能交換到些溫馨八卦。"
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_coliving-content {
    display: flex;
    width: 100%;
    max-width: 1280px;
    .index_center {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 50px;
        .index_coliving-section {
            margin-top: 30px;
            .index_sloganContainer {
                .index_sloganContent {
                    margin-left: 90px;
                    h3 {
                        align-self: flex-start;
                        color: $success;
                        margin-bottom: 20px;
                    }
                    p {
                        width: 446px;
                        margin-bottom: 90px;
                    }
                }
            }
        }
        hr {
            border: 1px solid $border;
            width: 100%;
            margin: 0;
        }
    }
}
.index_space-theme {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    h3 {
        margin: 10px 0 15px;
        letter-spacing: normal;
    }
    p {
        width: 446px;
        text-align: center;
    }
}
.index_section-article-with-slogan {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 40px;
    .index_slogan {
        display: flex;
        h2 {
            &:nth-child(2) {
                margin-left: 22px;
            }
        }
    }
}
h2.vertical {
    font-family: source-han-serif-japanese, serif;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 7.7px;
    line-height: 1.29;
    writing-mode: vertical-rl;
}
</style>