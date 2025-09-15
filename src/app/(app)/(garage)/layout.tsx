import Header from '@/components/Header/Header'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import { ReactNode } from 'react'
import { ApplicationLayout } from '../application-layout'

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <ApplicationLayout >
      <div>
        <div className="container">
          {children}
          <SectionOurFeatures rightImg={"/images/igara-poster.jpg"} type="type2" className="py-24 lg:py-32" />
        </div>
      </div>
    </ApplicationLayout>
  )
}

export default Layout
