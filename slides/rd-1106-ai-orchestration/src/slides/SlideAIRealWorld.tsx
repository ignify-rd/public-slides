import { SlideWrapper } from '../components/SlideWrapper'

const CASES = [
  {
    icon: '🏥',
    sector: 'Y tế',
    title: 'Chẩn đoán hình ảnh',
    desc: 'AI đọc X-quang, MRI với độ chính xác ngang chuyên gia - hỗ trợ bác sĩ tại bệnh viện tuyến cơ sở.',
    impact: 'Phát hiện ung thư giai đoạn sớm tăng 30%',
    color: 'bg-red-50 border-red-200',
    badge: 'text-red-700 bg-red-100',
  },
  {
    icon: '🏦',
    sector: 'Tài chính',
    title: 'Phát hiện gian lận',
    desc: 'AI phân tích hàng triệu giao dịch mỗi giây, nhận diện bất thường và chặn gian lận trong thời gian thực.',
    impact: 'Giảm 60% tổn thất do gian lận',
    color: 'bg-blue-50 border-blue-200',
    badge: 'text-blue-700 bg-blue-100',
  },
  {
    icon: '🔒',
    sector: 'Bảo mật',
    title: 'Phân tích mối đe dọa',
    desc: 'AI giám sát network 24/7, phân tích log, phát hiện tấn công zero-day trước khi gây thiệt hại.',
    impact: 'Thời gian phát hiện tấn công giảm từ 200 ngày xuống 2 ngày',
    color: 'bg-purple-50 border-purple-200',
    badge: 'text-purple-700 bg-purple-100',
  },
  {
    icon: '⚙️',
    sector: 'Sản xuất',
    title: 'Bảo trì dự đoán',
    desc: 'AI phân tích cảm biến máy móc, dự đoán sự cố trước khi xảy ra - tránh dừng sản xuất ngoài kế hoạch.',
    impact: 'Giảm 45% thời gian ngừng máy ngoài kế hoạch',
    color: 'bg-orange-50 border-orange-200',
    badge: 'text-orange-700 bg-orange-100',
  },
]

export function SlideAIRealWorld() {
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Thực tế doanh nghiệp
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
        AI đang được dùng trong những tình huống nghiêm trọng
      </h2>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Không phải demo - đây là các hệ thống AI đang chạy thật, xử lý quyết định quan trọng hàng ngày.
      </p>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {CASES.map((c) => (
          <div key={c.title} className={`flex flex-col gap-2 rounded-xl border p-5 ${c.color}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{c.icon}</span>
              <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full ${c.badge}`}>{c.sector}</span>
            </div>
            <p className="font-bold text-gray-900 text-sm">{c.title}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
            <p className="text-xs font-semibold text-gray-800 mt-auto border-t border-gray-200 pt-2">
              {c.impact}
            </p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  )
}
