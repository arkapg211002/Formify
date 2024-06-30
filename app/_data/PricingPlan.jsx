export default[
    {
        link: process.env.NEXT_PUBLIC_MONTHLY_SUBSCRIBE,
        price:10,
        priceId: process.env.NEXT_PUBLIC_MONTHLY_PRICEID,
        duration:'Monthly'
    },
    {
        link: process.env.NEXT_PUBLIC_YEARLY_SUBSCRIBE,
        price:100,
        priceId: process.env.NEXT_PUBLIC_YEARLY_PRICEID,
        duration:'Yearly'
    }
]