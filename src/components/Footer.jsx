import { useT } from '../i18n/LanguageContext'
import Staff from './Staff'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="site-footer">
      {/* Pentagrama: suena al pulsarlo */}
      <div className="container-page">
        <Staff />
      </div>
      <div className="container-page site-footer-inner">
        <span className="mono-meta">{t('footer.copy')}</span>
        <a href="#hero" className="logo">la<span>penca</span>dev</a>
      </div>
    </footer>
  )
}
