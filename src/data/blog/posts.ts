import { BlogPost } from './types';
import { calculateReadingTime } from "@/lib/utils";
import buildingMyPersonalWebsite from '@/data/blog/content/building-my-personal-website.md?raw';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Building my Personal Website",
        slug: "building-my-personal-website",
        excerpt: "How I built this website using React, Tailwind CSS, and Framer Motion.",
        content: buildingMyPersonalWebsite,
        date: "2024-03-20",
        tags: ["React", "Tailwind", "Framer Motion"],
        readTime: calculateReadingTime(buildingMyPersonalWebsite), // Dynamic calculation
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop"
    },
    // Add more posts here...
];
