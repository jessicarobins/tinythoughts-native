<template>
  <view>
    <full-page-spinner v-if="loading" />
    <date-list
      v-for="entry in lines"
      :is-purpleable="isPurpleable"
      :key="entry[0]"
      :date="entry[0]"
      :lines="entry[1]"
      v-else />
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Image } from 'react-native'
import { utils } from 'tt-module'

import DateList from './DateList.vue'
import FullPageSpinner from '../FullPageSpinner.vue'

export default {
  name: 'EntryList',
  props: ['loading', 'tag'],
  components: {
    DateList,
    FullPageSpinner,
    Image,
  },
  data() {
    return {
      modalImageUrl: null
    }
  },
  mounted() {
    this.getLines({ tag: this.tag })
  },
  computed: {
    ...mapGetters([
      'hasToday',
      'lines',
    ]),
    isPurpleable() {
      return this.hasToday && !this.tag
    },
    year: () => utils.getYearForLine
  },
  methods: {
    ...mapActions([
      'getLines'
    ]),
  },
};
</script>

<style>
.list {
  background-color: whitesmoke;
  border-radius: 4px;
  margin-bottom: 20px;
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-left-width: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.primary {
  border-color: #7957d5;
  color: #5534ae;
}

.date {
  font-family: SpecialElite;
}

.year {
  margin-bottom: 5px;
}

.message.is-primary {
  background-color: #f8f7fd;
}

</style>
