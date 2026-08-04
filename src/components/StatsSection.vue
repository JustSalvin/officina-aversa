<script setup>
import { numeri } from '../data/content'
</script>

<template>
  <section class="section">
    <div class="shell">
      <div class="stats__grid">
        <div v-for="n in numeri" :key="n.label" class="stat">
          <p class="stat__value" :class="{ 'stat__value--accent': n.accent }">
            {{ n.valore }}
          </p>
          <p class="stat__label">{{ n.label }}</p>
        </div>
      </div>
      <p class="stats__note">
        Dati aggiornati al 2026 — registro interno officina, auto e moto
      </p>
    </div>
  </section>
</template>
