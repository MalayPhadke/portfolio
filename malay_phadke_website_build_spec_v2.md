# Personal Academic Website — Complete Build Specification & Vibe-Coding Prompt Pack

**Target:** Fall 2027 PhD applications + research-position outreach  
**Owner:** Malay Phadke  
**Primary audience:** prospective PhD advisors, research-lab PIs, collaborators, conference contacts, admissions committees  
**Build philosophy:** academic-first, memorable in small ways, fast, static, easy to maintain, built from scratch rather than cloned from an existing theme

---

## 0. Goal

Build a personal academic website inspired by the **information density and credibility** of RayeRen's AcadHomepage and the **modern static architecture** of Astro Scholar, but **do not fork, clone, or copy either template**.

The site should feel like:

> **A modern academic homepage for a researcher who understands intelligent systems across the stack — from embedded systems and signals to perception, multimodal reasoning, and reliability.**

It should **not** feel like:
- a software-engineer portfolio;
- a startup landing page;
- a flashy WebGL demo;
- a terminal gimmick;
- an exhaustive CV dump.

A professor opening the site should understand the following in **15–20 seconds**:

1. Malay is currently doing research at IISc.
2. His present research focuses on **reliable / trustworthy multimodal and foundation models**.
3. He already has serious research output, including **EMNLP 2026 Main**.
4. His background is unusually broad: **embedded systems → robotics → signal processing → vision/audio → language/multimodal models → reliability**.
5. There are direct links to papers, code, CV, Scholar, GitHub, LinkedIn, and email.

---

# 1. Core positioning

## Primary one-line identity

Use this as the default homepage tagline:

> **Building and understanding intelligent systems — from signals to reliable reasoning.**

Alternative shorter version:

> **From signals to reliable reasoning.**

Optional slightly more playful secondary line:

> I like intelligent systems. I especially like figuring out how they fail.

Do **not** use labels such as:
- AI enthusiast
- AI visionary
- ML expert
- data scientist
- innovator

The site should communicate expertise through work rather than adjectives.

---

# 2. Research narrative

The website must turn a broad technical background into one coherent trajectory.

Use this conceptual progression throughout the site:

```text
Embedded Systems → Signals → Perception → Reasoning → Reliability
      ↓              ↓          ↓            ↓            ↓
   Robotics       DSP/Audio     CV/VLMs     LLMs/LALMs   UQ/XAI/Safety
```

This is **not** meant to imply that every stage is the current research focus.

The intended interpretation is:

> Malay began by building physical and signal-processing systems, moved through perception and multimodal learning, and now studies reliability, uncertainty, failure modes, and reasoning in foundation models.

Current research should always get the most visual prominence.

---

# 3. Website content hierarchy

The website should have the following navigation:

```text
Home
Research
Publications
Projects
Notes
CV
```

Right side / icon links:

```text
Google Scholar
GitHub
LinkedIn
Email
```

`Notes` is optional at launch. If there are no real notes yet, keep the route implemented but hide it from the primary navigation until the first post exists.

Do **not** have:
- Skills
- Certifications
- Testimonials
- Services
- Hire Me
- percentage skill bars

---

# 4. Recommended stack

Build from a **blank Astro project**.

## Required

- Astro
- TypeScript
- static output
- Tailwind CSS **or** a small custom CSS design system
- Markdown/MDX content collections
- BibTeX-based publication data
- responsive images
- icon library using local SVGs or Iconify
- sitemap
- robots.txt
- canonical URLs
- Open Graph metadata
- RSS only if Notes becomes active

## Recommendation

Prefer:

```text
Astro
TypeScript
Tailwind CSS 4
MDX
Zod content schemas
@astrojs/sitemap
remark-math
rehype-katex
```

Optional:
- Pagefind for search, but only add after the site has enough content to justify it.
- Motion should be CSS-first. Avoid adding a large animation library for two hover effects.

## Deployment

Primary recommendation:

```text
GitHub repository
→ GitHub Actions
→ GitHub Pages
→ custom domain
```

Cloudflare Pages is also acceptable.

The site must work perfectly as a static site.

---

# 5. Repository architecture

Build this structure from scratch:

