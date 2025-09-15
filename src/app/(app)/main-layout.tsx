import Footer2 from '@/components/Footer2'
import Header2 from '@/components/Header/Header2'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  header?: ReactNode
}

const MainLayout: React.FC<Props> = ({ children, header }) => {
  return (
    <>
      {/* Desktop Header - Will be hidden on mobile devices  */}
      <Header2 />
      {/*  */}
      {children}
      {/*  */}
      {/* FooterQuickNavigation - Displays on mobile devices and is fixed at the bottom of the screen */}
      {/* Chose footer style here!!!! */}
      <Footer2 /> {/* <Footer /> or <Footer2 /> or <Footer3 /> or <Footer4 />*/}
      {/*  */}
    </>

  )
}

export { MainLayout }
