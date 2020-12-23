<template>
  <view class="content">
    <view>
      <text class="title">
        {{ title }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  async onLoad() {
    console.log(this.$u.config.v)
  },
  methods: {

  }
}
</script>

<style>
</style>
