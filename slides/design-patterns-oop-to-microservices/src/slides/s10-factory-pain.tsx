import { motion } from 'framer-motion'
import { T, clamp } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import type { SlideProps } from './types'

const CODE = `// upload.controller.ts — và 4 file khác y hệt…
if (file.type === 'pdf') {
  parser = new PdfParser(licenseKey)
} else if (file.type === 'docx') {
  parser = new DocxParser({ strict: true })
} else if (file.type === 'html') {
  parser = new HtmlParser(sanitizer)
}
// thêm XML? → mở TỪNG file, thêm TỪNG nhánh if`

export default function S10FactoryPain(_: SlideProps) {
  // cycle the three `new` sites, then flash the ripple-effect warning
  const phase = useTicker([1500, 1500, 1500, 2600])
  const badLine = [2, 4, 6][phase] ?? -1
  return (
    <SlideLayout
      kicker="CREATIONAL · FACTORY METHOD — NỖI ĐAU"
      title={<>Rừng <Em>if/else new…</Em> mọc lại ở mọi nơi sử dụng</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Logic khởi tạo bị lặp', d: 'if/else giống hệt nhau rải khắp codebase' },
              { t: 'Client biết quá nhiều', d: 'phải hiểu constructor, tham số của từng class cụ thể' },
              { t: 'Thêm 1 định dạng = sửa N chỗ', d: 'vi phạm Open/Closed — dễ sót, dễ vỡ' },
            ]}
          />
        }
        right={
          <div style={{ width: 640 }}>
            <CodeBlock code={CODE} fs={13.5} title="🔥 lặp lại ở 5 files" bad={phase === 3 ? [2, 4, 6, 8] : [badLine]} />
            <motion.div
              animate={{ opacity: phase === 3 ? 1 : 0 }}
              style={{
                marginTop: 16,
                fontFamily: T.mono,
                fontSize: clamp('0.72rem', '1.1vw', '0.85rem'),
                color: T.danger,
                fontWeight: 700,
              }}
            >
              ⚠ 1 định dạng mới → chạm vào 5 files × 3 nhánh — quên 1 chỗ là bug production
            </motion.div>
          </div>
        }
      />
    </SlideLayout>
  )
}
