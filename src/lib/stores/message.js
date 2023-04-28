import { writable } from "svelte/store";

export const MessageStore = writable([
  {
    messages: new Map(),
  }
])