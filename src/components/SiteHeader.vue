<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { nav, officina } from '../data/content'
import LogoMark from './LogoMark.vue'

const attiva = ref('')
let observer = null

onMounted(() => {
  const sezioni = nav
    .map((v) => document.querySelector(v.href))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) attiva.value = `#${e.target.id}`
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )

  sezioni.forEach((s) => observer.observe(s))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <header class="site-header">
    <a href="#top" class="brand">
      <LogoMark class="brand__mark" :size="24" />
      <span class="brand__name">{{ officina.nome }}</span>
    </a>

    <nav class="site-nav" aria-label="Navigazione principale">
      <a
        v-for="voce in nav"
        :key="voce.href"
        :href="voce.href"
        :class="{ 'is-active': attiva === voce.href }"
      >
        {{ voce.label }}
      </a>
    </nav>

    <a :href="officina.telefonoHref" class="header-cta">
      Chiama ora
      <span class="header-cta__num">{{ officina.telefono }}</span>
    </a>
  </header>
</template>
