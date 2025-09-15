import { Metadata } from 'next'
import { ApplicationLayout } from '../application-layout'

export const metadata: Metadata = {
  title: 'iGara - Nền tảng tìm gara gần đây nhanh chóng và uy tín',
  description:
    'Nền tảng tra cứu, tìm kiếm gara ô tô uy tín với đầy đủ thông tin đi kèm với chất lượng. Tìm kiếm ngay.',
  keywords: [
    'garage ô tô', 'sửa chữa ô tô', 'bảo dưỡng xe hơi', 'garage uy tín',
    'sửa xe gần đây', 'garage Hà Nội', 'garage TP.HCM', 'garage Đà Nẵng',
    'thay lốp xe', 'sửa động cơ', 'bảo dưỡng định kỳ', 'garage 24/7',
    'sửa chữa xe hơi', 'garage chuyên nghiệp', 'dịch vụ ô tô', 'garage giá rẻ',
    'iGara', 'tìm garage', 'garage gần đây', 'đặt lịch sửa xe'
  ],
}

export default function Layout({ children, params }: { children: React.ReactNode; params: any }) {
  return <ApplicationLayout>{children}</ApplicationLayout>
}
