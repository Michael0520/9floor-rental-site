<template >
    <!-- NavBar -->
    <WhiteNavBar />
    <!-- loader -->

    <!--  Room-content -->
    <div class="index_content">
        <div class="index_page">
            <!-- small-filter -->
            <div class="index_small-filter">
                <div>
                    <button
                        class="index_button"
                        data-bs-toggle="modal"
                        data-bs-target="#booking-bar-location"
                    >
                        <div>地點</div>
                    </button>
                    <button
                        class="index_button"
                        data-bs-toggle="modal"
                        data-bs-target="#booking-bar-price"
                    >
                        <div>價格</div>
                    </button>
                </div>
                <div>
                    <button
                        class="index_button"
                        data-bs-toggle="modal"
                        data-bs-target="#booking-bar-more"
                    >
                        <div>進階搜尋</div>
                    </button>
                </div>
            </div>

            <!-- Breadcrumb -->
            <div class="index_breadcrume-section">
                <Breadcrumb />
            </div>
            <div class="index_room-section" style="width:100%;display:flex">
                <!-- sider-bar -->
                <SiderBar
                    :title1="bannerTitle.title1"
                    :title2="bannerTitle.title2"
                    :title3="bannerTitle.title3"
                    :title4="bannerTitle.title4"
                    :siderName="siderName"
                />
                <div
                    class="index_room-list"
                    style="border-top:1px solid #d2c8bd"
                >
                    <div class="index_sort">
                        <div>{{ this.temp.length }} 筆結果</div>
                        <div class="justify-content-end">
                            <div>排序方式</div>
                            <select
                                class="
                                    form-select form-select-sm
                                    index_dropdown-basic
                                "
                                aria-label=".form-select-sm example"
                                v-model="cacheSort"
                                @change="typeMenu"
                            >
                                <option selected value="0">最新</option>
                                <option value="1">最高價格</option>
                                <option value="2">最低價格</option>
                            </select>
                        </div>
                    </div>
                    <!-- room-list -->
                    <div class="container-fluid ">
                        <div class="row g-0">
                            <div
                                class="col-sm-12 col-md-6 col-lg-6"
                                v-for="(room, index) in temp"
                                :key="index"
                            >
                                <RoomCard
                                    :price="room.monthlyRent"
                                    :name="room.name"
                                    :secondName="room.secondName"
                                    :roomStyle="room.roomStyle"
                                    :status="room.status"
                                    :image="room.imgUrl"
                                    :id="room.id"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- filter -->
                <div class="index_room-filter">
                    <!-- search-text -->
                    <div class="form-floating index_dropdown-group">
                        <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            v-model="cacheSearch"
                            @input="typeMenu"
                        ></textarea>
                        <label for="floatingTextarea">請輸入關鍵字</label>
                    </div>
                    <!-- location -->
                    <!-- <div class="index_dropdown-group">
                        <p class="small">城市</p>
                        <select
                            class="form-select form-select-sm index_dropdown-basic"
                            aria-label=".form-select-sm example"
                            v-model="selectedLocation"
                            @change="typeMenu"
                        >
                            <option selected value="全國">全國</option>
                            <option
                                v-for="(option, keys) in locations"
                                :key="keys"
                                :value="option.name"
                            >
                                {{ keys + 1 }}.
                                {{ option.name }}
                            </option>
                        </select>
                    </div> -->
                    <div class="form-floating " style="margin:0 17px 17px;">
                        <select
                            class="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                            v-model="selectedLocation"
                            @change="typeMenu"
                        >
                            <option selected disabled value="請選擇城市"
                                >請選擇城市</option
                            >
                            <option value="全國">全國</option>
                            <option
                                v-for="(option, keys) in locations"
                                :key="keys"
                                :value="option.name"
                            >
                                {{ keys + 1 }}.
                                {{ option.name }}
                            </option>
                        </select>
                        <label for="floatingSelect">城市</label>
                    </div>
                    <div class="index_division"></div>
                    <!-- roomStyle -->
                    <div class="index_dropdown-group ">
                        <p class="small">房型</p>
                        <ul
                            class="list-group"
                            style="color:#444647  font-size:12px"
                        >
                            <li
                                class="list-group-item"
                                style="color:#444647; font-size:12px;display:flex;justicy-content:center;align-items:center"
                                v-for="(item, index) in roomStyles"
                                :key="index"
                            >
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :value="item.name"
                                    v-model="selectedRoomStyles"
                                    @change="typeMenu"
                                />
                                <label for="獨立套房" style="padding-left:1rem">
                                    {{ item.name }}
                                </label>
                            </li>
                        </ul>
                    </div>
                    <!-- roomDate -->
                    <div class="index_dropdown-group">
                        <p class="small index_clearButton">
                            預定入住日期
                        </p>
                        <Datepicker
                            v-model="selectMonth"
                            monthPicker
                            autoApply
                            placeholder="請選擇預訂日期"
                        ></Datepicker>
                        <!-- @update:modelValue="setDate" -->
                        <!-- :modelValue="getDate" -->
                    </div>
                    <!-- monthlyRent -->
                    <div class="index_range-group">
                        <p class="small pb-5">價格/月</p>
                        <Slider
                            class="slider-primary"
                            v-model="priceRange"
                            :format="format"
                            :step="step"
                            :min="min"
                            :max="max"
                            @change="typeMenu"
                        />
                        <div class="index_unit pt-2">
                            <div>NTD {{ priceRange[0] }}</div>
                            <div>NTD {{ priceRange[1] }}</div>
                        </div>
                    </div>
                    <!-- specificLivingSpaces -->
                    <div class="index_division"></div>
                    <div class="index_dropdown-group">
                        <p class="small">顯示特定居住空間</p>
                        <select
                            class="form-select form-select-sm index_dropdown-basic"
                            aria-label=".form-select-sm example"
                            v-model="selectedRoomSpaces"
                            @change="typeMenu"
                        >
                            <option selected disabled>顯示特定居住空間</option>
                            <option
                                v-for="(option, keys) in specificLivingSpaces"
                                :key="keys"
                                :value="option.name"
                            >
                                {{ option.name }}
                            </option>
                        </select>
                    </div>
                    <!-- 進階搜尋 -->
                    <div
                        class="accordion accordion-flush"
                        id="accordionExample"
                    >
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    style="font-size:12px;letter-spacing:0.5px"
                                >
                                    進階搜尋
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body py-10 px-0">
                                    <div class="index_range-group">
                                        <p class="small pb-5">房間坪數</p>
                                        <Slider
                                            class="slider-primary"
                                            v-model="locationRange"
                                            :format="locationFormat"
                                            :step="locationStep"
                                            :min="locationMin"
                                            :max="locationMax"
                                            @change="typeMenu"
                                        />
                                        <div class="index_unit pt-2">
                                            <div>
                                                {{ locationRange[0] }} 坪數 /{{
                                                    (
                                                        locationRange[0] *
                                                        3.3058
                                                    ).toFixed(2)
                                                }}
                                                m²
                                            </div>
                                            <div>
                                                {{ locationRange[1] }} 坪數 /{{
                                                    (
                                                        locationRange[1] *
                                                        3.3058
                                                    ).toFixed(2)
                                                }}
                                                m²
                                            </div>
                                        </div>
                                    </div>
                                    <!-- selectedDoubleOccupancy -->
                                    <div
                                        class="index_selector-group index_select-group"
                                    >
                                        <p class="small">第二人入住</p>
                                        <div
                                            class="btn-group index_selector "
                                            role="group"
                                            aria-label="Basic radio toggle button group"
                                            style="display:flex;"
                                        >
                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio1"
                                                autocomplete="off"
                                                checked
                                                :value="0"
                                                v-model="
                                                    selectedDoubleOccupancy
                                                "
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio1"
                                                >全部</label
                                            >

                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio2"
                                                autocomplete="off"
                                                :value="1"
                                                v-model="
                                                    selectedDoubleOccupancy
                                                "
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio2"
                                                >可以</label
                                            >

                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio3"
                                                autocomplete="off"
                                                :value="2"
                                                v-model="
                                                    selectedDoubleOccupancy
                                                "
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio3"
                                                >不可以</label
                                            >
                                        </div>
                                    </div>
                                    <!-- selectedRaisePet -->
                                    <div
                                        class="index_selector-group index_select-group"
                                    >
                                        <p class="small">養寵物</p>
                                        <div
                                            class="btn-group index_selector"
                                            role="group"
                                            aria-label="Basic radio toggle button group"
                                            style="display:flex;"
                                        >
                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio4"
                                                autocomplete="off"
                                                checked
                                                :value="0"
                                                v-model="selectedRaisePet"
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio4"
                                                >全部</label
                                            >

                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio5"
                                                autocomplete="off"
                                                :value="1"
                                                v-model="selectedRaisePet"
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio5"
                                                >可以</label
                                            >

                                            <input
                                                type="radio"
                                                class="btn-check"
                                                name="btnradio"
                                                id="btnradio6"
                                                autocomplete="off"
                                                :value="2"
                                                v-model="selectedRaisePet"
                                                @change="typeMenu"
                                            />
                                            <label
                                                class="btn btn-outline-success"
                                                for="btnradio6"
                                                >不可以</label
                                            >
                                        </div>
                                    </div>
                                    <!-- specificLivingFeatures -->
                                    <div class="index_dropdown-group">
                                        <p class="small">居住空間特色</p>
                                        <Multiselect
                                            v-model="selectedRoomFeatures"
                                            mode="tags"
                                            placeholder="顯示特定居住特色"
                                            trackBy="name"
                                            label="name"
                                            :closeOnSelect="false"
                                            :options="specificLivingFeatures"
                                            :createTag="true"
                                            @select="typeMenu"
                                            @close="typeMenu"
                                            @deselect="typeMenu"
                                        >
                                            <template
                                                v-slot:tag="{
                                                    option,
                                                    handleTagRemove,
                                                    disabled
                                                }"
                                            >
                                                <div
                                                    class="multiselect-tag is-user"
                                                >
                                                    <img :src="option.image" />
                                                    {{ option.name }}
                                                    <span
                                                        v-if="!disabled"
                                                        class="multiselect-tag-remove"
                                                        @mousedown.prevent="
                                                            handleTagRemove(
                                                                option,
                                                                $event
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            class="multiselect-tag-remove-icon"
                                                        >
                                                        </span>
                                                    </span>
                                                </div>
                                            </template>
                                        </Multiselect>
                                    </div>
                                    <div class="index_division"></div>
                                    <!-- render 無法預定的房間 list -->
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                            checked
                                        />
                                        <label
                                            class="form-check-label small"
                                            for="flexCheckChecked"
                                        >
                                            顯示目前無法預訂房間
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade modal-sm"
            id="booking-bar-price"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog  modal-dialog-centered modal-dialog-scrollable"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5></h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style="margin:10px 10px 24px;"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <h3
                            class=""
                            style="
                                        padding:0px 17px;padding-bottom:50px;
                                        font-size:13px;font-weight:500;letter-spacing:.6px
                                        "
                        >
                            價格/月
                        </h3>
                        <Slider
                            class="slider-primary"
                            v-model="priceRange"
                            :format="format"
                            :step="step"
                            :min="min"
                            :max="max"
                            @change="typeMenu"
                        />
                        <div
                            class="index_unit pt-2 d-flex justify-content-between"
                        >
                            <div>NTD {{ priceRange[0] }}</div>
                            <div>NTD {{ priceRange[1] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="booking-bar-location"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog  modal-dialog-centered modal-dialog-scrollable"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5></h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style="margin:10px 10px 24px;"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating my-2">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                v-model="selectedMobileLocation"
                                @change="typeMoblieMenu"
                            >
                                <option selected disabled value="請選擇城市"
                                    >請選擇城市</option
                                >
                                <option value="全國">全國</option>
                                <option
                                    v-for="(option, keys) in locations"
                                    :key="keys"
                                    :value="option.name"
                                >
                                    {{ option.name }}
                                </option>
                            </select>
                            <label for="floatingSelect">城市</label>
                        </div>
                        <div class="form-floating my-2">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                                v-model="selectedMobileSite"
                                @change="typeMoblieMenu"
                            >
                                <option selected disabled value="請選擇地區"
                                    >請選擇地區</option
                                >
                                <option value="全地區">全地區</option>
                                <option
                                    v-for="(option, keys) in sites"
                                    :key="keys"
                                    :value="option"
                                >
                                    {{ option }}
                                </option>
                            </select>
                            <label for="floatingSelect">地區</label>
                        </div>
                        <!-- 捷運資訊 -->
                        <div
                            class="accordion  accordion-flush "
                            id="accordionExample"
                        >
                            <div class="accordion-item">
                                <span class="accordion-header" id="headingOne">
                                    <button
                                        class="accordion-button "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                        style="
                                            font-weight:500;
                                            line-height:2;
                                            letter-spacing:.5px;
                                            color:#857c7c;
                                            height:40px;
                                            border-top:1px solid #ece2d5;
                                            border-bottom:1px solid #ece2d5"
                                    >
                                        捷運站
                                    </button>
                                </span>
                                <div
                                    id="collapseOne"
                                    class="accordion-collapse collapsing "
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div class="accordion-body py-10 px-0">
                                        <!-- 捷運線 -->
                                        <div
                                            class="index_alert-group"
                                            style="padding:0"
                                        >
                                            <div
                                                class="index_dropdown-basic w-100"
                                            >
                                                <div class="form-floating">
                                                    <select
                                                        class="form-select"
                                                        id="floatingSelect"
                                                        aria-label="Floating label select example"
                                                        v-model="
                                                            selectedMRTsLine
                                                        "
                                                        @change="typeMoblieMenu"
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                            >請選擇捷運線</option
                                                        >
                                                        <option
                                                            v-for="(option,
                                                            keys) in Object.keys(
                                                                mrtCode
                                                            )"
                                                            :key="keys"
                                                            :value="option"
                                                        >
                                                            {{
                                                                mrtCode[option]
                                                            }}
                                                        </option>
                                                    </select>
                                                    <label for="floatingSelect"
                                                        >捷運線</label
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 捷運站 -->
                                        <div
                                            class="index_alert-group"
                                            style="padding:0"
                                        >
                                            <div
                                                class="index_dropdown-basic w-100"
                                            >
                                                <div class="form-floating">
                                                    <select
                                                        class="form-select"
                                                        id="floatingSelect"
                                                        aria-label="Floating label select example"
                                                        v-model="
                                                            selectedMRTsStation
                                                        "
                                                        @change="typeMoblieMenu"
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                            value="請選擇捷運站"
                                                            >請選擇捷運站</option
                                                        >
                                                        <option
                                                            v-for="(option,
                                                            keys) in renderMRTsStation"
                                                            :key="keys"
                                                            :value="option"
                                                        >
                                                            {{ option }}
                                                        </option>
                                                    </select>
                                                    <label for="floatingSelect"
                                                        >捷運站</label
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="booking-bar-more"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            style="font-size:12px;"
        >
            <div
                class="modal-dialog  modal-dialog-centered modal-dialog-scrollable"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style="margin:10px 10px 24px;"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <!-- 選擇房型 -->
                        <div class="index_alert-group">
                            <div class="form-floating">
                                <select
                                    class="form-select"
                                    id="floatingSelect"
                                    aria-label="Floating label select example"
                                    v-model="selectedMobileRoomStyle"
                                    @change="typeMoblieMenu"
                                >
                                    <option selected disabled
                                        >請選擇房型</option
                                    >
                                    <option
                                        v-for="(option, keys) in roomStyles"
                                        :key="keys"
                                        :value="option.name"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
                                <label for="floatingSelect">房型種類</label>
                            </div>
                        </div>
                        <!-- 預訂日期 -->
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                預訂入住日期
                            </p>
                            <Datepicker
                                v-model="selectMonth"
                                monthPicker
                                autoApply
                                placeholder="請選擇預訂日期"
                            ></Datepicker>
                        </div>
                        <div
                            class="index_division"
                            style="height:1px;background-color:#d2c8bd;margin:26px 0 12px;"
                        ></div>
                        <!-- 居住空間 -->
                        <div class="index_alert-group pt-1">
                            <div class="index_dropdown-basic w-100">
                                <div class="form-floating">
                                    <select
                                        class="form-select"
                                        id="floatingSelect"
                                        aria-label="Floating label select example"
                                        v-model="selectedRoomSpaces"
                                        @change="typeMenu"
                                    >
                                        <option selected disabled
                                            >顯示特定居住空間</option
                                        >
                                        <option
                                            v-for="(option,
                                            keys) in specificLivingSpaces"
                                            :key="keys"
                                            :value="option.name"
                                        >
                                            {{ option.name }}
                                        </option>
                                    </select>
                                    <label for="floatingSelect"
                                        >選擇特定居住空間</label
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- 坪數 Slider -->
                        <div class="index_alert-group">
                            <p
                                class="small pb-5"
                                style="
                                        font-size:13px;font-weight:300;letter-spacing:.6px;
                                        "
                            >
                                房間坪數
                            </p>
                            <Slider
                                class="slider-primary"
                                v-model="locationRange"
                                :format="locationFormat"
                                :step="locationStep"
                                :min="locationMin"
                                :max="locationMax"
                                @change="checkEventBinding"
                            />
                            <div
                                class="index_unit pt-2 d-flex justify-content-between "
                                style="font-size:12px;"
                            >
                                <div>
                                    {{ locationRange[0] }} 坪 /{{
                                        (locationRange[0] * 3.3058).toFixed(2)
                                    }}
                                    m²
                                </div>
                                <div>
                                    {{ locationRange[1] }} 坪 /{{
                                        (locationRange[1] * 3.3058).toFixed(2)
                                    }}
                                    m²
                                </div>
                            </div>
                        </div>
                        <!-- 第二人入住 -->
                        <div class="index_alert-selector-group">
                            <p
                                class="small"
                                style="
                                        margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                第二人居住
                            </p>
                            <div
                                class="btn-group index_alert-selector "
                                role="group"
                                aria-label="Basic radio toggle button group"
                                style="display:flex;"
                            >
                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autocomplete="off"
                                    checked
                                    :value="0"
                                    v-model="selectedDoubleOccupancy"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio1"
                                    >全部</label
                                >

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                    autocomplete="off"
                                    :value="1"
                                    v-model="selectedDoubleOccupancy"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio2"
                                    >可以</label
                                >

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio3"
                                    autocomplete="off"
                                    :value="2"
                                    v-model="selectedDoubleOccupancy"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio3"
                                    >不可以</label
                                >
                            </div>
                        </div>
                        <!-- 養寵物 -->
                        <div class="index_alert-selector-group">
                            <p
                                class="small"
                                style="
                                        margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                養寵物
                            </p>
                            <div
                                class="btn-group index_alert-selector"
                                role="group"
                                aria-label="Basic radio toggle button group"
                                style="display:flex;"
                            >
                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio4"
                                    autocomplete="off"
                                    checked
                                    :value="0"
                                    v-model="selectedRaisePet"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio4"
                                    >全部</label
                                >

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio5"
                                    autocomplete="off"
                                    :value="1"
                                    v-model="selectedRaisePet"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio5"
                                    >可以</label
                                >

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio6"
                                    autocomplete="off"
                                    :value="2"
                                    v-model="selectedRaisePet"
                                    @change="typeMenu"
                                />
                                <label
                                    class="btn btn-outline-success"
                                    for="btnradio6"
                                    >不可以</label
                                >
                            </div>
                        </div>
                        <div
                            class="index_division"
                            style="height:1px;background-color:#d2c8bd;margin:26px 0 12px;"
                        ></div>
                        <!-- 居住特色 -->
                        <div class="index_alert-group">
                            <div class="index_dropdown-basic w-100">
                                <Multiselect
                                    v-model="selectedRoomFeatures"
                                    mode="tags"
                                    placeholder="顯示特定居住特色"
                                    trackBy="name"
                                    label="name"
                                    :closeOnSelect="false"
                                    :options="specificLivingFeatures"
                                    :createTag="true"
                                    @select="typeMenu"
                                    @close="typeMenu"
                                    @deselect="typeMenu"
                                >
                                    <template
                                        v-slot:tag="{
                                            option,
                                            handleTagRemove,
                                            disabled
                                        }"
                                    >
                                        <div class="multiselect-tag is-user">
                                            <img :src="option.image" />
                                            {{ option.name }}
                                            <span
                                                v-if="!disabled"
                                                class="multiselect-tag-remove"
                                                @mousedown.prevent="
                                                    handleTagRemove(
                                                        option,
                                                        $event
                                                    )
                                                "
                                            >
                                                <span
                                                    class="multiselect-tag-remove-icon"
                                                >
                                                </span>
                                            </span>
                                        </div>
                                    </template>
                                </Multiselect>
                            </div>
                        </div>
                        <div class="index_division"></div>
                        <!-- render 無法預定的房間 list -->
                        <div
                            class="form-check w-100 align-middle"
                            style="font-size:12px; margin:0 17px;"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label
                                class="form-check-label small"
                                for="flexCheckChecked"
                            >
                                顯示目前無法預訂房間
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <Footer />
    </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import SiderBar from "../components/SiderBar.vue";
