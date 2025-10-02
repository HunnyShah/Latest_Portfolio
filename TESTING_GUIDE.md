# 🧪 Language Toggle Testing Guide

## Quick Test Steps

### 1. Basic Toggle Test (Homepage)

1. Navigate to `http://localhost:3000/`
2. Click the "EN" button in header
3. ✅ URL should change to `/fr`
4. ✅ Button should show "FR"
5. ✅ All text should be in French
6. Click "FR" button
7. ✅ URL should change to `/`
8. ✅ Button should show "EN"
9. ✅ All text should be in English

### 2. Navigation Preservation Test

1. Navigate to `http://localhost:3000/fr/about`
2. Click "Projects" in navigation
3. ✅ URL should be `/fr/projects` (NOT `/projects`)
4. ✅ Page should remain in French
5. Click "EN" button
6. ✅ URL should change to `/projects`
7. Click "About" in navigation
8. ✅ URL should be `/about` (NOT `/fr/about`)

### 3. All Pages Test

Test toggle on each page:

- `/` ↔ `/fr` ✅
- `/about` ↔ `/fr/about` ✅
- `/projects` ↔ `/fr/projects` ✅
- `/skills` ↔ `/fr/skills` ✅
- `/contact` ↔ `/fr/contact` ✅

### 4. Mobile Test

1. Resize browser to mobile width (< 768px)
2. Click hamburger menu
3. Navigate between pages
4. ✅ Language should persist
5. Toggle language
6. ✅ Should work same as desktop

### 5. Deep Link Test

1. Directly navigate to `http://localhost:3000/fr/skills`
2. ✅ Page should load in French
3. Click "EN" button
4. ✅ Should navigate to `/skills` in English
5. Use browser back button
6. ✅ Should return to `/fr/skills` in French

## Debug Console

Open browser DevTools (F12) and check Console tab. You should see logs like:

```javascript
Language Switch Debug: {
  currentLocale: "fr",
  newLocale: "en",
  originalPathname: "/fr/about",
  pathWithoutLocale: "/about",
  newPath: "/about"
}
```

## Expected Behavior Summary

| Starting Page | Action           | Expected Result            |
| ------------- | ---------------- | -------------------------- |
| `/`           | Toggle to FR     | Navigate to `/fr`          |
| `/fr`         | Toggle to EN     | Navigate to `/`            |
| `/about`      | Toggle to FR     | Navigate to `/fr/about`    |
| `/fr/about`   | Toggle to EN     | Navigate to `/about`       |
| `/fr/about`   | Click "Projects" | Navigate to `/fr/projects` |
| `/about`      | Click "Projects" | Navigate to `/projects`    |

## Common Issues to Check

❌ **Issue**: Clicking navigation loses language

- **Check**: `getCurrentLocale()` in Header.tsx
- **Fix**: Should detect locale from pathname

❌ **Issue**: Toggle creates wrong URLs

- **Check**: Console debug logs in LanguageSwitcher.tsx
- **Fix**: Verify `pathWithoutLocale` and `newPath` values

❌ **Issue**: Page doesn't update after toggle

- **Check**: `router.refresh()` is called
- **Fix**: Should be in LanguageSwitcher.tsx line ~51

## Success Criteria

✅ All navigation preserves current language
✅ Toggle button switches languages correctly
✅ URL structure is consistent (English: no prefix, French: /fr prefix)
✅ Browser back/forward works correctly
✅ Deep links work
✅ Mobile navigation works
✅ No console errors

## Current Status

🟢 **All fixes implemented**
🟢 **No compilation errors**
🟢 **Dev server running**
🟢 **Ready for testing**

---

**Note**: Clear browser cache (Ctrl+Shift+R) if you see stale content.
