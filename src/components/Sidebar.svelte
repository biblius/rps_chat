<script>
  import Icon from "./icons/Icon.svelte";
  import Penta from "./icons/Pentagram.svelte";
  import Plus from "./icons/Plus.svelte";
  import HoF from "./icons/HallOfFame.svelte";
  import { onMount, onDestroy } from "svelte";

  /**
   * @type {string}
   */
  let left = "-left-12";

  /**
   * @param {{ clientX: number; }} event
   */
  function show(event) {
    if (event.clientX < 300) {
      left = "left-0";
    }
    if (event.clientX >= 300) {
      left = "-left-12";
    }
  }

  onMount(() => {
    document.addEventListener("mousemove", show);
  });
</script>

<div
  class="fixed h-screen {left} items-start m-0
  justify-start flex flex-col bg-gray-800 transition-all shadow-lg"
>
  <Icon icon={Penta} tooltip="Go home" />
  <Icon icon={Plus} tooltip="Add friendo" />
  <Icon icon={HoF} tooltip="Hall of champions" />
</div>
