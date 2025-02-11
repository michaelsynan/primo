<script setup lang="ts">
const servicesData = [
  {
    icon: '/wrench.svg',
    header: 'Diagnosis & Inspection',
    description: 'Our technicians fully inspect and properly diagnose your issue at low cost with professionalism & enthusiasm for all your clogs, leaks, and repairs!',
    link: '/sewer-diagnosis-inspection'
  },
  {
    icon: '/camera.svg',
    header: 'Video Camera Pipe Inspection',
    description: 'Specially Designed Cameras allows technicians to conduct a visual inspection of your sewer line and other underground pipes to detect breaks and blockages.',
    link: '/plumbing-video-camera-pipe-inspection'
  },
  {
    icon: '/pipe.svg',
    header: 'Sewer & Drain Cleaning & Repairs',
    description: 'Have your line cleaned to remove roots and clogs before a messy backup occurs. We will fix all your internal & external underground pipe repairs caused by cracks and corrosion.',
    link: '/sewer-drain-cleaning-repair'
  },
  {
    icon: '/faucet.svg',
    header: 'High Pressure Water Jetting',
    description: 'Depending on the type of blockage detected, Jetting can be the most efficient way to clean your sewer or drain line without the use of any harmful chemicals.',
    link: '/high-pressure-water-jetting'
  },
  {
    icon: '/worker.svg',
    header: 'Water Heater Repair & Replacement',
    description: 'Your water heater plays a critical role in your home. It provides you with the hot water you need to shower, wash dishes, and much more!',
    link: '/water-heater-repair-replacement'
  },
  {
    icon: '/worker.svg',
    header: 'Water Heater Repair & Replacement',
    description: 'Your water heater plays a critical role in your home. It provides you with the hot water you need to shower, wash dishes, and much more!',
    link: '/water-heater-repair-replacement'
  }
];
</script>

<template>
  <div class="border-b w-full py-20 md:py-32 flex flex-col gap-10 px-4 md:px-0">

    <div :style="{ backgroundImage: 'url(/plumber.jpg)' }"
      class="border border-primoGrey w-full max-w-5xl mx-auto flex justify-center items-center h-[280px] md:h-[400px] bg-cover rounded relative">
      <div class="overlay"></div> <!-- Overlay for dim effect -->
      <h2 class="caslon text-4xl z-10 relative">Our Services</h2>
    </div>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto">
      <HomeService v-for="service in servicesData" :key="service.header" :icon="service.icon" :header="service.header"
        :description="service.description" :link="service.link"
        class="bg-stone-900/50 p-8 rounded-md border-primoGrey hover:border-stone-200 transition-all ease duration-300 border" />
    </div>

  </div>
</template>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

h2 {
  position: relative;
  z-index: 10;
}
</style>
