<template>
  <div class="w-full">
    <form class="flex flex-col gap-4 w-full">
      <label class="text-sm block text-stone-400">Name
        <input type="text" class="w-full mt-10 pt-10 rounded-sm" />
      </label>
      <label class="text-sm block text-stone-400">Email
        <input type="email" class="w-full mt-1 rounded-sm" />
      </label>
      <label class="text-sm block text-stone-400">Message
        <textarea class="w-full mt-1 rounded-sm" rows="6"></textarea>
      </label>
      <SharedButton text="Submit" type="submit" class="min-w-content" />
    </form>
  </div>
</template>

<style scoped>
input,
textarea {
  border: 1px solid white;
  padding: 6px 10px;
  margin: 0;
  /* Adjusted to avoid default spacing */
  box-sizing: border-box;
}
</style>
