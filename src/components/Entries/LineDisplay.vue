<template>
  <nb-list-item
    noBorder
    :thumbnail="imageUrl && text.length > 0">
    <nb-left v-if="imageUrl && text && text.length > 0">
      <lightbox :imageUrl="imageUrl">
        <nb-thumbnail :source="{ uri: imageUrl }" />
      </lightbox>
    </nb-left>
    <nb-body>
      <nb-text note :numberOfLines="1" class="year">{{ year }}</nb-text>
      <view v-if="text && text.length > 0" class="tag-container">
        <view v-for="(word, index) in words" :key="index">
          <nb-button v-if="word.startsWith('#')" transparent primary class="tag-button">
            <nb-text class="tag">{{ word }}</nb-text>
          </nb-button>
          <nb-text v-else class="tag">{{ word }}</nb-text>
        </view>
      </view>
      <lightbox :imageUrl="imageUrl" v-else />
    </nb-body>
  </nb-list-item>
</template>

<script>
import { Image, TouchableHighlight } from 'react-native'
import Lightbox from '../Lightbox'

export default {
  name: 'LineDisplay',
  props: ['imageUrl', 'text', 'year'],
  components: {
    Image,
    Lightbox,
    TouchableHighlight
  },
  computed: {
    words() {
      return this.text.split(/\s/)
    }
  },
};
</script>

<style>
.year {
  margin-bottom: 5px;
  margin-left: 0px;
}

.tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.tag {
  margin-left: 0px;
  margin-right: 3px;
  padding-left: 0px;
  padding-right: 0px;
}

.tag-button {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  height: auto;
}
</style>
