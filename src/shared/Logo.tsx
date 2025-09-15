import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`inline-block text-primary-600 focus:ring-0 focus:outline-hidden ${className}`}>
      <Image src="/images/igara-logo-txt.png" alt="Logo" width={152} height={54} />
    </Link>
  )
}

export default Logo
