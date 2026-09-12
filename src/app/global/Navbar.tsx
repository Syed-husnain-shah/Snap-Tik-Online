"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
    useLanguage,
    Language,
} from "@/context/LanguageContext";

const languages = [
    { code: "en", name: "English", short: "US" },
    { code: "zh", name: "中文", short: "CN" },
    { code: "es", name: "Español", short: "ES" },
    { code: "fr", name: "Français", short: "FR" },
    { code: "de", name: "Deutsch", short: "DE" },
    { code: "pt", name: "Português", short: "PT" },
    { code: "ja", name: "日本語", short: "JP" },
    { code: "ko", name: "한국어", short: "KR" },
];

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { title: t.video, href: "/" },
        { title: t.mp3, href: "/tiktok-mp3-downloader" },
        { title: t.slideshow, href: "/tiktok-slideshow-downloader" },
        { title: t.photo, href: "/tiktok-photo-downloader" },
        { title: t.story, href: "/tiktok-story-downloader" },
        { title: t.howTo, href: "/how-to-download" },
    ];

    const selectedLanguage = languages.find(
        (item) => item.code === language
    );

    const handleLanguage = (code: string) => {
        setLanguage(code as Language);
        setLanguageOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
                    ? "border-[#E5E7EB]/80 bg-white/85 backdrop-blur-xl dark:border-[#272727] dark:bg-black/85"
                    : "border-[#E5E7EB] bg-white dark:border-[#272727] dark:bg-black"
                }`}
        >
            <div className="mx-auto flex h-16 w-full max-w-350 items-center gap-4 px-4 sm:px-5">

                <Link
                    href="/"
                    className="flex shrink-0 items-center"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/logo/downtok.png"
                        alt="DownTok Logo"
                        width={150}
                        height={150}
                        className="h-auto w-27 sm:w-30 lg:w-32"
                    />
                </Link>

                <nav className="ml-auto hidden items-center gap-3 lg:flex xl:gap-4">

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-[12px] font-medium text-[#111111] transition duration-200 hover:text-[#00B8B3] focus:outline-none xl:text-[13px] dark:text-white dark:hover:text-[#25F4EE]"
                        >
                            {link.title}
                        </Link>
                    ))}

                    <div className="relative shrink-0">

                        <button
                            onClick={() =>
                                setLanguageOpen(!languageOpen)
                            }
                            className="flex h-9.5 items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-3 text-[12px] font-medium text-[#111111] transition duration-200 hover:border-[#00B8B3] hover:text-[#00B8B3] focus:outline-none dark:border-[#333333] dark:bg-[#121212] dark:text-white dark:hover:border-[#25F4EE] dark:hover:text-[#25F4EE]"
                        >
                            {selectedLanguage?.short}

                            <ChevronDown
                                size={14}
                                className={`transition-transform ${languageOpen
                                        ? "rotate-180"
                                        : ""
                                    }`}
                            />
                        </button>

                        {languageOpen && (
                            <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-1 shadow-2xl dark:border-[#333333] dark:bg-[#121212]">

                                {languages.map((item) => (
                                    <button
                                        key={item.code}
                                        onClick={() =>
                                            handleLanguage(item.code)
                                        }
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition duration-200 ${language === item.code
                                                ? "bg-[#00B8B3]/10 text-[#00B8B3] dark:bg-[#25F4EE]/10 dark:text-[#25F4EE]"
                                                : "text-[#111111] hover:bg-[#F5F5F5] hover:text-[#00B8B3] dark:text-white dark:hover:bg-[#1C1C1C] dark:hover:text-[#25F4EE]"
                                            }`}
                                    >
                                        <span>{item.name}</span>

                                        {language === item.code && (
                                            <span className="font-bold text-[#FE2C55]">
                                                ✓
                                            </span>
                                        )}
                                    </button>
                                ))}

                            </div>
                        )}

                    </div>

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition duration-200 hover:border-[#FE2C55] hover:text-[#FE2C55] focus:outline-none dark:border-[#333333] dark:bg-[#121212] dark:text-white dark:hover:border-[#FE2C55] dark:hover:text-[#FE2C55]"
                    >
                        {!mounted ? (
                            <span className="h-4.5 w-4.5" />
                        ) : theme === "dark" ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                </nav>

                <div className="ml-auto flex items-center gap-2 lg:hidden">

                    <div className="relative">

                        <button
                            onClick={() =>
                                setLanguageOpen(!languageOpen)
                            }
                            className="flex h-9.5 items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-3 text-[12px] font-medium text-[#111111] transition hover:border-[#00B8B3] hover:text-[#00B8B3] focus:outline-none dark:border-[#333333] dark:bg-[#121212] dark:text-white dark:hover:border-[#25F4EE] dark:hover:text-[#25F4EE]"
                        >
                            {selectedLanguage?.short}

                            <ChevronDown
                                size={13}
                                className={`transition-transform ${languageOpen
                                        ? "rotate-180"
                                        : ""
                                    }`}
                            />
                        </button>

                        {languageOpen && (
                            <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-1 shadow-2xl dark:border-[#333333] dark:bg-[#121212]">

                                {languages.map((item) => (
                                    <button
                                        key={item.code}
                                        onClick={() =>
                                            handleLanguage(item.code)
                                        }
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition ${language === item.code
                                                ? "bg-[#00B8B3]/10 text-[#00B8B3] dark:bg-[#25F4EE]/10 dark:text-[#25F4EE]"
                                                : "text-[#111111] hover:bg-[#F5F5F5] hover:text-[#00B8B3] dark:text-white dark:hover:bg-[#1C1C1C] dark:hover:text-[#25F4EE]"
                                            }`}
                                    >
                                        <span>{item.name}</span>

                                        {language === item.code && (
                                            <span className="font-bold text-[#FE2C55]">
                                                ✓
                                            </span>
                                        )}
                                    </button>
                                ))}

                            </div>
                        )}

                    </div>

                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition hover:border-[#FE2C55] hover:text-[#FE2C55] focus:outline-none dark:border-[#333333] dark:bg-[#121212] dark:text-white dark:hover:border-[#FE2C55] dark:hover:text-[#FE2C55]"
                    >
                        {!mounted ? (
                            <span className="h-4.5 w-4.5" />
                        ) : theme === "dark" ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                        className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111111] transition hover:border-[#25F4EE] hover:text-[#25F4EE] focus:outline-none dark:border-[#333333] dark:bg-[#121212] dark:text-white dark:hover:border-[#25F4EE] dark:hover:text-[#25F4EE]"
                    >
                        {menuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>

                </div>

            </div>

            {menuOpen && (
                <div className="border-t border-[#E5E7EB] bg-white px-4 py-4 dark:border-[#272727] dark:bg-black lg:hidden">

                    <nav className="flex flex-col gap-1">

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-[#111111] transition duration-200 hover:bg-[#F5F5F5] hover:text-[#00B8B3] dark:text-white dark:hover:bg-[#121212] dark:hover:text-[#25F4EE]"
                            >
                                {link.title}
                            </Link>
                        ))}

                    </nav>

                </div>
            )}

        </header>
    );
};

export default Navbar;