// @ts-nocheck
"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type CaseStudyContentProps =
  SliceComponentProps<Content.CaseStudyContentSlice>;

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to extract Vimeo video ID
const getVimeoVideoId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Helper function to extract Google Drive file ID
const getGoogleDriveFileId = (url: string): string | null => {
  if (!url) return null;
  // Match patterns like:
  // https://drive.google.com/file/d/FILE_ID/view
  // https://drive.google.com/file/d/FILE_ID/preview
  // https://drive.google.com/open?id=FILE_ID
  const regExp = /drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Helper function to check if URL is a direct video file
const isDirectVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const videoExtensions = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;
  return videoExtensions.test(url);
};

// Helper function to get video embed URL
const getVideoEmbedUrl = (url: string, autoplay: boolean = false): string | null => {
  if (!url) return null;

  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) {
    const params = new URLSearchParams();
    if (autoplay) {
      params.set('autoplay', '1');
      params.set('mute', '1'); // Required for autoplay in most browsers
    }
    const paramString = params.toString();
    return `https://www.youtube.com/embed/${youtubeId}${paramString ? `?${paramString}` : ''}`;
  }

  const vimeoId = getVimeoVideoId(url);
  if (vimeoId) {
    const params = new URLSearchParams();
    if (autoplay) {
      params.set('autoplay', '1');
      params.set('muted', '1');
    }
    const paramString = params.toString();
    return `https://player.vimeo.com/video/${vimeoId}${paramString ? `?${paramString}` : ''}`;
  }

  const googleDriveId = getGoogleDriveFileId(url);
  if (googleDriveId) {
    return `https://drive.google.com/file/d/${googleDriveId}/preview`;
  }

  // Return original URL if it's already an embed URL or direct video
  return url;
};

// Helper to get video platform name
const getVideoPlatform = (url: string): string => {
  if (getYouTubeVideoId(url)) return 'YouTube';
  if (getVimeoVideoId(url)) return 'Vimeo';
  if (getGoogleDriveFileId(url)) return 'Video';
  return 'Video';
};

