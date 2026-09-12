"use client";

import Link from "next/link";

const HowToDownload = () => {
    return (
        <section className="bg-white px-4 py-10 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">

                <div className="space-y-4 text-sm leading-6 text-[#475569] dark:text-[#A1A1AA]">
                    <p>
                        Downloading a TikTok video is simple when you have the
                        right link. If you find a video you want to keep, just
                        copy its public link and bring it back to DownTok.
                    </p>

                    <p>
                        There is no need to install extra software or create an
                        account. Paste the link, check the available download
                        option, and save the video to your device.
                    </p>
                </div>

                <div className="mt-7 border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        How to Download a TikTok Video
                    </h2>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-[#A1A1AA]">
                    The whole process takes only a few seconds and works on
                    phones, tablets, and computers.
                </p>

                <div className="mt-6 space-y-3">

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            1
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Find your TikTok video
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            Open TikTok and find the video you would like to
                            save.
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#25F4EE] text-xs font-bold text-black">
                            2
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Copy the link
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            Tap Share, choose Copy Link, and copy the video's
                            URL.
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            3
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Paste the link
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            Return to DownTok and paste the copied link into
                            the downloader field.
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#25F4EE] text-xs font-bold text-black">
                            4
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Start the download
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            Press the Download button and wait for the
                            available options to appear.
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            5
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Select and save
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            Choose the format you need and save the file to
                            your phone or computer.
                        </p>
                    </div>

                </div>

                <p className="mt-5 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                    For the best results, always copy the link using TikTok's
                    own Share and Copy Link options. Public videos are
                    supported, while private or restricted content may not be
                    available.
                </p>

            </div>
        </section>
    );
};

export default HowToDownload;