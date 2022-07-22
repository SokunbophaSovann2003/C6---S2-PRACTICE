import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar'
import FormInput from './components/FormInput'
import CardList from './components/CardList'
const app = createApp(App);

app.component("nav-bar", NavBar)
app.component("form-input", FormInput)
app.component("card-list", CardList)
app.mount('#app')
