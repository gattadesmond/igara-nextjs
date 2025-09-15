import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import Image from 'next/image';


export function CarBrandCarousel({className}: {className: string}) {
    const carBrands = [
        { name: 'Toyota', src: '/images/car-brand/toyota-svgrepo-com.svg' },
        { name: 'Ford', src: '/images/car-brand/ford-svgrepo-com.svg' },
        { name: 'Hyundai', src: '/images/car-brand/hyundai-svgrepo-com.svg' },
        { name: 'Kia', src: '/images/car-brand/kia-svgrepo-com.svg' },
        { name: 'Mazda', src: '/images/car-brand/mazda-svgrepo-com.svg' },
        { name: 'Nissan', src: '/images/car-brand/nissan-svgrepo-com.svg' },
        { name: 'Mercedes-Benz', src: '/images/car-brand/mercedes-benz-svgrepo-com.svg' },
        { name: 'Lexus', src: '/images/car-brand/lexus-svgrepo-com.svg' },
        { name: 'Volkswagen', src: '/images/car-brand/volkswagen-svgrepo-com.svg' },
        { name: 'Porsche', src: '/images/car-brand/porsche-svgrepo-com.svg' },
        { name: 'Ferrari', src: '/images/car-brand/ferrari-svgrepo-com.svg' },
        { name: 'Rolls-Royce', src: '/images/car-brand/rolls-royce-svgrepo-com.svg' },
        { name: 'Tesla', src: '/images/car-brand/tesla-svgrepo-com.svg' },
        { name: 'Subaru', src: '/images/car-brand/subaru-svgrepo-com.svg' },
        { name: 'Suzuki', src: '/images/car-brand/suzuki-svgrepo-com.svg' },
        { name: 'Mitsubishi', src: '/images/car-brand/mitsubishi-svgrepo-com.svg' },
        { name: 'Land Rover', src: '/images/car-brand/land-rover-svgrepo-com.svg' },
        { name: 'Infiniti', src: '/images/car-brand/infiniti-svgrepo-com.svg' },
    ];
    return (
        <InfiniteSlider gap={24} reverse className={className} speed={40}>
            {carBrands.map((brand, index) => (
                <div
                    key={`${brand.name}-first-${index}`}
                    className="flex-shrink-0 w-[100px] h-[50px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 group"
                >
                    <Image
                        src={brand.src}
                        alt={brand.name}
                        width={50}
                        height={50}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-30"
                        priority={index < 5}
                    />
                </div>
            ))}
            {/* <img
                src='/apple_music_logo.svg'
                alt='Apple Music logo'
                className='h-[120px] w-auto'
            />
            <img
                src='/chrome_logo.svg'
                alt='Chrome logo'
                className='h-[120px] w-auto'
            />
            <img
                src='/strava_logo.svg'
                alt='Strava logo'
                className='h-[120px] w-auto'
            />
            <img
                src='/nintendo_logo.svg'
                alt='Nintendo logo'
                className='h-[120px] w-auto'
            />
            <img
                src='/jquery_logo.svg'
                alt='Jquery logo'
                className='h-[120px] w-auto'
            />
            <img
                src='/prada_logo.svg'
                alt='Prada logo'
                className='h-[120px] w-auto'
            /> */}
        </InfiniteSlider>
    );
}
