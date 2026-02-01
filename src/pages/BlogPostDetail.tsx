import { useState, useEffect, useMemo } from 'react';
import { remarkInlineFootnotes } from '@/lib/remark-inline-footnotes';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import mediumZoom from 'medium-zoom';
import 'katex/dist/katex.min.css';
import { Calendar, Tag, Clock, ChevronLeft, Share2, List, Copy, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from '@/data/blog/posts';
import FuturisticBackground from '@/components/common/FuturisticBackground';
import BlogNavBar from '@/components/layout/BlogNavBar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/sections/Contact';
import SEO from '@/components/layout/SEO';
import { cn, calculateReadingTime } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';
import { useToast } from "@/components/ui/use-toast";

const BlogPostDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);
    const [activeHeading, setActiveHeading] = useState<string>('');
    const { theme } = useTheme();
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);

    // Reading Progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic Read Time
    const readTime = useMemo(() => post ? calculateReadingTime(post.content) : '', [post?.content]);

    // Table of Contents Extraction
    const toc = useMemo(() => {
        if (!post) return [];
        const headings = post.content.match(/^#{2,3}\s+(.+)$/gm) || [];
        return headings.map(h => {
            const level = h.startsWith('###') ? 3 : 2;
            const text = h.replace(/^#{2,3}\s+/, '');
            const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            return { id, text, level };
        });
    }, [post?.content]);

    // Image Zoom Initialization
    useEffect(() => {
        const zoom = mediumZoom('.prose img', {
            margin: 24,
            background: 'rgba(0,0,0,0.8)',
        });
        return () => { zoom.detach(); };
    }, [post?.content]);

    // Intersection Observer for ToC
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0% -80% 0%' }
        );

        const headings = document.querySelectorAll('h2, h3');
        headings.forEach((h) => observer.observe(h));

        return () => observer.disconnect();
    }, [post?.content]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post?.title,
                    text: post?.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast({
                title: "Link copied!",
                description: "The post link has been copied to your clipboard.",
            });
        }
    };

    const handleCopyCitation = () => {
        if (!post) return;
        const citation = `@misc{${post.slug},
  title={${post.title}},
  author={Leandro R. Venâncio},
  date={${post.date}},
  url={${window.location.href}}
}`;
        navigator.clipboard.writeText(citation);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast({
            title: "Citation copied!",
            description: "BibTeX entry copied to clipboard.",
        });
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-transparent flex flex-col font-space relative items-center justify-center">
                <FuturisticBackground />
                <h2 className="text-2xl font-bold">Post not found</h2>
                <Link to="/blog">
                    <Button variant="ghost" className="mt-4">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent flex flex-col font-space relative">
            <FuturisticBackground />
            <SEO
                title={`${post.title} | Leandro R. Venâncio`}
                description={post.excerpt}
                imageUrl={post.image}
            />

            <BlogNavBar activeSection="Posts" onSectionChange={() => { }} />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-[0%]"
                style={{ scaleX }}
            />

            <main className="flex-1 container mx-auto px-4 max-w-6xl pt-36 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/blog">
                            <Button variant="ghost" className="mb-8 group">
                                <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                Back to Blog
                            </Button>
                        </Link>

                        {/* Header */}
                        <header className="space-y-6 mb-12">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-border/50 py-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{readTime}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleShare}
                                    className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
                                >
                                    <Share2 className="w-4 h-4" />
                                    <span className="hidden sm:inline">Share</span>
                                </Button>
                            </div>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-border/50 bg-muted">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full aspect-video object-cover"
                            />
                        </div>

                        {/* Content */}
                        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:scroll-mt-24 prose-a:text-primary prose-img:rounded-2xl prose-pre:bg-transparent prose-pre:p-0 relative">
                            <ReactMarkdown
                                remarkPlugins={[remarkMath, remarkGfm, remarkInlineFootnotes]}
                                rehypePlugins={[rehypeKatex]}
                                components={{
                                    code({ node, inline, className, children, ...props }: any) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={theme === 'light' ? prism as any : vscDarkPlus as any}
                                                language={match[1]}
                                                PreTag="div"
                                                className="rounded-xl border border-border/50 !bg-muted/50 backdrop-blur-sm"
                                                customStyle={{ fontSize: '14px' }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={cn("bg-muted px-1.5 py-0.5 rounded text-sm font-mono", className)} {...props}>
                                                {children}
                                            </code>
                                        );
                                    },
                                    // Custom renderer for the sidenote "span" created by our remark plugin
                                    span: ({ node, className, children, ...props }: any) => {
                                        if (className?.includes('sidenote')) {
                                            const label = props['data-label'];
                                            return (
                                                <>
                                                    <sup className="text-[10px] text-primary font-bold select-none">{label}</sup>
                                                    <span className="lg:absolute lg:right-0 lg:translate-x-[120%] lg:w-[200px] text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border/50 block lg:inline-block mt-4 lg:mt-0 font-sans leading-relaxed shadow-sm">
                                                        <span className="font-bold text-primary">{label}. </span>
                                                        {children}
                                                    </span>
                                                </>
                                            );
                                        }
                                        return <span className={className} {...props}>{children}</span>;
                                    },
                                    h1: ({ children, ...props }) => <h1 className="text-4xl font-bold scroll-mt-24" {...props}>{children}</h1>,
                                    h2: ({ children }) => {
                                        const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                        return <h2 id={id} className="text-3xl font-bold mt-12 mb-6 scroll-mt-24">{children}</h2>;
                                    },
                                    h3: ({ children }) => {
                                        const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                        return <h3 id={id} className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">{children}</h3>;
                                    }
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </article>

                        <footer className="mt-20 pt-10 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="outline">#{tag}</Badge>
                                    ))}
                                </div>
                                <Button variant="outline" size="icon" className="rounded-full" onClick={handleShare}>
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </footer>
                    </motion.div>

                    {/* Sidebar / ToC */}
                    <aside className="hidden lg:block h-fit sticky top-32">
                        {toc.length > 0 && (
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                                        <List className="w-4 h-4" />
                                        Table of Contents
                                    </div>
                                    <nav className="flex flex-col space-y-3 border-l border-border/50 ml-2 pl-4 max-h-[60vh] overflow-y-auto">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={cn(
                                                    "text-sm transition-all hover:text-primary line-clamp-1",
                                                    item.level === 3 ? "ml-4" : "",
                                                    activeHeading === item.id
                                                        ? "text-primary font-medium border-l-2 border-primary -ml-[18px] pl-[14px]"
                                                        : "text-muted-foreground"
                                                )}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Citation Block */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                                        <Copy className="w-4 h-4" />
                                        Cite this post
                                    </div>
                                    <div className="relative group">
                                        <div className="bg-muted/50 p-4 rounded-lg text-xs font-mono text-muted-foreground overflow-x-auto whitespace-pre border border-border/50">
                                            {`@misc{${post.slug},
  title={${post.title}},
  author={Leandro R. Venâncio},
  date={${post.date}},
  url={${window.location.href}}
}`}

                                        </div>
                                        <Button
                                            size="icon"
                                            variant="secondary"
                                            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={handleCopyCitation}
                                        >
                                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </main>

            <ContactInfo />
            <Footer />
        </div>
    );
};

export default BlogPostDetail;
