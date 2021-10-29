<template>
    <nav
        class="index_breadcrumb"
        style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
    >
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-house-door-fill index_home"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                        /></svg
                ></router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <router-link to="/">入住</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <router-link to="/filter">房源搜尋</router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/custom.scss";

.index_breadcrumb {
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    padding-left: 60px;
    a {
        font-size: 10px;
        letter-spacing: 2px;
        color: #444647;
        cursor: pointer;
        .index_home {
            font-size: 16px;
            color: #444647;
        }
    }
}
</style>