import { SlideWrapper } from '../components/SlideWrapper'

function SlidePersonalAssistant01() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />

      <span className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-5">
        Giai đoạn 3
      </span>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
        Personal AI Assistant là khi
        <br />
        <span className="text-emerald-700">AI bắt đầu hiểu chính bạn</span>
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
        Không chỉ tự làm việc, AI lúc này còn hiểu lịch sử làm việc, cách giao tiếp,
        ưu tiên và mục tiêu của từng cá nhân để hỗ trợ theo đúng ngữ cảnh riêng.
      </p>

      <div className="flex flex-1 gap-10">
        <div className="flex flex-1 flex-col gap-6">
          {[
            { icon: '🧠', title: 'Học và thích nghi', body: 'Nhớ sở thích, phong cách và lịch sử làm việc của bạn' },
            { icon: '📅', title: 'Quản lý thời gian & ưu tiên', body: 'Sắp xếp lịch, nhắc nhở, phân loại công việc tự động' },
            { icon: '✍️', title: 'Soạn thảo cá nhân hóa', body: 'Viết email, báo cáo đúng tone và style của bạn' },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-emerald-300 pl-5">
              <p className="mb-1 text-2xl font-bold text-gray-900">
                <span className="mr-3">{item.icon}</span>
                {item.title}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="w-[23rem] self-end rounded-[1.75rem] border border-emerald-200 bg-emerald-50/80 p-6 shadow-[0_24px_70px_rgba(5,150,105,0.12)]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Ví dụ thực tế</p>
          <p className="text-lg font-medium leading-relaxed text-emerald-950">
            “Sáng mai có meeting với client. Hãy tóm tắt 3 email gần nhất, chuẩn bị agenda,
            rồi soạn email nhắc lại cho team.”
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
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute left-10 bottom-8 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />

      <span className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-5">
        Tích hợp toàn diện
      </span>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
        Personal AI mạnh lên khi
        <br />
        <span className="text-emerald-700">nó sống trong hệ sinh thái công việc của bạn</span>
      </h2>

      <div className="flex flex-1 flex-col gap-8">
        <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-5">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 border-b border-emerald-100 pb-4">
              <div className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
              <span className="text-xl leading-snug text-gray-800">{f}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-emerald-200 pt-5">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Kết quả đo lường được</p>
          <p className="text-2xl font-bold leading-snug text-emerald-950">
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
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute right-8 top-12 h-56 w-56 rounded-full bg-red-100/60 blur-3xl" />

      <div className="mb-5">
        <span className="inline-block rounded bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-600">
          Bảo mật & An toàn
        </span>
      </div>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
        Bảo mật khi dùng Personal AI Assistant
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
        Càng cá nhân hóa sâu, bài toán an toàn càng trở nên nhạy cảm. Đây không còn là chuyện trải nghiệm,
        mà là chuyện quyền truy cập, dữ liệu và kỷ luật vận hành.
      </p>

      <div className="flex flex-1 flex-col justify-between gap-6">
        {risks.map((r) => (
          <div key={r.risk} className="grid grid-cols-[1.3fr_1.7fr] gap-6 border-t border-red-100 pt-5">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-red-500">Rủi ro</p>
              <p className="text-2xl font-bold leading-snug text-gray-900">{r.risk}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">Cách kiểm soát</p>
              <p className="text-lg leading-relaxed text-gray-700">{r.mitigation}</p>
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
