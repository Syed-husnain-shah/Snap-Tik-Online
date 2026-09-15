"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do I download a TikTok video?",
        answer:
            "Copy the link of the public TikTok video, paste it into the DownTok input box, and click the download button. Once the video is ready, choose the available download option.",
    },
    {
        question: "Can I use DownTok on my phone?",
        answer:
            "Yes. DownTok works directly in your mobile browser, so you can use it on iPhone, Android phones, tablets, and computers without installing another application.",
    },
    {
        question: "Do I need to create an account?",
        answer:
            "No. You can use DownTok without creating an account or signing in. Simply paste a supported TikTok link and start the download process.",
    },
    {
        question: "Can I download TikTok videos without a watermark?",
        answer:
            "DownTok can provide a download without the visible TikTok watermark when that version is available for the public video you submitted.",
    },
    {
        question: "Can I download TikTok photos and slideshows?",
        answer:
            "Yes. Supported TikTok photo posts and slideshows can be saved when the content is publicly available and the required media can be accessed from the shared link.",
    },
    {
        question: "Can I download TikTok Stories?",
        answer:
            "Public TikTok Stories may be available while they are still active. Since Stories can disappear after a limited time, make sure you use the link while the Story is available.",
    },
    {
        question: "Why is my TikTok link not working?",
        answer:
            "Make sure you copied the complete link from TikTok and that the post is still public and available. Private, restricted, deleted, or unavailable content may not be supported.",
    },
    {
        question: "Is DownTok free to use?",
        answer:
            "Yes. DownTok is designed to provide its available TikTok download tools without requiring a paid account.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white px-4 py-12 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto w-full max-w-275">
                <div className="border-l-4 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                <p className="mt-4 max-w-210 text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA] sm:text-base">
                    Have a question about downloading TikTok content?
                    Here are some of the things users commonly ask.
                </p>

                <div className="mt-7 w-full space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`w-full overflow-hidden rounded-xl border bg-[#F8FAFC] transition-all duration-300 dark:bg-[#111111] ${isOpen
                                        ? "border-[#3B82F6]/50 shadow-md shadow-[#3B82F6]/5 dark:border-[#25F4EE]/50 dark:shadow-[#25F4EE]/5"
                                        : "border-[#E2E8F0] dark:border-[#262626]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? null : index
                                        )
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                                >
                                    <span className="text-sm font-semibold text-[#111111] dark:text-white sm:text-base">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                                ? "rotate-180 border-[#3B82F6] bg-[#3B82F6] text-white dark:border-[#25F4EE] dark:bg-[#25F4EE] dark:text-black"
                                                : "border-[#E2E8F0] bg-white text-[#64748B] dark:border-[#2A2A2A] dark:bg-black dark:text-[#A1A1AA]"
                                            }`}
                                    >
                                        <ChevronDown size={17} />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <p className="px-5 pb-5 pr-14 text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;