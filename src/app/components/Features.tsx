"use client";

import {
    ShieldCheck,
    Star,
    Monitor,
    Gift,
    FileVideo,
    Lock,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "No watermark.",
        text: "Get a clean copy of the video without an extra logo covering the screen.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
    {
        icon: Star,
        title: "Good video quality.",
        text: "Download the available version without making the video look blurry or heavily compressed.",
        color: "text-[#8B5CF6]",
    },
    {
        icon: Monitor,
        title: "Nothing to install.",
        text: "DownTok works right in your browser, so there is no separate app taking up space on your device.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
    {
        icon: Gift,
        title: "Free to use.",
        text: "You can use the downloader without creating an account or signing up for a subscription.",
        color: "text-[#FE2C55]",
    },
    {
        icon: FileVideo,
        title: "Easy MP4 downloads.",
        text: "Save videos in a familiar format that you can open and watch on most phones and computers.",
        color: "text-[#8B5CF6]",
    },
    {
        icon: Lock,
        title: "Simple and private.",
        text: "There is no profile to create. Just use the link you need and get back to what you were doing.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
];

const FeaturesBenefits = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        Features and Benefits
                    </h2>
                </div>

                <p className="mt-4 max-w-180 text-sm leading-6 text-[#475569] dark:text-[#A1A1AA] sm:text-base">
                    Everything is kept straightforward: paste your TikTok
                    link, choose the available option, and save what you need
                    without unnecessary steps.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group relative rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/5 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/40 dark:hover:shadow-[#25F4EE]/5"
                            >
                                <div className="absolute bottom-0 left-0 top-0 w-0.5 rounded-l-xl bg-[#3B82F6] dark:bg-[#25F4EE]" />

                                <div className="flex items-center gap-2.5">
                                    <Icon
                                        size={17}
                                        strokeWidth={2.2}
                                        className={feature.color}
                                    />

                                    <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#64748B] dark:text-[#A1A1AA]">
                                    {feature.text}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FeaturesBenefits;