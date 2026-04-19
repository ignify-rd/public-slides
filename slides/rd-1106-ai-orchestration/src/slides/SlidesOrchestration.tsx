import { SlideWrapper } from '../components/SlideWrapper'

function SlideOrchestration01() {
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">AI Orchestration</h2>
      <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
        Thay vì một AI đơn lẻ, AI Orchestration phối hợp nhiều AI Agent chuyên biệt làm việc song song -
        mỗi agent phụ trách một phần việc, một "nhạc trưởng" điều phối toàn bộ.
      </p>
      <div className="flex gap-4 flex-1">
        <div className="flex-1 grid grid-cols-2 gap-3">
          {[
            { icon: '🎼', title: 'Orchestrator', body: 'Agent điều phối nhận mục tiêu, phân chia và phân công cho các sub-agent' },
            { icon: '🤖', title: 'Sub-agents chuyên biệt', body: 'Mỗi agent được tối ưu cho một tác vụ cụ thể: nghiên cứu, viết code, phân tích...' },
            { icon: '🔄', title: 'Luồng công việc tự động', body: 'Kết quả từ agent này là đầu vào cho agent tiếp theo, tạo pipeline liên mạch' },
            { icon: '📊', title: 'Giám sát & kiểm soát', body: 'Con người theo dõi tiến trình, can thiệp khi cần, và phê duyệt kết quả cuối' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{item.title}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

function SlideOrchestration02() {
  return (
    <SlideWrapper>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        AI Orchestration trong thực tế
      </h2>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}assets/orchestration-showcase.png`}
          alt="AI Orchestration showcase"
          className="max-h-full max-w-full object-contain rounded-xl shadow"
        />
      </div>
    </SlideWrapper>
  )
}

function SlideOrchestration03() {
  const frameworks = [
    { name: 'LangGraph', desc: 'Framework open-source cho multi-agent workflows với state management mạnh mẽ' },
    { name: 'AutoGen (Microsoft)', desc: 'Multi-agent framework cho phép các AI tự thảo luận và phân công nhiệm vụ' },
    { name: 'CrewAI', desc: 'Xây dựng "crew" các AI chuyên biệt với vai trò và nhiệm vụ được định nghĩa rõ' },
    { name: 'Claude Orchestration', desc: 'Anthropic cung cấp native multi-agent support với tính an toàn cao' },
  ]
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Framework & Công nghệ
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Các framework AI Orchestration phổ biến
      </h2>
      <div className="flex flex-col gap-3 flex-1">
        {frameworks.map((f) => (
          <div key={f.name} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex-none w-36 font-bold text-blue-700 text-sm bg-blue-50 rounded-lg px-3 py-2 text-center">
              {f.name}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-1">{f.desc}</p>
          </div>
        ))}
        <div className="bg-gray-100 rounded-xl p-3 mt-1">
          <p className="text-sm text-gray-600">
            Lựa chọn framework phụ thuộc vào: độ phức tạp của workflow, yêu cầu bảo mật, và hệ thống hiện có của doanh nghiệp.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}

function SlideOrchestration04() {
  const layers = [
    {
      layer: 'Tầng kinh doanh',
      color: 'bg-purple-100 border-purple-300 text-purple-800',
      items: ['Phê duyệt kết quả', 'Kiểm soát ngân sách', 'Định hướng mục tiêu'],
    },
    {
      layer: 'Tầng Orchestrator',
      color: 'bg-blue-100 border-blue-300 text-blue-800',
      items: ['Xác thực & phân quyền', 'Audit log toàn bộ hành động', 'Giám sát anomaly'],
    },
    {
      layer: 'Tầng Sub-agents',
      color: 'bg-green-100 border-green-300 text-green-800',
      items: ['Sandbox isolation', 'Giới hạn quyền truy cập data', 'Rate limiting & timeout'],
    },
    {
      layer: 'Tầng dữ liệu & hệ thống',
      color: 'bg-orange-100 border-orange-300 text-orange-800',
      items: ['Mã hóa end-to-end', 'Phân quyền theo vai trò (RBAC)', 'Không lưu dữ liệu nhạy cảm'],
    },
  ]
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Bảo mật phân tầng
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Kiến trúc bảo mật trong AI Orchestration
      </h2>
      <div className="flex flex-col gap-3 flex-1">
        {layers.map((l) => (
          <div key={l.layer} className={`border rounded-xl p-4 ${l.color}`}>
            <p className="text-xs font-bold uppercase mb-2">{l.layer}</p>
            <div className="flex gap-3 flex-wrap">
              {l.items.map((item) => (
                <span key={item} className="text-xs bg-white bg-opacity-60 rounded-full px-2.5 py-1 font-medium">
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
  SlideOrchestration03,
  SlideOrchestration04,
]
