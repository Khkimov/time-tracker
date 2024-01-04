<template>
  <a :href="`#${PAGE_TIMELINE}`">
    <div class="flex items-center gap-1">
      <img src="../assets/img/time-track.png" class="h-9" />
      <div>Time Tracker</div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { PAGE_TIMELINE } from '@/common/constants'
</script>
