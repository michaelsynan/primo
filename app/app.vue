<template>
  <UApp>
    <SharedNav class="fixed w-full shared-nav" />
    <NuxtPage />
    <SharedFooter />
  </UApp>
</template>
<style scoped>
.shared-nav {
  z-index: 100;
}
</style>
