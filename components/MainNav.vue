<template>
     <nav bg-gray-900
          class="relative px-4 py-4 flex justify-between items-center"
          aria-label="Main navigation">
          <a class="text-3xl font-bold leading-none"
             href="#">
               <svg class="h-10"
                    alt="logo"
                    color="white"
                    viewBox="0 0 100 100">
                    <path
                          d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z">
                    </path>
               </svg>
          </a>
          <div class="lg:hidden">
               <button @click.stop="toggleMenu"
                       class="navbar-burger flex items-center text-white p-3">
                    <svg class="block h-4 w-4 fill-current"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                         <title>Mobile menu</title>
                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
               </button>
          </div>
          <ul flex="row"
              class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-8"
              bg-gray-900>
               <NuxtLink v-for="navLink in navLinks"
                         :key="navLink.to"
                         :to="navLink.to"
                         :title="navLink.title"
                         v-slot="{ isActive }"
                         flex
                         items-center
                         p-1
                         text-sm
                         font-semibold
                         text-gray-400
                         hover:text-primary
                         rounded>
                    <div text-2xl
                         :class="[
                              `i-ph-${navLink.icon}${isActive ? '-fill' : ''}`,
                              isActive ? 'text-primary' : ''
                         ]" />
                    <span class="mx-1">{{ $t(navLink.title) }}</span>
               </NuxtLink>

          </ul>

          <div class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6">
               <ClientOnly>
                    <LanguageSwitcher type="dropdown-right-top" />
               </ClientOnly>
          </div>
     </nav>
     <div class="navbar-menu relative z-50"
          :class="{ hidden: !isMenuOpen }">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav bg-gray-900
               class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto"
               aria-label="Sidebar navigation">
               <div class="flex items-center mb-8">
                    <a class="mr-auto text-3xl font-bold leading-none"
                       href="#">
                         <svg class="h-12"
                              alt="logo"
                              viewBox="0 0 100 100">
                              <path
                                    d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z">
                              </path>
                         </svg>
                    </a>
                    <button @click="toggleMenu"
                            class="navbar-close">
                         <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                         </svg>
                    </button>
               </div>
               <div>
                    <ul flex="col"
                        justify-evenly
                        items-center
                        py5
                        lg:px5
                        space-y-8
                        border="t lg:r base"
                        bg-gray-900>
                         <NuxtLink v-for="navLink in navLinks"
                                   :key="navLink.to"
                                   :to="navLink.to"
                                   :title="navLink.title"
                                   v-slot="{ isActive }"
                                   flex
                                   items-center
                                   p-4
                                   text-sm
                                   font-semibold
                                   text-gray-400
                                   hover:text-primary
                                   rounded>
                              <div text-2xl
                                   :class="[
                                        `i-ph-${navLink.icon}${isActive ? '-fill' : ''}`,
                                        isActive ? 'text-primary' : ''
                                   ]" />
                              <span class="mx-2 text-white">{{ $t(navLink.title) }}</span>
                         </NuxtLink>

                    </ul>
               </div>

          </nav>
          <div class="fixed bottom-0 left-0 mb-4 ml-4">
               <ClientOnly>
                    <LanguageSwitcher @click.stop
                                      type="dropdown-left-bottom" />
               </ClientOnly>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);

const navLinks = [
     { to: "/", title: "Home", icon: "house" },
     { to: "/search", title: "Search", icon: "magnifying-glass" },
     { to: "/movie", title: "Movies", icon: "film-strip" },
     { to: "/tv", title: "TV Shows", icon: "television-simple" },
];

const toggleMenu = () => {
     isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
     isMenuOpen.value = false;
};

const handleClickOutside = (event: MouseEvent): void => {
     const navMenu = document.querySelector('.navbar-menu');
     const button = document.querySelector('.navbar-burger');

     if (!button?.contains(event.target as Node)) {
          closeMenu();
     }
};



onMounted(() => {
     document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
     document.removeEventListener('click', handleClickOutside);
});
</script>
