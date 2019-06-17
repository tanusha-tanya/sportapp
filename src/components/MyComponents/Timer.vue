<template>
  <div class="timer">
      {{currentTime}} sec
  </div>
</template>
<script>
export default {
  props: ['currentTime'],
  data() {
    return{
      timer: null,
    }
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
  },
  watch: {
    currentTime(time) {      
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
}
</script>
<style scoped>
  .timer{
    color: #9c27b0;
  }
</style>