import RoomCard from "../components/RoomCard.vue";
import Footer from "../components/Footer.vue";
import WhiteNavBar from "../components/WhiteNavBar.vue";
import Multiselect from "@vueform/multiselect";
import Slider from "@vueform/slider";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

export default {
    data() {
        return {
            name: "FilterPage",
            transparent: false,
            isOpen: false,
            isChecked: false,
            rooms: [],
            temp: [],
            roomOptions: [],
            locations: [],
            roomStyles: [],
            specificLivingSpaces: [],
            specificLivingFeatures: [],
            MRTsLine: [],
            MRTsStation: [],
            sites: [],
            // select array
            selectedLocation: "請選擇城市",
            selectedRoomStyles: [],
            selectedRoomSpaces: "顯示特定居住空間",
            selectedRoomFeatures: [],
            selectedDoubleOccupancy: 0,
            selectedRaisePet: 0,
            // mobile selected
            selectedMobileLocation: "請選擇城市",
            selectedMobileSite: "請選擇地區",
            selectedMobileRoomStyle: "請選擇房型",
            selectedMRTsLine: "請選擇捷運線",
            selectedMRTsStation: "請選擇捷運站",
            // price Slider
            priceRange: [4000, 42000],
            min: 4000,
            max: 42000,
            merge: 10,
            step: 5000,
            format: {
                prefix: "$",
                decimals: 0
            },
            locationRange: [0, 30],
            locationMin: 0,
            locationMax: 30,
            locationMerge: 3,
            locationStep: 1,
            locationFormat: {
                prefix: "",
                decimals: 0
            },
            locationRangeFixed(min) {
                (min * 3.305).toFixed(3);
            },

            // date input
            selectMonth: {
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear()
            },
            // input search
            cacheSearch: "",
            cacheSort: "0",
            // Mobile filter to MRTs
            renderMRTs: [],
            renderMRTsLine: [],
            renderMRTsStation: [],
            //
            mrtCode: {},
            mrtStation: {},

            // siderData
            siderName: "Room search",
            bannerTitle: {
                imgUrl: "",
                title1: "房",
                title2: "源",
                title3: "搜",
                title4: "尋"
            }
        };
    },
    methods: {
        filterRow(index) {
            return index % 2 === 0;
        },
        openmenu() {
            this.isOpen = !this.isOpen;
        },
        clickLabel() {
            this.isChecked = !this.isChecked;
        },
        typeMoblieMenu() {
            let mobileRes = this.rooms;
            mobileRes = this.filterRoomsMoblieLocation(mobileRes);
            mobileRes = this.filterRoomsMoblieSite(mobileRes);
            mobileRes = this.filterRoomsMobileRoomStyle(mobileRes);
            mobileRes = this.filterRoomsMobileMRTsLine(mobileRes);
            mobileRes = this.filterRoomsMobileMRTsStation(mobileRes);
            this.temp = [...mobileRes];
        },
        typeMenu() {
            // filter options
            let res = this.rooms;
            // console.log(this.selectedLocation);
            res = this.filterByRoomLocation(res);
            res = this.filterByRoomTypes(res);
            res = this.filterByRoomSpace(res);
            res = this.filterByRoomDoubleOccupancy(res);
            res = this.filterByRoomRaisePet(res);
            res = this.filterByRoomFeature(res);
            res = this.filterByRoomPrice(res);
            res = this.filterByRoomFloor(res);
            res = this.filterSearch(res);
            res = this.filterRoomsSort(res);
            this.temp = [...res];
        },
        checkEventBinding() {
            console.log("Evnet 觸發");
            // console.log(this.rooms);
            // console.log(this.selectedRoomFeatures);
            // console.log("價格間距", this.priceRange);
            // console.log("關鍵字", this.cacheSearch);

            // this.typeMenu();
        },
        filterByRoomLocation(res) {
            if (
                this.selectedLocation === "請選擇城市" ||
                this.selectedLocation === "全國"
            ) {
                //
            } else {
                res = res.filter(
                    item => item.location === this.selectedLocation
                    // item => console.log(item)
                );
            }
            return res;
        },
        filterByRoomTypes(res) {
            if (this.selectedRoomStyles.length === 0) {
                //
                // console.log("長度", this.selectedRoomStyles.length);
            } else {
                // console.log("有一個勾");
                res = res.filter(item => {
                    item.roomStyle === this.selectedRoomStyles;
                    return this.selectedRoomStyles.includes(item.roomStyle);
                });
            }
            return res;
        },
        filterByRoomSpace(res) {
            if (this.selectedRoomSpaces === "顯示特定居住空間") {
                //
            } else if (this.selectedRoomSpaces === "全部") {
                //
            } else {
                res = res.filter(item => {
                    return item.name === this.selectedRoomSpaces;
                });
            }
            return res;
        },
        filterByRoomDoubleOccupancy(res) {
            if (this.selectedDoubleOccupancy === 0) {
                // ...arg 傳參考避免出錯
                // console.log("全部", this.selectedDoubleOccupancy);
            } else if (this.selectedDoubleOccupancy === 1) {
                res = res.filter(item => {
                    // console.log("可以", this.selectedDoubleOccupancy);
                    return item.doubleOccupancy === true;
                });
                // console.log(res);
            } else {
                res = res.filter(item => {
                    // console.log("可以", this.selectedDoubleOccupancy);
                    return item.doubleOccupancy === false;
                });
            }
            return res;
        },
        filterByRoomRaisePet(res) {
            if (this.selectedRaisePet === 0) {
                // ...arg 傳參考避免出錯
                // console.log("全部", this.selectedDoubleOccupancy);
            } else if (this.selectedRaisePet === 1) {
                res = res.filter(item => {
                    // console.log("可以", this.selectedDoubleOccupancy);
                    return item.raisePet === true;
                });
                // console.log(res);
            } else {
                res = res.filter(item => {
                    // console.log("可以", this.selectedRaisePet);
                    return item.raisePet === false;
                });
            }
            return res;
        },
        filterByRoomFeature(res) {
            if (this.selectedRoomFeatures.length === 0) {
                //
                // console.log("空的", this.selectedRoomFeatures);
            } else {
                res = res.filter(item => {
                    let flag = false;
                    item.livingSpaceEquipment.forEach(livingSpaceEquipment => {
                        // console.log("至少一個", item.livingSpaceEquipment);
                        if (
                            this.selectedRoomFeatures.includes(
                                livingSpaceEquipment
                            )
                        ) {
                            flag = true;
                        }
                    });
                    return flag;
                });
            }
            return res;
        },
        filterByRoomPrice(res) {
            let priceMin = this.priceRange[0];
            let priceMax = this.priceRange[1];
            // console.log("最低價格", min);
            // console.log("最高價格", max);
            if (this.priceRange.length === 2) {
                res = res.filter(item => {
                    // console.log(item.monthlyRent);
                    return (
                        item.monthlyRent >= priceMin &&
                        item.monthlyRent <= priceMax
                    );
                    // let a = item.monthlyRent >= min && item.monthlyRent <= max;
                    // return console.log(a);
                });
            }
            return res;
        },
        filterByRoomFloor(res) {
            let locationMin = this.locationRange[0];
            let locationMax = this.locationRange[1];
            if (this.locationRange.length === 2) {
                res = res.filter(item => {
                    // console.log(item.monthlyRent);
                    return (
                        item.housingInformation >= locationMin &&
                        item.housingInformation <= locationMax
                    );
                });
            }
            return res;
        },
        filterSearch(res) {
            if (this.cacheSearch === "") {
                // console.log("關鍵字0", this.cacheSearch);
            } else {
                res = res.filter(item => {
                    // console.log(item);
                    return (
                        item.name.match(this.cacheSearch) ||
                        item.secondName.match(this.cacheSearch)
                    );
                });
            }
            return res;
        },
        filterRoomsSort(res) {
            if (this.cacheSort === "0") {
                // console.log("最新", 0);
            } else if (this.cacheSort === "2") {
                res = res.sort((a, b) => {
                    // console.log("最低價格", 1);
                    return a.monthlyRent - b.monthlyRent;
                });
            } else {
                res = res.sort((a, b) => {
                    // console.log("最高價格", 2);
                    return b.monthlyRent - a.monthlyRent;
                });
            }
            return res;
        },
        // mobile menu
        filterRoomsMoblieLocation(mobileRes) {
            if (
                this.selectedMobileLocation === "全國" ||
                this.selectedMobileLocation === "請選擇城市"
            ) {
                // ...arg 傳參考避免出錯
                // console.log(this.selectedMobileLocation);
            } else {
                mobileRes = mobileRes.filter(item => {
                    // console.log(this.selectedMobileLocation);
                    return item.location === this.selectedMobileLocation;
                });
            }

            return mobileRes;
        },
        filterRoomsMoblieSite(mobileRes) {
            if (this.selectedMobileSite === "請選擇地區") {
                //
            } else if (this.selectedMobileSite === "全地區") {
                //
            } else {
                mobileRes = mobileRes.filter(item => {
                    // console.log(item.site);
                    return item.site === this.selectedMobileSite;
                });
            }

            return mobileRes;
        },
        filterRoomsMobileRoomStyle(mobileRes) {
            if (this.selectedMobileRoomStyle === "請選擇房型") {
                // console.log("請選擇房型", this.selectedMobileRoomStyle);
            } else {
                mobileRes = mobileRes.filter(item => {
                    return item.roomStyle === this.selectedMobileRoomStyle;
                });
            }
            return mobileRes;
        },
        filterRoomsMobileMRTsLine(mobileRes) {
            if (this.selectedMRTsLine === "請選擇捷運線") {
                // console.log("請選擇捷運線", this.selectedMRTsLine);
            } else {
                // mobileRes = mobileRes.filter();
                // console.log("已經選擇了捷運線", this.selectedMRTsLine);
                mobileRes = mobileRes.filter(item => {
                    // console.log(item.trafficInformation.MRTline);
                    return (
                        item.trafficInformation.MRTline.code ===
                        this.selectedMRTsLine
                    );
                });
            }
            this.changeMRTsLine();
            return mobileRes;
        },
        filterRoomsMobileMRTsStation(mobileRes) {
            if (this.selectedMRTsStation === "請選擇捷運站") {
                // console.log("請選擇捷運線", this.selectedMRTsStation);
            } else {
                // mobileRes = mobileRes.filter();
                // console.log("已經選擇了捷運站", this.selectedMRTsStation);
                mobileRes = mobileRes.filter(item => {
                    // console.log(item.trafficInformation.MRTline);
                    return (
                        item.trafficInformation.MRTstation ===
                        this.selectedMRTsStation
                    );
                });
            }
            return mobileRes;
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
        },
        changeMRTsLine() {
            // console.log("MRTs Event 觸發", this.selectedMRTsLine);
            this.renderMRTsStation = this.mrtStation[this.selectedMRTsLine];
        },
        changeMRTsStation() {
            // console.log("MRTs Station 觸發", this.selectedMRTsStation);
        }
    },
    components: {
        Breadcrumb,
        SiderBar,
        RoomCard,
        Footer,
        WhiteNavBar,
        Multiselect,
        Slider,
        Datepicker
    },
    mounted() {
        //loader
        let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel
        });
        this.axios
            .get("https://michael-backend.herokuapp.com/rooms")
            .then(result => {
                // console.log("result:", result);
                this.rooms = result.data;
                // console.log(" this.rooms:", this.rooms);
                this.temp = this.rooms;

                // success get data
                setTimeout(() => {
                    loader.hide(); // simulate AJAX
                }, 1500);
            })
            .catch(err => {
                console.warn(err);
            });

        // catch roomOptions
        this.axios
            .get("https://michael-backend.herokuapp.com/option.json")
            .then(result => {
                // console.log("result", result.data);
                let roomOptionsData = result.data.roomOptions;
                // console.log("roomOptionsData : ", roomOptionsData);

                this.roomOptions = roomOptionsData;
                this.locations = this.roomOptions.location;
                this.roomStyles = this.roomOptions.roomStyle;
                this.specificLivingSpaces = this.roomOptions.specificLivingSpace;
                this.specificLivingFeatures = this.roomOptions.specificLivingFeature;
                this.MRTsLine = this.roomOptions.MRT.map(item => {
                    return item.line;
                });
                // console.log("捷運線們", this.MRTsLine);
                this.MRTsStation = this.roomOptions.MRT.map(item => {
                    return item.name;
                });
                // console.log("捷運站們", this.MRTsStation);

                this.sites = this.roomOptions.site;
            })
            .catch(err => {
                console.warn(err);
            });

        this.axios
            .get("https://michael-backend.herokuapp.com/option.json")
            .then(result => {
                let data = result.data;
                // console.log(data.location[0].MRTStaions);
                let locationData = data.location[0];
                // console.log(data);
                this.mrtCode = locationData.MRTCodes;
                this.mrtStation = locationData.MRTStaions;

                // console.log("mrtCode", this.mrtCode);
                // console.log("mrtStation", this.mrtStation);
            })
            .catch(err => {
                console.warn(err);
            });
    }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/slider/themes/default.css">
