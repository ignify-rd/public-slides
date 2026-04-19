import { SlideWrapper } from '../components/SlideWrapper'

import militaryPlan01 from '../assets/military-plan-01.png'
import militaryPlan02 from '../assets/military-plan-02.png'
import militaryPlan03 from '../assets/military-plan-03.png'
import militaryPlan04 from '../assets/military-plan-04.png'

const EVIDENCE_IMAGES = [
  {
    src: militaryPlan01,
    alt: 'Bài báo về AI trong tấn công Mỹ-Israel vào Iran',
    className:
      'left-6 top-20 w-[19rem] -rotate-6 border-white/80',
  },
  {
    src: militaryPlan02,
    alt: 'Bài báo về AI wars và tấn công Iran',
    className:
      'right-4 top-16 w-[25rem] rotate-3 border-white/80',
  },
  {
    src: militaryPlan03,
    alt: 'Bài báo về AI đang tăng tốc chiến tranh tại Iran',
    className:
      'right-24 bottom-8 w-[17rem] -rotate-4 border-white/80',
  },
  {
    src: militaryPlan04,
    alt: 'Bài báo về cuộc chiến AI đầu tiên và xung đột Iran',
    className:
      'left-20 bottom-6 w-[15rem] rotate-5 border-white/80',
  },
]

export function SlideAIRealWorld() {
  return (
    <SlideWrapper className="relative overflow-hidden bg-[#f4f1ea]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(190,24,24,0.12),_transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/6 to-transparent" />

      {EVIDENCE_IMAGES.map((image) => (
        <div
          key={image.alt}
          className={`absolute overflow-hidden rounded-[1.75rem] border-8 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] ${image.className}`}
        >
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-3xl rounded-[2rem] border border-red-200/70 bg-white/88 px-12 py-10 text-center shadow-[0_30px_90px_rgba(127,29,29,0.12)] backdrop-blur-sm">
          <span className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-red-700">
            Mức độ nghiêm trọng
          </span>

          <h2 className="text-5xl font-extrabold leading-[1.05] text-slate-950">
            AI đang được dùng cho
            <br />
            <span className="text-red-700">kế hoạch quân sự</span>
          </h2>

          <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-red-300 to-transparent" />

          <p className="text-xl font-medium leading-relaxed text-slate-700">
            Không phải mô phỏng. Không phải thí nghiệm.
            <br />
            <span className="font-extrabold text-slate-950">
              Kế hoạch thật. Cho cuộc chiến thật.
            </span>
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
