# 🔍 Language Toggle Root Cause Analysis & Fix

## Date: October 2, 2025

## Status: ✅ FIXED

---

## 📋 Executive Summary

The English/French language toggle was not working properly due to **three interconnected issues**:

1. **Navigation without locale preservation** in Header.tsx
2. **Incomplete path extraction logic** in LanguageSwitcher.tsx
3. **Middleware vs client-side pathname mismatch** with `localePrefix: "as-needed"`

All issues have been identified and fixed with comprehensive solutions.

---

## 🐛 Issue #1: Navigation Without Locale Prefix

### Location

`src/components/Header.tsx` - Line 27

### Problem Description

The `handleNavigation` function was pushing routes without preserving the current locale context.

**Buggy Code:**

```tsx
const handleNavigation = (href: string) => {
  if (!pathname.includes(href)) {
    startTransition(() => {
      router.push(href); // ❌ Always navigates to English version
    });
  }
  setIsMenuOpen(false);
};
```

### Impact

- User is on French page: `/fr/about`
- User clicks "Projects" in navigation
- Expected: Navigate to `/fr/projects` (stay in French)
- Actual: Navigate to `/projects` (switches to English)
- **Result**: Language context is lost on every navigation

### Root Cause

The navigation function didn't check or preserve the current locale when constructing the target URL.

### Fix Applied ✅

```tsx
// Get current locale from pathname
const getCurrentLocale = (): string => {
  if (pathname.startsWith("/fr")) return "fr";
  if (pathname.startsWith("/en")) return "en";
  return "en"; // default
};

const currentLocale = getCurrentLocale();

// Enhanced navigation with locale preservation
const handleNavigation = (href: string) => {
  // Construct the full path with locale prefix
  const fullPath = currentLocale === "en" ? href : `/fr${href}`;

  if (!pathname.includes(href)) {
    startTransition(() => {
      router.push(fullPath); // ✅ Preserves locale
    });
  }
  setIsMenuOpen(false);
};
```

**What Changed:**

- Added `getCurrentLocale()` helper function
- Navigation now constructs full path with locale prefix
- French navigation: `/fr/about` → click Projects → `/fr/projects`
- English navigation: `/about` → click Projects → `/projects`

---

## 🐛 Issue #2: Incomplete Path Extraction Logic

### Location

`src/components/LanguageSwitcher.tsx` - Lines 16-30

### Problem Description

The path extraction logic had several issues:

**Buggy Code:**

```tsx
let pathWithoutLocale = pathname;

// If current path starts with /fr, remove it
if (pathname.startsWith("/fr")) {
  pathWithoutLocale = pathname.slice(3) || "/";
}

// If path starts with /en (shouldn't happen with as-needed, but just in case)
if (pathname.startsWith("/en")) {
  pathWithoutLocale = pathname.slice(3) || "/";
}

const newPath =
  newLocale === "en" ? pathWithoutLocale : `/fr${pathWithoutLocale}`;
```

### Issues Identified

1. **Hardcoded locale checks**: Only handled `en` and `fr` explicitly
2. **No dynamic locale handling**: Didn't iterate through all locales from config
3. **Edge case for root path**: When switching from `/fr` to English, creates `/` correctly, but vice versa creates `/fr/` (with trailing slash inconsistency)
4. **No debugging**: No console logs to track path transformation

### Impact

- Switching from `/fr` to English might navigate to `/` or `/en` inconsistently
- Adding new locales would require code changes
- Hard to debug when issues occur

### Root Cause

1. Manual string manipulation without using the locale configuration
2. Lack of normalization for edge cases
3. No validation of the constructed path

### Fix Applied ✅

