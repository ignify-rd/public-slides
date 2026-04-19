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
      wrong: 'AI sẽ thay thế tất cả nhân viên',
      right: 'AI thay thế công việc lặp lại, nâng tầm vai trò con người lên tư duy cao hơn',
    },
    {
      wrong: 'AI luôn đúng và đáng tin tuyệt đối',
      right: 'AI có thể sai - con người cần giám sát, kiểm tra và ra quyết định cuối cùng',
    },
  ]
  const roles = ['Định hướng & đặt mục tiêu', 'Phán xét & ra quyết định', 'Sáng tạo & xây dựng chiến lược', 'Giám sát & cải tiến AI']
  return (
    <SlideWrapper>
      <SectionBadge text="Hiểu đúng về AI" />
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Hai hiểu lầm phổ biến + Vai trò thực của con người
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        {misconceptions.map((m) => (
          <div key={m.wrong} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-bold text-red-500 uppercase mb-2">Hiểu lầm</p>
            <p className="text-sm text-gray-500 line-through mb-3">{m.wrong}</p>
            <p className="text-xs font-bold text-green-600 uppercase mb-2">Thực tế</p>
            <p className="text-sm text-gray-800 font-medium">{m.right}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-xs font-bold text-blue-700 uppercase mb-3">Vai trò con người trong kỷ nguyên AI</p>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <span key={r} className="text-xs bg-white border border-blue-200 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              {r}
            </span>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

export const slidesAIMindset = [SlideAIMindset03]
