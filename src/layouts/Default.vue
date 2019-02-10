<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          {{nameApp}}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list no-border link inset-delimiter>
          <q-list-header class="text-primary"><img src="@/assets/movpay_magenta.png" width="140px" /></q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Home" />
          </q-item>
          <q-item :to="{ name: 'Payment' }">
            <q-item-side icon="history" />
            <q-item-main label="Histórico" />
          </q-item>

          <q-item-separator />
          Minha carteira
          <q-item>
            <q-item-side icon="attach_money" />
            <q-item-main :label="myWallet" />
          </q-item>
        </q-list>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  computed: {
    nameApp () {
      return this.$store.getters['GET_NAME_APP']
    },
    myWallet () {
      return this.$store.getters['GET_WALLET']
    }
  },
  methods: {
    openURL,
  },
}
</script>

<style></style>
