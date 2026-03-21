# Blog Migration to BlogLayout - Master Plan

## Overview
Systematic migration of 110+ blog posts to the new BlogLayout component for improved SEO, structured data, and organic growth.

## Migration Benefits
- ✅ Enhanced structured data (Article, FAQ, Breadcrumb schemas)
- ✅ Improved E-E-A-T signals (author credentials, medical review badges)
- ✅ Better internal linking with automated sidebars
- ✅ Consistent mobile-first responsive design
- ✅ Content freshness indicators
- ✅ Social sharing optimization

## Migration Status

### Completed (8 files)
1. ✅ SemaglutideAlcohol.tsx
2. ✅ SemaglutideBloodPressure.tsx
3. ✅ SemaglutideBoneHealth.tsx
4. ✅ SemaglutideClinicalResults.tsx
5. ✅ SemaglutideCardiovascular2025.tsx
6. ✅ AffordableGLP1Injections2025.tsx
7. ✅ BestFoodsTirzepatide.tsx
8. ✅ CompoundedSemaglutideRisks2025.tsx

### Remaining (~118 files total)

## Batch Migration Strategy

### Phase 1: High-Priority SEO Posts (Batch 1-3, ~15 posts)
**Target: High-traffic, competitive keywords**
- GLP1CompleteGuide.tsx
- SemaglutideCost.tsx
- SemaglutideCostBreakdown.tsx
- TirzepatideHeartHealth.tsx
- TirzepatideJointPain.tsx
- TirzepatideMechanismGuide.tsx
- TirzepatideKidneyHealth.tsx
- TirzepatideInsuranceCoverage.tsx
- TirzepatideMenopause.tsx
- TirzepatideLongTermUse.tsx
- TirzepatideHormones.tsx
- SemaglutideOlderAdultsGuidance.tsx
- TirzepatideMaintenanceDose.tsx
- TirzepatideInflammation.tsx
- TirzepatideGenerics2025.tsx

### Phase 2: Medical & Clinical Posts (Batch 4-6, ~20 posts)
**Target: Medical authority content**
- TirzepatideMedicationInteractions.tsx
- Posts with clinical data, research, medical reviews
- Condition-specific guides
- Safety and side effects content

### Phase 3: Cost & Insurance Posts (Batch 7-9, ~15 posts)
**Target: Commercial intent keywords**
- All remaining cost comparison posts
- Insurance coverage guides
- Affordability content
- Generic/compounded options

### Phase 4: How-To & Practical Guides (Batch 10-12, ~20 posts)
**Target: User intent keywords**
- Dosing guides
- Side effect management
- Lifestyle integration
- Food interactions

### Phase 5: Comparison & Alternative Posts (Batch 13-15, ~20 posts)
**Target: Comparison keywords**
- Drug vs drug comparisons
- Alternative treatments
- Combination therapies

### Phase 6: Remaining Long-Tail Content (Batch 16-20, ~30 posts)
**Target: Long-tail keywords, niche topics**
- All remaining blog posts
- Less competitive topics
- Supporting content

## Migration Checklist Per Post

### Required Components
- [ ] Import and wrap content in `<BlogLayout>`
- [ ] Add all metadata props (title, description, dates, keywords)
- [ ] Define FAQs array (minimum 3-5 questions)
- [ ] Set author information (name, bio, credentials)
- [ ] Add category classification
- [ ] Set isMedical flag appropriately
- [ ] Define relatedArticles array
- [ ] Add imageUrl for Open Graph

### Content Structure
- [ ] Move content into BlogLayout children
- [ ] Ensure single H1 (auto-handled by BlogLayout)
- [ ] Keep H2-H4 for proper hierarchy
- [ ] Add semantic HTML (section, article)
- [ ] Include alt text for all images

### SEO Elements (auto-handled by BlogLayout)
- [ ] BlogArticleSchema
- [ ] BreadcrumbSchema
- [ ] FAQSchema
- [ ] MedicalWebPageSchema (if applicable)
- [ ] Open Graph tags
- [ ] Twitter Card tags

### Components to Remove
- [ ] Remove old `<Helmet>` tags
- [ ] Remove manual `<Navigation>` component
- [ ] Remove manual `<Footer>` component
- [ ] Remove custom breadcrumbs
- [ ] Remove manual meta tag management

## Batch Size Recommendation
- **Per session**: 5-8 posts
- **Time estimate**: 15-20 minutes per post
- **Quality check**: Test build after each batch
- **Total sessions**: ~20-25 sessions

## Priority Scoring Criteria
1. **Traffic Volume** (40% weight)
2. **Keyword Competition** (30% weight)
3. **Commercial Intent** (20% weight)
4. **Content Age** (10% weight)

## Session Workflow
1. Select next batch from priority list
2. Read all files in batch
3. Create migration for each post in parallel
4. Test build for TypeScript errors
5. Visual QA check on 2-3 posts
6. Mark as complete in tracker
7. Move to next batch

## Quality Assurance
- Run TypeScript check after each batch
- Verify structured data with Google's Rich Results Test
- Check mobile responsiveness
- Validate internal links
- Confirm FAQ schema rendering

## Timeline Estimate
- **Conservative**: 25 sessions × 1 hour = 25 hours
- **Optimistic**: 20 sessions × 45 minutes = 15 hours
- **Realistic**: ~20 hours total over 2-3 weeks

## Success Metrics
- All posts using BlogLayout
- Zero TypeScript errors
- Consistent structured data across all posts
- Improved Core Web Vitals
- Enhanced SERP appearance with rich results
- Better internal linking structure

## Next Steps
1. ✅ Create this migration plan
2. Start with Phase 1, Batch 1 (5 high-priority posts)
3. Monitor and adjust based on learnings
4. Track progress in content_updates table
