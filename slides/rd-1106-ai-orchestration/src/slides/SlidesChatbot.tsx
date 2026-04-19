import { SlideWrapper } from '../components/SlideWrapper'

function SlideChatbot01() {
  const useCases = [
    'Trả lời câu hỏi thường gặp',
    'Hỗ trợ khách hàng 24/7',
    'Hướng dẫn quy trình nội bộ',
    'Tra cứu thông tin nhanh',
  ]

  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute left-10 top-16 h-48 w-48 rounded-full bg-sky-100/70 blur-3xl" />
      <img
        src={`${import.meta.env.BASE_URL}assets/chatbot.png`}
        alt="Chatbot minh hoa"
        className="absolute right-10 bottom-10 w-[18rem] rounded-[2rem] border-8 border-white shadow-[0_28px_80px_rgba(14,116,144,0.22)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <span className="inline-flex w-fit rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 mb-5">
          Giai đoạn 1
        </span>
        <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
          Hình thái đầu tiên của AI trong doanh nghiệp là
          <br />
          <span className="text-sky-700">chatbot</span>
        </h2>
        <div className="mb-6 h-1 w-20 rounded-full bg-sky-600" />

        <div className="flex flex-1 gap-12">
          <div className="max-w-2xl">
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Đây là thời kỳ AI chủ yếu hoạt động theo mô hình hỏi - đáp: người dùng đặt câu hỏi,
              hệ thống trả lời ngay lập tức, nhanh và hữu ích nhưng vẫn hoàn toàn bị động.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {useCases.map((item, index) => (
                <div key={item} className="min-w-[16rem]">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
                    0{index + 1}
                  </p>
                  <p className="text-xl font-semibold leading-snug text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto w-[22rem] self-end border-l-4 border-amber-400 pl-5 pr-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Giới hạn</p>
            <p className="text-2xl font-bold leading-snug text-gray-900">
              Chatbot chỉ phản hồi.
              <br />
              <span className="text-amber-700">Nó chưa thể tự hành động.</span>
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

export const slidesChatbot = [SlideChatbot01]
