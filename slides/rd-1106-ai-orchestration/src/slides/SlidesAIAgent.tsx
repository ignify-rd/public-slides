import { SlideWrapper } from '../components/SlideWrapper'

function SlideAIAgent01() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}assets/ai-agent.png`}
        alt="AI Agent minh hoa"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">AI Agent</h2>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-base text-gray-600 leading-relaxed">
            AI Agent tiến một bước xa hơn chatbot: thay vì chỉ trả lời, Agent có thể
            lên kế hoạch, thực hiện các bước liên tiếp và tự chủ hoàn thành một nhiệm vụ phức tạp.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-xs font-bold text-blue-700 uppercase mb-3">Điểm khác biệt then chốt</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-red-500 mb-2">Chatbot</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>- Nhận lệnh, phản hồi</li>
                  <li>- Một vòng tương tác</li>
                  <li>- Không ghi nhớ ngữ cảnh</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 mb-2">AI Agent</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>- Lên kế hoạch, tự thực hiện</li>
                  <li>- Nhiều bước liên tiếp</li>
                  <li>- Duy trì ngữ cảnh dài</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

function SlideAIAgent02() {
  const capabilities = [
    { icon: '📝', title: 'Tự nghiên cứu và tổng hợp', body: 'Duyệt web, đọc tài liệu, tổng hợp thành báo cáo đầy đủ.' },
    { icon: '💻', title: 'Viết và chạy code', body: 'Tự tạo, kiểm tra, chỉnh sửa code theo mục tiêu đặt ra.' },
    { icon: '📊', title: 'Phân tích dữ liệu', body: 'Xử lý bảng tính, vẽ biểu đồ, đưa ra kết luận từ số liệu thực.' },
    { icon: '🔗', title: 'Gọi API và tích hợp hệ thống', body: 'Kết nối với CRM, email, calendar, project tools tự động.' },
  ]
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        AI Agent - Năng lực thực thi
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
        {capabilities.map((c) => (
          <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{c.icon}</span>
              <p className="font-bold text-gray-900 text-sm">{c.title}</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}

export const slidesAIAgent = [SlideAIAgent01, SlideAIAgent02]
