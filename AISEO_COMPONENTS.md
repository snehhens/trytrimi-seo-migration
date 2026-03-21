# AI Search Engine Optimization (AISEO) Components

This document outlines the components and strategies implemented to optimize content for AI-powered search engines like ChatGPT, Perplexity, Claude, and Google's AI Overviews.

## Overview

AI search engines prioritize:
1. **Direct, concise answers** to user queries
2. **Structured, scannable content** with clear hierarchies
3. **Authoritative citations** from credible sources
4. **Semantic markup** that helps AI understand context
5. **Conversational Q&A format** that matches natural queries

---

## New Components for AISEO

### 1. QuickAnswerBox
**Location:** `src/components/blog/QuickAnswerBox.tsx`

**Purpose:** Provides immediate, featured answers that AI engines can extract as direct responses.

**Usage:**
```tsx
<QuickAnswerBox
  question="Can You Buy Semaglutide Online?"
  answer="Yes, you can legally buy semaglutide online with a valid prescription..."
  highlights={[
    "Requires valid prescription",
    "Telehealth consultations available",
    "Ships in 7-10 days"
  ]}
/>
```

**AISEO Benefits:**
- Direct answer format AI engines prefer
- Scannable bullet points for quick extraction
- Prominently placed for AI crawlers
- Semantic structure signals importance

---

### 2. PeopleAlsoAsk
**Location:** `src/components/blog/PeopleAlsoAsk.tsx`

**Purpose:** Mirrors Google's "People Also Ask" format, answering related queries AI users might have.

**Usage:**
```tsx
<PeopleAlsoAsk
  questions={[
    {
      question: "Is it legal to buy semaglutide online?",
      answer: "Yes, it's completely legal with a valid prescription..."
    },
    // More questions...
  ]}
/>
```

**AISEO Benefits:**
- Captures long-tail queries
- Conversational Q&A format
- Accordion UI encourages comprehensive coverage
- Matches natural language queries AI users ask

---

### 3. ComparisonTable
**Location:** `src/components/blog/ComparisonTable.tsx`

**Purpose:** Structured data comparisons that AI can easily parse and present.

**Usage:**
```tsx
<ComparisonTable
  title="Semaglutide Cost Comparison"
  columns={["Traditional", "Telehealth", "Compounded"]}
  items={[
    {
      feature: "Monthly Cost",
      values: ["$900-$1,500", "$900-$1,500", "$299-$499"]
    },
    {
      feature: "Insurance Coverage",
      values: [true, true, false]
    }
  ]}
/>
```

**AISEO Benefits:**
- Structured data AI can extract
- Visual comparison format
- Boolean values for yes/no questions
- Easy to cite in AI responses

---

### 4. CitationList
**Location:** `src/components/blog/CitationList.tsx`

**Purpose:** Proper academic citations that establish E-A-T (Expertise, Authoritativeness, Trustworthiness).

**Usage:**
```tsx
<CitationList
  citations={[
    {
      authors: ["Wilding JPH", "Batterham RL"],
      title: "Once-Weekly Semaglutide in Adults with Overweight",
      publication: "New England Journal of Medicine",
      year: "2021",
      doi: "10.1056/NEJMoa2032183",
      url: "https://www.nejm.org/doi/..."
    }
  ]}
/>
```

**AISEO Benefits:**
- Establishes authority and credibility
- AI can verify claims against sources
- Proper citation format
- Links to primary research

---

### 5. ProConsList
**Location:** `src/components/blog/ProConsList.tsx`

**Purpose:** Clear advantages/disadvantages format for decision-making queries.

**Usage:**
```tsx
<ProConsList
  title="Brand Name vs Compounded"
  pros={[
    "Same active ingredient",
    "Much more affordable",
    "No insurance paperwork"
  ]}
  cons={[
    "Not FDA-approved",
    "Insurance won't cover"
  ]}
/>
```

**AISEO Benefits:**
- Answers "should I..." queries
- Balanced perspective
- Easy for AI to extract key points
- Helps with comparison queries

---

## Schema Markup for AISEO

### 6. MedicalConditionSchema
**Location:** `src/components/seo/MedicalConditionSchema.tsx`

**Purpose:** Structured data about medical conditions for health-related content.

**Usage:**
```tsx
<MedicalConditionSchema
  name="Obesity"
  description="Chronic medical condition characterized by excess body weight"
  possibleTreatment={[
    {
      name: "Semaglutide",
      description: "GLP-1 receptor agonist for weight management"
    }
  ]}
  riskFactor={["Poor diet", "Sedentary lifestyle"]}
/>
```

**AISEO Benefits:**
- Medical context for AI
- Structured treatment information
- Risk factors for comprehensive answers
- YMYL (Your Money Your Life) signal

