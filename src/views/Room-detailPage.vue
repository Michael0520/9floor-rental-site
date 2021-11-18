<template>
    <!-- NavBar -->
    <NavBar />
    <div class="index-content index_show">
        <div class="index_room">
            <div class="index_room-detail-banner">
                <div class="index_slide-container">
                    <!-- TODO:swipe -->
                    <div class="swipe" style="visibility: visible">
                        <div class="swipe-item">
                            <!-- TODO:swipe-item: transform style
                                style="width: 1727px; left: 0px"
                                        transition-duration: 0ms;
                                        transform: translate(1727px, 0px)
                                        translateZ(0px); -->
                            <div
                                :style="backgroundStyles(this.roomsImgUrl)"
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
                <!-- TODO:banner-title -->
                <div class="index_banner-detail-content">
                    <div>
                        <div class="index_vertical-title index_subTitle">
                            <!-- <span>仁</span><span>愛</span> -->
                            <span>{{ roomsTitle }}</span>
                        </div>
                        <div class="index_vertical-title">
                            <span
                                v-for="(item, index) in roomsSecondTitle"
                                :key="index"
                                >{{ item }}</span
                            >
                        </div>
                    </div>
                </div>
                <div class="index_buttons-wrap">
                    <button class="index_button index_buttons index_inverse">
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
                    <div
                        class="index_wrap index_booking-bar-banner"
                        :class="isTop ? 'index_fixed-booking-bar' : ''"
                    >
                        <div class="index_booking-bar-left">
                            <div class="index_status">
                                <span
                                    ><p class="small">{{ roomsStatus }}</p>
                                    <p class="index_date"></p>
                                </span>
                                <!-- TODO:房間租金 -->
                                <span class="index_price index_tablet-show"
                                    >NTD {{ formatPrice(roomsPrice) }}
                                    <span class="index_small">/月</span>
                                </span>
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
                                                index_icon
                                            "
                                        >favorite</i
                                    >
                                </button>
                            </div>
                            <!-- TODO:router-link to 區域詳細資訊頁面-->
                            <router-link class="index_apartment-name" to="/">
                                {{ roomsTitle }}
                            </router-link>
                            <!-- TODO:房間 title -->
                            <div class="index_room-name">
                                {{ roomsSecondTitle }}
                            </div>
                        </div>
                        <div class="index_booking-bar-right">
                            <!-- TODO:房屋租金 -->
                            <span class="index_price index_tablet-hide"
                                >NTD {{ formatPrice(roomsPrice) }}
                                <span class="index_small">/月</span></span
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
                <SiderBar
                    :title1="bannerTitle.title1"
                    :title2="bannerTitle.title2"
                    :title3="bannerTitle.title3"
                    :title4="bannerTitle.title4"
                    :siderName="siderName"
                />
                <div class="index_center">
                    <div class="index_view-marker"></div>
                    <section class="index_room-info">
                        <div class="container-fluid ">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="index_room-info-left">
                                        <!-- TODO:房屋標題 -->
                                        <h2>{{ roomsSecondTitle }}</h2>
                                        <!-- TODO:房屋區域 -->
                                        <div class="index_apartment-name">
                                            {{ roomsTitle }}
                                        </div>
                                        <p>
                                            {{ roomsLocation }} {{ roomsSite }}
                                            {{ roomsRoomStyle }}
                                        </p>
                                        <div
                                            class="
                                                    index_detail-title
                                                    index_facility-title
                                                "
                                        >
                                            房間設備
                                        </div>
                                        <div
                                            class="
                                                    index_facility-icon
                                                    index_facility-list
                                                "
                                        >
                                            <span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190123-30e60125a9818f0fafe541dc8a394a33.png"
                                                    alt="保潔墊"
                                                />
                                                <p class="small">
                                                    保潔墊
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190123-de2db155b79bf8a8006889182c5d316a.png"
                                                    alt="冷氣"
                                                />
                                                <p class="small">
                                                    冷氣
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190129-f1921c9eb94308b9d5c25d12c7d14472.png"
                                                    alt="單人床"
                                                />
                                                <p class="small">
                                                    單人床
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190123-6ca2dc1322e836b0fd174d5f0400c39c.png"
                                                    alt="垃圾桶"
                                                />
                                                <p class="small">
                                                    垃圾桶
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190129-4ec39c6ca9954a2cf7818090e8024516.png"
                                                    alt="浴廁"
                                                />
                                                <p class="small">
                                                    浴廁
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/roomTag/20190129-e603b72f2b003cb1d4b3fdd034496df2.png"
                                                    alt="衣櫃"
                                                />
                                                <p class="small">
                                                    衣櫃
                                                </p></span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <div class="index_room-detail">
                                        <div
                                            class="
                                                    index_accordion
                                                    undefined
                                                    index_visible index_disabled
                                                "
                                            style="height: 160px"
                                        >
                                            <div
                                                class="index_head"
                                                role="presentation"
                                            >
                                                <span>首期款項</span>
                                                <p class="small index_note"></p>
                                            </div>
                                            <div class="index_one-column">
                                                <div>
                                                    <p>押金</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsDeposit
                                                                )
                                                            }}</span
                                                        >
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>行政手續費</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsAdministrativeFee
                                                                )
                                                            }}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>退房清潔費</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsCheckOutCleaningFee
                                                                )
                                                            }}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                    index_accordion
                                                    undefined
                                                    index_visible index_disabled
                                                "
                                            style="height: 160px"
                                        >
                                            <div
                                                class="index_head"
                                                role="presentation"
                                            >
                                                <span>每月小記</span>
                                                <p class="small index_note"></p>
                                            </div>
                                            <div class="index_one-column">
                                                <div>
                                                    <p>月租金</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsPrice
                                                                )
                                                            }}</span
                                                        >
                                                        /月
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        能源費
                                                        <span
                                                            class="
                                                                    index_icon-tooltip
                                                                    index_tooltip
                                                                "
                                                            ><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="
                                                                        bi
                                                                        bi-exclamation-circle
                                                                    "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                                                />
                                                                <path
                                                                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                                                                />
                                                            </svg>
                                                            <span
                                                                class="
                                                                        index_tooltip-alert
                                                                        index_tip
                                                                        index_tip-hidden
                                                                    "
                                                            >
                                                                能源費為入住會員共同分擔之居住空間使用費用，包含：水費、電費、天然氣費以及網路費等費用。
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsEnergyFee
                                                                )
                                                            }}
                                                        </span>
                                                        /月
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        服務費
                                                        <span
                                                            class="
                                                                    index_icon-tooltip
                                                                    index_tooltip
                                                                "
                                                            ><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="
                                                                        bi
                                                                        bi-exclamation-circle
                                                                    "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                                                />
                                                                <path
                                                                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                                                                />
                                                            </svg>
                                                            <span
                                                                class="
                                                                        index_tooltip-alert
                                                                        index_tip
                                                                        index_tip-hidden
                                                                    "
                                                            >
                                                                服務費為入住會員共同分擔之共享空間清潔管理費用及垃圾收取服務費。
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsServiceFee
                                                                )
                                                            }}</span
                                                        >
                                                        /月
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                    index_accordion
                                                    undefined
                                                    index_visible index_disabled
                                                "
                                            style="height: 80px"
                                        >
                                            <div
                                                class="index_head"
                                                role="presentation"
                                            >
                                                <span>短租方案</span>
                                                <p class="small index_note"></p>
                                            </div>
                                            <div class="index_two-column">
                                                <div>
                                                    <p>短租3-5月</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsShortTermRentalThreeToFive
                                                                )
                                                            }}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>短租1-2月</p>
                                                    <p>
                                                        <span
                                                            >NTD
                                                            {{
                                                                formatPrice(
                                                                    roomsShortTermRentalOneToTwo
                                                                )
                                                            }}</span
                                                        >
                                                        /月
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                    index_accordion
                                                    undefined
                                                    index_visible index_disabled
                                                "
                                            style="height: 120px"
                                        >
                                            <div
                                                class="index_head"
                                                role="presentation"
                                            >
                                                <span>房間資訊</span>
                                                <p class="small index_note"></p>
                                            </div>
                                            <div class="index_one-column">
                                                <div>
                                                    <p>房型</p>
                                                    <p>{{ roomsRoomStyle }}</p>
                                                </div>
                                                <div>
                                                    <p>面積</p>
                                                    <p>{{ roomsArea }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="index_view-marker"></div>
                    <section
                        class="index_apartment-info index_apartment-content"
                    >
                        <div class="container-fluid">
                            <div class="row gx-0">
                                <div class="col-sm-12">
                                    <div class="index_mobile-show-section">
                                        <div
                                            class="
                                                    index_section-title
                                                    index_title
                                                "
                                        >
                                            <div class="index_title">
                                                公寓資訊
                                            </div>
                                            <div class="index_sub-title">
                                                Apartment Info
                                            </div>
                                        </div>
                                        <div
                                            class="index_mobile-show-image"
                                            :style="
                                                backgroundStyles(
                                                    this.roomsSecondImgUrl
                                                )
                                            "
                                        ></div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <div class="index_apartment-content-left">
                                        <h2>仁愛</h2>
                                        <p class="index_address">
                                            台北市 大安區
                                        </p>
                                        <p class="index_description">
                                            位於仁愛路與新生南路交界處，三條捷運線（紅、藍、橘）都在步行範圍內，5分鐘就到忠孝新生站。除了地段極佳外，有別於投資客廉價地對待空間，這更是一棟被細心呵護、改建的老公寓。從燈飾、地磚，甚至到台灣檜木的百葉窗，都可見到屋主太太對於自己老家的品味與用心。
                                        </p>
                                        <div class="index_feature">
                                            <span class="index_badge">
                                                <div class="index_text">
                                                    適合開伙
                                                </div>
                                            </span>
                                            <span class="index_badge">
                                                <div class="index_text">
                                                    共同工作空間
                                                </div>
                                            </span>
                                        </div>
                                        <div
                                            class="
                                                    index_detail-title
                                                    index_facility-title
                                                "
                                        >
                                            居住空間設備
                                        </div>
                                        <div
                                            class="
                                                    index_facility-icon
                                                    index_facility-list
                                                "
                                        >
                                            <span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-dcf239b9b64076e4c273b5177630454e.png"
                                                    alt="瓦斯爐"
                                                />
                                                <p class="small">
                                                    瓦斯爐
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-8070e6cdae1efb603a564f16315527b9.png"
                                                    alt="基本餐具"
                                                />
                                                <p class="small">
                                                    基本餐具
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190121-3fc7ad1b4e378cb954be7b06ada03afe.jpg"
                                                    alt="洗衣機"
                                                />
                                                <p class="small">
                                                    洗衣機
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-055410ea9b7695ac68526abe3b04f806.png"
                                                    alt="洗碗機"
                                                />
                                                <p class="small">
                                                    洗碗機
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-8d4b1a037bf46cd375109e0efbb6c30f.png"
                                                    alt="烤箱"
                                                />
                                                <p class="small">
                                                    烤箱
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-d780119673dcc9c653335652a0b2c9b8.png"
                                                    alt="滅火器"
                                                />
                                                <p class="small">
                                                    滅火器
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-3106088f32d9f0ca1fe599d7ec9a4e12.png"
                                                    alt="煙霧偵測器"
                                                />
                                                <p class="small">
                                                    煙霧偵測器
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-946261d4b79638f0eea7bc5e60bb832f.png"
                                                    alt="戶外陽台"
                                                />
                                                <p class="small">
                                                    戶外陽台
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-8226c562a3429211d9f236cfa68c47e2.png"
                                                    alt="工作空間"
                                                />
                                                <p class="small">
                                                    工作空間
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-765a378c1d9ae10f8f484e83f7fb8eef.png"
                                                    alt="無線網路"
                                                />
                                                <p class="small">
                                                    無線網路
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190122-b971d7faf380f622356f5151934b1002.png"
                                                    alt="冰箱"
                                                />
                                                <p class="small">
                                                    冰箱
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190129-a153b4ad702e6d6b34615663c711b063.png"
                                                    alt="吹風機"
                                                />
                                                <p class="small">
                                                    吹風機
                                                </p></span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <div
                                        class="
                                                index_apartment-content-right
                                            "
                                    >
                                        <div class="index_images">
                                            <img
                                                :src="roomsSecondImgUrl"
                                                alt="slider"
                                            />
                                        </div>
                                        <div
                                            class="
                                                    index_accordion
                                                    undefined
                                                    index_visible
                                                    index_disabled
                                                    index_accordion-right
                                                "
                                        >
                                            <div
                                                class="index_head"
                                                role="presentation"
                                            >
                                                <span>居住空間資訊</span>
                                                <p class="small index_note"></p>
                                            </div>
                                            <div
                                                class="
                                                        index_apartment-info-content
                                                    "
                                            >
                                                <div>
                                                    <p>陽台</p>
                                                    <p>有</p>
                                                </div>
                                                <div>
                                                    <p>廚房</p>
                                                    <p>有</p>
                                                </div>
                                                <div>
                                                    <p>公共衛浴</p>
                                                    <p>1間</p>
                                                </div>
                                                <div>
                                                    <p>房間</p>
                                                    <p>4間</p>
                                                </div>
                                                <div>
                                                    <p>總樓層</p>
                                                    <p>5樓</p>
                                                </div>
                                                <div>
                                                    <p>清潔打掃</p>
                                                    <p>每週一次</p>
                                                </div>
                                                <div>
                                                    <p>垃圾處理</p>
                                                    <p>每週一次</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="index_map">
                        <div class="index_apartment-map">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9455972321834!2d121.54232041548022!3d25.001964483987372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9896ba0f70b%3A0x97299c5ec656164d!2z546W5qiTIDlmbG9vcg!5e0!3m2!1szh-TW!2stw!4v1634685579976!5m2!1szh-TW!2stw"
                                            width="100%"
                                            height="250"
                                            style="border: 0"
                                            allowfullscreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="index_support-and-direction">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <!-- TODO:需要再修正 row , col 巢狀 -->
                                    <div
                                        class="
                                                index_support-and-direction-left
                                            "
                                    >
                                        <div
                                            class="
                                                    index_detail-title
                                                    index-support-detail-title
                                                "
                                        >
                                            附近機能
                                        </div>
                                        <div class="index_facility-icon">
                                            <span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190122-37fd5a979d329df5339de370bd4776b6.png"
                                                    alt="便利商店"
                                                />
                                                <p class="small">
                                                    便利商店
                                                </p></span
                                            ><span
                                                ><img
                                                    src="https://9floor.co/backend/web/apartmentTag/20190122-0a9f70011fb9bee0ab0f8c2e14b37e8a.png"
                                                    alt="咖啡廳"
                                                />
                                                <p class="small">
                                                    咖啡廳
                                                </p></span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <div
                                        class="
                                                index_detail-title
                                                index_support-detail-title
                                            "
                                    >
                                        交通資訊
                                    </div>
                                    <div class="index_direction">
                                        <div class="index_item">
                                            <i
                                                class="
                                                        material-icons
                                                        index_icon
                                                        index_station-icon
                                                    "
                                                style="font-size: 26px"
                                                >directions_railway</i
                                            >
                                            <div class="index_column">
                                                <p>{{ roomsMRTsStation }}</p>
                                                <p class="small">
                                                    <i
                                                        class="
                                                                material-icons
                                                                index_icon
                                                                index_walk-icon
                                                            "
                                                        style="
                                                                font-size: 14px;
                                                            "
                                                        >directions_walk</i
                                                    >
                                                    {{ roomsWalkingTime }}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                    index_item
                                                    index_line
                                                    index_yellow
                                                "
                                            style="
                                                    border-color: rgb(
                                                        245,
                                                        182,
                                                        28
                                                    );
                                                "
                                        >
                                            <p>O 中和新蘆</p>
                                        </div>
                                        <div
                                            class="
                                                    index_item
                                                    index_line
                                                    index_blue
                                                "
                                            style="
                                                    border-color: rgb(
                                                        5,
                                                        109,
                                                        194
                                                    );
                                                "
                                        >
                                            <p>BL 板橋南港</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="index_view-marker"></div>
                    <!-- mobile show section - second-tilte -->
                    <section class="index_roommate index_no-roommate">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div
                                        class="
                                                index_section-title
                                                index_roommate-title
                                            "
                                    >
                                        <div class="index_title">室友</div>
                                        <div class="index_sub-title">
                                            Roommate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="index_view-marker"></div>
                    <section class="index_recommendation">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="index_section-title">
                                        <div class="index_title">
                                            房源推薦
                                        </div>
                                        <div class="index_sub-title">
                                            Recommendation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="index_content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <RoomCard />
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <RoomCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link
                        to="/filter"
                        class="index_button index_more-button index_primary"
                    >
                        <div>更多</div>
                    </router-link>
                </div>
                <!-- side-bar-right -->
                <div
                    class="index_side-bar index_side-bar-right"
                    :class="isTop ? 'index_fixed-side-bar' : ''"
                >
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
import Breadcrumb from "../components/Breadcrumb.vue";
import SiderBar from "../components/SiderBar.vue";
import RoomCard from "../components/RoomCard.vue";
import NavBar from "../components/NavBar.vue";

export default {
    data() {
        return {
            name: "RoomDetailPage",
            scrollNum: 0,
            isTop: false,
            //
            roomsInfo: {},
            roomsImgUrl: "",
            roomsSecondImgUrl: "",
            roomsTitle: "",
            roomsSecondTitle: [],
            roomsStatus: "",
            roomsPrice: Number,
            roomsLocation: "",
            roomsSite: "",
            roomsRoomStyle: "",
            // 首款期項
            roomsDeposit: Number,
            roomsAdministrativeFee: Number,
            roomsCheckOutCleaningFee: Number,
            // 每月小記
            roomsEnergyFee: Number,
            roomsServiceFee: Number,
            // 短租方案
            roomsShortTermRentalThreeToFive: Number,
            roomsShortTermRentalOneToTwo: Number,
            // 面積
            roomsArea: "",
            // 捷運站
            roomsMRTsLine: [],
            roomsMRTsStation: "",
            roomsWalkingTime: "",

            // siderData
            siderName: "Room Info",
            bannerTitle: {
                imgUrl: "",
                title1: "房",
                title2: "間",
                title3: "資",
                title4: "訊"
            }
        };
    },
    components: {
        Footer,
        Breadcrumb,
        SiderBar,
        RoomCard,
        NavBar
    },
    computed: {
        roomId() {
            return this.$route.params.id;
        }
    },
    methods: {
        scrollEvent() {
            window.addEventListener("scroll", () => {
                let clientTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    window.pageYOffset;
                this.scrollNum = clientTop;
                // console.log(`目前頁面高度 ${clientTop}`);
                if (clientTop >= 900) {
                    this.isTop = true;
                } else {
                    this.isTop = false;
                }
            });
        },
        async getRooms(id) {
            // lodaer
            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: true,
                onCancel: this.onCancel
            });

            return await this.axios
                .get("https://michael-backend.herokuapp.com/rooms/" + id)
                .then(result => {
                    // console.log(result.data);
                    // hide loader
                    setTimeout(() => {
                        loader.hide(); // simulate AJAX
                    }, 1000);
                    return result.data;
                })
                .catch(err => {
                    console.warn(err);
                });
        },
        backgroundStyles(image) {
            return {
                // any other styles you might need to add on as an example
                "background-image": `url(${image})`
            };
        },
        formatPrice(price) {
            // 由於 price 還未被使用，所以必須先將它定義為 Number ，
            // 這樣再過 toFixed function 才不會爆出錯誤
            let res = Number(price)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                .replace(/\.\d*/, "");
            return res;
            // 12,345.67
        }
    },
    async created() {
        this.roomsInfo = await this.getRooms(this.$route.params.id);
        // console.log("roomsInfo :", this.roomsInfo);
        // image
        this.roomsImgUrl = this.roomsInfo.imgUrl;
        // console.log("roomsImgUrl :", this.roomsImgUrl);

        this.roomsSecondImgUrl = this.roomsInfo.secondImgUrl;
        //
        this.roomsTitle = this.roomsInfo.name;
        this.roomsSecondTitle = this.roomsInfo.secondName;
        this.roomsStatus = this.roomsInfo.status;
        this.roomsPrice = this.roomsInfo.monthlyRent;
        this.roomsLocation = this.roomsInfo.location;
        this.roomsSite = this.roomsInfo.site;
        this.roomsRoomStyle = this.roomsInfo.roomStyle;
        // 首期款項
        this.roomsDeposit = this.roomsInfo.initialPayment.deposit;
        this.roomsAdministrativeFee = this.roomsInfo.initialPayment.administrativeFee;
        this.roomsCheckOutCleaningFee = this.roomsInfo.initialPayment.checkOutCleaningFee;
        // 每月小記
        this.roomsEnergyFee = this.roomsInfo.monthlyFee.energyFee;
        this.roomsServiceFee = this.roomsInfo.monthlyFee.serviceFee;
        // 短租方案
        this.roomsShortTermRentalThreeToFive = this.roomsInfo.shortTermRentalPlan.shortTermRentalThreeToFive;
        this.roomsShortTermRentalOneToTwo = this.roomsInfo.shortTermRentalPlan.shortTermRentalOneToTwo;
        // 面積
        this.roomsArea = this.roomsInfo.area;
        // 捷運站
        this.roomsMRTsLine = this.roomsInfo.trafficInformation.MRTline;
        this.roomsMRTsStation = this.roomsInfo.trafficInformation.MRTstation;
        this.roomsWalkingTime = this.roomsInfo.trafficInformation.walkingTime;
    },

    mounted() {
        // if isTop = 0 , add transparent class , else remove
        window.addEventListener("scroll", () => {
            let clientTop =
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                window.pageYOffset;
            this.scrollNum = clientTop;
            // console.log(`目前頁面高度 ${clientTop}`);
            if (clientTop >= 900) {
                this.isTop = true;
            } else {
                this.isTop = false;
            }
        });
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

svg {
    color: #fff;
}
.small {
    font-size: 12px;
    letter-spacing: 0.5px;
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
            &:before {
                color: #fff;
            }
            a,
            li,
            svg {
                color: #fff;
            }
        }
        .active {
            color: #fff;
        }
        @media screen and (max-width: 576px) {
            display: none;
        }
    }
    .index_content {
        display: flex;
        position: relative;
        width: 100%;
        max-width: 1280px;
        // index_center
        .index_center {
            display: flex;
            flex-direction: column;
            width: 100%;
            .index_apartment-content {
                margin: 46px 34px 82px;
                @include sm {
                    margin: 0;
                }
            }
            .index_roommate {
                margin: 144px 17px 135px;
                .index_roommate-title {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 35px;
                }
            }
            .index_roommate.index_no-roommate {
                margin: 90px 17px 69px;
                @include sm {
                    margin: 90px 17px 51px;
                }
            }
        }
    }
}
//apartment-info
.index_apartment-info {
    display: flex;
    .index_address {
        margin-top: 9px;
    }
    .index_description {
        margin-top: 27px;
        max-width: 370px;
    }
    .index_feature {
        margin-top: 30px;
        span {
            margin-right: 17px;
        }
    }
    .index_facility-title {
        margin-top: 55px;
    }
}
//apartment-info RWD
.index_apartment-content-left,
.index_apartment-content-right {
    @include sm {
        margin-bottom: 50px;
    }
}
.index_apartment-content-right {
    .index_images {
        img {
            @include sm {
                display: none;
            }
        }
    }
}
// icon
.index_facility-icon {
    display: flex;
    flex-wrap: wrap;
    span {
        width: 70px;
        margin: 13px 20px 13px 0;
        text-align: center;
        @include sm {
            margin: 13px 6px;
        }
        img {
            height: 31px;
            width: 31px;
            margin-bottom: 5px;
        }
    }
}
// badge
.index_badge {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    height: 20px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: $secondary;
    border: 1px solid #b7ac9f;
    border-radius: 3px;
    .index_text {
        transform: scale(0.85);
    }
}
// images
.index_images {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin-bottom: 96px;
    img {
        height: 426px;
    }
}
.index_apartment-info-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 17px;
    @include sm {
        padding: 0;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        min-width: 162px;
        width: 50%;
        margin: 7px 0;
        p {
            &:first-child {
                width: 66px;
                margin-right: 16px;
            }
        }
    }
}
.index_apartment-content-left {
    h2 {
        @include sm {
            font-size: 34px;
        }
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
.index_banner-detail-content {
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
    // RWD
    @media screen and(max-width:576px) {
        display: flex;
        justify-content: center;
        bottom: 155px;
        .index_buttons {
            margin-left: 0;
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
    .index_wrap.index_fixed-booking-bar {
        @media screen and (max-width: 1280px) {
            width: 100%;
            left: 0;
        }
        @media screen and (max-width: 576px) {
            top: 48px;
        }
    }
    // wrap-fixed
    .index_fixed-booking-bar {
        position: fixed;
        top: 71px;
        margin-top: 0;
        width: 1280px;
        left: calc(50% - 640px);
        z-index: 10;
    }
}
@media screen and(max-width:576px) {
    .index_booking-bar {
        width: 100%;
        height: 130px;
        right: 0;
        .index_booking-bar-banner {
            flex-direction: column;
            justify-content: initial;
            width: 100%;
            height: 130px;
            padding: 0;
            .index_booking-bar-left {
                flex-shrink: 0;
                width: 100%;
                height: 65px;
                .index_status {
                    width: 100%;
                    padding-right: 20px;
                }
                .index_apartment-name,
                .index_room-name {
                    display: none;
                }
                .index_tablet-show {
                    display: inline-block;
                }
                .index_price {
                    margin-right: inherit;
                    margin-left: auto;
                }
                .index_like {
                    margin-right: inherit;
                    margin-left: 10px;
                }
                .index_mobile-show {
                    display: inline-block;
                }
            }
            .index_booking-bar-right {
                width: 100%;
                padding-left: 20px;
                padding-right: 20px;
                .index_mobile-hide {
                    display: none;
                }
                .index_tablet-hide {
                    display: none;
                }
                .index_price {
                    margin-right: inherit;
                    margin-left: auto;
                }
                .index_like {
                    margin-right: inherit;
                    margin-left: 10px;
                }
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
    i {
        font-size: 16px;
        transition: all 0.3s;
        color: $secondary;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.index_small {
    margin-left: 3px;
    font-size: 12px;
    font-weight: 300;
    vertical-align: bottom;
}
// room-info
.index_room-info {
    display: flex;
    margin: 67px 33px 114px;
    @include sm {
        margin: 48px 0 48px;
        flex-direction: column;
    }
    .index_apartment-name {
        margin: 4px 0 16px;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.35;
        letter-spacing: 2.5px;
        color: $success;
    }
    .index_facility-title {
        margin-top: 64px;
    }
    .index_facility-icon-list {
        margin-top: 17px;
    }
}
.index_detail-title {
    font-size: 12px;
    font-weight: 500;
    line-height: 2;
    letter-spacing: 0.5px;
    color: $secondary;
}

// room-detail
.index_room-detail {
    margin-top: 1px;
    div {
        &:first-child {
            margin-top: 0;
        }
    }
}
.index_accordion.index_visible {
    overflow: visible;
}
.index_accordion.index_disabled {
    .index_head {
        cursor: auto;
    }
}
// accordion
.index_accordion {
    overflow: hidden;
    transition: height 0.3s ease-out;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    @include sm {
    }
    .index_head {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        height: 40px;
        cursor: pointer;
        background-color: #fdfdfd;
        span {
            font-size: 12px;
            font-weight: 500;
            line-height: 2;
            letter-spacing: 0.5px;
            color: $secondary;
        }
    }
}
.index_one-column {
    padding: 0 17px;
    div {
        display: flex;
        height: 40px;
        padding: 7px 0;
        p {
            width: 50%;
            .index_tooltip {
                margin-left: 20px;
                svg {
                    padding-left: 1px;
                    font-size: 16px;
                    letter-spacing: 0.9px;
                    text-align: center;
                    color: $primary;
                    &:hover + .index_tip-hidden {
                        display: block;
                    }
                }
                .index_tip {
                    z-index: 5;
                }
                .index_tip-hidden {
                    display: none;
                }
            }
            span {
                font-weight: 500;
            }
        }
    }
}
.index_two-column {
    display: flex;
    padding: 0 17px;
    div {
        display: flex;
        width: 50%;
        height: 4px;
        padding: 7px 0;
        p {
            &:first-child {
                margin-right: 13px;
            }
            &:last-child {
                font-weight: 500;
            }
        }
    }
}
.index_icon-tooltip {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: default;
}
.index_tooltip-alert {
    display: block;
    position: absolute;
    top: calc(100% + 15px);
    left: calc(50% - 90px);
    padding: 10px;
    width: 180px;
    font-size: 12px;
    font-weight: 500;
    color: #b7ac9f;
    line-height: 1.6;
    letter-spacing: 0.5px;
    text-align: center;
    border: 1px solid $info;
    border-radius: 3px;
    background-color: #fff;
    white-space: pre-wrap;
}

// Map
.index_map {
    height: 250px;
    margin: 45px 0;
}
.index_apartment-map {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

// support and direction
.index_support-and-direction {
    display: flex;
    flex-wrap: wrap;
    margin: 45px 34px 0;
    .index-support-detail-title {
        margin-bottom: 7px;
    }
    .index_detail-title {
        margin-bottom: 22px;
    }
}

.index_direction.index_item {
    display: flex;
    position: relative;
    align-items: center;
    flex-grow: 1;
    margin-right: 40px;
    height: 40px;
}
.index_direction {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include sm {
        .index_item {
            &:first-child {
                width: 100%;
                flex-shrink: 0;
                margin-bottom: 15px;
            }
        }
    }
    .index_item.index_line.index_yellow {
        align-items: initial;
        border-bottom: 3px solid $info;
        border-color: rgb(245, 182, 28);
    }
    .index_item.index_line.index_blue {
        align-items: initial;
        border-bottom: 3px solid $info;
        border-color: rgb(5, 109, 194);
    }
    .index_item {
        .index_station-icon {
            padding: 5px;
            color: $secondary;
            font-size: 26px;
        }
    }
    .index_column {
        display: inline-block;
        align-items: center;
        p {
            .index_walk-icon {
                padding: 5px;
                color: $secondary;
                font-size: 26px;
            }
        }
    }
}
.index_item {
    display: flex;
    position: relative;
    align-items: center;
    flex-grow: 1;
    margin-right: 40px;
    height: 40px;
}

// mobile show
// roomate
.index_roommate {
    @media screen and (min-width: 576px) {
        display: none;
    }
}
.index_section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
    .index_title {
        height: 23px;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 5.6px;
        color: $primary;
    }
    .index_sub-title {
        height: 23px;
        font-size: 10px;
        line-height: 2.1;
        letter-spacing: 1px;
        color: $primary;
    }
}
// recommendation
.index_recommendation {
    margin-bottom: 14px;
    @media screen and (min-width: 576px) {
        display: none;
    }
}
// more button
.index_center {
    .index_more-button {
        display: inline-flex;
        align-self: center;
        margin-bottom: 120px;
        @include sm {
            margin-bottom: 50px;
        }
    }
}

//another
.index_accordion-right {
    height: 200px;
    @include sm {
        height: auto;
    }
}
.index_room-info-left {
    @include sm {
        padding: 10px;
        margin: 34px 0;
        h2 {
            font-size: 34px;
        }
    }
}
.index_support-and-direction-left {
    @include sm {
        margin-bottom: 50px;
    }
}
// mobile-show-background
.index_mobile-show-section {
    @media screen and(min-width:576px) {
        display: none;
    }
}
.index_mobile-show-image {
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: 50%;
    margin-bottom: 45px;
}

// RWD
.index_mobile-show,
.index_tablet-show {
    display: none;
}
</style>