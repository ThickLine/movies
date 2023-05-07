<template>
    <div class="bg-gray rounded-full">
        <Switch v-model="isDarkMode"
                :class="isDarkMode ? 'bg-blue-600' : 'bg-gray-200'"
                class="relative inline-flex h-6 w-11 items-center rounded-full">
            <span class="sr-only">Enable dark mode</span>
            <span :class="isDarkMode ? 'translate-x-6' : 'translate-x-1'"
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
        </Switch>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Switch } from '@headlessui/vue';
import { IThemeSettingOptions } from '~/utils/theme';

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting');

// computed property
const isDarkMode = computed({
    get: () => themeSetting.value === 'dark',
    set: (value) => {
        themeSetting.value = value ? 'dark' : 'light';
    },
});
</script>
