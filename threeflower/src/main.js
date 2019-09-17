import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
=======
>>>>>>> 66c0beafded21e2d246ce442ae9335f096bf2ab5

Vue.prototype.$ajax = Axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
