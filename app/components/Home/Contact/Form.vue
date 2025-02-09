<template>
  <div class="w-full">
    <form class="flex flex-col gap-4 w-full">
      <label class="text-sm block">Name
        <input type="text" class="w-full mt-1" />
      </label>
      <label class="text-sm block">Email
        <input type="email" class="w-full mt-1" />
      </label>
      <label class="text-sm block">Message
        <textarea class="w-full mt-1" rows="6"></textarea>
      </label>
      <SharedButton text="Submit" type="submit" class="min-w-content">Submit</SharedButton>
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
