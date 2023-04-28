<script>
  /** @type {any} */
  export let icon = undefined;

  export let tooltip = "";

  export let route = "";

  export let color = "#166534D9";

  let hide = tooltip === "";

  function mouseOver() {
    color = "#FFF";
  }
  function mouseOut() {
    color = "#166534D9";
  }
</script>

<a
  on:mouseover={mouseOver}
  on:focus={mouseOver}
  on:mouseleave={mouseOut}
  href={route}
  class="relative flex items-center justify-center w-10 h-10 mx-auto my-4
  bg-gray-900 rounded-3xl transition-all cursor-pointer
  hover:bg-green-800 hover:opacity-90 hover:rounded-xl
  group"
>
  <svelte:component this={icon} {color} />
  {#if !hide}
    <span
      class="absolute w-auto p-1 m-1 min-w-max left-12
           rounded-md shadow-md
         text-white bg-gray-800
           text-xs font-bold
           transition-all duration-100 scale-0 origin-left
           group-hover:scale-100"
    >
      {tooltip}
    </span>
  {/if}
</a>
