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
  content: string
  faqs: { question: string; answer: string }[]
}

export const blogPosts: BlogPost[] = [
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
    content: `
<h2>What Is Influencer Marketing Software?</h2>
<p>Influencer marketing software is a platform that helps brands, agencies, and marketing teams plan, execute, and measure influencer campaigns. Instead of managing creators through spreadsheets, email chains, and disconnected tools, influencer marketing software brings everything — discovery, outreach, contracts, content approvals, payments, and analytics — into one workspace.</p>

<p>For agencies specifically, influencer marketing software solves a distinct problem: managing multiple clients, each with their own roster of creators, approval workflows, budgets, and reporting needs. Without dedicated software, agencies waste enormous time on coordination overhead that should go toward strategy and results.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=500&q=80&auto=format&fit=crop" alt="Social media analytics dashboard on a laptop showing influencer campaign metrics" loading="lazy" />
  <figcaption>Modern influencer marketing platforms surface real-time metrics across every creator and campaign in one place</figcaption>
</figure>

<h2>What Does Influencer Marketing Software Do?</h2>
<p>A good influencer marketing platform covers the full campaign lifecycle:</p>

<h3>1. Creator Discovery</h3>
<p>Finding the right influencers is the foundation of every campaign. Influencer marketing software gives you a searchable database of verified creators across Instagram, TikTok, YouTube, and other platforms. You can filter by niche, audience demographics, engagement rate, follower count, location, and more — and unlock contact details and audience insights when you find the right fit.</p>

<h3>2. Campaign Management</h3>
<p>Once you have found your creators, you need to brief them, track deliverables, manage deadlines, and coordinate with your internal team and clients. Influencer marketing software replaces the chaos of email and Slack with structured campaign workflows — from brief creation to content delivery, all in one place.</p>

<h3>3. Approval Workflows</h3>
<p>Content approvals are where most agencies lose time. Influencer marketing software automates multi-stage approval flows: internal review first, then client sign-off. Every approval is tracked with an audit log so you always know where a piece of content stands and who approved it.</p>

<h3>4. Analytics and ROI Reporting</h3>
<p>Measuring influencer marketing ROI is notoriously difficult without the right tools. Platforms track reach, impressions, engagement, clicks, and conversions at the campaign and creator level — and let you generate professional client reports in one click.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=500&q=80&auto=format&fit=crop" alt="Business analytics and reporting dashboard with charts and graphs" loading="lazy" />
  <figcaption>One-click ROI reporting turns raw campaign data into client-ready decks — no manual spreadsheet work required</figcaption>
</figure>

<h3>5. Finance and Payments</h3>
<p>Paying creators, tracking budgets, and managing multi-currency campaigns is a significant operational burden for agencies. Influencer marketing software centralizes budget allocation, expense tracking, and creator payments so your finance team is never chasing invoices.</p>

<h3>6. Client Portal</h3>
<p>Agencies need to give clients visibility without exposing internal operations. A client portal inside your influencer marketing platform lets clients review content, approve deliverables, and track campaign performance — without seeing your rates, margins, or internal communications.</p>

<h2>Who Uses Influencer Marketing Software?</h2>
<p>Influencer marketing software is used by three main groups:</p>
<ul>
<li><strong>Marketing agencies</strong> — managing campaigns across multiple brand clients, often simultaneously</li>
<li><strong>In-house marketing teams</strong> — running brand ambassador programs or ongoing creator partnerships</li>
<li><strong>Content creators</strong> — tracking their brand deals, deliverables, and payments</li>
</ul>

<p>Agency use cases are the most complex because they require multi-client support, role-based access controls, and the ability to keep each client data isolated from others. Purpose-built agency platforms like Truleado are designed with this complexity in mind.</p>

<h2>How Is Influencer Marketing Software Different from a CRM or Spreadsheet?</h2>
<p>A CRM tracks relationships. A spreadsheet tracks data. Influencer marketing software does both — and adds the campaign execution layer that neither can provide.</p>

<p>Specifically, influencer marketing software handles:</p>
<ul>
<li>Structured approval workflows with audit trails</li>
<li>Real-time campaign status across multiple clients</li>
<li>Creator performance history across campaigns</li>
<li>Integrated payment processing and budget tracking</li>
<li>Client-facing portals with controlled visibility</li>
<li>Pre-built analytics and reporting templates</li>
</ul>

<h2>What Should You Look for in Influencer Marketing Software?</h2>
<p>When evaluating influencer marketing platforms, agencies should prioritize:</p>

<h3>Multi-client architecture</h3>
<p>Can the platform handle multiple clients with isolated data, separate approval chains, and different team permissions? Many platforms are designed for single-brand use and struggle when agencies try to scale across clients.</p>

<h3>End-to-end workflow coverage</h3>
<p>Does the platform cover the full campaign lifecycle, or will you still need separate tools for contracts, payments, or reporting? Every additional tool is another integration to maintain and another login for your team.</p>

<h3>Client portal capabilities</h3>
<p>A good client portal lets clients approve content and track performance without accessing your internal workspace. This boundary is critical for agencies that manage sensitive pricing or multi-client operations.</p>

<h3>Creator experience</h3>
<p>Creators are your supply chain. Platforms that give creators their own portal — where they can see briefs, submit content, and track payments — reduce the back-and-forth that bogs down campaign execution.</p>

<h2>Why Influencer Marketing Software Matters Now</h2>
<p>The influencer marketing industry is projected to exceed $30 billion globally by 2030. As brand investment in creator partnerships grows, the agencies that win will be the ones that can operate efficiently at scale — running more campaigns, for more clients, with faster turnaround and better reporting.</p>

<h2>Getting Started</h2>
<p>Truleado is influencer marketing software built specifically for agencies. It covers creator discovery, campaign management, multi-stage approvals, client portals, analytics, and finance management — all from one workspace. Creators get their own free portal. Clients get a secure approval environment. You can get started free — no credit card required.</p>
    `,
    faqs: [
      {
        question: 'What is influencer marketing software?',
        answer: 'Influencer marketing software is a platform that helps agencies and brands manage creator discovery, campaign execution, content approvals, analytics, and payments from one centralized workspace — replacing spreadsheets, email chains, and disconnected tools.'
      },
      {
        question: 'Who needs influencer marketing software?',
        answer: 'Marketing agencies running campaigns for multiple clients need it most urgently. In-house marketing teams managing ongoing creator partnerships also benefit significantly. Any team running more than 3-4 influencer campaigns at once will find spreadsheets insufficient.'
      },
      {
        question: 'How much does influencer marketing software cost?',
        answer: 'Pricing varies widely. Some platforms charge per creator, per campaign, or per seat. Truleado offers full access free to start, with paid plans for larger agencies. Creators always use Truleado for free.'
      },
      {
        question: 'Can influencer marketing software track ROI?',
        answer: 'Yes. Good influencer marketing platforms track reach, impressions, engagement, clicks, and conversions at both the campaign and creator level, then surface that data in client-ready reports.'
      }
    ]
  },
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

