<script>
  import Icon from "./icons/Icon.svelte";
  import Penta from "./icons/Pentagram.svelte";
  import Plus from "./icons/Plus.svelte";
  import HoF from "./icons/HallOfFame.svelte";
  import Expand from "./icons/Expand.svelte";
  import { fade, fly } from "svelte/transition";

  let expand = false;

  const handleExpand = () => {
    expand = !expand;
  };
</script>

<div
  class="fixed h-screen w-12 justify-between flex flex-col bg-gray-800 transition-all shadow-lg z-10"
>
  <div>
    <Icon icon={Penta} tooltip="Go home" />
    <Icon icon={Plus} tooltip="Add friendo" />
    <Icon icon={HoF} tooltip="Hall of champions" />
  </div>
  <button class="self-center justify-self-end" on:click={handleExpand}>
    <Icon icon={Expand} />
  </button>
</div>

{#if expand}
  <div
    transition:fly={{ x: -44, duration: 500 }}
    class="fixed h-screen left-12 w-44 flex flex-col bg-gray-900 transition-all shadow-lg z-0"
  />
{/if}
