
<script>
export default {
  name: 'Button'
}
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
  button {
    padding: 8px 16px;
    border: none;
  }
</style>