<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <view class="list-header">
        <nb-thumbnail :source="logo" class="thumbnail" />
        <nb-text>{{ userEmail }}</nb-text>
      </view>
      <nb-list>
        <nb-list-item
          v-for="link in links"
          :key="link.route"
          button
          :onPress="() => handleListItemClick(link)">
          <nb-left>
            <nb-icon
              active
              :name="link.icon"
              :style="{ color: '#777', fontSize: 26, width: 30 }"
            />
            <nb-text>
              {{link.name}}
            </nb-text>
          </nb-left>
        </nb-list-item>
        <nb-list-item button :onPress="userSignOut">
          <nb-left>
            <nb-icon
              active
              name="ios-log-out"
              :style="{ color: '#777', fontSize: 26, width: 30 }"
            />
            <nb-text>
              Log out
            </nb-text>
          </nb-left>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import logo from '../assets/images/notebook.png'

export default {
  props: ['navigation'],
  data() {
    return {
      logo,
      links: [{
        name: 'Home',
        route: 'Home',
        icon: 'ios-home',
      }]
    };
  },
  computed: {
    ...mapGetters([
      'userEmail'
    ]),
  },
  methods: {
    ...mapActions([
      'userSignOut'
    ]),
    handleSignOut() {
      this.userSignOut()
    },
    handleListItemClick(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}

.list-header {
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-color: #dbdbdb;
  border-bottom-width: 1px;
  border-style: solid;
}

.list-item-badge-text {
  text-align: center;
}

.thumbnail {
  margin-right: 20px;
}
</style>

