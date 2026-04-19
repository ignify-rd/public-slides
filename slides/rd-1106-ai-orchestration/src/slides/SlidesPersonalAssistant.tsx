import { SlideWrapper } from '../components/SlideWrapper'

function SlidePersonalAssistant01() {
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Personal AI Assistant</h2>
      <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
        Personal AI Assistant kết hợp AI Agent với ngữ cảnh cá nhân hóa sâu: hiểu lịch sử làm việc,
        phong cách giao tiếp, ưu tiên và mục tiêu của từng cá nhân để hỗ trợ tối ưu hơn.
      </p>
      <div className="flex gap-4 flex-1">
        <div className="flex-1 flex flex-col gap-3">
          {[
            { icon: '🧠', title: 'Học và thích nghi', body: 'Nhớ sở thích, phong cách và lịch sử làm việc của bạn' },
            { icon: '📅', title: 'Quản lý thời gian & ưu tiên', body: 'Sắp xếp lịch, nhắc nhở, phân loại công việc tự động' },
            { icon: '✍️', title: 'Soạn thảo cá nhân hóa', body: 'Viết email, báo cáo đúng tone và style của bạn' },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <span className="text-2xl flex-none">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-none w-56 bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col gap-3">
          <p className="text-xs font-bold text-blue-700 uppercase">Ví dụ thực tế</p>
          <p className="text-xs text-blue-800 leading-relaxed">
            "Sáng mai có meeting với client - tôi cần tóm tắt 3 email gần nhất, chuẩn bị agenda, và soạn email nhắc lại cho team."
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}

function SlidePersonalAssistant02() {
  const features = [
    'Tích hợp email, calendar, Slack, Notion',
    'Phân tích document và file đính kèm',
    'Tóm tắt cuộc họp và tạo action items',
    'Đề xuất câu trả lời email thông minh',
    'Tìm kiếm trong toàn bộ workspace',
    'Nhắc nhở dựa trên ngữ cảnh công việc',
  ]
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Personal AI Assistant - Tích hợp toàn diện
      </h2>
      <div className="flex-1 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-none" />
              <span className="text-sm text-gray-700">{f}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
          <p className="text-sm font-bold text-green-800 mb-1">Kết quả đo lường được</p>
          <p className="text-sm text-green-700">
            Nhân viên tiết kiệm trung bình 2-3 giờ/ngày cho các tác vụ quản lý thông tin và giao tiếp thường ngày.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}

function SlidePersonalAssistant03() {
  const risks = [
    {
      risk: 'Rò rỉ dữ liệu nhạy cảm',
      mitigation: 'Chỉ kết nối AI với dữ liệu cần thiết theo nguyên tắc "least privilege"',
    },
    {
      risk: 'Lưu trữ dữ liệu ngoài doanh nghiệp',
      mitigation: 'Dùng phiên bản Enterprise đảm bảo dữ liệu không dùng để train model',
    },
    {
      risk: 'Nhân viên vô tình chia sẻ thông tin mật',
      mitigation: 'Đào tạo AI literacy và ban hành chính sách sử dụng AI rõ ràng',
    },
  ]
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Bảo mật & An toàn
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Bảo mật khi dùng Personal AI Assistant
      </h2>
      <div className="flex flex-col gap-4 flex-1 justify-between">
        {risks.map((r) => (
          <div key={r.risk} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-lg flex-none">⚠️</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-red-700 mb-2">{r.risk}</p>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-sm flex-none">✓</span>
                  <p className="text-sm text-gray-700">{r.mitigation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}

function SlidePersonalAssistant04() {
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Meta & AI</h2>
      <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}assets/meta-case.png`}
          alt="Meta AI case study"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </SlideWrapper>
  )
}

export const slidesPersonalAssistant = [
  SlidePersonalAssistant01,
  SlidePersonalAssistant02,
  SlidePersonalAssistant03,
  SlidePersonalAssistant04,
]
