import { SlideWrapper } from '../components/SlideWrapper'

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded mb-4">
      {text}
    </span>
  )
}

function SlideAIMindset03() {
  const misconceptions = [
    {
      id: '01',
      prompt: 'Chúng tôi đã dùng AI rồi',
      wrong: 'Chúng tôi đã dùng AI rồi',
      right: 'Nhiều team mới chỉ đang "ghé thăm" AI, chưa thật sự đưa AI vào quy trình làm việc hằng ngày.',
    },
    {
      id: '02',
      prompt: 'Còn quá sớm',
      wrong: 'Còn quá sớm',
      right: 'Cửa sổ cơ hội đang mở ngay lúc này, vì mỗi tuần đều có năng lực mới thay đổi cuộc chơi.',
    },
  ]
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute left-12 bottom-12 h-24 w-24 rounded-full bg-emerald-100/60 blur-2xl" />

      <SectionBadge text="Hiểu đúng về AI" />
      <h2 className="relative text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
        Hai hiểu lầm phổ biến
      </h2>
      <p className="relative max-w-3xl text-base text-gray-500 leading-relaxed mb-8">
        Rào cản lớn nhất không nằm ở model hay công cụ. Nó nằm ở cách doanh nghiệp đang
        diễn giải sai thời điểm và mức độ trưởng thành của AI.
      </p>

      <div className="relative grid grid-cols-2 gap-10 flex-1">
        {misconceptions.map((m) => (
          <div
            key={m.wrong}
            className="relative flex flex-col border-l-4 border-blue-600 pl-6 pr-2"
          >
            <span className="text-[11px] font-bold tracking-[0.24em] text-blue-300 uppercase mb-5">
              {m.id}
            </span>

            <p className="text-[11px] font-bold tracking-[0.18em] text-red-500 uppercase mb-3">
              Hiểu lầm
            </p>
            <p className="text-3xl font-extrabold text-gray-300 leading-tight line-through decoration-2 decoration-red-300 mb-6">
              {m.prompt}
            </p>

            <div className="w-12 h-px bg-gray-200 mb-6" />

            <p className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3">
              Thực tế
            </p>
            <p className="text-xl font-semibold text-gray-900 leading-snug max-w-md">
              {m.right}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 border-t border-blue-100 pt-5">
        <p className="text-sm font-bold tracking-[0.16em] text-blue-600 uppercase mb-2">
          Kết luận
        </p>
        <p className="text-2xl font-extrabold text-blue-900 leading-snug max-w-5xl">
          AI không thất bại vì công nghệ chưa đủ tốt. AI thất bại khi doanh nghiệp vẫn xem
          nó như một tính năng, thay vì một thành viên thật sự trong đội ngũ.
        </p>
      </div>
    </SlideWrapper>
  )
}

export const slidesAIMindset = [SlideAIMindset03]
