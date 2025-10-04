import { Code2, Workflow, Shield, Rocket, GitBranch, Zap } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'AI-Powered Code Generation',
    description: 'Transform natural language into production-ready code using advanced LangChain agents and LLM orchestration.',
    color: 'cyan'
  },
  {
    icon: Workflow,
    title: 'Stateful Agent Workflows',
    description: 'Build complex multi-step applications with LangGraph. Maintain context, handle errors, and create human-in-the-loop experiences.',
    color: 'green'
  },
  {
    icon: Shield,
    title: '100% Secure & Private',
    description: 'Your code and data remain private with end-to-end encryption. SOC 2 compliant and GDPR ready infrastructure.',
    color: 'cyan'
  },
  {
    icon: Rocket,
    title: 'Instant Deployment',
    description: 'Deploy your applications to production in seconds. Automated CI/CD pipeline with zero configuration required.',
    color: 'green'
  },
  {
    icon: GitBranch,
    title: 'Full Source Control',
    description: 'Export to GitHub, modify locally, or continue building in the cloud. You own your code completely.',
    color: 'cyan'
  },
  {
    icon: Zap,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time. Share projects, review code, and iterate faster than ever.',
    color: 'green'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Production</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale intelligent applications powered by LangChain
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClass = feature.color === 'cyan' 
              ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' 
              : 'text-green-400 bg-green-400/10 border-green-400/30'
            const hoverClass = feature.color === 'cyan'
              ? 'hover:border-cyan-400/60 hover:shadow-cyan-500/20'
              : 'hover:border-green-400/60 hover:shadow-green-500/20'
            
            return (
              <div
                key={index}
                className={`group bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${hoverClass} hover:shadow-xl hover:-translate-y-1 border-slate-700/50`}
              >
                <div className={`w-14 h-14 rounded-xl ${colorClass} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-400/30">
            <span className="text-gray-300">Powered by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              LangChain • LangGraph • LangSmith
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
