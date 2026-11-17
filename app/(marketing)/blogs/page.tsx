import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { blogsData } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

export const metadata: Metadata = {
  title: 'Packaging Insights, Guides & Industry Trends | Kakatiya Printers',
  description:
    'Expert flexible packaging guides, cost reduction strategies, shrink sleeve branding tips, and startup packaging advice from the printing engineers at Kakatiya Printers Hyderabad.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/blogs',
  },
  openGraph: {
    title: 'Packaging Insights & Guides | Kakatiya Printers Hyderabad',
    description:
      'Learn how to reduce packaging costs, choose cylinder-free pouch printing, and maximize shelf visibility.',
    url: 'https://kakatiyaprinters.com/blogs',
    images: [{ url: '/images/blogs/best-printing-company-hyderabad.webp', width: 1200, height: 630 }],
  },
};

export default function BlogsHubPage() {
  return (
    <div>
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blogs' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              Knowledge & Insights
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Flexible Packaging Guides, Trends & Cost-Saving Tips
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Explore in-depth articles written by our printing engineers in Hyderabad. Learn how to
              eliminate cylinder setup costs, select barrier films, and optimize packaging for retail
              success.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BLOG ARTICLES GRID */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Latest Articles"
            title="Packaging Wisdom for Modern Consumer Brands"
            subtitle="From startup agility to industrial cost engineering, discover actionable packaging knowledge."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogsData.map((blog) => (
              <article
                key={blog.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition duration-300 hover:shadow-xl hover:border-brand-blue-300"
              >
                {/* Article Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-brand-blue-900/90 text-white backdrop-blur-sm">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                {/* Article Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 font-outfit text-2xl font-bold text-slate-900 group-hover:text-brand-blue-700 transition">
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {blog.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-700 group-hover:text-brand-blue-800 transition"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
