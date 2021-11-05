<template>
    <div>
        <p class="title">{{ title }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// import { user } from "../api/index";
export default defineComponent({
    name: "index",
    setup() {
        const title = ref("渐进式JavaScript 框架-首页1");
        onMounted(() => {
            // user();
            console.log("mounted!");
        });
        return {
            title,
        };
    },
});
</script>
<style lang="less" scoped>
.title {
    color: #000;
    font-size: 48px;
    text-align: center;
}
img {
    max-width: 100%;
}
.van-button {
    margin-bottom: 20px;
}
</style>