// Video Player Component - Click to play with thumbnail preview
const VideoPlayer: FC<{
  videoUrl: string;
  thumbnail?: any;
  companyLogo?: any;
  companyName?: string;
}> = ({ videoUrl, thumbnail, companyLogo, companyName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const youtubeId = getYouTubeVideoId(videoUrl);
  const googleDriveId = getGoogleDriveFileId(videoUrl);
  const isDirectVideo = isDirectVideoUrl(videoUrl);

  // Use provided thumbnail or YouTube's thumbnail
  const thumbnailUrl = thumbnail?.url ||
    (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null);

  const embedUrl = getVideoEmbedUrl(videoUrl, true); // Always autoplay when clicked

  // Autoplay on scroll for direct video files
  useEffect(() => {
    if (!isDirectVideo || !videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isDirectVideo]);

  // For direct video files: autoplay on scroll
  if (isDirectVideo) {
    return (
      <div
        ref={containerRef}
        className="relative isolate w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
        {/* Company logo/name badge - Bottom right, dark pill */}
        {(companyLogo?.url || companyName) && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#1a1a2e] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 z-50 pointer-events-none shadow-lg">
            {companyLogo?.url ? (
              <PrismicNextImage
                field={companyLogo}
                className="h-[20px] md:h-[24px] w-auto"
                fallbackAlt={companyName || "Company logo"}
              />
            ) : companyName ? (
              <span className="font-trap text-[14px] md:text-[16px] font-semibold text-white tracking-wider">
                {companyName}
              </span>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  // For Google Drive: show embed directly (user clicks once on Drive's play button)
  if (googleDriveId) {
    return (
      <div className="relative isolate w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden bg-black">
        <iframe
          src={getVideoEmbedUrl(videoUrl) || ""}
          className="absolute inset-0 w-full h-full z-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
        {/* Company logo/name badge - Bottom right, dark pill */}
        {(companyLogo?.url || companyName) && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#1a1a2e] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 z-50 pointer-events-none shadow-lg">
            {companyLogo?.url ? (
              <PrismicNextImage
                field={companyLogo}
                className="h-[20px] md:h-[24px] w-auto"
                fallbackAlt={companyName || "Company logo"}
              />
            ) : companyName ? (
              <span className="font-trap text-[14px] md:text-[16px] font-semibold text-white tracking-wider">
                {companyName}
              </span>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  // For YouTube/Vimeo: Show video player after click
  if (isPlaying) {
    return (
      <div className="relative isolate w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden bg-black">
        <iframe
          src={embedUrl || ""}
          className="absolute inset-0 w-full h-full z-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
        {/* Company logo/name badge - Bottom right, dark pill */}
        {(companyLogo?.url || companyName) && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#1a1a2e] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 z-50 pointer-events-none shadow-lg">
            {companyLogo?.url ? (
              <PrismicNextImage
                field={companyLogo}
                className="h-[20px] md:h-[24px] w-auto"
                fallbackAlt={companyName || "Company logo"}
              />
            ) : companyName ? (
              <span className="font-trap text-[14px] md:text-[16px] font-semibold text-white tracking-wider">
                {companyName}
              </span>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  // YouTube/Vimeo: Show thumbnail with play button
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden cursor-pointer group bg-[#1a1a1a]"
      onClick={() => setIsPlaying(true)}
    >
      {/* Thumbnail */}
      {thumbnailUrl && (
        thumbnail?.url ? (
          <PrismicNextImage
            field={thumbnail}
            className="w-full h-full object-cover"
            fallbackAlt=""
          />
        ) : (
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        )
      )}

      {/* Play button - YouTube style */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[12px] flex items-center justify-center group-hover:bg-[#cc0000] transition-colors">
          <svg className="w-[24px] h-[24px] text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Company logo/name badge - Bottom right, dark pill */}
      {(companyLogo?.url || companyName) && (
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#1a1a2e] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2">
          {companyLogo?.url ? (
            <PrismicNextImage
              field={companyLogo}
              className="h-[20px] md:h-[24px] w-auto"
              fallbackAlt={companyName || "Company logo"}
            />
          ) : companyName ? (
            <span className="font-trap text-[14px] md:text-[16px] font-semibold text-white tracking-wider">
              {companyName}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};

const CaseStudyContent: FC<CaseStudyContentProps> = ({ slice }) => {
  const primary = slice.primary as any;
  const sections = primary.sections || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      {/* Consistent with other slices: max-w-[1250px] px-5 md:px-10 */}
      <div className="w-full max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Content sections with 111px gap between them */}
        <div className="flex flex-col gap-[111px]">
          {sections.map((section: any, index: number) => {
            const sectionType = section.section_type || "text_with_heading";
            // Check if image exists and has url
            const hasImage = section.image && (section.image.url || isFilled.image(section.image));
            // Check if video URL exists
            const hasVideo = section.video_url && section.video_url.trim() !== "";

            // Video only section
            if (sectionType === "video" && hasVideo) {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <VideoPlayer
                    videoUrl={section.video_url}
                    thumbnail={section.video_thumbnail}
                    companyLogo={section.video_company_logo}
                    companyName={section.video_company_name}
                  />
                </FadeIn>
              );
            }

            // Image only section - Figma: full width, height 560px, radius 10px
            if (sectionType === "image" && hasImage) {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden">
                    <PrismicNextImage
                      field={section.image}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                </FadeIn>
              );
            }

            // Text with heading section
            if (sectionType === "text_with_heading") {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-[24px]">
                    {/* Heading - Figma: Trap 36px SemiBold, line-height 43.2px */}
                    {section.heading && (
                      <h2 className="font-trap text-[36px] font-semibold leading-[43.2px] text-black">
                        {section.heading}
                      </h2>
                    )}

                    {/* Body Text - Figma: Inter 24px, line-height 29px, letter-spacing -0.12px, black/55% */}
                    {isFilled.richText(section.body_text) && (
                      <div className="font-inter text-[24px] text-black/55 leading-[29px] tracking-[-0.12px]">
                        <PrismicRichText
                          field={section.body_text}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="mb-0">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-bold text-black">
                                {children}
                              </strong>
                            ),
                          }}
                        />
                      </div>
                    )}

                    {/* Video - if video URL exists, show video player */}
                    {hasVideo && (
                      <div className="mt-[24px]">
                        <VideoPlayer
                          videoUrl={section.video_url}
                          thumbnail={section.video_thumbnail}
                          companyLogo={section.video_company_logo}
                          companyName={section.video_company_name}
                        />
                      </div>
                    )}

                    {/* Section Image - Figma: full width, height 560px, radius 10px */}
                    {hasImage && !hasVideo && (
                      <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden mt-[24px]">
                        <PrismicNextImage
                          field={section.image}
                          className="w-full h-full object-cover"
                          fallbackAlt=""
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            }

            // Text only section (no heading)
            if (sectionType === "text_only") {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-[24px]">
                    {/* Body Text - Figma: Inter 24px, line-height 29px, letter-spacing -0.12px, black/55% */}
                    {isFilled.richText(section.body_text) && (
                      <div className="font-inter text-[24px] text-black/55 leading-[29px] tracking-[-0.12px]">
                        <PrismicRichText
                          field={section.body_text}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="mb-0">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-bold text-black">
                                {children}
                              </strong>
                            ),
                          }}
                        />
                      </div>
                    )}

                    {/* Video - if video URL exists, show video player */}
                    {hasVideo && (
                      <VideoPlayer
                        videoUrl={section.video_url}
                        thumbnail={section.video_thumbnail}
                        companyLogo={section.video_company_logo}
                        companyName={section.video_company_name}
                      />
                    )}

                    {/* Section Image - Figma: full width, height 560px, radius 10px */}
                    {hasImage && !hasVideo && (
                      <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden">
                        <PrismicNextImage
                          field={section.image}
                          className="w-full h-full object-cover"
                          fallbackAlt=""
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyContent;
