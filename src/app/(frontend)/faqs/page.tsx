import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'

export const metadata = {
  title: 'Frequently Asked Questions | Al Barakh Organics',
  description:
    'Find answers to commonly asked questions about vermicompost, our organic fertilizers, application methods, and farmer training programs.',
}

const faqs = [
  {
    q: 'Where are you located?',
    a: 'We operate in Tando Ghulam Ali and Hyderabad, Sindh.',
  },
  {
    q: 'Do you collaborate with B2B clients?',
    a: 'Yes. We are always open to partnerships and collaborations with businesses, farms, nurseries, retailers, and other organizations.',
  },
  {
    q: 'Do you offer agricultural internships?',
    a: 'Yes. We welcome agriculture students and young learners for practical exposure and internship opportunities.',
  },
  {
    q: 'What products do you offer?',
    a: 'We currently offer premium-quality vermicompost and plan to expand into vermiwash, biochar, and other sustainable agricultural solutions.',
  },
  {
    q: 'Can we visit your production facility?',
    a: 'Yes. Visitors, farmers, students, and agricultural professionals are welcome by prior appointment.',
  },
  {
    q: 'Do you provide online agricultural consultancy and lectures?',
    a: 'Yes. We provide online lectures, awareness sessions, training, and agricultural consultancy for individuals, institutions, and organizations.',
  },
]

export default function FAQsPage() {
  return (
    <>
      <Header />
      <section className="px-6 py-20 text-center">
        <FadeIn>
          <p className="eyebrow">Questions? Answered.</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-brand-900 mt-4">
            Frequently Asked Questions
          </h1>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="border border-brand-100 rounded-2xl p-6 bg-white hover:-translate-y-1 transition-transform duration-200 shadow-sm">
              <h3 className="font-display font-semibold text-brand-900">{faq.q}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </FadeIn>
        ))}
        
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <h3 className="font-display font-semibold text-brand-900">Still have a question?</h3>
            <p className="text-gray-600 text-sm mt-2 mb-6">Our agricultural experts are ready to help.</p>
            <a
              href="https://wa.me/923168803363"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
