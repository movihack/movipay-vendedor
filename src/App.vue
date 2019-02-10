<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { Notify } from 'quasar'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ online: 'ONLINE' })
  },
  mounted () {
    window.addEventListener('online', this.networkStatus)
    window.addEventListener('offline', this.networkStatus)
  },
  methods: {
    networkStatus () {
      this.$store.commit('SET_ONLINE', navigator.onLine)
    },
  },
  watch: {
    online (value) {
      this.networkStatus
      value
        ? Notify.create({
            message: 'Você está online',
            color: 'teal-13 text-black',
            icon: 'signal_wifi_4_bar'
          })
        : Notify.create({
          message: 'Você esta sem conexão',
          type: 'negative',
          icon: 'signal_wifi_off'
        })
    }
  }
}
</script>

|<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  background-image radial-gradient(circle, #eb348b, #cb2b8e, #a9278d, #85258a, #602483)

.max-card
  max-width 90vw
  width 100%
.half-height
  height 50vh
.input-token
  max-width 10vw
</style>