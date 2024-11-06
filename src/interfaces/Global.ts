export interface Link {
    linkName: string,
    pathName: string
}

export interface Product {
    id?: string,
    name: string,
    desc: string,
    price: number,
    image:string
}

export interface AccordionContent {
    id: number,
    header: string,
    hiddenContent: string
}