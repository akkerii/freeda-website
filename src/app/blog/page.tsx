import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

export default async function BlogPage() {
  const client = createClient();

  let pageData = null;
  let blogPosts: any[] = [];

  try {
    pageData = await client.getSingle("blog_page");
  } catch {
    // Blog page not created in Prismic yet
  }

  try {
    const posts = await client.getAllByType("blog_post", {
      orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
    });
    blogPosts = posts;
  } catch {
    // No blog posts yet
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="relative bg-white min-h-screen">
      <Navigation theme="light" />

      {/* Hero Section */}
      <section className="w-full min-h-[40vh] md:min-h-[50vh] bg-[#EDEDED] relative overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="flex flex-col items-center justify-center px-5 gap-4">
          <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.6px] text-black text-center m-0">
            {pageData?.data?.title || "Blog"}
          </h1>
          {(pageData?.data?.subtitle) && (
            <p className="font-inter text-base md:text-lg text-black/60 text-center max-w-[600px]">
              {pageData.data.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full max-w-[1250px] mx-auto px-5 md:px-10 py-12 md:py-16 lg:py-20">
        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-inter text-lg text-black/60">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12 md:mb-16">
                <Link href={`/blog/${featuredPost.uid}`} className="group block">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Featured Image */}
                    <div className="relative w-full lg:w-[60%] aspect-[16/10] rounded-[12px] overflow-hidden bg-[#F2F2F2]">
                      {featuredPost.data.featured_image?.url ? (
                        <PrismicNextImage
                          field={featuredPost.data.featured_image}
                          className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          fallbackAlt=""
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#202020]" />
                      )}
                    </div>

                    {/* Featured Content */}
                    <div className="flex flex-col justify-center lg:w-[40%]">
                      {featuredPost.data.category && (
                        <span className="font-mono text-xs md:text-sm font-medium text-[#F02C2C] uppercase tracking-wider mb-3">
                          {featuredPost.data.category}
                        </span>
                      )}
                      <h2 className="font-trap text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.15] text-black mb-4 group-hover:text-[#F02C2C] transition-colors">
                        {featuredPost.data.title}
                      </h2>
                      {featuredPost.data.excerpt && (
                        <p className="font-inter text-base md:text-lg text-black/60 leading-[1.6] mb-6 line-clamp-3">
                          {featuredPost.data.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 font-inter text-sm text-black/50">
                        {featuredPost.data.author && (
                          <span>{featuredPost.data.author}</span>
                        )}
                        {featuredPost.data.publication_date && (
                          <>
                            <span>•</span>
                            <span>
                              {new Date(featuredPost.data.publication_date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </>
                        )}
                        {featuredPost.data.reading_time && (
                          <>
                            <span>•</span>
                            <span>{featuredPost.data.reading_time}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {otherPosts.map((post: any) => (
                  <Link key={post.uid} href={`/blog/${post.uid}`} className="group block">
                    <article className="flex flex-col h-full">
                      {/* Card Image */}
                      <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-[#F2F2F2] mb-4">
                        {post.data.featured_image?.url ? (
                          <PrismicNextImage
                            field={post.data.featured_image}
                            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            fallbackAlt=""
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[#202020]" />
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col flex-1">
                        {post.data.category && (
                          <span className="font-mono text-xs font-medium text-[#F02C2C] uppercase tracking-wider mb-2">
                            {post.data.category}
                          </span>
                        )}
                        <h3 className="font-trap text-xl md:text-2xl font-semibold leading-[1.2] text-black mb-2 group-hover:text-[#F02C2C] transition-colors line-clamp-2">
                          {post.data.title}
                        </h3>
                        {post.data.excerpt && (
                          <p className="font-inter text-sm md:text-base text-black/60 leading-[1.5] mb-4 line-clamp-2 flex-1">
                            {post.data.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-3 font-inter text-xs md:text-sm text-black/50 mt-auto">
                          {post.data.publication_date && (
                            <span>
                              {new Date(post.data.publication_date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          )}
                          {post.data.reading_time && (
                            <>
                              <span>•</span>
                              <span>{post.data.reading_time}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Footer Slice Zone */}
      {pageData?.data?.slices && (
        <SliceZone slices={pageData.data.slices} components={components} />
      )}
    </main>
  );
}