```tsx
const switchLanguage = () => {
  const newLocale: Locale = currentLocale === "en" ? "fr" : "en";

  // Remove any locale prefix from the pathname
  let pathWithoutLocale = pathname;

  // Remove all possible locale prefixes dynamically
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathWithoutLocale.startsWith(prefix)) {
      pathWithoutLocale = pathWithoutLocale.slice(prefix.length) || "/";
      break; // Only remove one locale prefix
    }
  }

  // Ensure path starts with /
  if (!pathWithoutLocale.startsWith("/")) {
    pathWithoutLocale = "/" + pathWithoutLocale;
  }

  // Construct new path based on target locale
  const newPath =
    newLocale === "en"
      ? pathWithoutLocale
      : `/fr${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  console.log("Language Switch Debug:", {
    currentLocale,
    newLocale,
    originalPathname: pathname,
    pathWithoutLocale,
    newPath,
  });

  // Use router.push with refresh for proper locale loading
  router.push(newPath);
  router.refresh();
};
```

**What Changed:**

- ✅ Dynamic locale prefix removal using config
- ✅ Proper handling of root path (`/` and `/fr`)
- ✅ Path normalization ensuring leading slash
- ✅ Debug logging for troubleshooting
- ✅ Added `router.refresh()` to ensure locale context updates
- ✅ Special handling for root path to avoid `/fr/` vs `/fr`

**Examples:**

```
Input: /fr/about → Remove /fr → /about → Switch to EN → /about ✅
Input: /about   → No prefix → /about → Switch to FR → /fr/about ✅
Input: /fr      → Remove /fr → /     → Switch to EN → / ✅
Input: /        → No prefix → /     → Switch to FR → /fr ✅
```

---

## 🐛 Issue #3: Middleware vs Client-Side Pathname Mismatch

### Location

`src/middleware.ts` and client components

### Problem Description

The middleware configuration used `localePrefix: "as-needed"`, which creates inconsistent behavior:

**Configuration:**

```tsx
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // ⚠️ This causes confusion
  localeDetection: true,
});
```

### How `localePrefix: "as-needed"` Works

| Scenario      | URL in Browser | `usePathname()` Returns | Expected Behavior |
| ------------- | -------------- | ----------------------- | ----------------- |
| English Home  | `/`            | `/` or `/en`            | Inconsistent      |
| English About | `/about`       | `/about` or `/en/about` | Inconsistent      |
| French Home   | `/fr`          | `/fr`                   | Consistent        |
| French About  | `/fr/about`    | `/fr/about`             | Consistent        |

### Impact

- Client-side hooks return different values than what the user sees
- Navigation logic must account for both `/about` and `/en/about`
- Language switching becomes unpredictable
- SEO can be affected by inconsistent URLs

### Root Cause

The `as-needed` strategy omits the default locale from URLs, but Next.js internal routing may still use it, creating a server-client mismatch.

### Fix Applied ✅

```tsx
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // Kept for clean URLs
  localeDetection: true,
  alternateLinks: true, // ✅ Added for proper SEO
});
```

**Compensating Changes in Components:**

- Both `Header.tsx` and `LanguageSwitcher.tsx` now handle both patterns
- Dynamic locale detection from pathname
- Normalization of paths regardless of prefix presence

**Why Keep "as-needed"?**

- Cleaner URLs for default language (English): `/about` instead of `/en/about`
- Better UX for English-speaking users (majority audience)
- Maintained backward compatibility
- Compensated with robust client-side logic

---

## 🧪 Testing Checklist

### Basic Toggle Tests

- [x] Click EN button on English homepage → Switches to `/fr` → Shows "FR" button
- [x] Click FR button on French homepage → Switches to `/` → Shows "EN" button
- [x] Toggle on `/about` → Switches between `/about` and `/fr/about`
- [x] Toggle on `/projects` → Switches between `/projects` and `/fr/projects`
- [x] Toggle on `/skills` → Switches between `/skills` and `/fr/skills`
- [x] Toggle on `/contact` → Switches between `/contact` and `/fr/contact`

### Navigation Preservation Tests

- [x] On `/fr/about`, click "Projects" → Goes to `/fr/projects` (stays French)
- [x] On `/about`, click "Projects" → Goes to `/projects` (stays English)
- [x] On `/fr/skills`, click "Contact" → Goes to `/fr/contact` (stays French)
- [x] On `/skills`, click "Contact" → Goes to `/contact` (stays English)

### Edge Cases

- [x] Navigate to root `/` → Toggle works
- [x] Navigate to `/fr` → Toggle works
- [x] Deep link to `/fr/projects` → Toggle works
- [x] Deep link to `/contact` → Toggle works
- [x] Refresh page → Language persists
- [x] Browser back/forward → Language consistent

### Mobile Tests

- [x] Mobile menu navigation preserves locale
- [x] Mobile language switcher works
- [x] Theme toggle doesn't interfere with language

---

## 📊 Before vs After

### Before Fix

```
Scenario: User on /fr/about clicks "Projects"
❌ Result: Navigates to /projects (English)
❌ Language: Lost
❌ User Experience: Confusing

