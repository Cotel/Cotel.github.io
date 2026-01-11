interface ExperienceEntry {
  title: string
  company: string
  period: string
  challenge: string
  impact?: string
  focus: string[]
}

const experiences: ExperienceEntry[] = [
  {
    title: 'Founding Engineer',
    company: 'TACTER',
    period: 'Oct 2020 – Present',
    challenge:
      'To build a coaching and strategy platform for gamers from the ground up, as the first engineering hire. The core challenge was creating a multi-platform ecosystem (Web, Android, iOS) that was highly performant and scalable for a global market.',
    impact:
      'Developing a solid architecture allowed us to scale the product rapidly, achieving the milestone of the $3.4M Seed Round and becoming official Riot Games partners.',
    focus: [
      'Advanced Cross-Platform: Architected the mobile platform around Kotlin Multiplatform (KMP) to share the Business Logic and Data Layer across iOS and Android.',
      'Innovation: Participated in the implementation of AI Features (RAG Systems) to offer personalized game recommendations and Web3 gaming integrations.',
      'Fullstack: Development of the landing page and user platform using Next.js and React-Native.',
      'Leadership: Established initial technical hiring processes and mentored junior engineers.',
    ],
  },
  {
    title: 'Senior Android Engineer',
    company: 'JEFF',
    period: 'Feb 2020 – Oct 2020',
    challenge:
      'Integrating multiple business verticals (laundry, fitness, etc.) into a single "Super App." This demanded a total architectural refactoring to support growth and the autonomy of multiple development teams.',
    focus: [
      'Part of the Core Team that successfully migrated and modularized large segments of the app from Java to Kotlin.',
      'Implemented a Clean Architecture that decoupled teams, allowing for independent feature rollouts without affecting the entire ecosystem.',
    ],
  },
  {
    title: 'Android Architect',
    company: 'VITCORD',
    period: 'May 2018 – Dec 2019',
    challenge:
      'Redesigning the core architecture of a video content social network looking to scale rapidly.',
    impact:
      'Lead architect responsible for the new Android app in Kotlin, contributing to a platform that reached 500k MAUs and facilitated the securing of $3M across funding rounds.',
    focus: [],
  },
  {
    title: 'Co-Founder & Full-Stack Developer',
    company: 'COME',
    period: 'Nov 2016 – May 2018',
    challenge:
      'Co-founded a project to build a complete ecosystem for restaurants.',
    impact:
      'Winners of IDEAS Institute 2k17.',
    focus: [
      'Led development across the full stack: Kotlin (Android), React (Web), and Node.js (Backend).',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'PLEASOUND',
    period: 'Jul 2017 – May 2018',
    challenge:
      'Building serverless backend infrastructure and mobile applications for a music-tech startup.',
    focus: [
      'AWS Serverless architecture with Python and Lambda.',
      'iOS application development using Swift and UIKit.',
    ],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'INFOPORT',
    period: 'Jan 2017 – Jun 2017',
    challenge:
      'Maintenance and development of systems for port logistics.',
    focus: [
      'Worked with Angular, Ionic, and .NET technologies.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-accent mb-8">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[5px] rounded-full bg-accent" />

              <span className="text-sm font-medium text-accent">{exp.period}</span>
              <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
              <p className="text-gray-600 mb-3">{exp.company}</p>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-accent">The Challenge:</strong> {exp.challenge}
                </p>

                {exp.impact && (
                  <p>
                    <strong className="text-accent">The Impact:</strong> {exp.impact}
                  </p>
                )}

                {exp.focus.length > 0 && (
                  <div>
                    <strong className="text-accent">Technical Focus:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {exp.focus.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
