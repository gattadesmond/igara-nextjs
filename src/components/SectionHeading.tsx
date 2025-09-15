interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
  textAlign?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full'
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  className = '',
  textAlign = 'center',
  maxWidth = 'xl'
}: SectionHeadingProps) {
  const textAlignClasses = textAlign === 'center' ? 'text-center' : 'text-start';
  const containerClasses = textAlign === 'center' ? 'mx-auto' : '';
  
  return (
    <div className={`space-y-4 ${maxWidthClasses[maxWidth]} ${containerClasses} ${className}`}>
      {subtitle && <h5 className={`text-neutral-500 text-xs font-medium whitespace-nowrap uppercase ${textAlignClasses}`}>
        {subtitle}
      </h5> }
     
      <h2 className={`font-headline text-3xl mt-0 !block font-bold text-balance xl:text-4xl ${textAlignClasses}`}>
        {title}
      </h2>
      <p className={`text-neutral-500 ${textAlignClasses} ${textAlign === 'center' ? 'md:mx-auto' : ''}`}>
        {description}
      </p>
    </div>
  );
}
