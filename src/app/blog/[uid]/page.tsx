import { notFound } from "next/navigation";
import { createClient } from "../../../../prismicio";
import Navigation from "@/components/Navigation";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type Params = { uid: string };

export async function generateStaticParams() {
  const client = createClient();

  try {
    const posts = await (client as any).getAllByType("blog_post");
    return posts.map((post: any) => ({ uid: post.uid }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  try {
    const post = await (client as any).getByUID("blog_post", uid);
    return {
      title: post.data.meta_title || post.data.title || "Blog Post",
      description: post.data.meta_description || post.data.excerpt || "",
    };
  } catch {
    return {
      title: "Blog Post",
    };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  let post;
  let relatedPosts: any[] = [];
  let blogPage = null;

  try {
    post = await (client as any).getByUID("blog_post", uid);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  // Fetch related posts (same category or just recent)
  try {
    const allPosts = await (client as any).getAllByType("blog_post", {
      orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
      limit: 4,
    });
    relatedPosts = allPosts.filter((p: any) => p.uid !== uid).slice(0, 3);
  } catch {
    // No related posts
  }

  // Try to get blog page for footer
  try {
    blogPage = await (client as any).getSingle("blog_page");
  } catch {
    // No blog page
  }

  return (
    <main className="relative bg-white min-h-screen">
      <Navigation theme="light" />

      {/* Hero Section with Featured Image */}
      <section className="w-full bg-[#EDEDED] relative pt-24 md:pt-28">
        <div className="max-w-[1250px] mx-auto px-5 md:px-10 pb-12 md:pb-16">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-black/60 hover:text-black transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.data.category && (
              <span className="font-mono text-xs md:text-sm font-medium text-[#F02C2C] uppercase tracking-wider">
                {post.data.category}
              </span>
            )}
            {post.data.publication_date && (
              <>
                <span className="text-black/30">•</span>
                <span className="font-inter text-sm text-black/50">
                  {new Date(post.data.publication_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </>
            )}
            {post.data.reading_time && (
              <>
                <span className="text-black/30">•</span>
                <span className="font-inter text-sm text-black/50">{post.data.reading_time}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-1px] text-black mb-6 max-w-[900px]">
            {post.data.title}
          </h1>

          {/* Author */}
          {post.data.author && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#202020] flex items-center justify-center">
                <span className="font-inter text-white text-sm font-medium">
                  {post.data.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-inter text-base text-black">{post.data.author}</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.data.featured_image?.url && (
          <div className="max-w-[1250px] mx-auto px-5 md:px-10">
            <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-t-[12px] overflow-hidden">
              <PrismicNextImage
                field={post.data.featured_image}
                className="absolute inset-0 object-cover w-full h-full"
                fallbackAlt=""
                priority
              />
            </div>
          </div>
        )}
      </section>

      {/* Article Content */}
      <article className="w-full max-w-[1250px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16">
          {/* Main Content */}
          <div className="blog-content">
            <PrismicRichText
              field={post.data.content}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-trap text-[22px] md:text-[26px] font-semibold text-black mt-8 mb-3">
                    {children}
                  </h2>
                ),
                heading3: ({ children }) => (
                  <h3 className="font-trap text-[18px] md:text-[20px] font-semibold text-black mt-6 mb-2">
                    {children}
                  </h3>
                ),
                heading4: ({ children }) => (
                  <h4 className="font-trap text-[16px] md:text-[18px] font-semibold text-black mt-5 mb-2">
                    {children}
                  </h4>
                ),
                paragraph: ({ children }) => (
                  <p className="font-inter text-[15px] md:text-[16px] text-black/65 leading-[1.75] mb-4">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-black">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                hyperlink: ({ children, node }) => (
                  <a
                    href={(node.data as any).url}
                    target={(node.data as any).target || "_self"}
                    className="text-[#F02C2C] hover:underline"
                  >
                    {children}
                  </a>
                ),
                list: ({ children }) => (
                  <ul className="my-4 pl-5 space-y-1">
                    {children}
                  </ul>
                ),
                oList: ({ children }) => (
                  <ol className="my-4 pl-5 space-y-1 list-decimal">
                    {children}
                  </ol>
                ),
                listItem: ({ children }) => (
                  <li className="font-inter text-[15px] md:text-[16px] text-black/65 leading-[1.6] list-disc">
                    {children}
                  </li>
                ),
                oListItem: ({ children }) => (
                  <li className="font-inter text-[15px] md:text-[16px] text-black/65 leading-[1.6]">
                    {children}
                  </li>
                ),
                image: ({ node }) => (
                  <img
                    src={node.url}
                    alt={node.alt || ""}
                    className="w-full rounded-[10px] my-6"
                  />
                ),
                preformatted: ({ children }) => (
                  <pre className="bg-[#1a1a2e] text-white p-5 rounded-[10px] my-6 overflow-x-auto font-mono text-sm">
                    {children}
                  </pre>
                ),
              }}
            />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              {/* Author Card */}
              {post.data.author && (
                <div className="bg-[#F8F8F8] rounded-[10px] p-6 mb-6">
                  <p className="font-mono text-xs text-black/50 uppercase tracking-wider mb-3">Written by</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#202020] flex items-center justify-center">
                      <span className="font-inter text-white text-lg font-medium">
                        {post.data.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-trap text-lg font-semibold text-black">{post.data.author}</span>
                  </div>
                </div>
              )}

              {/* Share / CTA */}
              <div className="bg-[#202020] rounded-[10px] p-6">
                <p className="font-trap text-lg font-semibold text-white mb-2">Need help with compliance?</p>
                <p className="font-inter text-sm text-white/60 mb-4">Let Freeda analyse your plans automatically.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#F02C2C] rounded-[8px] font-mono text-sm text-white hover:bg-[#d92626] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full bg-[#F8F8F8] py-12 md:py-16 lg:py-20">
          <div className="max-w-[1250px] mx-auto px-5 md:px-10">
            <h2 className="font-trap text-2xl md:text-3xl font-semibold text-black mb-8">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((relatedPost: any) => (
                <Link key={relatedPost.uid} href={`/blog/${relatedPost.uid}`} className="group block">
                  <article className="flex flex-col h-full bg-white rounded-[10px] overflow-hidden">
                    {/* Card Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F2F2F2]">
                      {relatedPost.data.featured_image?.url ? (
                        <PrismicNextImage
                          field={relatedPost.data.featured_image}
                          className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          fallbackAlt=""
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#202020]" />
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-5">
                      {relatedPost.data.category && (
                        <span className="font-mono text-xs font-medium text-[#F02C2C] uppercase tracking-wider mb-2">
                          {relatedPost.data.category}
                        </span>
                      )}
                      <h3 className="font-trap text-lg md:text-xl font-semibold leading-[1.2] text-black mb-2 group-hover:text-[#F02C2C] transition-colors line-clamp-2">
                        {relatedPost.data.title}
                      </h3>
                      <div className="flex items-center gap-3 font-inter text-xs text-black/50 mt-auto pt-3">
                        {relatedPost.data.publication_date && (
                          <span>
                            {new Date(relatedPost.data.publication_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        )}
                        {relatedPost.data.reading_time && (
                          <>
                            <span>•</span>
                            <span>{relatedPost.data.reading_time}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer Slice Zone */}
      {blogPage?.data?.slices && (
        <SliceZone slices={blogPage.data.slices} components={components} />
      )}
    </main>
  );
}
