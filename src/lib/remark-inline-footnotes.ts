import { visit } from 'unist-util-visit';
import { Plugin } from 'unified';
import { Node, Parent } from 'unist';

interface FootnoteDefinition extends Parent {
    type: 'footnoteDefinition';
    identifier: string;
    children: Node[];
}

interface FootnoteReference extends Node {
    type: 'footnoteReference';
    identifier: string;
}

export const remarkInlineFootnotes: Plugin = () => {
    return (tree) => {
        const definitions = new Map<string, Node[]>();

        // 1. Collect all definitions and remove them from the tree
        visit(tree, 'footnoteDefinition', (node: FootnoteDefinition, index, parent: Parent | undefined) => {
            definitions.set(node.identifier, node.children);
            if (parent && typeof index === 'number') {
                parent.children.splice(index, 1);
                return index; // Re-index since we removed a node
            }
        });

        // 2. Replace references with a custom directive or span-like structure
        // We'll replace 'footnoteReference' with a custom 'sidenote' node (or html)
        // transforming it into a 'span' with data that we can pick up in components
        visit(tree, 'footnoteReference', (node: FootnoteReference, index, parent: Parent | undefined) => {
            const children = definitions.get(node.identifier);
            if (children && parent && typeof index === 'number') {
                // Create a custom node that react-markdown can render
                // We often use a 'root' or 'paragraph' structure, but let's use a "container"
                // Actually simpler: convert to a "span" with a class if we were outputting HTML.
                // But we are in Remark (Markdown AST).
                // We can create a node that rehype will eventually see.
                // Let's create a custom "sidenote" node.

                // However, react-markdown doesn't know "sidenote".
                // Strategy: Replace with a generic node that has data attributes
                const replacement: any = {
                    type: 'element', // This looks like a rehype node, but we can try to produce something mdast-ish or use data.hName
                    data: {
                        hName: 'span',
                        hProperties: {
                            className: ['sidenote'],
                            'data-label': node.identifier
                        },
                    },
                    children: children
                };

                // The children of definition are usually "paragraph".
                // We want to unwrap the paragraph if possible for inline notes.
                if (children.length > 0 && children[0].type === 'paragraph') {
                    replacement.children = (children[0] as any).children || [];
                }

                parent.children[index] = replacement;
            }
        });
    };
};
