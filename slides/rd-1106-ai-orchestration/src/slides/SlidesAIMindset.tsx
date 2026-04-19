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
      wrong: 'Chúng tôi đã dùng AI rồi',
      right: 'Khác biệt giữa "ghé thăm" và "chuyển đến ở hẳn"',
    },
    {
      wrong: 'Còn quá sớm',
      right: 'Thực ra có đột phá mới mỗi tuần',
    },
  ]
  return (
    <SlideWrapper>
      <SectionBadge text="Hiểu đúng về AI" />
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
        Hai hiểu lầm phổ biến
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-4">
        {misconceptions.map((m) => (
          <div key={m.wrong} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-bold text-red-500 uppercase mb-2">Hiểu lầm</p>
            <p className="text-base text-gray-500 line-through mb-3">{m.wrong}</p>
            <p className="text-xs font-bold text-green-600 uppercase mb-2">Thực tế</p>
            <p className="text-base text-gray-800 font-medium">{m.right}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-base font-bold text-blue-900">
          Vấn đề không phải là công nghệ - mà là tư duy. AI cần được quản lý như một thành viên trong đội.
        </p>
      </div>
    </SlideWrapper>
  )
}

export const slidesAIMindset = [SlideAIMindset03]
