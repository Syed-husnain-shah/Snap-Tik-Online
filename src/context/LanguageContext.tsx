"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

export type Language =
    | "en"
    | "zh"
    | "es"
    | "fr"
    | "de"
    | "pt"
    | "ja"
    | "ko";

const translations = {
    en: {
        video: "TikTok Video Downloader",
        mp3: "TikTok MP3 Downloader",
        slideshow: "TikTok Slideshow Downloader",
        photo: "TikTok Photo Downloader",
        story: "TikTok Story Downloader",
        howTo: "How to Download",
    },

    zh: {
        video: "TikTok 视频下载器",
        mp3: "TikTok MP3 下载器",
        slideshow: "TikTok 幻灯片下载器",
        photo: "TikTok 图片下载器",
        story: "TikTok 故事下载器",
        howTo: "如何下载",
    },

    es: {
        video: "Descargador de Videos de TikTok",
        mp3: "Descargador de MP3 de TikTok",
        slideshow: "Descargador de Presentaciones de TikTok",
        photo: "Descargador de Fotos de TikTok",
        story: "Descargador de Historias de TikTok",
        howTo: "Cómo descargar",
    },

    fr: {
        video: "Téléchargeur de vidéos TikTok",
        mp3: "Téléchargeur MP3 TikTok",
        slideshow: "Téléchargeur de diaporamas TikTok",
        photo: "Téléchargeur de photos TikTok",
        story: "Téléchargeur de stories TikTok",
        howTo: "Comment télécharger",
    },

    de: {
        video: "TikTok Video Downloader",
        mp3: "TikTok MP3 Downloader",
        slideshow: "TikTok Diashow Downloader",
        photo: "TikTok Foto Downloader",
        story: "TikTok Story Downloader",
        howTo: "So wird heruntergeladen",
    },

    pt: {
        video: "Baixador de Vídeos do TikTok",
        mp3: "Baixador de MP3 do TikTok",
        slideshow: "Baixador de Apresentações do TikTok",
        photo: "Baixador de Fotos do TikTok",
        story: "Baixador de Stories do TikTok",
        howTo: "Como baixar",
    },

    ja: {
        video: "TikTok動画ダウンローダー",
        mp3: "TikTok MP3ダウンローダー",
        slideshow: "TikTokスライドショーダウンローダー",
        photo: "TikTok写真ダウンローダー",
        story: "TikTokストーリーダウンローダー",
        howTo: "ダウンロード方法",
    },

    ko: {
        video: "TikTok 동영상 다운로더",
        mp3: "TikTok MP3 다운로더",
        slideshow: "TikTok 슬라이드쇼 다운로더",
        photo: "TikTok 사진 다운로더",
        story: "TikTok 스토리 다운로더",
        howTo: "다운로드 방법",
    },
};

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}