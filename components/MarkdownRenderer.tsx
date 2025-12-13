import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-invert prose-p:font-mono prose-headings:font-sans prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-acid-green prose-a:no-underline hover:prose-a:underline max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-black text-white border-b-4 border-acid-green inline-block pr-8 mb-6 mt-8" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-acid-purple mt-8 mb-4 flex items-center gap-2 before:content-['//'] before:text-gray-500" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-3 border-l-4 border-acid-green pl-3" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300 font-mono marker:text-acid-green" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-4 space-y-2 text-gray-300 font-mono marker:text-acid-purple" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-white pl-4 italic bg-gray-900/50 p-4 my-4 text-gray-400" {...props} />,
          code: ({node, ...props}) => {
            // Check if it's inline code or block
            const match = /language-(\w+)/.exec(props.className || '');
            const isInline = !match && !String(props.children).includes('\n');
            
            return isInline 
              ? <code className="bg-gray-800 text-acid-green px-1 py-0.5 border border-gray-600 font-bold" {...props} />
              : <div className="border border-gray-700 bg-black p-4 my-4 overflow-x-auto relative group">
                  <div className="absolute top-0 right-0 bg-gray-800 text-xs px-2 py-1 text-gray-400 opacity-50">CODE_BLOCK</div>
                  <code className="text-sm text-gray-300 font-mono" {...props} />
                </div>
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};