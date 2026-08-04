<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { officina } from '../data/content'

const contenitore = ref(null)
let mappa = null

onMounted(() => {
  const { lat, lon, zoom } = officina.mappa

  mappa = L.map(contenitore.value, {
    center: [lat, lon],
    zoom,
    scrollWheelZoom: false, // niente trappole di scroll durante la lettura della pagina
    attributionControl: true
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(mappa)

  // pin coerente con il design: pallino arancione con alone
  const pin = L.divIcon({
    className: 'map-pin',
    html: '<span class="map-pin__dot"></span>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  })

  L.marker([lat, lon], { icon: pin, title: officina.nome })
    .addTo(mappa)
    .bindPopup(
      `<strong>${officina.nome}</strong><br />${officina.indirizzo.join('<br />')}`
    )
})

onBeforeUnmount(() => {
  mappa?.remove()
  mappa = null
})
</script>

<template>
  <div class="contact__map">
    <div ref="contenitore" class="contact__map-canvas" aria-label="Mappa dell'officina"></div>
    <a
      class="contact__directions"
      :href="officina.mappa.indicazioni"
      target="_blank"
      rel="noopener"
    >
      Come arrivare ↗
    </a>
  </div>
</template>
