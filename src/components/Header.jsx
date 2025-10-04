import { Button } from '@/components/ui/button.jsx'
import { Code2, Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <Sparkles className="w-4 h-4 text-green-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                CodeForge <span className="text-cyan-400">AI</span>
              </h1>
              <p className="text-xs text-gray-400">Powered by LangChain</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#templates" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Templates
            </a>
            <a href="#docs" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Docs
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Pricing
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 border border-cyan-400/30"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
