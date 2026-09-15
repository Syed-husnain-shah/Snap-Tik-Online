"use client";

import {
    createContext,
    useContext,
    useEffect,
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

type Translation = {
    video: string;
    mp3: string;
    slideshow: string;
    photo: string;
    story: string;
    howTo: string;

    hero: {
        badge: string;
        title: string;
        titleAccent: string;
        description: string;
        placeholder: string;
        download: string;
        fast: string;
        free: string;
        noWatermark: string;
    };

    features: {
        title: string;
        description: string;
        hd: string;
        hdText: string;
        watermark: string;
        watermarkText: string;
        free: string;
        freeText: string;
    };

    howToDownload: {
        intro1: string;
        intro2: string;
        title: string;
        description: string;
        step1: string;
        step1Text: string;
        step2: string;
        step2Text: string;
        step3: string;
        step3Text: string;
        step4: string;
        step4Text: string;
        step5: string;
        step5Text: string;
        note: string;
    };

    storyDownloader: {
        badge: string;
        title: string;
        highlight: string;
        description: string;
        placeholder: string;
        paste: string;
        download: string;
        free: string;
        noWatermark: string;
        mobile: string;
        noAccount: string;
    };

    supported: {
        title: string;
        description: string;
    };

    proTips: {
        title: string;
        description: string;
    };

    blog: {
        title: string;
        description: string;
        readMore: string;
        back: string;
    };

    moreTools: {
        title: string;
        description: string;
        tools: {
            video: string;
            mp3: string;
            slideshow: string;
            photo: string;
            story: string;
            howTo: string;
            iphone: string;
            android: string;
            pc: string;
            mac: string;
            tablet: string;
            withoutWatermark: string;
            online: string;
            hd: string;
            audio: string;
        };
    };

    alternativeTools: {
        title: string;
        description: string;
        disclaimer: string;
    };

    faq: {
        title: string;
        description: string;
        questions: {
            q1: string;
            a1: string;
            q2: string;
            a2: string;
            q3: string;
            a3: string;
            q4: string;
            a4: string;
            q5: string;
            a5: string;
            q6: string;
            a6: string;
            q7: string;
            a7: string;
            q8: string;
            a8: string;
        };
    };

    downloadCTA: {
        title: string;
        description: string;
        button: string;
    };

    footer: {
        description: string;
        quickLinks: string;
        helpfulLinks: string;
        home: string;
        blog: string;
        faq: string;
        privacy: string;
        contact: string;
        copyright: string;
        tagline: string;
    };
};

const translations: Record<Language, Translation> = {
    en: {
        video: "Video",
        mp3: "MP3",
        slideshow: "Slideshow",
        photo: "Photo",
        story: "Story",
        howTo: "How To",

        hero: {
            badge: "Fast • Free • No Watermark",
            title: "Download TikTok Videos",
            titleAccent: "Without Watermark",
            description:
                "Save TikTok videos, MP3, photos, and more in seconds. No app, no login, just paste and download.",
            placeholder: "Paste TikTok URL here...",
            download: "Download",
            fast: "Fast",
            free: "Free",
            noWatermark: "No Watermark",
        },

        features: {
            title: "Why use DownTok?",
            description:
                "Everything you need to save TikTok content quickly and easily.",
            hd: "HD Quality",
            hdText: "Best available resolution",
            watermark: "No Watermark",
            watermarkText: "Clean downloads",
            free: "Free Forever",
            freeText: "No account needed",
        },

        howToDownload: {
            intro1:
                "Downloading a TikTok video is simple when you have the right link. If you find a video you want to keep, just copy its public link and bring it back to DownTok.",
            intro2:
                "There is no need to install extra software or create an account. Paste the link, check the available download option, and save the video to your device.",
            title: "How to Download a TikTok Video",
            description:
                "The whole process takes only a few seconds and works on phones, tablets, and computers.",
            step1: "Find your TikTok video",
            step1Text:
                "Open TikTok and find the video you would like to save.",
            step2: "Copy the link",
            step2Text:
                "Tap Share, choose Copy Link, and copy the video's URL.",
            step3: "Paste the link",
            step3Text:
                "Return to DownTok and paste the copied link into the downloader field.",
            step4: "Start the download",
            step4Text:
                "Press the Download button and wait for the available options to appear.",
            step5: "Select and save",
            step5Text:
                "Choose the format you need and save the file to your phone or computer.",
            note:
                "For the best results, always copy the link using TikTok's own Share and Copy Link options. Public videos are supported, while private or restricted content may not be available.",
        },

        storyDownloader: {
            badge: "TikTok Story Saver",
            title: "Download TikTok Stories",
            highlight: "Before They Disappear",
            description:
                "Found a TikTok story you want to keep? Paste its link below and save the video to your device while it is still available.",
            placeholder: "Paste a TikTok story link...",
            paste: "Paste link",
            download: "Download Story",
            free: "Free to use",
            noWatermark: "No watermark",
            mobile: "Works on mobile",
            noAccount: "No account needed",
        },

        supported: {
            title: "Supported TikTok Downloads",
            description:
                "DownTok supports several types of public TikTok content and devices.",
        },

        proTips: {
            title: "Pro Tips for Better Downloads",
            description:
                "A few simple tips can help you get the best results when saving TikTok content.",
        },

        blog: {
            title: "Latest from the Blog",
            description:
                "Helpful guides and tips for downloading and saving TikTok content.",
            readMore: "Read More",
            back: "Back to Blog",
        },

        moreTools: {
            title: "More ways to save TikTok content",
            description:
                "Choose the DownTok tool that matches the type of TikTok content or device you are using.",
            tools: {
                video: "TikTok Video Downloader",
                mp3: "TikTok MP3 Downloader",
                slideshow: "TikTok Slideshow Downloader",
                photo: "TikTok Photo Downloader",
                story: "TikTok Story Downloader",
                howTo: "How to Download TikTok Videos",
                iphone: "TikTok Downloader for iPhone",
                android: "TikTok Downloader for Android",
                pc: "TikTok Downloader for PC",
                mac: "TikTok Downloader for Mac",
                tablet: "TikTok Downloader for Tablet",
                withoutWatermark:
                    "TikTok Video Downloader Without Watermark",
                online: "TikTok Video Downloader Online",
                hd: "TikTok HD Video Downloader",
                audio: "TikTok Audio Downloader",
            },
        },

        alternativeTools: {
            title: "Other TikTok Download Options",
            description:
                "Looking for other ways to save TikTok content? Here are some alternative tools you may want to explore.",
            disclaimer:
                "These are independent third-party tools. DownTok is not affiliated with or endorsed by these services.",
        },

        faq: {
            title: "Frequently Asked Questions",
            description:
                "Have a question about downloading TikTok content? Here are some of the things users commonly ask.",
            questions: {
                q1: "How do I download a TikTok video?",
                a1:
                    "Copy the link of the public TikTok video, paste it into the DownTok input box, and click the download button.",
                q2: "Can I use DownTok on my phone?",
                a2:
                    "Yes. DownTok works directly in your mobile browser on iPhone, Android phones, tablets, and computers.",
                q3: "Do I need to create an account?",
                a3:
                    "No. You can use DownTok without creating an account or signing in.",
                q4: "Can I download TikTok videos without a watermark?",
                a4:
                    "DownTok can provide a download without the visible TikTok watermark when that version is available.",
                q5: "Can I download TikTok photos and slideshows?",
                a5:
                    "Yes. Supported public TikTok photo posts and slideshows can be saved when the media is available.",
                q6: "Can I download TikTok Stories?",
                a6:
                    "Public TikTok Stories may be available while they are still active.",
                q7: "Why is my TikTok link not working?",
                a7:
                    "Make sure you copied the complete link and that the post is still public and available.",
                q8: "Is DownTok free to use?",
                a8:
                    "Yes. DownTok is designed to provide its available TikTok download tools without requiring a paid account.",
            },
        },

        downloadCTA: {
            title: "Ready to download?",
            description:
                "Paste a TikTok link and save your video in just a few seconds.",
            button: "Back to downloader",
        },

        footer: {
            description:
                "A simple online tool for saving TikTok videos, photos, slideshows, and other supported content directly from your browser.",
            quickLinks: "Quick Links",
            helpfulLinks: "Helpful Links",
            home: "Home",
            blog: "Blog",
            faq: "FAQ",
            privacy: "Privacy Policy",
            contact: "Contact",
            copyright: "All rights reserved.",
            tagline: "Download smarter. Keep it simple.",
        },
    },

    zh: {
        video: "视频",
        mp3: "MP3",
        slideshow: "幻灯片",
        photo: "照片",
        story: "故事",
        howTo: "使用方法",

        hero: {
            badge: "快速 • 免费 • 无水印",
            title: "下载 TikTok 视频",
            titleAccent: "无水印保存",
            description:
                "几秒钟即可保存 TikTok 视频、MP3、照片等内容。无需应用，无需登录，只需粘贴链接。",
            placeholder: "在这里粘贴 TikTok 链接...",
            download: "下载",
            fast: "快速",
            free: "免费",
            noWatermark: "无水印",
        },

        features: {
            title: "为什么选择 DownTok？",
            description: "快速轻松保存 TikTok 内容所需的一切功能。",
            hd: "高清画质",
            hdText: "最佳可用分辨率",
            watermark: "无水印",
            watermarkText: "干净的下载文件",
            free: "永久免费",
            freeText: "无需账户",
        },

        howToDownload: {
            intro1:
                "下载 TikTok 视频非常简单。找到想保存的视频后，只需复制它的公开链接，然后返回 DownTok。",
            intro2:
                "无需安装额外软件，也无需创建账户。粘贴链接，查看可用的下载选项，然后将视频保存到你的设备。",
            title: "如何下载 TikTok 视频",
            description:
                "整个过程只需几秒钟，并且可以在手机、平板电脑和电脑上使用。",
            step1: "找到 TikTok 视频",
            step1Text: "打开 TikTok，找到你想保存的视频。",
            step2: "复制链接",
            step2Text: "点击分享，选择复制链接，然后复制视频网址。",
            step3: "粘贴链接",
            step3Text:
                "返回 DownTok，将复制的链接粘贴到下载输入框中。",
            step4: "开始下载",
            step4Text:
                "点击下载按钮，然后等待可用的下载选项出现。",
            step5: "选择并保存",
            step5Text:
                "选择你需要的格式，然后将文件保存到手机或电脑。",
            note:
                "为了获得最佳效果，请使用 TikTok 自带的分享和复制链接功能。我们支持公开视频，私人或受限制的内容可能无法下载。",
        },

        storyDownloader: {
            badge: "TikTok 故事下载器",
            title: "下载 TikTok 故事",
            highlight: "趁它消失之前保存",
            description:
                "发现了一个想保存的 TikTok 故事？将链接粘贴到下面，在故事仍然可用时将视频保存到你的设备。",
            placeholder: "粘贴 TikTok 故事链接...",
            paste: "粘贴链接",
            download: "下载故事",
            free: "免费使用",
            noWatermark: "无水印",
            mobile: "支持手机",
            noAccount: "无需账号",
        },

        supported: {
            title: "支持的 TikTok 下载",
            description: "DownTok 支持多种公开 TikTok 内容和设备。",
        },

        proTips: {
            title: "更好下载的小技巧",
            description: "几个简单技巧可以帮助你获得更好的下载效果。",
        },

        blog: {
            title: "博客最新内容",
            description: "关于 TikTok 下载和保存的实用指南与技巧。",
            readMore: "阅读更多",
            back: "返回博客",
        },

        moreTools: {
            title: "更多保存 TikTok 内容的方法",
            description: "选择适合你的 TikTok 内容或设备的 DownTok 工具。",
            tools: {
                video: "TikTok 视频下载器",
                mp3: "TikTok MP3 下载器",
                slideshow: "TikTok 幻灯片下载器",
                photo: "TikTok 照片下载器",
                story: "TikTok Story 下载器",
                howTo: "如何下载 TikTok 视频",
                iphone: "iPhone TikTok 下载器",
                android: "Android TikTok 下载器",
                pc: "PC TikTok 下载器",
                mac: "Mac TikTok 下载器",
                tablet: "平板电脑 TikTok 下载器",
                withoutWatermark: "无水印 TikTok 视频下载器",
                online: "在线 TikTok 视频下载器",
                hd: "TikTok 高清视频下载器",
                audio: "TikTok 音频下载器",
            },
        },

        alternativeTools: {
            title: "其他 TikTok 下载选项",
            description:
                "想寻找其他保存 TikTok 内容的方法吗？以下是一些可以探索的替代工具。",
            disclaimer:
                "这些是独立的第三方工具。DownTok 与这些服务没有任何关联或认可关系。",
        },

        faq: {
            title: "常见问题",
            description:
                "关于下载 TikTok 内容有疑问吗？以下是用户经常提出的问题。",
            questions: {
                q1: "如何下载 TikTok 视频？",
                a1:
                    "复制公开 TikTok 视频的链接，将其粘贴到 DownTok 输入框，然后点击下载。",
                q2: "可以在手机上使用 DownTok 吗？",
                a2:
                    "可以。DownTok 可以直接在 iPhone、Android 手机、平板电脑和电脑浏览器中使用。",
                q3: "需要创建账户吗？",
                a3: "不需要。你无需创建账户或登录即可使用 DownTok。",
                q4: "可以下载无水印 TikTok 视频吗？",
                a4:
                    "如果公开视频提供无水印版本，DownTok 可以提供该版本。",
                q5: "可以下载 TikTok 照片和幻灯片吗？",
                a5: "可以。支持的公开照片和幻灯片内容可以保存。",
                q6: "可以下载 TikTok Story 吗？",
                a6: "公开 Story 在仍然有效时可能可以下载。",
                q7: "为什么我的 TikTok 链接无法使用？",
                a7:
                    "请确认复制了完整链接，并确认该内容仍然公开可用。",
                q8: "DownTok 免费吗？",
                a8:
                    "是的。DownTok 的可用下载工具无需付费账户即可使用。",
            },
        },

        downloadCTA: {
            title: "准备好下载了吗？",
            description: "粘贴 TikTok 链接，只需几秒钟即可保存视频。",
            button: "返回下载器",
        },

        footer: {
            description:
                "一个简单的在线工具，可直接从浏览器保存 TikTok 视频、照片、幻灯片和其他支持的内容。",
            quickLinks: "快速链接",
            helpfulLinks: "实用链接",
            home: "首页",
            blog: "博客",
            faq: "常见问题",
            privacy: "隐私政策",
            contact: "联系我们",
            copyright: "版权所有。",
            tagline: "更智能地下载，保持简单。",
        },
    },

    es: {
        video: "Video",
        mp3: "MP3",
        slideshow: "Presentación",
        photo: "Foto",
        story: "Historia",
        howTo: "Cómo hacerlo",

        hero: {
            badge: "Rápido • Gratis • Sin marca de agua",
            title: "Descargar videos de TikTok",
            titleAccent: "Sin marca de agua",
            description:
                "Guarda videos, MP3, fotos y más de TikTok en segundos. Sin aplicación y sin iniciar sesión.",
            placeholder: "Pega aquí la URL de TikTok...",
            download: "Descargar",
            fast: "Rápido",
            free: "Gratis",
            noWatermark: "Sin marca de agua",
        },

        features: {
            title: "¿Por qué usar DownTok?",
            description:
                "Todo lo que necesitas para guardar contenido de TikTok de forma rápida y sencilla.",
            hd: "Calidad HD",
            hdText: "Mejor resolución disponible",
            watermark: "Sin marca de agua",
            watermarkText: "Descargas limpias",
            free: "Gratis para siempre",
            freeText: "Sin cuenta",
        },

        howToDownload: {
            intro1:
                "Descargar un video de TikTok es sencillo cuando tienes el enlace correcto. Encuentra un video que quieras guardar, copia su enlace público y vuelve a DownTok.",
            intro2:
                "No necesitas instalar software adicional ni crear una cuenta. Pega el enlace, revisa la opción de descarga disponible y guarda el video en tu dispositivo.",
            title: "Cómo descargar un video de TikTok",
            description:
                "Todo el proceso tarda solo unos segundos y funciona en teléfonos, tablets y ordenadores.",
            step1: "Encuentra tu video de TikTok",
            step1Text:
                "Abre TikTok y encuentra el video que quieres guardar.",
            step2: "Copia el enlace",
            step2Text:
                "Pulsa Compartir, selecciona Copiar enlace y copia la URL del video.",
            step3: "Pega el enlace",
            step3Text:
                "Vuelve a DownTok y pega el enlace copiado en el campo de descarga.",
            step4: "Inicia la descarga",
            step4Text:
                "Pulsa el botón Descargar y espera a que aparezcan las opciones disponibles.",
            step5: "Selecciona y guarda",
            step5Text:
                "Elige el formato que necesitas y guarda el archivo en tu teléfono u ordenador.",
            note:
                "Para obtener mejores resultados, utiliza las opciones Compartir y Copiar enlace de TikTok. Se admiten videos públicos, mientras que el contenido privado o restringido puede no estar disponible.",
        },

        storyDownloader: {
            badge: "Descargador de historias de TikTok",
            title: "Descarga historias de TikTok",
            highlight: "Antes de que desaparezcan",
            description:
                "¿Encontraste una historia de TikTok que quieres guardar? Pega el enlace y guarda el video en tu dispositivo mientras esté disponible.",
            placeholder: "Pega el enlace de la historia de TikTok...",
            paste: "Pegar enlace",
            download: "Descargar historia",
            free: "Gratis",
            noWatermark: "Sin marca de agua",
            mobile: "Funciona en móvil",
            noAccount: "Sin cuenta",
        },

        supported: {
            title: "Descargas de TikTok compatibles",
            description:
                "DownTok admite diferentes tipos de contenido público de TikTok.",
        },

        proTips: {
            title: "Consejos para mejores descargas",
            description:
                "Algunos consejos pueden ayudarte a obtener mejores resultados.",
        },

        blog: {
            title: "Últimas noticias del blog",
            description:
                "Guías y consejos útiles para descargar contenido de TikTok.",
            readMore: "Leer más",
            back: "Volver al blog",
        },

        moreTools: {
            title: "Más formas de guardar contenido de TikTok",
            description:
                "Elige la herramienta DownTok que corresponda a tu contenido o dispositivo.",
            tools: {
                video: "Descargador de videos TikTok",
                mp3: "Descargador MP3 TikTok",
                slideshow: "Descargador de presentaciones TikTok",
                photo: "Descargador de fotos TikTok",
                story: "Descargador de Stories TikTok",
                howTo: "Cómo descargar videos TikTok",
                iphone: "Descargador TikTok para iPhone",
                android: "Descargador TikTok para Android",
                pc: "Descargador TikTok para PC",
                mac: "Descargador TikTok para Mac",
                tablet: "Descargador TikTok para tablet",
                withoutWatermark: "Descargador TikTok sin marca de agua",
                online: "Descargador TikTok online",
                hd: "Descargador TikTok HD",
                audio: "Descargador de audio TikTok",
            },
        },

        alternativeTools: {
            title: "Otras opciones para descargar TikTok",
            description:
                "¿Buscas otras formas de guardar contenido de TikTok? Explora estas alternativas.",
            disclaimer:
                "Estas son herramientas independientes de terceros. DownTok no está afiliado ni respaldado por estos servicios.",
        },

        faq: {
            title: "Preguntas frecuentes",
            description:
                "¿Tienes preguntas sobre las descargas de TikTok? Estas son algunas preguntas habituales.",
            questions: {
                q1: "¿Cómo descargo un video de TikTok?",
                a1:
                    "Copia el enlace del video público, pégalo en DownTok y pulsa descargar.",
                q2: "¿Puedo usar DownTok en mi teléfono?",
                a2:
                    "Sí. DownTok funciona directamente desde el navegador de tu teléfono.",
                q3: "¿Necesito crear una cuenta?",
                a3: "No. Puedes utilizar DownTok sin registrarte.",
                q4: "¿Puedo descargar videos sin marca de agua?",
                a4:
                    "Cuando esté disponible, DownTok puede proporcionar una versión sin la marca visible.",
                q5: "¿Puedo descargar fotos y presentaciones?",
                a5: "Sí. El contenido público compatible puede guardarse.",
                q6: "¿Puedo descargar Stories?",
                a6:
                    "Las Stories públicas pueden estar disponibles mientras estén activas.",
                q7: "¿Por qué no funciona mi enlace?",
                a7:
                    "Comprueba que el enlace esté completo y que el contenido siga siendo público.",
                q8: "¿DownTok es gratis?",
                a8:
                    "Sí. Las herramientas disponibles de DownTok no requieren una cuenta de pago.",
            },
        },

        downloadCTA: {
            title: "¿Listo para descargar?",
            description:
                "Pega un enlace de TikTok y guarda tu video en unos segundos.",
            button: "Volver al descargador",
        },

        footer: {
            description:
                "Una herramienta online sencilla para guardar videos, fotos, presentaciones y otro contenido compatible de TikTok.",
            quickLinks: "Enlaces rápidos",
            helpfulLinks: "Enlaces útiles",
            home: "Inicio",
            blog: "Blog",
            faq: "Preguntas frecuentes",
            privacy: "Política de privacidad",
            contact: "Contacto",
            copyright: "Todos los derechos reservados.",
            tagline: "Descarga de forma inteligente. Mantenlo simple.",
        },
    },

    fr: {
        video: "Vidéo",
        mp3: "MP3",
        slideshow: "Diaporama",
        photo: "Photo",
        story: "Story",
        howTo: "Comment faire",

        hero: {
            badge: "Rapide • Gratuit • Sans filigrane",
            title: "Télécharger des vidéos TikTok",
            titleAccent: "Sans filigrane",
            description:
                "Enregistrez des vidéos, MP3, photos et plus encore depuis TikTok en quelques secondes.",
            placeholder: "Collez l’URL TikTok ici...",
            download: "Télécharger",
            fast: "Rapide",
            free: "Gratuit",
            noWatermark: "Sans filigrane",
        },

        features: {
            title: "Pourquoi utiliser DownTok ?",
            description:
                "Tout ce dont vous avez besoin pour enregistrer du contenu TikTok rapidement.",
            hd: "Qualité HD",
            hdText: "Meilleure résolution disponible",
            watermark: "Sans filigrane",
            watermarkText: "Téléchargements propres",
            free: "Toujours gratuit",
            freeText: "Aucun compte requis",
        },

        howToDownload: {
            intro1:
                "Télécharger une vidéo TikTok est simple lorsque vous avez le bon lien. Trouvez une vidéo que vous souhaitez conserver, copiez son lien public et revenez sur DownTok.",
            intro2:
                "Aucun logiciel supplémentaire ni compte n’est nécessaire. Collez le lien, vérifiez l’option de téléchargement disponible et enregistrez la vidéo sur votre appareil.",
            title: "Comment télécharger une vidéo TikTok",
            description:
                "Le processus ne prend que quelques secondes et fonctionne sur téléphone, tablette et ordinateur.",
            step1: "Trouvez votre vidéo TikTok",
            step1Text:
                "Ouvrez TikTok et trouvez la vidéo que vous souhaitez enregistrer.",
            step2: "Copiez le lien",
            step2Text:
                "Appuyez sur Partager, choisissez Copier le lien et copiez l’URL de la vidéo.",
            step3: "Collez le lien",
            step3Text:
                "Revenez sur DownTok et collez le lien copié dans le champ de téléchargement.",
            step4: "Lancez le téléchargement",
            step4Text:
                "Appuyez sur le bouton Télécharger et attendez que les options disponibles apparaissent.",
            step5: "Sélectionnez et enregistrez",
            step5Text:
                "Choisissez le format souhaité et enregistrez le fichier sur votre téléphone ou ordinateur.",
            note:
                "Pour de meilleurs résultats, utilisez toujours les options Partager et Copier le lien de TikTok. Les vidéos publiques sont prises en charge, tandis que le contenu privé ou restreint peut ne pas être disponible.",
        },

        storyDownloader: {
            badge: "Téléchargeur de stories TikTok",
            title: "Téléchargez les stories TikTok",
            highlight: "Avant leur disparition",
            description:
                "Vous avez trouvé une story TikTok que vous souhaitez conserver ? Collez son lien ci-dessous et enregistrez la vidéo sur votre appareil tant qu'elle est disponible.",
            placeholder: "Collez le lien de la story TikTok...",
            paste: "Coller le lien",
            download: "Télécharger la story",
            free: "Gratuit",
            noWatermark: "Sans filigrane",
            mobile: "Compatible mobile",
            noAccount: "Aucun compte requis",
        },

        supported: {
            title: "Téléchargements TikTok pris en charge",
            description:
                "DownTok prend en charge plusieurs types de contenu TikTok public.",
        },

        proTips: {
            title: "Conseils pour de meilleurs téléchargements",
            description:
                "Quelques conseils simples pour obtenir de meilleurs résultats.",
        },

        blog: {
            title: "Derniers articles du blog",
            description:
                "Guides et conseils utiles pour télécharger du contenu TikTok.",
            readMore: "Lire plus",
            back: "Retour au blog",
        },

        moreTools: {
            title: "Plus de façons d’enregistrer du contenu TikTok",
            description:
                "Choisissez l’outil DownTok adapté à votre contenu ou appareil.",
            tools: {
                video: "Téléchargeur de vidéos TikTok",
                mp3: "Téléchargeur MP3 TikTok",
                slideshow: "Téléchargeur de diaporamas TikTok",
                photo: "Téléchargeur de photos TikTok",
                story: "Téléchargeur de Stories TikTok",
                howTo: "Comment télécharger des vidéos TikTok",
                iphone: "Téléchargeur TikTok pour iPhone",
                android: "Téléchargeur TikTok pour Android",
                pc: "Téléchargeur TikTok pour PC",
                mac: "Téléchargeur TikTok pour Mac",
                tablet: "Téléchargeur TikTok pour tablette",
                withoutWatermark: "Téléchargeur TikTok sans filigrane",
                online: "Téléchargeur TikTok en ligne",
                hd: "Téléchargeur TikTok HD",
                audio: "Téléchargeur audio TikTok",
            },
        },

        alternativeTools: {
            title: "Autres options de téléchargement TikTok",
            description:
                "Vous cherchez d’autres moyens d’enregistrer du contenu TikTok ?",
            disclaimer:
                "Ces outils sont indépendants. DownTok n’est pas affilié à ces services.",
        },

        faq: {
            title: "Questions fréquentes",
            description:
                "Une question sur le téléchargement de contenu TikTok ? Voici les questions courantes.",
            questions: {
                q1: "Comment télécharger une vidéo TikTok ?",
                a1:
                    "Copiez le lien de la vidéo publique, collez-le dans DownTok et cliquez sur télécharger.",
                q2: "Puis-je utiliser DownTok sur mon téléphone ?",
                a2:
                    "Oui. DownTok fonctionne directement dans votre navigateur mobile.",
                q3: "Dois-je créer un compte ?",
                a3: "Non. Aucun compte n’est nécessaire.",
                q4: "Puis-je télécharger sans filigrane ?",
                a4:
                    "Une version sans filigrane peut être disponible selon la vidéo.",
                q5: "Puis-je télécharger des photos et diaporamas ?",
                a5:
                    "Oui. Le contenu public compatible peut être enregistré.",
                q6: "Puis-je télécharger des Stories ?",
                a6:
                    "Les Stories publiques peuvent être disponibles pendant leur durée.",
                q7: "Pourquoi mon lien ne fonctionne-t-il pas ?",
                a7:
                    "Vérifiez que le lien est complet et que le contenu est toujours public.",
                q8: "DownTok est-il gratuit ?",
                a8:
                    "Oui. Les outils disponibles ne nécessitent pas de compte payant.",
            },
        },

        downloadCTA: {
            title: "Prêt à télécharger ?",
            description:
                "Collez un lien TikTok et enregistrez votre vidéo en quelques secondes.",
            button: "Retour au téléchargement",
        },

        footer: {
            description:
                "Un outil en ligne simple pour enregistrer des vidéos, photos et autres contenus TikTok.",
            quickLinks: "Liens rapides",
            helpfulLinks: "Liens utiles",
            home: "Accueil",
            blog: "Blog",
            faq: "FAQ",
            privacy: "Politique de confidentialité",
            contact: "Contact",
            copyright: "Tous droits réservés.",
            tagline: "Téléchargez intelligemment. Faites simple.",
        },
    },

    de: {
        video: "Video",
        mp3: "MP3",
        slideshow: "Diashow",
        photo: "Foto",
        story: "Story",
        howTo: "Anleitung",

        hero: {
            badge: "Schnell • Kostenlos • Ohne Wasserzeichen",
            title: "TikTok-Videos herunterladen",
            titleAccent: "Ohne Wasserzeichen",
            description:
                "Speichere TikTok-Videos, MP3s, Fotos und mehr in wenigen Sekunden.",
            placeholder: "TikTok-URL hier einfügen...",
            download: "Herunterladen",
            fast: "Schnell",
            free: "Kostenlos",
            noWatermark: "Ohne Wasserzeichen",
        },

        features: {
            title: "Warum DownTok?",
            description:
                "Alles, was du brauchst, um TikTok-Inhalte schnell zu speichern.",
            hd: "HD-Qualität",
            hdText: "Beste verfügbare Auflösung",
            watermark: "Ohne Wasserzeichen",
            watermarkText: "Saubere Downloads",
            free: "Für immer kostenlos",
            freeText: "Kein Konto erforderlich",
        },

        howToDownload: {
            intro1:
                "Das Herunterladen eines TikTok-Videos ist einfach, wenn du den richtigen Link hast. Finde ein Video, das du behalten möchtest, kopiere den öffentlichen Link und kehre zu DownTok zurück.",
            intro2:
                "Du musst keine zusätzliche Software installieren oder ein Konto erstellen. Füge den Link ein, prüfe die verfügbare Download-Option und speichere das Video auf deinem Gerät.",
            title: "So lädst du ein TikTok-Video herunter",
            description:
                "Der gesamte Vorgang dauert nur wenige Sekunden und funktioniert auf Smartphones, Tablets und Computern.",
            step1: "Finde dein TikTok-Video",
            step1Text:
                "Öffne TikTok und finde das Video, das du speichern möchtest.",
            step2: "Link kopieren",
            step2Text:
                "Tippe auf Teilen, wähle Link kopieren und kopiere die URL des Videos.",
            step3: "Link einfügen",
            step3Text:
                "Kehre zu DownTok zurück und füge den kopierten Link in das Download-Feld ein.",
            step4: "Download starten",
            step4Text:
                "Klicke auf Herunterladen und warte, bis die verfügbaren Optionen angezeigt werden.",
            step5: "Auswählen und speichern",
            step5Text:
                "Wähle das gewünschte Format und speichere die Datei auf deinem Smartphone oder Computer.",
            note:
                "Für beste Ergebnisse solltest du immer die Teilen- und Link-kopieren-Funktionen von TikTok verwenden. Öffentliche Videos werden unterstützt, während private oder eingeschränkte Inhalte möglicherweise nicht verfügbar sind.",
        },

        storyDownloader: {
            badge: "TikTok Story Downloader",
            title: "TikTok Stories herunterladen",
            highlight: "Bevor sie verschwinden",
            description:
                "Eine TikTok Story gefunden, die du behalten möchtest? Füge den Link unten ein und speichere das Video auf deinem Gerät, solange es verfügbar ist.",
            placeholder: "TikTok Story-Link einfügen...",
            paste: "Link einfügen",
            download: "Story herunterladen",
            free: "Kostenlos",
            noWatermark: "Ohne Wasserzeichen",
            mobile: "Funktioniert auf Mobilgeräten",
            noAccount: "Kein Konto erforderlich",
        },

        supported: {
            title: "Unterstützte TikTok-Downloads",
            description:
                "DownTok unterstützt verschiedene öffentliche TikTok-Inhalte.",
        },

        proTips: {
            title: "Tipps für bessere Downloads",
            description:
                "Ein paar einfache Tipps helfen dir bei besseren Ergebnissen.",
        },

        blog: {
            title: "Neueste Blogbeiträge",
            description:
                "Hilfreiche Anleitungen und Tipps zum Speichern von TikTok-Inhalten.",
            readMore: "Mehr lesen",
            back: "Zurück zum Blog",
        },

        moreTools: {
            title: "Weitere Möglichkeiten zum Speichern von TikTok-Inhalten",
            description:
                "Wähle das passende DownTok-Tool für deinen Inhalt oder dein Gerät.",
            tools: {
                video: "TikTok Video Downloader",
                mp3: "TikTok MP3 Downloader",
                slideshow: "TikTok Diashow Downloader",
                photo: "TikTok Foto Downloader",
                story: "TikTok Story Downloader",
                howTo: "TikTok-Videos herunterladen",
                iphone: "TikTok Downloader für iPhone",
                android: "TikTok Downloader für Android",
                pc: "TikTok Downloader für PC",
                mac: "TikTok Downloader für Mac",
                tablet: "TikTok Downloader für Tablet",
                withoutWatermark: "TikTok Downloader ohne Wasserzeichen",
                online: "TikTok Downloader Online",
                hd: "TikTok HD Video Downloader",
                audio: "TikTok Audio Downloader",
            },
        },

        alternativeTools: {
            title: "Weitere TikTok-Downloadoptionen",
            description:
                "Du suchst nach anderen Möglichkeiten zum Speichern von TikTok-Inhalten?",
            disclaimer:
                "Diese Tools stammen von unabhängigen Drittanbietern. DownTok ist nicht mit ihnen verbunden.",
        },

        faq: {
            title: "Häufig gestellte Fragen",
            description:
                "Fragen zum Herunterladen von TikTok-Inhalten? Hier sind häufige Fragen.",
            questions: {
                q1: "Wie lade ich ein TikTok-Video herunter?",
                a1:
                    "Kopiere den öffentlichen Link, füge ihn in DownTok ein und klicke auf Download.",
                q2: "Kann ich DownTok auf meinem Handy nutzen?",
                a2:
                    "Ja. DownTok funktioniert direkt im mobilen Browser.",
                q3: "Muss ich ein Konto erstellen?",
                a3: "Nein. Du brauchst kein Konto.",
                q4: "Kann ich Videos ohne Wasserzeichen herunterladen?",
                a4:
                    "Wenn verfügbar, kann DownTok eine Version ohne sichtbares Wasserzeichen bereitstellen.",
                q5: "Kann ich Fotos und Diashows herunterladen?",
                a5:
                    "Ja. Unterstützte öffentliche Inhalte können gespeichert werden.",
                q6: "Kann ich TikTok Stories herunterladen?",
                a6:
                    "Öffentliche Stories können verfügbar sein, solange sie aktiv sind.",
                q7: "Warum funktioniert mein TikTok-Link nicht?",
                a7:
                    "Überprüfe den vollständigen Link und ob der Inhalt noch öffentlich verfügbar ist.",
                q8: "Ist DownTok kostenlos?",
                a8:
                    "Ja. Für die verfügbaren Download-Tools ist kein kostenpflichtiges Konto erforderlich.",
            },
        },

        downloadCTA: {
            title: "Bereit zum Download?",
            description:
                "Füge einen TikTok-Link ein und speichere dein Video in wenigen Sekunden.",
            button: "Zurück zum Downloader",
        },

        footer: {
            description:
                "Ein einfaches Online-Tool zum Speichern von TikTok-Videos, Fotos, Diashows und mehr.",
            quickLinks: "Schnelllinks",
            helpfulLinks: "Hilfreiche Links",
            home: "Startseite",
            blog: "Blog",
            faq: "FAQ",
            privacy: "Datenschutz",
            contact: "Kontakt",
            copyright: "Alle Rechte vorbehalten.",
            tagline: "Smarter herunterladen. Einfach halten.",
        },
    },

    pt: {
        video: "Vídeo",
        mp3: "MP3",
        slideshow: "Apresentação",
        photo: "Foto",
        story: "Story",
        howTo: "Como fazer",

        hero: {
            badge: "Rápido • Grátis • Sem marca d'água",
            title: "Baixar vídeos do TikTok",
            titleAccent: "Sem marca d'água",
            description:
                "Salve vídeos, MP3, fotos e muito mais do TikTok em segundos.",
            placeholder: "Cole a URL do TikTok aqui...",
            download: "Baixar",
            fast: "Rápido",
            free: "Grátis",
            noWatermark: "Sem marca d'água",
        },

        features: {
            title: "Por que usar o DownTok?",
            description:
                "Tudo o que você precisa para salvar conteúdo do TikTok rapidamente.",
            hd: "Qualidade HD",
            hdText: "Melhor resolução disponível",
            watermark: "Sem marca d'água",
            watermarkText: "Downloads limpos",
            free: "Grátis para sempre",
            freeText: "Sem conta",
        },

        howToDownload: {
            intro1:
                "Baixar um vídeo do TikTok é simples quando você tem o link correto. Encontre um vídeo que deseja guardar, copie o link público e volte ao DownTok.",
            intro2:
                "Não é necessário instalar software extra nem criar uma conta. Cole o link, verifique a opção de download disponível e salve o vídeo no seu dispositivo.",
            title: "Como baixar um vídeo do TikTok",
            description:
                "Todo o processo leva apenas alguns segundos e funciona em celulares, tablets e computadores.",
            step1: "Encontre seu vídeo do TikTok",
            step1Text:
                "Abra o TikTok e encontre o vídeo que deseja salvar.",
            step2: "Copie o link",
            step2Text:
                "Toque em Compartilhar, escolha Copiar link e copie a URL do vídeo.",
            step3: "Cole o link",
            step3Text:
                "Volte ao DownTok e cole o link copiado no campo de download.",
            step4: "Inicie o download",
            step4Text:
                "Pressione o botão Baixar e aguarde as opções disponíveis aparecerem.",
            step5: "Selecione e salve",
            step5Text:
                "Escolha o formato necessário e salve o arquivo no celular ou computador.",
            note:
                "Para obter os melhores resultados, use sempre as opções Compartilhar e Copiar link do próprio TikTok. Vídeos públicos são compatíveis, enquanto conteúdos privados ou restritos podem não estar disponíveis.",
        },

        storyDownloader: {
            badge: "Baixador de Stories do TikTok",
            title: "Baixe Stories do TikTok",
            highlight: "Antes que desapareçam",
            description:
                "Encontrou um Story do TikTok que deseja guardar? Cole o link abaixo e salve o vídeo no seu dispositivo enquanto ele ainda estiver disponível.",
            placeholder: "Cole o link do Story do TikTok...",
            paste: "Colar link",
            download: "Baixar Story",
            free: "Grátis",
            noWatermark: "Sem marca d'água",
            mobile: "Funciona no celular",
            noAccount: "Não precisa de conta",
        },

        supported: {
            title: "Downloads do TikTok compatíveis",
            description:
                "O DownTok oferece suporte a vários conteúdos públicos do TikTok.",
        },

        proTips: {
            title: "Dicas para melhores downloads",
            description:
                "Algumas dicas simples podem ajudar a obter melhores resultados.",
        },

        blog: {
            title: "Últimas notícias do blog",
            description:
                "Guias e dicas úteis para baixar conteúdo do TikTok.",
            readMore: "Ler mais",
            back: "Voltar ao blog",
        },

        moreTools: {
            title: "Mais maneiras de salvar conteúdo do TikTok",
            description:
                "Escolha a ferramenta DownTok adequada ao seu conteúdo ou dispositivo.",
            tools: {
                video: "Baixador de vídeos TikTok",
                mp3: "Baixador de MP3 TikTok",
                slideshow: "Baixador de apresentações TikTok",
                photo: "Baixador de fotos TikTok",
                story: "Baixador de Stories TikTok",
                howTo: "Como baixar vídeos TikTok",
                iphone: "Baixador TikTok para iPhone",
                android: "Baixador TikTok para Android",
                pc: "Baixador TikTok para PC",
                mac: "Baixador TikTok para Mac",
                tablet: "Baixador TikTok para tablet",
                withoutWatermark: "Baixador TikTok sem marca d'água",
                online: "Baixador TikTok online",
                hd: "Baixador TikTok HD",
                audio: "Baixador de áudio TikTok",
            },
        },

        alternativeTools: {
            title: "Outras opções de download do TikTok",
            description:
                "Procurando outras formas de salvar conteúdo do TikTok? Explore estas alternativas.",
            disclaimer:
                "Estas são ferramentas independentes de terceiros. O DownTok não é afiliado a esses serviços.",
        },

        faq: {
            title: "Perguntas frequentes",
            description:
                "Tem dúvidas sobre downloads do TikTok? Confira algumas perguntas comuns.",
            questions: {
                q1: "Como baixar um vídeo do TikTok?",
                a1:
                    "Copie o link do vídeo público, cole no DownTok e clique em baixar.",
                q2: "Posso usar o DownTok no celular?",
                a2:
                    "Sim. O DownTok funciona diretamente no navegador do celular.",
                q3: "Preciso criar uma conta?",
                a3:
                    "Não. Você pode usar o DownTok sem criar uma conta.",
                q4: "Posso baixar vídeos sem marca d'água?",
                a4:
                    "Quando disponível, o DownTok pode fornecer uma versão sem a marca visível.",
                q5: "Posso baixar fotos e apresentações?",
                a5:
                    "Sim. Conteúdos públicos compatíveis podem ser salvos.",
                q6: "Posso baixar Stories?",
                a6:
                    "Stories públicos podem estar disponíveis enquanto estiverem ativos.",
                q7: "Por que meu link não funciona?",
                a7:
                    "Verifique se o link está completo e se o conteúdo ainda está público.",
                q8: "O DownTok é gratuito?",
                a8:
                    "Sim. As ferramentas disponíveis não exigem uma conta paga.",
            },
        },

        downloadCTA: {
            title: "Pronto para baixar?",
            description:
                "Cole um link do TikTok e salve seu vídeo em poucos segundos.",
            button: "Voltar ao downloader",
        },

        footer: {
            description:
                "Uma ferramenta online simples para salvar vídeos, fotos, apresentações e outros conteúdos do TikTok.",
            quickLinks: "Links rápidos",
            helpfulLinks: "Links úteis",
            home: "Início",
            blog: "Blog",
            faq: "FAQ",
            privacy: "Política de privacidade",
            contact: "Contato",
            copyright: "Todos os direitos reservados.",
            tagline: "Baixe de forma inteligente. Mantenha simples.",
        },
    },

    ja: {
        video: "動画",
        mp3: "MP3",
        slideshow: "スライドショー",
        photo: "写真",
        story: "ストーリー",
        howTo: "使い方",

        hero: {
            badge: "高速 • 無料 • ウォーターマークなし",
            title: "TikTok動画をダウンロード",
            titleAccent: "ウォーターマークなし",
            description:
                "TikTokの動画、MP3、写真などを数秒で保存できます。",
            placeholder: "TikTok URLをここに貼り付け...",
            download: "ダウンロード",
            fast: "高速",
            free: "無料",
            noWatermark: "ウォーターマークなし",
        },

        features: {
            title: "なぜDownTokを使うの？",
            description: "TikTokコンテンツを素早く簡単に保存できます。",
            hd: "HD画質",
            hdText: "利用可能な最高画質",
            watermark: "ウォーターマークなし",
            watermarkText: "きれいなダウンロード",
            free: "完全無料",
            freeText: "アカウント不要",
        },

        howToDownload: {
            intro1:
                "TikTok動画のダウンロードは、正しいリンクがあれば簡単です。保存したい動画を見つけたら、公開リンクをコピーしてDownTokに戻ります。",
            intro2:
                "追加のソフトウェアをインストールしたり、アカウントを作成したりする必要はありません。リンクを貼り付け、利用可能なダウンロード方法を確認して、動画をデバイスに保存できます。",
            title: "TikTok動画のダウンロード方法",
            description:
                "全体の手順は数秒で完了し、スマートフォン、タブレット、パソコンで利用できます。",
            step1: "TikTok動画を見つける",
            step1Text:
                "TikTokを開き、保存したい動画を見つけます。",
            step2: "リンクをコピー",
            step2Text:
                "共有をタップし、「リンクをコピー」を選択して動画のURLをコピーします。",
            step3: "リンクを貼り付け",
            step3Text:
                "DownTokに戻り、コピーしたリンクをダウンロード欄に貼り付けます。",
            step4: "ダウンロードを開始",
            step4Text:
                "ダウンロードボタンを押して、利用可能なオプションが表示されるまで待ちます。",
            step5: "選択して保存",
            step5Text:
                "必要な形式を選択し、スマートフォンまたはパソコンにファイルを保存します。",
            note:
                "最良の結果を得るには、TikTokの「共有」と「リンクをコピー」機能を使用してください。公開動画に対応していますが、非公開または制限されたコンテンツは利用できない場合があります。",
        },

        storyDownloader: {
            badge: "TikTokストーリー保存",
            title: "TikTokストーリーをダウンロード",
            highlight: "消える前に保存",
            description:
                "保存したいTikTokストーリーを見つけましたか？下にリンクを貼り付けて、まだ利用できるうちに動画をデバイスへ保存できます。",
            placeholder: "TikTokストーリーのリンクを貼り付け...",
            paste: "リンクを貼り付け",
            download: "ストーリーをダウンロード",
            free: "無料で利用可能",
            noWatermark: "透かしなし",
            mobile: "スマホ対応",
            noAccount: "アカウント不要",
        },

        supported: {
            title: "対応しているTikTokダウンロード",
            description:
                "DownTokはさまざまな公開TikTokコンテンツに対応しています。",
        },

        proTips: {
            title: "より良いダウンロードのコツ",
            description: "簡単なコツでダウンロード結果を改善できます。",
        },

        blog: {
            title: "ブログの最新記事",
            description: "TikTok保存に役立つガイドとヒント。",
            readMore: "続きを読む",
            back: "ブログに戻る",
        },

        moreTools: {
            title: "TikTokコンテンツを保存するその他の方法",
            description:
                "コンテンツやデバイスに合ったDownTokツールを選択してください。",
            tools: {
                video: "TikTok動画ダウンローダー",
                mp3: "TikTok MP3ダウンローダー",
                slideshow: "TikTokスライドショーダウンローダー",
                photo: "TikTok写真ダウンローダー",
                story: "TikTokストーリーダウンローダー",
                howTo: "TikTok動画のダウンロード方法",
                iphone: "iPhone用TikTokダウンローダー",
                android: "Android用TikTokダウンローダー",
                pc: "PC用TikTokダウンローダー",
                mac: "Mac用TikTokダウンローダー",
                tablet: "タブレット用TikTokダウンローダー",
                withoutWatermark:
                    "ウォーターマークなしTikTokダウンローダー",
                online: "オンラインTikTokダウンローダー",
                hd: "TikTok HD動画ダウンローダー",
                audio: "TikTokオーディオダウンローダー",
            },
        },

        alternativeTools: {
            title: "その他のTikTokダウンロード方法",
            description:
                "TikTokコンテンツを保存する他の方法を探していますか？",
            disclaimer:
                "これらは独立した第三者サービスです。DownTokとは提携していません。",
        },

        faq: {
            title: "よくある質問",
            description:
                "TikTokコンテンツのダウンロードについてよくある質問です。",
            questions: {
                q1: "TikTok動画をダウンロードするには？",
                a1:
                    "公開動画のリンクをコピーしてDownTokに貼り付け、ダウンロードをクリックします。",
                q2: "スマートフォンで使えますか？",
                a2:
                    "はい。スマートフォンのブラウザから直接利用できます。",
                q3: "アカウントは必要ですか？",
                a3: "いいえ。アカウント登録は必要ありません。",
                q4: "ウォーターマークなしで保存できますか？",
                a4:
                    "利用可能な場合、ウォーターマークなしのバージョンを提供できます。",
                q5: "写真やスライドショーも保存できますか？",
                a5:
                    "はい。対応している公開コンテンツを保存できます。",
                q6: "TikTok Storiesを保存できますか？",
                a6:
                    "公開中のStoriesは利用できる場合があります。",
                q7: "リンクが機能しないのはなぜですか？",
                a7:
                    "リンクが完全で、コンテンツが公開されているか確認してください。",
                q8: "DownTokは無料ですか？",
                a8:
                    "はい。利用可能なダウンロード機能は無料で使えます。",
            },
        },

        downloadCTA: {
            title: "ダウンロードの準備はできましたか？",
            description:
                "TikTokリンクを貼り付けて、数秒で動画を保存できます。",
            button: "ダウンローダーに戻る",
        },

        footer: {
            description:
                "TikTok動画、写真、スライドショーなどをブラウザから簡単に保存できるオンラインツールです。",
            quickLinks: "クイックリンク",
            helpfulLinks: "便利なリンク",
            home: "ホーム",
            blog: "ブログ",
            faq: "FAQ",
            privacy: "プライバシーポリシー",
            contact: "お問い合わせ",
            copyright: "All rights reserved.",
            tagline: "スマートにダウンロード。シンプルに。",
        },
    },

    ko: {
        video: "동영상",
        mp3: "MP3",
        slideshow: "슬라이드쇼",
        photo: "사진",
        story: "스토리",
        howTo: "사용 방법",

        hero: {
            badge: "빠름 • 무료 • 워터마크 없음",
            title: "TikTok 동영상 다운로드",
            titleAccent: "워터마크 없이",
            description:
                "TikTok 동영상, MP3, 사진 등을 몇 초 만에 저장하세요.",
            placeholder: "TikTok URL을 여기에 붙여넣으세요...",
            download: "다운로드",
            fast: "빠름",
            free: "무료",
            noWatermark: "워터마크 없음",
        },

        features: {
            title: "왜 DownTok을 사용할까요?",
            description:
                "TikTok 콘텐츠를 빠르고 쉽게 저장하는 데 필요한 모든 기능입니다.",
            hd: "HD 화질",
            hdText: "최상의 사용 가능한 해상도",
            watermark: "워터마크 없음",
            watermarkText: "깔끔한 다운로드",
            free: "영원히 무료",
            freeText: "계정 필요 없음",
        },

        howToDownload: {
            intro1:
                "TikTok 동영상 다운로드는 올바른 링크만 있으면 간단합니다. 저장하고 싶은 동영상을 찾았다면 공개 링크를 복사하고 DownTok으로 돌아오세요.",
            intro2:
                "추가 프로그램을 설치하거나 계정을 만들 필요가 없습니다. 링크를 붙여넣고 사용 가능한 다운로드 옵션을 확인한 다음 기기에 동영상을 저장하세요.",
            title: "TikTok 동영상 다운로드 방법",
            description:
                "전체 과정은 몇 초밖에 걸리지 않으며 휴대폰, 태블릿, 컴퓨터에서 사용할 수 있습니다.",
            step1: "TikTok 동영상 찾기",
            step1Text:
                "TikTok을 열고 저장하고 싶은 동영상을 찾으세요.",
            step2: "링크 복사",
            step2Text:
                "공유를 누르고 링크 복사를 선택하여 동영상 URL을 복사하세요.",
            step3: "링크 붙여넣기",
            step3Text:
                "DownTok으로 돌아와 복사한 링크를 다운로드 입력창에 붙여넣으세요.",
            step4: "다운로드 시작",
            step4Text:
                "다운로드 버튼을 누르고 사용 가능한 옵션이 나타날 때까지 기다리세요.",
            step5: "선택하고 저장",
            step5Text:
                "필요한 형식을 선택하고 휴대폰 또는 컴퓨터에 파일을 저장하세요.",
            note:
                "최상의 결과를 위해 TikTok의 공유 및 링크 복사 기능을 사용하는 것이 좋습니다. 공개 동영상이 지원되며 비공개 또는 제한된 콘텐츠는 사용하지 못할 수 있습니다.",
        },

        storyDownloader: {
            badge: "TikTok 스토리 저장",
            title: "TikTok 스토리 다운로드",
            highlight: "사라지기 전에 저장하세요",
            description:
                "저장하고 싶은 TikTok 스토리를 찾으셨나요? 아래에 링크를 붙여넣고 스토리가 아직 이용 가능한 동안 기기에 저장하세요.",
            placeholder: "TikTok 스토리 링크 붙여넣기...",
            paste: "링크 붙여넣기",
            download: "스토리 다운로드",
            free: "무료 사용",
            noWatermark: "워터마크 없음",
            mobile: "모바일 지원",
            noAccount: "계정 필요 없음",
        },

        supported: {
            title: "지원되는 TikTok 다운로드",
            description:
                "DownTok은 다양한 공개 TikTok 콘텐츠를 지원합니다.",
        },

        proTips: {
            title: "더 나은 다운로드를 위한 팁",
            description:
                "몇 가지 간단한 팁으로 다운로드 결과를 개선할 수 있습니다.",
        },

        blog: {
            title: "블로그 최신 글",
            description:
                "TikTok 콘텐츠 저장에 유용한 가이드와 팁입니다.",
            readMore: "더 보기",
            back: "블로그로 돌아가기",
        },

        moreTools: {
            title: "TikTok 콘텐츠를 저장하는 더 많은 방법",
            description:
                "콘텐츠 또는 기기에 맞는 DownTok 도구를 선택하세요.",
            tools: {
                video: "TikTok 동영상 다운로더",
                mp3: "TikTok MP3 다운로더",
                slideshow: "TikTok 슬라이드쇼 다운로더",
                photo: "TikTok 사진 다운로더",
                story: "TikTok 스토리 다운로더",
                howTo: "TikTok 동영상 다운로드 방법",
                iphone: "iPhone용 TikTok 다운로더",
                android: "Android용 TikTok 다운로더",
                pc: "PC용 TikTok 다운로더",
                mac: "Mac용 TikTok 다운로더",
                tablet: "태블릿용 TikTok 다운로더",
                withoutWatermark: "워터마크 없는 TikTok 다운로더",
                online: "온라인 TikTok 다운로더",
                hd: "TikTok HD 동영상 다운로더",
                audio: "TikTok 오디오 다운로더",
            },
        },

        alternativeTools: {
            title: "다른 TikTok 다운로드 옵션",
            description:
                "TikTok 콘텐츠를 저장하는 다른 방법을 찾고 계신가요?",
            disclaimer:
                "이 서비스들은 독립적인 제3자 도구입니다. DownTok과 관련이 없습니다.",
        },

        faq: {
            title: "자주 묻는 질문",
            description:
                "TikTok 콘텐츠 다운로드에 대한 자주 묻는 질문입니다.",
            questions: {
                q1: "TikTok 동영상을 어떻게 다운로드하나요?",
                a1:
                    "공개 동영상 링크를 복사하여 DownTok에 붙여넣고 다운로드를 클릭하세요.",
                q2: "휴대폰에서 DownTok을 사용할 수 있나요?",
                a2:
                    "네. 휴대폰 브라우저에서 바로 사용할 수 있습니다.",
                q3: "계정을 만들어야 하나요?",
                a3: "아니요. 계정이 필요하지 않습니다.",
                q4: "워터마크 없이 다운로드할 수 있나요?",
                a4:
                    "가능한 경우 워터마크 없는 버전을 제공할 수 있습니다.",
                q5: "TikTok 사진과 슬라이드쇼도 다운로드할 수 있나요?",
                a5:
                    "네. 지원되는 공개 콘텐츠를 저장할 수 있습니다.",
                q6: "TikTok Stories를 다운로드할 수 있나요?",
                a6:
                    "공개 Stories는 활성 상태인 동안 이용 가능할 수 있습니다.",
                q7: "TikTok 링크가 작동하지 않는 이유는 무엇인가요?",
                a7:
                    "링크가 완전하고 콘텐츠가 공개되어 있는지 확인하세요.",
                q8: "DownTok은 무료인가요?",
                a8:
                    "네. 사용 가능한 다운로드 기능은 무료입니다.",
            },
        },

        downloadCTA: {
            title: "다운로드할 준비가 되셨나요?",
            description:
                "TikTok 링크를 붙여넣고 몇 초 만에 동영상을 저장하세요.",
            button: "다운로더로 돌아가기",
        },

        footer: {
            description:
                "브라우저에서 TikTok 동영상, 사진, 슬라이드쇼 등을 간단하게 저장할 수 있는 온라인 도구입니다.",
            quickLinks: "빠른 링크",
            helpfulLinks: "유용한 링크",
            home: "홈",
            blog: "블로그",
            faq: "FAQ",
            privacy: "개인정보 보호정책",
            contact: "문의",
            copyright: "모든 권리 보유.",
            tagline: "더 스마트하게 다운로드하세요. 간단하게.",
        },
    },
};

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translation;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem(
            "downtok-language"
        ) as Language;

        if (saved && translations[saved]) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage);
        localStorage.setItem("downtok-language", newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
};