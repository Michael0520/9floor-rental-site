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
            .index_section {
                margin: 74px 0 0 44px;
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
            }
        }
    }
}
</style>