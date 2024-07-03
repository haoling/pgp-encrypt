import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'

/**
 * ★ 以下のJSDocの記述を行うことでインテリセンスが効くようになる
 * @type { import("vue") }
 */
createApp(App)
.mount('#app')
