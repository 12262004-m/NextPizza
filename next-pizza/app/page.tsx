import {Container, Title, TopBar, Filters} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar />
            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    <div className='w-[250px]'>
                        <Filters />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList
                                title="Пиццы"
                                categoryId={1}
                                items={[
                                    {
                                        id: 1,
                                        name: "Маргарита",
                                        price: 359,
                                        items: [{price: 359}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf3d788b78d491891a6da5e94bf1.avif"
                                    },
                                    {
                                        id: 2,
                                        name: "Пепперони",
                                        price: 419,
                                        items: [{price: 419}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif"
                                    },
                                    {
                                        id: 3,
                                        name: "Додо",
                                        price: 399,
                                        items: [{price: 399}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198da9ffdfe782bb8d982b10c5e6b43.avif"
                                    },
                                    {
                                        id: 4,
                                        name: "Гавайская",
                                        price: 379,
                                        items: [{price: 379}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.avif"
                                    },
                                    {
                                        id: 5,
                                        name: "Сырная",
                                        price: 359,
                                        items: [{price: 359}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.avif"
                                    }
                                ]
                                }
                            />

                            <ProductsGroupList
                                title="Закуски"
                                categoryId={2}
                                items={[
                                    {
                                        id: 1,
                                        name: "Додстер",
                                        price: 219,
                                        items: [{price: 219}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/01980cb92528769295aeb186fb501f8e.avif"
                                    },
                                    {
                                        id: 2,
                                        name: "Сырный стартер",
                                        price: 259,
                                        items: [{price: 259}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/01980e9041a377569779e41755a81ad1.avif"
                                    },
                                    {
                                        id: 3,
                                        name: "Креветки",
                                        price: 319,
                                        items: [{price: 319}],
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/01980e9159aa74ca93e7daaa7db3e9fd.avif"
                                    }]
                                }
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

