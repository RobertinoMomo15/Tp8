import Vue from "vue";
import VueRouter from "vue-router";

import Form from './componentes/Formulario.vue'
import Usuarios from './componentes/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : "history",
    routes : [
        {path : '/', redirect : '/form'},
        {path : '/form', component : Form},
        {path : '/usuarios', component : Usuarios}
    ]
})
