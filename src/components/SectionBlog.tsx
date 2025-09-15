'use client'

import { TBlogPost } from '@/data/data'
import SectionHeading from '@/components/SectionHeading'
import PostCard1 from '@/components/blog/PostCard1'
import { FC } from 'react'

interface SectionBlogProps {
    className?: string
    heading?: string
    subHeading?: string
    description?: string
}

// Data mẫu cho 4 bài viết về gara sửa xe
const blogPosts: TBlogPost[] = [
    {
        id: '1',
        handle: 'huong-dan-bao-duong-xe-dinh-ky',
        title: 'Hướng dẫn bảo dưỡng xe định kỳ đúng cách',
        excerpt: 'Bảo dưỡng xe định kỳ là việc làm cần thiết để đảm bảo xe hoạt động tốt và an toàn. Tìm hiểu lịch trình bảo dưỡng và các bước thực hiện.',
        date: '2024-01-15',
        datetime: '2024-01-15T10:00:00Z',
        category: {
            title: 'Bảo dưỡng',
            href: '/blog/category/bao-duong'
        },
        timeToRead: '5 phút đọc',
        featuredImage: {
            src: '/images/feature-1.png',
            alt: 'Hướng dẫn bảo dưỡng xe định kỳ',
            width: 400,
            height: 300
        },
        author: {
            name: 'Nguyễn Văn Minh',
            avatar: {
                src: '/images/avatars/1.png',
                alt: 'Nguyễn Văn Minh',
                width: 40,
                height: 40
            },
            description: 'Chuyên gia sửa chữa ô tô'
        }
    },
    {
        id: '2',
        handle: 'cach-nhan-biet-xe-can-sua-chua',
        title: 'Cách nhận biết xe cần sửa chữa sớm',
        excerpt: 'Những dấu hiệu cảnh báo xe cần được kiểm tra và sửa chữa. Phát hiện sớm giúp tiết kiệm chi phí và đảm bảo an toàn.',
        date: '2024-01-12',
        datetime: '2024-01-12T14:30:00Z',
        category: {
            title: 'Sửa chữa',
            href: '/blog/category/sua-chua'
        },
        timeToRead: '7 phút đọc',
        featuredImage: {
            src: '/images/feature-2.png',
            alt: 'Cách nhận biết xe cần sửa chữa',
            width: 400,
            height: 300
        },
        author: {
            name: 'Trần Thị Hương',
            avatar: {
                src: '/images/avatars/2.png',
                alt: 'Trần Thị Hương',
                width: 40,
                height: 40
            },
            description: 'Chuyên gia bảo dưỡng xe'
        }
    },
    {
        id: '3',
        handle: 'chon-gara-sua-xe-uy-tin',
        title: 'Bí quyết chọn gara sửa xe uy tín',
        excerpt: 'Làm thế nào để tìm được gara sửa xe chất lượng, uy tín? Những tiêu chí quan trọng cần lưu ý khi lựa chọn.',
        date: '2024-01-10',
        datetime: '2024-01-10T09:15:00Z',
        category: {
            title: 'Hướng dẫn',
            href: '/blog/category/huong-dan'
        },
        timeToRead: '6 phút đọc',
        featuredImage: {
            src: '/images/feature-3.png',
            alt: 'Bí quyết chọn gara sửa xe uy tín',
            width: 400,
            height: 300
        },
        author: {
            name: 'Lê Hoàng Nam',
            avatar: {
                src: '/images/avatars/3.png',
                alt: 'Lê Hoàng Nam',
                width: 40,
                height: 40
            },
            description: 'Kỹ thuật viên chuyên nghiệp'
        }
    },
    {
        id: '4',
        handle: 'cac-loai-dich-vu-sua-chua-xe',
        title: 'Các loại dịch vụ sửa chữa xe phổ biến',
        excerpt: 'Tổng hợp các dịch vụ sửa chữa xe phổ biến từ bảo dưỡng cơ bản đến sửa chữa chuyên sâu. Hiểu rõ để lựa chọn phù hợp.',
        date: '2024-01-08',
        datetime: '2024-01-08T16:45:00Z',
        category: {
            title: 'Dịch vụ',
            href: '/blog/category/dich-vu'
        },
        timeToRead: '8 phút đọc',
        featuredImage: {
            src: '/images/hero-right-2.png',
            alt: 'Các loại dịch vụ sửa chữa xe',
            width: 400,
            height: 300
        },
        author: {
            name: 'Phạm Thị Lan',
            avatar: {
                src: '/images/avatars/4.png',
                alt: 'Phạm Thị Lan',
                width: 40,
                height: 40
            },
            description: 'Chuyên gia dịch vụ xe'
        }
    }
]

const SectionBlog: FC<SectionBlogProps> = ({
    className = '',
    heading = 'Tin tức & Hướng dẫn',
    subHeading = '',
    description = 'Cập nhật những thông tin mới nhất về sửa chữa và bảo dưỡng xe hơi'
}) => {
    return (
        <>
            <SectionHeading
                subtitle={subHeading}
                title={heading}
                description={description}
                textAlign="center"
                maxWidth="2xl"
            />

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {blogPosts.map((post) => (
                    <PostCard1
                        key={post.id}
                        post={post}
                        size="sm"
                        className="h-full"
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <a
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                    Xem tất cả bài viết
                </a>
            </div>
        </>
    )
}

export default SectionBlog
