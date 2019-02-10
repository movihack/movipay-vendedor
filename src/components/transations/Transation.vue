<template>
  <q-card class="bg-white">
    <q-card-title class="text-bold uppercase">Valor da compra</q-card-title>
    <q-card-main>
      <q-field icon="attach_money">
        <q-input
          float-label="Valor"
          type="tel"
          v-model.lazy="value"
          v-money="money"
        />
      </q-field>
    </q-card-main>
    <q-card-separator class="q-mt-xl"/>
    <q-card-actions class="row justify-around align-end q-py-md">
      <q-btn
        flat
        label="Cancelar"
      />
      <q-btn
        @click="token = true"
        color="primary"
        label="Próximo"
      />
    </q-card-actions>
    <modal
      :opened="token"
      :value="value"
      :valueFormated="valueTransform"
      @close="token = false"
      @reset="reset"
    />
  </q-card>
</template>

<script>
import { VMoney } from 'v-money'
import Modal from './ModalToken'
export default {
  directives: { money: VMoney },
  components: {
    Modal,
  },
  data: () => ({
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false,
    },
    value: '',
    token: false,
  }),
  methods: {
    reset () {
      this.value = ''
      this.token = false
    }
  },
  computed: {
    valueTransform() {
      const retira = currency =>
        /[R$ ]/g.test(currency)
          ? +currency.replace('R$ ', '').replace(',', '.')
          : currency
      return retira(this.value)
    },
  },
}
</script>