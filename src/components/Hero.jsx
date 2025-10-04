import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Send, Sparkles, Zap, Database, Lock, Loader2, CheckCircle, Code, Eye, EyeOff } from 'lucide-react'
import LivePreview from './LivePreview'

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')
  const [previewType, setPreviewType] = useState('dashboard')
  const [showCode, setShowCode] = useState(true)

  const examplePrompts = [
    { text: "Create a React dashboard with real-time analytics and charts", type: "dashboard" },
    { text: "Build a chatbot interface with message history", type: "chatbot" },
    { text: "Design a landing page for a SaaS product", type: "landing" },
    { text: "Create a todo list app with local storage", type: "todo" }
  ]

  const codeTemplates = {
    dashboard: `// Generated with CodeForge AI - Analytics Dashboard
import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

export default function Dashboard() {
  const [data, setData] = useState([
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ])
  
  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 space-y-6">
      <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Total Users</p>
            <Users className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-white">12,345</p>
          <p className="text-green-400 text-sm mt-2">+12% from last month</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Revenue</p>
            <DollarSign className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">$54,321</p>
          <p className="text-green-400 text-sm mt-2">+23% from last month</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Growth</p>
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">+23%</p>
          <p className="text-green-400 text-sm mt-2">Above target</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Active Now</p>
            <Activity className="w-5 h-5 text-orange-400" />
          </div>
          <p className="text-3xl font-bold text-white">573</p>
          <p className="text-green-400 text-sm mt-2">+5% from yesterday</p>
        </Card>
      </div>
      
      <Card className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}`,
    chatbot: `// Generated with CodeForge AI - Chatbot Interface
import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm your AI assistant. How can I help you today?" },
    { role: 'user', text: "Can you help me with my project?" },
    { role: 'ai', text: "Of course! I'd be happy to help with your project." }
  ])
  const [input, setInput] = useState('')
  
  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', text: input }])
    setInput('')
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I understand. Let me help you with that..." 
      }])
    }, 1000)
  }
  
  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={\`flex gap-3 \${msg.role === 'user' ? 'justify-end' : ''}\`}>
            {msg.role === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500" />
            )}
            <div className={\`rounded-2xl p-4 max-w-[80%] \${
              msg.role === 'ai' 
                ? 'bg-slate-800 text-white' 
                : 'bg-cyan-500 text-slate-900'
            }\`}>
              <p>{msg.text}</p>
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-slate-700" />
            )}
          </div>
        ))}
      </div>
      
      <div className="p-6 border-t border-slate-800">
        <div className="flex gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..." 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />
          <button onClick={handleSend} className="px-6 py-3 bg-cyan-500 rounded-xl">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}`,
    landing: `// Generated with CodeForge AI - Landing Page
import React from 'react'
import { TrendingUp, Users, Activity } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">YourSaaS</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
            <button className="px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      
      <section className="p-12 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Amazing</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The ultimate platform to transform your ideas into reality.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold border border-slate-700">
            Watch Demo
          </button>
        </div>
      </section>
      
      <section className="grid grid-cols-3 gap-6 p-12 bg-slate-900/50">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
          <p className="text-gray-400">Lightning-fast load times</p>
        </div>
        <div className="text-center">
          <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
          <p className="text-gray-400">Work together seamlessly</p>
        </div>
        <div className="text-center">
          <Activity className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Real-time Updates</h3>
          <p className="text-gray-400">Stay synchronized</p>
        </div>
      </section>
    </div>
  )
}`,
    todo: `// Generated with CodeForge AI - Todo List App
import React, { useState, useEffect } from 'react'

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project documentation', done: false },
    { id: 2, text: 'Review pull requests', done: true },
    { id: 3, text: 'Update dependencies', done: false },
    { id: 4, text: 'Deploy to production', done: false }
  ])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('tasks')
    if (saved) setTasks(JSON.parse(saved))
  }, [])
  
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, done: false }])
    setInput('')
  }
  
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }
  
  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">My Tasks</h1>
        
        <div className="flex gap-2 mb-6">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..." 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white"
          />
          <button onClick={addTask} className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold">
            Add
          </button>
        </div>
        
        <div className="space-y-3">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <input 
                type="checkbox" 
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded"
              />
              <span className={\`flex-1 text-white \${task.done ? 'line-through text-gray-500' : ''}\`}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} className="text-red-400">
                Delete
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          {tasks.filter(t => !t.done).length} tasks remaining
        </div>
      </div>
    </div>
  )
}`
  }

  const handleExamples = () => {
    const randomExample = examplePrompts[Math.floor(Math.random() * examplePrompts.length)]
    setPrompt(randomExample.text)
  }

  const detectAppType = (promptText) => {
    const lower = promptText.toLowerCase()
    if (lower.includes('dashboard') || lower.includes('analytics') || lower.includes('chart')) return 'dashboard'
    if (lower.includes('chatbot') || lower.includes('chat') || lower.includes('message')) return 'chatbot'
    if (lower.includes('landing') || lower.includes('saas') || lower.includes('homepage')) return 'landing'
    if (lower.includes('todo') || lower.includes('task') || lower.includes('list')) return 'todo'
    return 'dashboard' // default
  }

  const simulateCodeGeneration = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const type = detectAppType(prompt)
    return { code: codeTemplates[type], type }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!prompt.trim()) return

    setIsGenerating(true)
    setShowResult(false)
    
    try {
      const { code, type } = await simulateCodeGeneration()
      setGeneratedCode(code)
      setPreviewType(type)
      setShowResult(true)
      setShowCode(true)
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Powered by LangChain & AI Agents</span>
          </div>
        </div>

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

          {/* Generated Result with Live Preview */}
          {showResult && (
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Preview */}
              <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-green-500/20">
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold text-white">Live Preview</h3>
                  </div>
                  <Button
                    onClick={() => setShowCode(!showCode)}
                    variant="outline"
                    size="sm"
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    {showCode ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                    {showCode ? 'Hide' : 'Show'} Code
                  </Button>
                </div>
                
                <div className="p-4">
                  <LivePreview type={previewType} />
                </div>
              </div>

              {/* Code Block */}
              {showCode && (
                <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-6 shadow-2xl shadow-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Generated Code</h3>
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
                  
                  <div className="bg-slate-950 rounded-xl p-4 overflow-x-auto max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-300 font-mono">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-slate-900 font-semibold">
                      Deploy to Production
                    </Button>
                    <Button variant="outline" className="flex-1 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                      Export to GitHub
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
