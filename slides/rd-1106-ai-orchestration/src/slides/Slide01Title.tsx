import { SlideWrapper } from '../components/SlideWrapper'

export function Slide01Title() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-1.5 bg-blue-600" />

      <div className="flex h-full">
        <div className="flex flex-col justify-center pl-6 flex-1">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-8">
            AI Orchestration in corporate settings
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Điều phối AI
            <br />
            <span className="text-blue-600">trong môi trường doanh nghiệp</span>
          </h1>
          <div className="w-12 h-0.5 bg-blue-600 mb-6" />
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            Hành trình từ Chatbot đến AI Orchestration - và tầm nhìn về "đồng nghiệp siêu cấp" trong thế giới doanh nghiệp hiện đại
          </p>
        </div>

        <div className="flex-none w-48 flex items-end justify-end pb-8 pr-4">
          <span className="text-9xl font-extrabold text-blue-100 select-none leading-none">AI</span>
        </div>
      </div>
    </SlideWrapper>
  )
}
