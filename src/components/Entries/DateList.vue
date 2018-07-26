<template>
  <nb-list :class="{ list: true, primary: isPurple }">
    <nb-list-item itemDivider noBorder>
      <nb-h1 v-if="isPurple" class="date">{{ date }}</nb-h1>
      <nb-text class="date" v-else>{{ date }}</nb-text>
    </nb-list-item>
    <line-display
      v-for="line in lines"
      :key="line.id"
      :year="year(line)"
      :text="line.text"
      :imageUrl="line.imageUrl" />
  </nb-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import { utils } from 'tt-module'

import LineDisplay from './LineDisplay.vue'

export default {
  name: 'DateList',
  props: ['isPurpleable', 'lines', 'date'],
  components: {
    LineDisplay,
  },
  computed: {
    isPurple() {
      return this.isPurpleable && moment().format(utils.groupByDateFormat) === this.date
    },
    year: () => utils.getYearForLine
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
  background-color: #f8f7fd;
  border-color: #7957d5;
}

</style>