---

### 7. SpeakableSchema
**Location:** `src/components/seo/SpeakableSchema.tsx`

**Purpose:** Marks content sections ideal for voice assistants and AI to read aloud.

**Usage:**
```tsx
<SpeakableSchema cssSelector={["#quick-answer", "#summary"]} />
```

**AISEO Benefits:**
- Optimizes for voice search
- Signals most important content
- AI prioritizes these sections
- Helps with audio AI responses

---

### 8. CitationSchema
**Location:** `src/components/seo/CitationSchema.tsx`

**Purpose:** Schema markup for scientific citations in content.

**Usage:**
```tsx
<CitationSchema
  citations={[
    {
      "@type": "MedicalScholarlyArticle",
      headline: "Study Title",
      author: ["Author Name"],
      datePublished: "2021-03-15",
      url: "https://..."
    }
  ]}
/>
```

**AISEO Benefits:**
- Machine-readable citations
- Establishes credibility
- AI can verify and link sources
- Improves trust signals

---

## Implementation Strategy

### Priority Pages to Optimize (In Order)

1. **High-traffic commercial pages:**
   - Buy Semaglutide Online ✅ (Implemented)
   - Buy Tirzepatide Online
   - Cost comparison pages

2. **Informational hub pages:**
   - GLP-1 Complete Guide
   - How Tirzepatide Works
   - Semaglutide vs Tirzepatide

3. **How-to guides:**
   - How to Start Semaglutide
   - Injection guides
   - Dosage guides

4. **Comparison pages:**
   - Brand vs Compounded
   - Semaglutide vs Ozempic vs Wegovy
   - Cost breakdowns

### Content Structure Best Practices

1. **Start with QuickAnswerBox** - Direct answer within first 300 words
2. **Add PeopleAlsoAsk** - Mid-article or before conclusion
3. **Use ComparisonTable** - For any comparative content
4. **Include CitationList** - At article end with 4-8 credible sources
5. **Add ProConsList** - For decision-focused content
6. **Implement Schema** - MedicalCondition + Speakable + Citation

### Content Writing Guidelines

#### Direct Answer Format
✅ Good: "Yes, you can legally buy semaglutide online with a prescription."
❌ Bad: "Many people wonder if buying semaglutide online is possible..."

#### Conversational Queries
✅ Good: "How long does semaglutide take to work?"
❌ Bad: "Semaglutide efficacy timeline"

#### Scannable Structure
- Short paragraphs (2-3 sentences)
- Frequent headings (H2, H3)
- Bullet points for lists
- Tables for comparisons

#### Citation Quality
✅ Good: Peer-reviewed medical journals, .gov sources, clinical trials
❌ Bad: General health blogs, uncredited information

---

## Expected Impact

### Short-term (1-3 months)
- Better featured in AI responses
- Higher click-through from AI search results
- Improved voice search visibility

### Medium-term (3-6 months)
- Increased referral traffic from AI platforms
- Better ranking for conversational queries
- More "position zero" features

### Long-term (6-12 months)
- Established as authoritative source in AI training
- Sustained traffic from AI search evolution
- Brand recognition in AI responses

---

## Monitoring AISEO Performance

### Key Metrics
1. **AI Platform Traffic**: Monitor referrals from:
   - ChatGPT (via OpenAI)
   - Perplexity.ai
   - Google AI Overviews
   - Claude (Anthropic)

2. **Query Performance**: Track rankings for:
   - Conversational queries ("how do I...")
   - Question queries ("can you...", "is it...")
   - Comparison queries ("vs", "compared to")

3. **Featured Answers**: Monitor:
   - Featured snippet wins
   - People Also Ask appearances
   - AI Overview inclusions

### Tools to Use
- Google Search Console (AI Overview reporting)
- Analytics referral sources
- Perplexity.ai API (if available)
- Manual testing with AI platforms

---

## Next Steps

1. **Implement on 10 highest-traffic blog posts** (In Progress)
2. **Add to all new content** going forward
3. **Update category hub pages** with AISEO components
4. **Monitor and iterate** based on performance
5. **A/B test** different answer formats

---

## Technical Notes

- All components use semantic HTML
- Proper ARIA labels for accessibility
- Schema markup validates via Google's tool
- Mobile-optimized responsive design
- Performance-tested (no impact on load times)

---

## Resources

- [Google AI Overviews Guidelines](https://developers.google.com/search/docs/appearance/ai-overviews)
- [Schema.org Medical Schema](https://schema.org/MedicalCondition)
- [Speakable Schema Documentation](https://schema.org/speakable)
- [E-A-T Quality Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
