"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogs = [
    {
        title: "Why TikTok Videos Have Watermarks",
        description:
            "Ever wondered why a TikTok video has a moving logo on it? Here is a simple explanation of what the watermark does and why TikTok uses it.",
        date: "September 12, 2026",
        slug: "tiktok-watermark",
        accent: "bg-[#3B82F6]",
    },
    {
        title: "What Happens When You Save a TikTok Video",
        description:
            "A saved video can look a little different from the one you watched in the app. Here are some of the things that can affect the final file.",
        date: "September 12, 2026",
        slug: "saved-tiktok-video",
        accent: "bg-[#25F4EE]",
    },
    {
        title: "Understanding TikTok Video Quality",
        description:
            "Resolution is not the only thing that matters. Learn what compression, bitrate, and the original upload can do to video quality.",
        date: "September 12, 2026",
        slug: "tiktok-video-quality",
        accent: "bg-[#8B5CF6]",
    },
    {
        title: "Why Some TikTok Videos Look Different After Downloading",
        description:
            "Sometimes the downloaded copy does not look exactly like the video you watched. A few simple reasons can explain the difference.",
        date: "September 12, 2026",
        slug: "downloaded-video-quality",
        accent: "bg-[#FE2C55]",
    },
];

const Blog = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        From the Blog
                    </h2>
                </div>

                <p className="mt-4 max-w-220 text-sm leading-7 text-[#475569] dark:text-[#A1A1AA] sm:text-base">
                    A few useful reads about TikTok videos, downloads, and
                    things you may notice when saving content to your device.
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-2">

                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            className="group relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:shadow-xl hover:shadow-[#3B82F6]/5 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/40 dark:hover:shadow-[#25F4EE]/5"
                        >
                            <div
                                className={`absolute left-0 top-0 h-full w-0.5 ${blog.accent}`}
                            />

                            <div className="flex items-start justify-between gap-4">

                                <div>
                                    <p className="text-[11px] font-medium text-[#64748B] dark:text-[#71717A]">
                                        {blog.date}
                                    </p>

                                    <h3 className="mt-2 text-base font-bold leading-6 text-[#111111] transition-colors group-hover:text-[#3B82F6] dark:text-white dark:group-hover:text-[#25F4EE] sm:text-lg">
                                        {blog.title}
                                    </h3>
                                </div>

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#64748B] transition-all duration-300 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white dark:border-[#2A2A2A] dark:bg-black dark:text-[#A1A1AA] dark:group-hover:border-[#25F4EE] dark:group-hover:bg-[#25F4EE] dark:group-hover:text-black">
                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                            <p className="mt-3 text-sm leading-6 text-[#64748B] dark:text-[#A1A1AA]">
                                {blog.description}
                            </p>

                            <span className="mt-4 inline-block text-xs font-semibold text-[#3B82F6] dark:text-[#25F4EE]">
                                Read article
                            </span>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Blog;