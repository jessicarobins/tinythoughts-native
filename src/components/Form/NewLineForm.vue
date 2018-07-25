<template>
  <view class="form-container">
    <nb-h1 class="date">{{ todaysDate }}</nb-h1>
    <line-form :handle-submit="addLine" :prompt="prompt" v-if="!promptsAreLoading" />
  </view>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
import LineForm from './LineForm.vue'

export default {
  name: 'NewLineForm',
  components: {
    LineForm
  },
  mounted() {
    this.getPrompts()
  },
  computed: {
    ...mapGetters([
      'prompt',
      'promptsAreLoading'
    ]),
    todaysDate() {
      return moment().format('MMMM D, YYYY');
    },
  },
  methods: {
    ...mapActions([
      'addLine',
      'getPrompts'
    ]),
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 40px;
  margin-bottom: 20px;
}

.date {
  font-family: SpecialElite;
  margin-bottom: 20px;
  text-align: right;
}
</style>
