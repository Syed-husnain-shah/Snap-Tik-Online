"use client";

import {
    Clock3,
    Clipboard,
    Wifi,
    Image as ImageIcon,
    Bookmark,
} from "lucide-react";

const tips = [
    {
        icon: Clock3,
        title: "Give new posts a little time.",
        text: "If a video was just posted and the link does not work yet, wait a moment and try again.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
    {
        icon: Clipboard,
        title: "Use Copy Link on your phone.",
        text: "Open the Share menu and use Copy Link instead of typing the address yourself.",
        color: "text-[#25F4EE]",
    },
    {
        icon: Wifi,
        title: "Check your connection for longer videos.",
        text: "A larger video can take longer to load, especially when your mobile connection is slow.",
        color: "text-[#8B5CF6]",
    },
    {
        icon: ImageIcon,
        title: "Check what kind of post it is.",
        text: "Videos, photos, slideshows, and stories can have different download options.",
        color: "text-[#FE2C55]",
    },
    {
        icon: Bookmark,
        title: "Keep this page handy.",
        text: "If you use DownTok often, saving the page in your browser makes it easier to come back later.",
        color: "text-[#3B82F6] dark:text-[#25F4EE]",
    },
];

const ProTips = () => {
    return (
        <section className="bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        Tips for Better Downloads
                    </h2>
                </div>

                <p className="mt-4 max-w-220 text-sm leading-7 text-[#475569] dark:text-[#A1A1AA] sm:text-base">
                    A few simple things can make the download process easier,
                    especially when you are working with a new post or a
                    slower connection.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">

                    {tips.map((tip) => {
                        const Icon = tip.icon;

                        return (
                            <div
                                key={tip.title}
                                className="group relative rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/5 dark:border-[#262626] dark:bg-[#111111] dark:hover:border-[#25F4EE]/40 dark:hover:shadow-[#25F4EE]/5"
                            >
                                <div className="absolute bottom-0 left-0 top-0 w-0.5 rounded-l-xl bg-[#3B82F6] dark:bg-[#25F4EE]" />

                                <div className="flex items-start gap-3">

                                    <Icon
                                        size={18}
                                        strokeWidth={2.2}
                                        className={`mt-0.5 shrink-0 ${tip.color}`}
                                    />

                                    <p className="text-sm leading-6 text-[#475569] dark:text-[#A1A1AA]">
                                        <strong className="font-bold text-[#111111] dark:text-white">
                                            {tip.title}
                                        </strong>{" "}
                                        {tip.text}
                                    </p>

                                </div>
                            </div>
                        );
                    })}

                </div>

                <div className="mt-6 border border-[#3B82F6] bg-[#F8FAFC] px-5 py-4 rounded-2xl dark:border-[#25F4EE] dark:bg-[#111111]">
                    <p className="text-sm leading-7 text-[#475569] dark:text-[#A1A1AA]">
                        DownTok is an independent downloader and is not
                        affiliated with TikTok or its parent company. Only
                        download content that you have permission to save,
                        and respect the rights of the original creator when
                        sharing or reusing a file.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProTips;