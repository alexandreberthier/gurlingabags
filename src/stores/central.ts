import {ref, computed, useId} from 'vue'
import { defineStore } from 'pinia'
import type {Product} from "@/interfaces/Global";
import type {Ref} from "vue";

export const useCentralStore = defineStore('central', () => {
  const products: Ref<Product[]> = ref([
    {
      id: useId(),
      name: 'Die Tasche',
      desc: 'Minimalistisch und stilvoll – perfekt für den urbanen Alltagslook.',
      price: 20.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Urban Explorer',
      desc: 'Die perfekte Tasche für Abenteuer in der Stadt oder die Erkundung neuer Orte.',
      price: 35.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Vintage Vibes',
      desc: 'Klassischer Look mit modernem Twist – ideal für Liebhaber von Retro-Designs.',
      price: 50.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Eco Warrior',
      desc: 'Nachhaltig und stylisch – aus umweltfreundlichen Materialien hergestellt.',
      price: 40.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Night Out',
      desc: 'Elegant und kompakt – die perfekte Begleiterin für den Abend.',
      price: 25.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Tech Nomad',
      desc: 'Hightech und Komfort vereint – ideal für Digital Nomads und Techies.',
      price: 60.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Beach Bum',
      desc: 'Lässig und farbenfroh – ideal für den Strand oder entspannte Tage.',
      price: 30.90,
      image: 'img_tasche.png',
    },
    {
      id: useId(),
      name: 'Weekend Wanderer',
      desc: 'Robust und geräumig – perfekt für Wochenendtrips und Abenteuer.',
      price: 55.90,
      image: 'img_tasche.png',
    },
  ]);


  return {
    products
  }
})