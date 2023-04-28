<script>
  import "../../app.postcss";

  let id = 0;

  const user = (name, online, newMessages) => {
    return {
      id: id++,
      username: name,
      online,
      newMessages,
    };
  };

  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(user("Lorem Ipsum", i < 5 ? true : false, 3));
  }
</script>

<div
  class="
  h-full w-44
  flex flex-col
  bg-gradient-to-r from-gray-800 to-gray-900
  "
>
  <ul class="flex flex-col">
    {#each users as user}
      <div
        class="flex flex-row justify-around items-center
        py-3
         hover:bg-gray-700 hover:cursor-pointer
         transition-all duration-150"
      >
        <li>{user.username}</li>
        {#if user.newMessages > 0}
          <i>{user.newMessages}</i>
        {/if}
        {#if user.online}
          <div class="w-2 h-2 bg-green-400 rounded-full" />
        {:else}
          <div class="w-2 h-2 bg-red-400 rounded-full" />
        {/if}
      </div>
    {/each}
    <ul />
  </ul>
</div>
