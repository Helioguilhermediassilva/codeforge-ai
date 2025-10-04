import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Send, Sparkles, Zap, Database, Lock } from 'lucide-react'

export default function Hero() {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Generating code with prompt:', prompt)
    // Aqui seria integrado com a API do LangChain
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Powered by LangChain & AI Agents</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Build Something</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Extraordinary
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create powerful applications and intelligent agents by chatting with AI. 
            Transform your ideas into production-ready code instantly.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all">
            <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-400 mb-1">300%</div>
            <div className="text-sm text-gray-400">Productivity Boost</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all">
            <Database className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-sm text-gray-400">Data Protected</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all">
            <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Enterprise Support</div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-2 shadow-2xl shadow-cyan-500/20 hover:border-cyan-400/50 transition-all">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask CodeForge AI to create a React dashboard with real-time analytics..."
                className="min-h-[120px] bg-transparent border-0 text-white placeholder:text-gray-500 resize-none focus-visible:ring-0 text-lg p-4"
              />
              <div className="flex items-center justify-between px-4 pb-2">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Examples
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Generate Code
                </Button>
              </div>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Instant deployment • Full source code • No vendor lock-in
          </p>
        </div>
      </div>
    </section>
  )
}
