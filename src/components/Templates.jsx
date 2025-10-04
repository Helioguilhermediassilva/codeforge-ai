import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Star, Copy } from 'lucide-react'

const templates = [
  {
    title: 'AI Chatbot Assistant',
    description: 'Conversational AI with memory and context awareness',
    category: 'Consumer App',
    remixes: 15234,
    gradient: 'from-cyan-500 to-blue-500',
    tags: ['LangChain', 'Chat', 'Memory']
  },
  {
    title: 'Document Q&A System',
    description: 'RAG-powered document analysis and question answering',
    category: 'Internal Tools',
    remixes: 12876,
    gradient: 'from-green-500 to-emerald-500',
    tags: ['RAG', 'Embeddings', 'Vector Store']
  },
  {
    title: 'Code Review Agent',
    description: 'Automated code analysis and improvement suggestions',
    category: 'Developer Tools',
    remixes: 10543,
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Agents', 'Code Analysis', 'AI']
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time data visualization with AI insights',
    category: 'B2B App',
    remixes: 9821,
    gradient: 'from-orange-500 to-red-500',
    tags: ['Analytics', 'Charts', 'Real-time']
  },
  {
    title: 'Content Generator',
    description: 'Multi-format content creation with AI assistance',
    category: 'Website',
    remixes: 8654,
    gradient: 'from-cyan-500 to-green-500',
    tags: ['Content', 'Generation', 'Marketing']
  },
  {
    title: 'Smart Workflow Automation',
    description: 'Automate business processes with intelligent agents',
    category: 'Enterprise',
    remixes: 7432,
    gradient: 'from-blue-500 to-indigo-500',
    tags: ['Automation', 'Workflow', 'Integration']
  }
]

export default function Templates() {
  return (
    <section id="templates" className="relative py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              From the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Community</span>
            </h2>
            <p className="text-gray-400">Start with a template or build from scratch</p>
          </div>
          <Button variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
            View All
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['Popular', 'Consumer App', 'Internal Tools', 'Website', 'B2B App', 'Developer Tools', 'Enterprise'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === 'Popular'
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Template Preview */}
              <div className={`h-40 bg-gradient-to-br ${template.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="bg-white/90 text-slate-900 hover:bg-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-white border border-white/20">
                  {template.category}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md bg-slate-800 text-cyan-400 text-xs font-medium border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Copy className="w-4 h-4" />
                    <span>{template.remixes.toLocaleString()} Remixes</span>
                  </div>
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50"
          >
            Show More Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
