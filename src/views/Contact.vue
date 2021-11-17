<template>
    <white-nav-bar />
    <div class="index_content">
        <div class="index_contact">
            <Breadcrumb />
            <ImgBox
                :image="bannerTitle.imgUrl"
                :title1="bannerTitle.title1"
                :title2="bannerTitle.title2"
            />
            <div class="index_contact-content">
                <sider-bar
                    :title1="bannerTitle.title1"
                    :title2="bannerTitle.title2"
                    :siderName="siderName"
                />
                <div class="index_center">
                    <div class="index_section-title index_section-title">
                        <div class="index_title">聯繫</div>
                        <div class="index_sub-title">Contact</div>
                    </div>
                    <div class="index_contact-block">
                        <h3>客服</h3>
                        <p>
                            點此留下訊息，讓我們能提供更好的協助，
                            <span
                                >其他疑問與服務需求，請聯繫
                                <router-link to="/"
                                    >support@9floor.co</router-link
                                ></span
                            >
                        </p>
                        <div class="index_button-group">
                            <router-link
                                class="index_button index_marginButton index_primary"
                                to="https://www.surveycake.com/s/eVGgX?ssn0&amp;ssn1=%2B886%20null&amp;ssn2=po2319987%40gmail.com"
                                target="_blank"
                                ><div>
                                    <i class="material-icons index_icon"
                                        >open_in_new</i
                                    >
                                    聯繫我們
                                </div></router-link
                            >
                        </div>
                    </div>
                    <div class="index_contact-section">
                        <div class="index_Item">
                            <h3>物業夥伴</h3>
                            <p>
                                <span
                                    >物業委託管理服務，歡迎留下<router-link
                                        to="https://www.surveycake.com/s/DpLrb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >空間基本資料與需求</router-link
                                    >，我們會儘速與您聯繫</span
                                >
                            </p>
                        </div>
                        <div class="index_Item">
                            <h3>工作夥伴</h3>
                            <p>
                                <span
                                    >加入玖樓團隊，請參考<router-link to="/team"
                                        >團隊</router-link
                                    ></span
                                >
                            </p>
                        </div>
                        <div class="index_Item">
                            <h3>投資夥伴</h3>
                            <p>
                                <span
                                    >如果有興趣與我們一起創造更棒的居住生活產業，請聯繫<router-link
                                        to="mailto:invest@9floor.co"
                                        >invest@9floor.co</router-link
                                    ></span
                                >
                            </p>
                        </div>
                    </div>
                    <div class="index_contact-section">
                        <div class="index_Item">
                            <h3>媒體</h3>
                            <p>
                                <span
                                    >親愛的媒體夥伴，如想更深入了解玖樓，請至<router-link
                                        to="/media"
                                        >媒體頁</router-link
                                    >查看詳情</span
                                >
                            </p>
                        </div>
                        <div class="index_Item">
                            <h3>合作提案</h3>
                            <p>
                                <span
                                    >歡迎留下<router-link
                                        to="https://www.surveycake.com/s/eVGgX?ssn0&amp;ssn1=%2B886%20null&amp;ssn2=po2319987%40gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >相關資料</router-link
                                    >，我們會儘速與您聯繫</span
                                >
                            </p>
                        </div>
                        <div class="index_Item">
                            <h3>顧問諮詢</h3>
                            <p>
                                <span
                                    >空間規劃諮詢，歡迎留下<router-link
                                        to="https://www.surveycake.com/s/DpLrb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >空間基本資料與需求</router-link
                                    >，我們會儘速與您聯繫</span
                                >
                            </p>
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
    data() {
        return {
            siderName: "Contact",
            bannerTitle: {
                imgUrl:
                    "https://9floor.co/assets/contact-hero__d7371d9a42f24b0f8280532e3ca7adb7.jpg",
                title1: "聯",
                title2: "繫"
            }
        };
    },
    components: {
        WhiteNavBar,
        Breadcrumb,
        Footer,
        ImgBox,
        SiderBar,
        RightSiderBar
    }
};
</script>
<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 72px;
    height: 100%;
    .index_contact-content {
        display: flex;
        width: 100%;
        max-width: 1280px;
        .index_center {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 115px;
            @media screen and (max-width: 576px) {
                margin-bottom: 50px;
                .index_contact-block {
                    padding-top: 0;
                    padding-bottom: 20px;
                    h3 {
                        margin: 30px;
                    }
                    p {
                        margin: 0 20px;
                        text-align: left;
                    }
                }
                div.index_contact-section {
                    &:nth-child(3) {
                        margin-top: 0;
                    }
                    div.index_Item {
                        width: 100%;
                        padding: 30px 0;
                        p {
                            width: 280px;
                            text-align: left;
                        }
                    }
                }
            }
            .index_section-title {
                padding: 30px 0;
                margin: 0;
                margin-bottom: -30px;
                &:first-child {
                    background-color: #f1f1f1;
                }
                @media screen and(min-width:576px) {
                    display: none;
                }
            }
            .index_contact-block {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                background-color: #f1f1f1;
                h3 {
                    color: $success;
                    margin: 10px 0;
                }
                p {
                    text-align: center;
                    max-width: 470px;
                    span {
                        a {
                            text-decoration: underline;
                            color: $success;
                        }
                    }
                }
                .index_button-group {
                    display: flex;
                    .index_marginButton {
                        margin: 30px 0;
                    }
                }
            }
            .index_contact-section {
                display: flex;
                flex-wrap: wrap;
                vertical-align: top;
                &:nth-child(2) {
                    margin-top: 50px;
                }
                &:nth-child(3) {
                    margin-top: 100px;
                }
                .index_Item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 33.3%;
                    h3 {
                        color: $success;
                        margin-bottom: 10px;
                        margin-top: 30px;
                    }
                    p {
                        width: 220px;
                        text-align: center;
                        span {
                            a {
                                text-decoration: underline;
                                color: $success;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
