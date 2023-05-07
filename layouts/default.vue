<template>
                  <div h-full
                       w-full
                       font-sans
                       grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]"
                       of-hidden
                       bg-gray-100
                       dark:bg-gray-900>
                    <div of-x-hidden
                         of-y-auto
                         relative
                         data-scroll>
                      <MainNav />
                      <slot />
                    </div>
                    <div lg:order-first
                      />
    <IframeModal />
    <PhotoModal />
  </div>
</template>
