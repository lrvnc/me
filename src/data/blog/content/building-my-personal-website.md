# Building my Personal Website

Welcome to my first blog post! In this article, I want to share the journey of building this website.

## The Motivation

I wanted a place to showcase my work, share my thoughts on research and engineering, and keep a log of my learnings. [^2]

## The Tech Stack

This site is built with a modern stack that ensures performance and a great developer experience. [^1]

[^2]: Teste

### Main Technologies

| Technology | Purpose |
| :--- | :--- |
| **React** | UI Library |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |

### Features Checklist

- [x] Responsive Design
- [x] Dark Mode Support
- [x] Dynamic Blog Content
- [x] LaTeX support
- [ ] RSS Feed

## Implementation Details

Here is how I implemented the scrolling progress bar using Framer Motion:

```tsx
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
});

return (
    <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-[0%]"
        style={{ scaleX }}
    />
);
```

### Mathematical Formulas

Don't forget that we have full LaTeX support:

$$
E = mc^2
$$

## Challenges

One of the biggest challenges was creating the futuristic background effect. I used a combination of CSS gradients and SVG filters to achieve the glassmorphism look.

![Tech Stack](/imgs/mit1-zoom.jpg)

Stay tuned for more updates! 

[^1]: This is an example of a sidenote! It sits in the margin on large screens.