```text
/
├── public/
│   ├── cv/
│   │   └── Malay_Phadke_CV.pdf
│   ├── images/
│   │   ├── profile.webp
│   │   ├── research/
│   │   └── projects/
│   ├── favicon.svg
│   └── og-default.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Sidebar.astro
│   │   │   └── PageShell.astro
│   │   ├── home/
│   │   │   ├── Intro.astro
│   │   │   ├── ResearchThreads.astro
│   │   │   ├── SelectedWorks.astro
│   │   │   ├── News.astro
│   │   │   ├── SystemsTrajectory.astro
│   │   │   └── CurrentStatus.astro
│   │   ├── publications/
│   │   │   ├── PublicationItem.astro
│   │   │   ├── PublicationBadge.astro
│   │   │   └── PublicationLinks.astro
│   │   ├── projects/
│   │   │   └── ProjectCard.astro
│   │   ├── research/
│   │   │   └── ResearchTheme.astro
│   │   ├── VisitorMap.astro
│   │   ├── ThemeToggle.astro
│   │   ├── SocialLinks.astro
│   │   └── ExternalLink.astro
│   ├── content/
│   │   ├── research/
│   │   ├── projects/
│   │   ├── notes/
│   │   └── news/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── publications.bib
│   │   ├── experience.ts
│   │   └── education.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── research.astro
│   │   ├── publications.astro
│   │   ├── projects.astro
│   │   ├── notes/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── visitors.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── tokens.css
│   ├── content.config.ts
│   └── site.config.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Keep personal data separated from presentation logic.

---

# 6. Visual design

## Overall personality

Keywords:

```text
academic
technical
calm
clean
slightly playful
precise
modern
editorial
```

Avoid:

```text
neon
cyberpunk
gradient-heavy
glassmorphism
large shadows
3D hero art
massive rounded SaaS cards
```

## Layout

### Desktop

Maximum content width:

```css
max-width: 1120px;
```

Primary homepage can use a subtle two-column academic layout:

```text
┌─────────────────────────────────────────────────────────────┐
│ navbar                                                      │
├───────────────────┬─────────────────────────────────────────┤
│ profile rail      │ main academic content                   │
│                   │                                         │
│ portrait          │ intro                                   │
│ name              │ research themes                         │
│ IISc              │ selected publications                   │
│ social links      │ news                                    │
│ interests         │ systems trajectory                      │
│                   │ selected projects                       │
└───────────────────┴─────────────────────────────────────────┘
```

Approximate desktop split:

```text
sidebar: 240–270 px
gap: 48–64 px
content: remaining width
```

The sidebar should be sticky only if it remains visually unobtrusive.

### Mobile

Everything becomes one column.

Order:
1. portrait
2. name
3. role
4. short tagline
5. social links
6. current research
7. selected work
8. news
9. remaining sections

No hamburger menu is necessary if a simple compact horizontal menu fits; otherwise use a small accessible menu.

---

# 6b. Credibility & positioning — design brainstorm

This section is candidate material, not a mandate. It exists to answer one question through *design*, not more copy: **how does a stranger (prof or recruiter) conclude "trustworthy, careful researcher with real breadth" in 15 seconds, from layout and typography alone, before reading a word closely?**

Pick a subset. Do not implement all of it — over-signaling trust reads as insecure. One or two of these per category is enough.

## A. Devices that signal rigor / trustworthiness

- **Falsifiable-by-design copy.** Every claim on the page should be checkable at a glance: venue name + status (`Main` / `Under submission`) next to every paper, advisor name next to every research line, exact dates (not "recently") on every role. This is already in the content rules — make it a *visual* rule too: give status/venue/date their own consistent mono treatment everywhere so the eye learns "mono = verifiable metadata" site-wide.
- **A credibility strip, not a stats/skill-bar strip.** A single quiet horizontal line under the intro — 3–4 items, plain text, no icons, no counters ticking up: e.g. `IISc → advised by Sriram Ganapathy` · `EMNLP 2026 Main` · `4 institutions, 3 countries`. This does in one line what a "Skills: Python ●●●●○" bar tries and fails to do.
- **Restraint as the actual trust signal.** No superlatives, no badges, no "top X%" claims, no gradient "AI-powered" chrome. The absence of salesmanship is itself the credibility device for an academic audience — keep reminding the coding agent of this so it doesn't add a testimonials-style trust pattern by default.
- **Consistent, boring interaction patterns.** Same hover/focus treatment everywhere, same spacing rhythm, same border radius (or none). A page that is visibly *consistent* reads as authored by someone careful — which is the same quality being sold.

## B. Devices that sell breadth without turning into a CV dump

- **Topic tags on the experience timeline.** Each experience entry gets 1–3 small plain-text tags pulled from the same vocabulary as the Systems Trajectory (`embedded` · `robotics` · `perception` · `reliability` …). A recruiter scanning the timeline sees the spread instantly without reading every line.
- **Color/position echo between the Trajectory and the timeline.** If a stage in the Systems Trajectory has an accent tick, the matching experience entries below could pick up the faintest tint of that same position — not a legend, not a key, just a subliminal "these connect" cue. Skip if it adds real implementation complexity; the tags alone are enough.
- **Order breadth from general → specific.** Homepage tells the trajectory story in one line; Research page unpacks it in a paragraph; Experience section makes it literal with dates; CV is the full detail. Each level should feel like a zoom-in, not a repeat.

## C. CV presentation — two-tier, not one PDF button

A bare "Download CV" button wastes the page's best chance to prove the breadth-and-focus story before the recruiter even opens a file.

- **Tier 1 — on-page skim (primary).** The homepage Experience section *is* the skimmable CV: role, institution, advisor, dates, 1–3 topic tags, one line of substance. A recruiter who never opens the PDF should still leave with an accurate picture.
- **Tier 2 — the real PDF (secondary, but easy to reach).** One clearly-labelled download action, with quiet meta underneath it for trust/orientation, not decoration: `2 pages · updated Sep 2026`. No preview modal, no embedded viewer — that's more engineering than the payoff justifies.
- **Never let the two drift out of sync.** Whatever the coding agent uses as the source of truth for experience/education (the `experience.ts` / `education.ts` data files already in the architecture) should be the single source for both the on-page timeline and any copy that describes the PDF's contents.

## D. Quirky-but-restrained touches (in keeping with the existing "nothing fancy" rule)

These extend the site's existing tiny-playful-element list (§20) — same size/risk budget, no new categories of gimmick.

- **Let the quirk come from the research, not from web design tropes.** The one clearly-earned joke is the existing playful line ("I especially like figuring out how they fail") — it works *because* it's literally what uncertainty/failure-mode research is. Prefer more jokes in this same register over generic "coffee-powered developer" humor.
- **A rotating footer status line**, cycling through 2–4 short mono lines on load (not animated, just randomized per visit): `status: probably debugging an experiment` / `status: waiting on a review` / `status: rereading a paper for the third time`. Same slot as the existing Recommended #4, just with more than one line in the pool.
- **A "last verified" timestamp next to `currently:`**, in the same mono voice as everything else — reinforces precision as personality, not just as a design rule.
- **Nothing interactive beyond hover/focus and the theme toggle.** No confetti, no cursor tricks, no typing animation — this list intentionally has a ceiling.

---

# 7. Typography

Use a restrained serif + sans or sans + monospace combination.

Recommended:

```text
Body / UI: Inter, Geist, or Source Sans 3
Academic headings: Source Serif 4 or Newsreader
Technical accent: JetBrains Mono
```

Do not make the site look like a coding terminal.

Use monospace only for:
- tiny metadata;
- dates;
- the systems trajectory;
- paper tags;
- the optional `currently:` line.

Body text should be approximately:

```text
17–18 px desktop
16–17 px mobile
line-height 1.6–1.75
```

---

# 8. Color system

Use a largely neutral academic palette.

## Light

```css
--bg: #fcfcfb;
--surface: #ffffff;
--text: #161616;
--muted: #686868;
--border: #e7e5e1;
--accent: #315c72;
--accent-soft: #eaf2f5;
```

## Dark

```css
--bg: #111312;
--surface: #171918;
--text: #eceeec;
--muted: #a1a7a3;
--border: #2b2e2c;
--accent: #82b5c9;
--accent-soft: #19313a;
```

One accent only. No multicolor publication cards.

---

# 9. Homepage — final design

## Section 1 — profile sidebar

Include:

```text
[portrait]

Malay Phadke

Researcher @ IISc
Bengaluru, India

[Email] [Scholar] [GitHub] [LinkedIn]

