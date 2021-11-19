<template>
    <div class="index_imgbox">
        <div class="index_imgboxInner">
            <div class="index_image" :style="backgroundStyles(image)"></div>
            <div class="index_watermark">
                <div class="index_vertical-title">
                    <span> {{ title1 }} </span><span> {{ title2 }} </span
                    ><span> {{ title3 }} </span
                    ><span>
                        {{ title4 }}
                    </span>
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
    props: ["image", "title1", "title2", "title3", "title4"]
};
</script>

<style lang="scss">
// @import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";
</style>