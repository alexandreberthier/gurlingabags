<template>
  <div class="nav-wrapper">
    <div class="logo-section">
      <router-link
          @click="closeMenu"
          :to="{name: SiteLinks.Home}">
        <div class="image-wrapper">
          <img :src="getImage('img_logo.png')" alt="logo">
        </div>
      </router-link>
    </div>
    <div :class="['link-section', {'open': showMenu}]">
      <router-link
          @click="closeMenu"
          v-for="(link, index) in links"
          :key="index"
          :to="{name: link.pathName }">
        <span>{{ link.linkName }}</span>
      </router-link>
    </div>
    <div class="icon-section">
      <div class="image-wrapper">
        <div v-if="itemsCount > 0" class="counter">
          <p>{{itemsCount}}</p>
        </div>
        <img :src="getImage('ic_cart.png')" alt="logo">
      </div>
      <div
          @click="toggleMenu"
          :class="['hamburger-menu', {'open': showMenu}]">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {getImage} from "@/utils/ImageUtils";
import {computed, type Ref, ref} from "vue";
import {SiteLinks} from "@/enums/SiteLinks";
import type {Link} from "@/interfaces/Global";
import {useCentralStore} from "@/stores/central";

const store = useCentralStore()

const itemsCount = computed(()=> {
  return store.itemCountCart
})

const links: Ref<Link[]> = ref([
  {
    linkName: 'Shop',
    pathName: SiteLinks.Home
  },
  {
    linkName: 'Über uns',
    pathName: SiteLinks.About
  },
  {
    linkName: 'FAQ',
    pathName: SiteLinks.Faqs
  },
  {
    linkName: 'Kontakt',
    pathName: SiteLinks.Contact
  }
])

const showMenu: Ref<boolean> = ref(false)

function toggleMenu(): void {
  showMenu.value = !showMenu.value
}

function closeMenu(): void {
  showMenu.value = false
}
</script>

<style scoped>

.nav-wrapper {
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  .logo-section {
    .image-wrapper {
      img {
        width: 120px;
        height: auto;
      }
    }
  }

  .link-section {
    position: fixed;
    top: 100px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    height: 100vh;
    width: 100%;
    background-color: var(--white);
    transform: translateX(100%);
    box-sizing: border-box;
    padding: 50px;
    opacity: 0;
    transition: all 250ms ease-in-out;

    &.open {
      transform: translateX(0);
      opacity: 1;
    }

    a {
      color: black;

      span {
        font-size: 24px;
      }
    }
  }

  .icon-section {
    display: flex;
    align-items: center;
    gap: 20px;

    .image-wrapper {
      position: relative;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
      }

      .counter {
        position: absolute;
        bottom: 25px;
        left: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border-radius: 50%;
        box-sizing: border-box;
        height: 18px;
        width: 18px;

        p {
          color: white;
          font-size: 14px;
        }
      }
    }

    .hamburger-menu {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        width: 100%;
        height: 2px;
        background-color: black;
        position: relative;

        &:before, &:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 2px;
          background-color: black;
          transition: all 250ms ease-in-out;
        }

        &:after {
          top: 8px;
        }

        &:before {
          bottom: 8px;
        }
      }

      &.open {
        span {
          background-color: transparent;

          &:before, &:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: black;
          }

          &:after {
            top: 0;
            transform: rotate(-45deg);
          }

          &:before {
            bottom: 0;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}

@media (min-width: 740px) {
  .nav-wrapper {
    height: 120px;
    padding: 10px 30px;

    .logo-section {
      .image-wrapper {
        img {
          width: 130px;
          height: auto;
        }
      }
    }

    .link-section {
      position: static;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 26px;
      height: unset;
      width: 100%;
      background-color: var(--light-gray);
      transform: translateX(0);
      padding: 0;
      opacity: 1;


      a {
        color: black;

        span {
          font-size: 20px;
        }
      }
    }

    .icon-section {
      display: flex;
      align-items: center;
      gap: 20px;

      .hamburger-menu {
        display: none;
      }
    }
  }
}

@media (min-width: 1200px) {
  .nav-wrapper {
    padding: 30px 60px;

    .logo-section {
      .image-wrapper {
        img {
          width: 140px;
        }
      }
    }

    .link-section {
      gap: 32px;
    }

  }
}

</style>