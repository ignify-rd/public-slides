import { SlideWrapper } from '../components/SlideWrapper'

function SlideAIAgent01() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute right-16 top-12 h-56 w-56 rounded-full bg-violet-100/70 blur-3xl" />
      <img
        src={`${import.meta.env.BASE_URL}assets/ai-agent.png`}
        alt="AI Agent minh hoa"
        className="absolute right-10 bottom-10 w-[18rem] rounded-[2rem] border-8 border-white shadow-[0_28px_80px_rgba(109,40,217,0.18)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <span className="inline-flex w-fit rounded-full bg-violet-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 mb-5">
          Giai đoạn 2
        </span>
        <h2 className="text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
          AI Agent không chỉ trả lời.
          <br />
          <span className="text-violet-700">AI Agent tự làm việc.</span>
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
          Đây là bước nhảy từ phản hồi sang thực thi: agent có thể nhận mục tiêu,
          tự chia nhỏ công việc, đi qua nhiều bước liên tiếp và hoàn thành một nhiệm vụ phức tạp.
        </p>

        <div className="flex flex-1 gap-8">
          <div className="flex-1 border-t-2 border-rose-200 pt-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-500">Chatbot</p>
            <div className="space-y-3">
              {['Nhận lệnh rồi phản hồi', 'Một vòng tương tác', 'Ngữ cảnh ngắn'].map((item) => (
                <p key={item} className="text-2xl font-semibold leading-snug text-gray-400">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flex-1 border-t-2 border-violet-300 pt-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">AI Agent</p>
            <div className="space-y-3">
              {['Nhận mục tiêu rồi lên kế hoạch', 'Thực hiện nhiều bước liên tiếp', 'Duy trì ngữ cảnh dài hơn'].map((item) => (
                <p key={item} className="text-2xl font-bold leading-snug text-gray-900">
                  {item}
                </p>
              ))}
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
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-violet-100/60 blur-3xl" />
      <span className="inline-flex w-fit rounded-full bg-violet-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 mb-5">
        Năng lực thực thi
      </span>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-3">
        Khi đã là agent,
        <br />
        <span className="text-violet-700">AI bắt đầu tạo ra đầu ra thực</span>
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
        Không dừng ở việc trả lời. Agent có thể đi ra ngoài mô hình chat để nghiên cứu,
        viết, chạy, phân tích và kết nối với hệ thống.
      </p>

      <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-8">
        {capabilities.map((c) => (
          <div key={c.title} className="flex flex-col justify-center border-l-4 border-violet-300 pl-5 pr-3">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl">{c.icon}</span>
              <p className="text-2xl font-bold leading-tight text-gray-900">{c.title}</p>
            </div>
            <p className="text-base leading-relaxed text-gray-600">{c.body}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}

export const slidesAIAgent = [SlideAIAgent01, SlideAIAgent02]
