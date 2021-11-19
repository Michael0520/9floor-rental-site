<template>
    <div
        class="index_side-bar index_side-bar-right"
        :class="isTop ? 'index_fixed-side-bar' : ''"
    >
        <div class="index_side-bar-content index_fade-in-out"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "rightSiderBar",
            isTop: false
        };
    }
};
</script>

<style lang="scss">
// @import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

// side-bar
.index_side-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    border-right: 1px solid $info;
    border-top: 1px solid $info;
    opacity: 1;
    transition: opacity 0.5s;
    flex-basis: 60px;
    flex-shrink: 0;
    &:last-child {
        border-right: 0;
        border-left: 1px solid $info;
    }
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
.index_side-bar-left,
.index_side-bar-right {
    flex-basis: 60px;
}
.index_side-bar-left {
    div {
        &:first-child {
            margin-top: 60px;
        }
    }
}
</style>