<script setup lang="ts">
import type { Person } from '~/types'

const props = withDefaults(defineProps<{
  item: Person
}>(), {
  item: () => ({
    adult: false,
    gender: 0,
    id: 0,
    known_for_department: '',
    name: '',
    original_name: '',
    profile_path: '',
    popularity: 0,
    credit_id: '',
    order: 0,
    // Optional properties with default values
    also_known_as: [],
    birthday: undefined,
    place_of_birth: undefined,
    homepage: undefined,
    biography: undefined,
    external_ids: undefined,
    combined_credits: undefined,
    images: undefined,
  }),
})
</script>

<template>
  <div flex="~ col" px16 gap5>
    <PersonCreditsList
      v-if="props.item.combined_credits?.cast?.length"
      :title="$t('Acting Credits')"
      :items="props.item.combined_credits.cast"
    />
    <PersonCreditsList
      v-if="props.item.combined_credits?.crew?.length"
      title="$t('Production Credits')"
      :items="props.item.combined_credits.crew"
    />
  </div>
</template>
