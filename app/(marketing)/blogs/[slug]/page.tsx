import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  MessageCircle,
  CheckCircle2,
  Phone,
  Tag,
  Package,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { blogsData, BlogPost } from '@/data/blogs';
import { servicesData } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) return { title: 'Article Not Found' };

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://kakatiyaprinters.com/blogs/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | Kakatiya Printers`,
      description: blog.metaDescription,
      url: `https://kakatiyaprinters.com/blogs/${blog.slug}`,
      type: 'article',
      publishedTime: blog.date,
      authors: ['Kakatiya Printers'],
      images: [{ url: blog.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // JSON-LD schema for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kakatiyaprinters.com/blogs/${blog.slug}`,
    },
    headline: blog.title,
    description: blog.metaDescription,
    image: [`https://kakatiyaprinters.com${blog.coverImage}`],
    datePublished: blog.date,
    author: {
      '@type': 'Organization',
      name: 'Kakatiya Printers',
      url: 'https://kakatiyaprinters.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kakatiya Printers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kakatiyaprinters.com/images/logos/Kakatiya-Logo-RGB.png',
      },
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blogs' },
              { label: blog.title, href: `/blogs/${blog.slug}` },
            ]}
          />

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="warning">{blog.category}</Badge>
              <span className="flex items-center gap-1.5 text-xs text-slate-300">
                <Calendar className="h-3.5 w-3.5" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-300">
                <Clock className="h-3.5 w-3.5" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="mt-4 font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT & SIDEBAR */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content Column */}
            <article className="lg:col-span-8">
              {/* Featured Cover Image */}
              <div className="relative mb-10 h-[340px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md md:h-[460px]">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Render Structured Blocks */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                {blog.blocks.map((block, idx) => {
                  if (block.type === 'h2') {
                    return (
                      <h2
                        key={idx}
                        className="font-outfit text-2xl font-extrabold text-slate-900 mt-10 mb-4 pt-4 border-t border-slate-100 first:border-t-0 first:pt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'h3') {
                    return (
                      <h3
                        key={idx}
                        className="font-outfit text-xl font-bold text-slate-900 mt-8 mb-3"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === 'h4') {
                    return (
                      <h4
                        key={idx}
                        className="font-outfit text-lg font-bold text-slate-800 mt-6 mb-2"
                      >
                        {block.text}
                      </h4>
                    );
                  }
                  if (block.type === 'p') {
                    return (
                      <p key={idx} className="my-4 text-base text-slate-700 leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'list' && block.items) {
                    return (
                      <ul key={idx} className="my-5 space-y-2.5 pl-6 list-disc text-slate-700">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags Section */}
              <div className="mt-12 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" /> Tags:
                  </span>
                  {blog.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author / Factory Signoff Card */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-300 flex-shrink-0 bg-white">
                  <Image
                    src="/images/logos/Color-Logo.png"
                    alt="Kakatiya Printers"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-slate-900">
                    Kakatiya Printers Engineering Team
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Specializing in cylinder-free digital flexible packaging and custom labels in
                    Uppal, Hyderabad since 1998.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="space-y-8 lg:col-span-4">
              {/* WhatsApp Conversion Box */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-outfit text-xl font-bold text-slate-900">
                  Planning Your Packaging?
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Chat directly with our packaging engineers on WhatsApp. Share your product
                  dimensions and receive an instant cylinder-free quotation.
                </p>
                <div className="mt-6">
                  <Link
                    href={companyInfo.contact.whatsappUrl(
                      `Hello Kakatiya Printers, I read your article "${blog.title}" and would like to discuss my packaging requirements.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="whatsapp"
                      size="sm"
                      className="w-full justify-center"
                      leftIcon={<MessageCircle className="h-4 w-4" />}
                    >
                      Chat on WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  Related Packaging Services
                </h3>
                <div className="mt-4 divide-y divide-slate-100">
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="flex items-center justify-between py-3 text-sm font-medium text-slate-700 hover:text-brand-blue-700 transition"
                    >
                      <span>{svc.title}</span>
                      <span className="text-xs text-slate-400">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Free Sample Kit Request */}
              <div className="rounded-2xl border border-brand-blue-200 bg-brand-blue-900 p-6 text-white shadow-sm">
                <Badge variant="warning" className="mb-2">
                  Complimentary
                </Badge>
                <h4 className="font-outfit text-lg font-bold">Request Physical Sample Kit</h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  We courier physical pouch and label samples directly to your doorstep anywhere in
                  India.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center border-white/20 text-white hover:bg-white/10"
                    >
                      Request Kit &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
