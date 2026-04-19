import { SlideWrapper } from '../components/SlideWrapper'
import { EvolutionDiagram } from '../components/EvolutionDiagram'

const DIAGRAM_INDEX = 0

function SlideChatbot01() {
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Giai đoạn 1
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Chatbot</h2>
      <div className="flex gap-8 flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-base text-gray-600 leading-relaxed">
            Chatbot là hình thức AI đầu tiên được doanh nghiệp triển khai rộng rãi.
            Nó hoạt động theo mô hình hỏi - đáp: người dùng gửi câu hỏi, AI phản hồi ngay lập tức.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '💬', label: 'Trả lời câu hỏi thường gặp (FAQ)' },
              { icon: '🎧', label: 'Hỗ trợ khách hàng 24/7' },
              { icon: '📋', label: 'Hướng dẫn quy trình nội bộ' },
              { icon: '🔍', label: 'Tra cứu thông tin nhanh' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2 bg-white border border-gray-200 rounded-lg p-3">
                <span className="text-lg flex-none">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-auto">
            <p className="text-xs font-bold text-amber-700 uppercase mb-1">Giới hạn</p>
            <p className="text-sm text-amber-800">Không thể tự chủ hành động - chỉ phản hồi, không chủ động xử lý công việc phức tạp.</p>
          </div>
        </div>
        <div className="flex-none w-64 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/chatbot.png`}
            alt="Chatbot minh hoa"
            className="max-w-full max-h-full object-contain rounded-xl shadow"
          />
        </div>
      </div>
      <div className="mt-6">
        <EvolutionDiagram activeIndex={DIAGRAM_INDEX} />
      </div>
    </SlideWrapper>
  )
}

function SlideChatbot02() {
  const examples = [
    { company: 'Ngân hàng', useCase: 'Bot tư vấn sản phẩm, tra cứu số dư, mở tài khoản online' },
    { company: 'Bán lẻ', useCase: 'Tư vấn sản phẩm, theo dõi đơn hàng, xử lý đổi/trả hàng' },
    { company: 'Nhân sự', useCase: 'Onboarding nhân viên mới, giải đáp chính sách nội bộ' },
  ]
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Giai đoạn 1 - Ứng dụng thực tế
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Chatbot trong doanh nghiệp - Ứng dụng phổ biến
      </h2>
      <div className="flex flex-col gap-4 flex-1">
        {examples.map((e) => (
          <div key={e.company} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex-none w-24 text-sm font-bold text-blue-700 bg-blue-50 rounded-lg px-2 py-1.5 text-center">
              {e.company}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-0.5">{e.useCase}</p>
          </div>
        ))}
        <div className="bg-gray-100 rounded-xl p-4 mt-2">
          <p className="text-sm text-gray-700 font-medium">
            Chatbot phù hợp nhất khi: quy trình có thể được định nghĩa trước, câu hỏi lặp lại nhiều, cần phản hồi nhanh.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <EvolutionDiagram activeIndex={DIAGRAM_INDEX} />
      </div>
    </SlideWrapper>
  )
}

export const slidesChatbot = [SlideChatbot01, SlideChatbot02]
