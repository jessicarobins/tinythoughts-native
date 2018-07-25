<template>
  <nb-content padder class="content">
    <view v-if="tag" class="tag-header">
      <nb-h1 class="tag">#{{ tag }}</nb-h1>
      <nb-button transparent primary :onPress="handleClear">
        <nb-text>clear</nb-text>
      </nb-button>
    </view>
    <new-line-form v-if="showForm" />
    <entry-list :tag="tag" :key="tag" :loading="linesAreLoading" />
  </nb-content>
</template>

<script>
import { mapGetters } from 'vuex'
import EntryList from '../components/Entries/EntryList.vue'
import NewLineForm from '../components/Form/NewLineForm.vue'
import TagButton from '../components/TagButton'

export default {
  name: 'Home',
  props: ['navigation'],
  components: {
    EntryList,
    NewLineForm,
    TagButton
  },
  computed: {
    ...mapGetters([
      'hasToday',
      'linesAreLoading',
    ]),
    showForm() {
      return !this.linesAreLoading && !this.hasToday && !this.tag
    },
    tag() {
      return this.navigation.getParam('tag')
    }
  },
  methods: {
    handleClear() {
      this.navigation.navigate('Home', { tag: null })
    }
  }
};
</script>

<style>
.content {
  background-color: white;
}

.tag {
  font-family: SpecialElite;
  margin-top: 10px;
  margin-bottom: 10px;
}

.tag-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