Research interests
• Reliable foundation models
• Multimodal reasoning
• Uncertainty estimation
• Interpretability & failure modes

[Download CV]
```

Do not publish the phone number from the CV.

A public email is acceptable, but store it in one config file so it can easily be changed.

## Section 2 — introduction

Suggested copy:

### Hi, I'm Malay.

> I am a researcher at the Indian Institute of Science (IISc), working with Prof. Sriram Ganapathy. My current research studies uncertainty, failure modes, and reasoning in large language and multimodal models, with the broader goal of making intelligent systems more reliable.
>
> My path into this problem has been deliberately broad — from embedded systems, robotics, and signal processing to computer vision, audio, language models, and multimodal AI. I am especially interested in understanding when powerful models fail confidently, what their internal representations reveal about those failures, and how that knowledge can improve evaluation and decision-making.

Keep this around 120–150 words.

## Section 3 — tiny current-status line

Directly below the intro:

```text
currently:
research @ IISc · EMNLP 2026 · trustworthy multimodal models
```

Small monospace text, editable from `site.config.ts`.

Conference variant:

```text
currently:
in Budapest for EMNLP '26 · happy to chat about uncertainty & multimodal reliability
```

This is one of the recommended playful elements.

---

# 10. Research themes

Show four research threads as clean editorial blocks rather than large SaaS cards.

## 1. Reliable Foundation Models

```text
Uncertainty estimation, calibration, hallucination detection,
selective prediction, confident model failures.
```

Relevant work:
- BiG-SURE
- multimodal open-text uncertainty
- low-entropy mispredictions

## 2. Multimodal Reasoning

```text
How language models reason over vision, audio and video —
and how multimodal evidence failures propagate to answers.
```

Relevant work:
- VideoLLM failure analysis
- multimodal uncertainty
- medical multimodal applications

## 3. Audio & Temporal Intelligence

```text
Temporal reasoning, audio-language models,
speech/audio understanding and compact multimodal models.
```

Relevant work:
- TREA
- SPARK / audio-language-model research

## 4. Interpretable & Failure-Aware Learning

```text
Post-hoc explanation, internal representations,
probe reliability and mechanistic diagnosis.
```

Relevant work:
- DAX / explainability
- correctness-probe / confidence-shortcut work

---

# 11. Selected research / publications on homepage

Show approximately 4–6 selected items, not every paper.

Publication display style:

```text
2026
BiG-SURE: Bipartite Graph Spectral Energy for Uncertainty and Reliability Estimation of LLMs
Debarpan Bhattacharya*, Malay Phadke*, Sriram Ganapathy
EMNLP 2026 — Main Conference
[paper] [code] [project]

One-line summary:
Black-box uncertainty estimation by measuring semantic consistency between anchor and probe generations.
```

Current CV-supported items:

### BiG-SURE
- Debarpan Bhattacharya*, Malay Phadke*, Sriram Ganapathy
- EMNLP 2026 Main
- **Featured publication**

### Multimodal Open-text Uncertainty Estimation for Large Language Models
- Debarpan Bhattacharya*, Malay Phadke*, Md Sahil Ansari, Sriram Ganapathy
- current CV: under submission
- label as `Under review` / `Preprint` only when accurate and public

### Multi-Agent Reinforcement Learning for Path Planning: A Structured Survey Across UAV, UGV, and Hybrid Robotic Systems
- current CV: under submission
- include on homepage only if useful for breadth and publicly accessible

### Seismic Data Collection and Analysis Through Machine Learning
- keep in the full Publications page unless it becomes relevant to the narrative

Do not invent citation counts, venue labels, arXiv links, DOI links, or acceptance status.

---

# 12. News section

Compact homepage `News` section.

Example:

```text
News

Sep 2026   BiG-SURE accepted to EMNLP 2026 Main.
Aug 2026   Started consulting on AI models for oral-cancer screening at TANUH.
...
```

Rules:
- latest 4–6 items;
- thin monospace date column;
- no oversized timeline;
- show all only when there is enough content.

---

# 13. Signature playful element — Systems Trajectory

This is the one distinctive visual motif.

```text
embedded
   ↓
signals ─── perception ─── reasoning ─── reliability
   │             │             │              │
 DSP/audio     CV/VLMs      LLMs/LALMs       UQ/XAI
 robotics       video         agents          safety
```

Mobile:

```text
Embedded systems
      ↓
Signals & robotics
      ↓
Perception
      ↓
Multimodal reasoning
      ↓
Reliability
```

### Interaction

On desktop, hover/focus reveals 2–4 relevant pieces of work.

**Embedded / Robotics**
- Drona Aviation
- UAV–UGV MITACS research
- smart agriculture

**Signals**
- DSP/audio background
- audio/speech models
- TREA

**Perception**
- palmprint biometrics
- medical imaging/screening
- vision-language systems

**Reasoning**
- SPARK
- multimodal LMs
- temporal reasoning

**Reliability**
- BiG-SURE
- uncertainty estimation
- low-entropy mispredictions
- interpretability/failure analysis

Use lightweight CSS/SVG. The information must remain understandable without hovering.

---

# 14. Experience section

Do not duplicate the whole CV.

## Current

### Indian Institute of Science
**Project Associate / Researcher**  
Aug 2025 – Present  
Advisor: Prof. Sriram Ganapathy

Summarize:
- multimodal uncertainty;
- calibration / abstention;
- overconfident hallucinations;
- temporal reasoning in audio models;
- mechanistic diagnosis of VideoLLM failures.

## Previous research

```text
2025   Australian National University
       Research Intern — explainable reinforcement learning

2024   University of Calgary / MITACS
       Research Intern — multi-agent UAV–UGV planning

2024   IIT Bombay
       Research Intern — palmprint biometrics
