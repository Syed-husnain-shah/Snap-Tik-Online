"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const DownloadCTA = () => {
    return (
        <section className="w-full bg-white px-4 py-8 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto w-full max-w-[1100px]">
                <div className="rounded-2xl border border-[#E2E8F0] bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#FE2C55] px-6 py-7 text-center shadow-sm transition-all duration-300 dark:border-[#262626] dark:from-[#25F4EE] dark:via-[#3B82F6] dark:to-[#8B5CF6] sm:px-8 sm:py-8">
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        Ready to download?
                    </h2>

                    <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                        Paste a TikTok link and save your video in just a few seconds.
                    </p>

                    <Link
                        href="/"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#111111] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC] hover:shadow-lg"
                    >
                        <ArrowUp size={18} strokeWidth={2.5} />
                        Back to downloader
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;