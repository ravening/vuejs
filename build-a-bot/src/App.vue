<template>
  <div id="app">
    Root foo: {{ rootFoo }}<br/>
    Robots foo: {{ robotsFoo }} <br/>
    Users foo: {{ usersFoo }} <br/>
    <br/>
    Root getter foo: {{ rootGetterFoo }} <br/>
    Robots getter foo: {{ robotsGetterFoo }} <br/>
    Users getter foo: {{ usersGetterFoo }} <br/>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
              Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" :to="{name: 'Cart'}" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
    </div>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
// import RobotBuilder from './build/RobotBuilder.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapState({
      rootFoo: 'foo',
      cart: (state) => state.robots.cart,
      robotsFoo: (state) => state.robots.foo,
      usersFoo: (state) => state.users.foo,
    }),
    ...mapGetters({
      rootGetterFoo: 'foo',
    }),
    ...mapGetters(
      'robots', { robotsGetterFoo: 'foo' },
    ),
    ...mapGetters(
      'users', { usersGetterFoo: 'foo' },
    ),
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
.robot-name {
  color: red;
  border: 2px solid blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: blueviolet;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaaaaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
