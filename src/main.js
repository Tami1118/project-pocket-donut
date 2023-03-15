// 匯入套件方法
// import {...} from '...'

// 匯入資料夾
// import ... from './..'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


// axios
import axios from 'axios'
import VueAxios from 'vue-axios'


// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
// import './assets/main.css'
import './assets/all.scss'


// fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'


// swiper
// import Swiper from 'swiper'
// import 'swiper/css'


// vee-validate


// CKEditor






// 外部套件引入
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

// font awsome
library.add( faBars )
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