<figure>
  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=500&q=80&auto=format&fit=crop" alt="Organized remote work setup with multiple screens showing project management tools" loading="lazy" />
  <figcaption>Agencies that scale past 5 clients do it with systems — not by working harder</figcaption>
</figure>

<p>The agencies that scale past this wall do it with systems, not heroics. Here is the system that works.</p>

<h2>1. Separate Client Data from Day One</h2>
<p>The most important structural decision you can make is keeping each client data fully isolated from others. This means separate campaign workspaces, separate creator rosters, separate approval chains, and separate reporting views per client.</p>

<p>In practice, this is nearly impossible to maintain in spreadsheets. Purpose-built influencer marketing software enforces this isolation by architecture — each client workspace is its own environment.</p>

<h2>2. Standardize Your Campaign Structure</h2>
<p>Every campaign your agency runs should follow the same structural template, regardless of the client: a standardized brief format, the same approval stages, consistent deliverable categories, and standard reporting metrics.</p>

<p>When your team switches between clients throughout the day, cognitive overhead is the enemy. If every campaign is structured the same way, your team knows exactly where to look for what.</p>

<h2>3. Assign Clear Ownership with Role-Based Access</h2>
<p>Role-based access control lets you assign Account Managers to specific client accounts, give Operators access to campaign execution without client-level visibility, and give clients access to their own portal without exposing your internal operations.</p>

<h2>4. Build Approval Workflows Before You Need Them</h2>
<p>Most agencies set up approval workflows reactively. Build them before campaigns launch. A good multi-client approval system has two stages: internal review first, then client approval through their portal. Both stages should generate an audit trail.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&q=80&auto=format&fit=crop" alt="Marketing team collaborating around a table reviewing campaign materials" loading="lazy" />
  <figcaption>Structured approval workflows replace chaotic email threads — every piece of content has a clear status and owner</figcaption>
