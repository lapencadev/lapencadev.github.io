import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'

const STATIC = [
  {
    role: 'Backend Developer',
    company: 'Tuio',
    chips: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'TDD', 'Claude', 'Grafana', 'OpenTelemetry', 'Sentry'],
  },
  {
    role: 'Custom Software Engineering Analyst',
    company: 'Accenture',
    chips: ['Claude (Anthropic)', 'GitHub Copilot', 'Java Spring Boot', 'Prompt Engineering', 'Agent Architecture'],
  },
  {
    role: 'Backend Software Developer',
    company: 'New Work SE | Xing',
    chips: ['Java', 'Kotlin', 'Kubernetes', 'Grafana', 'Datadog'],
  },
  {
    role: 'Fullstack Developer & PPO',
    company: 'Capgemini',
    chips: ['Java 8–17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Oracle', 'Flyway', 'Jenkins'],
  },
]

function Job({ job }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="reveal job">
      <div className="job-when mono-meta">{job.period}</div>
      <div>
        <h3 className="job-role serif">{job.role}</h3>
        <div className="job-co">{job.company}</div>
        <p className="job-desc">{job.desc}</p>
        <p className="job-stack mono-meta">{job.chips.join(' · ')}</p>
      </div>
    </article>
  )
}

export default function Experience() {
  const { t } = useT()
  const jobs = t('experience.jobs')
  const experience = STATIC.map((s, i) => ({ ...s, ...jobs[i] }))

  return (
    <section id="experience" className="section container-page">
      <WordHeading id="experience" />
      <div className="jobs">
        {experience.map(job => <Job key={job.company} job={job} />)}
      </div>
    </section>
  )
}