```

Industry work should primarily live on CV/Projects.

---

# 15. Projects page

Separate research output from systems projects.

Categories:

```text
Research Systems
Robotics / Embedded
Infrastructure
Applied AI
```

Strong CV-supported projects:

## CLARIS — Cluster Access and Job Management Platform

> A FastAPI + Next.js platform for unified access to multiple GPU clusters, including job submission, logs, file inspection, terminal access, and isolated Docker-backed sessions.

## Drones for Smart Agriculture

> An IEEE AESS-supported UAV–UGV system for crop-health monitoring, combining perception models and deployment on NVIDIA Jetson Orin Nano.

## Drona Aviation work

Compact systems item:
- Python/C++ ROS packages
- nano-drone control
- camera streaming
- gesture/object tracking
- ROS1 → ROS2
- firmware latency/stability work

Use 4–6 strongest systems projects maximum.

---

# 16. Research page

This should be more conceptual than the homepage.

Opening:

> My research is centered on a simple question: **when should we trust the behavior of an intelligent system?**

Organize by questions:

## When does a model know that it may be wrong?
- semantic uncertainty
- BiG-SURE
- calibration / abstention

## Why are some wrong predictions made with high confidence?
- low-entropy mispredictions
- confidence shortcuts in correctness probes

## What happens when evidence crosses modalities?
- multimodal uncertainty
- VideoLLM failure attribution
- audio temporal reasoning

## Can we diagnose failures rather than only score them?
- representation probes
- mechanistic diagnosis
- post-hoc explainability

Each block links to relevant papers/projects.

---

# 17. Publications page

Requirements:
- chronological;
- year-grouped;
- rendered from `src/data/publications.bib`;
- highlight `Malay Phadke` in author lists;
- equal contribution marker preserved;
- venue visually prominent but not badge-heavy;
- optional links: paper, arXiv, DOI, code, project, dataset, slides, poster.

Do not add filters until there are enough papers to justify them.

---

# 18. CV page / download

Primary `CV` nav item should open the current PDF in a new tab or a clean HTML CV route with a prominent PDF download.

Treat this as two tiers, not one button — see §6b.C for the full rationale: the homepage Experience section is the skimmable version (role, dates, advisor, topic tags), and the PDF is the detailed version, reached via one clearly-labelled download action with quiet meta underneath (`2 pages · updated <date>`). Keep both driven from the same data file so they can't drift out of sync.

Do not expose publicly:
- phone number;
- personal postal address;
- passport / visa information;
- IDs.

---

# 19. Notes

Only show Notes in primary nav once there is substantive content.

Good future topics:

```text
What low-entropy model errors taught me about confidence
Notes from EMNLP 2026
Why multimodal uncertainty is not just text uncertainty + another encoder
Understanding AUROC vs AURC for selective prediction
Temporal reasoning in audio-language models
Research notes on reliable probes
```

Support equations, code, diagrams, citations, and table of contents.

---

# 20. Tiny playful elements worth adding

The site is for PhD applications. Playful elements must be **small and optional**.

## Recommended #1 — dynamic `currently:` line

High value, essentially zero risk.

## Recommended #2 — Systems Trajectory hover/focus

The signature element. It communicates breadth in a research-relevant way.

## Recommended #3 — tiny signal animation

A subtle SVG waveform near `signals → reasoning`.

Rules:
- 1–2 px line;
- muted;
- stop under `prefers-reduced-motion`;
- no canvas / heavy JS.

## Recommended #4 — footer system-status text

```text
built from scratch with Astro · last updated Sep 2026
```

Optional muted second line, picked at random per page load from a small pool (see §6b.D for more on tone):

```text
status: probably debugging an experiment
status: waiting on a review
status: rereading a paper for the third time
```

## Recommended #4b — "last verified" timestamp

A small mono timestamp next to the `currently:` line in the profile rail. Same voice as everything else on the page — precision as personality, not a design flourish.

## Recommended #5 — keyboard easter egg

Optional after the core site is complete:

```text
?   keyboard help
r   Research
p   Publications
```

Only when no form field is focused.

### Do NOT add
- full terminal mode;
- virtual desktop;
- game;
- custom cursor;
- matrix rain;
- typing animation in the hero;
- animated background particles;
- WebGL globe in the hero;
- music;
- page-transition splash screen.

---

# 21. MapMyVisitors

Keep it away from the primary academic flow.

## Recommended placement: `/visitors`

Footer link:

```text
visitor map
```

Page:

```text
Around the world

