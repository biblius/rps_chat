<script>
  import "../app.postcss";
  import Sidebar from "../components/Sidebar/Sidebar.svelte";
  import "./styles.css";
  import { fade } from "svelte/transition";
  import Settings from "../components/Settings.svelte";

  let showSettings = false;

  const handleExpand = () => {
    showSettings = !showSettings;
  };
</script>

<div class="flex overflow-hidden">
  <Sidebar on:expandSidebar={handleExpand} />

  {#if showSettings}
    <div class="h-screen w-screen flex" transition:fade={{ duration: 100 }}>
      <Settings />
    </div>
  {:else}
    <main transition:fade={{ duration: 100 }} class="h-screen w-screen flex">
      <slot />
    </main>
  {/if}
</div>
