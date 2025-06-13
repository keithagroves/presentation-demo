import React from 'react';
import { 
  Database, Search, Workflow, FileText, Users, 
  Brain, Zap, Shield, Rocket, Layers, 
  GitBranch, Activity, Target, Globe, Bot, 
  Sparkles, Network, TrendingUp 
} from 'lucide-react';

export const slidesData: any[] = [
  {
    id: 'title',
    title: 'Strategic AI Assessment',
    subtitle: 'From Fragmentation to Integration',
    type: 'title'
  },
  {
    id: 'overview',
    title: 'The Vision',
    type: 'content',
    icon: <Rocket className="w-8 h-8" />,
    bullets: [
      'Current State: Fragmented data environment',
      'Future Vision: Unified AI system for intelligent workflows',
      'Goal: Transform private equity deal sourcing',
      'Innovation: Extensible platform leveraging open standards'
    ]
  },
  {
    id: 'workstream-choice',
    title: 'Chosen Workstream',
    type: 'feature',
    workstream: 'Search & Research Across All Data',
    description: 'Building a unified search system that seamlessly integrates structured and unstructured data sources',
    icon: <Search className="w-16 h-16" />
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    type: 'architecture',
    components: [
      { name: 'Data Ingestion Layer', desc: 'Connectors for all data sources', icon: <Database className="w-8 h-8" /> },
      { name: 'Unified Index', desc: 'Elasticsearch-based semantic search', icon: <Layers className="w-8 h-8" /> },
      { name: 'AI Processing', desc: 'NLP and embedding models', icon: <Brain className="w-8 h-8" /> },
      { name: 'Query Engine', desc: 'Multi-modal search capabilities', icon: <Zap className="w-8 h-8" /> },
      { name: 'Tool Registry', desc: 'Enact Protocol integration', icon: <GitBranch className="w-8 h-8" /> },
      { name: 'Execution Layer', desc: 'Secure tool orchestration', icon: <Shield className="w-8 h-8" /> }
    ]
  },
  {
    id: 'data-flow',
    title: 'Data Flow Architecture',
    type: 'flow',
    steps: [
      'Data sources push/pull to ingestion layer',
      'Processing pipeline normalizes and enriches data',
      'AI models generate embeddings and metadata',
      'Unified index stores searchable content',
      'Query engine provides intelligent results'
    ]
  },
  {
    id: 'roadmap',
    title: '12-Month Implementation Roadmap',
    type: 'timeline',
    phases: [
      { month: '0-3', title: 'Foundation', items: ['Basic search infrastructure', 'Initial data connectors', '10 core Enact tools'], color: 'from-blue-400 to-blue-600' },
      { month: '3-6', title: 'Enhancement', items: ['AI models integration', 'Advanced search features', '50+ Enact tools'], color: 'from-purple-400 to-purple-600' },
      { month: '6-9', title: 'Optimization', items: ['Performance tuning', 'User feedback integration', 'Tool marketplace launch'], color: 'from-pink-400 to-pink-600' },
      { month: '9-12', title: 'Scale', items: ['Full data source coverage', 'Advanced AI capabilities', '200+ community tools'], color: 'from-green-400 to-green-600' }
    ]
  },
  {
    id: 'quick-wins',
    title: '90-Day Quick Wins',
    type: 'quick-wins',
    wins: [
      { title: 'Unified CRM Search', icon: <Database className="w-6 h-6" /> },
      { title: 'Smart Filters', icon: <Search className="w-6 h-6" /> },
      { title: 'Enact Tool Hub', icon: <GitBranch className="w-6 h-6" /> },
      { title: 'Export Features', icon: <FileText className="w-6 h-6" /> },
      { title: 'Analytics Dashboard', icon: <Activity className="w-6 h-6" /> }
    ]
  },
  {
    id: 'education-strategy',
    title: 'Team Enablement Journey',
    type: 'education',
    modules: [
      { title: 'Foundation', desc: 'Understanding AI-powered search', duration: '2 hours', level: 'Beginner', color: 'from-blue-400 to-blue-600' },
      { title: 'Practical Skills', desc: 'Hands-on search techniques', duration: '3 hours', level: 'Intermediate', color: 'from-purple-400 to-purple-600' },
      { title: 'Advanced Features', desc: 'Power user capabilities', duration: '2 hours', level: 'Advanced', color: 'from-pink-400 to-pink-600' }
    ]
  },
  {
    id: 'training-materials',
    title: 'Training Arsenal',
    type: 'training',
    materials: [
      { type: 'Visual Guide', desc: 'One-pager concept explanation', icon: <FileText className="w-8 h-8" /> },
      { type: 'Tutorials', desc: 'Step-by-step workflows', icon: <Workflow className="w-8 h-8" /> },
      { type: 'Quick Ref', desc: 'Common search patterns', icon: <Zap className="w-8 h-8" /> },
      { type: 'Videos', desc: 'Role-specific training', icon: <Users className="w-8 h-8" /> }
    ]
  },
  {
    id: 'adoption-strategy',
    title: 'Driving Organizational Change',
    type: 'adoption',
    strategies: [
      { title: 'Champion Program', desc: 'Identify and empower super-users', progress: 85 },
      { title: 'Workflow Integration', desc: 'Embed in daily operations', progress: 75 },
      { title: 'Continuous Support', desc: 'Weekly office hours & help', progress: 90 },
      { title: 'Feedback Loop', desc: 'Iterate based on user input', progress: 80 }
    ]
  }
  // Add more slides as needed...
];
