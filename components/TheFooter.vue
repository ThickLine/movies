<template>
  <footer p="y15 x15"
          flex="~ col gap4">
    <div flex="~ row gap2"
         items-center
         my2>
      <img src="/movies-sm.webp"
           width="25"
           height="25"
           alt="Logo">
      <div text-xl>
        Movies
      </div>
    </div>

                <div class="flex flex-row gap-2 items-center">
                <p class="text-true-gray-90 text-sm">
                    Data provided by&nbsp;
                    <a class="opacity-100" target="_blank" href="https://www.themoviedb.org/" title="The Movie Database" rel="noopener">
                        <IconTMDB class="inline h-4" />
                    </a>
                </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <p class="text-true-gray-90 text-sm">
                    This project uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <p class="text-true-gray-90 text-sm">
                    For more details, read our&nbsp;
                    <a class="opacity-100" href="/privacy-policy" title="Privacy Policy" rel="noopener">Privacy Policy</a>&nbsp;and&nbsp;
                    <a class="opacity-100" href="/terms-and-conditions" title="Terms and Conditions" rel="noopener">Terms and Conditions</a>.
                </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <p class="text-true-gray-90 text-sm">
                    &copy;{{ currentYear }} Movie Up Next. All rights reserved.
                </p>
            </div>

  </footer>
</template>
<script lang="ts" setup>
import { computed, ComputedRef } from 'vue'

const currentYear: ComputedRef<number> = computed(() => new Date().getFullYear())
</script>