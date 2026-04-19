import { SlideWrapper } from '../components/SlideWrapper'

function SlideChatbot01() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}assets/chatbot.png`}
        alt="Chatbot minh hoa"
        className="absolute bottom-4 right-4 w-1/4 rounded-lg shadow-lg"
      />
      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Hình thái đầu tiên của LLM - AI</h2>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-base text-gray-600 leading-relaxed">
            Hình thái đầu tiên của LLM trong doanh nghiệp là chatbot: AI hoạt động theo mô hình hỏi - đáp,
            người dùng gửi câu hỏi, AI phản hồi ngay lập tức.
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
      </div>
    </SlideWrapper>
  )
}

export const slidesChatbot = [SlideChatbot01]
