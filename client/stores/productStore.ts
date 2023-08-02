// import { defineStore } from 'pin';
interface Product {
    category: string,
    brand: string,
    color: string,
    description: string,
    discant: number,
    excerpt: string,
    feathers: any[]
    images: string[],
    model: string,
    name: string,
    price: number,
    subCategory: string,
    warranty: false,
    rate: number
}
interface State {
    products: Product[];
}

export const useProductStore = defineStore('productStore', () => {
    const state = reactive<State>({
        products: [
            {
                category: '',
                brand: 'JBL',
                color: 'red',
                description: '',
                discant: 5,
                excerpt: 'هدفون JBL Tour One M2 با تکنولوژی آداپتیو نویزکنسلینگ , همراه با صدای اطراف به صورت هوشمند و ۴  میکروفن برای بهترین کیفیت مکالمه و همینطور پشتیبانی از استاندارد صدای Hi-Res با عمر باتری ۵۰ ساعت مناسب برای موزیک و مکالمه',
                feathers: [
                    {
                        label: 'اتصالات',
                        value: 'با سیم , بیسیم'
                    }
                ],
                images: [
                    'https://biinoise.com/wp-content/uploads/2023/07/1.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/2.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/3.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/4.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/5.jpg'
                ],
                model: '',
                name: 'Tour One M2',
                price: 13690000,
                subCategory: '',
                warranty: false,
                rate: 5
            },
            {
                category: '',
                brand: 'JBL',
                color: 'red',
                description: '',
                discant: 5,
                excerpt: 'هدفون JBL Tour One M2 با تکنولوژی آداپتیو نویزکنسلینگ , همراه با صدای اطراف به صورت هوشمند و ۴  میکروفن برای بهترین کیفیت مکالمه و همینطور پشتیبانی از استاندارد صدای Hi-Res با عمر باتری ۵۰ ساعت مناسب برای موزیک و مکالمه',
                feathers: [
                    {
                        label: 'اتصالات',
                        value: 'با سیم , بیسیم'
                    }
                ],
                images: [
                    'https://biinoise.com/wp-content/uploads/2023/07/1.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/2.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/3.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/4.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/5.jpg'
                ],
                model: '',
                name: 'Tour One M2',
                price: 13690000,
                subCategory: '',
                warranty: false,
                rate: 1
            },
            {
                category: '',
                brand: 'JBL',
                color: 'red',
                description: '',
                discant: 5,
                excerpt: 'هدفون JBL Tour One M2 با تکنولوژی آداپتیو نویزکنسلینگ , همراه با صدای اطراف به صورت هوشمند و ۴  میکروفن برای بهترین کیفیت مکالمه و همینطور پشتیبانی از استاندارد صدای Hi-Res با عمر باتری ۵۰ ساعت مناسب برای موزیک و مکالمه',
                feathers: [
                    {
                        label: 'اتصالات',
                        value: 'با سیم , بیسیم'
                    }
                ],
                images: [
                    'https://biinoise.com/wp-content/uploads/2023/07/1.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/2.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/3.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/4.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/5.jpg'
                ],
                model: '',
                name: 'Tour One M2',
                price: 13690000,
                subCategory: '',
                warranty: false,
                rate: 2
            },
            {
                category: '',
                brand: 'JBL',
                color: 'red',
                description: '',
                discant: 5,
                excerpt: 'هدفون JBL Tour One M2 با تکنولوژی آداپتیو نویزکنسلینگ , همراه با صدای اطراف به صورت هوشمند و ۴  میکروفن برای بهترین کیفیت مکالمه و همینطور پشتیبانی از استاندارد صدای Hi-Res با عمر باتری ۵۰ ساعت مناسب برای موزیک و مکالمه',
                feathers: [
                    {
                        label: 'اتصالات',
                        value: 'با سیم , بیسیم'
                    }
                ],
                images: [
                    'https://biinoise.com/wp-content/uploads/2023/07/1.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/2.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/3.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/4.jpg',
                    'https://biinoise.com/wp-content/uploads/2023/07/5.jpg'
                ],
                model: '',
                name: 'Tour One M2',
                price: 13690000,
                subCategory: '',
                warranty: false,
                rate: 3
            }
        ]
    })


    return {
        state
    }
})