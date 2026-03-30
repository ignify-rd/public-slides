import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide09HumanSkills() {
  const skills = [
    {
      icon: '🏗',
      title: 'System design',
      desc: 'Quyet dinh kien truc, trade-off, scalability - AI chỉ co biet pattern.',
    },
    {
      icon: '🐛',
      title: 'Debug loi phuc tap',
      desc: 'Loi xay ra tu su ket hop cua nhieu he thong, khong co trong training data.',
    },
    {
      icon: '🤝',
      title: 'Giao tiep voi stakeholder',
      desc: 'Hieu yeu cau mo ho, dam phan scope, dieu phoi giua team va khach hang.',
    },
    {
      icon: '⚖',
      title: 'Quyet dinh dao duc / rui ro',
      desc: 'Chon giai phap phu hop voi boi canh to chuc, phap ly, nguoi dung.',
    },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 96,
        paddingRight: 96,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'left',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Nhung gi van can con nguoi
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          AI chua the thay the duoc
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
              style={{
                background: theme.colors.accentDim,
                border: `1px solid ${theme.colors.borderAccent}`,
                borderRadius: 12,
                padding: '20px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ fontSize: '1.4rem' }}>{skill.icon}</div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                }}
              >
                {skill.title}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                }}
              >
                {skill.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
