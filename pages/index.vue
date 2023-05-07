<script setup lang="ts">
import type { MediaType } from '~/types'
import { NEEDS_FILTER, QUERY_LIST } from '~/constants/lists'

const route = useRoute()
const type = computed(() => route.params.type as MediaType || 'movie')

const queries = computed(() => [
  QUERY_LIST.movie[0],
  QUERY_LIST.tv[0],
])
console.log(queries)
const AsyncWrapper = defineComponent(async (_, ctx) => {
  try {
    const list = await listMedia(type.value, queries.value[0].query, 1, QUERY_LIST.movie[0].query == NEEDS_FILTER)
    console.log(`list $list`)
    const item = await getMedia(type.value, list.results[0].id)
    return () => ctx.slots?.default?.({ item })
  } catch (error) {
    console.error('Error:', error)
  }
})
</script>

<template>
  <div>
    <AsyncWrapper>
      <template #default="{ item }">
        <NuxtLink :to="`/${type}/${item.id}`">
          <MediaHero :item="item" />
        </NuxtLink>
      </template>
    </AsyncWrapper>
    <CarouselAutoQuery v-for="query of queries"
                       :key="query.type + query.query"
                       :query="query" />
    <TheFooter />
  </div>
</template>
