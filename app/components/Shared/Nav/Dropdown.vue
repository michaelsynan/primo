<script setup lang="ts"></script>

<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/sewer-diagnosis-inspection">Diagnosis & Inspection</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/plumbing-video-camera-pipe-inspection">Video Camera Pipe Inspection</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/sewer-drain-cleaning-repair">Sewer & Drain Cleaning & Repairs</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/high-pressure-water-jetting">High Pressure Water Jetting</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/water-heater-repair-replacement">Water Heater Repair & Replacement</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li:not(:last-child) {
  margin-bottom: 10px;
  /* Adds space below each li except the last one */
}
</style>
