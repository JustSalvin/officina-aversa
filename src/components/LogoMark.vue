<script setup>
// Marchio Officina Aversa: dado esagonale con la A di Aversa ricavata in negativo.
// Il colore del dado segue currentColor, così il mark si adatta ai fondi chiari e scuri.
defineProps({
  size: { type: [Number, String], default: 22 }
})
</script>

<template>
  <svg
    class="logo-mark"
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    role="img"
    aria-label="Officina Aversa"
    focusable="false"
  >
    <path d="M32 2 58 17v30L32 62 6 47V17Z" fill="currentColor" />
    <path
      fill-rule="evenodd"
      d="M32 15 47.5 50.5h-8.8l-2.4-5.8h-8.6l-2.4 5.8H16.5Zm0 14.6-3.1 8h6.2Z"
      fill="#101010"
    />
  </svg>
</template>
