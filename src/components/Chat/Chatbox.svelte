<script>
  import ChatInput from "./ChatInput.svelte";
  const messages = [];
  for (let i = 0; i < 10; i++) {
    messages.push({
      sender: i % 2 === 0 ? "You" : "They",
      content:
        "Lorem Ipsum Como Estas De NadaLorem Ipsum Como Estas De NadaLorem Ipsum Como Estas De NadaLorem Ipsum Como Estas De NadaLorem Ipsum Como Estas De NadaLorem Ipsum Como Estas De Nada",
    });
  }

  const getClass = (isYou) => {
    return isYou === "You" ? "ml-auto" : "mr-auto";
  };
</script>

<div class=" grid grid-rows-[95%,5%] h-full w-full">
  <div class="flex flex-col p-3 h-full overflow-scroll overflow-x-hidden">
    {#each messages as message}
      <div class="w-[50%] {getClass(message.sender)}">
        <p class="text-white">{message.sender}</p>
        <p>{message.content}</p>
      </div>
    {/each}
  </div>
  <ChatInput />
</div>
