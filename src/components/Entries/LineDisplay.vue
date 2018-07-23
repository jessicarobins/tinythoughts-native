<template>
  <nb-list-item
    noBorder
    :thumbnail="line.imageUrl && line.text.length > 0">
    <nb-left v-if="line.imageUrl && line.text && line.text.length > 0">
      <lightbox :imageUrl="line.imageUrl">
        <nb-thumbnail :source="{ uri: line.imageUrl }" />
      </lightbox>
    </nb-left>
    <nb-body>
      <nb-text note :numberOfLines="1" class="year">{{ year(line) }}</nb-text>
      <nb-text v-if="line.text && line.text.length > 0">{{ line.text }}</nb-text>
      <lightbox :imageUrl="line.imageUrl" v-else />
    </nb-body>
  </nb-list-item>
</template>

<script>
import { Image, TouchableHighlight } from 'react-native'
import { utils } from 'tt-module'
import Lightbox from '../Lightbox'

export default {
  name: 'LineDisplay',
  props: ['line'],
  components: {
    Image,
    Lightbox,
    TouchableHighlight
  },
  computed: {
    year: () => utils.getYearForLine
  },
};
</script>

<style>
.year {
  margin-bottom: 5px;
}
</style>
