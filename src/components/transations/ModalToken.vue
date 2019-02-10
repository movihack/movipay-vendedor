<template>
  <q-modal
    :content-css="{minWidth: '80vw', minHeight: '80vh'}"
    v-model="opened"
  >
    <q-modal-layout >
      <q-toolbar slot="header">
        <q-btn
          @click="$emit('close')"
          dense
          flat
          icon="keyboard_arrow_left"
          round
          v-close-overlay
        />
        <q-toolbar-title>Token do cliente</q-toolbar-title>
      </q-toolbar>
      <div class="layout-padding">
        <q-card class="bg-secondary q-py-md">
          <q-card-main class="column justify-center items-center text-white">
            <em class="text-bold uppercase q-pb-sm">valor a ser cobrado</em>
            <span class="q-display-1">{{value}}</span>
          </q-card-main>
        </q-card>
        <q-card class="bg-white q-my-md">
          <q-card-main>
            <q-field
              icon="fiber_pin"
              icon-color="primary"
            >
              <q-input
                autofocus
                clearable
                float-label="Token"
                max-length="6"
                type="text"
                upper-case
                v-model="userToken"
              />
            </q-field>
          </q-card-main>
          <q-card-actions>
            <q-btn
              :disabled="!validTokenMatch"
              color="primary"
              @click="pay"
              label="pagar"
              :loading="loading"
              class="full-width"
            />
          </q-card-actions>
        </q-card>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import { getValidationTokenUserPayment } from '@serv/api'
import { Notify } from 'quasar'
export default {
  props: {
    opened: {
      required: true,
      type: Boolean,
      default: () => true,
    },
    value: {
      required: true,
      type: String,
      default: () => 'R$ 0,00',
    },
    valueFormated: {
      required: true,
      type: [String, Number],
      default: () => 0,
    },
  },
  data: () => ({
    userToken: '',
    loading: false,
    validTokenMatch: false,
    lat: '8.060554',
    long: '34.871832'
  }),
  methods: {
    pay () {
      this.loading = true
      getValidationTokenUserPayment({
        token: this.userToken,
        value: this.valueFormated,
        lat: this.lat,
        long: this.long
      }).then(response => {
        Notify.create({
          message: 'Venda realizada com sucesso!',
          type: 'positive',
          icon: 'done'
        })
        this.$emit('close')
        this.$emit('reset')
      })
      .catch(error => {
        Notify.create({
          message: 'Erro na transação, tente novamente!',
          type: 'negative',
          icon: 'close'
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 1500)
        })
      })
      this.loading = true
      setTimeout(() => this.loading = false, 3000)
    }
  },
  watch: {
    userToken(userToken) {
      const len = token => token.length === 6
      const letters = token => /(.*\w.*){2}/g.test(token)
      const numbersFour = token => /(.*\d.*){4}/g.test(token)
      const numbersSix = token => /(.*\d.*){6}/g.test(token)

      const token = token =>
        len =>
          letters =>
            numbersFour =>
              numbersSix =>
                len(token) &&
                ((letters(token) && numbersFour(token)) || numbersSix(token))
      token(userToken)(len)(letters)(numbersFour)(numbersSix)
        ? this.validTokenMatch = true
        : this.validTokenMatch = false
    },
  },
}
</script>

<style>
</style>
