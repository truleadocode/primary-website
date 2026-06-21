export interface BlogImage {
  url: string
  alt: string
  caption: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole: string
  category: string
  readTime: string
  lang?: 'en' | 'nl'
  coverImage?: string
  images?: BlogImage[]
  relatedSlugs?: string[]
  content: string
  faqs: { question: string; answer: string }[]
}

function il(slug: string, text: string): string {
  return `<a href="/resources/blog/${slug}">${text}</a>`
}

export const blogPosts: BlogPost[] = [

  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'what-is-influencer-marketing-software',
    title: 'What Is Influencer Marketing Software? (A Complete Guide for Agencies)',
    description: 'Influencer marketing software helps agencies manage creator discovery, campaign execution, approvals, analytics, and payments from one platform. Here is everything you need to know.',
    date: '2026-06-10',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Guides',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3',
    relatedSlugs: ['how-to-measure-influencer-marketing-roi', 'how-to-manage-multiple-influencer-marketing-clients'],
    images: [
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Marketing agency team collaborating on influencer campaign strategy', caption: 'Influencer marketing software replaces spreadsheets and email chains with a single structured workspace for your entire team' },
      { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Business analytics dashboard showing campaign performance metrics', caption: 'One-click reporting turns raw campaign data into polished client-ready decks in minutes' },
    ],
    content: `
<p>If your agency is still juggling influencer campaigns across spreadsheets, email threads, and DMs, you already know the problem: things fall through the cracks. Deadlines slip, approvals get buried, and reporting takes hours you do not have.</p>

<p>Influencer marketing software exists to fix that. It centralises every part of the process — from finding creators to paying them — into one workspace your whole team can use.</p>

<p>This guide explains what influencer marketing software actually does, what separates the good platforms from the mediocre ones, and how to decide whether your agency needs one right now.</p>

${il('what-is-influencer-marketing-software', 'Jump to the full breakdown')} or keep reading for the overview.

<h2>What Is Influencer Marketing Software?</h2>

<p>Influencer marketing software is a platform that helps brands and agencies plan, execute, and measure influencer campaigns. Instead of scattering work across a dozen tools, everything lives in one place: your creator roster, campaign briefs, content approvals, analytics, and payments.</p>

<p>The category has grown fast. A decade ago, most agencies ran campaigns manually. Today there are dozens of platforms, each with a different emphasis — some focus on creator discovery, others on analytics, and a few try to handle the full workflow end to end.</p>

<p>Truleado sits in the last category. It is built specifically for agencies that manage campaigns on behalf of multiple clients, which creates coordination challenges that brand-side tools do not address.</p>

<h2>Core Features to Look For</h2>

<h3>Creator Discovery and CRM</h3>
<p>Good software lets you search for creators by niche, audience demographics, engagement rate, and platform. More importantly, it stores your existing relationships so you are not rebuilding a spreadsheet for every new campaign.</p>

<h3>Campaign Management</h3>
<p>This covers briefing creators, tracking deliverables, managing deadlines, and keeping clients informed without a constant stream of status update emails.</p>

<h3>Content Approval Workflows</h3>
<p>Agencies need a structured way to review content before it goes live. The best platforms let you set up approval chains so nothing gets posted without sign-off from the right people.</p>

<h3>Analytics and Reporting</h3>
<p>Post-campaign, you need to show clients what they got for their budget. Look for platforms that pull performance data automatically and let you export branded reports.</p>

<h3>Payments</h3>
<p>Paying creators across different countries, currencies, and contract types is painful without tooling. Some platforms handle this natively; others integrate with payment processors.</p>

<h2>Who Uses Influencer Marketing Software?</h2>

<p>The two main user groups are brands running campaigns in-house and agencies managing campaigns on behalf of clients.</p>

<p>Brand teams tend to need strong discovery and analytics. Agencies need all of that plus multi-client organisation, client-facing reporting, and permission controls so clients can review work without seeing things they should not.</p>

<p>If you are an agency, make sure the platform you evaluate was actually designed for agencies. Many tools are built for brand teams and bolt on agency features as an afterthought.</p>

<h2>How to Choose the Right Platform</h2>

<p>Start with your biggest bottleneck. If creator discovery is the problem, prioritise platforms with strong search. If reporting takes too long, look for automated analytics. If campaign coordination is chaotic, focus on workflow features.</p>

<p>Then check:</p>
<ul>
  <li>Does it support the platforms your clients care about (Instagram, TikTok, YouTube)?</li>
  <li>Can multiple team members work in it simultaneously?</li>
  <li>Is the pricing per seat or per campaign?</li>
  <li>How long does onboarding take?</li>
</ul>

<p>Most platforms offer a free trial. Use it with a real campaign, not a demo scenario.</p>

<h2>Is Influencer Marketing Software Worth It?</h2>

<p>For agencies managing more than two or three active campaigns at once, almost always yes. The time saved on coordination, reporting, and creator communication typically pays for the software within the first month.</p>

<p>For smaller operations running one campaign at a time, a well-organised spreadsheet system might still be sufficient — but you will hit a ceiling quickly as you grow.</p>

<p>${il('how-to-measure-influencer-marketing-roi', 'Learn how to measure influencer ROI properly')} once you have the right tools in place.</p>
    `,
    faqs: [
      {
        question: 'What does influencer marketing software do?',
        answer: 'It centralises campaign management, creator relationships, content approvals, analytics, and payments into one platform — replacing the spreadsheets and email threads most agencies currently use.',
      },
      {
        question: 'Is influencer marketing software only for large agencies?',
        answer: 'No. Many platforms, including Truleado, are designed to scale from small teams to large agencies. The key is finding one that matches your current workflow and can grow with you.',
      },
      {
        question: 'How much does influencer marketing software cost?',
        answer: 'Pricing varies widely. Some tools charge per seat, others per campaign or on a flat monthly basis. Truleado offers a free plan to get started, with paid tiers for larger teams.',
      },
      {
        question: 'Can I use influencer marketing software for multiple clients?',
        answer: 'Yes, if the platform is built for agencies. Truleado is designed around multi-client management, with separate workspaces, reporting, and permission controls for each client.',
      },
      {
        question: 'What is the difference between influencer marketing software and an influencer marketplace?',
        answer: 'A marketplace connects brands with creators for hire. Software is a management layer — it helps you run campaigns with creators you already work with (or find through the platform) from brief to payment.',
      },
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-measure-influencer-marketing-roi',
    title: 'How to Measure Influencer Marketing ROI (The Agency Guide)',
    description: 'Most agencies struggle to prove influencer ROI to clients. This guide covers the metrics that matter, how to set up tracking, and how to present results that clients actually understand.',
    date: '2026-06-12',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Guides',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    relatedSlugs: ['what-is-influencer-marketing-software', 'how-to-manage-multiple-influencer-marketing-clients'],
    images: [
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Analytics dashboard showing marketing performance data', caption: 'Measuring influencer ROI starts with agreeing on the right metrics before a campaign launches' },
      { url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Business team reviewing campaign results in a meeting', caption: 'Presenting ROI clearly is as important as measuring it accurately' },
    ],
    content: `
<p>Proving influencer marketing ROI is one of the hardest conversations agencies have with clients. Engagement numbers are easy to pull. Connecting those numbers to business outcomes — sales, leads, brand lift — is much harder.</p>

<p>This guide covers how to set up measurement properly, which metrics actually matter, and how to present results in a way clients trust.</p>

<h2>Why Influencer ROI Is Hard to Measure</h2>

<p>Influencer marketing sits at the intersection of brand and performance marketing. It drives awareness, consideration, and conversion — but rarely in a straight line. A viewer might see a post today, visit the site next week, and buy next month.</p>

<p>Traditional attribution models struggle with this. Last-click attribution often gives influencers no credit for sales they influenced. Multi-touch models help but require more sophisticated tracking than most agencies have set up.</p>

<h2>Start With Agreed Goals</h2>

<p>Before a campaign launches, align with the client on what success looks like. Vague goals produce vague results that are impossible to defend.</p>

<p>Useful goal types:</p>
<ul>
  <li><strong>Awareness:</strong> reach, impressions, share of voice</li>
  <li><strong>Engagement:</strong> likes, comments, saves, shares</li>
  <li><strong>Traffic:</strong> clicks, sessions, time on site</li>
  <li><strong>Conversions:</strong> sign-ups, purchases, revenue</li>
</ul>

<p>Pick two or three primary metrics per campaign. Reporting on twenty things dilutes the story.</p>

<h2>Set Up Tracking Before the Campaign Starts</h2>

<p>This sounds obvious but is often skipped. You need:</p>

<ul>
  <li>UTM parameters on every link creators share</li>
  <li>Unique discount codes or referral links per creator</li>
  <li>Pixel or conversion tracking on landing pages</li>
  <li>Baseline data to compare against</li>
</ul>

<p>Without these in place before launch, you will be estimating after the fact.</p>

<h2>Metrics That Actually Matter</h2>

<h3>Earned Media Value (EMV)</h3>
<p>EMV estimates what the organic content would cost if you had bought it as advertising. It is a useful benchmark but not a revenue figure — do not present it as one.</p>

<h3>Cost Per Engagement (CPE)</h3>
<p>Total spend divided by total engagements. Useful for comparing creator performance across a campaign. A creator with 100k followers and 2% engagement will often outperform one with 500k followers and 0.3%.</p>

<h3>Conversion Rate by Creator</h3>
<p>If you have unique codes or links, you can see which creators actually drove action, not just views. This is the most defensible data you can show a client.</p>

<h3>Brand Search Lift</h3>
<p>Check whether branded search volume increased during and after the campaign using Google Search Console or Google Trends. Influencer campaigns that work tend to drive curiosity — people search for the brand after seeing a recommendation.</p>

<h2>How to Present Results to Clients</h2>

<p>Lead with the metric the client cared most about when you set goals. Then provide context — how does this compare to benchmarks? To previous campaigns? To the client's other channels?</p>

<p>Avoid presenting raw numbers without interpretation. "We got 2.4 million impressions" means nothing without context. "We got 2.4 million impressions at a CPM of £4.20, roughly half what you would pay on Meta" means something.</p>

<p>For clients who care primarily about revenue, be honest about the limits of attribution. Show the data you have — traffic, codes, conversions — and acknowledge what you cannot directly measure. Clients respect transparency more than inflated numbers they will eventually question.</p>

<h2>Building a Measurement System Over Time</h2>

<p>Single-campaign ROI is useful but limited. The agencies that build the strongest client relationships are the ones that track performance across campaigns and show trend lines.</p>

<p>If you run the same client's campaigns for six months, you should be able to show which creator categories perform best, what content formats drive the most conversions, and what a reasonable CPE benchmark looks like for their category.</p>

<p>That kind of institutional knowledge is hard to replace and makes it very difficult for a client to justify switching agencies.</p>

<p>${il('how-to-manage-multiple-influencer-marketing-clients', 'Learn how to manage multiple clients without dropping the ball')} as your agency grows.</p>
    `,
    faqs: [
      {
        question: 'What is a good ROI for influencer marketing?',
        answer: 'Industry benchmarks suggest $5–$6 return for every $1 spent on influencer marketing on average, but this varies hugely by category, platform, and campaign objective. Awareness campaigns will look different from direct-response ones.',
      },
      {
        question: 'How do I track influencer marketing conversions?',
        answer: 'Use unique UTM links, discount codes, or referral URLs per creator. Combine this with pixel tracking on your landing pages and you can attribute conversions directly to individual creators.',
      },
      {
        question: 'Should I use EMV to report influencer ROI?',
        answer: 'EMV is useful as a benchmark but should not be presented as revenue. It estimates the advertising equivalent value of organic content — helpful context, but clients who care about sales will not find it convincing on its own.',
      },
      {
        question: 'How long does it take to see ROI from influencer marketing?',
        answer: 'It depends on the goal. Awareness metrics are visible immediately. Conversions from upper-funnel content can take weeks or months to materialise as the audience moves through their decision process.',
      },
      {
        question: 'What metrics should I report to clients?',
        answer: 'Focus on the two or three metrics you agreed on before the campaign started. Add context by comparing to benchmarks or previous results. Avoid overwhelming clients with every available data point.',
      },
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-manage-multiple-influencer-marketing-clients',
    title: 'How to Manage Multiple Influencer Marketing Clients Without Dropping the Ball',
    description: 'Running influencer campaigns for multiple clients at once is where most agencies hit a wall. Here is a practical system for staying organised, keeping clients happy, and scaling without chaos.',
    date: '2026-06-14',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Guides',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
    relatedSlugs: ['what-is-influencer-marketing-software', 'how-to-measure-influencer-marketing-roi'],
    images: [
      { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Agency team managing multiple client campaigns simultaneously', caption: 'Multi-client management requires systems, not just effort' },
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Professional reviewing campaign dashboards on multiple screens', caption: 'The right software makes it possible to manage dozens of active campaigns without losing track' },
    ],
    content: `
<p>The moment an agency takes on its third or fourth client, something usually breaks. It might be a missed deadline, a piece of content that went live without approval, or a client who feels like they are not getting enough attention. The root cause is almost always the same: the system that worked for two clients does not scale.</p>

<p>This guide is about building a system that does scale — one that lets you grow your client roster without growing your stress level at the same rate.</p>

<h2>The Core Problem: Context Switching</h2>

<p>Managing multiple clients means constantly switching between different brands, different voices, different creator rosters, and different reporting requirements. Each switch has a cost. Research on context switching suggests it can take up to 23 minutes to fully regain focus after an interruption.</p>

<p>Good multi-client management is largely about minimising unnecessary context switching and making the switches that are necessary faster and less error-prone.</p>

<h2>Separate Client Workspaces</h2>

<p>The first thing to get right is separation. Every client should have their own workspace — a dedicated place for their campaigns, creators, content, and reports that does not bleed into other clients.</p>

<p>This sounds obvious but many agencies use shared spreadsheets or generic project management tools that mix everything together. When you are looking for a creator brief at 9am before a client call, you should not be scrolling past three other clients' content to find it.</p>

<p>Truleado is built around this model. Each client gets their own workspace with separate campaign management, creator lists, and reporting — with you having visibility across all of them from a single agency dashboard.</p>

<h2>Standardise Your Workflows</h2>

<p>The agencies that manage the most clients efficiently tend to run every campaign through the same basic workflow, regardless of client:</p>

<ol>
  <li>Brief → Creator selection → Outreach</li>
  <li>Contract → Content brief</li>
  <li>Draft submission → Internal review → Client approval</li>
  <li>Post scheduling → Live monitoring</li>
  <li>Analytics pull → Report generation</li>
</ol>

<p>When every campaign follows the same steps, your team knows exactly where each one is at any point. You can onboard new team members faster. And you can spot bottlenecks more easily — if content is consistently getting stuck at the client approval stage, that is a process problem you can fix.</p>

<h2>Set Clear Cadences for Each Client</h2>

<p>A common mistake is treating every client as equally urgent. Some clients need weekly check-ins; others are happy with monthly reporting as long as campaigns are running smoothly.</p>

<p>Set explicit communication cadences at the start of each engagement and stick to them. This creates predictability for the client and protects your team from ad hoc requests that derail focused work time.</p>

<h2>Build a Creator Roster, Not a Creator List</h2>

<p>A list is a spreadsheet of names. A roster is a structured database with performance history, rates, content categories, platform handles, payment details, and notes from previous campaigns.</p>

<p>Every time you work with a creator, you should be adding to their record: what they delivered, what the engagement looked like, whether they hit deadlines, any issues that came up. Over time, this becomes a competitive advantage — you know which creators perform for which client types and can make better recommendations faster.</p>

<h2>Automate What You Can</h2>

<p>Not every task needs a human. Routine status updates, content approval reminders, and report generation are all candidates for automation.</p>

<p>The goal is not to remove the human element from client relationships — it is to make sure your team's time goes to the things that actually require judgment and creativity, not administrative overhead.</p>

<h2>Set Expectations Early About Capacity</h2>

<p>One of the most common reasons agencies drop balls is taking on more clients than they can actually serve well. It is tempting to say yes to every opportunity, especially when you are growing.</p>

<p>Be honest about what good service looks like at your current capacity. If you can serve eight clients well or twelve clients adequately, the clients who get adequate service will eventually notice — and leave. Eight strong relationships are more valuable than twelve strained ones.</p>

<p>${il('what-is-influencer-marketing-software', 'The right software makes this manageable')} — explore what to look for in a platform built for agencies.</p>
    `,
    faqs: [
      {
        question: 'How many clients can an influencer marketing agency manage at once?',
        answer: 'It depends on campaign complexity and team size, but most agencies find that without dedicated software, quality starts to slip around three to five active clients. With the right systems and tools, ten or more is manageable.',
      },
      {
        question: 'How do I keep clients from feeling like they are not a priority?',
        answer: 'Set clear communication cadences at the start of each engagement and stick to them. Proactive updates — even short ones — make clients feel informed without requiring them to chase you.',
      },
      {
        question: 'Should each client have a dedicated account manager?',
        answer: 'Ideally yes, but it is not always possible for smaller agencies. If one person manages multiple clients, structured workflows and good software become even more important to prevent things falling through the cracks.',
      },
      {
        question: 'What is the biggest mistake agencies make when scaling to multiple clients?',
        answer: 'Trying to scale the same manual processes that worked for one or two clients. At a certain point, spreadsheets and email chains break down. Building proper systems before you hit that wall is much easier than fixing things in crisis mode.',
      },
      {
        question: 'How do I manage creator relationships across multiple clients?',
        answer: 'Keep a centralised creator CRM with performance history, rates, and notes from every campaign. This lets you match the right creators to the right briefs quickly, regardless of which client the campaign is for.',
      },
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'influencer-marketing-agency-tools',
    title: 'The 9 Best Tools for Influencer Marketing Agencies in 2026',
    description: 'From campaign management to creator payments, these are the tools agencies actually use to run influencer marketing at scale. Honest assessments, no affiliate bias.',
    date: '2026-06-16',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Tools',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
    relatedSlugs: ['what-is-influencer-marketing-software', 'how-to-manage-multiple-influencer-marketing-clients'],
    images: [
      { url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Digital marketing tools and software interfaces on screens', caption: 'The right stack of tools can cut campaign admin time by more than half' },
      { url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Marketing professional evaluating software options on laptop', caption: 'Choosing tools that integrate well with each other matters as much as individual feature sets' },
    ],
    content: `
<p>There is no shortage of tools marketed at influencer marketing agencies. Most of them do one or two things well and rely on integrations or workarounds for everything else.</p>

<p>This list covers the tools that actually move the needle for agencies — the ones that save meaningful time, reduce errors, or make it easier to show clients results. We have grouped them by function so you can see where your current stack has gaps.</p>

<h2>All-in-One Campaign Management</h2>

<h3>1. Truleado</h3>
<p>Built specifically for agencies managing multiple clients, Truleado covers the full campaign lifecycle: creator CRM, campaign planning, content approvals, analytics, and payments. The multi-client workspace model means each client sees only their own campaigns and data, while your team has a single agency-level view. Free to start.</p>

<h3>2. Grin</h3>
<p>A strong platform for e-commerce brands and the agencies that serve them. Deep Shopify integration makes revenue attribution straightforward. Better suited to product-focused campaigns than service or brand campaigns.</p>

<h3>3. Aspire</h3>
<p>Good discovery features and a clean workflow interface. Aspire has historically been stronger on the brand side but has added agency features over time. Worth evaluating if creator discovery is your primary bottleneck.</p>

<h2>Creator Discovery</h2>

<h3>4. Modash</h3>
<p>One of the most comprehensive creator search tools available. Covers Instagram, TikTok, and YouTube with detailed audience demographic filters. API-first, which makes it useful for agencies building custom workflows. No campaign management features — purely discovery and analytics.</p>

<h3>5. Heepsy</h3>
<p>A more affordable option for agencies that need solid discovery without enterprise pricing. Covers the main platforms, with basic audience analysis. Good starting point for smaller agencies.</p>

<h2>Analytics and Reporting</h2>

<h3>6. Traackr</h3>
<p>Strong on influencer benchmarking and brand safety scoring. Reporting features are among the best in the category. Pricing is enterprise-focused, which makes it less accessible for smaller agencies.</p>

<h3>7. Meltwater</h3>
<p>Primarily a media intelligence tool that has expanded into influencer analytics. Useful if you need to combine influencer data with broader PR and social listening in a single report. More complex than agencies with pure influencer needs might want.</p>

<h2>Payments and Contracts</h2>

<h3>8. Lumanu</h3>
<p>Focused specifically on creator payments, with support for multiple currencies and tax compliance. Integrates with several campaign management platforms. Good option if your current platform handles everything except payments cleanly.</p>

<h3>9. Trolley (formerly Payment Rails)</h3>
<p>Similar to Lumanu, with strong international payment capabilities. More API-friendly, which suits agencies with technical teams building custom workflows. Less opinionated about the influencer marketing use case specifically.</p>

<h2>How to Think About Your Stack</h2>

<p>Before adding any new tool, map your current workflow and identify where time is actually being lost. Is it finding creators? Chasing approvals? Building reports? Paying invoices?</p>

<p>The temptation is to adopt the tool with the longest feature list. In practice, the agencies that run most efficiently tend to use fewer tools with deep integration rather than many tools that do not talk to each other.</p>

<p>If you are starting from scratch, an all-in-one platform that handles 80% of your workflow adequately is usually better than five best-in-class point solutions that you have to stitch together manually.</p>

<p>${il('what-is-influencer-marketing-software', 'Learn what to look for in influencer marketing software')} before you start evaluating platforms.</p>
    `,
    faqs: [
      {
        question: 'Do I need all-in-one software or can I use separate tools?',
        answer: 'Both approaches work, but all-in-one platforms are usually easier for smaller agencies. Separate best-in-class tools give you more flexibility but require more integration work and create more places for things to fall through the cracks.',
      },
      {
        question: 'What tools do influencer marketing agencies use for reporting?',
        answer: 'Most agencies use a combination of native platform analytics (Instagram Insights, TikTok Analytics), their campaign management software, and sometimes a dedicated analytics tool like Traackr for deeper benchmarking.',
      },
      {
        question: 'How do agencies pay influencers internationally?',
        answer: 'Dedicated payment tools like Lumanu or Trolley handle multi-currency payments and tax compliance. Some all-in-one platforms like Truleado include payment functionality natively.',
      },
      {
        question: 'What is the best free influencer marketing tool?',
        answer: 'For agencies just starting out, Truleado offers a free plan. For discovery specifically, Instagram and TikTok\'s native search is free but limited. Most robust discovery tools require a paid subscription.',
      },
      {
        question: 'How do I evaluate influencer marketing software?',
        answer: 'Start with your biggest operational pain point, then find tools that solve it. Run a real campaign through any trial you sign up for — not a demo scenario. Check how reporting works, since that is where many tools fall short in practice.',
      },
    ],
  },

  // ── 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'influencer-marketing-brief-template',
    title: 'How to Write an Influencer Marketing Brief That Creators Actually Follow',
    description: 'A weak brief is the root cause of most content disappointments. Here is what an effective influencer brief includes, with a template you can adapt for any campaign.',
    date: '2026-06-18',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Templates',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    relatedSlugs: ['how-to-manage-multiple-influencer-marketing-clients', 'what-is-influencer-marketing-software'],
    images: [
      { url: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Creative professional writing a campaign brief on paper', caption: 'A good brief gives creators clear direction while leaving room for their authentic voice' },
      { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Team collaborating on creative brief documents', caption: 'Briefs that go through an internal review process before reaching creators produce better content' },
    ],
    content: `
<p>Most influencer content disappointments trace back to the same source: a brief that was too vague, too long, or both. Creators are not mind readers. If the brief does not clearly communicate what success looks like, the content will reflect that.</p>

<p>Writing a good brief is a skill. This guide covers what should always be in one, what to leave out, and how to structure it so creators actually read it.</p>

<h2>What an Influencer Brief Is For</h2>

<p>A brief serves two purposes. First, it aligns the creator on what you need — the message, the format, the audience, the call to action. Second, it protects both parties if there is a dispute about deliverables later.</p>

<p>A brief is not a script. The more you try to control exactly what a creator says and does, the less authentic the content will feel to their audience. The brief sets the parameters; the creator fills them with their own voice.</p>

<h2>The Eight Elements of an Effective Brief</h2>

<h3>1. Campaign Overview</h3>
<p>Two to three sentences explaining what the campaign is for and why the creator is a good fit. This is not just boilerplate — creators who understand the bigger picture make better creative decisions.</p>

<h3>2. Brand Background</h3>
<p>A short summary of the brand: what it does, who it is for, and what makes it different. Include a link to the brand guidelines if they exist.</p>

<h3>3. Campaign Objective</h3>
<p>What is this campaign trying to achieve? Awareness, traffic, sign-ups, sales? Be specific. "Drive awareness" is not an objective. "Drive 500 link clicks to the product page" is.</p>

<h3>4. Target Audience</h3>
<p>Who are we trying to reach? Demographics, interests, pain points. This helps the creator frame the content in a way that resonates with the right people.</p>

<h3>5. Key Messages</h3>
<p>The two or three things the content must communicate. Keep this list short. If everything is a priority, nothing is.</p>

<h3>6. Deliverables</h3>
<p>Exact specification of what you need: platform, format, duration, number of posts, story frames, required tags or links. Be precise here — ambiguity in deliverables leads to disputes.</p>

<h3>7. Mandatory Inclusions and Exclusions</h3>
<p>What must appear in the content (specific product shots, hashtags, disclosure language) and what cannot appear (competitor mentions, topics that conflict with the brand). Keep the mandatory list short — every constraint you add reduces creative quality.</p>

<h3>8. Timeline</h3>
<p>Draft due date, revision window, approval deadline, and go-live date. Include who to send drafts to and what format to use.</p>

<h2>What to Leave Out</h2>

<p>The most common mistake is over-briefing. A ten-page brief does not produce better content than a two-page one — it produces content that took the creator twice as long to make sense of, and it pushes them toward safe, mechanical execution rather than creative work.</p>

<p>Leave out: exhaustive brand history, lengthy legal disclaimers (save those for the contract), detailed scripts, or content direction so specific that the creator has no creative latitude.</p>

<h2>Brief Template</h2>

<p>Here is a structure you can adapt:</p>

<pre>
CAMPAIGN BRIEF

Campaign: [Name]
Brand: [Client name]
Creator: [Creator handle]
Date sent: [Date]

—

OVERVIEW
[2–3 sentences: what this campaign is, why this creator]

BRAND BACKGROUND
[3–5 sentences: what the brand does, who it is for, what makes it different]
Brand guidelines: [link]

CAMPAIGN OBJECTIVE
[Specific, measurable goal]

TARGET AUDIENCE
[Demographics and psychographics of the people we want to reach]

KEY MESSAGES (max 3)
1. [Message]
2. [Message]
3. [Message]

DELIVERABLES
- [Platform] [Format] [Duration/size] — [quantity]
- [e.g. Instagram Reel, 30–60 seconds — 1]
- [e.g. Instagram Stories, 3 frames — 1 set]

Required: [hashtags, @mentions, link in bio, disclosure text]
Not permitted: [competitor names, specific topics]

TIMELINE
- Draft due: [date]
- Revisions by: [date]
- Approved to post: [date]
- Go-live: [date]

CONTACTS
[Name and email for draft submissions and questions]
</pre>

<h2>How to Deliver the Brief</h2>

<p>A PDF or structured document is better than a long email. It is easier to reference later and signals professionalism. If you are using campaign management software, most platforms have a dedicated brief section that keeps everything in one place and creates an audit trail.</p>

<p>Walk through the brief on a call if the creator is new to working with you or the campaign is complex. It takes fifteen minutes and prevents a lot of back-and-forth later.</p>

<p>${il('how-to-manage-multiple-influencer-marketing-clients', 'Learn how to keep briefs and approvals organised across multiple clients')} as your campaign volume grows.</p>
    `,
    faqs: [
      {
        question: 'How long should an influencer brief be?',
        answer: 'One to two pages for most campaigns. If you need more than that, you are probably including information that belongs in the contract or the brand guidelines, not the brief.',
      },
      {
        question: 'Should I include a script in the influencer brief?',
        answer: 'Generally no. Scripted content sounds scripted, and audiences notice. Provide key messages and talking points instead. Reserve scripts for very specific use cases like direct-response ads.',
      },
      {
        question: 'Do I need a separate brief for each creator?',
        answer: 'The campaign-level information can be the same, but deliverables and timelines should be personalised. If you are briefing many creators, software with brief templates saves significant time.',
      },
      {
        question: 'What should I do if a creator ignores the brief?',
        answer: 'Address it directly and quickly — the longer you wait, the closer you get to the deadline. If it is a pattern, factor brief adherence into your creator scoring so you know before hiring them again.',
      },
      {
        question: 'How do I brief creators without killing their creativity?',
        answer: 'Focus the brief on outcomes (what you need the content to achieve) rather than execution (exactly how to achieve it). Give them the constraints that matter and leave the creative decisions to them.',
      },
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'tiktok-influencer-marketing-guide',
    title: 'TikTok Influencer Marketing: A Practical Guide for Agencies',
    description: 'TikTok plays by different rules than Instagram or YouTube. This guide covers how agencies can build effective TikTok influencer campaigns, from creator selection to measurement.',
    date: '2026-06-20',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Guides',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432',
    relatedSlugs: ['influencer-marketing-brief-template', 'how-to-measure-influencer-marketing-roi'],
    images: [
      { url: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Person creating TikTok video content on smartphone', caption: 'TikTok content that performs tends to feel native to the platform — not like an ad that has been adapted for it' },
      { url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=960&h=480&auto=format&fit=crop&q=80', alt: 'Social media analytics showing TikTok performance metrics', caption: 'TikTok analytics reveal patterns that are often counterintuitive for teams used to Instagram benchmarks' },
    ],
    content: `
<p>TikTok is the most misunderstood platform in influencer marketing. Agencies that apply Instagram logic to TikTok campaigns consistently underperform. The content formats, creator dynamics, measurement approaches, and audience behaviour are all different enough to require a separate playbook.</p>

<p>This guide covers what actually works on TikTok for agency campaigns, and what most agencies get wrong.</p>

<h2>Why TikTok Is Different</h2>

<p>On Instagram, a creator's follower count is the primary distribution mechanism. Their followers see their content. Reach is largely predictable.</p>

<p>On TikTok, distribution is algorithmic. The For You Page shows content to people who are not following the creator. A creator with 10,000 followers can have a video reach 2 million people if the algorithm decides it is good. A creator with 2 million followers can have a video reach 5,000 people if early engagement signals are weak.</p>

<p>This has significant implications for how you select creators and how you measure performance.</p>

<h2>Creator Selection on TikTok</h2>

<p>On Instagram, follower count is a useful starting point. On TikTok, it is close to irrelevant. What matters:</p>

<ul>
  <li><strong>Video view rate:</strong> What percentage of followers (or average recent viewers) actually watch the video? Low view rates signal an account the algorithm has deprioritised.</li>
  <li><strong>Completion rate:</strong> What proportion of viewers watch to the end? High completion rates are the primary signal TikTok uses to decide whether to push content further.</li>
  <li><strong>Comment quality:</strong> Are people leaving substantive comments or just emojis? Genuine conversation signals that the creator has an engaged community, not just a passive audience.</li>
  <li><strong>Recent content performance:</strong> TikTok accounts can go cold. A creator with impressive historical numbers but declining recent performance may no longer have the algorithm's favour.</li>
</ul>

<h2>Content That Works on TikTok</h2>

<p>The clearest pattern across successful TikTok brand integrations is that they feel native. The creator is doing something they would normally do — a reaction video, a day-in-the-life, a tutorial, a comedic bit — and the brand or product is integrated naturally rather than inserted.</p>

<p>The formats that consistently underperform are the ones that look like ads: polished production, formal voiceover, straightforward product demonstrations without personality. TikTok audiences are extremely good at identifying content that was made for a brand rather than for them.</p>

<p>Practical guidance for briefs:</p>
<ul>
  <li>Give creators the objective and key message, not a storyboard</li>
  <li>Ask them what format they think would work for their audience</li>
  <li>Allow for reshoots — first drafts of TikTok content are rarely the best version</li>
  <li>Do not mandate a specific posting time — let the creator post when their audience is active</li>
</ul>

<h2>Measurement on TikTok</h2>

<p>Because reach is algorithmic rather than follower-based, traditional influencer metrics need adjustment.</p>

<p><strong>Do not use:</strong> follower count as a reach predictor, or CPM calculations based on follower count.</p>

<p><strong>Do use:</strong> actual video views, completion rate, click-through on link in bio (if used), unique discount code redemptions, and for awareness campaigns, branded search volume uplift during and after the campaign.</p>

<p>Reporting to clients on TikTok requires some education. Most clients still think in Instagram terms. Explain upfront that a 50,000-follower TikTok creator might deliver 500,000 views on a good video, and that this is a feature of the platform, not an anomaly.</p>

<h2>TikTok-Specific Considerations</h2>

<h3>Spark Ads</h3>
<p>TikTok Spark Ads let you boost organic creator content as a paid ad. This is one of the most effective tactics available — the content looks native because it is, but it gets paid distribution. If a piece of organic content performs well, running Spark Ads behind it can multiply the impact significantly. Agencies should build this option into their campaign proposals from the start.</p>

<h3>Sound</h3>
<p>TikTok is watched with sound on far more than other platforms. If your campaign involves product demonstration or narrative, audio quality matters. Creators recording in noisy environments produce content that underperforms even if the visual content is strong.</p>

<h3>Hashtags</h3>
<p>Unlike Instagram, hashtag strategy on TikTok has a minimal effect on distribution. The algorithm learns from engagement behaviour, not tags. Do not mandate a long list of hashtags — it looks spammy and does not help performance.</p>

<h2>Building a TikTok Creator Roster</h2>

<p>The agencies that perform best on TikTok tend to work repeatedly with a smaller group of creators they understand well, rather than constantly testing new ones. Once you find creators whose audience and content style fit a client's brand, investing in the relationship pays off over multiple campaigns.</p>

<p>${il('influencer-marketing-brief-template', 'Use a strong brief format to set TikTok creators up for success')} from the start of each campaign.</p>
    `,
    faqs: [
      {
        question: 'How many followers does a TikTok creator need for brand partnerships?',
        answer: 'There is no minimum. Micro-creators with 10,000-50,000 followers often outperform larger accounts because their content completion rates are higher and their audience is more engaged. Focus on engagement metrics, not follower count.',
      },
      {
        question: 'How do you measure TikTok influencer campaign performance?',
        answer: 'Use actual video views, completion rate, and conversion signals like unique codes or link-in-bio clicks. Follower-based metrics like reach estimates are unreliable on TikTok because distribution is algorithmic.',
      },
      {
        question: 'What is a TikTok Spark Ad?',
        answer: 'A Spark Ad boosts an existing organic TikTok post as paid advertising. Because the content was originally created organically, it tends to look and feel more native than traditional ads. It is one of the most effective formats for brand-creator campaigns on TikTok.',
      },
      {
        question: 'Should influencers disclose paid TikTok content?',
        answer: 'Yes. Disclosure is legally required in most markets and TikTok has its own branded content policy that requires labelling. Agencies should make disclosure a mandatory part of every creator brief.',
      },
      {
        question: 'How long should TikTok influencer videos be?',
        answer: 'Completion rate is the key metric, so shorter videos that hold attention are usually better than longer ones that lose viewers halfway through. Most successful brand integrations run between 30 and 90 seconds, though this varies by content type.',
      },
    ],
  },

]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedSlugs?.length) return []
  return post.relatedSlugs
    .map(slug => getBlogPost(slug))
    .filter((p): p is BlogPost => p !== undefined)
}
