import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPostsData } from '@/data/blog'

export function generateStaticParams() {
  return blogPostsData.map((b) => ({
    slug: b.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsData.find((b) => b.slug === slug)

  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <Link href="/blog" className="text-brand-700 text-sm font-semibold hover:text-brand-900 transition-colors mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to All Articles
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-3xl mb-8 shadow-md"
          />

          <div className="flex items-center gap-3">
            <span className="bg-gold-400 text-brand-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-brand-900 mt-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-500 text-sm mt-4 pb-6 border-b border-gray-100">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mt-8 space-y-6">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-display font-bold text-brand-900 mt-6">{paragraph.replace('### ', '')}</h3>
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-display font-bold text-brand-900 mt-8 mb-3">{paragraph.replace('## ', '')}</h2>
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {paragraph.split('\n').map((line, j) => (
                      <li key={j}>{line.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i} className="text-base text-gray-700 leading-relaxed">{paragraph}</p>
            })}
          </div>

          {/* WhatsApp Action Box */}
          <div className="mt-12 bg-cream-50 border border-brand-100 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-brand-900 text-xl">Ready to Improve Your Soil Quality?</h3>
            <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
              Get personalized organic fertilizer recommendations for your farm directly on WhatsApp.
            </p>
            <div className="mt-5">
              <a
                href={`https://wa.me/923000000000?text=Hi,%20I%20read%20your%20article%20on%20${encodeURIComponent(post.title)}%20and%20want%20to%20order%20vermicompost.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-8 inline-flex items-center gap-2"
              >
                <span>💬</span> Order on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  )
}
