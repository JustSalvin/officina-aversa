<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { galleria } from '../data/content'

const aperta = ref(null)
const scatto = computed(() => (aperta.value === null ? null : galleria[aperta.value]))

function apri(i) {
  aperta.value = i
}

function chiudi() {
  aperta.value = null
}

function scorri(passo) {
  if (aperta.value === null) return
  aperta.value = (aperta.value + passo + galleria.length) % galleria.length
}

function tasti(e) {
  if (aperta.value === null) return
  if (e.key === 'Escape') chiudi()
  if (e.key === 'ArrowRight') scorri(1)
  if (e.key === 'ArrowLeft') scorri(-1)
}

// blocca lo scroll della pagina mentre il visore è aperto
watch(aperta, (v) => {
  document.body.style.overflow = v === null ? '' : 'hidden'
})

onMounted(() => window.addEventListener('keydown', tasti))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', tasti)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="galleria" class="section">
    <div class="section__inner">
      <div class="section__head">
        <div class="section__head-text">
          <h2 class="section__title">Dall'officina</h2>
          <p class="section__lead">
            Scatti presi durante il lavoro: banchi, motori aperti, telai in saldatura e
            pezzi che tornano a posto.
          </p>
        </div>
        <span class="section__tag">{{ galleria.length }} scatti</span>
      </div>

      <div class="gallery__grid">
        <button
          v-for="(g, i) in galleria"
          :key="g.img"
          type="button"
          class="shot"
          @click="apri(i)"
        >
          <img :src="g.img" :alt="g.alt" loading="lazy" />
          <span class="shot__meta">
            <span class="shot__tag">{{ g.tag }}</span>
            <span class="shot__title">{{ g.titolo }}</span>
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="scatto"
      class="viewer"
      role="dialog"
      aria-modal="true"
      :aria-label="scatto.titolo"
      @click.self="chiudi"
    >
      <button type="button" class="viewer__btn viewer__btn--close" aria-label="Chiudi" @click="chiudi">
        ✕
      </button>
      <button type="button" class="viewer__btn viewer__btn--prev" aria-label="Precedente" @click="scorri(-1)">
        ←
      </button>
      <figure class="viewer__figure">
        <img :src="scatto.img" :alt="scatto.alt" />
        <figcaption>
          <span class="shot__tag">{{ scatto.tag }}</span>
          {{ scatto.titolo }}
        </figcaption>
      </figure>
      <button type="button" class="viewer__btn viewer__btn--next" aria-label="Successivo" @click="scorri(1)">
        →
      </button>
    </div>
  </section>
</template>
