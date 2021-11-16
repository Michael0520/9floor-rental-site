<template>
    <WhiteNavBar />

    <div class="index_media">
        <Breadcrumb />
        <ImgBox
            :image="bannerTitle.imgUrl"
            :title1="bannerTitle.title1"
            :title2="bannerTitle.title2"
        />
        <div class="index_content">
            <SiderBar />
            <div class="index_center">
                <div class="index_section-title index_sectionTitle">
                    <div class="index_title">媒體</div>
                    <div class="index_sub-title">Media</div>
                </div>
                <div class="index_section">
                    <h3>採訪玖樓</h3>
                    <div class="index_sectionContent">
                        <p>
                            為了推廣共同生活空間，我們很樂意與大家分享玖樓的經歷與理念，可在此下載我們的品牌書。如果想進一步深入了解玖樓，歡迎留下您的採訪需求，我們會儘速與您聯繫。同時，也可先參以下考玖樓過往的媒體報導。
                        </p>
                    </div>
                    <div class="index_sectionButton">
                        <a
                            class="index_button index_button"
                            href="/./assets/玖樓_2018品牌回顧__c464572924c92ce39224b10744379022.pdf"
                            target="_blank"
                            ><div>下載品牌書</div></a
                        ><a
                            class="index_button index_button index_primary"
                            href="https://www.surveycake.com/s/eVGgX"
                            target="_blank"
                            ><div>
                                <i class="material-icons index_icon"
                                    >open_in_new</i
                                >採訪需求
                            </div></a
                        >
                    </div>
                </div>
                <div class="index_section">
                    <h3>採訪紀錄</h3>
                    <div class="index_sectionArticleGroup">
                        <a
                            href="https://www.sotokoto.net/jp/daily_photo/index.php?keyword=%E7%8E%96%E6%A8%93"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div class="index_sectionArticle">
                                <h4>台湾のまちづくり</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>SOTOKOTO(ソトコト) 2017年12月号</p>
                            </div>
                            <hr class="index_horizontal"
                        /></a>
                        <a
                            href="https://bkb.mpweekly.com/cu0004/20171218-61342"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div class="index_sectionArticle">
                                <h4>台北 「玖樓」共居實驗 捍衛跨代居住權益</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>明報周刊</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://aces2017.thenewslens.com/aces/%E7%8E%96%E6%A8%93"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    溝通是彼此價值的折衝與理解，追求更美好的共同生活
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>關鍵評論網「2017年未來大人物」</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.youtube.com/watch?v=Z5-YVZOOg3k"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>我的老室友</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>公視-獨立特派員</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.oneday.com.tw/%E7%8E%96%E6%A8%93/"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    【玖樓】改造臺北老公寓
                                    生活在一座不疏離的城市
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>小日子雜誌</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.pictame.com/media/1574556593016640755_3098315341"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    用老公寓盛裝生活新概念：填補世代居住落差，共生公寓「玖樓」
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>Polysh</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.youtube.com/watch?v=Zof1oIc9VKU"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    「房子是租來的，但生活不是」：「玖樓」打造共生公寓，讓青年住進有生命力的空間
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>社企流</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.youtube.com/watch?v=Zof1oIc9VKU"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>住進一個社群 Living in a community</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>TED x TKU</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://npost.tw/archives/28358"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    「重新建立對家的想像！」推動共生公寓的玖樓團隊
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>NPOst 公益交流站</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://point.rapaq.com/Article/702"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>共居時代正興起！！經濟又拉近人際</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>破點</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.30.com.tw/article_content_31209.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>獨居不離群</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>30雜誌</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.ta-mag.net/green/News.php?id=935"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    高房價城市中的空間共享：玖樓共生公寓―租屋生活的另一種可能
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>Green 綠建築雜誌</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.wowlavie.com/city_unit.php?article_id=AE1600239&amp;c_id=M01A02"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>同居新定義－玖樓打造對家的另類想像</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>listSubtitle13</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://goo.gl/K9wnMw5"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>從生理到心靈 「一個人」經濟大爆發</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>今周刊</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://archive.businessweekly.com.tw/Article/Index?StrId=60470"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>租房得投履歷？秀自己免費住天龍國</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>商業週刊</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.cw.com.tw/article/article.action?id=5074788"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>社會學老師狂想一堂課改變台灣</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>天下雜誌</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.urstaipei.net/article/20593"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    台北青銀共居的條件與機會：高齡社會與閒置公寓
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>台北村落之聲</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.youtube.com/watch?v=hk7JQ9T_A_A&amp;feature=youtu.be&amp;t=453"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>共生，更便宜</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>民視異言堂</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="https://www.youtube.com/watch?v=f1L8r40YKbM&amp;feature=youtu.be"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>趨勢「共生公寓」打破居住模式！</h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>TVBS</p>
                            </div>
                            <hr class="index_horizontal"/></a
                        ><a
                            href="http://www.biosmonthly.com/contactd.php?id=6888"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><div class="index_sectionArticle">
                                <h4>
                                    加入吧，共享空間（三）：那些不只是用來工作的空間——The
                                    Common、來坐夥、玖樓
                                </h4>
                                <i
                                    class="material-icons index_icon index__icon___3tIwH"
                                    >open_in_new</i
                                >
                                <p>BIOS Monthly</p>
                            </div>
                            <hr class="index_horizontal"
                        /></a>
                    </div>
                </div>
            </div>
            <RightSiderBar />
        </div>
    </div>
    <Footer />
