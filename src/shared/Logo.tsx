import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'w-22 sm:w-24' }) => {
  return (
    <Link href="/" className={`inline-block text-primary-600 focus:ring-0 focus:outline-hidden ${className}`}>
      <Image src="/images/igara-logo.png" alt="Logo" width={50} height={50} />
    </Link>
  )
}

export default Logo
