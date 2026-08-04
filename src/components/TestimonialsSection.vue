<script setup>
import { testimonianze } from '../data/content'
</script>

<template>
  <section class="section">
    <div class="section__inner">
      <div class="quotes__head">
        <h2 class="quotes__title">Dicono di noi</h2>
        <p class="quotes__sub">Clienti dell'officina — auto e moto</p>
      </div>

      <div class="quotes__grid">
        <figure v-for="t in testimonianze" :key="t.autore" class="quote">
          <span class="quote__mark" aria-hidden="true">“</span>
          <blockquote>{{ t.testo }}</blockquote>
          <figcaption>{{ t.autore }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
