// SEO audit utilities

interface SEOIssue {
  severity: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
}

// Check for missing alt tags on images
export const auditImageAltTags = (): SEOIssue[] => {
  const issues: SEOIssue[] = [];
  const images = document.querySelectorAll('img');
  
  images.forEach((img, index) => {
    if (!img.alt || img.alt.trim() === '') {
      issues.push({
        severity: 'error',
        message: `Image ${index + 1} is missing alt text`,
        element: img.src
      });
    } else if (img.alt.length < 5) {
      issues.push({
        severity: 'warning',
        message: `Image ${index + 1} has very short alt text`,
        element: img.src
      });
    }
  });
  
  return issues;
};

// Check heading hierarchy
export const auditHeadingHierarchy = (): SEOIssue[] => {
  const issues: SEOIssue[] = [];
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const h1Count = document.querySelectorAll('h1').length;
  
  if (h1Count === 0) {
    issues.push({
      severity: 'error',
      message: 'Page is missing an H1 heading'
    });
  } else if (h1Count > 1) {
    issues.push({
      severity: 'warning',
      message: `Page has ${h1Count} H1 headings (should have only one)`
    });
  }
  
  let previousLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1));
    
    if (level - previousLevel > 1) {
      issues.push({
        severity: 'warning',
        message: `Heading hierarchy skip: jumped from H${previousLevel} to H${level}`,
        element: heading.textContent || undefined
      });
    }
    
    previousLevel = level;
  });
  
  return issues;
};

// Check for broken internal links
export const auditInternalLinks = async (): Promise<SEOIssue[]> => {
  const issues: SEOIssue[] = [];
  const links = document.querySelectorAll('a[href^="/"]');
  
  for (const link of Array.from(links)) {
    const href = link.getAttribute('href');
    if (!href) continue;
    
    // Skip anchor links
    if (href.startsWith('#')) continue;
    
    try {
      const response = await fetch(href, { method: 'HEAD' });
      if (response.status === 404) {
        issues.push({
          severity: 'error',
          message: `Broken internal link: ${href}`,
          element: link.textContent || undefined
        });
      }
    } catch (error) {
      issues.push({
        severity: 'warning',
        message: `Could not verify link: ${href}`,
        element: link.textContent || undefined
      });
    }
  }
  
  return issues;
};

// Check meta descriptions
export const auditMetaDescription = (): SEOIssue[] => {
  const issues: SEOIssue[] = [];
  const metaDesc = document.querySelector('meta[name="description"]');
  
  if (!metaDesc) {
    issues.push({
      severity: 'error',
      message: 'Page is missing meta description'
    });
  } else {
    const content = metaDesc.getAttribute('content') || '';
    
    if (content.length < 50) {
      issues.push({
        severity: 'warning',
        message: `Meta description is too short (${content.length} chars, recommended 120-160)`
      });
    } else if (content.length > 160) {
      issues.push({
        severity: 'warning',
        message: `Meta description is too long (${content.length} chars, recommended 120-160)`
      });
    }
  }
  
  return issues;
};

// Run full SEO audit
export const runSEOAudit = async () => {
  const results = {
    images: auditImageAltTags(),
    headings: auditHeadingHierarchy(),
    metaDescription: auditMetaDescription(),
    links: await auditInternalLinks()
  };
  
  const allIssues = [
    ...results.images,
    ...results.headings,
    ...results.metaDescription,
    ...results.links
  ];
  
  const errorCount = allIssues.filter(i => i.severity === 'error').length;
  const warningCount = allIssues.filter(i => i.severity === 'warning').length;
  
  console.group('🔍 SEO Audit Results');
  console.log(`✅ Errors: ${errorCount}`);
  console.log(`⚠️ Warnings: ${warningCount}`);
  console.log(`ℹ️ Info: ${allIssues.length - errorCount - warningCount}`);
  console.groupEnd();
  
  if (allIssues.length > 0) {
    console.group('📋 Issues Found');
    allIssues.forEach(issue => {
      const icon = issue.severity === 'error' ? '❌' : issue.severity === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`${icon} ${issue.message}`, issue.element || '');
    });
    console.groupEnd();
  }
  
  return results;
};
