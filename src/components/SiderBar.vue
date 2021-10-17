<template>
    <div class="col-lg-1 index_side-bar index_left index_right">
        <div class="index_side-bar-content">
            <div class="index_vertical-word">
                <span>房</span>
                <span>源</span>
                <span>搜</span>
                <span>尋</span>
            </div>
            <div class="index_vertical-en">Room search</div>
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
@import "../assets/custom.scss";

.index_side-bar {
    align-items: center;
    width: 60px;
    border-right: 1px solid $info;
    border-top: 1px solid $info;
    border-bottom: 1px solid $info;
    opacity: 1;
    transition: opacity 0.5s;
    flex-basis: 60px;
    flex-shrink: 0;
    .index_side-bar-content {
        margin-top: 24px;
        transition: opacity 0.3s;
        opacity: 1;
        .index_vertical-word {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            span {
                margin-bottom: 2px;
                font-size: 10px;
                color: $primary;
                transform: rotate(90deg);
            }
        }
        .index_vertical-en {
            font-size: 10px;
            color: $primary;
            writing-mode: vertical-lr;
        }
    }
    @include lg {
        display: none;
    }
}
</style>