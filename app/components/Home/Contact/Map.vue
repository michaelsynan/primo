<template>
  <div class="border rounded map-container min-h-[500px] md:w-[500px] w-full">
    <LMap ref="map" :zoom="zoom" :center="[41.3534, -75.7380]" :zoomControl="false" :scrollWheelZoom="false"
      :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors" layer-type="base" name="OpenStreetMap" />
      <LGeoJson v-if="geojsonData" :geojson="geojsonData" :style="getGeoJsonStyle" />
    </LMap>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

const zoom = ref(9);
const geojsonData = ref(null);

function getGeoJsonStyle(feature) {
  return {
    color: "red",
    weight: 10,
    opacity: 1,
    fillColor: "yellow",
    fillOpacity: 0.8
  };
}

onMounted(async () => {
  try {
    const response = await fetch('/primo3_fixed.geojson');
    geojsonData.value = await response.json();
  } catch (error) {
    console.error('Failed to load GeoJSON:', error);
  }
});
</script>

<style scoped>
.map-container {
  height: 100%;
}

::v-deep(.leaflet-container) {
  background: #181818 !important;
  color: #ffffff;
}

::v-deep(.leaflet-tile) {
  filter: brightness(0.8) invert(1);
}

::v-deep(.leaflet-control) {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}

::v-deep(.leaflet-popup-content) {
  background: #333;
  color: #fff;
}
</style>
