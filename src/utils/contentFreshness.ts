// Content freshness tracking and update recommendations
export interface ContentUpdate {
  slug: string;
  lastUpdated: string;
  nextReviewDate: string;
  updatePriority: 'high' | 'medium' | 'low';
  updateType: 'statistics' | 'links' | 'full-refresh' | 'minor';
  reason: string;
}

// Track when posts were last updated and when they should be reviewed
export const contentUpdateSchedule: Record<string, ContentUpdate> = {
  'semaglutide-weight-loss-results': {
    slug: 'semaglutide-weight-loss-results',
    lastUpdated: '2025-02-03',
    nextReviewDate: '2025-05-03',
    updatePriority: 'high',
    updateType: 'statistics',
    reason: 'High-traffic post, clinical data updates quarterly'
  },
  'tirzepatide-weight-loss-results': {
    slug: 'tirzepatide-weight-loss-results',
    lastUpdated: '2025-02-10',
    nextReviewDate: '2025-05-10',
    updatePriority: 'high',
    updateType: 'statistics',
    reason: 'High-traffic post, clinical data updates quarterly'
  },
  'semaglutide-cost': {
    slug: 'semaglutide-cost',
    lastUpdated: '2024-06-11',
    nextReviewDate: '2025-03-11',
    updatePriority: 'high',
    updateType: 'full-refresh',
    reason: 'Pricing changes frequently, needs monthly review'
  },
  'glp1-complete-guide': {
    slug: 'glp1-complete-guide',
    lastUpdated: '2024-11-09',
    nextReviewDate: '2025-05-09',
    updatePriority: 'high',
    updateType: 'full-refresh',
    reason: 'Pillar content, comprehensive guide needs quarterly updates'
  }
};

// Get posts that need updating
export const getPostsNeedingUpdate = (currentDate: string = new Date().toISOString().split('T')[0]): ContentUpdate[] => {
  return Object.values(contentUpdateSchedule)
    .filter(update => update.nextReviewDate <= currentDate)
    .sort((a, b) => {
      // Sort by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.updatePriority] - priorityOrder[b.updatePriority];
    });
};

// Calculate content age in days
export const getContentAge = (publishDate: string): number => {
  const publish = new Date(publishDate);
  const now = new Date();
  return Math.floor((now.getTime() - publish.getTime()) / (1000 * 60 * 60 * 24));
};

// Determine if content is fresh
export const isContentFresh = (publishDate: string, modifiedDate?: string): {
  isFresh: boolean;
  ageInDays: number;
  recommendation: string;
} => {
  const dateToCheck = modifiedDate || publishDate;
  const age = getContentAge(dateToCheck);
  
  if (age < 90) {
    return {
      isFresh: true,
      ageInDays: age,
      recommendation: 'Content is fresh'
    };
  } else if (age < 180) {
    return {
      isFresh: true,
      ageInDays: age,
      recommendation: 'Consider minor updates'
    };
  } else if (age < 365) {
    return {
      isFresh: false,
      ageInDays: age,
      recommendation: 'Schedule update soon'
    };
  } else {
    return {
      isFresh: false,
      ageInDays: age,
      recommendation: 'Priority update needed'
    };
  }
};
