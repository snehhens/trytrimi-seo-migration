import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "@/compat/react-router-dom";

import { Suspense, lazy } from "react";
import { Analytics } from "@/components/Analytics";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SkipToContent } from "@/components/SkipToContent";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { ResourceMonitor } from "@/components/ResourceMonitor";
import { SEOHealthMonitor } from "@/components/SEOHealthMonitor";
import { PageLoadingSkeleton } from "@/components/LoadingSkeleton";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { isDev, isProd } from "@/lib/runtime-env";
// Critical routes - loaded immediately
import Index from "./pages/Index";
import Treatments from "./pages/Treatments";

// Lazy load all other routes for better performance
const TirzepatideProduct = lazy(() => import("./pages/TirzepatideProduct"));
const SemaglutideProduct = lazy(() => import("./pages/SemaglutideProduct"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BackgroundRemover = lazy(() => import("./pages/BackgroundRemover"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Calculators = lazy(() => import("./pages/Calculators"));
const Compare = lazy(() => import("./pages/Compare"));
const FAQHub = lazy(() => import("./pages/FAQHub"));
const StateGuide = lazy(() => import("./pages/blog/StateGuide"));
const LeadMagnets = lazy(() => import("./pages/LeadMagnets"));
const ImportantSafetyInformation = lazy(() => import("./pages/ImportantSafetyInformation"));

// SEO Dashboard pages
const Auth = lazy(() => import("./pages/Auth"));
const SEODashboard = lazy(() => import("./pages/SEODashboard"));
const BacklinkManager = lazy(() => import("./pages/BacklinkManager"));
const ContentUpdateManager = lazy(() => import("./pages/ContentUpdateManager"));
const ProspectResearch = lazy(() => import("./pages/ProspectResearch"));
const SitemapMonitor = lazy(() => import("./pages/SitemapMonitor"));
const MigrationTracker = lazy(() => import("./pages/MigrationTracker"));

// Hub pages - loaded immediately for better SEO
import SemaglutideHub from "./pages/SemaglutideHub";
import TirzepatideHub from "./pages/TirzepatideHub";
import CostGuideHub from "./pages/CostGuideHub";
import GettingStartedHub from "./pages/GettingStartedHub";
import ComparisonsHub from "./pages/ComparisonsHub";
import SideEffectsHub from "./pages/SideEffectsHub";
import ResultsHub from "./pages/ResultsHub";
import DosageHub from "./pages/DosageHub";
import HealthConditionsHub from "./pages/HealthConditionsHub";
import LifestyleHub from "./pages/LifestyleHub";
import SupplyAccessHub from "./pages/SupplyAccessHub";
import SafetyMonitoringHub from "./pages/SafetyMonitoringHub";
import InsuranceAccess from "./pages/InsuranceAccess";

// Pillar pages - comprehensive guides
import SemaglutideGuide from "./pages/SemaglutideGuide";
import TirzepatideGuide from "./pages/TirzepatideGuide";

// New hub pages
import DosageAdministrationHub from "./pages/blog/DosageAdministrationHub";
import HealthConditionsBlogHub from "./pages/blog/HealthConditionsHub";
import LifestyleIntegrationHub from "./pages/blog/LifestyleIntegrationHub";
import SupplyAccessBlogHub from "./pages/blog/SupplyAccessHub";

// Blog routes - lazy loaded
const GLP1LabMonitoring = lazy(() => import("./pages/blog/GLP1LabMonitoring"));
const SemaglutideThyroidCancerRisk = lazy(() => import("./pages/blog/SemaglutideThyroidCancerRisk"));
const TirzepatidePancreatitisWarningSigns = lazy(() => import("./pages/blog/TirzepatidePancreatitisWarningSigns"));
const GLP1GallbladderIssuesPrevention = lazy(() => import("./pages/blog/GLP1GallbladderIssuesPrevention"));
const ManagingGLP1SideEffects = lazy(() => import("./pages/blog/ManagingGLP1SideEffects"));
const WhenToCallDoctorGLP1 = lazy(() => import("./pages/blog/WhenToCallDoctorGLP1"));
const SemaglutideDrugInteractions = lazy(() => import("./pages/blog/SemaglutideDrugInteractions"));
const TirzepatideAllergicReactions = lazy(() => import("./pages/blog/TirzepatideAllergicReactions"));
const GLP1DehydrationPrevention = lazy(() => import("./pages/blog/GLP1DehydrationPrevention"));
const SafeGLP1UseWithOtherMedications = lazy(() => import("./pages/blog/SafeGLP1UseWithOtherMedications"));
const InsuranceCoverageSemaglutideWeightLoss = lazy(() => import("./pages/blog/InsuranceCoverageSemaglutideWeightLoss"));
const SemaglutideSavingsPrograms = lazy(() => import("./pages/blog/SemaglutideSavingsPrograms"));
const PriorAuthorizationGLP1Approval = lazy(() => import("./pages/blog/PriorAuthorizationGLP1Approval"));
const AppealingInsuranceDenialsGLP1 = lazy(() => import("./pages/blog/AppealingInsuranceDenialsGLP1"));
const CompoundedSemaglutideCostSafety = lazy(() => import("./pages/blog/CompoundedSemaglutideCostSafety"));
const CashPaySemaglutideLowestCost = lazy(() => import("./pages/blog/CashPaySemaglutideLowestCost"));
const InternationalPharmacyGLP1Options = lazy(() => import("./pages/blog/InternationalPharmacyGLP1Options"));
const EmployerCoverageGLP1Advocacy = lazy(() => import("./pages/blog/EmployerCoverageGLP1Advocacy"));
const LongTermOutcomesHub = lazy(() => import("./pages/blog/LongTermOutcomesHub"));
const CostAffordabilityHub = lazy(() => import("./pages/blog/CostAffordabilityHub"));
const GettingStartedBlogHub = lazy(() => import("./pages/blog/GettingStartedHub"));
const ComparisonsBlogHub = lazy(() => import("./pages/blog/ComparisonsHub"));
const SideEffectsManagementHub = lazy(() => import("./pages/blog/SideEffectsManagementHub"));
const MaintainingWeightLossAfterGLP1 = lazy(() => import("./pages/blog/MaintainingWeightLossAfterGLP1"));
const LongTermHealthEffectsSemaglutide = lazy(() => import("./pages/blog/LongTermHealthEffectsSemaglutide"));
const SustainabilityStrategiesGLP1Therapy = lazy(() => import("./pages/blog/SustainabilityStrategiesGLP1Therapy"));
const LifestyleChangesPostGLP1Success = lazy(() => import("./pages/blog/LifestyleChangesPostGLP1Success"));
const LongTermMetabolicBenefitsGLP1 = lazy(() => import("./pages/blog/LongTermMetabolicBenefitsGLP1"));
const ManagingExpectationsLongTermGLP1 = lazy(() => import("./pages/blog/ManagingExpectationsLongTermGLP1"));
const TirzepatideVsSemaglutide = lazy(() => import("./pages/blog/TirzepatideVsSemaglutide"));
const SemaglutideWeightLossOnlineGuide = lazy(() => import("./pages/blog/SemaglutideWeightLossOnlineGuide"));
const OnlineSemaglutideWeightLossPrograms = lazy(() => import("./pages/blog/OnlineSemaglutideWeightLossPrograms"));
const SemaglutideWeightLossOnlineSafety = lazy(() => import("./pages/blog/SemaglutideWeightLossOnlineSafety"));
const SemaglutideWeightLossOnlineCost = lazy(() => import("./pages/blog/SemaglutideWeightLossOnlineCost"));
const SemaglutideWeightLossOnlineReviews = lazy(() => import("./pages/blog/SemaglutideWeightLossOnlineReviews"));
const SemaglutideBloodPressure = lazy(() => import("./pages/blog/SemaglutideBloodPressure"));
const TirzepatideCholesterol = lazy(() => import("./pages/blog/TirzepatideCholesterol"));
const SemaglutideCompoundingPharmacy = lazy(() => import("./pages/blog/SemaglutideCompoundingPharmacy"));
const TirzepatideGastricEmptying = lazy(() => import("./pages/blog/TirzepatideGastricEmptying"));
const SemaglutideKidneyFunction = lazy(() => import("./pages/blog/SemaglutideKidneyFunction"));
const TirzepatideNutritionAbsorption = lazy(() => import("./pages/blog/TirzepatideNutritionAbsorption"));
const TirzepatideSleep = lazy(() => import("./pages/blog/TirzepatideSleep"));
const SemaglutideMentalHealth = lazy(() => import("./pages/blog/SemaglutideMentalHealth"));
const TirzepatideAthleticPerformance = lazy(() => import("./pages/blog/TirzepatideAthleticPerformance"));
const SemaglutideSkin = lazy(() => import("./pages/blog/SemaglutideSkin"));
const SemaglutideIntermittentFasting = lazy(() => import("./pages/blog/SemaglutideIntermittentFasting"));
const TirzepatideMenopause = lazy(() => import("./pages/blog/TirzepatideMenopause"));
const SemaglutideLongevity = lazy(() => import("./pages/blog/SemaglutideLongevity"));
const TirzepatideInflammation = lazy(() => import("./pages/blog/TirzepatideInflammation"));
const SemaglutideGutHealth = lazy(() => import("./pages/blog/SemaglutideGutHealth"));
const TirzepatideTravelTips = lazy(() => import("./pages/blog/TirzepatideTravelTips"));
const SemaglutideBoneHealth = lazy(() => import("./pages/blog/SemaglutideBoneHealth"));
const TirzepatideHormones = lazy(() => import("./pages/blog/TirzepatideHormones"));
const SemaglutideVitaminDeficiencies = lazy(() => import("./pages/blog/SemaglutideVitaminDeficiencies"));
const TirzepatideWaterRetention = lazy(() => import("./pages/blog/TirzepatideWaterRetention"));
const SemaglutideEnergyLevels = lazy(() => import("./pages/blog/SemaglutideEnergyLevels"));
const TirzepatideBrainHealth = lazy(() => import("./pages/blog/TirzepatideBrainHealth"));
const SemaglutideFoodAversions = lazy(() => import("./pages/blog/SemaglutideFoodAversions"));
const TirzepatideFattyLiver = lazy(() => import("./pages/blog/TirzepatideFattyLiver"));
const SemaglutideInjectionSiteReactions = lazy(() => import("./pages/blog/SemaglutideInjectionSiteReactions"));
const TirzepatideAppetiteControl = lazy(() => import("./pages/blog/TirzepatideAppetiteControl"));
const SemaglutideCostSavings = lazy(() => import("./pages/blog/SemaglutideCostSavings"));
const TirzepatideExerciseTiming = lazy(() => import("./pages/blog/TirzepatideExerciseTiming"));
const SemaglutideStressCortisol = lazy(() => import("./pages/blog/SemaglutideStressCortisol"));
const TirzepatideOlderAdults = lazy(() => import("./pages/blog/TirzepatideOlderAdults"));
const HowTirzepatideWorks = lazy(() => import("./pages/blog/HowTirzepatideWorks"));
const SemaglutideFirstMonth = lazy(() => import("./pages/blog/SemaglutideFirstMonth"));
const GLP1CompleteGuide = lazy(() => import("./pages/blog/GLP1CompleteGuide"));
const TirzepatideDosageGuide = lazy(() => import("./pages/blog/TirzepatideDosageGuide"));
const TirzepatideDosingChart = lazy(() => import("./pages/blog/TirzepatideDosingChart"));
const SemaglutideDosingChart = lazy(() => import("./pages/blog/SemaglutideDosingChart"));
const SemaglutideClinicalResults = lazy(() => import("./pages/blog/SemaglutideClinicalResults"));
const WeightLossInjectionCosts = lazy(() => import("./pages/blog/WeightLossInjectionCosts"));
const TirzepatideMechanismGuide = lazy(() => import("./pages/blog/TirzepatideMechanismGuide"));
const CheapestTirzepatideOnline = lazy(() => import("./pages/blog/CheapestTirzepatideOnline"));
const CompoundedSemaglutideVsBrandName = lazy(() => import("./pages/blog/CompoundedSemaglutideVsBrandName"));
const CompoundedTirzepatideCost = lazy(() => import("./pages/blog/CompoundedTirzepatideCost"));
const BuyTirzepatideLegallyOnline = lazy(() => import("./pages/blog/BuyTirzepatideLegallyOnline"));
const SemaglutideVsPhentermine = lazy(() => import("./pages/blog/SemaglutideVsPhentermine"));
const SemaglutideEligibility = lazy(() => import("./pages/blog/SemaglutideEligibility"));
const TirzepatideSafety = lazy(() => import("./pages/blog/TirzepatideSafety"));
const SemaglutideVsOzempicVsWegovy = lazy(() => import("./pages/blog/SemaglutideVsOzempicVsWegovy"));
const TirzepatideOnlinePrescription = lazy(() => import("./pages/blog/TirzepatideOnlinePrescription"));
const SemaglutideSideEffects = lazy(() => import("./pages/blog/SemaglutideSideEffects"));
const TirzepatideInsuranceCoverage = lazy(() => import("./pages/blog/TirzepatideInsuranceCoverage"));
const SemaglutideWeightLossResults = lazy(() => import("./pages/blog/SemaglutideWeightLossResults"));
const SemaglutideDietPlan = lazy(() => import("./pages/blog/SemaglutideDietPlan"));
const TirzepatideLongTermUse = lazy(() => import("./pages/blog/TirzepatideLongTermUse"));
const SemaglutideAlcohol = lazy(() => import("./pages/blog/SemaglutideAlcohol"));
const TirzepatidePCOS = lazy(() => import("./pages/blog/TirzepatidePCOS"));
const SemaglutideCost = lazy(() => import("./pages/blog/SemaglutideCost"));
const TirzepatideBeforeAfter = lazy(() => import("./pages/blog/TirzepatideBeforeAfter"));
const TirzepatideForPrediabetes = lazy(() => import("./pages/blog/TirzepatideForPrediabetes"));
const TirzepatideFertility = lazy(() => import("./pages/blog/TirzepatideFertility"));
const SemaglutideExercise = lazy(() => import("./pages/blog/SemaglutideExercise"));
const SemaglutidePlateau = lazy(() => import("./pages/blog/SemaglutidePlateau"));
const SemaglutideThyroid = lazy(() => import("./pages/blog/SemaglutideThyroid"));
const TirzepatideJointPain = lazy(() => import("./pages/blog/TirzepatideJointPain"));
const TirzepatideHeartHealth = lazy(() => import("./pages/blog/TirzepatideHeartHealth"));
const SemaglutidePregnancy = lazy(() => import("./pages/blog/SemaglutidePregnancy"));
const SemaglutideHairLoss = lazy(() => import("./pages/blog/SemaglutideHairLoss"));
const SemaglutideMusclePreservation = lazy(() => import("./pages/blog/SemaglutideMusclePreservation"));
const TirzepatideKidneyHealth = lazy(() => import("./pages/blog/TirzepatideKidneyHealth"));
const TirzepatideMedicationInteractions = lazy(() => import("./pages/blog/TirzepatideMedicationInteractions"));
const TirzepatideMaintenanceDose = lazy(() => import("./pages/blog/TirzepatideMaintenanceDose"));
const SemaglutideMaintenanceDose = lazy(() => import("./pages/blog/SemaglutideMaintenanceDose"));
const FindingOptimalTirzepatideDose = lazy(() => import("./pages/blog/FindingOptimalTirzepatideDose"));
const SemaglutideDoseAdjustment = lazy(() => import("./pages/blog/SemaglutideDoseAdjustment"));
const ComparingMaintenanceDoses = lazy(() => import("./pages/blog/ComparingMaintenanceDoses"));
const GLP1MaintenanceLongTermSuccess = lazy(() => import("./pages/blog/GLP1MaintenanceLongTermSuccess"));
const SemaglutideDosageGuide = lazy(() => import("./pages/blog/SemaglutideDosageGuide"));
const SemaglutideForDiabetes = lazy(() => import("./pages/blog/SemaglutideForDiabetes"));
const SemaglutideInjectionGuide = lazy(() => import("./pages/blog/SemaglutideInjectionGuide"));
const SemaglutideStopping = lazy(() => import("./pages/blog/SemaglutideStopping"));
const TirzepatideSideEffects = lazy(() => import("./pages/blog/TirzepatideSideEffects"));
const TirzepatideFirstMonth = lazy(() => import("./pages/blog/TirzepatideFirstMonth"));
const TirzepatideDietGuide = lazy(() => import("./pages/blog/TirzepatideDietGuide"));
const SemaglutideCostBreakdown = lazy(() => import("./pages/blog/SemaglutideCostBreakdown"));
const HowToStartSemaglutide = lazy(() => import("./pages/blog/HowToStartSemaglutide"));
const SemaglutideResultsTimeline = lazy(() => import("./pages/blog/SemaglutideResultsTimeline"));
const TirzepatideQuickStart = lazy(() => import("./pages/blog/TirzepatideQuickStart"));
const BuyingSemaglutideOnlineSafely = lazy(() => import("./pages/blog/BuyingSemaglutideOnlineSafely"));
const UnderstandingGLP1Medications = lazy(() => import("./pages/blog/UnderstandingGLP1Medications"));
const TirzepatideExercise = lazy(() => import("./pages/blog/TirzepatideExercise"));
const BuySemaglutideOnline = lazy(() => import("./pages/blog/BuySemaglutideOnline"));
const BuyTirzepatideOnline = lazy(() => import("./pages/blog/BuyTirzepatideOnline"));
const CompoundedSemaglutideSafety = lazy(() => import("./pages/blog/CompoundedSemaglutideSafety"));
const OnlineSemaglutidePrescription = lazy(() => import("./pages/blog/OnlineSemaglutidePrescription"));
const TirzepatideCostComparison = lazy(() => import("./pages/blog/TirzepatideCostComparison"));
const SemaglutideWithoutInsurance = lazy(() => import("./pages/blog/SemaglutideWithoutInsurance"));
const TirzepatideWeightLossResults = lazy(() => import("./pages/blog/TirzepatideWeightLossResults"));
const CategorySemaglutide = lazy(() => import("./pages/blog/CategorySemaglutide"));
const CategoryTirzepatide = lazy(() => import("./pages/blog/CategoryTirzepatide"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const FirstMonthSemaglutideOrTirzepatide = lazy(() => import("./pages/blog/FirstMonthSemaglutideOrTirzepatide"));
const ThingsToKnowBeforeStartingTirzepatide = lazy(() => import("./pages/blog/ThingsToKnowBeforeStartingTirzepatide"));
const KickstartingSemaglutideBasics = lazy(() => import("./pages/blog/KickstartingSemaglutideBasics"));
const BestFoodsTirzepatide = lazy(() => import("./pages/blog/BestFoodsTirzepatide"));
const SemaglutideDietPlanMeals = lazy(() => import("./pages/blog/SemaglutideDietPlanMeals"));
const ManagingFoodInteractionsTirzepatide = lazy(() => import("./pages/blog/ManagingFoodInteractionsTirzepatide"));
const SemaglutideVsTirzepatideKeyDifferences = lazy(() => import("./pages/blog/SemaglutideVsTirzepatideKeyDifferences"));
const SwitchingSemaglutideToTirzepatide = lazy(() => import("./pages/blog/SwitchingSemaglutideToTirzepatide"));
const GLP1AgonistsCompared = lazy(() => import("./pages/blog/GLP1AgonistsCompared"));
const TirzepatidePCOSInsulinResistance = lazy(() => import("./pages/blog/TirzepatidePCOSInsulinResistance"));
const SemaglutideSuccessStories = lazy(() => import("./pages/blog/SemaglutideSuccessStories"));
const TirzepatideBenefitsBeyondWeightLoss = lazy(() => import("./pages/blog/TirzepatideBenefitsBeyondWeightLoss"));

// New January 2025 posts
const SemaglutideTirzepatide2025Shortages = lazy(() => import("./pages/blog/SemaglutideTirzepatide2025Shortages"));
const HigherDoseSemaglutideOptions = lazy(() => import("./pages/blog/HigherDoseSemaglutideOptions"));
const TirzepatideVsSemaglutide2025Updates = lazy(() => import("./pages/blog/TirzepatideVsSemaglutide2025Updates"));
const ManagingGISideEffectsSemaglutide = lazy(() => import("./pages/blog/ManagingGISideEffectsSemaglutide"));
const TirzepatideSideEffects2025Data = lazy(() => import("./pages/blog/TirzepatideSideEffects2025Data"));
const SemaglutideRealWorldResults = lazy(() => import("./pages/blog/SemaglutideRealWorldResults"));
const TirzepatideCVDRiskReduction = lazy(() => import("./pages/blog/TirzepatideCVDRiskReduction"));
const SemaglutideOlderAdultsGuidance = lazy(() => import("./pages/blog/SemaglutideOlderAdultsGuidance"));
const TirzepatidePreexistingConditionsCancer = lazy(() => import("./pages/blog/TirzepatidePreexistingConditionsCancer"));
const SemaglutideWeightLossWithoutDiabetes = lazy(() => import("./pages/blog/SemaglutideWeightLossWithoutDiabetes"));
const GLP1ObesityRealWorldEffectiveness = lazy(() => import("./pages/blog/GLP1ObesityRealWorldEffectiveness"));
const CostEffectivenessTirzepatideVsSemaglutide = lazy(() => import("./pages/blog/CostEffectivenessTirzepatideVsSemaglutide"));
const SideEffectsSemaglutideTirzepatide = lazy(() => import("./pages/blog/SideEffectsSemaglutideTirzepatide"));
const GLP1AddictionsAntiConsumption = lazy(() => import("./pages/blog/GLP1AddictionsAntiConsumption"));
const GLP1Trends2025 = lazy(() => import("./pages/blog/GLP1Trends2025"));
const EssentialNutritionTipsGLP1 = lazy(() => import("./pages/blog/EssentialNutritionTipsGLP1"));
const ScienceBehindGLP1Effectiveness = lazy(() => import("./pages/blog/ScienceBehindGLP1Effectiveness"));
const DecodingGLP1WeightLossInnovations = lazy(() => import("./pages/blog/DecodingGLP1WeightLossInnovations"));
const ComparingPopularGLP1Drugs = lazy(() => import("./pages/blog/ComparingPopularGLP1Drugs"));
const NavigatingGLP1TrendsSustainableWeightLoss = lazy(() => import("./pages/blog/NavigatingGLP1TrendsSustainableWeightLoss"));
const TirzepatideVsSemaglutidePCOS = lazy(() => import("./pages/blog/TirzepatideVsSemaglutidePCOS"));
const CheapAffordableGLP1Alternatives = lazy(() => import("./pages/blog/CheapAffordableGLP1Alternatives"));
const GLP1InjectionsNearMeClinicGuide = lazy(() => import("./pages/blog/GLP1InjectionsNearMeClinicGuide"));
const BestGLP1WithoutSideEffects = lazy(() => import("./pages/blog/BestGLP1WithoutSideEffects"));
const ManagingMuscleLossSemaglutide = lazy(() => import("./pages/blog/ManagingMuscleLossSemaglutide"));

// New December 2025 posts
const TirzepatideSideEffectsManagement = lazy(() => import("./pages/blog/TirzepatideSideEffectsManagement"));
const SemaglutideBeforeAfterResults = lazy(() => import("./pages/blog/SemaglutideBeforeAfterResults"));
const SwitchSemaglutideTirzepatideSafely = lazy(() => import("./pages/blog/SwitchSemaglutideTirzepatideSafely"));
const BestFoodsRecipesSemaglutide = lazy(() => import("./pages/blog/BestFoodsRecipesSemaglutide"));
const GLP1LongTermEffectsMaintenance = lazy(() => import("./pages/blog/GLP1LongTermEffectsMaintenance"));
const GLP1BeginnerGuide = lazy(() => import("./pages/blog/GLP1BeginnerGuide"));
const TirzepatideInteractionsAlcoholMeds = lazy(() => import("./pages/blog/TirzepatideInteractionsAlcoholMeds"));
const GLP1WithoutInsurance2026 = lazy(() => import("./pages/blog/GLP1WithoutInsurance2026"));
const ExerciseRoutinesGLP1Users = lazy(() => import("./pages/blog/ExerciseRoutinesGLP1Users"));
const WeightRegainPreventionGLP1 = lazy(() => import("./pages/blog/WeightRegainPreventionGLP1"));
const GLP1Type1Diabetes = lazy(() => import("./pages/blog/GLP1Type1Diabetes"));
const BestGLP1WeightLoss2025 = lazy(() => import("./pages/blog/BestGLP1WeightLoss2025"));
const GLP1ReproductiveHealth = lazy(() => import("./pages/blog/GLP1ReproductiveHealth"));
const RealWorldResultsGLP1Studies = lazy(() => import("./pages/blog/RealWorldResultsGLP1Studies"));
const GLP1TelemedicineApps = lazy(() => import("./pages/blog/GLP1TelemedicineApps"));
const GLP1LongTermSafety2025 = lazy(() => import("./pages/blog/GLP1LongTermSafety2025"));
const GLP1CardiovascularBenefits = lazy(() => import("./pages/blog/GLP1CardiovascularBenefits"));
const GLP1PlateausChallenges = lazy(() => import("./pages/blog/GLP1PlateausChallenges"));
const GLP1AccessEquity = lazy(() => import("./pages/blog/GLP1AccessEquity"));

// New December 2025 batch posts
const TirzepatideMenopauseWeightGain = lazy(() => import("./pages/blog/TirzepatideMenopauseWeightGain"));
const SemaglutideSleepApneaBenefits = lazy(() => import("./pages/blog/SemaglutideSleepApneaBenefits"));
const VeganMealsTirzepatide = lazy(() => import("./pages/blog/VeganMealsTirzepatide"));
const SemaglutideFertilityWomenOver35 = lazy(() => import("./pages/blog/SemaglutideFertilityWomenOver35"));
const TirzepatideBudgetTravelTips = lazy(() => import("./pages/blog/TirzepatideBudgetTravelTips"));

// New January 2026 Trimi-focused posts
const TrimiRealWorldWeightLossResults = lazy(() => import("./pages/blog/TrimiRealWorldWeightLossResults"));
const TrimiVsCompetitorsGLP1Comparison = lazy(() => import("./pages/blog/TrimiVsCompetitorsGLP1Comparison"));
const TrimiCompoundedQualityCompliance = lazy(() => import("./pages/blog/TrimiCompoundedQualityCompliance"));
const TrimiBoardCertifiedProviders = lazy(() => import("./pages/blog/TrimiBoardCertifiedProviders"));
const CompoundedVsBrandTirzepatideComparison = lazy(() => import("./pages/blog/CompoundedVsBrandTirzepatideComparison"));

// New January 2026 Trimi posts - Batch 2
const SemaglutideTirzepatideSideEffectsContraindications = lazy(() => import("./pages/blog/SemaglutideTirzepatideSideEffectsContraindications"));
const OnlineCompoundingServiceSafety = lazy(() => import("./pages/blog/OnlineCompoundingServiceSafety"));
const TrimiPricingSubscriptionShipping = lazy(() => import("./pages/blog/TrimiPricingSubscriptionShipping"));
const TrimiPatientPortalRefillsDoseChanges = lazy(() => import("./pages/blog/TrimiPatientPortalRefillsDoseChanges"));
const TrimiSignupMedicalAssessment = lazy(() => import("./pages/blog/TrimiSignupMedicalAssessment"));

import { registerServiceWorker } from "./utils/serviceWorkerRegistration";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Register service worker for caching
if (isProd) {
  registerServiceWorker();
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
          <ScrollToTop />
          <ExitIntentPopup />
          <SkipToContent />
          <Analytics />
          {isDev && (
            <>
              <PerformanceMonitor />
              <ResourceMonitor />
              <SEOHealthMonitor />
              </>
            )}
            <Suspense fallback={<PageLoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/tirzepatide" element={<TirzepatideProduct />} />
              <Route path="/treatments/semaglutide" element={<SemaglutideProduct />} />
              <Route path="/semaglutide" element={<Navigate to="/treatments/semaglutide" replace />} />
              <Route path="/tirzepatide" element={<Navigate to="/treatments/tirzepatide" replace />} />
              <Route path="/semaglutide-guide" element={<SemaglutideGuide />} />
              <Route path="/tirzepatide-guide" element={<TirzepatideGuide />} />
              <Route path="/cost-guide" element={<CostGuideHub />} />
              <Route path="/getting-started-hub" element={<GettingStartedHub />} />
              <Route path="/comparisons-hub" element={<ComparisonsHub />} />
              <Route path="/side-effects-hub" element={<SideEffectsHub />} />
              <Route path="/results-hub" element={<ResultsHub />} />
              <Route path="/dosage-hub" element={<DosageHub />} />
              <Route path="/health-conditions-hub" element={<HealthConditionsHub />} />
              <Route path="/lifestyle-hub" element={<LifestyleHub />} />
              <Route path="/supply-access-hub" element={<SupplyAccessHub />} />
              <Route path="/safety-monitoring-hub" element={<SafetyMonitoringHub />} />
              <Route path="/insurance-access" element={<InsuranceAccess />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/important-safety-information" element={<ImportantSafetyInformation />} />
              <Route path="/auth" element={<Auth />} />
          <Route path="/seo-dashboard" element={<SEODashboard />} />
          <Route path="/seo-dashboard/backlinks" element={<BacklinkManager />} />
          <Route path="/seo-dashboard/content" element={<ContentUpdateManager />} />
          <Route path="/seo-dashboard/research" element={<ProspectResearch />} />
          <Route path="/seo-dashboard/sitemap-monitor" element={<SitemapMonitor />} />
              <Route path="/blog/category/semaglutide" element={<CategorySemaglutide />} />
              <Route path="/blog/category/tirzepatide" element={<CategoryTirzepatide />} />
              <Route path="/blog/tirzepatide-vs-semaglutide" element={<TirzepatideVsSemaglutide />} />
              <Route path="/blog/how-tirzepatide-works" element={<HowTirzepatideWorks />} />
              <Route path="/blog/semaglutide-first-month" element={<SemaglutideFirstMonth />} />
              <Route path="/blog/glp1-complete-guide" element={<GLP1CompleteGuide />} />
              <Route path="/blog/tirzepatide-dosage-guide" element={<TirzepatideDosageGuide />} />
              <Route path="/blog/tirzepatide-dosing-chart" element={<TirzepatideDosingChart />} />
              <Route path="/blog/semaglutide-dosing-chart" element={<SemaglutideDosingChart />} />
              <Route path="/blog/semaglutide-clinical-results" element={<SemaglutideClinicalResults />} />
              <Route path="/blog/weight-loss-injection-costs" element={<WeightLossInjectionCosts />} />
              <Route path="/blog/tirzepatide-mechanism-guide" element={<TirzepatideMechanismGuide />} />
              <Route path="/blog/cheapest-tirzepatide-online" element={<CheapestTirzepatideOnline />} />
              <Route path="/blog/compounded-semaglutide-vs-brand-name" element={<CompoundedSemaglutideVsBrandName />} />
              <Route path="/blog/compounded-tirzepatide-cost" element={<CompoundedTirzepatideCost />} />
              <Route path="/blog/buy-tirzepatide-legally-online" element={<BuyTirzepatideLegallyOnline />} />
              <Route path="/blog/semaglutide-vs-phentermine" element={<SemaglutideVsPhentermine />} />
              <Route path="/blog/semaglutide-eligibility" element={<SemaglutideEligibility />} />
              <Route path="/blog/tirzepatide-safety" element={<TirzepatideSafety />} />
              <Route path="/blog/semaglutide-vs-ozempic-vs-wegovy" element={<SemaglutideVsOzempicVsWegovy />} />
              <Route path="/blog/tirzepatide-online-prescription" element={<TirzepatideOnlinePrescription />} />
              <Route path="/blog/semaglutide-side-effects" element={<SemaglutideSideEffects />} />
              <Route path="/blog/tirzepatide-insurance-coverage" element={<TirzepatideInsuranceCoverage />} />
              <Route path="/blog/semaglutide-weight-loss-results" element={<SemaglutideWeightLossResults />} />
              <Route path="/blog/semaglutide-diet-plan" element={<SemaglutideDietPlan />} />
              <Route path="/blog/tirzepatide-long-term-use" element={<TirzepatideLongTermUse />} />
              <Route path="/blog/semaglutide-alcohol" element={<SemaglutideAlcohol />} />
              <Route path="/blog/tirzepatide-pcos" element={<TirzepatidePCOS />} />
              <Route path="/blog/semaglutide-cost" element={<SemaglutideCost />} />
              <Route path="/blog/tirzepatide-before-after" element={<TirzepatideBeforeAfter />} />
              <Route path="/blog/tirzepatide-for-prediabetes" element={<TirzepatideForPrediabetes />} />
              <Route path="/blog/tirzepatide-fertility" element={<TirzepatideFertility />} />
              <Route path="/blog/semaglutide-exercise" element={<SemaglutideExercise />} />
              <Route path="/blog/semaglutide-plateau" element={<SemaglutidePlateau />} />
              <Route path="/blog/semaglutide-thyroid" element={<SemaglutideThyroid />} />
              <Route path="/blog/tirzepatide-sleep" element={<TirzepatideSleep />} />
              <Route path="/blog/semaglutide-skin" element={<SemaglutideSkin />} />
              <Route path="/blog/tirzepatide-joint-pain" element={<TirzepatideJointPain />} />
              <Route path="/blog/semaglutide-mental-health" element={<SemaglutideMentalHealth />} />
              <Route path="/blog/tirzepatide-athletic-performance" element={<TirzepatideAthleticPerformance />} />
              <Route path="/blog/tirzepatide-heart-health" element={<TirzepatideHeartHealth />} />
              <Route path="/blog/semaglutide-pregnancy" element={<SemaglutidePregnancy />} />
              <Route path="/blog/semaglutide-hair-loss" element={<SemaglutideHairLoss />} />
              <Route path="/blog/semaglutide-muscle-preservation" element={<SemaglutideMusclePreservation />} />
              <Route path="/blog/tirzepatide-kidney-health" element={<TirzepatideKidneyHealth />} />
              <Route path="/blog/tirzepatide-medication-interactions" element={<TirzepatideMedicationInteractions />} />
          <Route path="/blog/tirzepatide-maintenance-dose" element={<TirzepatideMaintenanceDose />} />
          <Route path="/blog/semaglutide-maintenance-dose" element={<SemaglutideMaintenanceDose />} />
          <Route path="/blog/finding-optimal-tirzepatide-dose" element={<FindingOptimalTirzepatideDose />} />
          <Route path="/blog/semaglutide-dose-adjustment" element={<SemaglutideDoseAdjustment />} />
          <Route path="/blog/comparing-maintenance-doses" element={<ComparingMaintenanceDoses />} />
          <Route path="/blog/glp1-maintenance-long-term-success" element={<GLP1MaintenanceLongTermSuccess />} />
          <Route path="/blog/semaglutide-dosage-guide" element={<SemaglutideDosageGuide />} />
              <Route path="/blog/semaglutide-for-diabetes" element={<SemaglutideForDiabetes />} />
              <Route path="/blog/semaglutide-injection-guide" element={<SemaglutideInjectionGuide />} />
              <Route path="/blog/semaglutide-stopping" element={<SemaglutideStopping />} />
              <Route path="/blog/tirzepatide-side-effects" element={<TirzepatideSideEffects />} />
              <Route path="/blog/tirzepatide-first-month" element={<TirzepatideFirstMonth />} />
              <Route path="/blog/tirzepatide-diet-guide" element={<TirzepatideDietGuide />} />
              <Route path="/blog/tirzepatide-exercise" element={<TirzepatideExercise />} />
              <Route path="/blog/buy-semaglutide-online" element={<BuySemaglutideOnline />} />
              <Route path="/blog/buy-tirzepatide-online" element={<BuyTirzepatideOnline />} />
              <Route path="/blog/compounded-semaglutide-safety" element={<CompoundedSemaglutideSafety />} />
              <Route path="/blog/online-semaglutide-prescription" element={<OnlineSemaglutidePrescription />} />
              <Route path="/blog/tirzepatide-cost-comparison" element={<TirzepatideCostComparison />} />
              <Route path="/blog/semaglutide-without-insurance" element={<SemaglutideWithoutInsurance />} />
              <Route path="/blog/tirzepatide-weight-loss-results" element={<TirzepatideWeightLossResults />} />
              <Route path="/background-remover" element={<BackgroundRemover />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/faq-hub" element={<FAQHub />} />
              <Route path="/state/:state" element={<StateGuide />} />
              <Route path="/resources" element={<LeadMagnets />} />
              <Route path="/blog/semaglutide-weight-loss-online-guide" element={<SemaglutideWeightLossOnlineGuide />} />
              <Route path="/blog/online-semaglutide-weight-loss-programs" element={<OnlineSemaglutideWeightLossPrograms />} />
              <Route path="/blog/semaglutide-weight-loss-online-safety" element={<SemaglutideWeightLossOnlineSafety />} />
              <Route path="/blog/semaglutide-weight-loss-online-cost" element={<SemaglutideWeightLossOnlineCost />} />
              <Route path="/blog/semaglutide-weight-loss-online-reviews" element={<SemaglutideWeightLossOnlineReviews />} />
              <Route path="/blog/semaglutide-blood-pressure" element={<SemaglutideBloodPressure />} />
              <Route path="/blog/tirzepatide-cholesterol" element={<TirzepatideCholesterol />} />
              <Route path="/blog/semaglutide-compounding-pharmacy" element={<SemaglutideCompoundingPharmacy />} />
              <Route path="/blog/tirzepatide-gastric-emptying" element={<TirzepatideGastricEmptying />} />
              <Route path="/blog/semaglutide-kidney-function" element={<SemaglutideKidneyFunction />} />
              <Route path="/blog/tirzepatide-nutrition-absorption" element={<TirzepatideNutritionAbsorption />} />
              <Route path="/blog/semaglutide-intermittent-fasting" element={<SemaglutideIntermittentFasting />} />
              <Route path="/blog/tirzepatide-menopause" element={<TirzepatideMenopause />} />
              <Route path="/blog/semaglutide-longevity" element={<SemaglutideLongevity />} />
              <Route path="/blog/tirzepatide-inflammation" element={<TirzepatideInflammation />} />
              <Route path="/blog/semaglutide-gut-health" element={<SemaglutideGutHealth />} />
              <Route path="/blog/tirzepatide-travel-tips" element={<TirzepatideTravelTips />} />
              <Route path="/blog/semaglutide-bone-health" element={<SemaglutideBoneHealth />} />
              <Route path="/blog/tirzepatide-hormones" element={<TirzepatideHormones />} />
              <Route path="/blog/semaglutide-vitamin-deficiencies" element={<SemaglutideVitaminDeficiencies />} />
              <Route path="/blog/tirzepatide-water-retention" element={<TirzepatideWaterRetention />} />
              <Route path="/blog/semaglutide-energy-levels" element={<SemaglutideEnergyLevels />} />
              <Route path="/blog/tirzepatide-brain-health" element={<TirzepatideBrainHealth />} />
              <Route path="/blog/semaglutide-food-aversions" element={<SemaglutideFoodAversions />} />
              <Route path="/blog/tirzepatide-fatty-liver" element={<TirzepatideFattyLiver />} />
              <Route path="/blog/semaglutide-injection-site-reactions" element={<SemaglutideInjectionSiteReactions />} />
              <Route path="/blog/tirzepatide-appetite-control" element={<TirzepatideAppetiteControl />} />
              <Route path="/blog/semaglutide-cost-savings" element={<SemaglutideCostSavings />} />
              <Route path="/blog/tirzepatide-exercise-timing" element={<TirzepatideExerciseTiming />} />
              <Route path="/blog/semaglutide-stress-cortisol" element={<SemaglutideStressCortisol />} />
              <Route path="/blog/tirzepatide-older-adults" element={<TirzepatideOlderAdults />} />
              <Route path="/blog/semaglutide-cost-breakdown" element={<SemaglutideCostBreakdown />} />
              <Route path="/blog/how-to-start-semaglutide" element={<HowToStartSemaglutide />} />
              <Route path="/blog/semaglutide-results-timeline" element={<SemaglutideResultsTimeline />} />
              <Route path="/blog/tirzepatide-quick-start" element={<TirzepatideQuickStart />} />
              <Route path="/blog/buying-semaglutide-online-safely" element={<BuyingSemaglutideOnlineSafely />} />
              <Route path="/blog/understanding-glp1-medications" element={<UnderstandingGLP1Medications />} />
              <Route path="/blog/first-month-semaglutide-or-tirzepatide" element={<FirstMonthSemaglutideOrTirzepatide />} />
              <Route path="/blog/things-to-know-before-starting-tirzepatide" element={<ThingsToKnowBeforeStartingTirzepatide />} />
              <Route path="/blog/kickstarting-semaglutide-basics" element={<KickstartingSemaglutideBasics />} />
              <Route path="/blog/best-foods-tirzepatide" element={<BestFoodsTirzepatide />} />
              <Route path="/blog/semaglutide-diet-plan-meals" element={<SemaglutideDietPlanMeals />} />
              <Route path="/blog/managing-food-interactions-tirzepatide" element={<ManagingFoodInteractionsTirzepatide />} />
              <Route path="/blog/semaglutide-vs-tirzepatide-key-differences" element={<SemaglutideVsTirzepatideKeyDifferences />} />
              <Route path="/blog/switching-semaglutide-to-tirzepatide" element={<SwitchingSemaglutideToTirzepatide />} />
              <Route path="/blog/glp1-agonists-compared" element={<GLP1AgonistsCompared />} />
              <Route path="/blog/tirzepatide-pcos-insulin-resistance" element={<TirzepatidePCOSInsulinResistance />} />
              <Route path="/blog/semaglutide-success-stories" element={<SemaglutideSuccessStories />} />
              <Route path="/blog/tirzepatide-benefits-beyond-weight-loss" element={<TirzepatideBenefitsBeyondWeightLoss />} />
              
              {/* New January 2025 posts */}
              <Route path="/blog/semaglutide-tirzepatide-2025-shortages" element={<SemaglutideTirzepatide2025Shortages />} />
              <Route path="/blog/higher-dose-semaglutide-options" element={<HigherDoseSemaglutideOptions />} />
              <Route path="/blog/tirzepatide-vs-semaglutide-2025-updates" element={<TirzepatideVsSemaglutide2025Updates />} />
              <Route path="/blog/managing-gi-side-effects-semaglutide" element={<ManagingGISideEffectsSemaglutide />} />
              <Route path="/blog/tirzepatide-side-effects-2025-data" element={<TirzepatideSideEffects2025Data />} />
              <Route path="/blog/semaglutide-real-world-results" element={<SemaglutideRealWorldResults />} />
              <Route path="/blog/tirzepatide-cvd-risk-reduction" element={<TirzepatideCVDRiskReduction />} />
              <Route path="/blog/semaglutide-older-adults-guidance" element={<SemaglutideOlderAdultsGuidance />} />
              <Route path="/blog/tirzepatide-preexisting-conditions-cancer" element={<TirzepatidePreexistingConditionsCancer />} />
              <Route path="/blog/semaglutide-weight-loss-without-diabetes" element={<SemaglutideWeightLossWithoutDiabetes />} />
              <Route path="/blog/glp1-obesity-real-world-effectiveness" element={<GLP1ObesityRealWorldEffectiveness />} />
              <Route path="/blog/cost-effectiveness-tirzepatide-vs-semaglutide" element={<CostEffectivenessTirzepatideVsSemaglutide />} />
              <Route path="/blog/side-effects-semaglutide-tirzepatide" element={<SideEffectsSemaglutideTirzepatide />} />
              <Route path="/blog/glp1-addictions-anti-consumption" element={<GLP1AddictionsAntiConsumption />} />
              <Route path="/blog/glp1-trends-2025" element={<GLP1Trends2025 />} />
            <Route path="/blog/essential-nutrition-tips-glp1-therapy" element={<EssentialNutritionTipsGLP1 />} />
            <Route path="/blog/science-behind-glp1-effectiveness" element={<ScienceBehindGLP1Effectiveness />} />
            <Route path="/blog/decoding-glp1-weight-loss-innovations" element={<DecodingGLP1WeightLossInnovations />} />
            <Route path="/blog/comparing-popular-glp1-drugs" element={<ComparingPopularGLP1Drugs />} />
            <Route path="/blog/navigating-glp1-trends-sustainable-weight-loss" element={<NavigatingGLP1TrendsSustainableWeightLoss />} />
            <Route path="/blog/tirzepatide-vs-semaglutide-pcos-weight-loss" element={<TirzepatideVsSemaglutidePCOS />} />
            <Route path="/blog/cheap-affordable-glp1-tirzepatide-alternatives" element={<CheapAffordableGLP1Alternatives />} />
            <Route path="/blog/glp1-injections-near-me-clinic-guide" element={<GLP1InjectionsNearMeClinicGuide />} />
            <Route path="/blog/best-glp1-weight-loss-without-side-effects" element={<BestGLP1WithoutSideEffects />} />
            <Route path="/blog/managing-muscle-loss-semaglutide-exercise-nutrition" element={<ManagingMuscleLossSemaglutide />} />
              <Route path="/blog/glp1-lab-monitoring" element={<GLP1LabMonitoring />} />
              <Route path="/blog/semaglutide-thyroid-cancer-risk" element={<SemaglutideThyroidCancerRisk />} />
              <Route path="/blog/tirzepatide-pancreatitis-warning-signs" element={<TirzepatidePancreatitisWarningSigns />} />
              <Route path="/blog/glp1-gallbladder-issues-prevention" element={<GLP1GallbladderIssuesPrevention />} />
              <Route path="/blog/managing-glp1-side-effects" element={<ManagingGLP1SideEffects />} />
              <Route path="/blog/when-to-call-doctor-glp1" element={<WhenToCallDoctorGLP1 />} />
              <Route path="/blog/semaglutide-drug-interactions" element={<SemaglutideDrugInteractions />} />
              <Route path="/blog/tirzepatide-allergic-reactions" element={<TirzepatideAllergicReactions />} />
              <Route path="/blog/glp1-dehydration-prevention" element={<GLP1DehydrationPrevention />} />
              <Route path="/blog/safe-glp1-use-with-other-medications" element={<SafeGLP1UseWithOtherMedications />} />
              <Route path="/blog/insurance-coverage-semaglutide-weight-loss" element={<InsuranceCoverageSemaglutideWeightLoss />} />
              <Route path="/blog/semaglutide-savings-programs" element={<SemaglutideSavingsPrograms />} />
              <Route path="/blog/prior-authorization-glp1-approval" element={<PriorAuthorizationGLP1Approval />} />
              <Route path="/blog/appealing-insurance-denials-glp1" element={<AppealingInsuranceDenialsGLP1 />} />
              <Route path="/blog/compounded-semaglutide-cost-safety" element={<CompoundedSemaglutideCostSafety />} />
              <Route path="/blog/cash-pay-semaglutide-lowest-cost" element={<CashPaySemaglutideLowestCost />} />
              <Route path="/blog/international-pharmacy-glp1-options" element={<InternationalPharmacyGLP1Options />} />
              <Route path="/blog/employer-coverage-glp1-advocacy" element={<EmployerCoverageGLP1Advocacy />} />
              <Route path="/blog/long-term-outcomes-hub" element={<LongTermOutcomesHub />} />
              <Route path="/blog/maintaining-weight-loss-after-glp1" element={<MaintainingWeightLossAfterGLP1 />} />
              <Route path="/blog/long-term-health-effects-semaglutide" element={<LongTermHealthEffectsSemaglutide />} />
              <Route path="/blog/sustainability-strategies-glp1-therapy" element={<SustainabilityStrategiesGLP1Therapy />} />
              <Route path="/blog/lifestyle-changes-post-glp1-success" element={<LifestyleChangesPostGLP1Success />} />
              <Route path="/blog/long-term-metabolic-benefits-glp1" element={<LongTermMetabolicBenefitsGLP1 />} />
              <Route path="/blog/managing-expectations-long-term-glp1" element={<ManagingExpectationsLongTermGLP1 />} />
              
              {/* New Hub Pages */}
              <Route path="/blog/cost-affordability-hub" element={<CostAffordabilityHub />} />
              <Route path="/blog/getting-started-hub" element={<GettingStartedBlogHub />} />
              <Route path="/blog/comparisons-hub" element={<ComparisonsBlogHub />} />
              <Route path="/blog/side-effects-management-hub" element={<SideEffectsManagementHub />} />
              <Route path="/blog/dosage-administration-hub" element={<DosageAdministrationHub />} />
              <Route path="/blog/health-conditions-hub" element={<HealthConditionsBlogHub />} />
              <Route path="/blog/lifestyle-integration-hub" element={<LifestyleIntegrationHub />} />
              <Route path="/blog/supply-access-hub" element={<SupplyAccessBlogHub />} />
              
              {/* New December 2025 posts */}
              <Route path="/blog/tirzepatide-side-effects-management" element={<TirzepatideSideEffectsManagement />} />
              <Route path="/blog/semaglutide-before-after-results" element={<SemaglutideBeforeAfterResults />} />
              <Route path="/blog/switch-semaglutide-tirzepatide-safely" element={<SwitchSemaglutideTirzepatideSafely />} />
              <Route path="/blog/best-foods-recipes-semaglutide" element={<BestFoodsRecipesSemaglutide />} />
              <Route path="/blog/glp1-long-term-effects-maintenance" element={<GLP1LongTermEffectsMaintenance />} />
              <Route path="/blog/glp1-beginner-guide" element={<GLP1BeginnerGuide />} />
              <Route path="/blog/tirzepatide-interactions-alcohol-meds" element={<TirzepatideInteractionsAlcoholMeds />} />
              <Route path="/blog/glp1-without-insurance-2026" element={<GLP1WithoutInsurance2026 />} />
              <Route path="/blog/exercise-routines-glp1-users" element={<ExerciseRoutinesGLP1Users />} />
              <Route path="/blog/weight-regain-prevention-glp1" element={<WeightRegainPreventionGLP1 />} />
              <Route path="/blog/glp1-type-1-diabetes" element={<GLP1Type1Diabetes />} />
              <Route path="/blog/best-glp1-weight-loss-2025" element={<BestGLP1WeightLoss2025 />} />
              <Route path="/blog/glp1-reproductive-health" element={<GLP1ReproductiveHealth />} />
              <Route path="/blog/real-world-results-glp1-studies-2025" element={<RealWorldResultsGLP1Studies />} />
              <Route path="/blog/glp1-telemedicine-apps-digital-health" element={<GLP1TelemedicineApps />} />
              <Route path="/blog/glp1-long-term-safety-2025" element={<GLP1LongTermSafety2025 />} />
              <Route path="/blog/glp1-cardiovascular-benefits-heart-health" element={<GLP1CardiovascularBenefits />} />
              <Route path="/blog/glp1-weight-loss-plateaus-challenges" element={<GLP1PlateausChallenges />} />
              <Route path="/blog/glp1-access-equity-barriers-solutions" element={<GLP1AccessEquity />} />
              
              {/* New December 2025 batch posts */}
              <Route path="/blog/tirzepatide-menopause-weight-gain" element={<TirzepatideMenopauseWeightGain />} />
              <Route path="/blog/semaglutide-sleep-apnea-benefits" element={<SemaglutideSleepApneaBenefits />} />
              <Route path="/blog/vegan-meals-tirzepatide" element={<VeganMealsTirzepatide />} />
              <Route path="/blog/semaglutide-fertility-women-over-35" element={<SemaglutideFertilityWomenOver35 />} />
              <Route path="/blog/tirzepatide-budget-travel-tips" element={<TirzepatideBudgetTravelTips />} />
              
              {/* New January 2026 Trimi-focused posts */}
              <Route path="/blog/trimi-real-world-weight-loss-results" element={<TrimiRealWorldWeightLossResults />} />
              <Route path="/blog/trimi-vs-competitors-glp1-comparison" element={<TrimiVsCompetitorsGLP1Comparison />} />
              <Route path="/blog/trimi-compounded-quality-compliance" element={<TrimiCompoundedQualityCompliance />} />
              <Route path="/blog/trimi-board-certified-providers" element={<TrimiBoardCertifiedProviders />} />
              <Route path="/blog/compounded-vs-brand-tirzepatide-comparison" element={<CompoundedVsBrandTirzepatideComparison />} />
              
              {/* New January 2026 Trimi posts - Batch 2 */}
              <Route path="/blog/semaglutide-tirzepatide-side-effects-contraindications" element={<SemaglutideTirzepatideSideEffectsContraindications />} />
              <Route path="/blog/online-compounding-service-safety" element={<OnlineCompoundingServiceSafety />} />
              <Route path="/blog/trimi-pricing-subscription-shipping" element={<TrimiPricingSubscriptionShipping />} />
              <Route path="/blog/trimi-patient-portal-refills-dose-changes" element={<TrimiPatientPortalRefillsDoseChanges />} />
              <Route path="/blog/trimi-signup-medical-assessment" element={<TrimiSignupMedicalAssessment />} />
              
              <Route path="/migration-tracker" element={<MigrationTracker />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
  </QueryClientProvider>
);

export default App;
