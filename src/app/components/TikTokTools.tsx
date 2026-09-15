"use client";

import Link from "next/link";
import {
    Video,
    Music2,
    Layers3,
    Image,
    Clock3,
    Smartphone,
    Tablet,
    Monitor,
    Laptop,
    Download,
    Globe,
    Headphones,
} from "lucide-react";

const tools = [
    {
        title: "TikTok Video Downloader",
        description: "Save TikTok videos in a few clicks.",
        href: "/",
        icon: Video,
    },
    {
        title: "TikTok MP3 Downloader",
        description: "Turn TikTok videos into audio files.",
        href: "/tiktok-mp3-downloader",
        icon: Music2,
    },
    {
        title: "TikTok Slideshow Downloader",
        description: "Save photos from TikTok slideshows.",
        href: "/tiktok-slideshow-downloader",
        icon: Layers3,
    },
    {
        title: "TikTok Photo Downloader",
        description: "Save TikTok photos directly to your device.",
        href: "/tiktok-photo-downloader",
        icon: Image,
    },
    {
        title: "TikTok Story Downloader",
        description: "Save available TikTok stories before they disappear.",
        href: "/tiktok-story-downloader",
        icon: Clock3,
    },
    {
        title: "How to Download TikTok Videos",
        description: "Learn the easiest way to save TikTok content.",
        href: "/how-to-download",
        icon: Download,
    },
    {
        title: "TikTok Downloader for iPhone",
        description: "Save TikTok videos easily on your iPhone.",
        href: "/tiktok-downloader-for-iphone",
        icon: Smartphone,
    },
    {
        title: "TikTok Downloader for Android",
        description: "Download TikTok content on Android devices.",
        href: "/tiktok-downloader-for-android",
        icon: Smartphone,
    },
    {
        title: "TikTok Downloader for PC",
        description: "Save TikTok videos from your Windows PC.",
        href: "/tiktok-downloader-for-pc",
        icon: Monitor,
    },
    {
        title: "TikTok Downloader for Mac",
        description: "Download TikTok videos on your Mac.",
        href: "/tiktok-downloader-for-mac",
        icon: Laptop,
    },
    {
        title: "TikTok Downloader for Tablet",
        description: "Save TikTok videos on your tablet.",
        href: "/tiktok-downloader-for-tablet",
        icon: Tablet,
    },
    {
        title: "TikTok Video Downloader Without Watermark",
        description: "Save TikTok videos without the visible watermark.",
        href: "/tiktok-downloader-without-watermark",
        icon: Download,
    },
    {
        title: "TikTok Video Downloader Online",
        description: "Download TikTok videos directly from your browser.",
        href: "/tiktok-video-downloader-online",
        icon: Globe,
    },
    {
        title: "TikTok HD Video Downloader",
        description: "Save TikTok videos in the best available quality.",
        href: "/tiktok-hd-video-downloader",
        icon: Video,
    },
    {
        title: "TikTok Audio Downloader",
        description: "Extract and save audio from supported TikTok videos.",
        href: "/tiktok-audio-downloader",
        icon: Headphones,
    },
];

const MoreTools = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-4 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        More ways to save TikTok content
                    </h2>
                </div>

                <p className="mt-4 max-w-210 text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA] sm:text-base">
                    Choose the DownTok tool that matches the type of TikTok
                    content or device you are using.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group flex min-h-24 items-center gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/5 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/50 dark:hover:shadow-[#25F4EE]/5"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white transition-transform duration-300 group-hover:scale-105 dark:from-[#25F4EE] dark:to-[#3B82F6] dark:text-black">
                                    <Icon size={20} strokeWidth={2} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-sm font-bold leading-5 text-[#111111] transition-colors group-hover:text-[#3B82F6] dark:text-white dark:group-hover:text-[#25F4EE] sm:text-base">
                                        {tool.title}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                                        {tool.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MoreTools;