A tiny map of where this website has been visited from.
[MapMyVisitors embed]
```

Create:

```text
src/components/VisitorMap.astro
```

Do not invent an embed URL or widget ID. Paste the exact generated snippet after the deployed domain is registered with MapMyVisitors.

Prefer lazy loading so the tracking request does not run on unrelated pages.

Suggested privacy copy:

> This site uses a lightweight visitor-map service to visualize approximate visitor locations. It does not display individual identities or exact addresses.

Important: MapMyVisitors uses IP-based geolocation. Its current privacy policy says the website owner remains responsible for obtaining appropriate consent where applicable. Keep the implementation compatible with a future consent gate.

---

# 22. SEO and academic discoverability

Every page needs:

```text
<title>
meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter/X card
```

Homepage title:

```text
Malay Phadke — Researcher in Reliable Multimodal AI
```

Homepage description:

```text
Malay Phadke is a researcher at the Indian Institute of Science working on uncertainty, multimodal reasoning, interpretability, and failure modes of foundation models.
```

Create JSON-LD using `Person` with only public data.

Include:
- name;
- affiliation;
- URL;
- sameAs for Scholar/GitHub/LinkedIn;
- jobTitle.

---

# 23. Performance requirements

Target Lighthouse:

```text
Performance >= 95
Accessibility >= 95
Best Practices >= 95
SEO >= 95
```

Requirements:
- static HTML for primary content;
- minimal JS;
- image dimensions set;
- WebP/AVIF where useful;
- lazy-load noncritical images;
- avoid render-blocking external fonts;
- self-host fonts when licensing permits;
- no analytics/tracking before required consent where applicable.

---

# 24. Accessibility

Required:
- semantic headings;
- correct heading hierarchy;
- keyboard navigation;
- visible focus state;
- sufficient contrast;
- alt text;
- reduced-motion support;
- descriptive links;
- accessible icon labels;
- no information available only by hover.

The Systems Trajectory must work via keyboard focus.

---

# 25. Content schema

`site.config.ts` conceptual structure:

```ts
export const site = {
  name: "Malay Phadke",
  title: "Researcher in Reliable Multimodal AI",
  institution: "Indian Institute of Science",
  location: "Bengaluru, India",
  tagline: "Building and understanding intelligent systems — from signals to reliable reasoning.",
  currently: "research @ IISc · EMNLP 2026 · trustworthy multimodal models",
  links: {
    email: "",
    scholar: "",
    github: "",
    linkedin: "",
    cv: "/cv/Malay_Phadke_CV.pdf"
  }
};
```

Use real public profile links when available. Never fabricate missing URLs.

---

# 26. Content based on the current CV

## Education

**Sardar Patel Institute of Technology, Mumbai**  
B.Tech in Electronics and Telecommunication Engineering  
Minor in Computer Engineering  
2021–2025  
CGPA: 9.4/10  
Department Rank: 2/152

Show GPA/rank in About/CV detail rather than hero.

## Current research

**Indian Institute of Science, Bengaluru**  
Project Associate / researcher  
Aug 2025 – Present  
Advisor: Prof. Sriram Ganapathy

Current CV themes:
- uncertainty estimation for multimodal language models in open-text generation;
- calibration and abstention;
- continuous uncertainty evaluation;
- overconfident hallucinations;
- temporal reasoning in large audio language models;
- mechanistic interpretability approaches for hallucination detection and uncertainty in VideoLLMs.

Summarize rather than copying CV bullets verbatim.

## Previous research

**Australian National University**  
Research Intern, Apr 2025 – Aug 2025  
Advisor: Dr. Chirath Hettiarachchi  
Explainable reinforcement learning for glucose monitoring.

**University of Calgary — MITACS Globalink**  
Research Intern, Jun 2024 – Aug 2024  
Advisor: Dr. Mahdis Bisheban  
Multi-agent UAV–UGV planning and simulation.

**IIT Bombay**  
Research Intern, Jan 2024 – May 2024  
Palmprint biometrics using deep learning and multiresolution analysis.

## Current publication highlight

**BiG-SURE — Bipartite Graph Spectral Energy for Uncertainty and Reliability Estimation of LLMs**  
Debarpan Bhattacharya*, Malay Phadke*, Sriram Ganapathy  
EMNLP 2026 — Main Conference

Visually mark this as the current featured paper.

## Applied / industry breadth

Keep primarily in CV/Projects.

### TANUH
Engineering Consultant, Jul 2026 – Present  
AI models for oral-cancer screening.

### Vista IoT
Project Lead, Jan 2024 – May 2024  
Industrial IoT gateway; MODBUS, OPC-UA, IEC protocols.

### Drona Aviation
Software Developer, Jun 2023 – Sep 2023  
ROS/C++, drone control, camera streaming, gesture control, object tracking, firmware.

## Selected systems work

### CLARIS
FastAPI + Next.js + Docker  
Unified GPU-cluster access and job-management platform.

### Drones for Smart Agriculture
IEEE AESS-funded project  
UAV–UGV collaboration; crop-health classification; NVIDIA Jetson deployment.

## Achievements

Do not create a large homepage Awards section. Use a compact About/CV block:
- MITACS Globalink Research Internship;
- Academic Excellence Award;
- department rank;
- Kavach Hackathon winner.

Patents belong on CV/About, not homepage.

---

# 27. Launch version — exactly what must be visible

Homepage first version:

1. profile / identity
2. intro
3. `currently:` line
4. research themes
5. selected publications
6. news
7. systems trajectory
8. current + previous research experience
9. 2–3 selected systems projects
10. footer

Everything else can have dedicated pages.

---

# 28. Vibe-coding workflow

Do not ask the coding model to generate the whole final website in one blind shot.

Use the prompts below **in order**.

After each phase:
1. run the dev server;
2. inspect desktop + mobile;
3. commit;
4. move to the next prompt.

---

# PROMPT 1 — Bootstrap the blank project

```text
We are building a personal academic website from scratch for Malay Phadke.

Do NOT clone, fork, copy, or import an existing academic template.

Use:
- Astro
- TypeScript
- static output
- Tailwind CSS 4
- MDX/content collections
- Zod schemas where useful

The site will eventually be deployed as a static site on GitHub Pages or Cloudflare Pages.

First, create only the project foundation.

Requirements:
1. Initialize a clean Astro project.
2. Add TypeScript and Tailwind.
3. Add @astrojs/sitemap.
4. Add MDX support.
5. Add remark-math + rehype-katex.
6. Create the directory structure from this specification.
7. Create a central site.config.ts.
8. Create BaseLayout.astro.
9. Create global design-token CSS.
10. Create a basic responsive Header and Footer.
11. Configure static output.
12. Configure SEO defaults.
13. Add placeholder favicon and OG image paths.
14. Add a clean README with local development/build commands.

Do not add placeholder portfolio content beyond what is necessary to verify routing.
Do not add animations yet.
Do not install an animation framework.
Do not add analytics yet.
Do not add MapMyVisitors yet.

Run the build and fix all TypeScript/Astro errors before stopping.

At the end, report:
- files created;
- packages installed;
- routes working;
- any decisions you made that differ from the specification.
```

---

# PROMPT 2 — Implement the academic visual system

```text
Continue the existing Astro project.

Implement the visual language for a serious academic homepage.

Design goals:
- modern academic;
- content-first;
- similar in information density to established academic personal pages;
- more polished than a default Jekyll site;
- not a SaaS landing page;
- not flashy;
- no gradients;
- no glassmorphism;
- no oversized cards;
- no huge hero;
- no animation yet.

Desktop:
- centered max-width around 1120px;
- homepage may use a 240–270px left profile rail and a wider content column;
- approximately 48–64px gutter;
- left rail may become sticky if unobtrusive.

Mobile:
- one column;
- profile information comes first;
- primary research content remains immediately visible.

Typography:
- clean sans for UI/body;
- optional restrained serif for large academic headings;
- monospace only for metadata and small technical accents.

Use the light/dark design tokens from the specification.

Implement:
- responsive Header
- Profile Sidebar shell
- typography hierarchy
- links
- buttons
- publication-row styling
- simple section headings
- light/dark theme
- accessible focus states
- reduced-motion support

Do not use card shadows unless almost imperceptible.
Prefer borders, whitespace and typography.

Add a theme toggle that respects the system preference and persists the choice.

Run the build and fix all issues.
```

---

# PROMPT 3 — Add the real profile content

```text
Populate the site with Malay Phadke's real profile information.

Important:
- do not invent achievements, papers, links or metrics;
- do not expose a phone number;
- do not invent Google Scholar/GitHub/LinkedIn URLs if not provided;
- leave unknown URLs as clearly marked config placeholders;
- all personal data must live in data/config files, not hard-coded across components.

Use this positioning:

