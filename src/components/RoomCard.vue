<template>
    <div class="index_room-card">
        <div class="index_card-wrapper">
            <a href="#">
                <div class="index_card-image img-fluid"></div>
            </a>
        </div>
        <div class="index_title">
            <a href="#" class="index_leftTitle">
                <span>仁愛</span>
            </a>
            <a href="#" class="index_rightTitle">
                <span>仁愛 ROOM A</span>
            </a>
        </div>
        <div class="index_status">
            <!-- text 樣式吃不到 -->
            <div class="text-start">獨立套房</div>
            <div class="text-end">招募中</div>
        </div>

        <div class="index_detail">
            <span>
                <span>
                    NTD
                    <span class="index_price">16500</span>
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
            background-image: url("../assets/20200902-50a611e8ecd6f999ca037a57539c8465.png");
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