import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide05Intent() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 96,
          paddingRight: 48,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Goc nhin quan trong
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          AI khong hieu{' '}
          <span style={{ color: theme.colors.accent }}>y dinh</span>
          <br />
          cua ban
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 430,
            marginBottom: 28,
          }}
        >
          AI toi uu hoa de tao ra code "co ve dung" - khong phai code "dung voi nhu cau cu the".
          No khong biet: tai sao feature nay ton tai, ai su dung, dieu gi se xay ra neu logic sai.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
            padding: '16px 20px',
            fontSize: theme.sizes.body,
            color: theme.colors.text,
            lineHeight: 1.6,
            maxWidth: 430,
          }}
        >
          Code review khong phai la kiem tra syntax -
          la kiem tra <strong>xem AI co hieu dung bai toan khong.</strong>
        </motion.div>
      </motion.div>

      {/* Right panel - visual */}
      <div
        style={{
          flex: '0 0 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: 1,
            background: 'rgba(67, 97, 238, 0.3)',
            transformOrigin: 'top',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            paddingLeft: 48,
          }}
        >
          {[
            { label: 'AI biet', value: 'Syntax + patterns' },
            { label: 'AI biet', value: 'Training data (den 2024)' },
            { label: 'AI khong biet', value: 'Business domain' },
            { label: 'AI khong biet', value: 'System constraints' },
            { label: 'AI khong biet', value: 'User needs' },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  color: row.label === 'AI biet' ? theme.colors.positive : theme.colors.negative,
                  minWidth: 100,
                }}
              >
                {row.label}
              </span>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                {row.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
