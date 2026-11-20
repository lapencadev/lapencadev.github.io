import { useT } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="site-footer">
      <div className="container-page site-footer-inner">
        <span className="mono-meta">{t('footer.copy')}</span>
        <a href="#hero" className="logo">la<span>penca</span>dev</a>
      </div>
    </footer>
  )
}
