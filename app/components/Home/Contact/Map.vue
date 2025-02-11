<template>
  <div class="border rounded map-container min-h-[500px] md:w-[500px] w-full">
    <LMap ref="map" :zoom="zoom" :center="[41.3534, -75.7380]" :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap" />
      <LGeoJson v-if="geojsonData" :geojson="geojsonData" />
    </LMap>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const zoom = ref(9) // Adjust zoom level as needed
const geojsonData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/primo3_fixed.geojson') // Ensure the file is in /public/
    geojsonData.value = await response.json()
  } catch (error) {
    console.error('Failed to load GeoJSON:', error)
  }
})

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