Name: Malay Phadke
Current affiliation: Indian Institute of Science (IISc), Bengaluru
Current role: Researcher / Project Associate
Advisor: Prof. Sriram Ganapathy

Primary tagline:
Building and understanding intelligent systems — from signals to reliable reasoning.

Research interests:
- Reliable foundation models
- Multimodal reasoning
- Uncertainty estimation
- Interpretability and failure modes

Write a homepage introduction of about 100–150 words using the CV facts from the project specification.

Emphasize current work first.
Earlier robotics / embedded / vision experience should support the trajectory, not dominate it.

Add the profile sidebar:
- portrait placeholder
- name
- current affiliation
- Bengaluru, India
- research interests
- social-link slots
- CV download link

Add configurable current-status line:
research @ IISc · EMNLP 2026 · trustworthy multimodal models

Do not add the publication/research sections yet.
Run the build.
```

---

# PROMPT 4 — Build the research homepage

```text
Build the main research content on the homepage.

Use exactly four research threads:
1. Reliable Foundation Models
2. Multimodal Reasoning
3. Audio & Temporal Intelligence
4. Interpretable & Failure-Aware Learning

Use the descriptions and project mapping from the website specification.

Visual requirements:
- not four large marketing cards;
- editorial blocks separated through whitespace / thin rules;
- title + 2–3 line description + compact related-work links;
- responsive and accessible.

Then implement Selected Research / Selected Publications.

Featured work:
BiG-SURE — Bipartite Graph Spectral Energy for Uncertainty and Reliability Estimation of LLMs
Debarpan Bhattacharya*, Malay Phadke*, Sriram Ganapathy
EMNLP 2026 Main

Do not invent paper URLs.

Add data entries for other publication items listed in the current CV, but distinguish accepted/published work from under-submission work accurately.

Use structured data rather than hard-coded HTML.

Publication items support:
- year
- title
- authors
- venue/status
- optional equal contribution indicator
- short summary
- paper/code/project links when they exist

Run the build and fix issues.
```

---

# PROMPT 5 — Build BibTeX publications

```text
Implement the Publications page.

Requirements:
- source of truth: src/data/publications.bib;
- parse BibTeX during build;
- group chronologically by year;
- highlight "Malay Phadke";
- preserve equal-contribution markers;
- clearly distinguish published/accepted, preprint, and under-review items;
- show venue prominently;
- support optional links: paper, arXiv, DOI, code, project, dataset, slides, poster.

Do not implement filters unless enough real publications justify them.
Do not fabricate citation counts.
The page must work when any optional field is missing.

Create a reusable PublicationItem used by homepage and Publications page.
Add print-friendly styles.
Run the build.
```

---

# PROMPT 6 — Research page

```text
Create /research as the most important page for prospective PhD advisors.

This page should not duplicate Publications.

Opening:
"My research is centered on a simple question: when should we trust the behavior of an intelligent system?"

Organize around:
1. When does a model know that it may be wrong?
2. Why are some wrong predictions made with high confidence?
3. What happens when evidence crosses modalities?
4. Can we diagnose failures rather than only score them?

Map Malay's current work to these questions.

Each theme contains:
- a short motivation paragraph;
- 2–4 concrete research questions;
- linked related publications/projects;
- optional future figure slot.

Tone: technical and specific.
Avoid vague AI-impact language.
Do not overstate unpublished work.
Run the build.
```

---

# PROMPT 7 — Experience and projects

```text
Implement homepage research experience and /projects.

Homepage experience should be compact.

Current:
Indian Institute of Science
Aug 2025 – Present
Advisor: Prof. Sriram Ganapathy

Previous research:
Australian National University
University of Calgary / MITACS
IIT Bombay

Use the current-CV facts from the specification.

Create /projects with categories:
- Research Systems
- Robotics / Embedded
- Infrastructure
- Applied AI

Prioritize:
1. CLARIS
2. Drones for Smart Agriculture
3. Drona Aviation systems work
4. additional projects only if genuinely useful

Each project supports:
- title
- dates
- one-sentence summary
- longer description
- technologies
- optional image
- optional GitHub/demo links
- related research theme

Do not use progress bars or skill ratings.
Run the build.
```

---

# PROMPT 8 — Build the Systems Trajectory signature element

```text
Implement the website's one distinctive visual motif: a "Systems Trajectory".

Concept:
Embedded Systems → Signals → Perception → Reasoning → Reliability

Associated labels:
Embedded / Robotics
Signals / DSP / Audio
Perception / CV / VLMs / Video
Reasoning / LLMs / LALMs
Reliability / UQ / XAI / failure modes

Desktop:
- clean horizontal technical diagram;
- thin lines and text, not colorful cards;
- hover OR keyboard focus reveals 2–4 related experiences/projects;
- interaction is optional: all information remains readable without hover.

Mobile:
- vertical sequence.

Map:
Embedded / Robotics:
- Drona Aviation
- UAV–UGV MITACS work
- smart agriculture

Signals:
- DSP/audio background
- audio-language research
- TREA

Perception:
- palmprint biometrics
- medical imaging / screening
- vision-language work

Reasoning:
- temporal reasoning
- SPARK/audio LMs
- multimodal models

Reliability:
- BiG-SURE
- uncertainty estimation
- low-entropy mispredictions
- interpretability/failure analysis

Styling:
- subtle;
- monochrome/one accent;
- no canvas;
- no D3 dependency;
- minimal JS;
- keyboard accessible;
- respects reduced motion.

This should feel like an academic figure embedded in the homepage, not an interactive toy.
Run the build.
```

---

# PROMPT 9 — Add tiny playful details

```text
Add only the following subtle playful details.

1. Current-status line
Small monospace line below intro, controlled by site.config.ts.

2. Signal trace
Tiny low-contrast SVG waveform near the "signals → reasoning" motif.
Use CSS/SVG only.
Stop movement with prefers-reduced-motion.

3. Footer text
"built from scratch with Astro · last updated [month year]"
Optional muted second line:
"status: probably debugging an experiment"

4. Optional keyboard navigation only if <50 lines of client JS:
? opens help
r -> Research
p -> Publications
Only trigger when an input/textarea is not focused.

Do NOT add:
- typing effect;
- terminal UI;
- custom cursor;
- particles;
- WebGL;
- page loading animations;
- autoplay media.

Run the build.
```

---

# PROMPT 10 — News and EMNLP mode

```text
Implement a data-driven News section.

