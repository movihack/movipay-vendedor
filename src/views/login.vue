<template>
  <q-page
    class="flex flex-center"
    padding
  >
    <q-card class="bg-white">
      <q-card-title>Login</q-card-title>
      <q-card-separator/>
      <q-card-main>
        <q-field
          icon="fiber_pin"
          icon-color="primary"
        >
          <q-input
            autofocus
            float-label="usuário"
            type="text"
          />
        </q-field>
        <q-field
          icon="fiber_pin"
          icon-color="primary"
        >
          <q-input
            autofocus
            float-label="senha"
            type="text"
          />
        </q-field>
      </q-card-main>
      <q-card-actions>
        <q-btn
          class="full-width"
          color="primary"
          label="entrar"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {}
</script>

<style>
</style>
