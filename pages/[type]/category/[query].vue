<script setup lang="ts">
import type { Media, MediaType } from '~/types'
import { NEEDS_FILTER } from '~~/constants/lists';

const route = useRoute()
const query = computed(() => route.params.query as string)
const type = computed(() => route.params.type as MediaType || 'movie')

const items: Media[] = reactive([])

async function fetch(page: number) {
  items.push(...(await listMedia(type.value, query.value, page, query.value === NEEDS_FILTER)).results)
}
</script>

<template>
  <MediaAutoLoadGrid :fetch="fetch"
                     :type="type"
                     :items="items">
    <span case-capital>{{ query.replace(/_/g, ' ') }}</span>
    <span>{{ type === 'tv' ? 'TV' : 'Movies' }}</span>
  </MediaAutoLoadGrid>
</template>
