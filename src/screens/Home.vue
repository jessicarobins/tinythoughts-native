<template>
  <nb-content padder class="content">
    <new-line-form v-if="showForm" />
    <entry-list :tag="tag" />
  </nb-content>
</template>

<script>
import { mapGetters } from 'vuex'
import EntryList from '../components/Entries/EntryList.vue'
import NewLineForm from '../components/Form/NewLineForm.vue'

export default {
  name: 'Home',
  props: ['navigation'],
  components: {
    EntryList,
    NewLineForm,
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
};
</script>

<style>
.content {
  background-color: white;
}
</style>
