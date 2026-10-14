## 2024-03-24 - [Header Navigation Accessibility]
**Learning:** Using an `.active` CSS class effectively conveys visual state changes for navigation items, but it alone does not provide semantic meaning to screen readers about which page the user is currently on.
**Action:** Adding `aria-current="page"` programmatically informs assistive technologies of the active state, greatly enhancing the accessibility of site navigation.

## 2024-03-24 - [Visual Hierarchy & Theming]
**Learning:** Hardcoded colors like `rgba(0,0,0,0.12)` for borders disappear on dark-themed interfaces, flattening the visual hierarchy. Furthermore, lack of interactive micro-animations makes CTAs feel unresponsive.
**Action:** Replaced hardcoded values with semantic design tokens (`var(--border)`, `var(--surface)`) and added subtle CSS transitions (`transform: translateY(-2px)`) on hover to provide elegant, responsive feedback on interactive elements.
