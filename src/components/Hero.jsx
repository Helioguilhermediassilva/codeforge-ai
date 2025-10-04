import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Send, Sparkles, Zap, Database, Lock, Loader2, CheckCircle, Code } from 'lucide-react'

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')

  const examplePrompts = [
    "Create a React dashboard with real-time analytics and charts",
    "Build a chatbot interface with message history",
    "Design a landing page for a SaaS product",
    "Create a todo list app with local storage"
  ]

  const handleExamples = () => {
    const randomExample = examplePrompts[Math.floor(Math.random() * examplePrompts.length)]
    setPrompt(randomExample)
  }

  const simulateCodeGeneration = async () => {
    // Simula a geração de código com delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockCode = `// Generated with CodeForge AI
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    // Fetch real-time data
    const fetchData = async () => {
      // Your API call here
      const response = await fetch('/api/analytics')
      const result = await response.json()
      setData(result)
    }
    
    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12,345</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$54,321</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-500">+23%</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Real-time Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}`
    
    return mockCode
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!prompt.trim()) {
      return
    }

    setIsGenerating(true)
    setShowResult(false)
    
    try {
      // Simula chamada à API do LangChain
      const code = await simulateCodeGeneration()
      setGeneratedCode(code)
      setShowResult(true)
    } catch (error) {
      console.error('Error generating code:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode)
    alert('Código copiado para a área de transferência!')
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
                disabled={isGenerating}
              />
              <div className="flex items-center justify-between px-4 pb-2">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleExamples}
                    className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
                    disabled={isGenerating}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Examples
                  </Button>
                </div>
                <Button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Generate Code
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Instant deployment • Full source code • No vendor lock-in
          </p>

          {/* Generated Code Result */}
          {showResult && (
            <div className="mt-8 bg-slate-800/80 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-6 shadow-2xl shadow-green-500/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Code Generated Successfully!</h3>
                </div>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Copy Code
                </Button>
              </div>
              
              <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{generatedCode}</code>
                </pre>
              </div>
              
              <div className="mt-4 flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-slate-900 font-semibold"
                >
                  Deploy to Production
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                >
                  Edit in IDE
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
