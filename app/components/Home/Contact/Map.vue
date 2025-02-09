<template>
  <div style="width:500px" class="border rounded map-container">
    <LMap ref="map" :zoom="zoom" :center="[41.4712, -75.6086]" :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap" />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(13) // Adjusted zoom level for better city view
</script>


<style scoped>
.map-container {
  height: 100%;
}

.leaflet-container {
  background: #000;
  height: 100%;
}
</style>