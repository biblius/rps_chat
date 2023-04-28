<script>
  import Chatbox from "../components/Chatbox.svelte";
  import Counter from "./Counter.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Chatbox />
  <Counter />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