Data schema:
- date
- text
- optional URL
- optional type

Homepage shows latest 5.
Add "All news" only if more items exist.

Make the current-status line easy to temporarily switch into conference mode.

Example:
"in Budapest for EMNLP '26 · happy to chat about uncertainty & multimodal reliability"

Do not create a modal or banner.
It should remain a small academic-page detail.

Add config flag:
conferenceMode: boolean

When false, normal current status.
When true, conference status.
Run the build.
```

---

# PROMPT 11 — MapMyVisitors

```text
Add MapMyVisitors support.

IMPORTANT:
Do not invent a widget ID or embed URL.
The final embed snippet will be pasted after the deployed domain is registered with MapMyVisitors.

Implement:
- src/components/VisitorMap.astro
- /visitors page
- small "visitor map" link in the footer

The map must NOT appear in the main homepage research flow.

VisitorMap.astro should make it easy to paste exactly one provider-generated embed snippet later.

Prefer lazy loading so the tracking request does not run on every homepage visit solely because the component exists elsewhere.

Add explanatory text:
"A tiny map of where this website has been visited from."

Add privacy note:
"This site uses a lightweight visitor-map service to visualize approximate visitor locations. It does not display individual identities or exact addresses."

Do not claim that the service processes no personal data.
Keep implementation compatible with a future consent gate if needed.
Run the build.
```

---

# PROMPT 12 — SEO, metadata and academic discoverability

```text
Implement the final SEO layer.

Homepage title:
Malay Phadke — Researcher in Reliable Multimodal AI

Description:
Malay Phadke is a researcher at the Indian Institute of Science working on uncertainty, multimodal reasoning, interpretability, and failure modes of foundation models.

Add:
- canonical URLs;
- sitemap;
- robots.txt;
- Open Graph metadata;
- social preview image;
- Person JSON-LD;
- correct favicon set.

Person JSON-LD may include:
- Malay Phadke
- researcher / Project Associate
- Indian Institute of Science
- public homepage URL
- public Scholar/GitHub/LinkedIn links

Do not put phone number or private information into JSON-LD.

Add page-specific metadata for Research, Publications, Projects, Notes.
Ensure unique title/description combinations.
Run the production build.
```

---

# PROMPT 13 — Accessibility and performance audit

```text
Perform a production-readiness audit.

Check:
- heading hierarchy;
- link text;
- alt text;
- keyboard navigation;
- focus visibility;
- color contrast;
- mobile navigation;
- systems-trajectory keyboard support;
- dark mode;
- prefers-reduced-motion;
- image dimensions;
- lazy loading;
- no horizontal overflow at 320px;
- no unnecessary client-side hydration;
- no large JS dependency for simple UI effects;
- print rendering of Publications and Research;
- 404 page.

Targets:
Performance >= 95
Accessibility >= 95
Best Practices >= 95
SEO >= 95

Run type checking, Astro build, and lint if configured.
Fix all blocking issues.
Return remaining warnings.
```

---

# PROMPT 14 — Final PhD-application review

```text
Review the finished website specifically as if you were a professor evaluating a prospective Fall 2027 PhD applicant.

Do NOT redesign it.

Audit the first 20 seconds of information retrieval.

A professor must quickly answer:
1. Who is Malay?
2. Where is he currently working?
3. What is his current research problem?
4. What is his strongest publication?
5. What are the 2–4 research directions he is interested in?
6. What did he personally work on?
7. Where is his CV?
8. Where are papers/code?
9. How can he be contacted?

Then check:
- Does older robotics/embedded work support the story rather than distract from current research?
- Is EMNLP 2026 visible without excessive scrolling?
- Are under-review and accepted papers clearly distinguished?
- Is any language inflated or vague?
- Does any playful element slow down research access?
- Are any links dead?
- Does mobile preserve information hierarchy?
- Is the visitor map relegated to footer / visitors page?

Return:
BLOCKING
SHOULD FIX
OPTIONAL

Apply all BLOCKING and SHOULD FIX items.
Run the final production build.
```

---

# 29. One-shot master prompt

```text
Build a complete static academic personal website from scratch for Malay Phadke.

Do NOT clone, fork, import or copy an existing website template.

The design should be inspired conceptually by modern academic homepages such as AcadHomepage / Astro Scholar:
- immediate academic credibility;
- compact profile information;
- publications and research visible quickly;
- static-first;
- easy long-term content editing.

The website is primarily for Fall 2027 PhD applications and research-lab outreach.

TECH STACK
- Astro
- TypeScript
- static output
- Tailwind CSS 4
- MDX/content collections
- BibTeX publications
- Zod schemas
- sitemap
- math support
- GitHub Pages/Cloudflare-compatible

POSITIONING
Malay is currently a researcher / Project Associate at IISc with Prof. Sriram Ganapathy.

Primary research:
- uncertainty estimation;
- reliable foundation models;
- multimodal reasoning;
- interpretability;
- overconfident model failures;
- audio/video temporal reasoning.

Core tagline:
"Building and understanding intelligent systems — from signals to reliable reasoning."

Broader trajectory:
Embedded Systems → Signals → Perception → Reasoning → Reliability

CURRENT RESEARCH EXPERIENCE
IISc, Aug 2025–present
Advisor: Prof. Sriram Ganapathy
Work includes multimodal uncertainty, calibration/abstention, overconfident hallucinations, temporal reasoning in audio language models, and mechanistic failure diagnosis for VideoLLMs.

PREVIOUS RESEARCH
ANU, Apr–Aug 2025:
explainable reinforcement learning for glucose monitoring.

University of Calgary / MITACS, Jun–Aug 2024:
multi-agent UAV–UGV planning.

IIT Bombay, Jan–May 2024:
deep-learning palmprint biometrics.

FEATURED PUBLICATION
BiG-SURE: Bipartite Graph Spectral Energy for Uncertainty and Reliability Estimation of LLMs
Debarpan Bhattacharya*, Malay Phadke*, Sriram Ganapathy
EMNLP 2026 Main.

Do not invent URLs or citation metrics.

SELECTED SYSTEMS PROJECTS
CLARIS:
FastAPI/Next.js/Docker platform for unified GPU-cluster access and job management.

Drones for Smart Agriculture:
IEEE AESS-supported UAV–UGV crop-health system deployed using NVIDIA Jetson Orin Nano.

