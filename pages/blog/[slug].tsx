import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { blogComponents as autoDiscoveredBlogComponents } from "@/generated/blog-registry";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog/discovery";
import NotFound from "@/pages/NotFound";

/**
 * Dynamic blog post page with full Static Site Generation (SSG).
 *
 * Each blog post is pre-rendered at build time into its own static HTML file.
 * This gives every article:
 *   - Full server-rendered HTML (Google can read the entire content immediately)
 *   - No client-side JS needed to display the content
 *   - Fast TTFB from CDN — a key Core Web Vitals signal
 *   - Proper <head> metadata (title, description, OG tags) in the raw HTML
 */

const manualBlogComponents: Record<string, ComponentType> = {
  "tirzepatide-vs-semaglutide": dynamic(() => import("@/pages/blog/TirzepatideVsSemaglutide")),
  "how-tirzepatide-works": dynamic(() => import("@/pages/blog/HowTirzepatideWorks")),
  "semaglutide-first-month": dynamic(() => import("@/pages/blog/SemaglutideFirstMonth")),
  "glp1-complete-guide": dynamic(() => import("@/pages/blog/GLP1CompleteGuide")),
  "tirzepatide-dosage-guide": dynamic(() => import("@/pages/blog/TirzepatideDosageGuide")),
  "tirzepatide-dosing-chart": dynamic(() => import("@/pages/blog/TirzepatideDosingChart")),
  "semaglutide-dosing-chart": dynamic(() => import("@/pages/blog/SemaglutideDosingChart")),
  "semaglutide-clinical-results": dynamic(() => import("@/pages/blog/SemaglutideClinicalResults")),
  "weight-loss-injection-costs": dynamic(() => import("@/pages/blog/WeightLossInjectionCosts")),
  "tirzepatide-mechanism-guide": dynamic(() => import("@/pages/blog/TirzepatideMechanismGuide")),
  "cheapest-tirzepatide-online": dynamic(() => import("@/pages/blog/CheapestTirzepatideOnline")),
  "compounded-semaglutide-vs-brand-name": dynamic(() => import("@/pages/blog/CompoundedSemaglutideVsBrandName")),
  "compounded-tirzepatide-cost": dynamic(() => import("@/pages/blog/CompoundedTirzepatideCost")),
  "buy-tirzepatide-legally-online": dynamic(() => import("@/pages/blog/BuyTirzepatideLegallyOnline")),
  "semaglutide-vs-phentermine": dynamic(() => import("@/pages/blog/SemaglutideVsPhentermine")),
  "semaglutide-eligibility": dynamic(() => import("@/pages/blog/SemaglutideEligibility")),
  "tirzepatide-safety": dynamic(() => import("@/pages/blog/TirzepatideSafety")),
  "semaglutide-vs-ozempic-vs-wegovy": dynamic(() => import("@/pages/blog/SemaglutideVsOzempicVsWegovy")),
  "tirzepatide-online-prescription": dynamic(() => import("@/pages/blog/TirzepatideOnlinePrescription")),
  "semaglutide-side-effects": dynamic(() => import("@/pages/blog/SemaglutideSideEffects")),
  "tirzepatide-insurance-coverage": dynamic(() => import("@/pages/blog/TirzepatideInsuranceCoverage")),
  "semaglutide-weight-loss-results": dynamic(() => import("@/pages/blog/SemaglutideWeightLossResults")),
  "semaglutide-diet-plan": dynamic(() => import("@/pages/blog/SemaglutideDietPlan")),
  "tirzepatide-long-term-use": dynamic(() => import("@/pages/blog/TirzepatideLongTermUse")),
  "semaglutide-alcohol": dynamic(() => import("@/pages/blog/SemaglutideAlcohol")),
  "tirzepatide-pcos": dynamic(() => import("@/pages/blog/TirzepatidePCOS")),
  "semaglutide-cost": dynamic(() => import("@/pages/blog/SemaglutideCost")),
  "tirzepatide-before-after": dynamic(() => import("@/pages/blog/TirzepatideBeforeAfter")),
  "tirzepatide-for-prediabetes": dynamic(() => import("@/pages/blog/TirzepatideForPrediabetes")),
  "tirzepatide-fertility": dynamic(() => import("@/pages/blog/TirzepatideFertility")),
  "semaglutide-exercise": dynamic(() => import("@/pages/blog/SemaglutideExercise")),
  "semaglutide-plateau": dynamic(() => import("@/pages/blog/SemaglutidePlateau")),
  "semaglutide-thyroid": dynamic(() => import("@/pages/blog/SemaglutideThyroid")),
  "tirzepatide-sleep": dynamic(() => import("@/pages/blog/TirzepatideSleep")),
  "semaglutide-skin": dynamic(() => import("@/pages/blog/SemaglutideSkin")),
  "tirzepatide-joint-pain": dynamic(() => import("@/pages/blog/TirzepatideJointPain")),
  "semaglutide-mental-health": dynamic(() => import("@/pages/blog/SemaglutideMentalHealth")),
  "tirzepatide-athletic-performance": dynamic(() => import("@/pages/blog/TirzepatideAthleticPerformance")),
  "tirzepatide-heart-health": dynamic(() => import("@/pages/blog/TirzepatideHeartHealth")),
  "semaglutide-pregnancy": dynamic(() => import("@/pages/blog/SemaglutidePregnancy")),
  "semaglutide-hair-loss": dynamic(() => import("@/pages/blog/SemaglutideHairLoss")),
  "semaglutide-muscle-preservation": dynamic(() => import("@/pages/blog/SemaglutideMusclePreservation")),
  "tirzepatide-kidney-health": dynamic(() => import("@/pages/blog/TirzepatideKidneyHealth")),
  "tirzepatide-medication-interactions": dynamic(() => import("@/pages/blog/TirzepatideMedicationInteractions")),
  "tirzepatide-maintenance-dose": dynamic(() => import("@/pages/blog/TirzepatideMaintenanceDose")),
  "semaglutide-maintenance-dose": dynamic(() => import("@/pages/blog/SemaglutideMaintenanceDose")),
  "finding-optimal-tirzepatide-dose": dynamic(() => import("@/pages/blog/FindingOptimalTirzepatideDose")),
  "semaglutide-dose-adjustment": dynamic(() => import("@/pages/blog/SemaglutideDoseAdjustment")),
  "comparing-maintenance-doses": dynamic(() => import("@/pages/blog/ComparingMaintenanceDoses")),
  "glp1-maintenance-long-term-success": dynamic(() => import("@/pages/blog/GLP1MaintenanceLongTermSuccess")),
  "semaglutide-dosage-guide": dynamic(() => import("@/pages/blog/SemaglutideDosageGuide")),
  "semaglutide-for-diabetes": dynamic(() => import("@/pages/blog/SemaglutideForDiabetes")),
  "semaglutide-injection-guide": dynamic(() => import("@/pages/blog/SemaglutideInjectionGuide")),
  "semaglutide-stopping": dynamic(() => import("@/pages/blog/SemaglutideStopping")),
  "tirzepatide-side-effects": dynamic(() => import("@/pages/blog/TirzepatideSideEffects")),
  "tirzepatide-first-month": dynamic(() => import("@/pages/blog/TirzepatideFirstMonth")),
  "tirzepatide-diet-guide": dynamic(() => import("@/pages/blog/TirzepatideDietGuide")),
  "tirzepatide-exercise": dynamic(() => import("@/pages/blog/TirzepatideExercise")),
  "buy-semaglutide-online": dynamic(() => import("@/pages/blog/BuySemaglutideOnline")),
  "buy-tirzepatide-online": dynamic(() => import("@/pages/blog/BuyTirzepatideOnline")),
  "compounded-semaglutide-safety": dynamic(() => import("@/pages/blog/CompoundedSemaglutideSafety")),
  "online-semaglutide-prescription": dynamic(() => import("@/pages/blog/OnlineSemaglutidePrescription")),
  "tirzepatide-cost-comparison": dynamic(() => import("@/pages/blog/TirzepatideCostComparison")),
  "semaglutide-without-insurance": dynamic(() => import("@/pages/blog/SemaglutideWithoutInsurance")),
  "tirzepatide-weight-loss-results": dynamic(() => import("@/pages/blog/TirzepatideWeightLossResults")),
  "semaglutide-weight-loss-online-guide": dynamic(() => import("@/pages/blog/SemaglutideWeightLossOnlineGuide")),
  "online-semaglutide-weight-loss-programs": dynamic(() => import("@/pages/blog/OnlineSemaglutideWeightLossPrograms")),
  "semaglutide-weight-loss-online-safety": dynamic(() => import("@/pages/blog/SemaglutideWeightLossOnlineSafety")),
  "semaglutide-weight-loss-online-cost": dynamic(() => import("@/pages/blog/SemaglutideWeightLossOnlineCost")),
  "semaglutide-weight-loss-online-reviews": dynamic(() => import("@/pages/blog/SemaglutideWeightLossOnlineReviews")),
  "semaglutide-blood-pressure": dynamic(() => import("@/pages/blog/SemaglutideBloodPressure")),
  "tirzepatide-cholesterol": dynamic(() => import("@/pages/blog/TirzepatideCholesterol")),
  "semaglutide-compounding-pharmacy": dynamic(() => import("@/pages/blog/SemaglutideCompoundingPharmacy")),
  "tirzepatide-gastric-emptying": dynamic(() => import("@/pages/blog/TirzepatideGastricEmptying")),
  "semaglutide-kidney-function": dynamic(() => import("@/pages/blog/SemaglutideKidneyFunction")),
  "tirzepatide-nutrition-absorption": dynamic(() => import("@/pages/blog/TirzepatideNutritionAbsorption")),
  "semaglutide-intermittent-fasting": dynamic(() => import("@/pages/blog/SemaglutideIntermittentFasting")),
  "tirzepatide-menopause": dynamic(() => import("@/pages/blog/TirzepatideMenopause")),
  "semaglutide-longevity": dynamic(() => import("@/pages/blog/SemaglutideLongevity")),
  "tirzepatide-inflammation": dynamic(() => import("@/pages/blog/TirzepatideInflammation")),
  "semaglutide-gut-health": dynamic(() => import("@/pages/blog/SemaglutideGutHealth")),
  "tirzepatide-travel-tips": dynamic(() => import("@/pages/blog/TirzepatideTravelTips")),
  "semaglutide-bone-health": dynamic(() => import("@/pages/blog/SemaglutideBoneHealth")),
  "tirzepatide-hormones": dynamic(() => import("@/pages/blog/TirzepatideHormones")),
  "semaglutide-vitamin-deficiencies": dynamic(() => import("@/pages/blog/SemaglutideVitaminDeficiencies")),
  "tirzepatide-water-retention": dynamic(() => import("@/pages/blog/TirzepatideWaterRetention")),
  "semaglutide-energy-levels": dynamic(() => import("@/pages/blog/SemaglutideEnergyLevels")),
  "tirzepatide-brain-health": dynamic(() => import("@/pages/blog/TirzepatideBrainHealth")),
  "semaglutide-food-aversions": dynamic(() => import("@/pages/blog/SemaglutideFoodAversions")),
  "tirzepatide-fatty-liver": dynamic(() => import("@/pages/blog/TirzepatideFattyLiver")),
  "semaglutide-injection-site-reactions": dynamic(() => import("@/pages/blog/SemaglutideInjectionSiteReactions")),
  "tirzepatide-appetite-control": dynamic(() => import("@/pages/blog/TirzepatideAppetiteControl")),
  "semaglutide-cost-savings": dynamic(() => import("@/pages/blog/SemaglutideCostSavings")),
  "tirzepatide-exercise-timing": dynamic(() => import("@/pages/blog/TirzepatideExerciseTiming")),
  "semaglutide-stress-cortisol": dynamic(() => import("@/pages/blog/SemaglutideStressCortisol")),
  "tirzepatide-older-adults": dynamic(() => import("@/pages/blog/TirzepatideOlderAdults")),
  "semaglutide-cost-breakdown": dynamic(() => import("@/pages/blog/SemaglutideCostBreakdown")),
  "how-to-start-semaglutide": dynamic(() => import("@/pages/blog/HowToStartSemaglutide")),
  "semaglutide-results-timeline": dynamic(() => import("@/pages/blog/SemaglutideResultsTimeline")),
  "tirzepatide-quick-start": dynamic(() => import("@/pages/blog/TirzepatideQuickStart")),
  "buying-semaglutide-online-safely": dynamic(() => import("@/pages/blog/BuyingSemaglutideOnlineSafely")),
  "understanding-glp1-medications": dynamic(() => import("@/pages/blog/UnderstandingGLP1Medications")),
  "first-month-semaglutide-or-tirzepatide": dynamic(() => import("@/pages/blog/FirstMonthSemaglutideOrTirzepatide")),
  "things-to-know-before-starting-tirzepatide": dynamic(() => import("@/pages/blog/ThingsToKnowBeforeStartingTirzepatide")),
  "kickstarting-semaglutide-basics": dynamic(() => import("@/pages/blog/KickstartingSemaglutideBasics")),
  "best-foods-tirzepatide": dynamic(() => import("@/pages/blog/BestFoodsTirzepatide")),
  "semaglutide-diet-plan-meals": dynamic(() => import("@/pages/blog/SemaglutideDietPlanMeals")),
  "managing-food-interactions-tirzepatide": dynamic(() => import("@/pages/blog/ManagingFoodInteractionsTirzepatide")),
  "semaglutide-vs-tirzepatide-key-differences": dynamic(() => import("@/pages/blog/SemaglutideVsTirzepatideKeyDifferences")),
  "switching-semaglutide-to-tirzepatide": dynamic(() => import("@/pages/blog/SwitchingSemaglutideToTirzepatide")),
  "glp1-agonists-compared": dynamic(() => import("@/pages/blog/GLP1AgonistsCompared")),
  "tirzepatide-pcos-insulin-resistance": dynamic(() => import("@/pages/blog/TirzepatidePCOSInsulinResistance")),
  "semaglutide-success-stories": dynamic(() => import("@/pages/blog/SemaglutideSuccessStories")),
  "tirzepatide-benefits-beyond-weight-loss": dynamic(() => import("@/pages/blog/TirzepatideBenefitsBeyondWeightLoss")),
  "semaglutide-tirzepatide-2025-shortages": dynamic(() => import("@/pages/blog/SemaglutideTirzepatide2025Shortages")),
  "higher-dose-semaglutide-options": dynamic(() => import("@/pages/blog/HigherDoseSemaglutideOptions")),
  "tirzepatide-vs-semaglutide-2025-updates": dynamic(() => import("@/pages/blog/TirzepatideVsSemaglutide2025Updates")),
  "managing-gi-side-effects-semaglutide": dynamic(() => import("@/pages/blog/ManagingGISideEffectsSemaglutide")),
  "tirzepatide-side-effects-2025-data": dynamic(() => import("@/pages/blog/TirzepatideSideEffects2025Data")),
  "semaglutide-real-world-results": dynamic(() => import("@/pages/blog/SemaglutideRealWorldResults")),
  "tirzepatide-cvd-risk-reduction": dynamic(() => import("@/pages/blog/TirzepatideCVDRiskReduction")),
  "semaglutide-older-adults-guidance": dynamic(() => import("@/pages/blog/SemaglutideOlderAdultsGuidance")),
  "tirzepatide-preexisting-conditions-cancer": dynamic(() => import("@/pages/blog/TirzepatidePreexistingConditionsCancer")),
  "semaglutide-weight-loss-without-diabetes": dynamic(() => import("@/pages/blog/SemaglutideWeightLossWithoutDiabetes")),
  "glp1-obesity-real-world-effectiveness": dynamic(() => import("@/pages/blog/GLP1ObesityRealWorldEffectiveness")),
  "cost-effectiveness-tirzepatide-vs-semaglutide": dynamic(() => import("@/pages/blog/CostEffectivenessTirzepatideVsSemaglutide")),
  "side-effects-semaglutide-tirzepatide": dynamic(() => import("@/pages/blog/SideEffectsSemaglutideTirzepatide")),
  "glp1-addictions-anti-consumption": dynamic(() => import("@/pages/blog/GLP1AddictionsAntiConsumption")),
  "glp1-trends-2025": dynamic(() => import("@/pages/blog/GLP1Trends2025")),
  "essential-nutrition-tips-glp1-therapy": dynamic(() => import("@/pages/blog/EssentialNutritionTipsGLP1")),
  "science-behind-glp1-effectiveness": dynamic(() => import("@/pages/blog/ScienceBehindGLP1Effectiveness")),
  "decoding-glp1-weight-loss-innovations": dynamic(() => import("@/pages/blog/DecodingGLP1WeightLossInnovations")),
  "comparing-popular-glp1-drugs": dynamic(() => import("@/pages/blog/ComparingPopularGLP1Drugs")),
  "navigating-glp1-trends-sustainable-weight-loss": dynamic(() => import("@/pages/blog/NavigatingGLP1TrendsSustainableWeightLoss")),
  "tirzepatide-vs-semaglutide-pcos-weight-loss": dynamic(() => import("@/pages/blog/TirzepatideVsSemaglutidePCOS")),
  "cheap-affordable-glp1-tirzepatide-alternatives": dynamic(() => import("@/pages/blog/CheapAffordableGLP1Alternatives")),
  "glp1-injections-near-me-clinic-guide": dynamic(() => import("@/pages/blog/GLP1InjectionsNearMeClinicGuide")),
  "best-glp1-weight-loss-without-side-effects": dynamic(() => import("@/pages/blog/BestGLP1WithoutSideEffects")),
  "managing-muscle-loss-semaglutide-exercise-nutrition": dynamic(() => import("@/pages/blog/ManagingMuscleLossSemaglutide")),
  "glp1-lab-monitoring": dynamic(() => import("@/pages/blog/GLP1LabMonitoring")),
  "semaglutide-thyroid-cancer-risk": dynamic(() => import("@/pages/blog/SemaglutideThyroidCancerRisk")),
  "tirzepatide-pancreatitis-warning-signs": dynamic(() => import("@/pages/blog/TirzepatidePancreatitisWarningSigns")),
  "glp1-gallbladder-issues-prevention": dynamic(() => import("@/pages/blog/GLP1GallbladderIssuesPrevention")),
  "managing-glp1-side-effects": dynamic(() => import("@/pages/blog/ManagingGLP1SideEffects")),
  "when-to-call-doctor-glp1": dynamic(() => import("@/pages/blog/WhenToCallDoctorGLP1")),
  "semaglutide-drug-interactions": dynamic(() => import("@/pages/blog/SemaglutideDrugInteractions")),
  "tirzepatide-allergic-reactions": dynamic(() => import("@/pages/blog/TirzepatideAllergicReactions")),
  "glp1-dehydration-prevention": dynamic(() => import("@/pages/blog/GLP1DehydrationPrevention")),
  "safe-glp1-use-with-other-medications": dynamic(() => import("@/pages/blog/SafeGLP1UseWithOtherMedications")),
  "insurance-coverage-semaglutide-weight-loss": dynamic(() => import("@/pages/blog/InsuranceCoverageSemaglutideWeightLoss")),
  "semaglutide-savings-programs": dynamic(() => import("@/pages/blog/SemaglutideSavingsPrograms")),
  "prior-authorization-glp1-approval": dynamic(() => import("@/pages/blog/PriorAuthorizationGLP1Approval")),
  "appealing-insurance-denials-glp1": dynamic(() => import("@/pages/blog/AppealingInsuranceDenialsGLP1")),
  "compounded-semaglutide-cost-safety": dynamic(() => import("@/pages/blog/CompoundedSemaglutideCostSafety")),
  "cash-pay-semaglutide-lowest-cost": dynamic(() => import("@/pages/blog/CashPaySemaglutideLowestCost")),
  "international-pharmacy-glp1-options": dynamic(() => import("@/pages/blog/InternationalPharmacyGLP1Options")),
  "employer-coverage-glp1-advocacy": dynamic(() => import("@/pages/blog/EmployerCoverageGLP1Advocacy")),
  "long-term-outcomes-hub": dynamic(() => import("@/pages/blog/LongTermOutcomesHub")),
  "maintaining-weight-loss-after-glp1": dynamic(() => import("@/pages/blog/MaintainingWeightLossAfterGLP1")),
  "long-term-health-effects-semaglutide": dynamic(() => import("@/pages/blog/LongTermHealthEffectsSemaglutide")),
  "sustainability-strategies-glp1-therapy": dynamic(() => import("@/pages/blog/SustainabilityStrategiesGLP1Therapy")),
  "lifestyle-changes-post-glp1-success": dynamic(() => import("@/pages/blog/LifestyleChangesPostGLP1Success")),
  "long-term-metabolic-benefits-glp1": dynamic(() => import("@/pages/blog/LongTermMetabolicBenefitsGLP1")),
  "managing-expectations-long-term-glp1": dynamic(() => import("@/pages/blog/ManagingExpectationsLongTermGLP1")),
  "cost-affordability-hub": dynamic(() => import("@/pages/blog/CostAffordabilityHub")),
  "getting-started-hub": dynamic(() => import("@/pages/blog/GettingStartedHub")),
  "comparisons-hub": dynamic(() => import("@/pages/blog/ComparisonsHub")),
  "side-effects-management-hub": dynamic(() => import("@/pages/blog/SideEffectsManagementHub")),
  "dosage-administration-hub": dynamic(() => import("@/pages/blog/DosageAdministrationHub")),
  "health-conditions-hub": dynamic(() => import("@/pages/blog/HealthConditionsHub")),
  "lifestyle-integration-hub": dynamic(() => import("@/pages/blog/LifestyleIntegrationHub")),
  "supply-access-hub": dynamic(() => import("@/pages/blog/SupplyAccessHub")),
  "tirzepatide-side-effects-management": dynamic(() => import("@/pages/blog/TirzepatideSideEffectsManagement")),
  "semaglutide-before-after-results": dynamic(() => import("@/pages/blog/SemaglutideBeforeAfterResults")),
  "switch-semaglutide-tirzepatide-safely": dynamic(() => import("@/pages/blog/SwitchSemaglutideTirzepatideSafely")),
  "best-foods-recipes-semaglutide": dynamic(() => import("@/pages/blog/BestFoodsRecipesSemaglutide")),
  "glp1-long-term-effects-maintenance": dynamic(() => import("@/pages/blog/GLP1LongTermEffectsMaintenance")),
  "glp1-beginner-guide": dynamic(() => import("@/pages/blog/GLP1BeginnerGuide")),
  "tirzepatide-interactions-alcohol-meds": dynamic(() => import("@/pages/blog/TirzepatideInteractionsAlcoholMeds")),
  "glp1-without-insurance-2026": dynamic(() => import("@/pages/blog/GLP1WithoutInsurance2026")),
  "exercise-routines-glp1-users": dynamic(() => import("@/pages/blog/ExerciseRoutinesGLP1Users")),
  "weight-regain-prevention-glp1": dynamic(() => import("@/pages/blog/WeightRegainPreventionGLP1")),
  "glp1-type-1-diabetes": dynamic(() => import("@/pages/blog/GLP1Type1Diabetes")),
  "best-glp1-weight-loss-2025": dynamic(() => import("@/pages/blog/BestGLP1WeightLoss2025")),
  "glp1-reproductive-health": dynamic(() => import("@/pages/blog/GLP1ReproductiveHealth")),
  "real-world-results-glp1-studies-2025": dynamic(() => import("@/pages/blog/RealWorldResultsGLP1Studies")),
  "glp1-telemedicine-apps-digital-health": dynamic(() => import("@/pages/blog/GLP1TelemedicineApps")),
  "glp1-long-term-safety-2025": dynamic(() => import("@/pages/blog/GLP1LongTermSafety2025")),
  "glp1-cardiovascular-benefits-heart-health": dynamic(() => import("@/pages/blog/GLP1CardiovascularBenefits")),
  "glp1-weight-loss-plateaus-challenges": dynamic(() => import("@/pages/blog/GLP1PlateausChallenges")),
  "glp1-access-equity-barriers-solutions": dynamic(() => import("@/pages/blog/GLP1AccessEquity")),
  "tirzepatide-menopause-weight-gain": dynamic(() => import("@/pages/blog/TirzepatideMenopauseWeightGain")),
  "semaglutide-sleep-apnea-benefits": dynamic(() => import("@/pages/blog/SemaglutideSleepApneaBenefits")),
  "vegan-meals-tirzepatide": dynamic(() => import("@/pages/blog/VeganMealsTirzepatide")),
  "semaglutide-fertility-women-over-35": dynamic(() => import("@/pages/blog/SemaglutideFertilityWomenOver35")),
  "tirzepatide-budget-travel-tips": dynamic(() => import("@/pages/blog/TirzepatideBudgetTravelTips")),
  "trimi-real-world-weight-loss-results": dynamic(() => import("@/pages/blog/TrimiRealWorldWeightLossResults")),
  "trimi-vs-competitors-glp1-comparison": dynamic(() => import("@/pages/blog/TrimiVsCompetitorsGLP1Comparison")),
  "trimi-compounded-quality-compliance": dynamic(() => import("@/pages/blog/TrimiCompoundedQualityCompliance")),
  "trimi-board-certified-providers": dynamic(() => import("@/pages/blog/TrimiBoardCertifiedProviders")),
  "compounded-vs-brand-tirzepatide-comparison": dynamic(() => import("@/pages/blog/CompoundedVsBrandTirzepatideComparison")),
  "semaglutide-tirzepatide-side-effects-contraindications": dynamic(() => import("@/pages/blog/SemaglutideTirzepatideSideEffectsContraindications")),
  "online-compounding-service-safety": dynamic(() => import("@/pages/blog/OnlineCompoundingServiceSafety")),
  "trimi-pricing-subscription-shipping": dynamic(() => import("@/pages/blog/TrimiPricingSubscriptionShipping")),
  "trimi-patient-portal-refills-dose-changes": dynamic(() => import("@/pages/blog/TrimiPatientPortalRefillsDoseChanges")),
  "trimi-signup-medical-assessment": dynamic(() => import("@/pages/blog/TrimiSignupMedicalAssessment")),
};

const blogComponents: Record<string, ComponentType> = {
  ...autoDiscoveredBlogComponents,
  ...manualBlogComponents,
};

interface Props {
  slug: string;
}

const BlogPostPage: NextPage<Props> = ({ slug }) => {
  const Component = blogComponents[slug];
  if (!Component) return <NotFound />;
  const currentPost = getBlogPostBySlug(slug);
  const relatedPosts = currentPost ? getRelatedBlogPosts(currentPost, 4) : [];

  return (
    <>
      {currentPost && relatedPosts.length > 0 && (
        <ItemListSchema
          name={`${currentPost.title} related reading`}
          description="Additional Trimi blog articles that expand on the same GLP-1 treatment topic."
          items={relatedPosts.map((post) => ({
            name: post.title,
            url: post.path,
            description: post.excerpt,
          }))}
        />
      )}
      <Component />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogComponents).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;

  if (!blogComponents[slug]) {
    return { notFound: true };
  }

  return {
    props: { slug },
  };
};

export default BlogPostPage;

