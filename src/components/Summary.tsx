export default function Summary() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-accent mb-6">Professional Summary</h2>

      <div className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          My career is defined by the capacity to act as a{' '}
          <strong className="text-accent">Founding Engineer</strong>: the individual who
          builds the core system from scratch and makes it scalable. With 9+ years of
          experience, I have navigated the complexity of creating hybrid technology
          ecosystems, combining the high performance of native mobile development
          (Android, iOS) with the versatility of advanced web platforms (Next.js, React).
        </p>

        <p>
          My specialty lies in{' '}
          <strong className="text-accent">Cross-Platform Architecture and Convergence</strong>.
          I have led implementations of{' '}
          <strong className="text-accent">Kotlin Multiplatform (KMP)</strong> to maximize
          shared logic and reduce technical debt. My focus is not just writing clean code,
          but designing modular architectures that support exponential growth (up to 500k
          Monthly Active Users) and facilitate investment rounds, such as the{' '}
          <strong className="text-accent">$3.4M Seed Round</strong> we secured at Tacter.
        </p>

        <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600 my-6">
          My Mission: To translate the business vision into robust and profitable technical
          solutions.
        </blockquote>
      </div>
    </section>
  )
}