</template>

<script>
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import ImgBox from "../components/ImgBox.vue";
import SiderBar from "../components/SiderBar.vue";
import RightSiderBar from "../components/rightSiderBar.vue";
import Footer from "../components/Footer.vue";

export default {
    data() {
        return {
            bannerTitle: {
                imgUrl:
                    "https://9floor.co/assets/media-hero__3aa505a868af721be9588810b2da2868.jpg",
                title1: "媒",
                title2: "體"
            }
        };
    },
    components: {
        WhiteNavBar,
        Breadcrumb,
        ImgBox,
        SiderBar,
        RightSiderBar,
        Footer
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_media {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
    .index_content {
        display: flex;
        width: 100%;
        max-width: 1280px;
        .index_center {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-bottom: 40px;
            .index_sectionTitle {
                margin-top: 30px;
                margin-bottom: 0;
                @media screen and (min-width: 576px) {
                    display: none;
                }
            }

            .index_section {
                margin: 74px 0 0 44px;
                &:nth-of-type(2) {
                    margin-bottom: 20px;
                }
                @media screen and (max-width: 576px) {
                    margin: 0 20px;
                    h3 {
                        margin: 30px 0;
                        min-width: 300px;
                        text-align: center;
                    }
                    .index_sectionContent {
                        width: 100%;
                    }
                    .index_sectionArticleGroup {
                        padding-top: 15px;
                        a {
                            hr.index_horizontal {
                                margin: 15px -20px 15px 0;
                            }
                        }
                    }
                }
                h3 {
                    margin-bottom: 30px;
                    color: $success;
                }
                .index_sectionContent {
                    margin-bottom: 30px;
                    width: 325px;
                }
                .index_sectionButton {
                    display: flex;
                    .index_button {
                        margin-right: 16px;
                        div {
                            align-items: center;
                            text-align: center;
                            font-size: 12px;
                            line-height: 1.75;
                            letter-spacing: 3.4px;
                            color: $primary;
                            i {
                                font-size: 16px;
                                margin-right: 3px;
                                color: $primary;
                            }
                        }
                    }
                }
                .index_sectionArticleGroup {
                    a {
                        .index_sectionArticle {
                            h4 {
                                font-size: 18px;
                                letter-spacing: 3px;
                                display: inline;
                                color: $success;
                                margin-right: 10px;
                                cursor: pointer;
                            }
                            .index_icon {
                                color: $success;
                                font-size: 12px;
                                cursor: pointer;
                            }
                        }
                        .index_horizontal {
                            border: 1px solid $success;
                            margin: 15px 56px 15px 0;
                        }
                    }
                }
            }
        }
    }
}
.index_section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
}
</style>