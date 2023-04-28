<script>
  /**@type {HTMLInputElement}*/
  let input;
  let message = "";

  /** @param {KeyboardEvent} event */
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      message = "";
      input.value = "";
    }
  };

  /** @param {string} msg */
  const sendMessage = (msg) => {
    console.log(msg);
    console.warn("todo!");
  };

  /** @param {any} input */
  const addToMessage = (input) => {
    console.log(input);
    message += input.data;
  };
</script>

<form class="flex h-full">
  <div class="flex flex-row w-full h-full">
    <input
      on:input={addToMessage}
      bind:this={input}
      on:keydown={handleEnter}
      id="in"
      type="text"
      class="
      w-[90%]
      bg-gray-700 text-white
      focus:border-transparent border-transparent focus:ring-0
      rounded-md"
    />

    <button type="submit" class="mx-auto bg-gray-400 w-24 rounded-md"
      >Submit</button
    >
  </div>
</form>
