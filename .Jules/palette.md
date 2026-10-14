## 2024-03-24 - [Header Navigation Accessibility]
**Learning:** Using an `.active` CSS class effectively conveys visual state changes for navigation items, but it alone does not provide semantic meaning to screen readers about which page the user is currently on.
**Action:** Adding `aria-current="page"` programmatically informs assistive technologies of the active state, greatly enhancing the accessibility of site navigation.

## 2024-03-24 - [Visual Hierarchy & Theming]
**Learning:** Hardcoded colors like `rgba(0,0,0,0.12)` for borders disappear on dark-themed interfaces, flattening the visual hierarchy. Furthermore, lack of interactive micro-animations makes CTAs feel unresponsive.
**Action:** Replaced hardcoded values with semantic design tokens (`var(--border)`, `var(--surface)`) and added subtle CSS transitions (`transform: translateY(-2px)`) on hover to provide elegant, responsive feedback on interactive elements.

## 2026-10-14 - Professional Polish (21st.dev inspired)
**Learning:** Adding consistent and elegant `:focus-visible` states across the app greatly improves keyboard accessibility while maintaining a premium feel. Utilizing a glassmorphism effect (backdrop blur with subtle gradient and transparency) in the footer creates a clean, sophisticated, and "dev-focused" visual polish.
**Action:** Always ensure that focus states match the design system's aesthetic rather than relying on browser defaults. Use subtle transparencies and blurs for secondary layout elements like footers to keep the focus on the main content.
