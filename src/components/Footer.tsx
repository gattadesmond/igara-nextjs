import { CustomLink } from '@/data/types'
import Logo from '@/shared/Logo'
import SocialsList1 from '@/shared/SocialsList1'
import React from 'react'

interface WidgetFooterMenu {
  id: string
  title: string
  menus: CustomLink[]
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: '1',
    title: 'Dịch vụ',
    menus: [
      { href: '/dich-vu/sua-dong-co-o-to', label: 'Sửa động cơ ô tô' },
      { href: '/dich-vu/sua-phanh-o-to', label: 'Sửa phanh ô tô' },
      { href: '/dich-vu/sua-dieu-hoa-o-to', label: 'Sửa điều hòa ô tô' },
      { href: '/dich-vu/sua-he-thong-dien-o-to', label: 'Sửa hệ thống điện' },
      { href: '/dich-vu/bao-duong-dinh-ky', label: 'Bảo dưỡng định kỳ' },
    ],
  },
  {
    id: '2',
    title: 'Hãng xe',
    menus: [
      { href: '/hang-xe/toyota', label: 'Toyota' },
      { href: '/hang-xe/honda', label: 'Honda' },
      { href: '/hang-xe/ford', label: 'Ford' },
      { href: '/hang-xe/hyundai', label: 'Hyundai' },
      { href: '/hang-xe/mazda', label: 'Mazda' },
    ],
  },
  {
    id: '3',
    title: 'Hỗ trợ',
    menus: [
      { href: '/lien-he', label: 'Liên hệ' },
      { href: '/hoi-dap', label: 'Hỏi đáp' },
      { href: '/huong-dan', label: 'Hướng dẫn sử dụng' },
      { href: '/bao-hanh', label: 'Chính sách bảo hành' },
      { href: '/ho-tro', label: 'Trung tâm hỗ trợ' },
    ],
  },
  {
    id: '4',
    title: 'Công ty',
    menus: [
      { href: '/gioi-thieu', label: 'Giới thiệu' },
      { href: '/tin-tuc', label: 'Tin tức' },
      { href: '/tuyen-dung', label: 'Tuyển dụng' },
      { href: '/doi-tac', label: 'Đối tác' },
      { href: '/lien-ket', label: 'Liên kết' },
    ],
  },
]

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">{menu.title}</h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="relative border-t border-neutral-200 py-24 lg:py-28 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        <div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:flex lg:flex-col lg:md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <Logo className="w-32" />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center gap-x-3 lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-2.5" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  )
}

export default Footer
