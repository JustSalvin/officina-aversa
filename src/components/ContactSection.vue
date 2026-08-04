<script setup>
import { officina } from '../data/content'
import MapPanel from './MapPanel.vue'
</script>

<template>
  <section id="contatti" class="section section--deep">
    <div class="contact__inner">
      <div class="contact__col">
        <h2 class="contact__title">Portala<br />in officina</h2>
        <p class="contact__lead">
          Chiamaci e raccontaci il progetto, auto o moto. Se serve vederla, si passa in
          officina: la valutazione la facciamo con il mezzo davanti.
        </p>

        <a :href="officina.telefonoHref" class="btn-call">
          Chiama ora <span>{{ officina.telefono }}</span>
        </a>

        <dl class="contact__list">
          <div>
            <dt>Indirizzo</dt>
            <dd>
              <template v-for="(riga, i) in officina.indirizzo" :key="riga">
                {{ riga }}<br v-if="i < officina.indirizzo.length - 1" />
              </template>
            </dd>
          </div>
          <div>
            <dt>Telefono</dt>
            <dd>
              <a :href="officina.telefonoHref">{{ officina.telefono }}</a>
            </dd>
          </div>
          <div>
            <dt>Orari</dt>
            <dd>
              <template v-for="(riga, i) in officina.orari" :key="riga">
                {{ riga }}<br v-if="i < officina.orari.length - 1" />
              </template>
            </dd>
          </div>
          <div>
            <dt>Social</dt>
            <dd class="contact__social">
              <a
                v-for="s in officina.social"
                :key="s.url"
                :href="s.url"
                target="_blank"
                rel="noopener"
              >
                {{ s.rete }} <span>{{ s.handle }}</span>
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <MapPanel />
    </div>
  </section>
</template>
