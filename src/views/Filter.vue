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
                        <div>6 筆結果</div>
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
                                v-for="(room, index) in rooms"
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
                        >
                            <option selected>全國</option>
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
                    <div class="index_dropdown-group">
                        <p class="small">房型</p>
                        <ul
                            class="list-group"
                            style="color:#444647  font-size:12px"
                        >
                            <li
                                class="list-group-item"
                                style="color:#444647; font-size:12px"
                                v-for="(option, keys) in roomStyles"
                                :value="option.name"
                                :key="keys"
                            >
                                <input
                                    class="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                    aria-label="..."
                                />
                                {{ option.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="index_dropdown-group">
                        <p class="small index_clearButton">
                            預定入住日期
                            <span role="presentation" style="cursor: pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="$secondary"
                                    class="bi bi-x-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                    />
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                                清除
                            </span>
                        </p>
                        <select
                            class="form-select form-select-sm index_dropdown-basic"
                            aria-label=".form-select-sm example"
                        >
                            <option selected>請選擇入住日期</option>
                            <!-- TODO:value 可以來改為動態更新 -->
                            <option value="1">入住日期</option>
                        </select>
                    </div>
                    <div class="index_range-group">
                        <p class="small">價格/月</p>
                        <div class="rc-slider index_range">
                            <div class="rc-slider-rail"></div>
                            <div
                                class="rc-slider-track rc-slider-track-1"
                                style="left: 0%; width: 100%"
                            ></div>
                            <div class="rc-slider-step"></div>
                            <div
                                role="slider"
                                tabindex="0"
                                aria-valuemin="4000"
                                aria-valuemax="42000"
                                aria-valuenow="4000"
                                aria-disabled="false"
                                class="rc-slider-handle rc-slider-handle-1"
                                style="left: 0%"
                            ></div>
                            <div
                                role="slider"
                                tabindex="0"
                                aria-valuemin="4000"
                                aria-valuemax="42000"
                                aria-valuenow="42000"
                                aria-disabled="false"
                                class="rc-slider-handle rc-slider-handle-2"
                                style="left: 100%"
                            ></div>
                            <div class="rc-slider-mark"></div>
                        </div>
                        <div class="index_unit">
                            <div>NTD 4000</div>
                            <div>NTD 42000</div>
                        </div>
                    </div>
                    <div class="index_division"></div>
                    <div class="index_dropdown-group">
                        <p class="small">顯示特定居住空間</p>
                        <select
                            class="form-select form-select-sm index_dropdown-basic"
                            aria-label=".form-select-sm example"
                        >
                            <option selected>顯示特定居住空間</option>
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
                    <div class="index_accordion index_advance">
                        <div class="index_head" role="presentation">
                            <span>進階搜尋</span>
                            <p class="small index_note"></p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="$primary"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                        <div class="index_accordion-content">
                            <div class="index_range-group">
                                <p class="small">價格/月</p>
                                <div class="rc-slider index_range">
                                    <div class="rc-slider-rail"></div>
                                    <div
                                        class="rc-slider-track rc-slider-track-1"
                                        style="left: 0%; width: 100%"
                                    ></div>
                                    <div class="rc-slider-step"></div>
                                    <div
                                        role="slider"
                                        tabindex="0"
                                        aria-valuemin="4000"
                                        aria-valuemax="42000"
                                        aria-valuenow="4000"
                                        aria-disabled="false"
                                        class="rc-slider-handle rc-slider-handle-1"
                                        style="left: 0%"
                                    ></div>
                                    <div
                                        role="slider"
                                        tabindex="0"
                                        aria-valuemin="4000"
                                        aria-valuemax="42000"
                                        aria-valuenow="42000"
                                        aria-disabled="false"
                                        class="rc-slider-handle rc-slider-handle-2"
                                        style="left: 100%"
                                    ></div>
                                    <div class="rc-slider-mark"></div>
                                </div>
                                <div class="index_unit">
                                    <div>NTD 4000</div>
                                    <div>NTD 42000</div>
                                </div>
                            </div>
                            <div
                                class="index_selector-group index_select-group"
                            >
                                <p class="small">第二人入住</p>
                                <div class="index_selector">
                                    <label class="" for="double--1"
                                        ><input
                                            type="radio"
                                            id="double--1"
                                            name="double"
                                            value="-1"
                                        />全部</label
                                    ><label class="" for="double-1"
                                        ><input
                                            type="radio"
                                            id="double-1"
                                            name="double"
                                            value="1"
                                        />可以</label
                                    ><label class="" for="double-0"
                                        ><input
                                            type="radio"
                                            id="double-0"
                                            name="double"
                                            value="0"
                                        />不可以</label
                                    >
                                </div>
                            </div>
                            <div
                                class="index_selector-group index_select-group"
                            >
                                <p class="small">養寵物</p>
                                <div class="index_selector">
                                    <label class="" for="double--1"
                                        ><input
                                            type="radio"
                                            id="double--1"
                                            name="double"
                                            value="-1"
                                        />全部</label
                                    ><label class="" for="double-1"
                                        ><input
                                            type="radio"
                                            id="double-1"
                                            name="double"
                                            value="1"
                                        />可以</label
                                    ><label class="" for="double-0"
                                        ><input
                                            type="radio"
                                            id="double-0"
                                            name="double"
                                            value="0"
                                        />不可以</label
                                    >
                                </div>
                            </div>
                            <!-- specificLivingFeatures -->
                            <div class="index_dropdown-group">
                                <p class="small">居住空間特色</p>
                                <select
                                    class="
                                    form-select form-select-sm
                                    index_dropdown-basic
                                "
                                    aria-label=".form-select-sm example"
                                >
                                    <option selected>請選擇居住空間特色</option>
                                    <option
                                        v-for="(option,
                                        keys) in specificLivingFeatures"
                                        :key="keys"
                                        :value="option.name"
                                    >
                                        {{ option.name }}
                                    </option>
                                </select>
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
                            <div class="index_dropdown-basic w-100">
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
                            </div>
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

export default {
    data() {
        return {
            name: "FilterPage",
            transparent: false,
            isOpen: false,
            rooms: [],
            roomOptions: [],
            locations: [],
            roomStyles: [],
            specificLivingSpaces: [],
            specificLivingFeatures: [],
            MRTs: [],
            // select array
            selectedLocation: ""
        };
    },
    methods: {
        filterRow(index) {
            return index % 2 === 0;
        },
        openmenu() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        // filter options
        typeMenu() {
            if (this.selectedLocation === "全國") {
                return this.rooms;
            } else {
                return this.rooms.filter(item => {
                    return item.location.city === this.selectedLocation;
                });
            }
        }
    },
    components: {
        Breadcrumb,
        SiderBar,
        RoomCard,
        Footer,
        WhiteNavBar
    },
    mounted() {
        // catch roomsData
        this.axios
            .get("http://localhost:3000/rooms")
            .then(result => {
                // console.log(result.data);
                this.rooms = result.data;
                console.log(this.rooms);
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
<style  lang="scss" scoped>
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

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