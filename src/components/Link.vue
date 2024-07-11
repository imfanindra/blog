<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ href: string }>();

const isExternal = computed(() => props.href.startsWith("http"));
</script>

<template>
  <a
    :href="props.href"
    :target="isExternal ? '_blank' : '_self'"
    class="underline decoration-neutral-500 underline-offset-4 transition-colors hover:(decoration-black text-black)"
  >
    <slot />
  </a>
</template>
