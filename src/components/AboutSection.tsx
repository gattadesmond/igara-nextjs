'use client';

import Image from 'next/image';
import { Star, Home, Wrench, Mountain, Waves, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface AboutSectionProps {
  className?: string;
}

interface FeatureItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: Star,
    title: 'Dịch vụ cao cấp',
    description: 'Chất lượng phục vụ đẳng cấp quốc tế'
  },
  {
    id: 2,
    icon: Home,
    title: 'Thiết kế hiện đại',
    description: 'Không gian gara tiện nghi và chuyên nghiệp'
  },
  {
    id: 3,
    icon: Wrench,
    title: 'Công nghệ mới',
    description: 'Thiết bị sửa chữa tiên tiến nhất'
  },
  {
    id: 4,
    icon: Mountain,
    title: 'Vị trí đắc địa',
    description: 'Nhiều chi nhánh tại các vị trí thuận lợi'
  },
  {
    id: 5,
    icon: Waves,
    title: 'Dịch vụ toàn diện',
    description: 'Từ bảo dưỡng đến sửa chữa chuyên sâu'
  },
  {
    id: 6,
    icon: Award,
    title: 'Uy tín hàng đầu',
    description: 'Được tin tưởng bởi hàng nghìn khách hàng'
  }
];

export default function AboutSection({ className = '' }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={` overflow-hidden relative ${className}`}
    >
      <div className="container">
        {/* Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className="z-10 max-w-[600px] space-y-8 xl:max-w-[755px]">
            <SectionHeading 
              subtitle=""
              title="Khám phá tiềm năng xe của bạn cùng iGara"
              description="Đừng để xe của bạn bị bỏ quên trong những gara kém chất lượng. Với iGara, chúng tôi mang đến trải nghiệm sửa chữa và bảo dưỡng xe hơi đẳng cấp quốc tế. Đội ngũ kỹ thuật viên chuyên nghiệp, thiết bị hiện đại và quy trình chuẩn hóa sẽ giúp xe của bạn luôn hoạt động tối ưu và an toàn nhất."
              textAlign="left"
              maxWidth="full"
            />

            {/* Features List */}
            <ul className="flex max-w-[573px] flex-wrap gap-x-6 gap-y-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <li key={feature.id} className="flex min-w-[240px] flex-1 space-x-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-red-600/20">
                      <IconComponent className="size-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-base font-medium whitespace-nowrap">{feature.title}</p>
                      <p className="text-sm text-neutral-500">{feature.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='z-10 '>
            <Image
              width={800}
              height={800}
              src="/images/hero-right-2.png"
              alt="iGara Service Centers"
              className="animate-fade-in  max-w-full duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>

     
    </section>
  );
}