Drona Aviation:
ROS/C++ drone-control, camera, tracking and firmware work.

SITE NAVIGATION
Home
Research
Publications
Projects
Notes
CV

Homepage:
- profile rail;
- introduction;
- small `currently:` line;
- four research themes;
- selected publications;
- news;
- systems trajectory;
- compact research experience;
- selected systems projects;
- footer.

Four research themes:
1. Reliable Foundation Models
2. Multimodal Reasoning
3. Audio & Temporal Intelligence
4. Interpretable & Failure-Aware Learning

DESIGN
Academic-first.
Modern, editorial and calm.
Max width around 1120px.
Desktop may use a 240–270px profile rail.
Mobile must be one column.
Neutral background, one muted blue accent.
No gradients.
No glassmorphism.
No large shadows.
No oversized SaaS cards.
No skill bars.
No terminal interface.
No flashy animations.

TYPOGRAPHY
Clean sans body/UI.
Optional restrained serif headings.
Monospace only for metadata, dates and the `currently:` line.

SIGNATURE PLAYFUL ELEMENT
Build a lightweight responsive "Systems Trajectory":
Embedded Systems → Signals → Perception → Reasoning → Reliability

Hover/focus may reveal relevant past work, but all information must remain accessible without hover.
Use CSS/SVG, not D3/canvas.

TINY PLAYFUL DETAILS
- configurable `currently:` line;
- extremely subtle SVG signal trace;
- footer: "built from scratch with Astro · last updated ...";
- optional tiny line: "status: probably debugging an experiment";
- optional keyboard shortcuts if implementation stays tiny.

DO NOT ADD
- terminal mode;
- custom cursor;
- 3D objects;
- particles;
- autoplay;
- large typing animation;
- full-screen transitions.

VISITOR MAP
Implement a separate `/visitors` page and footer link for MapMyVisitors.
Do not invent an embed URL or ID.
Make one VisitorMap component where the real generated snippet can later be inserted.
Do not place the map in the main homepage research flow.
Add a concise privacy explanation.

SEO
Homepage title:
Malay Phadke — Researcher in Reliable Multimodal AI

Homepage description:
Malay Phadke is a researcher at the Indian Institute of Science working on uncertainty, multimodal reasoning, interpretability, and failure modes of foundation models.

Add sitemap, canonical URLs, Open Graph, favicon, Person JSON-LD, robots.txt.

PRIVACY
Do not expose the phone number from the CV.
Do not invent public-profile links.
Do not publish IDs or private details.

QUALITY
Static-first, minimal JS.
Responsive down to 320px.
Accessible.
Reduced-motion support.
Lighthouse targets >=95 across performance/accessibility/best-practices/SEO.

Before finishing:
- run type checks;
- run Astro production build;
- check all routes;
- report placeholders requiring real links/assets;
- report content claims requiring user verification.
```

---

# 30. What to prepare before running the prompts

Create a folder with:

```text
profile-photo-original.jpg
Malay_Phadke_CV.pdf
publications.bib
```

Prepare links:

```text
Google Scholar:
GitHub:
LinkedIn:
public email:
ORCID (optional):
```

For each featured paper:

```text
paper URL:
code URL:
project URL:
poster:
slides:
1-sentence summary:
thumbnail/figure:
```

For projects:

```text
CLARIS GitHub/demo:
Drones for Smart Agriculture link:
any public drone media:
```

Do not block launch if some links are unavailable.

---

# 31. Suggested launch order

## Version 0.1 — get it online
- Home
- Research
- Publications
- CV
- profile image
- Scholar/GitHub/LinkedIn/email
- BiG-SURE
- IISc experience

## Version 0.2
- Systems Trajectory
- Projects
- News
- conference-mode status

## Version 0.3
- Notes
- visitor map
- polished OG images
- optional keyboard shortcuts

This prevents a playful detail from delaying the site you need for outreach.

---

# 32. Final design verdict

The finished site should look approximately like:

```text
────────────────────────────────────────────────────────────────────
Malay Phadke            Research  Publications  Projects  Notes  CV
────────────────────────────────────────────────────────────────────

[portrait]           Hi, I'm Malay.

Malay Phadke         I am a researcher at IISc working on uncertainty,
Researcher @ IISc    failure modes and reasoning in language and
Bengaluru, India     multimodal models...

Scholar              currently:
GitHub               research @ IISc · EMNLP 2026 · trustworthy
LinkedIn             multimodal models
Email
                     ────────────────────────────────────────────────
Reliable FMs         Research
Multimodal AI
Uncertainty          Reliable Foundation Models
Interpretability     Multimodal Reasoning
                     Audio & Temporal Intelligence
[Download CV]        Interpretable & Failure-Aware Learning

                     ────────────────────────────────────────────────
                     Selected Research

                     2026  BiG-SURE
                           EMNLP 2026 Main
                           [paper] [code] [project]

                     ────────────────────────────────────────────────
                     News
                     Sep 2026  ...

                     ────────────────────────────────────────────────
                     From systems to reliability

                     embedded → signals → perception → reasoning
                                                       ↓
                                                  reliability

                     ────────────────────────────────────────────────
                     Experience
                     IISc
                     ANU
                     Calgary / MITACS
                     IIT Bombay

                     ────────────────────────────────────────────────
                     Selected systems
                     CLARIS
                     UAV–UGV / Smart Agriculture
                     Drone systems
────────────────────────────────────────────────────────────────────
visitor map · built from scratch with Astro · last updated Sep 2026
────────────────────────────────────────────────────────────────────
```

The impression should be:

> **Broad engineering foundations, now focused sharply on trustworthy multimodal/foundation-model research.**

Not:

> Someone who has done a lot of unrelated projects.

That distinction should guide every content and design decision.

---

# 33. Reference sites / implementation references

Use only as references, not source code to copy:

- AcadHomepage / RayeRen  
  https://github.com/RayeRen/acad-homepage.github.io

- Astro Scholar  
  https://astro.build/themes/details/astro-scholar/

- Academic Portfolio Astro  
  https://astro.build/themes/details/academic-portfolio-astro/

- MapMyVisitors  
  https://mapmyvisitors.com/

---

# 34. Maintenance rule

Any future addition must pass this test:

> **Does this make a prospective collaborator or PhD advisor understand my research more quickly?**

If yes, add it.

If it primarily demonstrates frontend cleverness, leave it out.
