<template>
  <nb-content padder class="content">
    <entry-list />
  </nb-content>
</template>

<script>
import EntryList from '../components/Entries/EntryList'

export default {
  name: 'Home',
  components: {
    EntryList
  }
};
</script>

<style>
.content {
  background-color: white;
}
</style>
