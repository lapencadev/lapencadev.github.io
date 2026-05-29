import { useT } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="flex flex-wrap justify-between items-center gap-3 px-6 py-6 sm:px-12 sm:py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <span className="font-mono text-xs" style={{ color: '#8a8aaa' }}>{t('footer.copy')}</span>
      <span className="font-display font-black text-xs tracking-wider" style={{ color: 'var(--neon-pink)' }}>lapencadev</span>
    </footer>
  )
}
