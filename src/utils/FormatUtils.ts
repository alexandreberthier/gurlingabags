export function formatPrice(price:number):string
{
    return new Intl.NumberFormat('de-AT', {style:'currency', currency: 'EUR'}).format(price)
}