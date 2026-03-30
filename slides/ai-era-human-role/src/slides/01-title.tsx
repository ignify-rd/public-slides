import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft } from '../lib/animations'

export function Slide01Title() {
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
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.6,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      {/* Left panel - main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          Developer Insights Series
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          Con nguoi trong
          <br />
          <span style={{ color: theme.colors.accent }}>ky nguyen AI</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          style={{
            width: 48,
            height: 2,
            background: theme.colors.accent,
            marginBottom: 28,
          }}
        />

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 420,
          }}
        >
          AI viet code ngay cang nhieu. Vai tro cua lap trinh vien thay doi nhu the nao?
        </motion.p>
      </motion.div>

      {/* Right panel - decorative topics */}
      <div
        style={{
          flex: '0 0 40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
          variants={slideFromLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            paddingLeft: 48,
          }}
        >
          {['AI adoption', 'Productivity vs risk', 'Role shift', 'What humans keep'].map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: theme.colors.accent,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: theme.sizes.body,
                  color: theme.colors.textMuted,
                  fontWeight: 500,
                }}
              >
                {topic}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            position: 'absolute',
            right: 48,
            bottom: 48,
            fontSize: 'clamp(6rem, 12vw, 11rem)',
            fontWeight: 800,
            color: 'rgba(67, 97, 238, 0.08)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          01
        </motion.div>
      </div>
    </div>
  )
}
