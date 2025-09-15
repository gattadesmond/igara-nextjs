import { getStayCategories } from '@/data/categories'
import { getNavigation } from '@/data/navigation'
import Logo from '@/shared/Logo'
import clsx from 'clsx'
import { FC } from 'react'
import AvatarDropdown from './AvatarDropdown'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import NotifyDropdown from './NotifyDropdown'
import { Button } from '@/shared/Button'

interface Props {
  hasBorder?: boolean
  className?: string
}

const Header2: FC<Props> = async ({ hasBorder = true, className }) => {
  const navigationMenu = await getNavigation()
  const featuredCategory = (await getStayCategories())[7]


  return (
    <div className={clsx('relative', className)}>
      <div
        className={clsx(
          'relative border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900',
          hasBorder && 'border-b',
          !hasBorder && 'has-[.header-popover-full-panel]:border-b'
        )}
      >
        <div className="container flex h-16 justify-between">


          <div className="flex items-center lg:flex-1">
            <Logo />
          </div>

          <div className="mx-4  flex-2 justify-center hidden lg:flex">
            <Navigation menu={navigationMenu} featuredCategory={featuredCategory} />
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-6">
            <div className="hidden lg:flex items-center gap-x-2.5">
              <Button color='red' className='py-2 px-3 ' href="/">Tư vấn miễn phí</Button>
              {/* <NotifyDropdown />
             */}
              {/* <AvatarDropdown /> */}
            </div>


            <div className=" lg:hidden">
              <HamburgerBtnMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
