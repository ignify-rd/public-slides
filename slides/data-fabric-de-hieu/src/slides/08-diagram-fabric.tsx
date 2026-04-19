import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const sources = ['Excel', 'Cloud DB', 'SQL Server', 'SaaS', 'API']
const consumers = ['Power BI', 'AI/ML', 'Analytics', 'Apps']

export function Slide08DiagramFabric() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '36px 60px',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        style={{
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Data Fabric:{' '}
          <span style={{ color: theme.colors.accent }}>Smart Layer</span>{' '}
          ket noi moi nguon
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          width: '100%',
          maxWidth: 1000,
        }}
      >
        {/* Sources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '0 0 140px' }}>
          {sources.map((src, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                padding: '8px 14px',
                background: theme.colors.bgCard,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 8,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: theme.colors.textMuted,
                textAlign: 'center',
                boxShadow: theme.colors.shadow,
              }}
            >
              {src}
            </motion.div>
          ))}
        </div>

        {/* Arrows to fabric */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', flex: '0 0 60px' }}>
          {sources.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              style={{
                height: 2,
                background: `${theme.colors.accentAlt}60`,
                width: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: -4,
                  top: -4,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: `6px solid ${theme.colors.accentAlt}60`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Data Fabric Core */}
        <motion.div
          variants={scaleIn}
          style={{
            flex: 1,
            background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
            borderRadius: 20,
            padding: '28px 24px',
            textAlign: 'center',
            boxShadow: `0 8px 32px ${theme.colors.accent}30`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🕸</div>
            <div
              style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                color: 'white',
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}
            >
              DATA FABRIC
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.6,
              }}
            >
              Metadata Intelligence
              <br />
              Data Virtualization
              <br />
              AI-powered Governance
              <br />
              Unified Access Layer
            </div>
          </div>
        </motion.div>

        {/* Arrows from fabric */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', flex: '0 0 60px' }}>
          {consumers.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              style={{
                height: 2,
                background: `${theme.colors.accentGreen}60`,
                width: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: -4,
                  top: -4,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: `6px solid ${theme.colors.accentGreen}60`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Consumers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: '0 0 130px' }}>
          {consumers.map((c, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                padding: '10px 14px',
                background: theme.colors.accentGreenDim,
                border: `1px solid ${theme.colors.accentGreen}30`,
                borderRadius: 8,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: theme.colors.accentGreen,
                textAlign: 'center',
              }}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
