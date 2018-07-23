<template>
  <nb-content padder class="content">
    <new-line-form v-if="showForm" />
    <entry-list />
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
      'isAuthenticated',
      'hasToday',
      'linesAreLoading',
    ]),
    showForm() {
      return !this.linesAreLoading && !this.hasToday
    },
  },
  watch: {
    isAuthenticated(value) {
      if (!value) {
        this.navigation.navigate('Auth')
      }
    }
  }
};
</script>

<style>
.content {
  background-color: white;
}
</style>
