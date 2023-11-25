<script setup lang="ts">
import { FieldPropsDefine } from '../types'

const props = defineProps(FieldPropsDefine)

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  props.onChange(target.value)
}
</script>
<template>
  <input type="text" :value="value" @input="handleChange" />
</template>
<style lang="scss" scoped></style>
