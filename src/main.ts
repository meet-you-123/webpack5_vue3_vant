import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router/index";
import store from "./store/index";
import installVant from "./plugins/vant";

const app = createApp(App);
installVant(app);
app.use(router).use(store).mount("#app");
