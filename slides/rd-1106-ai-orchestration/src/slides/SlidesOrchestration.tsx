import { SlideWrapper } from '../components/SlideWrapper'

function SlideOrchestration01() {
  const points = [
    { step: '01', title: 'Orchestrator', body: 'Nhận mục tiêu, phân chia và phân công cho các sub-agent' },
    { step: '02', title: 'Sub-agents chuyên biệt', body: 'Mỗi agent phụ trách một tác vụ cụ thể như nghiên cứu, code, phân tích' },
    { step: '03', title: 'Luồng công việc tự động', body: 'Đầu ra của agent này trở thành đầu vào của agent tiếp theo' },
    { step: '04', title: 'Giám sát & kiểm soát', body: 'Con người theo dõi, can thiệp và phê duyệt kết quả cuối' },
  ]

  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl" />

      <span className="inline-flex w-fit rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-700 mb-5">
        Giai đoạn 4
      </span>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
        AI Orchestration là khi
        <br />
        <span className="text-orange-700">nhiều agent bắt đầu làm việc như một hệ thống</span>
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
        Thay vì một AI đơn lẻ, tổ chức lúc này vận hành một mạng lưới agent chuyên biệt.
        Một nhạc trưởng điều phối toàn bộ để biến nhiều năng lực rời rạc thành một quy trình thống nhất.
      </p>

      <div className="grid flex-1 grid-cols-4 gap-6 items-start">
        {points.map((item) => (
          <div key={item.title} className="border-l-4 border-orange-300 pl-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">{item.step}</p>
            <p className="mb-2 text-2xl font-bold leading-snug text-gray-900">{item.title}</p>
            <p className="text-base leading-relaxed text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}

function SlideOrchestration02() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}assets/orchestration-showcase.png`}
        alt="AI Orchestration showcase"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
      <div className="relative z-10 flex flex-1 flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          AI Orchestration trong thực tế
        </h2>
      </div>
    </SlideWrapper>
  )
}

function SlideOrchestration04() {
  const layers = [
    {
      layer: 'Tầng kinh doanh',
      borderClass: 'border-purple-400',
      items: ['Phê duyệt kết quả', 'Kiểm soát ngân sách', 'Định hướng mục tiêu'],
    },
    {
      layer: 'Tầng Orchestrator',
      borderClass: 'border-blue-400',
      items: ['Xác thực & phân quyền', 'Audit log toàn bộ hành động', 'Giám sát anomaly'],
    },
    {
      layer: 'Tầng Sub-agents',
      borderClass: 'border-green-400',
      items: ['Sandbox isolation', 'Giới hạn quyền truy cập data', 'Rate limiting & timeout'],
    },
    {
      layer: 'Tầng dữ liệu & hệ thống',
      borderClass: 'border-orange-400',
      items: ['Mã hóa end-to-end', 'Phân quyền theo vai trò (RBAC)', 'Không lưu dữ liệu nhạy cảm'],
    },
  ]

  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="mb-3">
        <span className="inline-block rounded bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-700">
          Bảo mật phân tầng
        </span>
      </div>
      <h2 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-gray-900 mb-4">
        Kiến trúc bảo mật trong AI Orchestration
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-8">
        Khi nhiều agent cùng truy cập dữ liệu và hành động trên hệ thống thật, bảo mật không thể đặt ở một điểm.
        Nó phải được chia thành nhiều tầng kiểm soát nối tiếp nhau.
      </p>

      <div className="flex flex-1 flex-col gap-5">
        {layers.map((l) => (
          <div key={l.layer} className={`rounded-r-2xl border-l-4 bg-white/80 px-5 py-4 shadow-sm ${l.borderClass}`}>
            <p className="mb-3 text-xl font-bold text-gray-900">{l.layer}</p>
            <div className="flex flex-wrap gap-3">
              {l.items.map((item) => (
                <span key={item} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}

export const slidesOrchestration = [
  SlideOrchestration01,
  SlideOrchestration02,
  SlideOrchestration04,
]
