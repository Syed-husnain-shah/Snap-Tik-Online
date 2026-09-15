"use client";

import Link from "next/link";
import {
    Download,
    Home,
    BookOpen,
    HelpCircle,
    ShieldCheck,
    Mail,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-[#E2E8F0] bg-white text-[#111111] transition-colors duration-300 dark:border-[#262626] dark:bg-black dark:text-white">
            <div className="mx-auto w-full max-w-[1100px] px-4 py-12 sm:px-6">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white dark:from-[#25F4EE] dark:to-[#3B82F6] dark:text-black">
                                <Download size={20} strokeWidth={2.5} />
                            </span>

                            <span className="text-xl font-bold tracking-tight">
                                DownTok
                            </span>
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-7 text-[#64748B] dark:text-[#A1A1AA]">
                            A simple online tool for saving TikTok videos,
                            photos, slideshows, and other supported content
                            directly from your browser.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Quick Links
                        </h3>

                        <div className="mt-4 space-y-3">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#3B82F6] dark:text-[#A1A1AA] dark:hover:text-[#25F4EE]"
                            >
                                <Home size={16} />
                                Home
                            </Link>

                            <Link
                                href="/blog"
                                className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#3B82F6] dark:text-[#A1A1AA] dark:hover:text-[#25F4EE]"
                            >
                                <BookOpen size={16} />
                                Blog
                            </Link>

                            <Link
                                href="/faq"
                                className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#3B82F6] dark:text-[#A1A1AA] dark:hover:text-[#25F4EE]"
                            >
                                <HelpCircle size={16} />
                                FAQ
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            Helpful Links
                        </h3>

                        <div className="mt-4 space-y-3">
                            <Link
                                href="/privacy-policy"
                                className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#3B82F6] dark:text-[#A1A1AA] dark:hover:text-[#25F4EE]"
                            >
                                <ShieldCheck size={16} />
                                Privacy Policy
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-[#3B82F6] dark:text-[#A1A1AA] dark:hover:text-[#25F4EE]"
                            >
                                <Mail size={16} />
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 text-sm text-[#64748B] dark:border-[#262626] dark:text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} DownTok. All rights
                        reserved.
                    </p>

                    <p>
                        Download smarter. Keep it simple.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;