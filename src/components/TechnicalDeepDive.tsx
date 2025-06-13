import React from 'react';
import { ArrowLeft, Database, Layers, Brain, Zap, GitBranch, Shield, Code, Server, Cloud, Lock, Monitor, CheckCircle, Network, Users } from 'lucide-react';

const TechnicalDeepDive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Technical Deep Dive</h1>
                <p className="text-gray-600">SourceCo AI Search & Research Platform Architecture</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: June 13, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Layers className="w-8 h-8 text-blue-600 mr-3" />
            System Architecture Overview
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Core Components</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Database className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Data Ingestion Layer</h4>
                      <p className="text-gray-600">Multi-protocol adapters supporting REST APIs, GraphQL, database connectors, file system watchers, and real-time streaming.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Unified Index</h4>
                      <p className="text-gray-600">Elasticsearch cluster with custom analyzers for PE terminology, vector embeddings storage, and multi-tenant data isolation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">AI Processing Pipeline</h4>
                      <p className="text-gray-600">Distributed ML services for NLP, entity extraction, document classification, and semantic embedding generation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Search Engine</span>
                    <span className="text-sm text-gray-600">Elasticsearch 8.x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ML Framework</span>
                    <span className="text-sm text-gray-600">PyTorch + HuggingFace</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">API Gateway</span>
                    <span className="text-sm text-gray-600">Kong Enterprise</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Message Queue</span>
                    <span className="text-sm text-gray-600">Apache Kafka</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Container Platform</span>
                    <span className="text-sm text-gray-600">Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Processing Pipeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-yellow-600 mr-3" />
            Data Processing Pipeline
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Data Ingestion</h3>
                  <p className="text-gray-600">Real-time and batch ingestion from multiple sources with schema validation and data quality checks.</p>
                </div>
                <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Kafka Streams</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Data Transformation</h3>
                  <p className="text-gray-600">Normalization, enrichment, and feature extraction using Apache Spark distributed processing.</p>
                </div>
                <div className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Apache Spark</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">AI Enhancement</h3>
                  <p className="text-gray-600">NLP processing, entity recognition, sentiment analysis, and vector embedding generation.</p>
                </div>
                <div className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">PyTorch + BERT</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Indexing</h3>
                  <p className="text-gray-600">Multi-field indexing with custom analyzers and real-time updates to the search index.</p>
                </div>
                <div className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Elasticsearch</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enact Protocol Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GitBranch className="w-8 h-8 text-indigo-600 mr-3" />
            Enact Protocol Implementation
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Revolutionary Tool Architecture</h3>
              <p className="text-indigo-700">Enact transforms any command-line tool into an AI capability with simple YAML definitions, cryptographic security, and universal execution.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">PE-Specific Tool Examples</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-2"># DDQ Data Extractor</div>
                  <div className="text-gray-300">
{`name: sourceco/pe/ddq-extractor
description: "Extract key fields from DDQ documents"
command: "uvx pdf-parser@2.1.0 extract --fields='\${fields}' '\${file}'"
timeout: "2m"
tags: ["pe", "ddq", "extraction", "documents"]

inputSchema:
  type: object
  properties:
    file:
      type: string
      description: "Path to DDQ PDF file"
    fields:
      type: array
      items:
        enum: ["aum", "track_record", "team_size", "strategy"]
  required: ["file", "fields"]`}
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-2"># Deal Comp Finder</div>
                  <div className="text-gray-300">
{`name: sourceco/pe/comp-analyzer
description: "Find comparable deals using AI"
command: "npx deal-comps@3.0.0 find --company='\${company}' --sector='\${sector}'"
timeout: "1m"
tags: ["pe", "comps", "analysis", "deals"]

env:
  PITCHBOOK_API_KEY:
    description: "PitchBook API access token"
    source: "https://pitchbook.com/api"
    required: true`}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Core Enact Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Zero-Code Tool Creation</h4>
                      <p className="text-gray-600 text-sm">Transform any CLI tool into an AI capability with just 3 lines of YAML</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Universal Execution</h4>
                      <p className="text-gray-600 text-sm">Works with NPX, UVX, Docker, or any shell command - versioned and reproducible</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Cryptographic Security</h4>
                      <p className="text-gray-600 text-sm">ECDSA-P256 signatures ensure tool authenticity and integrity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Semantic Discovery</h4>
                      <p className="text-gray-600 text-sm">AI models can find tools by description, not just exact names</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">MCP Integration</h4>
                      <p className="text-gray-600 text-sm">Built on Model Context Protocol for seamless AI model communication</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Developer Experience</h4>
                  <div className="text-blue-800 text-sm space-y-1">
                    <div>• Install: <code className="bg-blue-100 px-1 rounded">npm install -g enact-cli</code></div>
                    <div>• Create: <code className="bg-blue-100 px-1 rounded">enact init my-tool</code></div>
                    <div>• Publish: <code className="bg-blue-100 px-1 rounded">enact publish tool.yaml</code></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enact Ecosystem Advantage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Network className="w-8 h-8 text-purple-600 mr-3" />
            Enact Ecosystem Advantage
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Network Effects
                </h3>
                <ul className="text-purple-800 text-sm space-y-2">
                  <li>• Each new tool increases platform value exponentially</li>
                  <li>• Community-driven PE tool development</li>
                  <li>• Cross-organization tool sharing and reuse</li>
                  <li>• Industry-standard tool definitions emerge</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Rapid Innovation
                </h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• New PE tools deployed in hours, not months</li>
                  <li>• No custom integration code required</li>
                  <li>• Business users can create tools with YAML</li>
                  <li>• Instant AI model compatibility</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Projected Tool Ecosystem Growth</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">25</div>
                  <div className="text-sm text-gray-600">Launch Tools</div>
                  <div className="text-xs text-gray-500">Month 1</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100</div>
                  <div className="text-sm text-gray-600">Core Library</div>
                  <div className="text-xs text-gray-500">Month 6</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">500</div>
                  <div className="text-sm text-gray-600">PE Specialized</div>
                  <div className="text-xs text-gray-500">Month 12</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">2000+</div>
                  <div className="text-sm text-gray-600">Community</div>
                  <div className="text-xs text-gray-500">Year 2</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-red-600 mr-3" />
            Security & Compliance
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Encryption</h3>
                <p className="text-gray-600 text-sm">AES-256 encryption at rest, TLS 1.3 in transit, with HSM key management.</p>
              </div>
              <div className="text-center">
                <Server className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Access Control</h3>
                <p className="text-gray-600 text-sm">RBAC with fine-grained permissions, SSO integration, and audit logging.</p>
              </div>
              <div className="text-center">
                <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-gray-600 text-sm">SOC 2 Type II, GDPR compliant, with comprehensive audit trails.</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="w-8 h-8 text-gray-600 mr-3" />
            API Specifications
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Unified Search API</h3>
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400">POST /api/v1/search</div>
                  <div className="text-gray-400 mt-2">{`{
  "query": "private equity fintech deals Q3 2024",
  "semantic": true,
  "filters": {
    "date_range": "2024-07-01:2024-09-30",
    "deal_size": {"min": "100M", "max": "1B"},
    "geography": ["US", "EU"],
    "stage": ["growth", "buyout"]
  },
  "limit": 50,
  "include_ai_summary": true
}`}</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enact Tool Discovery</h3>
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400">POST /api/v1/tools/search</div>
                  <div className="text-gray-400 mt-2">{`{
  "query": "ddq data extraction",
  "tags": ["pe", "documents"],
  "verified_only": true,
  "limit": 10
}

// Response:
{
  "tools": [{
    "name": "sourceco/pe/ddq-extractor",
    "description": "Extract key fields from DDQ documents",
    "tags": ["pe", "ddq", "extraction"],
    "verified": true,
    "rating": 4.8
  }]
}`}</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Tool Execution via MCP</h3>
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400">MCP Tool Execution</div>
                  <div className="text-gray-400 mt-2">{`// Via Enact MCP Server
await client.call('execute-capability-by-id', {
  id: 'sourceco/pe/ddq-extractor',
  args: {
    file: 'documents/apollo-ddq-2024.pdf',
    fields: ['aum', 'track_record', 'strategy']
  }
});

// Result:
{
  "success": true,
  "data": {
    "aum": "$25.0B",
    "track_record": "15+ years",
    "strategy": "mid-market buyouts"
  }
}`}</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Real-time Data Pipeline</h3>
                <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                  <div className="text-green-400">WebSocket /ws/updates</div>
                  <div className="text-gray-400 mt-2">{`{
  "type": "deal_update",
  "source": "pitchbook",
  "data": {
    "company": "TechCorp Inc",
    "event": "series_c_announced",
    "amount": "$50M",
    "investors": ["Sequoia", "a16z"],
    "timestamp": "2025-06-13T14:30:00Z"
  },
  "ai_analysis": {
    "sentiment": "positive",
    "comps_found": 3,
    "investment_thesis": "Strong SaaS metrics..."
  }
}`}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Monitor className="w-8 h-8 text-blue-600 mr-3" />
            Performance Targets
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 200ms</div>
                <div className="text-sm text-gray-600">Search Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Concurrent Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1TB+</div>
                <div className="text-sm text-gray-600">Data Processing/Day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Cloud className="w-8 h-8 text-blue-600 mr-3" />
            Deployment Architecture
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Production Environment</h3>
                  <p className="text-gray-600 text-sm">Multi-AZ Kubernetes cluster with auto-scaling</p>
                </div>
                <div className="text-blue-600 font-mono text-sm">us-east-1, us-west-2</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Staging Environment</h3>
                  <p className="text-gray-600 text-sm">Scaled-down replica for testing and validation</p>
                </div>
                <div className="text-green-600 font-mono text-sm">us-east-1</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Development Environment</h3>
                  <p className="text-gray-600 text-sm">Local development with Docker Compose</p>
                </div>
                <div className="text-yellow-600 font-mono text-sm">localhost</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnicalDeepDive;
