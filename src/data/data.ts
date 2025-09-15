import avatarImage1 from '@/images/avatars/Image-1.png'
import avatarImage2 from '@/images/avatars/Image-2.png'
import avatarImage3 from '@/images/avatars/Image-3.png'
import avatarImage4 from '@/images/avatars/Image-4.png'

export async function getListingReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Không thể nói đủ điều tốt về gara này",
      rating: 5,
      content: 'Gara rất chuyên nghiệp và thân thiện! Tôi chắc chắn sẽ quay lại đây lần nữa. Thợ sửa chữa rất tận tâm và giá cả hợp lý.',
      author: 'Nguyễn Văn An',
      authorAvatar: avatarImage1,
      date: '16/5/2025',
      datetime: '2025-05-16',
    },
    {
      id: '2',
      title: 'Hoàn hảo cho việc bảo dưỡng định kỳ',
      rating: 4,
      content: 'Gara tuyệt vời. Chủ gara rất thân thiện, xưởng sửa chữa sạch sẽ và yên tĩnh. Dịch vụ nhanh chóng và chất lượng.',
      author: 'Trần Thị Bình',
      authorAvatar: avatarImage2,
      date: '11/5/2025',
      datetime: '2025-05-11',
    },
    {
      id: '3',
      title: 'Cảm giác rất tốt khi sửa chữa!',
      rating: 5,
      content:
        'Thợ sửa chữa rất tốt và thân thiện. Rất vui khi nói chuyện với họ. Xưởng sửa chữa trông tốt hơn trong hình ảnh.',
      author: 'Lê Minh Cường',
      authorAvatar: avatarImage3,
      date: '22/8/2025',
      datetime: '2025-08-22',
    },
    {
      id: '4',
      title: 'Dịch vụ sửa chữa xuất sắc!',
      rating: 5,
      content:
        'Có rất nhiều gara tốt gần đây và tôi đã thử hai trong số đó. Tôi có thời gian hạn chế ở Hà Nội lần này và mong được quay lại đây lần nữa.',
      author: 'Phạm Thị Dung',
      authorAvatar: avatarImage4,
      date: '16/5/2025',
      datetime: '2025-05-16',
    },
  ]
}
export async function getBlogPosts() {
  return [
    {
      id: '1',
      title: 'Hướng dẫn bảo dưỡng xe định kỳ: Tất cả những gì bạn cần biết',
      handle: 'huong-dan-bao-duong-xe-dinh-ky',
      excerpt:
        'Bảo dưỡng xe định kỳ là yếu tố quan trọng giúp xe hoạt động tốt và kéo dài tuổi thọ. Hãy tìm hiểu các bước bảo dưỡng cơ bản và lịch trình phù hợp cho xe của bạn.',
      featuredImage: {
        src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
        alt: 'Hướng dẫn bảo dưỡng xe định kỳ',
        width: 3637,
        height: 2432,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Bảo dưỡng', href: '#' },
      timeToRead: '5 phút đọc',
      author: {
        name: 'Nguyễn Văn An',
        avatar: {
          src: avatarImage1.src,
          alt: 'Nguyễn Văn An',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Nguyễn Văn An là kỹ thuật viên ô tô với hơn 10 năm kinh nghiệm trong ngành. Anh chuyên về bảo dưỡng và sửa chữa động cơ, đặc biệt là các dòng xe Nhật Bản.',
      },
    },
    {
      id: '2',
      title: 'Cách chọn lốp xe phù hợp cho mọi mùa trong năm',
      handle: 'cach-chon-lop-xe-phu-hop-moi-mua',
      excerpt:
        'Lựa chọn lốp xe phù hợp là yếu tố quan trọng đảm bảo an toàn và hiệu suất lái xe. Tìm hiểu cách chọn lốp xe phù hợp với điều kiện thời tiết và phong cách lái xe của bạn.',
      featuredImage: {
        src: 'https://images.pexels.com/photos/840211/pexels-photo-840211.jpeg',
        alt: 'Cách chọn lốp xe phù hợp',
        width: 3637,
        height: 2432,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Phụ tùng', href: '#' },
      timeToRead: '4 phút đọc',
      author: {
        name: 'Trần Thị Bình',
        avatar: {
          src: avatarImage2.src,
          alt: 'Trần Thị Bình',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Trần Thị Bình là chuyên gia phụ tùng ô tô với niềm đam mê tạo ra những giải pháp tối ưu cho xe. Cô có con mắt tinh tế và thích thử nghiệm với các loại phụ tùng khác nhau.',
      },
    },
    {
      id: '3',
      title: 'Những phụ tùng xe hơi cần thiết cho năm 2025',
      handle: 'nhung-phu-tung-xe-hoi-can-thiet-2025',
      excerpt:
        'Cập nhật những phụ tùng xe hơi mới nhất và cần thiết cho năm 2025. Từ lốp xe đến phụ tùng động cơ, hãy tìm hiểu những gì bạn cần để xe hoạt động tốt nhất.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1665047189192-3a49516d496a?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Những phụ tùng xe hơi cần thiết cho năm 2025',
        width: 3637,
        height: 2432,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Phụ tùng', href: '#' },
      timeToRead: '6 phút đọc',
      author: {
        name: 'Lê Minh Cường',
        avatar: {
          src: avatarImage3.src,
          alt: 'Lê Minh Cường',
          width: avatarImage3.width,
          height: avatarImage3.height,
        },
        description:
          'Lê Minh Cường là nhà thiết kế phụ tùng ô tô với niềm đam mê tạo ra những sản phẩm độc đáo và hiện đại. Anh có con mắt tinh tế và thích thử nghiệm với các loại phụ tùng khác nhau.',
      },
    },
    {
      id: '4',
      title: 'Phụ tùng xe hơi thân thiện với môi trường cho năm 2025',
      handle: 'phu-tung-xe-hoi-than-thien-moi-truong-2025',
      excerpt:
        'Khám phá những phụ tùng xe hơi thân thiện với môi trường mới nhất. Từ vật liệu tái chế đến công nghệ tiết kiệm nhiên liệu, hãy tìm hiểu cách bảo vệ môi trường khi sử dụng xe.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1636522302676-79eb484e0b11?q=80&w=3637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Phụ tùng xe hơi thân thiện với môi trường',
        width: 3637,
        height: 2432,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Môi trường', href: '#' },
      timeToRead: '5 phút đọc',
      author: {
        name: 'Phạm Thị Dung',
        avatar: {
          src: avatarImage4.src,
          alt: 'Phạm Thị Dung',
          width: avatarImage4.width,
          height: avatarImage4.height,
        },
        description:
          'Phạm Thị Dung là chuyên gia phụ tùng ô tô với niềm đam mê tạo ra những sản phẩm thân thiện với môi trường. Cô có con mắt tinh tế và thích thử nghiệm với các loại vật liệu bền vững.',
      },
    },
    {
      id: '5',
      title: 'Tăng hiệu suất tiết kiệm nhiên liệu cho xe của bạn',
      handle: 'tang-hieu-suat-tiet-kiem-nhien-lieu',
      excerpt:
        'Tìm hiểu các cách tăng hiệu suất tiết kiệm nhiên liệu cho xe của bạn. Từ bảo dưỡng định kỳ đến thay đổi thói quen lái xe, hãy khám phá những bí quyết giúp tiết kiệm chi phí nhiên liệu.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1623876355139-cb77f029bd29?q=80&w=3296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Tăng hiệu suất tiết kiệm nhiên liệu',
        width: 3637,
        height: 2432,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Tiết kiệm nhiên liệu', href: '#' },
      timeToRead: '4 phút đọc',
      author: {
        name: 'Nguyễn Văn An',
        avatar: {
          src: avatarImage1.src,
          alt: 'Nguyễn Văn An',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Nguyễn Văn An là kỹ thuật viên ô tô với niềm đam mê tạo ra những giải pháp tiết kiệm nhiên liệu. Anh có con mắt tinh tế và thích thử nghiệm với các kỹ thuật tối ưu hóa hiệu suất.',
      },
    },
    {
      id: '6',
      title: 'Hướng dẫn chọn gara sửa chữa xe: Tất cả những gì bạn cần biết',
      handle: 'huong-dan-chon-gara-sua-chua-xe',
      excerpt:
        'Lựa chọn gara sửa chữa xe phù hợp là yếu tố quan trọng đảm bảo chất lượng dịch vụ và giá cả hợp lý. Hãy tìm hiểu các tiêu chí đánh giá và cách chọn gara uy tín.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1746699484949-869986068267?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Hướng dẫn chọn gara sửa chữa xe',
        width: 3773,
        height: 600,
      },
      date: '16/3/2025',
      datetime: '2025-03-16',
      category: { title: 'Hướng dẫn', href: '#' },
      timeToRead: '7 phút đọc',
      author: {
        name: 'Trần Thị Bình',
        avatar: {
          src: avatarImage2.src,
          alt: 'Trần Thị Bình',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Trần Thị Bình là chuyên gia tư vấn gara với niềm đam mê tạo ra những giải pháp tối ưu cho khách hàng. Cô có con mắt tinh tế và thích thử nghiệm với các dịch vụ sửa chữa khác nhau.',
      },
    },
  ]
}
export async function getBlogPostsByHandle(handle: string) {
  // lower case the handle
  handle = handle.toLowerCase()

  const posts = await getBlogPosts()
  const post = posts.find((post) => post.handle === handle)
  return {
    ...post,
    content: 'Nội dung chi tiết về chủ đề này sẽ được cập nhật sớm...',
    tags: ['gara', 'sửa chữa', 'ô tô', 'bảo dưỡng'],
  }
}

//
export type TListingReivew = Awaited<ReturnType<typeof getListingReviews>>[number]
export type TBlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number]
