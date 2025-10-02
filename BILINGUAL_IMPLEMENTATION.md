# Bilingual Portfolio Implementation

This portfolio website now supports both English and French languages, similar to the reference site at [krutikparikh.ca](https://www.krutikparikh.ca/).

## Features Implemented

### 🌐 Internationalization (i18n)

- **Languages**: English (en) and French (fr)
- **Default Language**: English
- **URL Structure**:
  - English: `/` or `/en`
  - French: `/fr`

### 🔄 Language Switching

- Clean language switcher component with flags and language names
- Persistent language selection across page navigation
- Smooth transitions between languages

### 📱 Responsive Design

- Language switcher works on both desktop and mobile
- Proper dropdown behavior with outside click detection
- Visual indicators for current language selection

### 🛠 Technical Implementation

#### Key Components

1. **Language Switcher** (`/src/components/LanguageSwitcher.tsx`)

   - Dropdown with flag icons and language names
   - Handles URL transitions between locales

2. **Internationalization Config** (`/src/i18n/config.ts`)

   - Locale definitions and labels
   - Type-safe locale handling

3. **Message Files** (`/messages/`)
   - `en.json` - English translations
   - `fr.json` - French translations
   - Comprehensive coverage of all UI text

#### Next.js Integration

- **Middleware** (`/src/middleware.ts`) - Handles locale detection and routing
- **Locale Layout** (`/src/app/[locale]/layout.tsx`) - Provides translations to components
- **Metadata Generation** (`/src/lib/metadata.ts`) - Localized SEO metadata

### 🌍 Translated Content

#### Sections Covered

- ✅ Navigation header
- ✅ Hero section
- ✅ About section
- ✅ Footer
- ✅ Metadata (titles, descriptions)

#### Components Using Translations

- `Header.tsx` - Navigation links
- `Hero.tsx` - Main hero content
- `About.tsx` - About section content
- `Footer.tsx` - Footer links and text
- `LanguageSwitcher.tsx` - Language selection

### 📋 URL Structure

```
/ → redirects to /en
/en → English homepage
/fr → French homepage
/en/about → English about page
/fr/about → French about page
/en/projects → English projects page
/fr/projects → French projects page
/en/skills → English skills page
/fr/skills → French skills page
/en/contact → English contact page
/fr/contact → French contact page
```

### 🚀 Usage

The language switcher appears in the header next to the theme toggle. Users can:

1. Click the language switcher to see available languages
2. Select their preferred language (English/French)
3. The entire site will switch to the selected language
4. URLs will update to reflect the language choice

### 🔧 Development

To add new translations:

1. Add the new keys to both `messages/en.json` and `messages/fr.json`
2. Use `useTranslations('namespace')` in components
3. Access translations with `t('key')`

Example:

```tsx
const t = useTranslations("header");
return <span>{t("about")}</span>; // "About" or "À propos"
```

### 📦 Dependencies

- `next-intl` - Next.js internationalization
- `next` - Next.js 15.5.4 with App Router
- Built-in middleware for locale routing

This implementation provides a seamless bilingual experience similar to professional multilingual portfolios, ensuring accessibility for both English and French-speaking audiences.
