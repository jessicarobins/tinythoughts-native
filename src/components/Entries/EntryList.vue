<template>
  <view>
    <nb-list v-for="entry in lines" :key="entry[0]" class="list">
      <nb-list-item itemDivider>
        <nb-text class="date">{{ entry[0] }}</nb-text>
      </nb-list-item>
      <nb-list-item
        v-for="line in entry[1]"
        :thumbnail="line.imageUrl && line.text.length > 0">
        <nb-left v-if="line.imageUrl && line.text && line.text.length > 0">
          <nb-thumbnail :source="{ uri: line.imageUrl }" />
        </nb-left>
        <nb-body>
          <nb-text note :numberOfLines="1" class="year">{{ year(line) }}</nb-text>
          <nb-text v-if="line.text && line.text.length > 0">{{ line.text }}</nb-text>
          <image v-else :source="{ uri: line.imageUrl }" :style="{ width: '100%', height: 200 }" />
        </nb-body>
      </nb-list-item>
    </nb-list>
    <nb-spinner v-if="linesAreLoading" />
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Image } from 'react-native'
import { utils } from 'tt-module'

export default {
  name: 'EntryList',
  props: ['tag'],
  components: {
    Image
  },
  mounted() {
    this.getLines({ tag: this.tag })
  },
  computed: {
    ...mapGetters([
      'hasToday',
      'lines',
      'linesAreLoading',
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
  margin-bottom: 15px;
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-left-width: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.date {
  font-family: SpecialElite;
}

.year {
  margin-bottom: 5px;
}

.message.is-white {
  background-color: white;
}

.message.is-white .message-header {
  background-color: white;
  color: #0a0a0a;
}

.message.is-white .message-body {
  border-color: white;
  color: #4d4d4d;
}

.message.is-black {
  background-color: #fafafa;
}

.message.is-black .message-header {
  background-color: #0a0a0a;
  color: white;
}

.message.is-black .message-body {
  border-color: #0a0a0a;
  color: #090909;
}

.message.is-light {
  background-color: #fafafa;
}

.message.is-light .message-header {
  background-color: whitesmoke;
  color: #363636;
}

.message.is-light .message-body {
  border-color: whitesmoke;
  color: #505050;
}

.message.is-dark {
  background-color: #fafafa;
}

.message.is-dark .message-header {
  background-color: #363636;
  color: whitesmoke;
}

.message.is-dark .message-body {
  border-color: #363636;
  color: #2a2a2a;
}

.message.is-primary {
  background-color: #f8f7fd;
}

.message.is-primary .message-body {
  border-color: #7957d5;
  color: #5534ae;
}

.message.is-link {
  background-color: #f8f7fd;
}

.message.is-link .message-body {
  border-color: #7957d5;
  color: #5534ae;
}

.message.is-info {
  background-color: #f5fafe;
}

.message.is-info .message-body {
  border-color: #167df0;
  color: #115199;
}

.message.is-success {
  background-color: #f6fef9;
}

.message.is-success .message-body {
  border-color: #23d160;
  color: #0e301a;
}

.message.is-warning {
  background-color: #fffdf5;
}

.message.is-warning .message-body {
  border-color: #ffdd57;
  color: #3b3108;
}

.message.is-danger {
  background-color: #fff5f7;
}

.message.is-danger .message-body {
  border-color: #ff3860;
  color: #cd0930;
}

.message-header + .message-body {
  border-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.message-body {
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 12px 15px;
}

.message-body code,
.message-body pre {
  background-color: white;
}
</style>