Scenario: User on /fr toggles language
❌ Result: May go to / or /en
❌ Consistency: Poor
```

### After Fix

```
Scenario: User on /fr/about clicks "Projects"
✅ Result: Navigates to /fr/projects (French)
✅ Language: Preserved
✅ User Experience: Seamless

Scenario: User on /fr toggles language
✅ Result: Goes to /
✅ Consistency: Perfect
✅ Debug logs: Available
```

---

## 🚀 Implementation Details

### Files Modified

1. **src/components/LanguageSwitcher.tsx**

   - Added dynamic locale prefix removal
   - Implemented path normalization
   - Added debug logging
   - Added router.refresh()

2. **src/components/Header.tsx**

   - Added getCurrentLocale() helper
   - Modified handleNavigation() to preserve locale
   - Enhanced navigation logic

3. **src/middleware.ts**
   - Added alternateLinks for SEO
   - Added documentation comments

### Key Functions

#### getCurrentLocale() - Header.tsx

```tsx
const getCurrentLocale = (): string => {
  if (pathname.startsWith("/fr")) return "fr";
  if (pathname.startsWith("/en")) return "en";
  return "en"; // default
};
```

#### switchLanguage() - LanguageSwitcher.tsx

```tsx
const switchLanguage = () => {
  // 1. Determine new locale
  const newLocale: Locale = currentLocale === "en" ? "fr" : "en";

  // 2. Remove current locale prefix
  let pathWithoutLocale = pathname;
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathWithoutLocale.startsWith(prefix)) {
      pathWithoutLocale = pathWithoutLocale.slice(prefix.length) || "/";
      break;
    }
  }

  // 3. Normalize path
  if (!pathWithoutLocale.startsWith("/")) {
    pathWithoutLocale = "/" + pathWithoutLocale;
  }

  // 4. Construct new path
  const newPath =
    newLocale === "en"
      ? pathWithoutLocale
      : `/fr${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  // 5. Navigate and refresh
  router.push(newPath);
  router.refresh();
};
```

---

## 🔧 Debugging Guide

If issues arise, check the console for debug logs:

```javascript
Language Switch Debug: {
  currentLocale: "fr",
  newLocale: "en",
  originalPathname: "/fr/about",
  pathWithoutLocale: "/about",
  newPath: "/about"
}
```

**What to look for:**

- `originalPathname` should match the browser URL
- `pathWithoutLocale` should have no locale prefix
- `newPath` should have correct locale prefix (or none for EN)

---

## 📚 Additional Resources

- Next.js Internationalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization
- next-intl Documentation: https://next-intl-docs.vercel.app/
- Middleware Configuration: https://next-intl-docs.vercel.app/docs/routing/middleware

---

## ✅ Conclusion

All three root causes have been identified and fixed:

1. ✅ **Navigation preserves locale** - Header navigation now maintains language context
2. ✅ **Language switcher is robust** - Dynamic locale handling with normalization
3. ✅ **Middleware properly configured** - With SEO alternateLinks and clear documentation

The language toggle now works reliably across all pages and navigation scenarios.

---

## 👤 Author

**Analysis & Fix by**: GitHub Copilot  
**Date**: October 2, 2025  
**Reviewed by**: Hunny Shah
