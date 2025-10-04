import { Code2, Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <Sparkles className="w-4 h-4 text-green-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  CodeForge <span className="text-cyan-400">AI</span>
                </h3>
                <p className="text-xs text-gray-400">Powered by LangChain</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Build intelligent applications and agents with the power of LangChain. 
              Transform natural language into production-ready code instantly.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#templates" className="text-gray-400 hover:text-cyan-400 transition-colors">Templates</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} CodeForge AI by Hélio Guilherme Dias Silva. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Security</a>
          </div>
        </div>


      </div>
    </footer>
  )
}
