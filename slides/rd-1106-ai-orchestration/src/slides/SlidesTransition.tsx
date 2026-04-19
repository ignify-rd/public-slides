import { SlideWrapper } from '../components/SlideWrapper'

type TransitionSlideProps = {
  emoji: string
  heading: string
  highlight: string
  subtitle: string
}

function TransitionSlide({ emoji, heading, highlight, subtitle }: TransitionSlideProps) {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
      <div className="relative flex flex-col items-center justify-center flex-1 text-center gap-6">
        <span className="text-6xl">{emoji}</span>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {heading}
          <br />
          <span className="text-blue-600">{highlight}</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">{subtitle}</p>
      </div>
    </SlideWrapper>
  )
}

export function SlideTransitionToChatbot() {
  return (
    <TransitionSlide
      emoji="⏳"
      heading="Vậy... hành trình bắt đầu từ đâu?"
      highlight="Từ Chatbot - bước đầu tiên."
      subtitle="Hầu hết doanh nghiệp bắt đầu ứng dụng AI bằng Chatbot. Đơn giản, nhanh triển khai, dễ đo lường."
    />
  )
}

export function SlideTransitionToAIAgent() {
  return (
    <TransitionSlide
      emoji="🤔"
      heading="Vậy... Chatbot được rồi."
      highlight="Nhưng doanh nghiệp cần AI tự hành động."
      subtitle="Chatbot giỏi trả lời - nhưng không tự làm việc. Khi bài toán phức tạp hơn, AI Agent ra đời."
    />
  )
}

export function SlideTransitionToPersonalAssistant() {
  return (
    <TransitionSlide
      emoji="🧩"
      heading="Vậy... Agent tự chủ được rồi."
      highlight="Nhưng mỗi người cần trải nghiệm khác nhau."
      subtitle="Agent mạnh nhưng chưa hiểu bạn. Personal AI Assistant kết hợp khả năng tự chủ với ngữ cảnh cá nhân hóa sâu."
    />
  )
}

export function SlideTransitionToOrchestration() {
  return (
    <TransitionSlide
      emoji="🏢"
      heading="Vậy... mỗi người đã có AI riêng."
      highlight="Cả tổ chức thì cần gì?"
      subtitle="Khi hàng chục phòng ban cần phối hợp, một AI đơn lẻ không đủ. AI Orchestration giải quyết bài toán ở quy mô tổ chức."
    />
  )
}

export function SlideTransitionToReveal() {
  return (
    <TransitionSlide
      emoji="🔭"
      heading="Vậy... 4 giai đoạn đã đưa chúng ta đến đây."
      highlight="Giai đoạn tiếp theo là gì?"
      subtitle="Chatbot, Agent, Personal AI, Orchestration - tất cả đang hội tụ về một định nghĩa mới về AI trong doanh nghiệp."
    />
  )
}
