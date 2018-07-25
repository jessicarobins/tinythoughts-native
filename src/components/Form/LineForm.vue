<template>
  <nb-form class="form">
    <nb-textarea
      autoFocus
      bordered
      :class="{ 'line-textarea': true, focused }"
      :maxLength="280"
      v-bind:onBlur="onBlur"
      v-bind:onFocus="onFocus"
      :placeholder="prompt"
      :placeholderTextColor="placeholderColor"
      :rowSpan="10"
      v-model="text"></nb-textarea>
    <nb-text class="length">{{ length }}/280</nb-text>
    <view v-if="tags.length" class="tags">
      <nb-text class="has-text-primary tag"
        v-for="tag in tags"
        :key="tag">#{{ tag }}</nb-text>
    </view>
    <view v-else class="tags">
      <nb-text>Hint: type </nb-text>
      <nb-badge><nb-text>#tag</nb-text></nb-badge>
      <nb-text> to add </nb-text>
      <nb-text class="has-text-primary">#tag</nb-text>
      <nb-text> to your post.</nb-text>
    </view>
    <nb-button
      class="button"
      primary
      rounded
      :onPress="debouncedOnSubmit">
      <nb-text>
        Save
      </nb-text>
    </nb-button>
  </nb-form>
</template>

<script>
import debounce from 'lodash/debounce'
import { Toast } from 'native-base'
import { utils } from 'tt-module'

export default {
  name: 'LineForm',
  props: ['handleSubmit', 'prompt'],
  data() {
    return {
      focused: false,
      text: '',
    };
  },
  methods: {
    // vue sucks
    // eslint-disable-next-line func-names
    debouncedOnSubmit: debounce(function () {
      this.onSubmit()
    }, 1000, { leading: true }),
    onSubmit() {
      if (this.text.length) {
        return this.handleSubmit({
          text: this.text,
          tags: this.tags
        });
      }

      Toast.show({
        text: "You've got to say something!",
        duration: 3000
      })
    },
    onBlur() {
      this.focused = false
    },
    onFocus() {
      this.focused = true
    }
  },
  computed: {
    placeholderColor() {
      if (this.focused) {
        return "#dbdbdb"
      }

      return "#7957D5"
    },
    tags() {
      return utils.getTagsFromLine(this.text)
    },
    length() {
      return this.text.length
    }
  },
};
</script>

<style>
.line-textarea {
  border-radius: 4px;
  font-size: 30px;
  width: 100%;
}

.focused {
  border-color: #7957d5;
}

.length {
  color: #4a4a4a;
  text-align: right;
}

.button {
  align-self: flex-end;
  margin-top: 20px;
}

.form {
  margin-bottom: 20px;
}

.has-text-primary {
  color: #7957D5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
}

.tag {
  margin-right: 4px;
}
</style>
