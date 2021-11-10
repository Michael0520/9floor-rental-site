<template >
    <!-- NavBar -->
    <WhiteNavBar />
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
                <SiderBar />
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
                            >
                                <option selected>最新</option>
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
                                <!-- TODO: v-for 的 rooms 要改為 computed
                            的 typeMenu ，但發生錯誤，說卡片元件會取得不到資料
                            -->
                                <RoomCard
                                    :price="room.monthlyRent"
                                    :name="room.name"
                                    :secondName="room.secondName"
                                    :roomStyle="room.roomStyle"
                                    :status="room.status"
                                    :image="room.imgUrl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- filter -->
                <div class="index_room-filter">
                    <!-- location -->
                    <div class="index_dropdown-group">
                        <p class="small">城市</p>
                        <select
                            class="form-select form-select-sm index_dropdown-basic"
                            aria-label=".form-select-sm example"
                            v-model="selectedLocation"
                            @change="typeMenu"
                        >
                            <option selected value="全國">全國</option>
                            <!-- TODO:value 可以來改為動態更新 -->
                            <option
                                v-for="(option, keys) in locations"
                                :key="keys"
                                :value="option.name"
                            >
                                {{ keys + 1 }}.
                                {{ option.name }}
                            </option>
                        </select>
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
                            <!-- TODO:value 可以來改為動態更新 -->
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
                                            @change="checkEventBinding"
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
            class="modal fade"
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
                            style="
                                        padding:0 17px;margin-bottom:14px;
                                        font-size:13px;font-weight:500;letter-spacing:.6px
                                        "
                        >
                            價格/月
                        </h3>
                        <label for="customRange3" class="form-label"></label>
                        <input
                            type="range"
                            class="form-range"
                            min="0"
                            max="5"
                            step="0.5"
                            id="customRange3"
                        />
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
                        <h3
                            style="
                                        padding:0 17px;margin-bottom:14px;
                                        font-size:13px;font-weight:500;letter-spacing:.6px
                                        "
                        >
                            地點
                        </h3>
                        <div class="index_alert-group">
                            <p class="small">城市</p>
                            <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected>請選擇城市</option>
                                    <option
                                        v-for="(option, keys) in locations"
                                        :key="keys"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="index_alert-group">
                            <p class="small">地區</p>
                            <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected>請選擇地區</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
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
                                        style="font-size:12px;
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
                                    <div class="accordion-body">
                                        <div
                                            class="index_alert-group"
                                            style="padding:0"
                                        >
                                            <p class="small">捷運線</p>
                                            <div
                                                class="index_dropdown-basic w-100"
                                            >
                                                <select
                                                    class="form-select form-select-sm"
                                                    aria-label="Default select example"
                                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                                >
                                                    <option selected
                                                        >請選擇捷運線</option
                                                    >
                                                    <option
                                                        v-for="(option,
                                                        keys) in MRTs"
                                                        :key="keys"
                                                    >
                                                        {{ option.line }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            class="index_alert-group"
                                            style="padding:0"
                                        >
                                            <p class="small">捷運站</p>
                                            <div
                                                class="index_dropdown-basic w-100"
                                            >
                                                <select
                                                    class="form-select form-select-sm"
                                                    aria-label="Default select example"
                                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                                >
                                                    <option selected
                                                        >請選擇捷運站</option
                                                    >
                                                    <option
                                                        v-for="(option,
                                                        keys) in MRTs"
                                                        :key="keys"
                                                    >
                                                        {{ option.name }}
                                                    </option>
                                                </select>
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
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="margin-bottom:7px;font-size:13px;font-weight:300;letter-spacing:.6px"
                            >
                                房型
                            </p>
                            <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected>請選擇房型</option>
                                    <option
                                        v-for="(option, keys) in roomStyles"
                                        :key="keys"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                預訂入住日期
                            </p>
                            <!-- TODO:要使用 bootstrap Data input -->
                            <!-- <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected>請選擇預訂入住日期</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div> -->
                        </div>
                        <div>
                            <!-- <Datepicker v-model="date"></Datepicker> -->
                        </div>
                        <div
                            class="index_division"
                            style="height:1px;background-color:#d2c8bd;margin:26px 0 12px;"
                        ></div>
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="margin-bottom:7px;font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                顯示特定居住空間
                            </p>
                            <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected
                                        >請選擇顯示特定居住空間</option
                                    >
                                    <option
                                        v-for="(option,
                                        keys) in specificLivingSpaces"
                                        :key="keys"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="
                                        margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                房間坪數
                            </p>
                            <label
                                for="customRange3"
                                class="form-label"
                            ></label>
                            <input
                                type="range"
                                class="form-range"
                                min="0"
                                max="5"
                                step="0.5"
                                id="customRange3"
                            />
                        </div>
                        <div class="index_alert-selector-group">
                            <p
                                class="small"
                                style="
                                        padding:0 17px;margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                第二人居住
                            </p>
                            <div class="index_alert-selector">
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    style=""
                                    >全部</label
                                >
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    >可以</label
                                >
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    >不可以</label
                                >
                            </div>
                        </div>
                        <div class="index_alert-selector-group">
                            <p
                                class="small"
                                style="
                                        padding:0 17px;margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                養寵物
                            </p>
                            <div class="index_alert-selector">
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    style=""
                                    >全部</label
                                >
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    >可以</label
                                >
                                <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-outlined"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-outline-primary"
                                    for="btn-check-outlined"
                                    >不可以</label
                                >
                            </div>
                        </div>
                        <div
                            class="index_division"
                            style="height:1px;background-color:#d2c8bd;margin:26px 0 12px;"
                        ></div>
                        <div class="index_alert-group">
                            <p
                                class="small"
                                style="
                                        margin-bottom:7px;
                                        font-size:13px;font-weight:300;letter-spacing:.6px
                                        "
                            >
                                顯示特定居住特色
                            </p>
                            <div class="index_dropdown-basic w-100">
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Default select example"
                                    style="width:100%;min-height:30px;
                                        border:1px solid #d2c8bd;
                                        outline:none;
                                        transition:border .2s ease-out"
                                >
                                    <option selected
                                        >請選擇顯示特定居住特色</option
                                    >
                                    <option
                                        v-for="(option,
                                        keys) in specificLivingFeatures"
                                        :key="keys"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
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
            MRTs: [],
            // select array
            selectedLocation: "全國",
            selectedRoomStyles: [],
            selectedRoomSpaces: "顯示特定居住空間",
            selectedRoomFeatures: [],
            selectedDoubleOccupancy: 0,
            selectedRaisePet: 0,
            // value: [],
            // options: ["Batman", "Robin", "Joker"],
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
            }
            // getDate: "",
            // setDate: value => {
            //     this.selectMonth.value = value;
            // }
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
            this.temp = [...res];
        },
        checkEventBinding() {
            console.log("Evnet 觸發");
            // console.log(this.rooms);
            // console.log(this.selectedRoomFeatures);
            console.log("價格間距", this.priceRange);

            this.typeMenu();
        },
        filterByRoomLocation(res) {
            if (this.selectedLocation === "全國") {
                // ...arg 傳參考避免出錯
            } else {
                res = res.filter(
                    item => item.location === this.selectedLocation
                    // item => console.log(item)
                );
                // console.log(res);
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
        // catch roomsData
        this.axios
            .get("http://localhost:3000/rooms")
            .then(result => {
                // console.log(result.data);
                this.rooms = result.data;
                this.temp = this.rooms;
                // console.log(this.rooms);
            })
            .catch(err => {
                console.warn(err);
            });
        // catch roomOptions
        this.axios
            .get("http://localhost:3000/roomOptions")
            .then(result => {
                // console.log(result.data);
                this.roomOptions = result.data;
                this.locations = this.roomOptions.location;
                this.roomStyles = this.roomOptions.roomStyle;
                this.specificLivingSpaces = this.roomOptions.specificLivingSpace;
                this.specificLivingFeatures = this.roomOptions.specificLivingFeature;
                this.MRTs = this.roomOptions.MRT;
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
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

// multiselect styles
::v-deep .multiselect-tag {
    background-color: #945443;
}
::v-deep .multiselect.is-active {
    box-shadow: #945443 0px 10px 25px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
// slider styles
::v-deep .slider-target {
    margin: 0 12px;
}
::v-deep .slider-connect {
    background-color: #945443;
}
::v-deep .slider-tooltip {
    background-color: #945443;
    border: 1px solid #945443;
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
    margin-bottom: 24px;
    padding: 0 17px;
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
    padding: 0 17px;
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
</style>