</style>

<style  lang="scss" scoped>
// @import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
// date styles
::v-global(.dp__overlay_cell_active) {
    background-color: #c77155;
}
// multiselect styles
::v-deep .multiselect-tag {
    // background-color: #945443;
    background-color: #c77155;
}
::v-deep .multiselect-placeholder {
    font-size: 12px;
}
::v-deep .multiselect.is-active {
    box-shadow: #945443 0px 10px 25px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
::v-deep .slider-handle:focus {
    box-shadow: #945443 0px 5px 12px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
}
// slider styles
::v-deep .slider-target {
    margin: 0 12px;
}
::v-deep .slider-connect {
    background-color: #945443;
}
::v-deep .slider-tooltip {
    background-color: #c77155;
    border: 1px solid #c77155;
    font-size: 12px;
}

.index_content {
    opacity: 1;
    transition: opacity 0.3s;
}
.index_page {
    padding-top: 72px;
    min-height: 100vh;
}
.index_room-list {
    width: 100%;
    padding: 17px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .index_sort {
        width: 100%;
        display: flex;
        align-self: flex-start;
        justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 300;
            line-height: 2;
            letter-spacing: 0.5px;
            color: $primary;
            .index_dropdown-basic {
                width: 140px;
                display: inline-block;
                margin-left: 14px;
                position: relative;
                color: $primary;
                font-size: 12px;
                letter-spacing: 0.5px;
                border-radius: 0;
                .index_dropdown-basic-content {
                    width: 100%;
                    min-height: 30px;
                    border: 1px solid $info;
                    outline: none;
                    cursor: pointer;
                    transition: border 0.2s;
                }
                .index_value {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 12px;
                }
            }
        }
    }
}
.index_room-filter {
    min-height: 100vh;
    flex-basis: 290px;
    flex-shrink: 0;
    width: 290px;
    border: 1px solid $info;
    padding: 30px 0;
    @media screen and (max-width: 575px),
        screen and(min-width:576px) and (max-width: 1100px) {
        display: none;
    }
    .index_dropdown-group {
        margin: 0 17px 17px;
        display: block;
        color: $primary;
        p {
            margin-bottom: 8px;
        }
        select,
        option {
            font-size: 12px;
            letter-spacing: 0.5px;
            border-radius: 0;
            color: $primary;
        }
    }
    .small {
        font-size: 12px;
        letter-spacing: 0.5px;
    }
    .index_division {
        height: 1px;
        background-color: $info;
        margin: 26px 17px 12px;
    }
    .index_clearButton {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    // range-slider
    .index_range-group {
        margin: 0 17px 17px;

        display: block;
        color: $primary;
        .index_range {
            width: 98%;
            padding-top: 15px;
            .rc-slider-track {
                height: 2px;
                border-radius: 0;
                background-color: $success;
            }
            .rc-slider-handle {
                width: 11px;
                height: 11px;
                border: 1px solid $success;
                background-color: #fff7f4;
            }
        }
        .rc-slider-rail {
            height: 1px;
            border-radius: 0;
            background-color: $info;
        }
        .index_unit {
            display: flex;
            justify-content: space-between;
            div {
                font-size: 12px;
                font-weight: 300;
                line-height: 2;
                padding-top: 5px;
                letter-spacing: 0.5px;
                color: $primary;
            }
        }
    }
    .rc-slider {
        box-sizing: border-box;
        position: relative;
        height: 14px;
        padding: 5px 0;
        width: 100%;
        border-radius: 6px;
        touch-action: none;
    }
    .rc-slider-rail {
        position: absolute;
        height: 4px;
        border-radius: 6px;
        width: 100%;
        background-color: #e9e9e9;
    }
    .rc-slider-track {
        left: 0;
        background-color: #abe2fb;
        position: absolute;
        height: 4px;
        border-radius: 6px;
    }
    .rc-slider-step {
        position: absolute;
        width: 100%;
        height: 4px;
        background: transparent;
    }
    .rc-slider-handle {
        position: absolute;
        margin-left: -7px;
        margin-top: -5px;
        width: 14px;
        height: 14px;
        cursor: pointer;
        cursor: -webkit-grab;
        cursor: grab;
        border-radius: 50%;
        border: 2px solid #96dbfa;
        background-color: #fff;
        touch-action: pan-x;
    }
    .rc-slider-mark {
        position: absolute;
        top: 18px;
        left: 0;
        width: 100%;
        font-size: 12px;
    }
    // Read more
    .index_accordion {
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        border-top: 1px solid $border;
        border-bottom: 1px solid $border;
        .index_head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            height: 40px;
            cursor: pointer;
            background-color: $lightGreen;
            span {
                font-size: 12px;
                font-weight: 500;
                line-height: 2;
                letter-spacing: 0.5px;
                color: $secondary;
            }
            .index_note {
                width: 50%;
            }
        }
    }
    .index_advance {
        margin: 40px 0;
        .index_accordion-content {
            padding: 40px 0;
        }
    }
    .index_selector-group,
    .form-check {
        margin: 0 17px 17px;
        p {
            margin-bottom: 8px;
        }
    }
    .index_selector {
        display: flex;
        width: 100%;
        height: 30px;
        label {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #b7ac9f;
            margin-right: -1px;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.75;
            letter-spacing: 3.4px;
            color: $primary;
            cursor: pointer;
            z-index: 0;
            &:last-child {
                margin-right: 0;
            }
            input {
                width: 0;
                height: 0;
                opacity: 0;
            }
        }
    }
}

// mobile
.index_breadcrume-section {
    @media screen and(max-width:576px) {
        display: none;
    }
}
// small-filter
.index_page {
    .index_small-filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 50px;
        border-top: 1px solid $info;
        @media screen and (min-width: 576px) {
            display: none;
        }
        div {
            &:first-child {
                display: flex;
                button {
                    margin-right: 10px;
                }
            }
            button {
                padding: 0 8px;
                div {
                    letter-spacing: 0.8px;
                }
            }
        }
    }
}

// filter-bar-alert
.index_alert-group {
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
    padding: 0;
    p {
        flex-basis: 100px;
        flex-shrink: 0;
        width: 100%;
    }
}
.index_alert-selector {
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px;
    label {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        border: 1px solid #b7ac9f;
        margin-right: -1px;
        font-size: 12px;
        font-weight: 300;
        line-height: 1.75;
        letter-spacing: 3.4px;
        color: $primary;
        cursor: pointer;
        z-index: 0;
    }
}

.form-control {
    color: #857c7c;
}
.form-control:focus {
    box-shadow: 0 0 0 0.25rem #ebae9a;
}
</style>