</figure>

<h2>5. Give Clients a Portal, Not a Spreadsheet</h2>
<p>A client portal answers status questions without you lifting a finger. Clients log in, see their campaign status, review content awaiting approval, and track performance — all without emailing your team. If each of ten clients sends two status emails a week, that is 20+ interruptions. A portal eliminates most of them.</p>

<h2>6. Track Budgets at the Campaign Level</h2>
<p>You need to know at a glance how much has been allocated, spent, committed, and remaining — broken down per client, not aggregated across your whole agency. Multi-currency support matters here too for agencies working with international clients.</p>

<h2>7. Run Weekly Cross-Client Reviews</h2>
<p>A weekly 30-minute cross-client review lets your team surface blockers and flag campaigns that are behind schedule. For each active client: status (green, yellow, or red), any blockers, and one action item. Keep it tight.</p>

<h2>The System That Holds It Together</h2>
<p>Truleado is built specifically for agencies managing multiple clients. Each client gets an isolated workspace with its own team assignments, approval workflows, creator roster, and reporting. Your team gets one dashboard across all clients. Clients get their own portal. Creators get their own portal.</p>
    `,
    faqs: [
      {
        question: 'How do you manage multiple influencer marketing clients at once?',
        answer: 'The key is isolated client workspaces, standardized campaign structures, role-based team access, automated approval workflows, client portals that reduce status questions, and campaign-level budget tracking. Purpose-built agency software enforces these systems by architecture.'
      },
      {
        question: 'How many influencer campaigns can one person manage?',
        answer: 'Without dedicated software, most campaign managers max out at 3-5 concurrent campaigns before quality degrades. With purpose-built influencer marketing software, a single Account Manager can typically handle 8-15 concurrent campaigns depending on complexity.'
      },
      {
        question: 'How do you keep client data separate in a multi-client agency?',
        answer: 'Use influencer marketing software with built-in client workspace isolation. Each client should have their own campaign workspace, creator roster, approval chain, and reporting view. Never share spreadsheets across clients — one copy-paste mistake can expose sensitive rate information.'
      }
    ]
  },
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
    content: `
<h2>Why Influencer Marketing ROI Is Hard to Measure</h2>
<p>Influencer marketing ROI is notoriously difficult to pin down — and that difficulty is often used as an excuse to avoid measuring it at all. But for agencies, the inability to show ROI is an existential threat. Clients who cannot see returns eventually cut budgets.</p>

<p>The measurement challenge comes from attribution gaps, platform data fragmentation across Instagram, TikTok, and YouTube, and the difference between brand awareness campaigns and direct response campaigns.</p>

<h2>The Two Types of Influencer Marketing ROI</h2>

<h3>Direct Response Campaigns</h3>
<p>These are campaigns with explicit conversion goals: sales, sign-ups, downloads, or leads. Measurement is relatively straightforward because you can tie influencer activity to specific outcomes using unique promo codes per creator, UTM-tagged tracking links, dedicated landing pages, and pixel-based attribution.</p>

<h3>Brand Awareness Campaigns</h3>
<p>These campaigns prioritize reach, impressions, brand sentiment, and audience growth. You measure them with total reach and impressions, engagement rate, earned media value (EMV), brand mention volume and sentiment, and follower growth during the campaign.</p>

<h2>The Core ROI Formula</h2>
<p>For direct response campaigns:</p>
<p><strong>ROI = (Revenue Generated - Campaign Cost) / Campaign Cost x 100</strong></p>
<p>Campaign cost should include creator fees, product or gifting costs, platform fees, agency management fees, and ad spend on boosted posts.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=500&q=80&auto=format&fit=crop" alt="Business analytics dashboard with performance metrics and ROI charts" loading="lazy" />
  <figcaption>Real-time campaign dashboards let agencies track ROI at the creator level — not just at the campaign level</figcaption>
</figure>

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
<p><strong>EMV = Total Impressions x (Industry CPM / 1,000)</strong></p>
<p>If a campaign generated 5 million impressions and your industry CPM is $8, EMV = $40,000. This gives clients a tangible dollar figure to compare against campaign spend — useful for brand awareness campaigns.</p>

