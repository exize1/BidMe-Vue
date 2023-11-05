
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandPointUp, faEyeSlash, faEye, faArrowRight, faPen, faEllipsis, faLink, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'



const app = createApp(App)


library.add(faHandPointUp, faEye, faEyeSlash, faArrowRight, faPen, faEllipsis, faLink, faRightFromBracket)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.use(router)

app.mount('#app')
