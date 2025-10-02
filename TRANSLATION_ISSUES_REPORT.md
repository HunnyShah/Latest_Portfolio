# 🔍 Translation Issues Report

## Date: October 2, 2025

## Status: 🔴 Multiple Issues Found

---

## 📋 Executive Summary

After systematic investigation of all pages and components, I found **7 categories of translation issues**:

1. ✅ **Header** - Fully translated
2. ⚠️ **Hero** - Partially translated (hardcoded stats)
3. ⚠️ **About** - Partially translated (hardcoded content)
4. ✅ **Projects** - Has French translations BUT bug in status display
5. ✅ **Skills** - Fully translated
6. ✅ **Contact** - Fully translated
7. ✅ **Footer** - Fully translated

---

## 🐛 Issue #1: Projects Status Not Translating

### Location

`src/components/Projects.tsx` - Line 117

### Problem

```tsx
<span>{t(project.status.toLowerCase())}</span>
```

The code does:

- `project.status` = `"DEPLOYED"` (uppercase)
- `.toLowerCase()` = `"deployed"` (lowercase)
- `t("deployed")` → looks for translation key `deployed`

But in translation files, the keys are **UPPERCASE**:

```json
{
  "deployed": "DÉPLOYÉ", // This key doesn't exist!
  "DEPLOYED": "DÉPLOYÉ" // Actual key
}
```

### Fix

Remove `.toLowerCase()`:

```tsx
<span>{t(project.status)}</span>
```

### Impact

- **English**: Works (falls back to key name)
- **French**: Shows "DEPLOYED" instead of "DÉPLOYÉ"

---

## 🐛 Issue #2: Hero Stats Not Translated

### Location

`src/components/Hero.tsx` - Lines 107-143

### Problem

The stats are **hardcoded in English**:

```tsx
<div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
  Years AI Experience {/* ❌ Hardcoded */}
</div>
```

```tsx
<div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
  AI Projects Deployed {/* ❌ Hardcoded */}
</div>
```

```tsx
<div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
  AI Technologies {/* ❌ Hardcoded */}
</div>
```

### Missing Translation Keys

Need to add to `en.json` and `fr.json`:

```json
"hero": {
  // ...existing keys...
  "yearsAIExperience": "Years AI Experience",
  "aiProjectsDeployed": "AI Projects Deployed",
  "aiTechnologies": "AI Technologies"
}
```

French:

```json
"hero": {
  // ...existing keys...
  "yearsAIExperience": "Années d'Expérience IA",
  "aiProjectsDeployed": "Projets IA Déployés",
  "aiTechnologies": "Technologies IA"
}
```

### Impact

- Stats always appear in English on French version
- Affects homepage user experience

---

## 🐛 Issue #3: About Component Hardcoded Text

### Location

`src/components/About.tsx` - Lines 52, 102, 114, 126

### Problem

Several text elements are **hardcoded in English**:

#### 1. "My Journey" heading (Line 52)

```tsx
<h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
  My Journey {/* ❌ Hardcoded */}
</h3>
```

#### 2. "Quick Facts" heading (Line 102)

```tsx
<h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
  Quick Facts {/* ❌ Hardcoded */}
</h3>
```

#### 3. Stat labels (Lines 114, 126, 138, 150)

```tsx
<span className="font-semibold text-slate-800 dark:text-slate-200">
  Location: {/* ❌ Hardcoded */}
</span>
```

```tsx
<span className="font-semibold text-slate-800 dark:text-slate-200">
  Experience: {/* ❌ Hardcoded */}
</span>
```

```tsx
<span className="font-semibold text-slate-800 dark:text-slate-200">
  Projects: {/* ❌ Hardcoded */}
</span>
```

```tsx
<span className="font-semibold text-slate-800 dark:text-slate-200">
  Technologies: {/* ❌ Hardcoded */}
</span>
```

#### 4. Badge labels (Lines 96-98)

```tsx
<span>Full-Stack Developer</span>  {/* ❌ Hardcoded */}
<span>Innovation Driven</span>     {/* ❌ Hardcoded */}
<span>Quality Focused</span>       {/* ❌ Hardcoded */}
```

#### 5. Location value (Line 118)

```tsx
<span className="text-slate-600 dark:text-slate-400 ml-2">
  Toronto, Ontario {/* ❌ Hardcoded */}
</span>
```

#### 6. "Available for Projects" (Line 162)

```tsx
<span className="text-green-600 dark:text-green-400 font-medium text-sm">
  Available for Projects {/* ❌ Hardcoded */}
</span>
```

### Missing Translation Keys

Need to add to `en.json`:

```json
"about": {
  // ...existing keys...
  "myJourney": "My Journey",
  "quickFacts": "Quick Facts",
  "location": "Location",
  "locationValue": "Toronto, Ontario",
  "experienceLabel": "Experience",
  "projectsLabel": "Projects",
  "technologiesLabel": "Technologies",
  "fullStackDeveloper": "Full-Stack Developer",
  "innovationDriven": "Innovation Driven",
  "qualityFocused": "Quality Focused",
  "availableForProjects": "Available for Projects"
}
```

French:

```json
"about": {
  // ...existing keys...
  "myJourney": "Mon Parcours",
  "quickFacts": "Faits Rapides",
  "location": "Emplacement",
  "locationValue": "Toronto, Ontario",
  "experienceLabel": "Expérience",
  "projectsLabel": "Projets",
  "technologiesLabel": "Technologies",
  "fullStackDeveloper": "Développeur Full-Stack",
  "innovationDriven": "Axé sur l'Innovation",
  "qualityFocused": "Axé sur la Qualité",
  "availableForProjects": "Disponible pour des Projets"
}
```

### Impact

- Major sections of About page remain in English on French version
- Affects 10+ text elements

