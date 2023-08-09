require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');
import store from './Store';
import { Form} from 'vform';

window.Form = Form;

const app = new Vue({
    el: '#right-panel',
    store
});