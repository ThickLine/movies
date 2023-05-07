
<script lang="ts" setup>

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
} from "@headlessui/vue";

import { availableLocales } from "~/utils/lang";

type PositionStyles = {
  'dropdown-right-top': string;
  'dropdown-right-bottom': string;
  'dropdown-left-top': string;
  'dropdown-left-bottom': string;
  [key: string]: string;
};


const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top'
  }
});

const positionStyles: PositionStyles = {
  'dropdown-right-top': 'right-0 top-full mt-1',
  'dropdown-right-bottom': 'right-0 bottom-full mb-1',
  'dropdown-left-top': 'left-0 top-full mt-1',
  'dropdown-left-bottom': 'left-0 bottom-full mb-1',
};

const currentPositionStyle = computed(() => {
  return positionStyles[props.type] || positionStyles['dropdown-right-top'];
});

const localeSetting = useState<string>("locale.setting");

// Emit 'update:locale' event when the locale changes
const emit = defineEmits<(event: 'update:locale', locale: string) => void>()
const handleLocaleChange = (locale: string) => {
  localeSetting.value = locale
  emit('update:locale', locale)
}
</script>


<template>
  <div>
    <Listbox v-model="localeSetting"
             as="div"
             class="relative flex items-center">
      <ListboxLabel class="sr-only"> Change Language </ListboxLabel>
      <ListboxButton type="button"
                     title="Change Language">
        <div class="flex items-center justify-center rounded-lg">
          <UnoIcon class="i-ph-translate-bold text-lg dark:text-white" />
        </div>
      </ListboxButton>
      <transition leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
        <ListboxOptions :class="[
          currentPositionStyle,
          'p-1 z-50 absolute outline-none bg-gray-200 dark:bg-gray-700 rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-auto w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300',
        ]">
          <ListboxOption v-for="lang in availableLocales"
                         :key="lang.iso"
                         :value="lang.iso"
                         @click="handleLocaleChange(lang.iso)"
                         :class="{
                           'py-2 px-2 flex items-center cursor-pointer': true,
                           'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
                             localeSetting === lang.iso,
                           'hover:bg-gray-50 dark:hover:bg-gray-700/30':
                             localeSetting !== lang.iso,
                         }">
            <span class="text-sm mr-2">
              {{ lang.flag }}
            </span>
            <span class="flex-1 truncate">
              {{ lang.name }}
              <span class="text-xs">({{ lang.iso }})</span>
            </span>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>
