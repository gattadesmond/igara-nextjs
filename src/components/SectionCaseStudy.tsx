'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from '@/components/SectionHeading';
import CaseStudyCard from '@/components/CaseStudyCard';


export interface CaseStudy {
    id: number;
    title: string;
    image: string;
    alt: string;
    logo?: string;
    testimonial?: string;
    author?: string;
    position?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 0,
        title: "Auto Only",
        image: "/images/partner/partner-1.jpg",
        alt: "Auto Only partner testimonial",
        logo: "/images/partner/auto-only-logo.png",
        testimonial: "Chúng tôi đã triển khai iGara cho 15 chi nhánh cùng lúc - quá trình này diễn ra rất suôn sẻ. iGara đã thực hiện đúng mọi cam kết và giúp chúng tôi tối ưu hóa quy trình quản lý garage.",
        author: "Anh Nguyễn Thái Tuy",
        position: "Giám đốc kỹ thuật"
    },
    {
        id: 1,
        title: "Tint World",
        image: "/images/partner/partner-1.webp",
        alt: "Tint World partner testimonial",
        logo: "/images/partner/partner-logo-1.webp",
        testimonial: "iGara đã giúp chúng tôi quản lý 75 địa điểm cùng lúc một cách hiệu quả. Hệ thống rất dễ sử dụng và đội ngũ hỗ trợ rất chuyên nghiệp. Chúng tôi rất hài lòng với dịch vụ.",
        author: "Anh Lê Minh Tuấn",
        position: "Giám đốc điều hành"
    },
    {
        id: 2,
        title: "Superior Auto Clinic",
        image: "/images/partner/partner-2.webp",
        alt: "Superior Auto Clinic partner testimonial",
        logo: "/images/partner/partner-logo-2.webp",
        testimonial: "Từ khi sử dụng iGara, chúng tôi đã tăng 40% hiệu suất làm việc và giảm 30% thời gian xử lý hóa đơn. Khách hàng cũng hài lòng hơn với dịch vụ nhanh chóng và chính xác.",
        author: "Chị Phạm Thị Hương",
        position: "Quản lý garage"
    },
    {
        id: 3,
        title: "University Auto",
        image: "/images/partner/partner-3.webp",
        alt: "University Auto partner testimonial",
        logo: "/images/partner/partner-logo-1.webp",
        testimonial: "iGara không chỉ giúp chúng tôi quản lý garage tốt hơn mà còn cung cấp những báo cáo chi tiết giúp đưa ra quyết định kinh doanh chính xác. Đây là giải pháp toàn diện cho ngành sửa chữa xe.",
        author: "Anh Trần Văn Đức",
        position: "Chủ garage"
    }
];

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

export default function SectionCaseStudy() {
    const [api, setApi] = useState<CarouselApi>();


    // Autoplay plugin
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    // Update current slide when carousel changes
    React.useEffect(() => {
        if (!api) {
            return;
        }

    }, [api]);

    return (


        <>

            <SectionHeading
                subtitle=""
                title="Xem tại sao hơn 200 garage tin tưởng iGara."
                description="Lắng nghe từ những chủ garage thực tế đã chuyển sang phần mềm sửa chữa xe hàng đầu."
                textAlign="center"
                maxWidth="xl"
            />

            {/* Case Study Carousel */}
            <div className="relative mt-16">
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full [&>div]:overflow-visible"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="-ml-4 md:-ml-6 ">
                        {caseStudies.map((study) => (
                            <CarouselItem key={study.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-[550px]">
                                <CaseStudyCard study={study} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Custom Navigation Buttons - Bottom Left */}
                <div className="flex justify-start mt-8 space-x-4">
                    <button
                        onClick={() => api?.scrollPrev()}
                        className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-300 cursor-pointer transition-colors duration-200"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button
                        onClick={() => api?.scrollNext()}
                        className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-300 cursor-pointer transition-colors duration-200"
                        disabled={!api?.canScrollNext()}
                    >
                        <ChevronRight className="w-5 h-5 text-neutral-800" />
                    </button>
                </div>
            </div>
        </>
    );
}
