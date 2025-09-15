import HIW1img from '@/images/HIW1.png'
import HIW2img from '@/images/HIW2.png'
import HIW3img from '@/images/HIW3.png'
import VectorImg from '@/images/VectorHIW.svg'
import Heading from '@/shared/Heading'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

export interface SectionHowItWorkProps {
  className?: string
  data?: {
    id: number
    title: string
    desc: string
    img: string
  }[]
  title?: string
}

const DEMO_DATA: SectionHowItWorkProps['data'] = [
  {
    id: 1,
    img: "/images/step-1.jpg",
    title: 'Tiếp nhận xe, ghi nhận dấu hiệu ban đầu',
    desc: 'Kiểm tra tổng quan xe, ghi nhận tình trạng hiện tại và các dấu hiệu bất thường. Đảm bảo minh bạch và chính xác trong việc đánh giá ban đầu.',
  },
  {
    id: 2,
    img: "/images/step-2.jpg",
    title: 'Tiếp nhận yêu cầu và tư vấn kỹ thuật',
    desc: 'Lắng nghe yêu cầu của khách hàng và tư vấn chuyên môn từ đội ngũ kỹ thuật viên. Đề xuất giải pháp tối ưu với chi phí hợp lý và thời gian phù hợp.',
  },
  {
    id: 3,
    img: "/images/step-3.jpg",
    title: 'Sửa chữa và bảo dưỡng chuyên nghiệp',
    desc: 'Thực hiện sửa chữa theo đúng quy trình kỹ thuật với thiết bị hiện đại. Đảm bảo chất lượng hoàn thiện và kiểm tra kỹ lưỡng trước khi bàn giao xe.',
  },
]

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = '', data = DEMO_DATA, title = 'How it work' }) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`} data-nc-id="SectionHowItWork">
      <Heading isCenter subheading="iGara đã tối ưu hóa quy trình sửa chữa xe hơi thành một trải nghiệm thống nhất, đảm bảo chất lượng và hiệu quả cao nhất cho khách hàng.">
        Quy trình làm việc

      </Heading>
      <div className="relative mt-20 grid gap-20 md:grid-cols-3">
        <Image className="absolute inset-x-0 top-10 hidden md:block" src={VectorImg} alt="vector" />
        {data.map((item) => (
          <div key={item.id} className="relative mx-auto flex max-w-xs flex-col items-center">
            <div className='relative   size-44 rounded-full overflow-hidden'>
              <Image alt="" className=" object-cover" fill src={item.img} />
            </div>
            <div className="mt-5 text-center ">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="mt-3 block text-neutral-500  text-sm">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionHowItWork
