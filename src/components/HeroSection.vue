<script setup>
const passi = [
  '01 / Diagnosi e banco',
  '02 / Progetto e fabbricazione',
  '03 / Messa a punto in pista'
]
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__inner">
      <p class="hero__kicker">
        Piazza di Pandola — Avellino / auto e moto / dal metallo alla strada
      </p>

      <h1 class="hero__title">
        Non ripariamo<br />auto e moto.<em> Le rifacciamo.</em>
      </h1>

      <div class="hero__grid">
        <div class="hero__copy">
          <p class="hero__text">
            Officina Aversa è un laboratorio meccanico per auto e moto. Rimappiamo,
            prepariamo motori, costruiamo pezzi che non esistono in catalogo e portiamo
            a termine progetti che nessun altro vuole prendere in mano. Ogni lavoro esce
            da qui firmato.
          </p>
          <p class="hero__meta">
            Quattro e due ruote · stradali, track car, storiche · un progetto alla volta
          </p>
        </div>

        <div class="hero__steps">
          <span v-for="passo in passi" :key="passo">{{ passo }}</span>
        </div>
      </div>
    </div>

    <figure class="hero__shot">
      <img
        src="/img/hero.jpg"
        alt="Moto in preparazione sul cavalletto all'interno dell'Officina Aversa"
        fetchpriority="high"
      />
      <figcaption class="caption">
        Reparto due ruote — Piazza di Pandola (AV)
      </figcaption>
    </figure>
  </section>
</template>
