<template>
  <div class="wrapper" :class="{ error }">
    <input :value="value"
     :disabled="disabled"
     :readonly="readonly"
     @change="$emit('change', $event)"
     @input="$emit('change', $event)"
     @focus="$emit('focus', $event)"
     @blur="$emit('blur', $event)"
     type="text"
    >
    <template v-if="error">
      <x-icon name="info2" class="icon-error" />
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import XIcon from '@/components/xicon/xicon'

  export default {
    nane: 'x-input',
    components: {
      XIcon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        tyle: Boolean,
        default: false
      },
      readonly: {
        type:Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/index.scss";

$height: 32px;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  :not(:last-child){
    margin-right: .3rem;
  }
    >input {
      height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled], &[readonly] {
      border-color: $color-disabled;
      color: $color-disabled;
      cursor: not-allowed;
    }
  }
  &.error {
    >input{
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .error-message{
    color: $red;
  }
}
</style>
