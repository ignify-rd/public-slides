export const scoreWeights = [
  { label: '\\omega_{SP}', weight: 0.3, description: 'Trọng số cho Story Points (mặc định 0.30)' },
  { label: '\\omega_{eff}', weight: 0.35, description: 'Trọng số cho Efficiency (mặc định 0.35)' },
  { label: '\\omega_{power}', weight: 0.35, description: 'Trọng số cho Power Level (mặc định 0.35)' },
]

export const formulaValueDetails = [
  {
    code: 'SP',
    range: '>= 0',
    meaning: 'Tổng Story Points đã hoàn thành trong tháng.',
    source: 'Lấy từ Jira issues hoàn thành trong kỳ.',
  },
  {
    code: 'max(SP)',
    range: '> 0',
    meaning: 'Story Points cao nhất của một nhân viên trong cùng tháng.',
    source: 'Dùng để chuẩn hóa SP về cùng thang điểm.',
  },
  {
    code: 'Efficiency',
    range: '0 đến eff_threshold',
    meaning: 'Hiệu suất giờ làm sau khi chặn ngưỡng.',
    source: 'min(Est_hours / logged_hours, eff_threshold).',
  },
  {
    code: 'Missed_hours',
    range: '>= 0',
    meaning: 'Tổng giờ bị trễ deadline trong tháng.',
    source: 'Dùng để tạo hệ số (1 - Missed_hours / Est_hours).',
  },
  {
    code: 'power_coeff',
    range: '> 0',
    meaning: 'Hệ số năng lực theo vị trí và level hiện tại.',
    source: 'Lấy từ Power Level Matrix trong phần Settings.',
  },
  {
    code: 'logged_hours < 50% × median',
    range: 'Điều kiện giảm điểm',
    meaning: 'Nếu thời gian log quá thấp so với median tháng, điểm bị nhân 0.7.',
    source: 'Rule giảm điểm thấp hoạt động: Score *= 0.7.',
  },
]

export const monthlyTrend = [
  { month: 'T11', score: 77 },
  { month: 'T12', score: 79 },
  { month: 'T1', score: 81 },
  { month: 'T2', score: 82 },
  { month: 'T3', score: 84 },
]

export const ratingDistribution = [
  { band: 'A (>=90)', people: 14 },
  { band: 'B (80-89)', people: 26 },
  { band: 'C (70-79)', people: 11 },
  { band: 'D (<70)', people: 5 },
]

export const kpiHealth = [
  { metric: 'Story Points', value: 88 },
  { metric: 'Efficiency', value: 84 },
  { metric: 'Missed Factor', value: 90 },
  { metric: 'Power Coeff', value: 86 },
]

export const sampleCase = {
  employee: 'Nguyễn Minh An',
  role: 'Backend Developer',
  storyPoints: 42,
  maxStoryPoints: 56,
  estHours: 160,
  loggedHours: 152,
  missedHours: 12,
  efficiency: 1.05,
  efficiencyMax: 1.3,
  powerCoeff: 1.1,
  minPowerCoeff: 0.9,
  weightSp: 0.3,
  weightEfficiency: 0.35,
  weightPower: 0.35,
}