<h2>Setting Up Attribution Before Launch</h2>
<p>Most attribution failures happen because tracking infrastructure was not set up before the campaign launched. Before any campaign goes live: create unique UTM parameters per creator, set up unique promo codes per creator, verify your analytics platform is tracking conversions correctly, and set up a pixel or conversion event for the specific action you are measuring.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=900&h=500&q=80&auto=format&fit=crop" alt="Marketing attribution and conversion tracking setup with multiple data sources" loading="lazy" />
  <figcaption>Attribution infrastructure must be set up before launch — retroactive tracking always produces incomplete data</figcaption>
</figure>

<h2>How to Report ROI to Clients</h2>
<p>Client ROI reports should answer three questions: What did we set out to achieve? What did we actually achieve? What does that mean for the next campaign? Structure your report around campaign objectives, not platform metrics. Include a creator breakdown showing which creators over- or under-delivered and why.</p>

<h2>Using Software to Automate ROI Reporting</h2>
<p>Influencer marketing software like Truleado centralizes campaign data and generates client-ready reports in one click. Analytics are tracked in real time, creator performance is compared against pre-set benchmarks, and reports are formatted consistently across every client — saving hours per campaign cycle.</p>
    `,
    faqs: [
      {
        question: 'How do you measure influencer marketing ROI?',
        answer: 'For direct response campaigns: ROI = (Revenue Generated - Campaign Cost) / Campaign Cost x 100. For brand awareness campaigns, use earned media value (EMV), reach, impressions, and engagement rate. Always set up attribution tracking before the campaign launches.'
      },
      {
        question: 'What is a good ROI for influencer marketing?',
        answer: 'Industry benchmarks suggest $5-$6.50 returned per $1 spent on influencer marketing on average. Direct response campaigns with strong promo codes can exceed 10:1 ROI. Brand awareness campaigns are better measured by EMV and reach.'
      },
      {
        question: 'What metrics should you track for influencer marketing?',
        answer: 'Pre-launch: engagement rate, audience demographics, authenticity score. During: content submission rate, click-through rate. Post-campaign: total reach, impressions, engagement rate, CPE, CPA, promo code redemptions, and EMV.'
      },
      {
        question: 'How do you attribute sales to influencer marketing?',
        answer: 'Use unique promo codes per creator, UTM-tagged tracking links per creator and platform, dedicated landing pages, and pixel-based conversion tracking. Set up attribution infrastructure before the campaign launches — retroactive attribution is always incomplete.'
      }
    ]
  },
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
    content: `
<h2>What Is an Influencer Brief?</h2>
<p>An influencer brief is a document that gives a creator everything they need to produce on-brand content for a campaign — without requiring constant back-and-forth with your team. It covers the campaign objective, key messages, content requirements, posting guidelines, deadlines, and usage rights in one place.</p>

<p>A good brief is not a creative straitjacket. It is the minimum viable set of constraints that keeps content on-brand while leaving room for the creator to be themselves. Over-briefed creators produce stiff, inauthentic content. Under-briefed creators produce content that misses the mark and requires expensive reshoot rounds.</p>

<h2>Why Most Influencer Briefs Fail</h2>
<p>Most influencer briefs fail for one of three reasons: they are too long and overwhelming, too vague and open-ended, or they read like a legal document rather than a creative guide.</p>

<p>The most common failure mode is burying the most important information — the campaign objective and the one thing the creator absolutely must communicate — somewhere in the middle of a five-page PDF. Creators scan briefs. If your key message is not near the top, it often does not make it into the content.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=500&q=80&auto=format&fit=crop" alt="Person writing notes in a notebook at a desk — planning a creative brief" loading="lazy" />
  <figcaption>The best briefs are written from the creator's perspective — what do they need to know to do their best work?</figcaption>
</figure>

<h2>What to Include in an Influencer Brief</h2>

<h3>1. Campaign Overview (1 paragraph)</h3>
<p>State the brand, the product or campaign, the target audience, and the campaign objective in plain language. Example: "We are launching a new line of reef-safe sunscreens targeting outdoor enthusiasts aged 25-40. The goal of this campaign is to drive awareness and link clicks to the product page."</p>

<h3>2. The One Key Message</h3>
<p>This is the most important section of any brief. Choose one thing you want audiences to take away from this content. Not three things. Not five. One. Campaigns that try to communicate multiple messages at once communicate none of them effectively.</p>
<p>Write it in a single sentence: "[Product] helps [audience] do [thing] without [pain point]."</p>

