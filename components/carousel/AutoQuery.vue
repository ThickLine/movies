<script setup lang="ts">
import type { QueryItem } from '~/types'
import { NEEDS_FILTER } from '~~/constants/lists';

const props = defineProps<{
  query: QueryItem
}>()

let currentPage = 1;
let item = await listMedia(props.query.type, props.query.query, currentPage, props.query.query === NEEDS_FILTER);

while (item.results.length < 10 && currentPage < item.total_pages) {
  currentPage++;
  const nextPageList = await listMedia(props.query.type, props.query.query, currentPage, props.query.query === NEEDS_FILTER);
  item.results.push(...nextPageList.results);
}

const mediaItem = await getMedia(props.query.type, item.results[0].id);
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ $t(query.title) }}
    </template>
    <template #more>
      <NuxtLink :to="`/${props.query.type}/category/${props.query.query}`"
                n-link>
        {{ $t('Explore more') }}
      </NuxtLink>
    </template>
    <MediaCard v-for="i of item.results"
               :key="i.id"
               :item="i"
               :type="props.query.type"
               flex-1
               w-60 />
  </CarouselBase>
</template>
