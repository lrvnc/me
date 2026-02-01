import { BlogPost } from './types';
import { calculateReadingTime } from "@/lib/utils";
import welcomePost from '@/data/blog/content/welcome.md?raw';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Hello World!",
        slug: "welcome",
        excerpt: "That's my first post, and I couldn't be happier! I hope you find this blog useful somehow :)",
        content: welcomePost,
        date: "2026-02-01",
        tags: [],
        readTime: calculateReadingTime(welcomePost), // Dynamic calculation
        image: "/imgs/blackhole.png"
    },
    // Add more posts here...
];
