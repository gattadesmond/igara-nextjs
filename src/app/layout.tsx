import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Inter, Saira } from 'next/font/google'
import 'rc-slider/assets/index.css'
import CustomizeControl from './customize-control'
import ThemeProvider from './theme-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export { saira }

export const metadata: Metadata = {
  title: {
    template: '%s - iGara',
    default: 'iGara - Nền tảng tìm gara gần đây nhanh chóng và uy tín',
  },
  description: 'Nền tảng tra cứu, tìm kiếm gara ô tô uy tín với đầy đủ thông tin đi kèm với chất lượng. Tìm kiếm ngay.',
  keywords: [
    'garage ô tô', 'sửa chữa ô tô', 'bảo dưỡng xe hơi', 'garage uy tín',
    'sửa xe gần đây', 'garage Hà Nội', 'garage TP.HCM', 'garage Đà Nẵng',
    'thay lốp xe', 'sửa động cơ', 'bảo dưỡng định kỳ', 'garage 24/7',
    'sửa chữa xe hơi', 'garage chuyên nghiệp', 'dịch vụ ô tô', 'garage giá rẻ',
    'iGara', 'tìm garage', 'garage gần đây', 'đặt lịch sửa xe'
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>
            {children}

            {/* For Chisfis's demo  -- you can remove it  */}
            {/* <CustomizeControl /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
