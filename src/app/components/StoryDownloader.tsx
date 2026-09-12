"use client";

import Link from "next/link";
import { Clipboard, Download } from "lucide-react";

const TikTokStoryDownloader = () => {
    return (
        <main className="min-h-screen bg-[#0B1020] text-white">

            <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-32">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#3B82F6]/15 blur-[130px]" />
                    <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#8B5CF6]/15 blur-[130px]" />
                    <div className="absolute bottom-0 left-1/2 h-72 w-160 -translate-x-1/2 bg-[#22D3EE]/5 blur-[130px]" />
                </div>

                <div className="relative mx-auto max-w-240 text-center">

                    <div className="mb-5 inline-flex items-center rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/10 px-4 py-2 text-xs font-medium text-[#60A5FA]">
                        TikTok Story Saver
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Download TikTok Stories
                        <span className="mt-2 block bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                            Before They Disappear
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-190 text-sm leading-7 text-[#94A3B8] sm:text-base">
                        Found a TikTok story you want to keep? Paste its link
                        below and save the video to your device while it is
                        still available.
                    </p>

                    <div className="mx-auto mt-8 flex max-w-225 flex-col gap-3 rounded-2xl border border-white/10 bg-[#11182B] p-3 shadow-2xl shadow-black/20 sm:flex-row">

                        <div className="flex h-14 flex-1 items-center overflow-hidden rounded-xl border border-[#25304A] bg-[#0B1020]">

                            <input
                                type="text"
                                placeholder="Paste a TikTok story link..."
                                className="h-full min-w-0 flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-[#64748B] sm:text-base"
                            />

                            <button
                                type="button"
                                aria-label="Paste link"
                                className="mr-1.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#25304A] bg-[#151F35] text-[#22D3EE] transition hover:border-[#22D3EE]/50 hover:bg-[#1B2945]"
                            >
                                <Clipboard size={20} />
                            </button>

                        </div>

                        <button
                            type="button"
                            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 text-base font-semibold text-white shadow-lg shadow-[#3B82F6]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#3B82F6]/30"
                        >
                            <Download size={20} />
                            Download Story
                        </button>

                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">

                        <span className="rounded-full border border-white/10 bg-[#11182B] px-4 py-2 text-xs text-[#CBD5E1]">
                            Free to use
                        </span>

                        <span className="rounded-full border border-white/10 bg-[#11182B] px-4 py-2 text-xs text-[#CBD5E1]">
                            No watermark
                        </span>

                        <span className="rounded-full border border-white/10 bg-[#11182B] px-4 py-2 text-xs text-[#CBD5E1]">
                            Works on mobile
                        </span>

                        <span className="rounded-full border border-white/10 bg-[#11182B] px-4 py-2 text-xs text-[#CBD5E1]">
                            No account needed
                        </span>

                    </div>

                </div>

            </section>


        </main>
    );
};

export default TikTokStoryDownloader;