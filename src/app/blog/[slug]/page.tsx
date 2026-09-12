import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
    "tiktok-watermark": {
        title: "Why TikTok Videos Have Watermarks",
        date: "September 12, 2026",
        content: [
            "If you have watched enough TikTok videos, you have probably noticed the small TikTok logo and username moving around the video. This is the watermark that TikTok adds to videos shared through its platform.",
            "The watermark helps show where the video came from and keeps the creator's username connected to the content when the video is shared somewhere else. It is especially noticeable when a video is downloaded and posted on another platform.",
            "The position of the watermark can also change while the video plays. This makes it harder to simply crop out without affecting part of the original video.",
            "When you save a TikTok video, the final result can therefore look slightly different from what you saw inside the TikTok app. The original upload, processing, and download method can all affect what you receive.",
        ],
    },

    "saved-tiktok-video": {
        title: "What Happens When You Save a TikTok Video",
        date: "September 12, 2026",
        content: [
            "Saving a TikTok video sounds simple, but there are several things happening between the moment you copy a link and the moment the video appears on your device.",
            "A TikTok link points to a specific post. A downloader uses that public link to locate the available video information and prepare a file that can be saved by your browser.",
            "The downloaded file may not always be identical to the version you watched inside the TikTok application. Video processing, compression, available quality, and the original upload can all make a difference.",
            "For the smoothest experience, use the original TikTok Share and Copy Link options before pasting the link into a downloader. Public videos are generally the easiest to process, while private or restricted posts may not be available.",
        ],
    },

    "tiktok-video-quality": {
        title: "Understanding TikTok Video Quality",
        date: "September 12, 2026",
        content: [
            "A video looking sharp on your phone does not always mean that the downloaded file will have exactly the same quality. Several factors determine how a TikTok video looks after it has been saved.",
            "Resolution is one part of the story. A higher resolution can provide more detail, but bitrate and compression also have a major effect on the final appearance.",
            "The original video matters too. If a creator uploaded a heavily compressed video, downloading it cannot recreate details that were already lost in the original file.",
            "Your internet connection can also affect how quickly a larger video file is downloaded. When available, choosing a suitable quality option can help balance file size and visual quality.",
        ],
    },

    "downloaded-video-quality": {
        title: "Why Some TikTok Videos Look Different After Downloading",
        date: "September 12, 2026",
        content: [
            "Have you ever downloaded a TikTok video and noticed that it does not look exactly like the version you watched in the app? That can happen for several normal reasons.",
            "TikTok processes videos before they are delivered to viewers. The platform may use different versions of a video depending on the device, connection, and playback conditions.",
            "Compression is another important factor. Every time video data is compressed, some visual information can be reduced. This may become more noticeable in fast-moving scenes, dark areas, or detailed backgrounds.",
            "The downloaded file can also have a different resolution or bitrate from the version temporarily loaded in the app. So a small difference in sharpness or file size does not necessarily mean something went wrong.",
        ],
    },
};

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;

    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-4 text-[#111111] dark:bg-black dark:text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        Article Not Found
                    </h1>

                    <p className="mt-3 text-sm text-[#64748B] dark:text-[#A1A1AA]">
                        The article you are looking for does not exist.
                    </p>

                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] dark:bg-[#25F4EE] dark:text-black dark:hover:bg-white"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-4 py-24 text-[#111111] transition-colors duration-300 dark:bg-black dark:text-white sm:px-6">
            <article className="mx-auto max-w-210">

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors duration-300 hover:text-[#2563EB] dark:text-[#25F4EE] dark:hover:text-white"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>

                <div className="mt-8 border-l-2 border-[#3B82F6] pl-5 dark:border-[#25F4EE]">
                    <p className="text-xs font-medium text-[#64748B] dark:text-[#71717A]">
                        {post.date}
                    </p>

                    <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#111111] dark:text-white sm:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                </div>

                <div className="mt-8 space-y-6">
                    {post.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-base leading-8 text-[#475569] dark:text-[#A1A1AA]"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-12 border-t border-[#E2E8F0] pt-6 dark:border-[#262626]">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3 text-sm font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B82F6] hover:text-[#3B82F6] dark:border-[#262626] dark:bg-[#111111] dark:text-white dark:hover:border-[#25F4EE] dark:hover:text-[#25F4F4]"
                    >
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>
                </div>

            </article>
        </main>
    );
}