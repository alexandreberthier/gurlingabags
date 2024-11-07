import {ref, computed, useId} from 'vue'
import {defineStore} from 'pinia'
import type {AccordionContent, Product} from "@/interfaces/Global";
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
    ])

    const accordionContent: Ref<AccordionContent[]> = ref([
            {
                id: 1,
                header: "PRODUKTINFO",
                hiddenContent: "Hier findest du alle Informationen zu unseren Produkten."
            },
            {
                id: 2,
                header: "RÜCKGABERECHT",
                hiddenContent: "Sie können Artikel innerhalb von 30 Tagen zurückgeben, sofern sie unbenutzt sind."
            },
            {
                id: 3,
                header: "VERSANDRICHTLINIE",
                hiddenContent: "Wir bieten kostenlosen Versand für Bestellungen über 50€. Weitere Details findest du hier."
            }
        ]
    )


    const productsInCart: Ref<{ product: Product, quantity: number }[]> = ref([])

    const itemCountCart = computed(() => {
        return productsInCart.value.reduce((total, item) => {
            return total + item.quantity
        }, 0)
    })

    const totalCartItemsPrice = computed(() => {
        return productsInCart.value.reduce((total, item) => {
            return total + item.product.price * item.quantity
        }, 0)
    })

    function addProduct(product: Product, quantity: number) {
        const existingProductIndex = productsInCart.value.findIndex(item => item.product.id === product.id)

        if (existingProductIndex !== -1) {
            productsInCart.value[existingProductIndex].quantity += quantity
        } else {
            productsInCart.value.push({
                product,
                quantity
            })
        }
    }


    return {
        products, itemCountCart, totalCartItemsPrice, productsInCart, accordionContent, addProduct
    }
})
