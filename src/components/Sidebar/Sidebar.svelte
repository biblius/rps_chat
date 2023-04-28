<script>
  import Icon from "./Icons/Icon.svelte";
  import Penta from "./Icons/Pentagram.svelte";
  import Duel from "./Icons/Duel.svelte";
  import HoF from "./Icons/HallOfFame.svelte";
  import Settings from "./Icons/Settings.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const dispatchExpand = () => {
    dispatch("expandSidebar");
  };
</script>

<div
  class="
  h-screen w-auto
  px-2
  justify-between
  flex flex-col
  bg-gray-800
  transition-all
  z-10"
>
  <div>
    <Icon icon={Penta} tooltip="Go home" route="/" />
    <Icon icon={Duel} tooltip="Challenge" route="rps" />
    <Icon icon={HoF} tooltip="Hall of champions" route="hallOfChampions" />
  </div>
  <button class="self-center justify-self-end" on:click={dispatchExpand}>
    <Icon icon={Settings} on:message />
  </button>
</div>
