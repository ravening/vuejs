import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

Vue.config.productionTip = false

let app = '';

const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your auth domain",
  databaseURL: "your database url",
  projectId: "your project id",
  storageBucket: "your storage bucket",
  messagingSenderId: "your messaging sender id",
  appId: "your app id"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
