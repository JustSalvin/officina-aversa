<script setup>
import { servizi } from '../data/content'
</script>

<template>
  <section id="servizi" class="section">
    <div class="section__inner">
      <div class="section__head">
        <div class="section__head-text">
          <h2 class="section__title">Cosa facciamo</h2>
          <p class="section__lead">
            Otto reparti, un'unica officina: dalla mappa scritta al banco al pezzo
            tornito a mano, su auto e su moto.
          </p>
        </div>
        <span class="section__tag">08 reparti</span>
      </div>

      <div class="services__grid">
        <article v-for="s in servizi" :key="s.num" class="service">
          <span class="service__num">{{ s.num }}</span>
          <h3 class="service__title">{{ s.titolo }}</h3>
          <p class="service__text">{{ s.testo }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
