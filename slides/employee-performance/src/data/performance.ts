export const scoreWeights = [
  { label: '\\omega_{SP}', weight: 0.3, description: 'Trọng số cho Story Points (mặc định 0.30)' },
  { label: '\\omega_{eff}', weight: 0.35, description: 'Trọng số cho Efficiency (mặc định 0.35)' },
  { label: '\\omega_{power}', weight: 0.35, description: 'Trọng số cho Power Level (mặc định 0.35)' },
]

export const formulaValueDetails = [
  {
    code: 'SP',
    range: '>= 0',
    meaning: 'Tổng khối lượng công việc bạn đã hoàn thành trong tháng.',
    source: 'Lấy từ Jira issues đã hoàn thành trong kỳ.',
  },
  {
    code: 'max(SP)',
    range: '> 0',
    meaning: 'Mốc SP cao nhất của một người trong cùng tháng.',
    source: 'Dùng làm mốc 100% để so sánh tương đối.',
  },
  {
    code: 'Efficiency',
    range: '0 đến eff_threshold',
    meaning: 'Mức hiệu quả giữa giờ ước lượng và giờ đã log, nhưng có chặn trần.',
    source: 'Tính từ Est_hours / logged_hours rồi chặn ở eff_threshold.',
  },
  {
    code: 'eff_threshold',
    range: '> 0',
    meaning: 'Mức trần tối đa của Efficiency.',
    source: 'Lấy từ Settings > Max Efficiency Threshold, mặc định 2.0.',
  },
  {
    code: 'Missed_hours',
    range: '>= 0',
    meaning: 'Tổng số giờ của phần việc bị trễ deadline.',
    source: 'Dùng để tạo hệ số trừ điểm vì trễ hạn.',
  },
  {
    code: 'power_coeff',
    range: '> 0',
    meaning: 'Hệ số điều chỉnh theo vị trí và level hiện tại.',
    source: 'Lấy từ Power Level Matrix trong Settings.',
  },
  {
    code: 'logged_hours < 50% × median',
    range: 'Điều kiện giảm điểm',
    meaning: 'Nếu log quá ít so với mặt bằng chung của tháng, điểm chỉ còn 70%.',
    source: 'Rule kiểm tra hoạt động thấp: Score *= 0.7.',
  },
  {
    code: 'ω_SP',
    range: '>= 0',
    meaning: 'Trọng số của phần SP trong điểm tổng. Số này càng lớn thì SP ảnh hưởng càng nhiều.',
    source: 'Lấy từ Settings > Weight: Story Points, mặc định 0.30.',
  },
  {
    code: 'ω_eff',
    range: '>= 0',
    meaning: 'Trọng số của phần Efficiency trong điểm tổng. Số này càng lớn thì Efficiency ảnh hưởng càng nhiều.',
    source: 'Lấy từ Settings > Weight: Efficiency, mặc định 0.35.',
  },
  {
    code: 'ω_power',
    range: '>= 0',
    meaning: 'Trọng số của phần điều chỉnh theo level/vị trí. Số này càng lớn thì power_coeff ảnh hưởng càng nhiều.',
    source: 'Lấy từ Settings > Weight: Power Level, mặc định 0.35.',
  },
]

export const formulaPurposeDetails = [
  {
    tex: String.raw`Efficiency=\min\left(\frac{Est_{hours}}{logged_{hours}},\;eff_{threshold}\right)`,
    purpose: 'Hiểu đơn giản: cùng khối lượng việc, log ít giờ hơn thì Efficiency cao hơn, nhưng chỉ được tính đến một mức trần.',
    meaning:
      'eff_threshold là mức trần này, mặc định 2.0. Nó giúp tránh trường hợp log quá ít giờ làm khiến tỷ lệ tăng quá mạnh và làm điểm đẹp giả.',
  },
  {
    tex: String.raw`\frac{SP}{\max(SP)}`,
    purpose: 'Hiểu đơn giản: xem khối lượng công việc của bạn đang bằng bao nhiêu phần so với người cao nhất tháng.',
    meaning:
      'Ví dụ người cao nhất đạt 60 SP, bạn đạt 30 SP thì giá trị này = 30/60 = 0.5. Nghĩa là bạn đang đạt 50% mốc cao nhất của tháng.',
  },
  {
    tex: String.raw`\frac{Efficiency}{\max(Efficiency)}`,
    purpose: 'Hiểu đơn giản: xem mức hiệu quả của bạn đang bằng bao nhiêu phần so với người hiệu quả nhất tháng.',
    meaning:
      'Ví dụ Efficiency cao nhất là 1.5, bạn đạt 1.2 thì giá trị này = 1.2/1.5 = 0.8. Nghĩa là phần Efficiency của bạn đang bằng 80% mốc cao nhất của tháng.',
  },
  {
    tex: String.raw`\frac{\min(power_{coeff})}{power_{coeff}}`,
    purpose: 'Hiểu đơn giản: hệ thống có một bước quy đổi để tránh so sánh lệch giữa các level và vị trí khác nhau.',
    meaning:
      'Mục đích là đưa mọi người về gần cùng chuẩn so sánh, để điểm phản ánh kết quả làm việc chứ không chỉ phản ánh cấp độ hiện tại.',
  },
  {
    tex: String.raw`\left(1-\frac{Missed_{hours}}{Est_{hours}}\right)`,
    purpose: 'Hiểu đơn giản: trễ càng nhiều thì hệ số này càng nhỏ và điểm cuối càng bị kéo xuống.',
    meaning:
      'Ví dụ nếu phần trễ chiếm 10% tổng giờ ước lượng thì điểm sau cùng chỉ còn khoảng 90% phần điểm trước đó.',
  },
  {
    tex: String.raw`\begin{aligned}
logged_{hours} &< 0.5\times median(logged_{hours}) \\
&\Rightarrow Score\times=0.7
\end{aligned}`,
    purpose: 'Hiểu đơn giản: nếu log giờ quá thấp so với mặt bằng tháng thì hệ thống giảm điểm thêm một bước.',
    meaning:
      'Mục đích là ngăn trường hợp điểm cao nhưng dữ liệu hoạt động thực tế lại thấp bất thường.',
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
  employee: 'Trần Quốc Việt',
  role: 'Fullstack Developer',
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
