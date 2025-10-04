import { Card } from '@/components/ui/card.jsx'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

// Componente que renderiza o preview baseado no tipo de aplicação
export default function LivePreview({ type = 'dashboard' }) {
  
  // Dashboard Preview
  if (type === 'dashboard') {
    const data = [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 600 },
      { name: 'Apr', value: 800 },
      { name: 'May', value: 500 },
      { name: 'Jun', value: 700 },
    ]

    return (
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
              Export
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-800/50 border-cyan-500/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Users</p>
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white">12,345</p>
            <p className="text-green-400 text-sm mt-2">+12% from last month</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-green-500/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Revenue</p>
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">$54,321</p>
            <p className="text-green-400 text-sm mt-2">+23% from last month</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Growth</p>
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white">+23%</p>
            <p className="text-green-400 text-sm mt-2">Above target</p>
          </Card>
          
          <Card className="bg-slate-800/50 border-orange-500/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Active Now</p>
              <Activity className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-3xl font-bold text-white">573</p>
            <p className="text-green-400 text-sm mt-2">+5% from yesterday</p>
          </Card>
        </div>
        
        <Card className="bg-slate-800/50 border-cyan-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    )
  }

  // Chatbot Preview
  if (type === 'chatbot') {
    return (
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl h-[600px] flex flex-col">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Assistant</h2>
              <p className="text-sm text-green-400">● Online</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex-shrink-0"></div>
            <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
              <p className="text-white">Hello! I'm your AI assistant. How can I help you today?</p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <div className="bg-cyan-500 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
              <p className="text-slate-900">Can you help me with my project?</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex-shrink-0"></div>
            <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
              <p className="text-white">Of course! I'd be happy to help with your project. What specific aspect would you like assistance with?</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900 rounded-xl font-semibold hover:from-cyan-400 hover:to-green-400 transition-all">
            Send
          </button>
        </div>
      </div>
    )
  }

  // Landing Page Preview
  if (type === 'landing') {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">YourSaaS</h2>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">Features</a>
              <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <button className="px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-12 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Amazing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The ultimate platform to transform your ideas into reality. Fast, secure, and scalable.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold text-lg border border-slate-700 hover:bg-slate-700 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 p-12 bg-slate-900/50">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Performance</h3>
            <p className="text-gray-400">Lightning-fast load times and optimized performance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-400">Work together seamlessly with your team</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real-time Updates</h3>
            <p className="text-gray-400">Stay synchronized with live updates</p>
          </div>
        </div>
      </div>
    )
  }

  // Todo List Preview
  if (type === 'todo') {
    return (
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">My Tasks</h1>
        
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            placeholder="Add a new task..." 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900 rounded-lg font-semibold hover:from-cyan-400 hover:to-green-400 transition-all">
            Add
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-600" />
            <span className="flex-1 text-white">Complete project documentation</span>
            <button className="text-red-400 hover:text-red-300">Delete</button>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors">
            <input type="checkbox" checked className="w-5 h-5 rounded border-slate-600" />
            <span className="flex-1 text-gray-500 line-through">Review pull requests</span>
            <button className="text-red-400 hover:text-red-300">Delete</button>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-600" />
            <span className="flex-1 text-white">Update dependencies</span>
            <button className="text-red-400 hover:text-red-300">Delete</button>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/30 transition-colors">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-600" />
            <span className="flex-1 text-white">Deploy to production</span>
            <button className="text-red-400 hover:text-red-300">Delete</button>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
          <span>4 tasks remaining</span>
          <button className="text-cyan-400 hover:text-cyan-300">Clear completed</button>
        </div>
      </div>
    )
  }

  return null
}
