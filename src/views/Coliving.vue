<template>
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
                    <div class="index_section-title index_sectionTitle ">
                        <div class="index_title">共同生活</div>
                        <div class="index_sub-title">
                            Co-living
                        </div>
                    </div>
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

                    <div class="index_coliving-mobile-section">
                        <div class="index_section-article">
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
                    <hr />
                    <div class="index_circleSection">
                        <div class="index_circleTitle">
                            <h3>A.共生空間</h3>
                            <p>
                                擁有居家輕鬆溫暖的氛圍，同時備有咖啡館的工作生活機能。不只是物件的冰冷堆疊，我們在最愛的角落放上一盞落地燈、植入綠意、及能與室友分享私房菜的大桌。簡約的設計風格，乘載平凡生活的更多樂趣。
                            </p>
                        </div>
                        <div class="index_circleGroup">
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-1__1fdad77346ae5664db0cb6cb6ead878a.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        家鄉拿手菜、或深夜的泡麵，共煮共食的過程總能交換到些溫馨八卦。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-2__ebe18f81997baedfde35c6e86bccc507.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        討論計畫、準備期中考、咖啡小聚，在這容納彼此的場域，一起創造回憶。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-3__cc4726a04caa7ab5a3aae6e73383cf24.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        回家後在床躺下的瞬間，舒適簡約的小天地，是對一整天的努力最好的報償。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_circleSection">
                        <div class="index_circleTitle">
                            <h3>B.便捷租約</h3>
                            <p>
                                訂閱式的線上繳租，讓租房跟聽Spotify一樣簡單。一張帳單、線上刷卡，一次解決所有費用。不管是實習外派，還是留學交換，最短一個月的彈性租期、便利人性的入住流程，再也不用被租約綁住精彩的人生規劃。
                            </p>
                        </div>
                        <div class="index_circleGroup">
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-4__2a7748a0515b35f70ce87d64a901ad56.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        我們的費用包含能源、清潔服務、行政手續等，一張帳單解決所有費用。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-5__6eefdc82c83e2ef81c03ab2e9484a02d.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        信用卡自動扣款，再也不用每個月設提醒繳房租了。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-6__82e42e15ede1be28aa22e22976e1964b.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        外派、實習、短期計畫，一個月以上的短租都沒問題。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_circleSection">
                        <div class="index_circleTitle">
                            <h3>C.日常支援</h3>
                            <p>
                                每週公共區域清潔與垃圾清運服務，家事分工免煩惱，生活品質不打折。線上客服即時通報，設備、生活問題不麻煩。
                            </p>
                        </div>
                        <div class="index_circleGroup">
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-7__af0febe13e93cd8bd3e875ee01077170.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        線上報修系統即時通報，24小時內回覆，專業修繕人員為居住品質把關。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-8__d1bdd5b88818cf429edec4c22633e748.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        定期的公共空間專業清潔、以及定量的垃圾與回收物清運服務。*垃圾清運服務有每週定量標準，超量或是未依規定處理者，仍須自行處理。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-9__7694c83a580d6a1f1af57172bf4182e7.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        所有入住的房客皆投保富邦產險1500萬第三人意外責任險，在外生活更有保障。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_circleSection">
                        <div class="index_circleTitle">
                            <h3>D.社群生活</h3>
                            <p>
                                自己的視野有限，多元的社群卻是無界無邊。無論你是誰、從哪裡來，我們都希望你能在玖樓找到有歸感的落腳處。不只是精彩的實體聚會活動，小聚、早午餐、泳池派對，開放自由的氛圍，跨界的文化交流，我們也有很棒的
                                <router-link
                                    class="underline"
                                    to="/room/community"
                                    >線上社群</router-link
                                >。成為入住會員、找到與你興趣相符的夥伴，一起探索城市吧！
                            </p>
                        </div>
                        <div class="index_circleGroup">
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-10__e2f93f8d5f3133b39594bd4c5f6c159e.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        社交當然不只發生在自己家裏，線上社群認識城市裡其他有趣的村民。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-11__736a01a14475c6ee13493f965f0c4a9f.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        圖書館、電影夜、泳池派對，社群公共空間讓最酷的大家一起共同創造。
                                    </p>
                                </div>
                            </div>
                            <div class="index_circlePhoto">
                                <div
                                    class="index_photo"
                                    style='background-image: url("https://9floor.co/assets/coliving-circle-12__95f891020ea84cd2bd05cedcff48c719.png");'
                                ></div>
                                <div class="index_info">
                                    <p>
                                        創業夥伴、異國戀情，參加社群活動，讓緣份就此展開。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <right-sider-bar />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import ImgBox from "../components/ImgBox.vue";
import SiderBar from "../components/SiderBar.vue";
import RightSiderBar from "../components/rightSiderBar.vue";
export default {
    components: {
        WhiteNavBar,
        Breadcrumb,
        Footer,
        ImgBox,
        SiderBar,
        RightSiderBar
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
            }
        };
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_coliving {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
    height: 100%;
}
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

.index_circleSection {
    border-bottom: 1px solid $border;
    .index_circleTitle {
        margin-bottom: 50px;
        h3 {
            margin-top: 40px;
            margin-bottom: 12px;
            text-align: center;
        }
        p {
            margin: 0 auto;
            margin-bottom: 12px;
            text-align: center;
            width: 446px;
        }
    }
}
.index_circleGroup {
    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: space-around;
    }
    margin-bottom: 40px;
    .index_circlePhoto {
        display: flex;
        flex-direction: column;
        align-items: center;
        .index_photo {
            width: 160px;
            height: 160px;
            background-color: $info;
            background-position: 50%;
            background-size: cover;
            border-radius: 50%;
        }
        .index_info {
            width: 220px;
            margin-top: 24px;
            p {
                text-align: center;
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .index_coliving {
        padding-top: 50px;
        .index_coliving-content {
            .index_center {
                .index_sectionTitle.index_section-title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 30px 0;
                }
                .index_coliving-section {
                    display: none;
                }
                .index_coliving-mobile-section {
                    margin: 0 20px;
                    .index_section-article {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 90px;
                        text-align: left;
                        h3 {
                            color: $success;
                            margin-bottom: 30px;
                            text-align: center;
                        }
                        p {
                            width: 100%;
                        }
                    }
                    .index_section-article-with-slogan {
                        .index_sloganContent {
                            p {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    .index_imgbox {
        .index_imgboxInner {
            padding: 0;
            height: 350px;
        }
    }
    .index_space-theme {
        padding-top: 10px;
        padding-bottom: 70px;
        margin: 0 47px;
        p {
            width: 100%;
            text-align: left;
        }
    }
    h2.vertical {
        display: none;
    }
    .index_circleSection {
        .index_circleTitle {
            p {
                width: 100%;
                text-align: left;
            }
        }
        .index_circlePhoto {
            &:nth-child(n) {
                margin-bottom: 40px;
            }
        }
        .index_info {
            text-align: left;
        }
    }
}
@media screen and (min-width: 1200px) {
    .index_section-title.index_sectionTitle {
        display: none;
    }
}

// desktop hidden
</style>