<h3>3. Deliverables and Format</h3>
<p>Be specific. Vague deliverables produce vague content. Include:</p>
<ul>
<li>Platform (Instagram, TikTok, YouTube, etc.)</li>
<li>Content format (Reel, Story, in-feed post, long-form video, etc.)</li>
<li>Quantity (e.g., 1 Reel + 3 Stories)</li>
<li>Minimum video length if applicable</li>
<li>Aspect ratio and resolution requirements</li>
<li>Whether a swipe-up link or link-in-bio is required</li>
</ul>

<h3>4. Mandatory Inclusions</h3>
<p>List the non-negotiables — elements that must appear in the content. Keep this list short. Every mandatory element you add is a constraint on the creator and a potential point of failure in review. Typical mandatory inclusions are: product name, key claim, promo code or link, and any required disclosures (e.g., #ad or #sponsored).</p>

<h3>5. Brand Voice and Tone</h3>
<p>Describe your brand voice in three adjectives. Then describe what it is not in three adjectives. Example: "Our brand is warm, direct, and grounded. We are not corporate, not overly formal, and never uses slang." Include two or three example phrases or captions that hit the right tone.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=500&q=80&auto=format&fit=crop" alt="Creative team reviewing campaign materials and brand guidelines in a meeting" loading="lazy" />
  <figcaption>Brand voice guidelines with examples prevent the most common brief failure — content that looks nothing like your brand</figcaption>
</figure>

<h3>6. Visual Guidelines</h3>
<p>Specify whether the product should be shown in use, whether it needs to be held a specific way, whether faces need to be visible, whether outdoor or indoor settings are preferred, and any visual elements to avoid (competitor products, certain colors, specific settings).</p>

<h3>7. What Not to Say or Show</h3>
<p>An explicit do-not list prevents the most common compliance issues. Include competitor brand mentions, unsubstantiated health or performance claims, specific visual contexts that conflict with brand positioning, and anything that would trigger platform policy issues.</p>

<h3>8. Timeline and Deadlines</h3>
<p>State the content draft deadline, the review window (how long your team has to provide feedback), the approval deadline, and the go-live date. If there is a required posting window (e.g., must go live between 9am-12pm on a Tuesday), state it explicitly.</p>

<h3>9. Compensation and Payment Terms</h3>
<p>Specify the fee, any gifted product included, the payment timeline, and what triggers payment (e.g., payment releases 14 days after approved content goes live). Do not leave payment terms vague — it is the fastest way to damage creator relationships.</p>

<h3>10. Usage Rights</h3>
<p>State clearly what rights you are acquiring to the content: how long, which channels, whether paid amplification is permitted, and whether you can modify the content. Usage rights directly affect creator fees, so address this upfront.</p>

<h2>How Long Should an Influencer Brief Be?</h2>
<p>A brief for a standard Instagram or TikTok campaign should be 1-2 pages maximum. YouTube integrations can run 2-3 pages due to the complexity of long-form content requirements. Anything longer than 3 pages will not be read carefully — split it into a main brief and a separate reference document for brand guidelines.</p>

<h2>Brief Mistakes That Cause Reshoots</h2>
<p>The three brief mistakes that most commonly lead to reshoots are: not specifying the platform format (creator shoots landscape video for a Reels campaign), not listing mandatory disclosures upfront (content goes live without #ad), and using subjective tone descriptors like "fun" without examples of what that means to your brand.</p>

<h2>Sending and Managing Briefs at Scale</h2>
<p>For agencies managing campaigns across multiple clients and creators, brief distribution quickly becomes an operational bottleneck. Sending briefs by email, chasing acknowledgment, and tracking which version each creator has received is unsustainable at scale.</p>

<p>Truleado lets you attach briefs directly to creator assignments within each campaign. Creators access their brief through their own portal, confirm receipt, and submit content directly — all in one place. No email threads, no version confusion, and no chasing acknowledgments. If you are running more than five creator campaigns at once, this kind of workflow automation is not a luxury, it is a necessity.</p>
    `,
    faqs: [
      {
        question: 'What is an influencer brief?',
        answer: 'An influencer brief is a document that gives a creator everything they need to produce on-brand content for a campaign — covering the campaign objective, key messages, deliverables, mandatory inclusions, tone, deadlines, and usage rights in one place. It replaces the back-and-forth that slows down campaign execution.'
      },
      {
        question: 'What should be included in an influencer brief?',
        answer: 'A complete influencer brief includes: campaign overview, one key message, deliverables and format specifications, mandatory inclusions, brand voice and tone guidance, visual guidelines, a do-not list, timeline and deadlines, compensation and payment terms, and usage rights.'
      },
      {
        question: 'How long should an influencer brief be?',
        answer: 'For Instagram and TikTok campaigns, 1-2 pages is ideal. YouTube integrations may require 2-3 pages. Anything longer than 3 pages will not be read carefully by creators. Move detailed brand guidelines to a separate reference document linked from the brief.'
      },
      {
        question: 'How do you send briefs to influencers?',
        answer: 'The most scalable approach is through a creator portal built into your influencer marketing software, where briefs are attached directly to each creator assignment. This ensures the right creator sees the right brief, can confirm receipt, and submits content without email threads or version confusion.'
      },
      {
        question: 'Why do influencer campaigns need a brief?',
        answer: 'Without a brief, creators make assumptions about format, tone, key messages, and mandatory disclosures — leading to content that misses the mark, compliance issues, and costly reshoot rounds. A good brief reduces revision cycles and protects both the brand and the creator.'
      }
    ]
  },
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
    content: `
<h2>What Is Earned Media Value?</h2>
<p>Earned media value (EMV) is a metric that estimates the monetary value of organic exposure generated by influencer content, social mentions, press coverage, or user-generated content — based on what it would have cost to generate the same exposure through paid advertising.</p>

<p>In influencer marketing, EMV is most commonly used to put a dollar figure on the reach and impressions generated by a creator campaign. If your campaign generated 10 million impressions and the equivalent paid media would have cost $80,000 to buy, the campaign EMV is $80,000.</p>

<h2>The Standard EMV Formula</h2>
<p><strong>EMV = Total Impressions x (CPM / 1,000)</strong></p>
<p>Where CPM (cost per thousand impressions) is the benchmark rate for paid media in your industry or on that specific platform.</p>

<p>Example: A campaign generates 8 million impressions across Instagram and TikTok. Your industry benchmark CPM is $9.</p>
<p>EMV = 8,000,000 x (9 / 1,000) = <strong>$72,000</strong></p>

<figure>
  <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&h=500&q=80&auto=format&fit=crop" alt="Financial planning and business metrics spreadsheet with ROI calculations" loading="lazy" />
  <figcaption>EMV converts raw impressions into a dollar figure clients can benchmark against their paid media spend</figcaption>
</figure>

<p>Some agencies weight impressions differently by platform (TikTok impressions vs. Instagram impressions may have different benchmark CPMs), or weight engagement actions (likes, comments, shares, saves) at a higher CPM than passive impressions. These variations are valid — just document your methodology and apply it consistently across all clients and campaigns.</p>

<h2>Why Agencies Use EMV</h2>
<p>EMV solves a specific reporting problem: how do you justify influencer marketing spend to a client who is comparing it to paid social? A client spending $25,000 on a creator campaign wants to understand the return in terms they can benchmark. Saying the campaign generated "4.2 million impressions" is abstract. Saying the campaign generated "$38,000 in earned media value against a $25,000 investment" is concrete.</p>

<p>EMV is especially useful for brand awareness campaigns where there are no direct conversion events to track. It provides a consistent, dollar-denominated metric that clients can compare across campaigns and against paid channel performance.</p>

<h2>What Is a Good EMV for Influencer Marketing?</h2>
<p>A commonly cited benchmark is an EMV-to-spend ratio of at least 3:1 — meaning for every $1 spent on a creator campaign, you generate at least $3 in earned media value. Strong campaigns regularly hit 5:1 or higher. Campaigns featuring high-follower macro influencers on viral content can exceed 10:1 EMV ratios.</p>

<p>These benchmarks vary significantly by industry, platform, and campaign type. Fashion and beauty campaigns typically see higher EMV multipliers because of strong visual content performance. B2B or niche campaigns may have lower reach but higher audience quality, making raw EMV a less meaningful indicator.</p>

<h2>EMV vs. ROI: Key Differences</h2>
<p>EMV and ROI measure different things, and conflating them is one of the most common reporting mistakes in influencer marketing.</p>

<p><strong>EMV</strong> measures the estimated cost equivalent of exposure generated. It tells you how much it would have cost to buy the same reach through paid media. It does not measure revenue, conversions, or actual business impact.</p>

<p><strong>ROI</strong> measures actual returns against actual spend: (Revenue - Cost) / Cost. It requires attribution data — promo codes, UTM-tagged links, or pixel-based conversion tracking — to calculate accurately.</p>

<p>Use EMV for brand awareness campaigns where direct attribution is not possible or not the primary goal. Use ROI for direct response campaigns where conversion tracking is in place.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=500&q=80&auto=format&fit=crop" alt="Business analytics charts showing the difference between reach metrics and conversion metrics" loading="lazy" />
  <figcaption>EMV and ROI answer different questions — use both in client reports to give a complete picture of campaign impact</figcaption>
</figure>

<h2>The Limitations of EMV</h2>
<p>EMV is a useful proxy metric, but it has real limitations that every agency should disclose to clients:</p>

<ul>
<li><strong>It is not revenue.</strong> A high EMV does not mean the campaign drove sales. Impressions and conversions are different things.</li>
<li><strong>CPM benchmarks vary widely.</strong> Industry CPMs range from $2 to $30+ depending on category, platform, and audience quality. The CPM you use directly determines the EMV — make your methodology transparent.</li>
<li><strong>Impressions are not equivalent to paid ad impressions.</strong> Organic influencer content is not delivered with the same targeting precision or frequency control as paid media. The comparison is approximate by design.</li>
<li><strong>Platform data can be incomplete.</strong> Instagram Stories views, for example, are only available for a limited window. If you pull data late, impressions will be understated.</li>
</ul>

<h2>When to Use EMV in Client Reports</h2>
<p>EMV belongs in client reports when: the campaign objective is brand awareness or reach, there is no direct attribution model in place, the client is comparing influencer spend to paid social budgets, or you need a consistent benchmark metric across campaigns.</p>

<p>EMV should not be your primary metric when: the campaign objective is conversion-based, attribution tracking is in place and producing clean data, or the client is sophisticated enough to understand that EMV is a proxy, not a revenue metric.</p>

<h2>Tracking EMV Across Campaigns</h2>
<p>Tracking EMV manually — pulling impression data from each platform, applying CPM benchmarks, and calculating totals per creator — is time-intensive and error-prone. Influencer marketing platforms like Truleado centralize campaign impression data and can calculate EMV automatically using your agency benchmark CPMs, producing consistent reports across all clients without manual spreadsheet work. This consistency is important: clients notice when the same metric is calculated differently across campaign reports.</p>
    `,
    faqs: [
      {
        question: 'What is earned media value (EMV)?',
        answer: 'Earned media value (EMV) is a metric that estimates the monetary value of organic exposure generated by influencer content or social mentions — calculated by multiplying total impressions by a benchmark CPM rate. It represents what the same reach would have cost to generate through paid advertising.'
      },
      {
        question: 'How do you calculate earned media value?',
        answer: 'The standard EMV formula is: EMV = Total Impressions x (CPM / 1,000). Use the benchmark CPM for paid media in your industry or on the relevant platform. For example, 5 million impressions at an $8 CPM = $40,000 in EMV. Document and apply your CPM benchmarks consistently across all campaigns.'
      },
      {
        question: 'What is a good earned media value for influencer marketing?',
        answer: 'A commonly cited benchmark is a 3:1 EMV-to-spend ratio — $3 in EMV for every $1 invested. Strong influencer campaigns often reach 5:1 or higher. Viral content or high-follower macro influencer campaigns can exceed 10:1. Benchmarks vary by industry and platform.'
      },
      {
        question: 'What is the difference between EMV and ROI?',
        answer: 'EMV measures the estimated cost equivalent of earned exposure — it tells you what the reach would have cost through paid media, but not what it generated in revenue. ROI measures actual returns: (Revenue - Cost) / Cost. EMV is a proxy metric for awareness campaigns; ROI requires attribution data and is used for conversion-focused campaigns.'
      },
      {
        question: 'Is earned media value an accurate metric?',
        answer: 'EMV is a useful proxy but not a precise measure of business impact. Its accuracy depends heavily on the CPM benchmark used, platform impression completeness, and whether organic impressions are truly comparable to paid placements. Always disclose your methodology to clients and pair EMV with engagement metrics for a fuller picture.'
      }
    ]
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
