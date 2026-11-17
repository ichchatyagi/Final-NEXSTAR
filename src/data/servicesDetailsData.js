// Service Details Database
// Maps each of the 10 core enterprise services to its full suite of categories, images, and specific deliverables.

import socialMediaImg from '../assets/services/socialmedia.png';
import b2bMarketingImg from '../assets/services/B2B Marketing Campaigns.png';
import searchMarketingImg from '../assets/services/Search Marketing Strategy.png';
import socialMediaAdsImg from '../assets/services/Social Media Advertising.png';
import leadGenImg from '../assets/services/Lead Generation & Growth Marketing.png';

import brandingImg from '../assets/services/Creative & Branding Solutions.png';
import graphicDesignImg from '../assets/branding_banner.png';
import videoProductionImg from '../assets/services/Cinematic Video Production.png';
import motionGraphicsImg from '../assets/insights/Using Simple Animations to Keep Visitors Engaged.png';
import reputationImg from '../assets/services/Online Reputation Management.png';

import webDevImg from '../assets/services/Website Development.png';
import ecommerceImg from '../assets/services/E-commerce Development.png';
import mobileAppImg from '../assets/services/Mobile App Engineering.png';
import crmDevImg from '../assets/insights/Connecting AI Chatbots to Your CRM System.png';
import lmsDevImg from '../assets/insights/Connecting Design Systems to Developer Code Libraries.png';
import erpDevImg from '../assets/services/ERP Development.png';
import hrmsImg from '../assets/services/HRMS & Employee Management Systems.png';
import saasDevImg from '../assets/services/SaaS Application Development.png';
import customWebImg from '../assets/services/Custom Software Development.png';
import webSupportImg from '../assets/insights/Lightweight Styling to Improve Site Performance.png';

import arImg from '../assets/services/Augmented Reality Systems.png';
import techSolutionsImg from '../assets/services/Web & Tech Solutions.png';
import databaseImg from '../assets/services/Database & Data Science.png';
import productEngImg from '../assets/services/Bespoke Product Engineering.png';
import biAnalyticsImg from '../assets/services/Business Intelligence & Analytics.png';

import aiChatbotImg from '../assets/insights/Connecting AI Chatbots to Your CRM System.png';
import crmAutomationImg from '../assets/services/CRM Automation.png';
import aiSupportImg from '../assets/services/AI-Powered Customer Support.png';
import workflowImg from '../assets/services/Workflow Automation.png';
import aiIntegrationImg from '../assets/services/Cybersecurity & AI Dev.png';
import aiAgentsImg from '../assets/services/AI Agents & Intelligent Assistants.png';
import aiVoiceImg from '../assets/insights/Saving Time and Money with AI Lead Filters.png';

import managedItImg from '../assets/services/Managed IT & Tech Services.png';
import cybersecurityImg from '../assets/services/Cybersecurity & AI Dev.png';
import cloudInfraImg from '../assets/services/Cloud & Hosting Services.png';
import cloudHostingImg from '../assets/host.png';
import backupRecoveryImg from '../assets/insights/Using CDN Edge Servers to Speed Up Page Load.png';
import sslSecurityImg from '../assets/services/Secure Domain Booking.png';

import emailCalendarImg from '../assets/insights/Clean Visual Identity for Premium Brands.png';
import dataEntryImg from '../assets/insights/Tracking Your Marketing Success Across Channels.png';
import customerSupportImg from '../assets/insights/How Video Ad Auctions Determine Your Prices.png';
import appointmentImg from '../assets/insights/Faster Video Production Workflows for Social Media.png';
import adminAssistantImg from '../assets/services/Administrative Assistance.png';
import leadCrmImg from '../assets/services/Lead & CRM Management.png';

import quickbooksImg from '../assets/services/zoho.png';
import bookkeepingImg from '../assets/services/Bookkeeping.png';
import invoiceMgmtImg from '../assets/insights/Tagging Conversion Events Without Using Cookies.png';
import accountsPayableImg from '../assets/services/Accounts Payable.png';
import accountsReceivableImg from '../assets/insights/Reaching the Right Customer Groups with Programmatic Ads.png';
import payrollImg from '../assets/services/Payroll Administration.png';
import financialReportingImg from '../assets/services/Financial Reporting.png';
import recurringBookkeepingImg from '../assets/services/Recurring Bookkeeping Services.png';

import programmaticImg from '../assets/services/Media & Programmatic Broadcast.png';
import mediaPlanningImg from '../assets/services/Media Planning & Buying.png';
import digitalBroadcastImg from '../assets/insights/How to Advertise on Connected Smart TV Screens.png';
import adInventoryImg from '../assets/services/Advertising Inventory Management.png';
import campaignAnalyticsImg from '../assets/insights/Tracking Your Marketing Success Across Channels.png';

import zohoCrmImg from '../assets/services/zoho.png';
import zohoBooksImg from '../assets/home services/Zoho Suite.png';
import zohoOneImg from '../assets/services/Zoho One.png';
import zohoCreatorImg from '../assets/services/Zoho Creator.png';
import zohoDeskImg from '../assets/insights/Connecting AI Chatbots to Your CRM System.png';
import zohoIntegrationImg from '../assets/services/Zoho Integration & Automation.png';
import domainBookingImg from '../assets/services/Secure Domain Booking.png';
import dnsManagementImg from '../assets/host.png';
import sslDigitalSecurityImg from '../assets/services/Cybersecurity & AI Dev.png';

