"use client";

import Link from "next/link";
import {
    ExternalLink,
    Globe2,
    Download,
    Video,
    Music2,
    Smartphone,
    Zap,
    Play,
    Image,
} from "lucide-react";

const alternativeTools = [
    {
        title: "SaveTok",
        description: "Another option for saving TikTok content online.",
        href: "#",
        icon: Download,
    },
    {
        title: "TikDown",
        description: "A simple browser-based TikTok downloader.",
        href: "#",
        icon: Video,
    },
    {
        title: "TikSave",
        description: "Explore another way to save public TikTok videos.",
        href: "#",
        icon: Globe2,
    },
    {
        title: "SnapTik",
        description: "An alternative tool for downloading TikTok videos.",
        href: "#",
        icon: Zap,
    },
    {
        title: "TikMate",
        description: "A quick alternative for TikTok video downloads.",
        href: "#",
        icon: Smartphone,
    },
    {
        title: "MusicallyDown",
        description: "An alternative option for saving TikTok media.",
        href: "#",
        icon: Music2,
    },
    {
        title: "TikTokio",
        description: "Browse another online option for TikTok downloads.",
        href: "#",
        icon: Play,
    },
    {
        title: "SSSTik",
        description: "Another web-based TikTok saving tool.",
        href: "#",
        icon: ExternalLink,
    },
    {
        title: "TikTok Photo Saver",
        description: "A simple alternative for saving TikTok images.",
        href: "#",
        icon: Image,
    },
];

const AlternativeTools = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-4 border-[#8B5CF6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        Other TikTok Download Options
                    </h2>
                </div>

                <p className="mt-4 max-w-210 text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA] sm:text-base">
                    Looking for other ways to save TikTok content? Here are
                    some alternative tools you may want to explore.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {alternativeTools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group flex min-h-20 items-center gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:bg-white hover:shadow-lg hover:shadow-[#8B5CF6]/10 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/50 dark:hover:bg-[#151515] dark:hover:shadow-[#25F4EE]/10"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white transition-transform duration-300 group-hover:scale-105 dark:from-[#25F4EE] dark:to-[#3B82F6] dark:text-black">
                                    <Icon size={18} strokeWidth={2} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-sm font-bold text-[#111111] transition-colors group-hover:text-[#8B5CF6] dark:text-white dark:group-hover:text-[#25F4EE] sm:text-base">
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

                <p className="mt-5 text-xs leading-5 text-[#64748B] dark:text-[#71717A]">
                    These are independent third-party tools. DownTok is not
                    affiliated with or endorsed by these services.
                </p>

            </div>
        </section>
    );
};

export default AlternativeTools;