<template>
    <div
        class="index_side-bar index_side-bar-left"
        :class="isTop ? 'index_fixed-side-bar' : ''"
    >
        <div class="index_side-bar-content index_fade-in-out ">
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
        return {
            isTop: false
        };
    },
    mounted() {
        // if isTop = 0 , add fixed class , else remove
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
// fixed
.index_side-bar.index_fixed-side-bar {
    .index_side-bar-content {
        position: fixed;
        top: 72px;
    }
}
</style>