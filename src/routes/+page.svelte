<script>
  import Chatbox from "../components/Chat/Chatbox.svelte";
  import FriendList from "../components/FriendList/FriendList.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="RPS Chat" />
</svelte:head>

<section
  class="
    flex justify-start
    border-l border-gray-600 w-screen
    overflow-hidden pr-12"
>
  <FriendList />

  <div
    class="
      h-[90%] w-[80%]
      bg-gray-800
      mx-auto p-2
      border rounded-sm border-gray-50
      self-center"
  >
    <Chatbox />
  </div>
</section>
