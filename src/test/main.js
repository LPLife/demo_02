import Vue from 'vue'
import App from './App.vue'
import './main.scss'
if(navigator.serviceWorker) {
    window.addEventListener('DOMContentLoade',function () {
        navigator.serviceWorker.register('/sw.js')
    })
}
new Vue ({
    el:'#app',
    render:h => h(App)
})