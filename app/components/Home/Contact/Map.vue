<template>
  <div class="border rounded map-container min-h-[500px] md:w-[500px] w-full relative">
    <LMap ref="map" :zoom="zoom" :center="center" :zoomControl="false" :scrollWheelZoom="false"
      :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors" layer-type="base" name="OpenStreetMap" />
      <LGeoJson v-if="geojsonData" :geojson="geojsonData" :style="getGeoJsonStyle" />
    </LMap>
    <p @click="recenterMap" class="text-xs text-start text-gray-400 mt-2 cursor-pointer hover:underline">
      Click to recenter map
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

const zoom = ref(9);
const center = ref([41.3534, -75.7380]); // Store center as reactive
const geojsonData = ref(null);
const map = ref(null); // Reference to the map

function getGeoJsonStyle(feature) {
  return {
    color: "red",
    weight: 10,
    opacity: 1,
    fillColor: "yellow",
    fillOpacity: 0.8
  };
}

const recenterMap = () => {
  if (map.value) {
    map.value.leafletObject.setView(center.value, zoom.value);
  }
};

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
