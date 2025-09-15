import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


interface CaseStudyCardProps {
  study: any;
  className?: string;
}

export default function CaseStudyCard({ study, className = '' }: CaseStudyCardProps) {
  return (
    <div className={`relative group cursor-pointer transition-transform duration-300 overflow-hidden ${className}`}>
      <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
        <Image
          fill
          src={study.image}
          alt={study.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay - Only visible on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-red-500/40 transition-all duration-300" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        
        {/* Partner Logo - Top Left */}
        {study.logo && (
          <div className="absolute top-4 left-4 w-full">
            <div className="w-full h-8 flex items-center justify-center p-2">
              <Image
                src={study.logo}
                alt={`${study.title} logo`}
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        )}
        
        {/* Testimonial Content - Always Visible for first card */}
        {study.testimonial && (
          <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pb-12 transform translate-y-10 group-hover:translate-y-0">
            <blockquote className="text-white text-sm md:text-base leading-relaxed mb-4">
              &ldquo;{study.testimonial}&rdquo;
            </blockquote>
            <div className="text-white">
              <div className="font-semibold">{study.author}</div>
              <div className="text-sm opacity-80">{study.position}</div>
            </div>
          </div>
        )}
        
        {/* Watch Video Link - Bottom Left */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="text-white text-sm font-medium hover:underline cursor-pointer flex items-center space-x-2">
            <span>Xem chi tiết</span> 
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
