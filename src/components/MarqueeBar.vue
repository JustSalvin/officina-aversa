<script setup>
import { marquee } from '../data/content'
</script>

<template>
  <section class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <div v-for="copia in 2" :key="copia" class="marquee__group">
        <template v-for="voce in marquee" :key="`${copia}-${voce}`">
          <span>{{ voce }}</span>
          <span>·</span>
        </template>
      </div>
    </div>
  </section>
</template>
