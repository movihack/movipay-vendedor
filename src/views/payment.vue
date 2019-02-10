<template>
  <q-page class="flex flex-center q-my-md">
    <q-card
      class="bg-white max-card"
      inline
    >
      <q-card-main>
        <q-timeline
          color="secondary"
          responsive
        >
          <q-timeline-entry heading>{{seller}}</q-timeline-entry>
          <q-timeline-entry
            :key="buy.id"
            side="left"
            v-for="buy in history"
          >
            <h3
              class="q-timeline-title"
              slot="title"
            >
              {{new Intl.NumberFormat('pt-BR',
              { style: 'currency', currency: 'BRL' }
              ).format(buy.value)}}
            </h3>
            <h5
              class="q-timeline-subtitle"
              slot="subtitle"
            >
              <strong class="text-bold text-secondary">{{buy.date}}</strong>
            </h5>
            <p>
              Cliente: {{buy.clientName}}
            </p>
          </q-timeline-entry>
        </q-timeline>
      </q-card-main>
    </q-card>|

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PagePayment',
  data: () => ({
    starts: '',
  }),
  computed: {
    ...mapGetters({
      history: 'GET_HISTORY_TRANSACTIONS',
      seller: 'GET_SELLER_NAME',
    }),
  },
}
</script>
<style lang="stylus" scoped>
</style>
