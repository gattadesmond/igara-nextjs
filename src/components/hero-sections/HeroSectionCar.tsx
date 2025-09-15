'use client';

import { useState, useEffect } from 'react';
// import CarBrandCarousel from '@/components/molecules/CarBrandCarousel';
// import ServiceMenu from '@/components/organisms/ServiceMenu';

import { StaySearchForm } from '@/components/HeroSearchForm/StaySearchForm'
import { CarBrandCarousel } from '@/components/CarBrandCarousel'
import HeroSearchFormMobile from '@/components/HeroSearchFormMobile/HeroSearchFormMobile'
interface HeroSectionProps {
  className?: string;
}

export default function HeroSectionCar({ className = '' }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://madebydesignesia.com/themes/autodetail/images/slider/1.webp',
    'https://madebydesignesia.com/themes/autodetail/images/slider/2.webp',
    'https://madebydesignesia.com/themes/autodetail/images/slider/3.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="relative isolate mx-auto min-h-fit w-full py-12 md:pt-32 md:pb-24 z-10">

        <div className="absolute inset-0 isolate -z-10 lg:h-full overlay bg-cover bg-center overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0"
            style={{
              content: "",
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(0deg, rgba(32, 0, 0, .6), rgba(32, 0, 0, .6)), linear-gradient(180deg, rgba(32, 0, 0, .6) 50%, #000)"
            }}
          ></div>
        </div>

        <div className="mx-auto flex max-w-[850px] flex-col items-center gap-6 px-5">
          <h1 className="font-headline text-3xl mx-auto !block text-center font-bold text-balance md:text-4xl xl:text-5xl leading-normal uppercase text-white">
            iGara - Nền tảng tìm gara gần đây nhanh chóng và uy tín
          </h1>
          <p className="text-center text-white/80 text-balance ">
            Nền tảng tra cứu, tìm kiếm gara ô tô uy tín với đầy đủ thông tin đi kèm với chất lượng. Tìm kiếm ngay.
          </p>
          <StaySearchForm formStyle={'default'} className='max-md:hidden' />

          <HeroSearchFormMobile className='md:hidden' />

          <div className="mx-auto flex h-6 items-center">
            <div className="relative flex w-max translate-x-[15px] md:justify-self-end">
              <img
                src="https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-0px", zIndex: 10 }}
                srcSet="https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-6px", zIndex: 9 }}
                srcSet="https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=24&q=75 1x, https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-12px", zIndex: 8 }}
                srcSet="https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-18px", zIndex: 7 }}
                srcSet="https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1653407295-novaks.png?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-24px", zIndex: 6 }}
                srcSet="https://www.datocms-assets.com/53643/1653407295-novaks.png?w=24&q=75 1x, https://www.datocms-assets.com/53643/1653407295-novaks.png?w=48&q=75 2x"
              />
            </div>
            <div className="relative flex h-full items-center gap-1 place-self-start text-left text-xs whitespace-nowrap text-white/60 sm:text-sm">
              Được tin tưởng bởi
              <span className="text-white/90"> 1000+ khách hàng</span>
            </div>
          </div>
          <CarBrandCarousel
            className="w-full pt-8 pb-0"
          />

        </div>

      </section>


    </>
  );
}
