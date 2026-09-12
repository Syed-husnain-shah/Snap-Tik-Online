"use client";

import {
    Video,
    Music2,
    Image as ImageIcon,
    Layers3,
    CirclePlay,
} from "lucide-react";

const downloads = [
    {
        icon: Video,
        title: "TikTok Video Downloader",
        text: "Save a public TikTok video and keep it ready to watch whenever you need it.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
    {
        icon: Music2,
        title: "TikTok MP3 Downloader",
        text: "Grab the audio from a supported TikTok post when you only need the sound.",
        color: "text-[#8B5CF6]",
    },
    {
        icon: ImageIcon,
        title: "TikTok Photo Downloader",
        text: "Save photos from supported TikTok posts without having to save each image one by one.",
        color: "text-[#FE2C55]",
    },
    {
        icon: Layers3,
        title: "TikTok Slideshow Downloader",
        text: "Download slideshow posts and keep the images together in an easy-to-use format.",
        color: "text-[#25F4EE] dark:text-[#25F4EE]",
    },
    {
        icon: CirclePlay,
        title: "TikTok Story Downloader",
        text: "Save a public story while it is still available on TikTok.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
];

const Supported = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        Supported Downloads
                    </h2>
                </div>

                <p className="mt-4 max-w-220 text-sm leading-7 text-[#475569] dark:text-[#A1A1AA] sm:text-base">
                    One link is all you need to get started. Paste a public
                    TikTok URL and DownTok will show the download option that
                    matches the type of post you shared.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">

                    {downloads.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group relative rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/5 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/40 dark:hover:shadow-[#25F4EE]/5"
                            >
                                <div className="absolute bottom-0 left-0 top-0 w-0.5 rounded-l-xl bg-[#3B82F6] dark:bg-[#25F4EE]" />

                                <div className="flex items-center gap-3">

                                    <Icon
                                        size={19}
                                        strokeWidth={2.1}
                                        className={item.color}
                                    />

                                    <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                                        {item.title}
                                    </h3>

                                </div>

                                <p className="mt-3 pl-8 text-sm leading-6 text-[#64748B] dark:text-[#A1A1AA]">
                                    {item.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

                <p className="mt-6 max-w-250 text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA]">
                    DownTok is designed for public TikTok links. If a post is
                    private, restricted, removed, or no longer available,
                    there may not be anything we can retrieve from the link.
                </p>

            </div>
        </section>
    );
};

export default Supported;