---

## 🐛 Issue #4: Footer Hardcoded Text

### Location

`src/components/Footer.tsx` - Line 162

### Problem

```tsx
<span className="text-green-600 dark:text-green-400 font-medium text-sm">
  Available for Projects {/* ❌ Hardcoded */}
</span>
```

Also in Footer:

```tsx
GitHub  {/* ❌ Hardcoded - Lines 95, 150 */}
LinkedIn  {/* ❌ Hardcoded - Line 116 */}
Email  {/* ❌ Hardcoded - Line 133 */}
```

### Missing Translation Keys

```json
"footer": {
  // ...existing keys...
  "availableForProjects": "Available for Projects",
  "github": "GitHub",
  "linkedin": "LinkedIn",
  "email": "Email"
}
```

French:

```json
"footer": {
  // ...existing keys...
  "availableForProjects": "Disponible pour des Projets",
  "github": "GitHub",
  "linkedin": "LinkedIn",
  "email": "Courriel"
}
```

---

## 🐛 Issue #5: Page Metadata Not Translated

### Location

All page files: `src/app/[locale]/*/page.tsx`

### Problem

Metadata is **hardcoded in English**:

#### About Page

```tsx
export const metadata: Metadata = {
  title: "About - Hunny Shah | Full-Stack Developer", // ❌ English only
  description: "Learn about Hunny Shah...", // ❌ English only
};
```

#### Projects Page

```tsx
export const metadata: Metadata = {
  title: "Projects - Hunny Shah | Full-Stack Developer Portfolio", // ❌
  description: "Explore Hunny Shah's portfolio...", // ❌
};
```

#### Skills Page

```tsx
export const metadata: Metadata = {
  title: "Skills - Hunny Shah | Technical Expertise & Technologies", // ❌
  description: "Discover Hunny Shah's technical skills...", // ❌
};
```

#### Contact Page

```tsx
export const metadata: Metadata = {
  title: "Contact - Hunny Shah | Get in Touch", // ❌
  description: "Contact Hunny Shah for web development...", // ❌
};
```

### Solution

Use `generateMetadata` function like the homepage does:

```tsx
import { generateMetadata as generateMetadataUtil } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateMetadataUtil(locale, "about"); // or "projects", "skills", "contact"
}
```

Then update `/src/lib/metadata.ts` to handle all pages.

### Impact

- SEO affected: French pages have English titles/descriptions
- Browser tabs show English titles even on French version
- Search engines index with wrong language

---

## 📊 Summary Table

| Component    | English  | French     | Issue                  |
| ------------ | -------- | ---------- | ---------------------- |
| **Header**   | ✅ Works | ✅ Works   | None                   |
| **Hero**     | ✅ Works | ❌ Partial | Stats hardcoded        |
| **About**    | ✅ Works | ❌ Partial | 10+ hardcoded texts    |
| **Projects** | ✅ Works | ⚠️ Bug     | Status lowercase issue |
| **Skills**   | ✅ Works | ✅ Works   | None                   |
| **Contact**  | ✅ Works | ✅ Works   | None                   |
| **Footer**   | ✅ Works | ❌ Partial | 4 hardcoded texts      |
| **Metadata** | ✅ Works | ❌ English | All pages              |

---

## 🎯 Priority Fixes

### High Priority (User-Visible)

1. 🔴 **Projects status bug** - Quick 1-line fix
2. 🔴 **About page hardcoded text** - 10+ elements
3. 🔴 **Hero stats** - 3 elements

### Medium Priority

4. 🟡 **Footer text** - 4 elements
5. 🟡 **Page metadata** - SEO impact

---

## 📝 Translation Keys Needed

### For `en.json`:

```json
{
  "hero": {
    "yearsAIExperience": "Years AI Experience",
    "aiProjectsDeployed": "AI Projects Deployed",
    "aiTechnologies": "AI Technologies"
  },
  "about": {
    "myJourney": "My Journey",
    "quickFacts": "Quick Facts",
    "location": "Location",
    "locationValue": "Toronto, Ontario",
    "experienceLabel": "Experience",
    "projectsLabel": "Projects",
    "technologiesLabel": "Technologies",
    "fullStackDeveloper": "Full-Stack Developer",
    "innovationDriven": "Innovation Driven",
    "qualityFocused": "Quality Focused",
    "availableForProjects": "Available for Projects"
  },
  "footer": {
    "availableForProjects": "Available for Projects",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "email": "Email"
  }
}
```

### For `fr.json`:

```json
{
  "hero": {
    "yearsAIExperience": "Années d'Expérience IA",
    "aiProjectsDeployed": "Projets IA Déployés",
    "aiTechnologies": "Technologies IA"
  },
  "about": {
    "myJourney": "Mon Parcours",
    "quickFacts": "Faits Rapides",
    "location": "Emplacement",
    "locationValue": "Toronto, Ontario",
    "experienceLabel": "Expérience",
    "projectsLabel": "Projets",
    "technologiesLabel": "Technologies",
    "fullStackDeveloper": "Développeur Full-Stack",
    "innovationDriven": "Axé sur l'Innovation",
    "qualityFocused": "Axé sur la Qualité",
    "availableForProjects": "Disponible pour des Projets"
  },
  "footer": {
    "availableForProjects": "Disponible pour des Projets",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "email": "Courriel"
  }
}
```

---

## ✅ Next Steps

1. Fix Projects status bug (1 line)
2. Add missing translation keys
3. Update components to use translations
4. Fix metadata generation
5. Test all pages in both languages

---

**Total Issues**: 27 hardcoded text elements  
**Affected Components**: 4 (Hero, About, Footer, Pages)  
**Translation Keys to Add**: 19  
**Code Changes Required**: 31 locations
