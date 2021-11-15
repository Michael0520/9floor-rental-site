<template>
    <div class="index_room-card">
        <div class="index_card-wrapper">
            <router-link :to="`/rooms/${id}`">
                <div
                    class="index_card-image img-fluid"
                    :style="backgroundStyles(image)"
                ></div>
            </router-link>
        </div>
        <div class="index_title">
            <router-link to="#" class="index_leftTitle">
                <span>
                    {{ name }}
                </span>
            </router-link>
            <router-link to="#" class="index_rightTitle">
                <span>
                    {{ secondName }}
                </span>
            </router-link>
        </div>
        <div class="index_status">
            <!-- text 樣式吃不到 -->
            <span>
                {{ roomStyle }}
            </span>
            <span>
                {{ status }}
            </span>
        </div>

        <div class="index_detail">
            <span>
                <span>
                    NTD
                    <span class="index_price">
                        {{ formatPrice(price) }}
                    </span>
                    / 月
                </span>
            </span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
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
    // props: ["name", "secondName", "roomStyle", "status", "price", "image", "id"]
    props: {
        name: String,
        secondName: String,
        roomStyle: String,
        status: String,
        price: Number,
        image: String,
        id: String
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";

.index_room-card {
    margin: 17px;
    padding-bottom: 7px;
    .index_card-wrapper {
        width: 100%;
        .index_card-image {
            width: 100%;
            background-size: cover;
            background-position: center center;
            &:after {
                content: "";
                display: block;
                padding-top: 60%;
            }
        }
    }
    .index_title {
        margin: 14px 0;
        .index_leftTitle {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.35;
            letter-spacing: 3px;
            color: #945443;
        }
        .index_rightTitle span {
            font-size: 18px;
            font-weight: 300;
            line-height: 1.35;
            letter-spacing: 3px;
            color: #444647;
            margin-left: 10px;
        }
    }
    .index_status {
        display: flex;
        justify-content: space-between;
        height: 26px;
        font-size: 13px;
        font-weight: 300;
        line-height: 2;
        letter-spacing: 1px;
        color: #444647;
    }
    .index_detail {
        height: 26px;
        span {
            font-size: 13px;
            font-weight: 300;
            line-height: 2;
            letter-spacing: 1px;
            color: #444647;
            .index_price {
                font-size: 18px;
                font-weight: 300;
                line-height: 1.22;
                letter-spacing: 1px;
            }
        }
    }
}
</style>