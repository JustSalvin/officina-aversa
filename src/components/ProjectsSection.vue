<script setup>
import { progetti } from '../data/content'
</script>

<template>
  <section id="progetti" class="section section--deep">
    <div class="section__inner">
      <div class="section__head">
        <div class="section__head-text">
          <h2 class="section__title">Progetti</h2>
          <p class="section__lead">
            Lavori usciti dalla nostra officina, con le specifiche come le abbiamo
            consegnate al cliente.
          </p>
        </div>
        <span class="section__tag">selezione / archivio officina</span>
      </div>

      <div class="projects__grid">
        <article v-for="p in progetti" :key="p.titolo" class="project">
          <div class="project__shot">
            <img :src="p.img" :alt="p.alt" loading="lazy" />
          </div>
          <div class="project__body">
            <h3 class="project__title">{{ p.titolo }}</h3>
            <p class="project__spec">{{ p.specifica }}</p>
            <p class="project__text">{{ p.testo }}</p>
            <p class="project__caption">{{ p.didascalia }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
