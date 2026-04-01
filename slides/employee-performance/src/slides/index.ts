import type { SlideDefinition } from '../types'
import { IntroSlide } from './01-intro'
import { DiscussionSlide } from './03-discussion'
import { FeaturesSlide } from './04-features'
import { FormulaSlide } from './05-formula'
import { FormulaPurposeSlide } from './06-purpose'
import { MetricsSlide } from './06-metrics'
import { ExampleSlide } from './07-example'
import { RulesSlide } from './08-rules'
import { TrendChartSlide } from './09-trend-chart'
import { DistributionChartSlide } from './10-distribution-chart'
import { WorkflowSlide } from './11-workflow'
import { DashboardSlide } from './12-dashboard'
import { HRRolloutSlide } from './13-hr-rollout'
import { ClosingSlide } from './14-closing'

export const slides: SlideDefinition[] = [
  { id: 'intro', title: 'Cách tính điểm Performance hàng tháng', Component: IntroSlide },
  { id: 'discussion', title: '3 điều nhân viên cần nắm rõ', Component: DiscussionSlide },
  { id: 'features', title: '4 phần quan trọng nhân viên cần dùng', Component: FeaturesSlide },
  { id: 'formula', title: 'Công thức tính điểm', Component: FormulaSlide },
  { id: 'formula-purpose', title: 'Mỗi phép tính đang giải quyết vấn đề gì?', steps: 2, Component: FormulaPurposeSlide },
  { id: 'metrics', title: 'Ký hiệu trong công thức', steps: 2, Component: MetricsSlide },
  { id: 'example', title: 'Thay số trực tiếp vào công thức', steps: 3, Component: ExampleSlide },
  { id: 'rules', title: '4 quy tắc điều chỉnh điểm cần nhớ', Component: RulesSlide },
  { id: 'trend', title: 'Xu hướng điểm trung bình đang tăng', Component: TrendChartSlide },
  { id: 'distribution', title: 'Phân bố xếp loại theo band điểm', Component: DistributionChartSlide },
  { id: 'workflow', title: 'Quy trình tháng mà nhân viên cần biết', Component: WorkflowSlide },
  { id: 'dashboard', title: '4 chỉ số bạn nên kiểm tra mỗi tuần', Component: DashboardSlide },
  { id: 'rollout', title: 'Nhân viên cần làm gì ngay', Component: HRRolloutSlide },
  { id: 'closing', title: 'Thông điệp chốt cho nhân viên', Component: ClosingSlide },
]
