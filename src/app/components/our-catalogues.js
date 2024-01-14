"use client"
import { useCart } from "./cart-context";
import React, { useState, useEffect, useRef } from 'react';

export default function OurCatalogues() {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-10px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi-fade').forEach((el) => {
            el.classList.add('fade');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-fade").forEach((el) => {
              el.classList.remove("fade");
            });
        }
      }, [isIntersecting]);

    const [openModalIndex, setOpenModalIndex] = useState(null);

    const openModal = (index) => {
      setOpenModalIndex(index);
    };
  
    const closeModal = () => {
      setOpenModalIndex(null);
    };

    const { dispatch } = useCart();
    
    console.log(dispatch);

    const addToShopCart = (product) => {
        dispatch({ type: 'ADD_TO_SHOP_CART', payload: product });
      };
    
      const addToLoveCart = (product) => {
        dispatch({ type: 'ADD_TO_LOVE_CART', payload: product });
      };

    const CatalogueData = [
        {
            id: "24",
            image: "/Catalogue - 1.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Lightweight",
            name: "Boxing Lightweight Catalogue",
            nameModal: "Boxing Lightweight Catalogue - Floyd Mayweather Edition",
            information: "Experience the pinnacle of finesse and precision with the Floyd Mayweather Edition. Crafted for the agile and strategic boxer, this collection embodies Mayweather's defensive mastery and unparalleled ring IQ. Elevate your game with cutting-edge lightweight gear that reflects the essence of a true defensive maestro.",
            featuresTittle: "Experience Defensive Mastery",
            features: "Elevate your boxing game with the Floyd Mayweather Edition, a collection designed for those who appreciate finesse and precision in the lightweight division. Crafted for agility and strategy, this edition mirrors Mayweather's defensive genius, offering cutting-edge gear that embodies the art of boxing.",
            discount: "150.000",
            value: "100000",
            valueModal: "100.000",
            button: "View this catalogue",
        },
        {
            id: "25",
            image: "/Catalogue - 2.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Heavyweight",
            name: "Boxing Heavyweight Catalogue",
            nameModal: "Boxing Heavyweight Catalogue - Muhammad Ali Edition",
            information: "Float like a butterfly, sting like a bee – the Muhammad Ali Edition is a tribute to the legendary 'Greatest of All Time.' Embrace the spirit of Ali's charisma and resilience in the heavyweight division. Unleash power and grace with iconic gear that echoes the spirit of an immortal boxing icon.",
            featuresTittle: "Float Like a Butterfly, Sting Like a Bee",
            features: "Pay homage to the 'Greatest of All Time' with the Muhammad Ali Edition. This heavyweight collection captures Ali's charisma and resilience, providing gear that empowers you to float like a butterfly and sting like a bee in the ring. Unleash the spirit of an immortal boxing icon.",
            discount: "150.000",
            value: "100000",
            valueModal: "100.000",
            button: "View this catalogue",
        },
        {
            id: "26",
            image: "/Catalogue - 3.jpg",
            caption: "This Catalogue is about a Boxing product or equipment for Heavyweight",
            name: "Boxing Heavyweight Catalogue",
            nameModal: "Boxing Heavyweight Catalogue - Mike Tyson Edition",
            information: "Step into the ferocious world of the Mike Tyson Edition, designed for those who seek the raw power and intimidation of Iron Mike. Channel Tyson's explosive energy with heavyweight equipment that embodies the relentless aggression and unmatched intensity that defined the career of the 'Baddest Man on the Planet.'",
            featuresTittle: "Embrace the Power of Iron Mike",
            features: "Step into the ferocious world of the Mike Tyson Edition, designed for those who crave raw power and intimidation in the heavyweight division. Channel the explosive energy of Iron Mike with gear that embodies the relentless aggression and unmatched intensity that defined the career of the 'Baddest Man on the Planet'.",
            discount: "150.000",
            value: "100000",
            valueModal: "100.000",
            button: "View this catalogue",
        },
        {
            id: "27",
            image: "/Catalogue - 4.jpg",
            caption: "This Catalogue is about a Mixed Martial Arts (MMA) product or equipment for Lightweight",
            name: "MMA Lightweight Catalogue",
            nameModal: "MMA Lightweight Catalogue - Connor Mcgregor Edition",
            information: "Conquer the octagon in style with the Conor McGregor Edition. Inspired by the notorious 'Notorious,' this collection blends style and substance for the ultimate MMA lightweight experience. Equip yourself with gear that mirrors McGregor's precision, flair, and unyielding determination inside the mixed martial arts arena.",
            featuresTittle: "Style Meets Substance in the Octagon",
            features: "Conquer the MMA arena with the Conor McGregor Edition, a collection that blends style and substance for the ultimate lightweight experience. Inspired by the 'Notorious,' equip yourself with gear that mirrors McGregor's precision, flair, and unyielding determination inside the mixed martial arts arena.",
            discount: "200.000",
            value: "150000",
            valueModal: "150.000",
            button: "View this catalogue",
        },
    ]

    return (
        <section className="bg-[#f5f5f5] lg:px-12 px-6 lg:py-6 py-4 -mt-10 lg:-mt-0" ref={ref}>

                <h3 className="lg:text-6xl text-4xl tersembunyi-fade text-black text-center py-6" style={{fontFamily: 'Bebas Neue'}}>our catalogs</h3>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto md:gap-8 gap-4 pt-24 justify-between items-center">

                    {CatalogueData.map((item, index) => (  

                        <div key={index} className="flex flex-col w-full tersembunyi-fade items-start md:gap-4 gap-3 px-4 py-4 bg-white rounded-xl shadow-black shadow-lg mb-[85px] lg:mb-0" style={{fontFamily: 'Roboto'}}>

                            <img src={item.image}  className="object-cover shadow-black shadow-md -mt-20 rounded-xl"/>

                            <p className="font-semibold md:text-base text-xs text-black">{item.caption}</p>

                            <div className="flex flex-row justify-between items-center w-full">

                                <div className="flex justify-start items-center">

                                    <button onClick={() => openModal(index)} className="py-2 text-red-600 font-medium md:text-base text-xs">{item.button}</button>

                                </div>

                                <div className="flex justify-end items-center gap-2 md:gap-4">

                                        <button onClick={() => addToLoveCart(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </button>

                                        <button onClick={() => addToShopCart(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </button>

                                </div>

                            </div>
                            {/* Modal */}
                            {openModalIndex === index && (
                            <div className="fixed z-30 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"style={{backdropFilter: 'blur(10px)'}}>
                                <div className="bg-white p-8 rounded-md md:p-12 p-6">

                                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full lg:max-w-7xl mx-auto w-full">

                                        <img src={item.image} className="md:w-1/4 md:h-1/4 w-1/2 h-1/2"/>

                                        <div className="flex flex-col justify-start md:items-start md:gap-4 gap-2 items-center max-w-3xl">

                                            <p className="text-xl lg:text-4xl md:text-left text-center" style={{fontFamily: 'Bebas Neue'}}>{item.nameModal}</p>
                                            <p className="md:text-base md:text-left text-center text-xs" style={{fontFamily: 'Roboto'}}>{item.information}</p>
                                            <p className="text-xl lg:text-4xl md:text-left text-center" style={{fontFamily: 'Bebas Neue'}}>{item.featuresTittle}</p>
                                            <p className="md:text-base md:text-left text-center text-xs" style={{fontFamily: 'Roboto'}}>{item.features}</p>

                                            <div className="flex justify-start md:gap-4 gap-2 items-center" style={{fontFamily: 'Bebas Neue'}}>
                                                <p className="lg:text-4xl md:text-left text-center text-xl">price : </p>
                                                <p className="lg:text-4xl md:text-left text-center text-xl text-red-600 line-through">Rp.{item.discount}</p>
                                                <p className="lg:text-4xl md:text-left text-center text-xl">Rp.{item.valueModal}</p>
                                            </div>

                                            <div className="w-full flex justify-between">

                                                <button className="bg-red-600 text-white md:text-base text-sm px-4 py-2 rounded-md" onClick={closeModal}>Close This Catalogue</button>

                                                <div className="flex justify-center items-center md:gap-8 gap-4">

                                                <button onClick={() => addToLoveCart(item)} className="p-1 border-black rounded-full border">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                </button>

                                                <button onClick={() => addToShopCart(item)} className="p-1 border-black rounded-full border">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                    </svg>
                                                </button>

                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            )}

                        </div>

                    ))}

                </div>

        </section>        
    )
}