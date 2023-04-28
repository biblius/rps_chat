<script>
  import "../app.postcss";
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
</script>

<div
  transition:fade={{ duration: 200 }}
  class="
  z-20 h-screen w-screen relative
  grid grid-rows-[25%,25%] grid-cols-2
  bg-gradient-to-r from-gray-800 to-gray-900
  overflow-hidden
  "
>
  <div>s</div>
  <div>a</div>
  <div>a</div>
  <div>a</div>
</div>
