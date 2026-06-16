export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole: string
  category: string
  readTime: string
  coverImage?: string
  relatedSlugs?: string[]
  content: string
  faqs: { question: string; answer: string }[]
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Reusable inline-figure markup. Pexels CDN — no auth needed, stable URLs. */
function fig(pexelsId: number, alt: string, caption: string) {
  const src = `https://images.pexels.com/photos/${pexelsId}/pexels-photo-${pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  return `
<figure>
  <img src="${src}" alt="${alt}" loading="lazy" />
  <figcaption>${caption}</figcaption>
</figure>`
}

/** Internal-link helper for anchor text. */
function il(slug: string, text: string) {
  return `<a href="/resources/blog/${slug}">${text}</a>`
}

// ---------------------------------------------------------------------------
// Blog posts
// ---------------------------------------------------------------------------

export const blogPosts: BlogPost[] = [
  // =========================================================================
  // 1. What Is Influencer Marketing Software
  // =========================================================================
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
    relatedSlugs: [
      'how-to-measure-influencer-marketing-roi',
      'how-to-manage-multiple-influencer-marketing-clients',
    ],
    content: `
<h2>What Is Influencer Marketing Software?</h2>
<p>Influencer marketing software is a platform that helps brands, agencies, and marketing teams plan, execute, and measure influencer campaigns. Instead of managing creators through spreadsheets, email chains, and disconnected tools, influencer marketing software brings everything — discovery, outreach, contracts, content approvals, payments, and analytics — into one workspace.</p>

<p>For agencies specifically, influencer marketing software solves a distinct problem: ${il('how-to-manage-multiple-influencer-marketing-clients', 'managing multiple clients')}, each with their own roster of creators, approval workflows, budgets, and reporting needs. Without dedicated software, agencies waste enormous time on coordination overhead that should go toward strategy and results.</p>

${fig(3184291, 'Marketing agency team reviewing influencer campaign strategy on laptops', 'Influencer marketing software replaces spreadsheets and email chains with a single, structured workspace for your whole team')}

<h2>What Does Influencer Marketing Software Do?</h2>
<p>A good influencer marketing platform covers the full campaign lifecycle:</p>

<h3>1. Creator Discovery</h3>
<p>Finding the right influencers is the foundation of every campaign. Influencer marketing software gives you a searchable database of verified creators across Instagram, TikTok, YouTube, and other platforms. You can filter by niche, audience demographics, engagement rate, follower count, location, and more — and unlock contact details and audience insights when you find the right fit.</p>

<h3>2. Campaign Management</h3>
<p>Once you have found your creators, you need to ${il('how-to-write-an-influencer-brief', 'brief them')}, track deliverables, manage deadlines, and coordinate with your internal team and clients. Influencer marketing software replaces the chaos of email and Slack with structured campaign workflows — from brief creation to content delivery, all in one place.</p>

<h3>3. Approval Workflows</h3>
<p>Content approvals are where most agencies lose time. Influencer marketing software automates multi-stage approval flows: internal review first, then client sign-off. Every approval is tracked with an audit log so you always know where a piece of content stands and who approved it.</p>

<h3>4. Analytics and ROI Reporting</h3>
<p>Measuring ${il('how-to-measure-influencer-marketing-roi', 'influencer marketing ROI')} is notoriously difficult without the right tools. Platforms track reach, impressions, engagement, clicks, and conversions at the campaign and creator level — and let you generate professional client reports in one click.</p>

${fig(590022, 'Analytics dashboard on laptop showing influencer campaign performance metrics', 'One-click reporting turns raw campaign data into polished client decks — no manual spreadsheet work required')}

<h3>5. Finance and Payments</h3>
<p>Paying creators, tracking budgets, and managing multi-currency campaigns is a significant operational burden for agencies. Influencer marketing software centralizes budget allocation, expense tracking, and creator payments so your finance team is never chasing invoices.</p>

<h3>6. Client Portal</h3>
<p>Agencies need to give clients visibility without exposing internal operations. A client portal inside your influencer marketing platform lets clients review content, approve deliverables, and track campaign performance — without seeing your rates, margins, or internal communications.</p>

<h2>Who Uses Influencer Marketing Software?</h2>
<ul>
<li><strong>Marketing agencies</strong> — managing campaigns across multiple brand clients, often simultaneously</li>
<li><strong>In-house marketing teams</strong> — running brand ambassador programs or ongoing creator partnerships</li>
<li><strong>Content creators</strong> — tracking their brand deals, deliverables, and payments</li>
</ul>
<p>Agency use cases are the most complex because they require multi-client support, role-based access controls, and the ability to keep each client's data isolated from others. Purpose-built agency platforms like Truleado are designed with this complexity in mind.</p>

<h2>How Is Influencer Marketing Software Different from a CRM or Spreadsheet?</h2>
<p>A CRM tracks relationships. A spreadsheet tracks data. Influencer marketing software does both — and adds the campaign execution layer that neither can provide. Specifically, it handles structured approval workflows with audit trails, real-time campaign status across multiple clients, creator performance history across campaigns, integrated payment processing, client-facing portals, and pre-built analytics.</p>

<h2>What Should You Look for in Influencer Marketing Software?</h2>

<h3>Multi-client architecture</h3>
<p>Can the platform handle multiple clients with isolated data, separate approval chains, and different team permissions? Many platforms are designed for single-brand use and struggle when agencies try to scale across clients.</p>

<h3>End-to-end workflow coverage</h3>
<p>Does the platform cover the full campaign lifecycle, or will you still need separate tools for contracts, payments, or reporting? Every additional tool is another integration to maintain and another login for your team.</p>

<h3>Creator experience</h3>
<p>Creators are your supply chain. Platforms that give creators their own portal — where they can see briefs, submit content, and track payments — reduce the back-and-forth that bogs down campaign execution.</p>

<h2>Getting Started</h2>
<p>Truleado is influencer marketing software built specifically for agencies. It covers creator discovery, campaign management, multi-stage approvals, client portals, analytics, and finance management — all from one workspace. You can get started free — no credit card required.</p>
    `,
    faqs: [
      {
        question: 'What is influencer marketing software?',
        answer: 'Influencer marketing software is a platform that helps agencies and brands manage creator discovery, campaign execution, content approvals, analytics, and payments from one centralized workspace — replacing spreadsheets, email chains, and disconnected tools.',
      },
      {
        question: 'Who needs influencer marketing software?',
        answer: 'Marketing agencies running campaigns for multiple clients need it most urgently. In-house marketing teams managing ongoing creator partnerships also benefit significantly. Any team running more than 3–4 influencer campaigns at once will find spreadsheets insufficient.',
      },
      {
        question: 'How much does influencer marketing software cost?',
        answer: 'Pricing varies widely. Some platforms charge per creator, per campaign, or per seat. Truleado offers full access free to start, with paid plans for larger agencies. Creators always use Truleado for free.',
      },
      {
        question: 'Can influencer marketing software track ROI?',
        answer: 'Yes. Good influencer marketing platforms track reach, impressions, engagement, clicks, and conversions at both the campaign and creator level, then surface that data in client-ready reports.',
      },
    ],
  },

  // =========================================================================
  // 2. Manage Multiple Clients
  // =========================================================================
  {
    slug: 'how-to-manage-multiple-influencer-marketing-clients',
    title: 'How to Manage Multiple Influencer Marketing Clients (Without Losing Your Mind)',
    description: 'Running influencer campaigns for multiple clients at once is one of the hardest operational challenges in agency work. Here is the system that actually works.',
    date: '2026-06-12',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Agency Operations',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    relatedSlugs: [
      'what-is-influencer-marketing-software',
      'how-to-write-an-influencer-brief',
    ],
    content: `
<h2>The Multi-Client Problem</h2>
<p>Managing influencer marketing campaigns for one client is manageable. Managing them for five, ten, or twenty clients simultaneously is an entirely different operational challenge — one that breaks most of the systems agencies start with.</p>

<p>When you have multiple clients running concurrent campaigns, a few things go wrong fast:</p>
<ul>
<li>Creator communications get mixed up across email threads</li>
<li>Content approvals pile up with no clear status visibility</li>
<li>Clients start asking for updates you do not have handy</li>
<li>Budgets across campaigns blur together in spreadsheets</li>
<li>Team members do not know who owns what</li>
</ul>

${fig(3182812, 'Agency team overwhelmed by multiple campaign workstreams across different clients', 'Without the right system, multi-client campaign management quickly becomes unsustainable — even for experienced teams')}

<p>The agencies that scale past this wall do it with systems, not heroics. The right ${il('what-is-influencer-marketing-software', 'influencer marketing software')} enforces these systems by architecture. Here is the playbook.</p>

<h2>1. Separate Client Data from Day One</h2>
<p>The most important structural decision you can make is keeping each client's data fully isolated from others. This means separate campaign workspaces, separate creator rosters, separate approval chains, and separate reporting views per client. In practice, this is nearly impossible to maintain in spreadsheets. Purpose-built influencer marketing software enforces this isolation by architecture — each client workspace is its own environment.</p>

<h2>2. Standardize Your Campaign Structure</h2>
<p>Every campaign your agency runs should follow the same structural template, regardless of the client: a standardized ${il('how-to-write-an-influencer-brief', 'influencer brief format')}, the same approval stages, consistent deliverable categories, and standard reporting metrics. When your team switches between clients throughout the day, cognitive overhead is the enemy. If every campaign is structured the same way, your team knows exactly where to look for what.</p>

<h2>3. Assign Clear Ownership with Role-Based Access</h2>
<p>Role-based access control lets you assign Account Managers to specific client accounts, give Operators access to campaign execution without client-level visibility, and give clients access to their own portal without exposing your internal operations.</p>

<h2>4. Build Approval Workflows Before You Need Them</h2>
<p>Most agencies set up approval workflows reactively. Build them before campaigns launch. A good multi-client approval system has two stages: internal review first, then client approval through their portal. Both stages should generate an audit trail.</p>

${fig(1181671, 'Organized agency workspace with structured workflow boards and campaign tracking', 'Approval workflows built before launch eliminate the frantic email chains that slow down most agencies')}

<h2>5. Give Clients a Portal, Not a Spreadsheet</h2>
<p>A client portal answers status questions without you lifting a finger. Clients log in, see their campaign status, review content awaiting approval, and track performance — all without emailing your team. If each of ten clients sends two status emails a week, that is 20+ interruptions per week. A portal eliminates most of them.</p>

<h2>6. Track Budgets at the Campaign Level</h2>
<p>You need to know at a glance how much has been allocated, spent, committed, and remaining — broken down per client, not aggregated across your whole agency. Multi-currency support matters here too for agencies working with international clients.</p>

<h2>7. Run Weekly Cross-Client Reviews</h2>
<p>A weekly 30-minute cross-client review lets your team surface blockers and flag campaigns that are behind schedule. For each active client: status (green, yellow, or red), blockers, and one action item. Keep it tight.</p>

<h2>The System That Holds It Together</h2>
<p>Truleado is built specifically for agencies managing multiple clients. Each client gets an isolated workspace with its own team assignments, approval workflows, creator roster, and reporting. Your team gets one dashboard across all clients. Clients get their own portal. Creators get their own portal.</p>
    `,
    faqs: [
      {
        question: 'How do you manage multiple influencer marketing clients at once?',
        answer: 'The key is isolated client workspaces, standardized campaign structures, role-based team access, automated approval workflows, client portals that reduce status questions, and campaign-level budget tracking. Purpose-built agency software enforces these systems by architecture.',
      },
      {
        question: 'How many influencer campaigns can one person manage?',
        answer: 'Without dedicated software, most campaign managers max out at 3–5 concurrent campaigns before quality degrades. With purpose-built influencer marketing software, a single Account Manager can typically handle 8–15 concurrent campaigns depending on complexity.',
      },
      {
        question: 'How do you keep client data separate in a multi-client agency?',
        answer: 'Use influencer marketing software with built-in client workspace isolation. Each client should have their own campaign workspace, creator roster, approval chain, and reporting view. Never share spreadsheets across clients — one copy-paste mistake can expose sensitive rate information.',
      },
    ],
  },

  // =========================================================================
  // 3. Measure ROI
  // =========================================================================
  {
    slug: 'how-to-measure-influencer-marketing-roi',
    title: 'How to Measure Influencer Marketing ROI: A Practical Guide for Agencies',
    description: 'Measuring influencer marketing ROI is one of the hardest questions agencies face. Here is a practical framework for tracking, calculating, and reporting it to clients.',
    date: '2026-06-14',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Analytics',
    readTime: '9 min read',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    relatedSlugs: [
      'what-is-earned-media-value',
      'what-is-influencer-marketing-software',
    ],
    content: `
<h2>Why Influencer Marketing ROI Is Hard to Measure</h2>
<p>Influencer marketing ROI is notoriously difficult to pin down — and that difficulty is often used as an excuse to avoid measuring it at all. But for agencies, the inability to show ROI is an existential threat. Clients who cannot see returns eventually cut budgets.</p>

<p>The measurement challenge comes from attribution gaps, platform data fragmentation across Instagram, TikTok, and YouTube, and the difference between brand awareness campaigns and direct response campaigns.</p>

<h2>The Two Types of Influencer Marketing ROI</h2>

<h3>Direct Response Campaigns</h3>
<p>These are campaigns with explicit conversion goals: sales, sign-ups, downloads, or leads. Measurement is relatively straightforward because you can tie influencer activity to specific outcomes using unique promo codes per creator, UTM-tagged tracking links, dedicated landing pages, and pixel-based attribution.</p>

<h3>Brand Awareness Campaigns</h3>
<p>These campaigns prioritize reach, impressions, brand sentiment, and audience growth. You measure them with total reach and impressions, engagement rate, ${il('what-is-earned-media-value', 'earned media value (EMV)')}, brand mention volume and sentiment, and follower growth during the campaign.</p>

<h2>The Core ROI Formula</h2>
<p>For direct response campaigns:</p>
<p><strong>ROI = (Revenue Generated − Campaign Cost) / Campaign Cost × 100</strong></p>
<p>Campaign cost should include creator fees, product or gifting costs, platform fees, agency management fees, and ad spend on boosted posts.</p>

${fig(669619, 'Business analytics dashboard with charts showing influencer campaign ROI metrics', 'Track ROI at the creator level — not just the campaign level — to know exactly which partnerships are driving results')}

<h2>Key Metrics to Track at Every Campaign Stage</h2>

<h3>Pre-Launch</h3>
<ul>
<li>Creator audience demographics — does it match your target customer?</li>
<li>Creator engagement rate — aim for 2%+ on Instagram, 5%+ on TikTok</li>
<li>Creator audience authenticity score</li>
<li>Estimated reach based on historical post performance</li>
</ul>

<h3>During Campaign</h3>
<ul>
<li>Content submission rate — are creators delivering on time?</li>
<li>Content approval cycle time</li>
<li>Early engagement signals in the first 24 hours</li>
<li>Link click-through rate if tracking links are live</li>
</ul>

<h3>Post-Campaign</h3>
<ul>
<li>Total reach and impressions per creator and per campaign</li>
<li>Engagement rate vs. benchmark</li>
<li>Promo code redemptions or UTM-tagged conversions</li>
<li>Cost per engagement (CPE) and cost per acquisition (CPA)</li>
<li>Earned media value (EMV)</li>
<li>Return on ad spend (ROAS) if boosted posts were used</li>
</ul>

<h2>How to Calculate Earned Media Value</h2>
<p><strong>EMV = Total Impressions × (Industry CPM / 1,000)</strong></p>
<p>If a campaign generated 5 million impressions and your industry CPM is $8, EMV = $40,000. This gives clients a tangible dollar figure to compare against campaign spend. For a deeper dive, read our guide on ${il('what-is-earned-media-value', 'what earned media value actually means and when to use it')}.</p>

<h2>Setting Up Attribution Before Launch</h2>
<p>Most attribution failures happen because tracking infrastructure was not set up before the campaign launched. Before any campaign goes live: create unique UTM parameters per creator, set up unique promo codes per creator, verify your analytics platform is tracking conversions correctly, and set up a pixel or conversion event for the specific action you are measuring.</p>

${fig(2182981, 'Marketing analyst setting up attribution tracking and UTM parameters before campaign launch', 'Attribution infrastructure must be in place before launch — retroactive tracking always produces incomplete, unreliable data')}

<h2>How to Report ROI to Clients</h2>
<p>Client ROI reports should answer three questions: What did we set out to achieve? What did we actually achieve? What does that mean for the next campaign? Structure your report around campaign objectives, not platform metrics. Include a creator breakdown showing which creators over- or under-delivered and why.</p>

<h2>Using Software to Automate ROI Reporting</h2>
<p>The right ${il('what-is-influencer-marketing-software', 'influencer marketing software')} centralizes campaign data and generates client-ready reports in one click. Analytics are tracked in real time, creator performance is compared against pre-set benchmarks, and reports are formatted consistently across every client — saving hours per campaign cycle.</p>
    `,
    faqs: [
      {
        question: 'How do you measure influencer marketing ROI?',
        answer: 'For direct response campaigns: ROI = (Revenue Generated − Campaign Cost) / Campaign Cost × 100. For brand awareness campaigns, use earned media value (EMV), reach, impressions, and engagement rate. Always set up attribution tracking before the campaign launches.',
      },
      {
        question: 'What is a good ROI for influencer marketing?',
        answer: 'Industry benchmarks suggest $5–$6.50 returned per $1 spent on influencer marketing on average. Direct response campaigns with strong promo codes can exceed 10:1 ROI. Brand awareness campaigns are better measured by EMV and reach.',
      },
      {
        question: 'What metrics should you track for influencer marketing?',
        answer: 'Pre-launch: engagement rate, audience demographics, authenticity score. During: content submission rate, click-through rate. Post-campaign: total reach, impressions, engagement rate, CPE, CPA, promo code redemptions, and EMV.',
      },
      {
        question: 'How do you attribute sales to influencer marketing?',
        answer: 'Use unique promo codes per creator, UTM-tagged tracking links per creator and platform, dedicated landing pages, and pixel-based conversion tracking. Set up attribution infrastructure before the campaign launches — retroactive attribution is always incomplete.',
      },
    ],
  },

  // =========================================================================
  // 4. Write an Influencer Brief
  // =========================================================================
  {
    slug: 'how-to-write-an-influencer-brief',
    title: 'How to Write an Influencer Brief That Creators Actually Follow',
    description: 'A strong influencer brief is the difference between content that lands and reshoots that waste weeks. Here is exactly what to include and how to structure it.',
    date: '2026-06-16',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Guides',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    relatedSlugs: [
      'how-to-manage-multiple-influencer-marketing-clients',
      'what-is-influencer-marketing-software',
    ],
    content: `
<h2>What Is an Influencer Brief?</h2>
<p>An influencer brief is a document that gives a creator everything they need to produce on-brand content for a campaign — without requiring constant back-and-forth with your team. It covers the campaign objective, key messages, content requirements, posting guidelines, deadlines, and usage rights in one place.</p>

<p>A good brief is not a creative straitjacket. It is the minimum viable set of constraints that keeps content on-brand while leaving room for the creator to be themselves. Over-briefed creators produce stiff, inauthentic content. Under-briefed creators produce content that misses the mark and requires expensive reshoot rounds.</p>

<h2>Why Most Influencer Briefs Fail</h2>
<p>Most influencer briefs fail for one of three reasons: they are too long and overwhelming, too vague and open-ended, or they read like a legal document rather than a creative guide. The most common failure mode is burying the most important information — the campaign objective and the one thing the creator absolutely must communicate — somewhere in the middle of a five-page PDF. Creators scan briefs. If your key message is not near the top, it often does not make it into the content.</p>

${fig(265087, 'Blank notebook and pen on a desk — planning an influencer campaign creative brief', 'The best briefs are written from the creator\'s perspective: what do they need to know to do their best work?')}

<h2>What to Include in an Influencer Brief</h2>

<h3>1. Campaign Overview (1 paragraph)</h3>
<p>State the brand, the product or campaign, the target audience, and the campaign objective in plain language. Example: "We are launching a new line of reef-safe sunscreens targeting outdoor enthusiasts aged 25–40. The goal of this campaign is to drive awareness and link clicks to the product page."</p>

<h3>2. The One Key Message</h3>
<p>This is the most important section of any brief. Choose one thing you want audiences to take away from this content. Not three things. Not five. One. Campaigns that try to communicate multiple messages at once communicate none of them effectively. Write it in a single sentence: "[Product] helps [audience] do [thing] without [pain point]."</p>

<h3>3. Deliverables and Format</h3>
<p>Be specific. Vague deliverables produce vague content. Include: platform (Instagram, TikTok, YouTube), content format (Reel, Story, in-feed post, long-form video), quantity, minimum video length if applicable, aspect ratio and resolution requirements, and whether a link-in-bio is required.</p>

<h3>4. Mandatory Inclusions</h3>
<p>List the non-negotiables — elements that must appear in the content. Keep this list short. Every mandatory element you add is a constraint on the creator and a potential point of failure in review. Typical mandatory inclusions are: product name, key claim, promo code or link, and any required disclosures (e.g., #ad or #sponsored).</p>

<h3>5. Brand Voice and Tone</h3>
<p>Describe your brand voice in three adjectives. Then describe what it is not in three adjectives. Example: "Our brand is warm, direct, and grounded. We are not corporate, not overly formal, and never use slang." Include two or three example phrases or captions that hit the right tone.</p>

${fig(3183197, 'Brand and marketing team reviewing campaign creative brief together at a table', 'Aligning on brand voice before briefing creators prevents the most common reshoot scenario — content that looks nothing like your brand')}

<h3>6. Visual Guidelines</h3>
<p>Specify whether the product should be shown in use, whether faces need to be visible, whether outdoor or indoor settings are preferred, and any visual elements to avoid (competitor products, certain colors, specific settings).</p>

<h3>7. What Not to Say or Show</h3>
<p>An explicit do-not list prevents the most common compliance issues: competitor brand mentions, unsubstantiated health or performance claims, and anything that would trigger platform policy issues.</p>

<h3>8. Timeline and Deadlines</h3>
<p>State the content draft deadline, the review window (how long your team has to provide feedback), the approval deadline, and the go-live date. If there is a required posting window (e.g., must go live between 9am–12pm on a Tuesday), state it explicitly.</p>

<h3>9. Compensation and Payment Terms</h3>
<p>Specify the fee, any gifted product included, the payment timeline, and what triggers payment. Do not leave payment terms vague — it is the fastest way to damage creator relationships.</p>

<h3>10. Usage Rights</h3>
<p>State clearly what rights you are acquiring to the content: how long, which channels, whether paid amplification is permitted, and whether you can modify the content. Usage rights directly affect creator fees, so address this upfront.</p>

<h2>How Long Should an Influencer Brief Be?</h2>
<p>For Instagram and TikTok campaigns: 1–2 pages. YouTube integrations: 2–3 pages. Anything longer will not be read carefully. Split detailed brand guidelines into a separate reference document.</p>

<h2>Sending and Managing Briefs at Scale</h2>
<p>For agencies ${il('how-to-manage-multiple-influencer-marketing-clients', 'managing campaigns across multiple clients and creators')}, brief distribution quickly becomes an operational bottleneck. The right ${il('what-is-influencer-marketing-software', 'influencer marketing platform')} lets you attach briefs directly to creator assignments, track receipt confirmation, and receive content submissions — all in one place. No email threads, no version confusion.</p>
    `,
    faqs: [
      {
        question: 'What is an influencer brief?',
        answer: 'An influencer brief is a document that gives a creator everything they need to produce on-brand content for a campaign — covering the campaign objective, key messages, deliverables, mandatory inclusions, tone, deadlines, and usage rights in one place.',
      },
      {
        question: 'What should be included in an influencer brief?',
        answer: 'A complete influencer brief includes: campaign overview, one key message, deliverables and format specifications, mandatory inclusions, brand voice and tone guidance, visual guidelines, a do-not list, timeline and deadlines, compensation and payment terms, and usage rights.',
      },
      {
        question: 'How long should an influencer brief be?',
        answer: 'For Instagram and TikTok campaigns, 1–2 pages is ideal. YouTube integrations may require 2–3 pages. Anything longer than 3 pages will not be read carefully by creators.',
      },
      {
        question: 'How do you send briefs to influencers?',
        answer: 'The most scalable approach is through a creator portal built into your influencer marketing software, where briefs are attached directly to each creator assignment. This ensures the right creator sees the right brief, can confirm receipt, and submits content without email threads.',
      },
      {
        question: 'Why do influencer campaigns need a brief?',
        answer: 'Without a brief, creators make assumptions about format, tone, key messages, and mandatory disclosures — leading to content that misses the mark, compliance issues, and costly reshoot rounds.',
      },
    ],
  },

  // =========================================================================
  // 5. What Is Earned Media Value
  // =========================================================================
  {
    slug: 'what-is-earned-media-value',
    title: 'What Is Earned Media Value? EMV Explained for Influencer Marketers',
    description: 'Earned media value (EMV) is one of the most cited — and most misunderstood — metrics in influencer marketing. Here is what it actually measures and when to use it.',
    date: '2026-06-16',
    author: 'Peter Hall',
    authorRole: 'Head of Content, Truleado',
    category: 'Analytics',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    relatedSlugs: [
      'how-to-measure-influencer-marketing-roi',
      'what-is-influencer-marketing-software',
    ],
    content: `
<h2>What Is Earned Media Value?</h2>
<p>Earned media value (EMV) is a metric that estimates the monetary value of organic exposure generated by influencer content, social mentions, press coverage, or user-generated content — based on what it would have cost to generate the same exposure through paid advertising.</p>

<p>In influencer marketing, EMV is most commonly used to put a dollar figure on the reach and impressions generated by a creator campaign. If your campaign generated 10 million impressions and the equivalent paid media would have cost $80,000 to buy, the campaign EMV is $80,000.</p>

<h2>The Standard EMV Formula</h2>
<p><strong>EMV = Total Impressions × (CPM / 1,000)</strong></p>
<p>Where CPM (cost per thousand impressions) is the benchmark rate for paid media in your industry or on that specific platform.</p>

<p>Example: A campaign generates 8 million impressions across Instagram and TikTok. Your industry benchmark CPM is $9. <strong>EMV = 8,000,000 × (9 / 1,000) = $72,000.</strong></p>

${fig(3184338, 'Financial analyst reviewing earned media value calculations and marketing ROI metrics on a chart', 'EMV converts raw impressions into a dollar figure clients can benchmark directly against their paid media spend')}

<p>Some agencies weight impressions differently by platform or weight engagement actions (likes, comments, shares, saves) at a higher CPM than passive impressions. These variations are valid — just document your methodology and apply it consistently across all clients and campaigns.</p>

<h2>Why Agencies Use EMV</h2>
<p>EMV solves a specific reporting problem: how do you justify influencer marketing spend to a client who is comparing it to paid social? Saying the campaign generated "4.2 million impressions" is abstract. Saying the campaign generated "$38,000 in earned media value against a $25,000 investment" is concrete and benchmarkable.</p>

<p>EMV is especially useful for brand awareness campaigns where there are no direct conversion events to track. For conversion-focused campaigns, pair EMV with the ${il('how-to-measure-influencer-marketing-roi', 'full ROI calculation framework')} to give clients the complete picture.</p>

<h2>What Is a Good EMV for Influencer Marketing?</h2>
<p>A commonly cited benchmark is an EMV-to-spend ratio of at least 3:1 — meaning for every $1 spent on a creator campaign, you generate at least $3 in earned media value. Strong campaigns regularly hit 5:1 or higher. Campaigns featuring high-follower macro influencers on viral content can exceed 10:1 EMV ratios. These benchmarks vary significantly by industry, platform, and campaign type.</p>

<h2>EMV vs. ROI: Key Differences</h2>
<p><strong>EMV</strong> measures the estimated cost equivalent of exposure generated. It tells you how much it would have cost to buy the same reach through paid media. It does not measure revenue, conversions, or actual business impact.</p>

<p><strong>ROI</strong> measures actual returns against actual spend: (Revenue − Cost) / Cost. It requires attribution data — promo codes, UTM-tagged links, or pixel-based conversion tracking — to calculate accurately. See our full guide on ${il('how-to-measure-influencer-marketing-roi', 'measuring influencer marketing ROI')} for the complete framework.</p>

${fig(3182796, 'Business team reviewing campaign performance data comparing earned media value versus paid media ROI', 'Use EMV for awareness campaigns and ROI for conversion campaigns — the two metrics answer different questions')}

<h2>The Limitations of EMV</h2>
<ul>
<li><strong>It is not revenue.</strong> A high EMV does not mean the campaign drove sales.</li>
<li><strong>CPM benchmarks vary widely.</strong> Industry CPMs range from $2 to $30+ depending on category and audience quality. Make your methodology transparent.</li>
<li><strong>Impressions are not equivalent to paid ad impressions.</strong> Organic influencer content lacks the targeting precision or frequency control of paid media. The comparison is approximate by design.</li>
<li><strong>Platform data can be incomplete.</strong> Instagram Stories views are only available for a limited window — pull data late and impressions are understated.</li>
</ul>

<h2>Tracking EMV Across Campaigns</h2>
<p>Tracking EMV manually is time-intensive and error-prone. The right ${il('what-is-influencer-marketing-software', 'influencer marketing platform')} centralizes campaign impression data and calculates EMV automatically using your agency benchmark CPMs — producing consistent, client-ready reports across all clients without manual spreadsheet work.</p>
    `,
    faqs: [
      {
        question: 'What is earned media value (EMV)?',
        answer: 'Earned media value (EMV) is a metric that estimates the monetary value of organic exposure generated by influencer content — calculated by multiplying total impressions by a benchmark CPM rate. It represents what the same reach would have cost to generate through paid advertising.',
      },
      {
        question: 'How do you calculate earned media value?',
        answer: 'The standard EMV formula is: EMV = Total Impressions × (CPM / 1,000). Use the benchmark CPM for paid media in your industry or on the relevant platform. For example, 5 million impressions at an $8 CPM = $40,000 in EMV.',
      },
      {
        question: 'What is a good earned media value for influencer marketing?',
        answer: 'A commonly cited benchmark is a 3:1 EMV-to-spend ratio — $3 in EMV for every $1 invested. Strong influencer campaigns often reach 5:1 or higher. Benchmarks vary by industry and platform.',
      },
      {
        question: 'What is the difference between EMV and ROI?',
        answer: 'EMV measures the estimated cost equivalent of earned exposure — not revenue. ROI measures actual returns: (Revenue − Cost) / Cost. EMV is a proxy metric for awareness campaigns; ROI requires attribution data and is used for conversion-focused campaigns.',
      },
      {
        question: 'Is earned media value an accurate metric?',
        answer: 'EMV is a useful proxy but not a precise measure of business impact. Its accuracy depends heavily on the CPM benchmark used and platform data completeness. Always disclose your methodology to clients and pair EMV with engagement metrics for a fuller picture.',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
