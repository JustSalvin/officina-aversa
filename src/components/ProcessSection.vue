<script setup>
import { processo } from '../data/content'
</script>

<template>
  <section id="processo" class="section">
    <div class="section__inner process__inner">
      <div class="process__intro">
        <h2 class="process__title">Come si<br />lavora qui</h2>
        <p class="process__lead">
          Nessun preventivo al buio. Prima si misura, poi si decide, poi si tocca la
          macchina.
        </p>
      </div>

      <ol class="process__list">
        <li v-for="f in processo" :key="f.num" class="step">
          <span class="step__num">{{ f.num }}</span>
          <div class="step__body">
            <h3 class="step__title">{{ f.titolo }}</h3>
            <p class="step__text">{{ f.testo }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
