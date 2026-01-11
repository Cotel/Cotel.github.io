const skills = [
  {
    category: 'Native Mobile',
    technologies: 'Kotlin, Jetpack Compose, KMP, Swift, SwiftUI',
    description:
      'Leadership in high-performance native development. Implementation of KMP for shared business logic and mastery of declarative UIs (Compose and SwiftUI).',
  },
  {
    category: 'Web & Frontend',
    technologies: 'React, Next.js, TypeScript, Tailwind',
    description:
      'Designing state-of-the-art web platforms with Next.js for SEO and performance, ensuring seamless synchronization with mobile clients.',
  },
  {
    category: 'Backend & Data',
    technologies: 'Node.js, Python, AWS Serverless, Lambda',
    description:
      'Experience with serverless systems and microservice architectures, with proficiency in Python and Node.js for critical services.',
  },
  {
    category: 'Architecture & DevOps',
    technologies: 'Clean Architecture, Modularization, CI/CD, Git',
    description:
      'Designing architectures that enable team autonomy and improve developer velocity.',
  },
  {
    category: 'Innovation',
    technologies: 'AI Agents, RAG Systems, Web3 Integration',
    description:
      'Exploration and implementation of cutting-edge features to differentiate the product in competitive markets.',
  },
]

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-accent mb-6">Technology Stack</h2>
      <p className="text-gray-600 mb-6">
        My expertise is built on a comprehensive command of the stack, from
        architectural design (Clean Architecture, Modularization) to end-to-end
        frontend and backend implementation.
      </p>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.category} className="border-l-4 border-accent pl-4">
            <h3 className="font-bold text-accent">{skill.category}</h3>
            <p className="text-sm text-gray-500 mb-1">{skill.technologies}</p>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
