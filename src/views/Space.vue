<template>
    <WhiteNavBar />
    <div class="index_space">
        <Breadcrumb />
        <ImgBox
            :image="bannerTitle.imgUrl"
            :title1="bannerTitle.title1"
            :title2="bannerTitle.title2"
            :title3="bannerTitle.title3"
            :title4="bannerTitle.title4"
        />
        <div class="index_space-content">
            <SiderBar
                :title1="bannerTitle.title1"
                :title2="bannerTitle.title2"
                :title3="bannerTitle.title3"
                :title4="bannerTitle.title4"
                :siderName="siderName"
            />
            <div class="index_center">
                <div
                    class="index_section-title index_sectionTitle index_space-sectionTitle"
                >
                    <div class="index_title">空間管理</div>
                    <div class="index_sub-title">Space Management</div>
                </div>
                <div class="index_space-theme">
                    <span class="index_space-title">Hi we are 9floor</span>
                    <p>
                        玖樓是一個以社群經營為導向的全方位共同生活空間品牌，具體工作項目從品牌諮詢、設計規劃、施工、招租與經營管理等，協助業主活化閒置資產，提升社區價值。
                    </p>
                </div>
                <div class="index_section">
                    <div
                        class="index_section-article-with-slogan index_sloganContainer"
                    >
                        <div class="index_slogan">
                            <h2 class="vertical">享受社交生活。</h2>
                            <h2 class="vertical">在宜居的環境裡，</h2>
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
                                其實生活除了工作睡覺外、也需要適當的社交、以及透過不同方式例如活動參與、自己下廚等等以提升自我。因應現代人的生活模式，近年來開始有人提倡與投入建立共同生活空間。比起傳統租房產業最大化私人空間/房間數來獲利，Co-Living強調適當比例的公共空間，例如公共廚房、共同工作空間、休憩空間、甚至健身房等等、以及平價但適切的空間設計。為的是讓每位居民能在宜居的環境裡同時享受社交生活。而管理單位亦能透過整合管理，大幅降低單一物件環境提升的成本，而得以有效率的創造出略高於市場定價，但遠高於水平的服務與空間。也因此共同生活空間有別於傳統的隔間套房，吸引到為數不少，對於生活品質有所追求的族群入住。
                            </p>
                        </div>
                    </div>
                    <div class="index_section-article">
                        <h3>
                            <span
                                ><span
                                    >發展共同生活空間，<br />是一個城市共生的多贏選擇</span
                                ></span
                            >
                        </h3>
                        <p>
                            從活化空間的角度來看，共同生活空間介於商旅與長租套房之間，講求經濟實惠的服務及可量化的物件產品。定價可較一般租賃房屋高，但建置與營運成本卻遠低於旅館，且不受景氣淡旺之影響，獲利相對穩定。透過專業團隊的經營與策劃、也利於更緊密及長期的顧客關係，物件再活化及保值。也透過社群營造創造出更多屬於在地的活力及故事，連帶提升在地社區的價值。為物業主、投資人、居住者與城市創造良性的共生、共創、共榮的關係。
                        </p>
                    </div>
                    <div class="index_section-article">
                        <h3>為什麼要與玖樓合作</h3>
                        <p>
                            <span
                                ><span
                                    >玖樓（9floor）為台灣共同生活空間的先驅及專業品牌。從零開始，我們逐步嘗試並期許能做出一個有理想性的共居生活品牌。短短三年內累積近三千人次申請入住，並擁有三萬多名網路社群粉絲。獲得媒體高度關注外，亦與公部門攜手，規劃三峽青銀共居宅與永和社會住宅。並於2017年成為
                                    <a
                                        class="underline"
                                        href="https://news.ltn.com.tw/news/local/paper/1138446"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >台北市政府認證專業房東</a
                                    ></span
                                ></span
                            ><span
                                ><span
                                    >放眼亞洲，我們與國內外相關創新組織緊密互動，更於2017年獲得香港
                                    <a
                                        class="underline"
                                        href="https://www.socialinnovationaward.asia/about-us/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Asia Social Innovation Award</a
                                    >
                                    、2016年首爾
                                    <a
                                        class="underline"
                                        href="https://www.facebook.com/Anyse.Asia/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >ANYSE</a
                                    >
                                    台灣代表、及社企流iLab與台北市產發局育成計輔導。作為一個同時具備國際視野、在地經驗及新創管理能力，玖樓，將會是與您一起透過品牌加成，為資產創造更高價值的首選團隊。</span
                                ></span
                            >
                        </p>
                    </div>
                </div>
                <h3>服務項目</h3>
                <div class="index_service">
                    <div class="index_serviceContainer">
                        <h4>A.統籌規劃</h4>
                        <div class="index_serviceContent">
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>1.共同生活空間</h5>
                                    <p>
                                        市場與場域分析評估、財務與效益分析評估、空間利用規劃、複合商業模式提案
                                    </p>
                                </div>
                            </div>
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>2.空間品牌企劃</h5>
                                    <p>
                                        顧問諮詢、服務設計、經營準則制定、人力培訓、數位整合行銷
                                    </p>
                                </div>
                            </div>
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>3.社區社群體驗</h5>
                                    <p>
                                        社群活動企劃、線上社群活動企劃、街區共創企劃
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_serviceContainer">
                        <h4>B.設計監造</h4>
                        <div class="index_serviceContent">
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>1.風格裝修</h5>
                                    <p>老屋整建、空間設計、景觀規劃</p>
                                </div>
                            </div>
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>2.智能家居整合</h5>
                                    <p>智慧門禁、裝修工程</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index_serviceContainer">
                        <h4>C.經營管理</h4>
                        <div class="index_serviceContent">
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>1.住客管理</h5>
                                    <p>
                                        會員審核招募、數位金流合約管理、顧客關係維繫
                                    </p>
                                </div>
                            </div>
                            <div class="index_serviceItem">
                                <div class="index_serviceDetail">
                                    <h5>2.物產管理</h5>
                                    <p>清潔修繕、空間維護、物業保險</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="index_styledLine" />
                <div class="index_coperationTitle">
                    <h3 class="index_styledText">
                        <span
                            ><span
                                >我們正在尋找以下合作夥伴，一起打造更多理想的共同生活空間</span
                            ></span
                        >
                    </h3>
                    <div class="index_coperationContainer">
                        <div class="index_coperationContent">
                            <h4>空置物業</h4>
                            <p>
                                我們持續探索生活場域的更多可能，因此積極尋找策略夥伴，包含智慧家居、綠能家電、友善食材、設計、生活品味風格等生活產業，一同創造永續發展的城市。
                            </p>
                        </div>
                        <div class="index_coperationContent">
                            <h4>驚喜企畫</h4>
                            <p>
                                玖樓的共同生活空間，就像是散落在這座城市的有機培養皿，搜羅這座城市最酷的人事物。我們歡迎一切有趣的企畫提案，也積極尋找與社會設計、社區共生、未來創新相關的合作可能。
                            </p>
                        </div>
                        <div class="index_coperationContent">
                            <h4>異業結盟</h4>
                            <p>
                                我們不停在尋找新的物件空間，一個適合打造成兼顧居住者社交生活、與居住生活，擁有私人房間與共享空間的場域。必備條件為交通便捷，此外如果能沾染一些地方文化特色就更棒了！
                            </p>
                        </div>
                    </div>
                </div>
                <section class="index_more-room">
                    <div class="index_more-room-content">
                        想了解更多嗎？歡迎留下相關資料，我們會儘速安排專人與您聯繫
                    </div>
                    <a
                        class="index_button index_primary"
                        href="https://www.surveycake.com/s/eVGgX?ssn0&amp;ssn1=%2B886%20null&amp;ssn2=po2319987%40gmail.com"
                        target="_blank"
                        ><div>
                            <i class="material-icons index_icon">open_in_new</i
                            >與我們聯繫
                        </div></a
                    >
                </section>
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
            siderName: "Space Management",
            bannerTitle: {
                imgUrl:
                    "https://9floor.co/assets/space-hero__d2fe1180fbd17afb77631a571675eb87.jpg",
                title1: "空",
                title2: "間",
                title3: "管",
                title4: "理"
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
// @import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
.index_space-theme {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    @media screen and (max-width: 576px) {
        padding-top: 10px;
        padding-bottom: 70px;
        margin: 0 47px;
    }
    .index_space-title {
        font-size: 20px;
        margin: 10px 0 15px;
        padding: 0;
        letter-spacing: normal;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.35;
        color: #444647;
    }
    p {
        width: 446px;
        text-align: center;
        @media screen and (max-width: 576px) {
            width: 100%;
            text-align: left;
        }
    }
}

.index_space {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
    height: 100%;
    .index_space-content {
        display: flex;
        width: 100%;
        max-width: 1280px;
        .index_center {
            display: flex;
            flex-direction: column;
            width: 100%;
            h3 {
                color: $success;
                margin-bottom: 88px;
                text-align: center;
            }
            .index_space-sectionTitle {
                margin: 30px 0;
            }
            .index_section {
                @media screen and (max-width: 576px) {
                    margin: 0 20px;
                }
                .index_section-article {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 90px;
                    h3 {
                        color: $success;
                        margin-bottom: 30px;
                        text-align: center;
                    }
                    p {
                        width: 500px;
                        @media screen and (max-width: 576px) {
                            width: 100%;
                        }
                    }
                }
            }
            .index_service {
                display: flex;
                justify-content: center;
                flex: 1;
                position: relative;
                @media screen and (max-width: 576px) {
                    flex-direction: column;
                    width: 100%;
                }
                .index_serviceContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-right: 1px solid $info;
                    flex: 1;
                    @media screen and (max-width: 576px) {
                        border-bottom: 1px solid $border;
                        margin-top: 50px;
                    }
                    h4 {
                        display: inline-block;
                        align-self: center;
                        margin-bottom: 30px;
                        text-align: center;
                    }
                    .index_serviceContent {
                        .index_serviceItem {
                            text-align: center;
                            .index_serviceDetail {
                                margin-bottom: 30px;
                                h5 {
                                    margin-bottom: 7px;
                                    color: $success;
                                }
                                p {
                                    width: 220px;
                                    margin: auto;
                                    @media screen and (max-width: 576px) {
                                        text-align: left;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .index_styledLine {
                margin: 60px;
                width: auto;
                @media screen and (max-width: 576px) {
                    display: none;
                }
            }
            hr {
                width: 100%;
                border: 1px solid $success;
                margin: 0;
            }
            .index_coperationTitle {
                .index_styledText {
                    color: $success;
                    text-align: center;
                    margin: 30px 20px 0;
                }
                .index_coperationContainer {
                    display: flex;
                    justify-content: space-around;
                    margin: 60px 0;
                    @media screen and (max-width: 576px) {
                        flex-direction: column;
                        align-items: center;
                        margin: 60px 20px 0;
                    }
                    .index_coperationContent {
                        text-align: center;
                        @media screen and (max-width: 576px) {
                            margin-bottom: 60px;
                        }
                        h4 {
                            font-size: 18px;
                            letter-spacing: 3px;
                            margin-bottom: 30px;
                        }
                        p {
                            width: 220px;
                            @media screen and (max-width: 576px) {
                                width: 100%;
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
    }
}

.index_section-article-with-slogan {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 40px;
    @media screen and (max-width: 576px) {
        display: none;
    }
    .index_slogan {
        display: flex;
        h2.vertical {
            font-family: source-han-serif-japanese, serif;
            font-weight: 700;
            font-style: normal;
            letter-spacing: 7.7px;
            line-height: 1.29;
            writing-mode: vertical-rl;
        }
    }
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

// mobile
</style>