export const servicesDetailsData = {
  'digital-marketing': {
    id: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing & Growth',
    category: 'Marketing & Media',
    headline: 'Algorithmic Acquisition, Organic Dominance, and Sustainable Scale',
    description: 'We engineer standard-compliant multi-channel growth systems that turn search queries and social networks into high-value corporate revenue pipelines.',
    heroMetric: { value: '2.4x', label: 'Average ROAS Scaling' },
    subServices: [
      {
        id: 'social-media-management',
        title: 'Social Media Management',
        tagline: 'Executive Thought Leadership & Cohesive Brand Presence',
        image: socialMediaImg,
        desc: 'Strategic organic social media governance engineered to establish executive brand authority, capture audience mindshare, and cultivate high-intent corporate customer relationships.',
        whatWeProvide: [
          'Monthly editorial content calendars aligned with corporate brand guidelines',
          'High-fidelity graphic design, vector infographics, and short-form video production',
          'Active daily community engagement, dialogue moderation, and executive profile stewardship',
          'Audience demographic audits, competitor share-of-voice tracking, and sentiment analytics',
          'Multi-tier stakeholder approval workflows and crisis response governance'
        ],
        tools: ['LinkedIn Enterprise', 'Sprout Social', 'Figma', 'Hootsuite'],
        impact: '+140% Qualified Audience Reach'
      },
      {
        id: 'b2b-marketing-campaigns',
        title: 'B2B Marketing Campaigns',
        tagline: 'Account-Based Marketing & Enterprise Pipeline Acceleration',
        image: b2bMarketingImg,
        desc: 'Precision B2B campaign architectures designed to target institutional buying committees, shorten sales cycles, and generate enterprise-grade sales pipeline.',
        whatWeProvide: [
          'Account-Based Marketing (ABM) blueprints targeting high-value institutional prospects',
          'Multi-touch nurturing sequences across email, syndication networks, and digital platforms',
          'Authoritative whitepaper, industry benchmark report, and case study development',
          'CRM pipeline integration with automated lead scoring and SDR routing logic',
          'Closed-loop multi-touch attribution modeling to quantify ROI across all touchpoints'
        ],
        tools: ['HubSpot Enterprise', 'Salesforce CRM', 'Apollo.io', 'Clay'],
        impact: '3.2x Lead-to-Opportunity Quality'
      },
      {
        id: 'search-marketing-strategy',
        title: 'Search Marketing Strategy',
        tagline: 'Technical SEO & Generative AI Search Engine Optimization',
        image: searchMarketingImg,
        desc: 'Algorithmic search dominance built on mathematical Core Web Vitals compliance, semantic keyword clusters, and Generative Engine Optimization (GEO) for AI search engines.',
        whatWeProvide: [
          'Deep technical website audits, crawl budget optimization, and indexation hygiene',
          'Semantic keyword mapping for transactional, commercial, and high-intent queries',
          'JSON-LD Schema.org structured data deployment for Google rich snippet dominance',
          'Digital PR backlink acquisition from recognized industry journals and high-DA publications',
          'Generative Engine Optimization (GEO) ensuring inclusion in ChatGPT, Gemini, and Perplexity answers'
        ],
        tools: ['Google Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog'],
        impact: '#1 Rankings in Core Niches'
      },
      {
        id: 'social-media-advertising',
        title: 'Social Media Advertising',
        tagline: 'Performance-Driven Paid Acquisition with Precision Unit Economics',
        image: socialMediaAdsImg,
        desc: 'High-conversion paid campaigns across LinkedIn, Meta, and X optimized against strict Customer Acquisition Cost (CAC) and Lifetime Value (LTV) models.',
        whatWeProvide: [
          'Hyper-targeted audience architecture leveraging job roles, seniority, and intent data',
          'High-velocity creative iteration including motion graphics, testimonial reels, and static hooks',
          'Rigorous A/B testing frameworks across copy hooks, angles, and landing pages',
          'Server-side Conversion API (CAPI) tracking for flawless attribution in cookie-less environments',
          'Continuous algorithmic bid optimization and budget pacing for maximum capital efficiency'
        ],
        tools: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'X Ads', 'Triple Whale'],
        impact: '35% Reduction in Blended CAC'
      },
      {
        id: 'lead-generation-growth-marketing',
        title: 'Lead Generation & Growth Marketing',
        tagline: 'Conversion Funnel Engineering & Scalable User Acquisition',
        image: leadGenImg,
        desc: 'Comprehensive growth architecture combining Conversion Rate Optimization (CRO), interactive assessment tools, and automated onboarding funnels to maximize pipeline scale.',
        whatWeProvide: [
          'Conversion Rate Optimization (CRO) with interactive heatmaps and user flow refactoring',
          'Interactive lead capture tools (ROI calculators, maturity assessments, gated assets)',
          'Automated behavioral drip campaigns, SMS notifications, and instant WhatsApp touchpoints',
          'Predictive Customer Lifetime Value (CLV) modeling and retention framework blueprints',
          'Bi-weekly agile growth sprint reporting with transparent revenue attribution logs'
        ],
        tools: ['Hotjar', 'VWO', 'Klaviyo', 'Mixpanel'],
        impact: '+68% Conversion Rate Lift'
      }
    ]
  },

  'creative-branding': {
    id: 'creative-branding',
    number: '02',
    title: 'Creative, Branding & Media',
    category: 'Marketing & Media',
    headline: 'Architect an Elite Visual Identity That Commands Immediate Trust',
    description: 'Exquisite vector design systems, mathematical typography standards, cinematic commercial shoots, and digital brand perception governance.',
    heroMetric: { value: '100%', label: 'Visual Coherence' },
    subServices: [
      {
        id: 'creative-branding-solutions',
        title: 'Creative & Branding Solutions',
        tagline: 'Brand Blueprint Systems & Vector Identity Architecture',
        image: brandingImg,
        desc: 'Complete brand blueprint development establishing mathematical logo grids, bespoke color parameters, and comprehensive brand books for global consistency.',
        whatWeProvide: [
          'Vector logotype construction with mathematical geometric grid systems',
          'Complete brand architecture books defining typography hierarchy and clear-space rules',
          'Executive corporate stationery, presentation slide decks, and digital media guidelines',
          'Color palette formulations optimized for digital screens and physical print'
        ],
        tools: ['Figma', 'Adobe Illustrator', 'InDesign'],
        impact: 'Standard-Compliant Visual Voice'
      },
      {
        id: 'graphic-design-creative-production',
        title: 'Graphic Design & Creative Production',
        tagline: 'High-Impact Digital & Print Assets',
        image: graphicDesignImg,
        desc: 'Rapid production of production-grade marketing collateral, annual reports, pitch decks, and digital advertising visuals built to institutional standards.',
        whatWeProvide: [
          'Enterprise pitch deck and investor presentation designs with custom vector graphics',
          'Marketing campaign collateral across web, display banners, billboards, and brochures',
          'UI/UX asset libraries and iconography sets tailored for custom software interfaces',
          'Full-scale event, exhibition booth, and conference branding suites'
        ],
        tools: ['Adobe Photoshop', 'Figma', 'Illustrator'],
        impact: 'Institutional Creative Quality'
      },
      {
        id: 'cinematic-video-production',
        title: 'Cinematic Video Production',
        tagline: 'Commercial Shoots & Executive Video Storytelling',
        image: videoProductionImg,
        desc: 'Hollywood-grade 4K/6K commercial video production capturing corporate case studies, product demonstrations, and brand anthems.',
        whatWeProvide: [
          'Pre-production concept scripting, storyboarding, and location scouting',
          'Full cinema-grade film crew, lighting, audio capture, and drone videography',
          'Post-production editorial, color grading, sound design, and custom score integration',
          'Multi-format export optimization for web, digital broadcast, and social channels'
        ],
        tools: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects'],
        impact: '10x Engagement over Static Media'
      },
      {
        id: 'motion-graphics-animation',
        title: 'Motion Graphics & Animation',
        tagline: 'Dynamic Visual Systems & Explainer Animations',
        image: motionGraphicsImg,
        desc: 'Seamless 2D/3D motion graphics and UI product walkthroughs that translate complex engineering architectures into captivating visual narratives.',
        whatWeProvide: [
          '2D and 3D architectural software product demos and feature breakdown animations',
          'Animated logo stings, broadcast title sequences, and digital display assets',
          'Lottie and SVG web-ready animations with lightweight zero-lag frontend payloads',
          'Social media video hooks and kinetic typography sequences'
        ],
        tools: ['After Effects', 'Cinema 4D', 'Blender', 'Lottie'],
        impact: 'High-Retention Visual Storytelling'
      },
      {
        id: 'online-reputation-management',
        title: 'Online Reputation Management',
        tagline: 'Brand Perception Defense & Review Governance',
        image: reputationImg,
        desc: 'Proactive digital sentiment surveillance, review platform optimization, and PR crisis defense to secure institutional brand trust.',
        whatWeProvide: [
          '24/7 web-wide sentiment monitoring and search results sentiment tracking',
          'Platform review score remediation across Google, Trustpilot, Glassdoor, and G2',
          'Executive profile defense suppressing negative algorithmic anomalies',
          'Proactive positive review acquisition workflows integrated with customer support'
        ],
        tools: ['Brandwatch', 'Mention', 'Trustpilot Enterprise', 'Google Alerts'],
        impact: '4.8+ Verified Average Rating'
      }
    ]
  },

  'website-software-development': {
    id: 'website-software-development',
    number: '03',
    title: 'Website & Software Development',
    category: 'Engineering & Tech',
    headline: 'Enterprise Web Applications, Native Platforms, and Resilient Software',
    description: 'High-performance web architecture, modern frontend frameworks, cloud-native backends, and full-lifecycle software engineering.',
    heroMetric: { value: '99.9%', label: 'Uptime & Reliability' },
    subServices: [
      {
        id: 'website-development',
        title: 'Website Development',
        tagline: 'High-Performance Modern Web Platforms',
        image: webDevImg,
        desc: 'Full-stack web engineering built on React, Next.js, and modern headless CMS systems delivering sub-second load times and flawless mobile experiences.',
        whatWeProvide: [
          'Custom Next.js & React frontend development with optimized Core Web Vitals',
          'Headless CMS integration (Sanity, Strapi, WordPress Headless) for easy content management',
          'Edge caching, CDN routing, and modern serverless backend deployment',
          'Full responsive design ensuring pixel-perfect fidelity across mobile, tablet, and desktop'
        ],
        tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        impact: 'Sub-Second Page Load Times'
      },
      {
        id: 'ecommerce-development',
        title: 'E-commerce Development',
        tagline: 'Scalable Online Stores & Headless Checkout Solutions',
        image: ecommerceImg,
        desc: 'Enterprise e-commerce stores on Shopify Plus, WooCommerce, and custom headless stacks designed for high transaction volume and seamless checkout.',
        whatWeProvide: [
          'Bespoke Shopify Plus and custom headless commerce storefront architectures',
          'Multi-currency, international tax compliance, and automated shipping integrations',
          'Custom checkout flow optimization to minimize cart abandonment',
          'ERP, inventory sync, and warehouse management system (WMS) webhooks'
        ],
        tools: ['Shopify Plus', 'Stripe', 'WooCommerce', 'Hydrogen'],
        impact: '+42% Average Order Value'
      },
      {
        id: 'mobile-application-development',
        title: 'Mobile Application Development',
        tagline: 'iOS & Android Native and Cross-Platform Apps',
        image: mobileAppImg,
        desc: 'Native iOS (Swift), Android (Kotlin), and React Native cross-platform applications engineered for intuitive UX, offline capability, and high performance.',
        whatWeProvide: [
          'React Native & Flutter cross-platform architecture for unified codebases',
          'Native iOS & Android development with deep hardware sensor integration',
          'Push notification pipelines, in-app purchases, and biometrics authentication',
          'App Store & Google Play deployment, compliance approvals, and ongoing updates'
        ],
        tools: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        impact: 'Seamless Mobile Experiences'
      },
      {
        id: 'crm-software-development',
        title: 'CRM Software Development',
        tagline: 'Tailored Customer Relationship Platforms',
        image: crmDevImg,
        desc: 'Custom-built CRM platforms that map directly to your organization’s unique sales stages, client management hierarchies, and reporting pipelines.',
        whatWeProvide: [
          'Bespoke customer data models and deal stage tracking dashboards',
          'Role-based access permissions, team hierarchies, and audit logging',
          'Automated lead intake from web forms, telephony, and email channels',
          'Executive forecasting telemetry and real-time revenue projection views'
        ],
        tools: ['Node.js', 'PostgreSQL', 'GraphQL', 'React'],
        impact: '100% Tailored Operational Flow'
      },
      {
        id: 'lms-development',
        title: 'LMS Development',
        tagline: 'Learning Management Systems & Educational Portals',
        image: lmsDevImg,
        desc: 'Interactive enterprise Learning Management Systems supporting video courses, progress tracking, testing modules, and certification generation.',
        whatWeProvide: [
          'SCORM-compliant course management, video streaming, and document libraries',
          'Interactive quizzes, graded assessments, and automated certificate generation',
          'Student progress tracking, engagement analytics, and completion rate reporting',
          'Subscription billing and corporate seat licensing management'
        ],
        tools: ['Next.js', 'Moodle Engine', 'AWS S3', 'Stripe Billing'],
        impact: 'High-Retention Corporate Learning'
      },
      {
        id: 'erp-development',
        title: 'ERP Development',
        tagline: 'Centralized Enterprise Resource Planning',
        image: erpDevImg,
        desc: 'Comprehensive ERP systems synchronizing inventory, procurement, supply chain, and human resources into a single unified operational dashboard.',
        whatWeProvide: [
          'Multi-location inventory tracking, purchase order flows, and supplier records',
          'Automated cost calculations, ledger reconciliation, and tax tracking',
          'Custom executive dashboards aggregating cross-departmental operations',
          'Secure database clustering with high-availability failover architectures'
        ],
        tools: ['Python', 'PostgreSQL', 'Docker', 'Redis'],
        impact: 'Unified Enterprise Operations'
      },
      {
        id: 'hrms-employee-management-systems',
        title: 'HRMS & Employee Management Systems',
        tagline: 'Digital Workforce & Human Resources Infrastructure',
        image: hrmsImg,
        desc: 'Modern HR platforms managing payroll, leave approvals, employee onboarding, performance appraisals, and internal compliance documentation.',
        whatWeProvide: [
          'Self-service employee portals for leave requests, payslips, and tax forms',
          'Automated payroll calculation with direct bank deposit integrations',
          'Performance review cycles, OKR tracking, and feedback collection',
          'Encrypted digital document vaults for employee contracts and compliance'
        ],
        tools: ['React', 'Node.js', 'MongoDB', 'AWS Cognito'],
        impact: 'Frictionless People Operations'
      },
      {
        id: 'saas-custom-software-development',
        title: 'SaaS & Custom Software Development',
        tagline: 'Scalable Cloud Software & Multi-Tenant Platforms',
        image: saasDevImg,
        desc: 'End-to-end engineering of proprietary SaaS products with multi-tenant data isolation, subscription tiers, and API-first designs.',
        whatWeProvide: [
          'Multi-tenant cloud architecture with complete data segregation',
          'Automated recurring billing, seat pricing, and usage metering integration',
          'Comprehensive REST and GraphQL API endpoints for external integrations',
          'CI/CD deployment pipelines, automated test suites, and zero-downtime releases'
        ],
        tools: ['TypeScript', 'FastAPI', 'Kubernetes', 'Stripe'],
        impact: 'Built for Global Software Scale'
      },
      {
        id: 'custom-web-applications-portals',
        title: 'Custom Web Applications & Portals',
        tagline: 'Client & Partner Extranet Systems',
        image: customWebImg,
        desc: 'Secure authenticated web portals allowing customers, vendors, and partners to collaborate, manage orders, and access private business documents.',
        whatWeProvide: [
          'Secure single sign-on (SSO), multi-factor authentication (MFA), and role RBAC',
          'Private document exchange, invoice downloads, and digital signature collection',
          'Real-time status tracking for customer projects, tickets, and service requests',
          'Clean white-labeled UI styled precisely to corporate branding'
        ],
        tools: ['React', 'Next.js', 'Supabase', 'Tailwind'],
        impact: 'Seamless Stakeholder Collaboration'
      },
      {
        id: 'website-maintenance-support',
        title: 'Website Maintenance & Support',
        tagline: '24/7 SLA Uptime & Security Management',
        image: webSupportImg,
        desc: 'Dedicated ongoing engineering support ensuring zero downtime, continuous security patches, CMS updates, and rapid feature iteration.',
        whatWeProvide: [
          '24/7 server and uptime telemetry monitoring with automated emergency alerts',
          'Weekly core and plugin security patches, vulnerability testing, and backups',
          'Page speed optimization and ongoing Core Web Vitals maintenance',
          'Dedicated monthly engineering hours for feature enhancements and layout updates'
        ],
        tools: ['UptimeRobot', 'Cloudflare', 'GitHub Actions', 'Datadog'],
        impact: 'Zero Downtime Assurance'
      }
    ]
  },

  'advanced-tech-engineering': {
    id: 'advanced-tech-engineering',
    number: '04',
    title: 'Advanced Technology & Engineering',
    category: 'Engineering & Tech',
    headline: 'Next-Generation Augmented Reality, Distributed Systems, and Big Data',
    description: 'Bespoke algorithmic product engineering, browser-based AR experiences, distributed data modeling, and executive intelligence telemetry.',
    heroMetric: { value: '10x', label: 'Processing Velocity' },
    subServices: [
      {
        id: 'augmented-reality-systems',
        title: 'Augmented Reality Systems',
        tagline: 'WebAR & Interactive Spatial Experiences',
        image: arImg,
        desc: 'Browser-based WebAR and mobile spatial computing solutions allowing customers to visualize 3D products in real-world environments without app downloads.',
        whatWeProvide: [
          'WebAR product visualization for e-commerce and retail product configurators',
          '3D model optimization for rapid mobile rendering with realistic lighting',
          'Marker-based and plane-detection spatial web applications',
          'Interactive AR exhibition and trade-show kiosk software'
        ],
        tools: ['Three.js', 'WebXR', 'Unity', 'Blender'],
        impact: 'Immersive Product Engagement'
      },
      {
        id: 'web-technology-solutions',
        title: 'Web & Technology Solutions',
        tagline: 'Modern Technical Architecture Consulting',
        image: techSolutionsImg,
        desc: 'Strategic technology stack selection, microservices migration, and edge computing infrastructure tailored for resilient enterprise scalability.',
        whatWeProvide: [
          'Enterprise technical architecture blueprints and technology audits',
          'Monolith to microservices decoupling strategies and implementation',
          'Serverless computing and edge middleware deployment for low-latency tasks',
          'Legacy system modernization and data migration planning'
        ],
        tools: ['Docker', 'AWS Lambda', 'Cloudflare Workers', 'GraphQL'],
        impact: 'Future-Proof Tech Foundations'
      },
      {
        id: 'database-data-science',
        title: 'Database & Data Science',
        tagline: 'High-Volume Data Pipelines & Predictive Analytics',
        image: databaseImg,
        desc: 'High-throughput database clustering, ETL pipeline construction, and machine learning models designed to extract actionable intelligence from corporate data.',
        whatWeProvide: [
          'High-availability database sharding and replication (PostgreSQL, MongoDB, ClickHouse)',
          'Automated ETL/ELT pipelines syncing disparate business data into modern data warehouses',
          'Predictive machine learning algorithms for demand forecasting and churn prevention',
          'Data sanitization, governance frameworks, and GDPR/CCPA compliance verification'
        ],
        tools: ['PostgreSQL', 'Snowflake', 'Python', 'Apache Kafka'],
        impact: 'Real-Time Data-Driven Decisions'
      },
      {
        id: 'bespoke-product-engineering',
        title: 'Bespoke Product Engineering',
        tagline: 'End-to-End Proprietary Software Creation',
        image: productEngImg,
        desc: 'Custom hardware-software integration, IoT dashboards, and algorithmic product engineering built from the ground up to solve complex problems.',
        whatWeProvide: [
          'Full-cycle product design from concept validation to architectural specification',
          'Custom algorithmic development for niche industry calculations and workflows',
          'IoT device connectivity, telemetry dashboards, and real-time socket feeds',
          'Comprehensive technical documentation, API specs, and IP ownership handover'
        ],
        tools: ['Rust', 'Go', 'WebSockets', 'Python'],
        impact: 'Defensible Proprietary IP'
      },
      {
        id: 'business-intelligence-analytics',
        title: 'Business Intelligence & Analytics',
        tagline: 'Executive Dashboards & Financial Telemetry',
        image: biAnalyticsImg,
        desc: 'Consolidated executive BI dashboards connecting sales, marketing, operations, and finance into real-time visual telemetry.',
        whatWeProvide: [
          'Power BI and Tableau executive dashboard architectures',
          'Automated data ingestion from ERP, CRM, and ad platforms into single dashboards',
          'Custom KPI tracking, variance alerts, and weekly automated executive digests',
          'Cohort analysis, customer acquisition cost tracking, and revenue attribution'
        ],
        tools: ['Power BI', 'Tableau', 'Looker', 'SQL'],
        impact: 'Instant Executive Clarity'
      }
    ]
  },

  'ai-business-automation': {
    id: 'ai-business-automation',
    number: '05',
    title: 'AI & Business Automation',
    category: 'AI & Automation',
    headline: 'Autonomous Multi-Agent Workflows, Neural Chatbots, and Voice Automation',
    description: 'Empower your enterprise with autonomous AI agents, intelligent customer support pipelines, automated CRM syncing, and voice communication systems.',
    heroMetric: { value: '80%', label: 'Routine Tasks Automated' },
    subServices: [
      {
        id: 'ai-chatbot-development',
        title: 'AI Chatbot Development',
        tagline: 'Neural RAG-Powered Conversational Assistants',
        image: aiChatbotImg,
        desc: 'Custom Retrieval-Augmented Generation (RAG) chatbots trained on your internal company knowledge base to deliver instant, accurate responses to customer queries.',
        whatWeProvide: [
          'Private LLM fine-tuning and vector database search against company docs',
          'Multi-channel deployment across website, WhatsApp, Slack, and Microsoft Teams',
          'Seamless human handoff protocols when complex escalations occur',
          'Continuous accuracy auditing and conversation sentiment analytics'
        ],
        tools: ['LangChain', 'Pinecone', 'OpenAI API', 'Anthropic API'],
        impact: '24/7 Instant Accurate Answers'
      },
      {
        id: 'crm-automation',
        title: 'CRM Automation',
        tagline: 'Hands-Free Pipeline & Contact Synchronization',
        image: crmAutomationImg,
        desc: 'Automate lead entry, meeting notes transcription, deal stage progression, and follow-up emails across Salesforce, HubSpot, and Zoho.',
        whatWeProvide: [
          'Automated lead qualification and enrichment using AI data scrapers',
          'Auto-creation of deals, tasks, and follow-up reminders based on customer activity',
          'Meeting transcript summarization and direct action-item logging to CRM deals',
          'Bi-directional sync between sales pipelines and billing/accounting systems'
        ],
        tools: ['Make.com', 'Zapier Enterprise', 'HubSpot', 'Salesforce'],
        impact: 'Save 15+ Hours Per Rep/Week'
      },
      {
        id: 'ai-powered-customer-support',
        title: 'AI-Powered Customer Support',
        tagline: 'Tier-1 Ticket Deflection & Instant Resolutions',
        image: aiSupportImg,
        desc: 'Deploy AI agents capable of resolving routine tickets, processing refund requests, and routing complex queries to the correct human agents.',
        whatWeProvide: [
          'Integration with Zendesk, Freshdesk, and Zoho Desk ticket streams',
          'Automated categorization, priority tagging, and sentiment analysis',
          'AI-drafted reply suggestions for human agents to review and approve',
          'Zero-touch resolution of common tier-1 requests (password resets, order status)'
        ],
        tools: ['Zendesk AI', 'Freshdesk', 'Intercom Fin', 'Custom RAG'],
        impact: '60% Ticket Deflection Rate'
      },
      {
        id: 'workflow-automation',
        title: 'Workflow Automation',
        tagline: 'Cross-Departmental Robotic Process Automation',
        image: workflowImg,
        desc: 'Eliminate manual data copying, spreadsheet management, and repetitive tasks with reliable webhook and API automation pipelines.',
        whatWeProvide: [
          'End-to-end audit of repetitive departmental workflows and bottleneck analysis',
          'Custom multi-step automation scripts connecting marketing, sales, and operations',
          'Automated PDF report generation, contract creation, and electronic signing flows',
          'Error-handling logic and fail-safe alerts to prevent broken processes'
        ],
        tools: ['Make', 'n8n', 'Python', 'Zapier'],
        impact: 'Zero Data-Entry Errors'
      },
      {
        id: 'ai-integration-with-existing-software',
        title: 'AI Integration with Existing Software',
        tagline: 'Supercharge Legacy Systems with AI Capabilities',
        image: aiIntegrationImg,
        desc: 'Embed cutting-edge machine learning and natural language processing directly into your legacy software and enterprise databases.',
        whatWeProvide: [
          'Secure API gateway implementation connecting legacy tools to modern AI models',
          'Document parsing and automated data extraction from PDFs, invoices, and contracts',
          'Predictive recommendations and automated search indexing embedded in your software',
          'Strict enterprise data privacy guarantees preventing model training on your data'
        ],
        tools: ['FastAPI', 'Azure OpenAI', 'AWS Bedrock', 'Docker'],
        impact: 'Modern AI Inside Existing Tools'
      },
      {
        id: 'ai-agents-intelligent-assistants',
        title: 'AI Agents & Intelligent Assistants',
        tagline: 'Autonomous Multi-Agent Task Orchestration',
        image: aiAgentsImg,
        desc: 'Autonomous software agents that plan, execute research, write code, manage files, and complete multi-step complex tasks independently.',
        whatWeProvide: [
          'Custom autonomous agent architectures tailored for specific roles (research, data audit, QA)',
          'Multi-agent collaborative workflows with oversight and verification checkpoints',
          'Tool-calling capabilities allowing agents to query databases, call APIs, and edit documents',
          'Executive dashboard to monitor agent runs, token costs, and outputs'
        ],
        tools: ['CrewAI', 'AutoGen', 'LangGraph', 'Python'],
        impact: 'Autonomous Operations Scale'
      },
      {
        id: 'ai-voice-communication-automation',
        title: 'AI Voice & Communication Automation',
        tagline: 'Ultra-Realistic Conversational Voice Bots',
        image: aiVoiceImg,
        desc: 'Human-sounding AI voice agents capable of conducting outbound appointment confirmations, qualifying inbound callers, and taking telephone messages.',
        whatWeProvide: [
          'Low-latency voice models with natural inflection, tone, and pacing',
          'Telephony integration with Twilio, SIP trunks, and corporate phone systems',
          'Automated caller intent detection, appointment scheduling, and CRM syncing',
          'Detailed call transcripts, audio recordings, and sentiment scorecards'
        ],
        tools: ['Twilio', 'ElevenLabs', 'Vapi', 'Deepgram'],
        impact: 'Instant Phone Answering at Scale'
      }
    ]
  },

  'it-infrastructure-cybersecurity': {
    id: 'it-infrastructure-cybersecurity',
    number: '06',
    title: 'IT Infrastructure & Cybersecurity',
    category: 'Operations & Security',
    headline: 'Zero-Trust Defense, Cloud Infrastructure, and 99.99% Operational Assurance',
    description: 'Continuous SRE monitoring, zero-trust cloud network defense, multi-region failover architecture, and enterprise cybersecurity audits.',
    heroMetric: { value: '99.99%', label: 'Infrastructure Uptime' },
    subServices: [
      {
        id: 'managed-it-tech-services',
        title: 'Managed IT & Tech Services',
        tagline: 'Full-Scope Enterprise IT Administration',
        image: managedItImg,
        desc: 'Proactive management of workstation hardware, corporate networks, software licensing, and technical support helpdesks.',
        whatWeProvide: [
          '24/7 IT helpdesk support for employee hardware, software, and access issues',
          'Centralized device management (MDM) for Windows, macOS, and mobile devices',
          'Network setup, Wi-Fi configuration, firewall management, and VPN maintenance',
          'Software license management, procurement, and onboarding/offboarding workflows'
        ],
        tools: ['Jamf', 'Microsoft Intune', 'JumpCloud', 'Cisco Meraki'],
        impact: 'Seamless Workforce Productivity'
      },
      {
        id: 'cybersecurity-services',
        title: 'Cybersecurity Services',
        tagline: 'Penetration Testing & Zero-Trust Defense',
        image: cybersecurityImg,
        desc: 'Comprehensive threat modeling, vulnerability assessments, penetration testing, and zero-trust security architecture to protect critical assets.',
        whatWeProvide: [
          'External and internal penetration testing to expose security vulnerabilities',
          'Multi-factor authentication (MFA) and zero-trust network access (ZTNA) implementation',
          'Employee phishing simulation tests and cybersecurity awareness training',
          'Security compliance readiness audits (SOC 2, ISO 27001, HIPAA)'
        ],
        tools: ['CrowdStrike', 'Qualys', 'Cloudflare Zero Trust', 'Wireshark'],
        impact: 'Fortified Enterprise Defense'
      },
      {
        id: 'cloud-infrastructure-management',
        title: 'Cloud Infrastructure Management',
        tagline: 'AWS, Azure & Google Cloud Optimization',
        image: cloudInfraImg,
        desc: 'Architect, deploy, and optimize scalable cloud environments with Infrastructure-as-Code (Terraform) and automated cost controls.',
        whatWeProvide: [
          'Terraform Infrastructure-as-Code (IaC) templates for automated environment provisioning',
          'Cloud architecture refactoring for high availability, auto-scaling, and resilience',
          'Cloud cost governance (FinOps) reducing wasted cloud spend by up to 30%',
          'Multi-cloud management across AWS, Google Cloud, and Microsoft Azure'
        ],
        tools: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes'],
        impact: 'Optimized Cloud Spend & Stability'
      },
      {
        id: 'cloud-hosting-services',
        title: 'Cloud Hosting Services',
        tagline: 'High-Speed Managed Server Infrastructure',
        image: cloudHostingImg,
        desc: 'Dedicated high-performance cloud server hosting with NVMe storage, CDN edge caching, and automated resource scaling.',
        whatWeProvide: [
          'High-speed cloud servers with isolated computing resources and NVMe storage',
          'Global CDN edge network routing traffic to the closest server location',
          'DDoS protection and automated traffic scrubbing against volumetric attacks',
          'Automated daily offsite backups with one-click restore functionality'
        ],
        tools: ['Cloudflare Enterprise', 'DigitalOcean', 'Vultr', 'cPanel'],
        impact: 'Fast, Secure, Always-Online Hosting'
      },
      {
        id: 'backup-disaster-recovery',
        title: 'Backup & Disaster Recovery',
        tagline: 'RTO & RPO Business Continuity Protection',
        image: backupRecoveryImg,
        desc: 'Guaranteed business continuity with automated immutable backups, multi-region database failover, and disaster recovery testing.',
        whatWeProvide: [
          'Immutable cloud backups protected against ransomware tampering',
          'Automated replication across geographically separated data centers',
          'RPO (Recovery Point Objective) and RTO (Recovery Time Objective) under 15 minutes',
          'Quarterly simulated disaster recovery drills and executive certification'
        ],
        tools: ['Veeam', 'AWS Backup', 'Acronis', 'Wasabi'],
        impact: '100% Data Preservation Assurance'
      },
      {
        id: 'ssl-website-security',
        title: 'SSL & Website Security',
        tagline: 'Web Application Firewall & Encryption Compliance',
        image: sslSecurityImg,
        desc: 'End-to-end TLS/SSL certificate lifecycle management, Web Application Firewall (WAF) tuning, and real-time malware scrubbing.',
        whatWeProvide: [
          'Enterprise wildcard and EV SSL certificate deployment with automated auto-renewal',
          'Web Application Firewall (WAF) rules blocking SQL injections, XSS, and bot scrapers',
          'Continuous automated malware scanning and automatic file integrity verification',
          'HSTS compliance and security header hardening (CSP, X-Frame-Options)'
        ],
        tools: ['Cloudflare WAF', 'Let\'s Encrypt', 'Sucuri', 'Qualys SSL Labs'],
        impact: 'Grade A+ Security Header Rating'
      }
    ]
  },

  'virtual-assistant-services': {
    id: 'virtual-assistant-services',
    number: '07',
    title: 'Virtual Assistant Services',
    category: 'Operations & Security',
    headline: 'Executive-Grade Operational Support and Dedicated Administrative Talent',
    description: 'Highly trained virtual executive assistants managing your calendar, inbox, research, CRM maintenance, and routine operations.',
    heroMetric: { value: '25+', label: 'Hours Saved Per Executive/Week' },
    subServices: [
      {
        id: 'email-calendar-management',
        title: 'Email & Calendar Management',
        tagline: 'Inbox Zero & Frictionless Executive Scheduling',
        image: emailCalendarImg,
        desc: 'Professional inbox triage, urgent message escalation, and scheduling coordination across multiple time zones.',
        whatWeProvide: [
          'Daily inbox triage categorizing critical messages, inquiries, and spam',
          'Executive calendar scheduling, meeting buffer coordination, and conflict resolution',
          'Meeting agenda preparation, attendee background briefings, and Zoom setup',
          'Polished email correspondence drafted in your exact executive tone'
        ],
        tools: ['Google Calendar', 'Outlook', 'Calendly', 'Superhuman'],
        impact: 'Guaranteed Inbox Zero Every Day'
      },
      {
        id: 'data-entry-online-research',
        title: 'Data Entry & Online Research',
        tagline: 'Accurate Market Intelligence & Database Hygiene',
        image: dataEntryImg,
        desc: 'Meticulous data gathering, competitor intelligence compilation, and database cleaning executed with 99.9% accuracy.',
        whatWeProvide: [
          'Targeted market research identifying prospect lists, pricing benchmarks, and vendor options',
          'Clean spreadsheet compilation, data normalization, and duplicate removal',
          'Web scraping and manual verification of contact details and business intelligence',
          'Ongoing CRM data entry keeping company records accurate and up-to-date'
        ],
        tools: ['Google Sheets', 'Excel', 'Airtable', 'Notion'],
        impact: '99.9% Data Accuracy Verified'
      },
      {
        id: 'customer-support-va',
        title: 'Customer Support',
        tagline: 'Front-Line Email, Chat & Ticket Assistance',
        image: customerSupportImg,
        desc: 'Dedicated customer service representatives handling live chat, email inquiries, order status lookups, and support tickets.',
        whatWeProvide: [
          'Rapid response email and live chat support during your target business hours',
          'Handling order tracking, returns, basic troubleshooting, and general inquiries',
          'Following tailored knowledge base standard operating procedures (SOPs)',
          'Clear escalation to internal team members when technical intervention is required'
        ],
        tools: ['Zendesk', 'Intercom', 'Gorgias', 'Freshdesk'],
        impact: '< 15 Min First Response Time'
      },
      {
        id: 'appointment-scheduling',
        title: 'Appointment Scheduling',
        tagline: 'Booking Flow Coordination & Attendance Confirmation',
        image: appointmentImg,
        desc: 'Seamless coordination of sales demos, client consultations, and partner meetings with automated calendar reminders.',
        whatWeProvide: [
          'Proactive scheduling of incoming sales leads and VIP client consultations',
          'Time zone coordination across international teams and external partners',
          'Pre-meeting reminder emails and confirmation calls to reduce no-show rates',
          'Rescheduling management and meeting link generation'
        ],
        tools: ['Calendly', 'Acuity', 'Google Meet', 'Zoom'],
        impact: '40% Reduction in Meeting No-Shows'
      },
      {
        id: 'administrative-assistance',
        title: 'Administrative Assistance',
        tagline: 'Travel Coordination, Document Prep & Back-Office Tasks',
        image: adminAssistantImg,
        desc: 'Comprehensive administrative assistance handling travel itineraries, expense tracking, digital filing, and team logistics.',
        whatWeProvide: [
          'Domestic and international travel itineraries, flight bookings, and hotel arrangements',
          'Expense receipt cataloging, monthly expense report preparation, and submission',
          'Document formatting, proofreading, presentation polishing, and PDF conversion',
          'Vendor coordination, office supply orders, and routine administrative errands'
        ],
        tools: ['Expensify', 'Google Docs', 'TripActions', 'Slack'],
        impact: 'Complete Operational Freedom'
      },
      {
        id: 'lead-crm-management-va',
        title: 'Lead & CRM Management',
        tagline: 'Contact Enrichment & Pipeline Hygiene',
        image: leadCrmImg,
        desc: 'Keep your sales CRM pristine with timely lead status updates, contact verification, task tracking, and pipeline auditing.',
        whatWeProvide: [
          'Manual and automated contact enrichment verifying job titles, emails, and phone numbers',
          'Logging customer call notes, email exchanges, and next-step action items into deals',
          'Tagging leads, segmenting lists, and routing new inquiries to assigned sales reps',
          'Weekly pipeline audit reports highlighting stalled deals requiring follow-up'
        ],
        tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho CRM'],
        impact: 'Pristine, Reliable Sales Pipeline'
      }
    ]
  },

  'accounting-bookkeeping': {
    id: 'accounting-bookkeeping',
    number: '08',
    title: 'Accounting & Bookkeeping',
    category: 'Finance & Platforms',
    headline: 'Meticulous Ledger Architecture, Automated Payroll, and Financial Telemetry',
    description: 'Ensure absolute compliance and financial clarity with QuickBooks architecture, automated accounts payable/receivable, and executive reports.',
    heroMetric: { value: '100%', label: 'Audit-Ready Accuracy' },
    subServices: [
      {
        id: 'quickbooks-services',
        title: 'QuickBooks Services',
        tagline: 'QuickBooks Setup, Migration & Chart of Accounts',
        image: quickbooksImg,
        desc: 'Professional QuickBooks Online setup, historical data migration, custom chart of accounts structuring, and third-party software integrations.',
        whatWeProvide: [
          'Custom Chart of Accounts design tailored to your specific industry model',
          'Historical data migration from spreadsheets or legacy accounting software',
          'Bank feed rule automation ensuring seamless transaction categorization',
          'Third-party app integration (Stripe, PayPal, Shopify, inventory systems)'
        ],
        tools: ['QuickBooks Online', 'QuickBooks Desktop', 'Dext'],
        impact: 'Clean, Automated Ledger Setup'
      },
      {
        id: 'bookkeeping-services',
        title: 'Bookkeeping',
        tagline: 'Monthly Transaction Reconciliation & Ledger Maintenance',
        image: bookkeepingImg,
        desc: 'Ongoing monthly bookkeeping reconciling all bank accounts, credit cards, and merchant accounts with 100% accuracy.',
        whatWeProvide: [
          'Monthly reconciliation of all corporate bank and credit card accounts',
          'Accurate categorization of expenses, income, and asset purchases',
          'General ledger reviews identifying and correcting discrepancies or missing receipts',
          'Preparation of monthly trial balances ready for CPA tax filing'
        ],
        tools: ['QuickBooks', 'Xero', 'Hubdoc'],
        impact: 'Always Up-to-Date Financials'
      },
      {
        id: 'invoice-management',
        title: 'Invoice Management',
        tagline: 'Timely Billing & Customer Payment Tracking',
        image: invoiceMgmtImg,
        desc: 'Create, dispatch, and track custom branded customer invoices with automated reminder sequences to ensure swift collection.',
        whatWeProvide: [
          'Generation and delivery of accurate, branded customer invoices and retainers',
          'Automated recurring invoice scheduling for subscription and contract clients',
          'Payment gateway integration allowing customers to pay via ACH or Credit Card',
          'Detailed aging reports tracking unpaid balances and customer payment history'
        ],
        tools: ['QuickBooks Invoicing', 'Stripe', 'FreshBooks'],
        impact: 'Faster Customer Payments'
      },
      {
        id: 'accounts-payable',
        title: 'Accounts Payable',
        tagline: 'Vendor Bill Processing & Scheduled Disbursements',
        image: accountsPayableImg,
        desc: 'Streamline vendor bill approvals, track payment due dates, and execute scheduled disbursements to maintain strong vendor relations.',
        whatWeProvide: [
          'Vendor bill ingestion, data extraction, and matching with purchase orders',
          'Multi-step management approval workflows before payments are released',
          'Scheduled electronic bill payments (ACH/wire) taking advantage of early-pay discounts',
          'Vendor 1099 tracking and end-of-year tax form preparation support'
        ],
        tools: ['Bill.com', 'QuickBooks', 'Ramp', 'Brex'],
        impact: 'Never Miss a Vendor Due Date'
      },
      {
        id: 'accounts-receivable',
        title: 'Accounts Receivable',
        tagline: 'Collections Management & Cash Flow Acceleration',
        image: accountsReceivableImg,
        desc: 'Proactive collection follow-ups, dispute resolution, and cash flow forecasting to reduce Days Sales Outstanding (DSO).',
        whatWeProvide: [
          'Polished, respectful automated and manual payment reminder follow-ups',
          'Customer dispute resolution and payment plan coordination',
          'Real-time cash flow forecasting based on incoming expected receivables',
          'Weekly accounts receivable aging telemetry for management review'
        ],
        tools: ['Chaser', 'QuickBooks', 'Plaid'],
        impact: 'Shorten Days Sales Outstanding'
      },
      {
        id: 'payroll-administration',
        title: 'Payroll Administration',
        tagline: 'Accurate Multi-State & International Payroll Runs',
        image: payrollImg,
        desc: 'Flawless payroll processing for salaried employees and hourly contractors, including tax withholdings, benefits, and direct deposits.',
        whatWeProvide: [
          'Bi-weekly and semi-monthly payroll runs executed on exact schedule',
          'Direct deposit processing, tax withholding calculations, and garnishment management',
          'Contractor 1099 and employee W-2 year-end tax compliance preparation',
          'Syncing payroll journal entries automatically into your main accounting ledger'
        ],
        tools: ['Gusto', 'ADP', 'QuickBooks Payroll', 'Deel'],
        impact: '100% On-Time, Compliant Payroll'
      },
      {
        id: 'financial-reporting',
        title: 'Financial Reporting',
        tagline: 'P&L, Balance Sheets & Cash Flow Statements',
        image: financialReportingImg,
        desc: 'Monthly executive financial packages including Profit & Loss (P&L), Balance Sheet, Cash Flow statements, and visual performance charts.',
        whatWeProvide: [
          'Monthly Profit & Loss (Income Statement) with budget vs. actual comparisons',
          'Balance Sheet statements tracking assets, liabilities, and shareholder equity',
          'Cash Flow statements providing visibility into operational liquidity',
          'Custom visual KPI summaries and executive summaries for board meetings'
        ],
        tools: ['QuickBooks Advanced', 'Fathom', 'LivePlan'],
        impact: 'Crystal-Clear Financial Insight'
      },
      {
        id: 'recurring-bookkeeping-services',
        title: 'Recurring Bookkeeping Services',
        tagline: 'Hands-Off Dedicated Monthly Bookkeeper Support',
        image: recurringBookkeepingImg,
        desc: 'A dedicated team of senior bookkeepers handling your books month in and month out, keeping you permanently tax-ready.',
        whatWeProvide: [
          'Dedicated senior bookkeeper assigned to your account with direct email/call access',
          'Monthly closing checklist completed within the first 10 days of every month',
          'Year-end tax package preparation delivered directly to your CPA',
          'Ongoing financial consultation and cash flow advisory calls'
        ],
        tools: ['QuickBooks Online', 'Slack', 'Zoom'],
        impact: 'Permanent Tax-Ready Peace of Mind'
      }
    ]
  },

  'media-broadcast-solutions': {
    id: 'media-broadcast-solutions',
    number: '09',
    title: 'Media & Broadcast Solutions',
    category: 'Marketing & Media',
    headline: 'Programmatic Media Buying, Connected TV, and Digital Broadcast',
    description: 'Enterprise media planning, real-time programmatic bidding across DSPs, Connected TV / OTT distribution, and deep campaign attribution.',
    heroMetric: { value: '45M+', label: 'Monthly Ad Impressions' },
    subServices: [
      {
        id: 'programmatic-advertising',
        title: 'Programmatic Advertising',
        tagline: 'Real-Time DSP Bidding Across Premium Web Networks',
        image: programmaticImg,
        desc: 'Algorithmic real-time bidding (RTB) across global Demand-Side Platforms (DSPs), placing your brand on premier digital publications at optimal CPMs.',
        whatWeProvide: [
          'DSP campaign architecture setup across The Trade Desk, Google DV360, and Amazon DSP',
          'First-party and third-party audience targeting with private marketplace (PMP) deal access',
          'Strict brand safety filters and anti-fraud verification ensuring genuine human impressions',
          'Dynamic creative optimization (DCO) tailoring ad messaging to viewer context'
        ],
        tools: ['The Trade Desk', 'DV360', 'IAS', 'DoubleVerify'],
        impact: 'Maximum Media Buying Efficiency'
      },
      {
        id: 'media-planning-buying',
        title: 'Media Planning & Buying',
        tagline: 'Strategic Cross-Channel Media Allocation',
        image: mediaPlanningImg,
        desc: 'Comprehensive media planning that maps your target demographic to the highest-converting digital channels, negotiating bulk rate efficiencies.',
        whatWeProvide: [
          'Demographic, psychographic, and geographical audience media consumption research',
          'Cross-channel budget allocation modeling maximizing cumulative reach and frequency',
          'Direct publisher negotiations securing guaranteed placement rates and exclusivity',
          'Comprehensive pre-campaign media plan decks with projected reach and conversions'
        ],
        tools: ['Nielsen', 'Comscore', 'Kantar', 'Excel'],
        impact: 'Optimal Capital Allocation'
      },
      {
        id: 'digital-broadcast-solutions',
        title: 'Digital Broadcast Solutions',
        tagline: 'Connected TV (CTV) & OTT Streaming Placements',
        image: digitalBroadcastImg,
        desc: 'Broadcast-quality commercial distribution across Connected TV platforms (Hulu, Roku, Apple TV, Amazon Fire) with digital tracking precision.',
        whatWeProvide: [
          'Non-skippable 15s and 30s commercial placements on premier streaming services',
          'Household-level IP targeting and digital retargeting across second-screen devices',
          'High-definition video transcode optimization for broadcast streaming standards',
          'Foot-traffic and online conversion attribution tracking from TV ad impressions'
        ],
        tools: ['Roku Ad Platform', 'Hulu Ad Manager', 'MNTN', 'Amazon DSP'],
        impact: 'Living-Room Screen Brand Presence'
      },
      {
        id: 'advertising-inventory-management',
        title: 'Advertising Inventory Management',
        tagline: 'Ad Server Architecture & Yield Optimization',
        image: adInventoryImg,
        desc: 'Manage digital advertising space for media networks and publishers, maximizing fill rates and eCPMs with header bidding technology.',
        whatWeProvide: [
          'Google Ad Manager (GAM) configuration, ad tag generation, and yield optimization',
          'Prebid.js header bidding deployment connecting multiple SSP demand sources',
          'Ad placement layout testing to maximize viewability scores without hurting user experience',
          'Real-time fill rate, eCPM, and revenue telemetry dashboards for publisher executives'
        ],
        tools: ['Google Ad Manager 360', 'Prebid.js', 'Magnite', 'OpenX'],
        impact: '+38% Publisher Ad Revenue Lift'
      },
      {
        id: 'campaign-analytics',
        title: 'Campaign Analytics',
        tagline: 'Multi-Touch Attribution & Telemetry Dashboards',
        image: campaignAnalyticsImg,
        desc: 'Consolidated media performance reporting verifying brand lift, conversion lift, cross-channel deduplication, and true return on ad spend.',
        whatWeProvide: [
          'Unified reporting dashboards consolidating data from all ad platforms and DSPs',
          'Incrementality testing and brand lift studies measuring real business impact',
          'Cross-device attribution tracking connecting ad exposures to final purchases',
          'Monthly executive presentation decks with strategic insights and reallocation advice'
        ],
        tools: ['Looker Studio', 'AppsFlyer', 'Google Analytics 4', 'BigQuery'],
        impact: '100% Transparent Media ROI'
      }
    ]
  },

  'business-platforms-infrastructure': {
    id: 'business-platforms-infrastructure',
    number: '10',
    title: 'Business Platforms & Digital Infrastructure',
    category: 'Finance & Platforms',
    headline: 'End-to-End Zoho Ecosystems, Domain Governance, and Enterprise Security',
    description: 'Complete deployment of the Zoho One suite, custom Zoho Creator apps, automated Deluge scripts, secure DNS routing, and digital security governance.',
    heroMetric: { value: '40+', label: 'Integrated Business Apps' },
    subServices: [
      {
        id: 'zoho-crm',
        title: 'Zoho CRM',
        tagline: 'Custom Zoho CRM Blueprints & Sales Pipelines',
        image: zohoCrmImg,
        desc: 'Full-scale Zoho CRM implementation tailored to your sales process, complete with custom modules, lead assignment rules, and automated follow-ups.',
        whatWeProvide: [
          'Custom module architecture, field mapping, and layout rules for your sales team',
          'Blueprint workflow automation enforcing standard operating procedures on deals',
          'Lead assignment rules, auto-responders, and email template synchronization',
          'Advanced revenue forecasting and sales performance dashboards'
        ],
        tools: ['Zoho CRM', 'Zoho Flow', 'Deluge Scripting'],
        impact: 'Accelerated Deal Velocities'
      },
      {
        id: 'zoho-books',
        title: 'Zoho Books',
        tagline: 'Automated Billing, Invoicing & Financial Accounting',
        image: zohoBooksImg,
        desc: 'Configure Zoho Books for automated customer billing, recurring subscriptions, vendor payment approvals, and bank feeds.',
        whatWeProvide: [
          'Chart of accounts configuration and historical accounting data migration',
          'Automated recurring invoicing, payment reminders, and client payment portal setup',
          'Vendor bill approval workflows, expense receipt scanning, and 1099 tracking',
          'Integration with bank feeds and automated transaction categorization rules'
        ],
        tools: ['Zoho Books', 'Stripe', 'Razorpay', 'Zoho Inventory'],
        impact: 'Flawless Financial Ledger Automation'
      },
      {
        id: 'zoho-one',
        title: 'Zoho One',
        tagline: 'All-in-One Operating System for Your Business',
        image: zohoOneImg,
        desc: 'Deploy the complete Zoho One suite of 40+ applications, creating a fully synchronized digital operating system across your entire company.',
        whatWeProvide: [
          'Single sign-on (SSO) and central employee administration across all Zoho apps',
          'Inter-application data synchronization between CRM, Books, Desk, and Projects',
          'Custom employee permission roles and departmental security access levels',
          'Comprehensive staff onboarding and administrative team training sessions'
        ],
        tools: ['Zoho One', 'Zoho Directory', 'Zoho Analytics'],
        impact: 'Unified All-in-One Digital Workplace'
      },
      {
        id: 'zoho-creator',
        title: 'Zoho Creator',
        tagline: 'Custom Low-Code Enterprise Business Applications',
        image: zohoCreatorImg,
        desc: 'Develop custom low-code web and mobile applications using Zoho Creator to digitize unique operational processes that off-the-shelf software cannot handle.',
        whatWeProvide: [
          'Custom database schema design, relationship models, and user interfaces',
          'Deluge scripting for complex mathematical calculations and business logic',
          'Custom customer and vendor portal creation with secured login access',
          'Native iOS and Android mobile app generation directly from Creator apps'
        ],
        tools: ['Zoho Creator', 'Deluge', 'REST APIs'],
        impact: 'Bespoke Software in Weeks, Not Months'
      },
      {
        id: 'zoho-desk',
        title: 'Zoho Desk',
        tagline: 'Omnichannel Customer Support & Knowledge Base',
        image: zohoDeskImg,
        desc: 'Implement Zoho Desk to organize customer support tickets across email, web, phone, and social media with automated SLA escalations.',
        whatWeProvide: [
          'Omnichannel ticket ingestion from email, web forms, phone, and live chat',
          'Service Level Agreement (SLA) rule configuration with automated manager alerts',
          'Customer self-service Help Center and Knowledge Base portal design',
          'Customer satisfaction (CSAT) survey automation and agent performance metrics'
        ],
        tools: ['Zoho Desk', 'Zoho Assist', 'Knowledge Base'],
        impact: 'Exceptional Customer Support Efficiency'
      },
      {
        id: 'zoho-integration-automation',
        title: 'Zoho Integration & Automation',
        tagline: 'Deluge Scripts & Third-Party API Connectors',
        image: zohoIntegrationImg,
        desc: 'Custom Zoho Flow, Deluge scripting, and webhook integrations connecting Zoho to third-party software like Shopify, Google Workspace, and Slack.',
        whatWeProvide: [
          'Custom Deluge script development for automated cross-module actions',
          'Zoho Flow automated workflows connecting Zoho with external web applications',
          'Webhook receivers and REST API integrations with proprietary internal databases',
          'Nightly automated batch processing scripts and synchronization error logging'
        ],
        tools: ['Zoho Flow', 'Deluge', 'Webhooks', 'REST APIs'],
        impact: 'Zero Manual Data Copying'
      },
      {
        id: 'secure-domain-booking',
        title: 'Secure Domain Booking',
        tagline: 'Corporate Domain Acquisition & Registry Protection',
        image: domainBookingImg,
        desc: 'Strategic corporate domain name procurement, brand domain defense, WHOIS privacy, and registrar lock protection against unauthorized transfers.',
        whatWeProvide: [
          'Strategic domain name availability research and anonymous acquisition negotiation',
          'Full WHOIS privacy protection and registry locking against unauthorized transfers',
          'Corporate brand defensive registrations across all major gTLDs and ccTLDs',
          'Automated multi-year auto-renewals preventing accidental domain expiration'
        ],
        tools: ['GoDaddy Enterprise', 'Cloudflare Registrar', 'Namecheap'],
        impact: 'Secure Corporate Web Identity'
      },
      {
        id: 'dns-domain-management',
        title: 'DNS & Domain Management',
        tagline: 'High-Availability Anycast DNS & Email Authentication',
        image: dnsManagementImg,
        desc: 'Enterprise DNS management with global Anycast routing, SPF/DKIM/DMARC email authentication, and sub-second DNS propagation.',
        whatWeProvide: [
          'Global Anycast DNS setup ensuring 100% DNS resolution uptime and DDoS defense',
          'Comprehensive email authentication configuration: SPF, DKIM, and DMARC enforcement',
          'Subdomain management, CNAME routing, and automated DNS failover records',
          'DNSSEC deployment to prevent DNS spoofing and cache poisoning attacks'
        ],
        tools: ['Cloudflare DNS', 'Route 53', 'DMARCian'],
        impact: '100% Email Deliverability & DNS Uptime'
      },
      {
        id: 'ssl-digital-security',
        title: 'SSL & Digital Security',
        tagline: 'End-to-End Encryption & Security Posture Hardening',
        image: sslDigitalSecurityImg,
        desc: 'Deploy enterprise-grade SSL/TLS certificates, enforce HTTPS everywhere, and configure robust HTTP security headers across your web platforms.',
        whatWeProvide: [
          '2048-bit and 4096-bit RSA/ECC SSL certificates with automated lifecycle renewals',
          'Strict Transport Security (HSTS) preloading preventing protocol downgrade attacks',
          'Content Security Policy (CSP) headers protecting against cross-site scripting (XSS)',
          'Continuous vulnerability monitoring and automated security compliance reporting'
        ],
        tools: ['Cloudflare SSL', 'Let\'s Encrypt', 'DigiCert', 'SSL Labs'],
        impact: 'Impenetrable HTTPS Encryption'
      }
    ]
  }
};
