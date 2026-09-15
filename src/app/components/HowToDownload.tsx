"use client";

import { useLanguage } from "@/context/LanguageContext";

const HowToDownload = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-white px-4 py-10 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <div className="mx-auto max-w-275">
                <div className="space-y-4 text-sm leading-6 text-[#475569] dark:text-[#A1A1AA]">
                    <p>{t.howToDownload.intro1}</p>

                    <p>{t.howToDownload.intro2}</p>
                </div>

                <div className="mt-7 border-l-2 border-[#3B82F6] pl-4 dark:border-[#25F4EE]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                        {t.howToDownload.title}
                    </h2>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#475569] dark:text-[#A1A1AA]">
                    {t.howToDownload.description}
                </p>

                <div className="mt-6 space-y-3">
                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            1
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            {t.howToDownload.step1}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            {t.howToDownload.step1Text}
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#25F4EE] text-xs font-bold text-black">
                            2
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            {t.howToDownload.step2}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            {t.howToDownload.step2Text}
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            3
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            {t.howToDownload.step3}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            {t.howToDownload.step3Text}
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#25F4EE] text-xs font-bold text-black">
                            4
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            {t.howToDownload.step4}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            {t.howToDownload.step4Text}
                        </p>
                    </div>

                    <div className="relative rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 pl-12 transition-colors duration-300 dark:border-[#262626] dark:bg-[#111111]">
                        <span className="absolute left-2.5 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                            5
                        </span>

                        <h3 className="text-sm font-bold text-[#111111] dark:text-white">
                            {t.howToDownload.step5}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                            {t.howToDownload.step5Text}
                        </p>
                    </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-[#64748B] dark:text-[#A1A1AA]">
                    {t.howToDownload.note}
                </p>
            </div>
        </section>
    );
};

export default HowToDownload;