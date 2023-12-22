import React from 'react'
import sushi from '/assets/sushi-1.png'
import sushi2 from '/assets/sushi-2.png'
import sushi3 from '/assets/sushi-3.png'
import sushi4 from '/assets/sushi-4.png'
import sushi5 from '/assets/sushi-5.png'
import sushi6 from '/assets/sushi-6.png'
import sushi7 from '/assets/sushi-7.png'
import sushi8 from '/assets/sushi-8.png'
import sushi9 from '/assets/sushi-9.png'
import sushi10 from '/assets/sushi-10.png'
import sushi1 from '/assets/sushi-11.png'
import sushi12 from '/assets/sushi-12.png'



const SushiPics = () => {
  return (
    <div>
        <section class="bg-white  py-24 px-4 lg:px-16 " > 
    <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] ">
        <h1 className="text-center text-5xl pb-20 mb-10">Our Specialties</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Automotive" title="Automotive" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Sushi
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi2}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Toys and Baby Products"
                                title="Toys and Baby Products" loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Shrimp
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi3}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Medical" title="Medical" loading="lazy" width="200"
                                height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Tuna Steak
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi4}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Glass" title="Glass" loading="lazy" width="200"
                                height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Miso Soup
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi5}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Jewelry Coins and Medallions"
                                title="Jewelry Coins and Medallions" loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Salmon rolls
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi6}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Electric" title="Electric" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Thai Donuts
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi7}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Packaging / FMCG" title="Packaging / FMCG"
                                loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Wonton Soup
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi8}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Footwear" title="Footwear" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Ramen
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi9}
                                class="w-36 h-36  mt-6 m-auto z-11" alt="Backpacks and Umbrella"
                                title="Backpacks and Umbrella" loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Salmon
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#"
                    className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi10}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Caps and Closures" title="Caps and Closures"
                                loading="lazy" width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                           Udon
                        </p>
                    </div>
                </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="@" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi1}
                                className="w-36 h-36  mt-6 m-auto z-11" alt="Confectionery" title="Confectionery" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Tuna
                        </p>
                    </div>
                </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-400 rounded-xl justify-items-center align-middle">
                            <img src={sushi12}
                                className="w-36 h-36  mt-6 m-auto z-9" alt="Cosmetics" title="Cosmetics" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Tofu
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default SushiPics
