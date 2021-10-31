<template>
    <div class="index_circleSection">
        <div class="index_circleTitle">
            <h3>{{ title }}</h3>
            <p>
                {{ titleDescription }}
            </p>
        </div>
        <div class="index_circleGroup">
            <div class="index_circlePhoto">
                <div class="index_photo" :style="backgroundStyles(image)"></div>
                <div class="index_info">
                    <p>
                        {{ cardDescription }}
                    </p>
                </div>
            </div>
            <div class="index_circlePhoto">
                <div class="index_photo" :style="backgroundStyles(image)"></div>
                <div class="index_info">
                    <p>
                        {{ cardDescription }}
                    </p>
                </div>
            </div>
            <div class="index_circlePhoto">
                <div class="index_photo" :style="backgroundStyles(image)"></div>
                <div class="index_info">
                    <p>
                        {{ cardDescription }}
                    </p>
                </div>
            </div>
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
        }
    },
    props: ["title", "titleDescription", "image", "cardDescription"]
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_circleSection {
    border-bottom: 1px solid $border;
    .index_circleTitle {
        margin-bottom: 50px;
        h3 {
            margin-top: 40px;
            margin-bottom: 12px;
            text-align: center;
        }
        p {
            margin: 0 auto;
            margin-bottom: 12px;
            text-align: center;
            width: 446px;
        }
    }
}
.index_circleGroup {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
    .index_circlePhoto {
        display: flex;
        flex-direction: column;
        align-items: center;
        .index_photo {
            width: 160px;
            height: 160px;
            background-color: $info;
            background-position: 50%;
            background-size: cover;
            border-radius: 50%;
        }
        .index_info {
            width: 220px;
            margin-top: 24px;
            p {
                text-align: center;
            }
        }
    }
}
</style>