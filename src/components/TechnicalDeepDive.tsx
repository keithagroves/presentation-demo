import { ArrowLeft, Database, Layers, Brain, Zap, GitBranch, Shield, Code, Server, Cloud, Lock, Monitor, CheckCircle, Network, Users, Search, FileText, Target, DollarSign, Sparkles, Activity, TrendingUp } from 'lucide-react';

const TechnicalDeepDive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800 group-hover:-translate-x-1 transition-all" />
              </button>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Deep Dive
                </h1>
                <p className="text-gray-600 text-lg">Simple, Practical AI Research Platform Architecture</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Last updated: June 13, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Architecture Overview */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-3 mr-4">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Simple & Practical Architecture</h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Components</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <div className="bg-blue-500 rounded-xl p-2">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Simple Data Connectors</h4>
                      <p className="text-gray-600">Direct API integrations with existing systems - no complex streaming required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                    <div className="bg-purple-500 rounded-xl p-2">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">Unified Search Layer</h4>
                      <p className="text-gray-600">PostgreSQL with pgvector extension - proven, reliable, cost-effective</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                    <div className="bg-green-500 rounded-xl p-2">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">AI Research Engine</h4>
                      <p className="text-gray-600">GPT-4/Claude with PE-specific few-shot prompting - no training required</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Simple Technology Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">Database</span>
                    <span className="text-sm text-blue-600 font-semibold">PostgreSQL + pgvector</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">AI Models</span>
                    <span className="text-sm text-purple-600 font-semibold">GPT-4 / Claude</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">Backend</span>
                    <span className="text-sm text-green-600 font-semibold">Python + FastAPI</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700">Deployment</span>
                    <span className="text-sm text-orange-600 font-semibold">Docker + Cloud</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">💡 Why Simple?</h4>
                  <p className="text-sm text-green-700">Focus on results, not technology complexity. Proven tools that PE teams can understand and maintain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Few-Shot PE Intelligence */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Few-Shot PE Intelligence Engine</h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Cost-Effective Approach
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-purple-800">90% cheaper than fine-tuning models</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-purple-800">No expensive GPU training required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-purple-800">Works with existing AI models</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Immediate Value
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-blue-800">PE intelligence from day one</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-blue-800">5-10 examples teach domain patterns</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-blue-800">Continuously improves with use</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto">
              <div className="text-green-400 mb-4"># Example: Few-Shot PE Prompt Template</div>
              <div className="text-gray-300 space-y-2">
                <div>You are a PE research assistant. Here are examples of PE terminology:</div>
                <div className="text-blue-300">• ARR = Annual Recurring Revenue (key SaaS metric)</div>
                <div className="text-blue-300">• EBITDA = Earnings before interest, taxes, depreciation, amortization</div>
                <div className="text-blue-300">• LBO = Leveraged Buyout (PE acquisition strategy)</div>
                <div className="text-blue-300">• DD = Due Diligence (comprehensive company analysis)</div>
                <div className="mt-4">User Query: {`"Find SaaS companies with strong ARR growth"`}</div>
                <div className="text-yellow-300">→ AI understands ARR context and searches for recurring revenue data</div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Data Flow */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-3 mr-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Simple Data Flow</h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Direct API Connections",
                  desc: "Connect directly to existing systems (Salesforce, Gmail, SharePoint) - no complex data pipelines",
                  tech: "REST APIs + OAuth",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: 2,
                  title: "Unified Storage",
                  desc: "Store normalized data in PostgreSQL with vector embeddings for semantic search",
                  tech: "PostgreSQL + pgvector",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: 3,
                  title: "AI Enhancement",
                  desc: "Use few-shot prompts to give AI PE domain knowledge - no training required",
                  tech: "GPT-4/Claude + Prompts",
                  color: "from-green-500 to-green-600"
                },
                {
                  step: 4,
                  title: "Smart Results",
                  desc: "Deliver results with full citations and confidence scoring for compliance",
                  tech: "Source Attribution",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6 group">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      {item.step}
                    </div>
                    {idx < 3 && (
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-100"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.color}`}>
                        {item.tech}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enact Protocol - Enhanced */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-3 mr-4">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Enact Protocol Integration</h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-3 flex items-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Transform Any Tool into an AI Capability
              </h3>
              <p className="text-indigo-700 text-lg">Simple YAML definitions turn command-line tools into AI-accessible capabilities with built-in security and versioning.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Simple PE Tool Example</h3>
                <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto shadow-lg">
                  <div className="text-green-400 mb-3"># Salesforce Deal Extractor</div>
                  <div className="text-gray-300">
{`name: sourceco/crm/salesforce-deals
description: "Extract deal pipeline data"
authentication: oauth2
endpoints:
  - deals
  - contacts  
  - opportunities

# That's it! No complex integration code needed`}
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Developer Experience
                  </h4>
                  <div className="text-blue-800 text-sm space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Create: <code className="bg-blue-100 px-2 py-1 rounded ml-1">enact init my-tool</code>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Publish: <code className="bg-blue-100 px-2 py-1 rounded ml-1">enact publish tool.yaml</code>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Use: AI automatically discovers and uses your tool
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Benefits</h3>
                <div className="space-y-4">
                  {[
                    { title: "Zero-Code Tool Creation", desc: "Transform any CLI tool with just YAML configuration", icon: <FileText className="w-6 h-6" /> },
                    { title: "Instant AI Integration", desc: "Tools become immediately available to AI models", icon: <Zap className="w-6 h-6" /> },
                    { title: "Built-in Security", desc: "Automatic authentication and permission handling", icon: <Shield className="w-6 h-6" /> },
                    { title: "Community Ecosystem", desc: "Share and leverage PE-specific tools", icon: <Users className="w-6 h-6" /> }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-2 text-white">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Performance */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-3 mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Security & Performance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Security Features</h3>
              <div className="space-y-4">
                {[
                  { icon: <Lock className="w-8 h-8" />, title: "Data Encryption", desc: "AES-256 at rest, TLS 1.3 in transit", color: "from-blue-500 to-blue-600" },
                  { icon: <Server className="w-8 h-8" />, title: "Access Control", desc: "Inherit permissions from source systems", color: "from-green-500 to-green-600" },
                  { icon: <Monitor className="w-8 h-8" />, title: "Audit Trails", desc: "Complete source attribution for compliance", color: "from-purple-500 to-purple-600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                    <div className={`bg-gradient-to-r ${item.color} rounded-lg p-2 text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Performance Targets</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "< 200ms", label: "Search Response", color: "from-blue-500 to-blue-600" },
                  { metric: "99.9%", label: "System Uptime", color: "from-green-500 to-green-600" },
                  { metric: "1000+", label: "Concurrent Users", color: "from-purple-500 to-purple-600" },
                  { metric: "100GB+", label: "Daily Processing", color: "from-orange-500 to-orange-600" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simple Deployment */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-3 mr-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Simple Deployment Strategy</h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <div className="space-y-6">
              {[
                { 
                  env: "Development", 
                  desc: "Local development with Docker Compose - easy setup", 
                  tech: "Docker Compose + Local DB",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  env: "Staging", 
                  desc: "Cloud-hosted replica for testing and validation", 
                  tech: "Single Cloud Instance",
                  color: "from-blue-500 to-blue-600"
                },
                { 
                  env: "Production", 
                  desc: "Auto-scaling cloud deployment with redundancy", 
                  tech: "Multi-Region Cloud",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.env} Environment</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${item.color}`}>
                    {item.tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform PE Research?</h2>
            <p className="text-xl mb-6 opacity-90">Simple, practical AI that works from day one - no complex infrastructure required.</p>
            <div className="space-y-2 text-lg opacity-95">
              <div>✅ 90% cost savings vs traditional AI training</div>
              <div>✅ Deploy in weeks, not months</div>
              <div>✅ Built on proven, reliable technology</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;