## 2024-03-24 - [Header Navigation Accessibility]
**Learning:** Using an `.active` CSS class effectively conveys visual state changes for navigation items, but it alone does not provide semantic meaning to screen readers about which page the user is currently on.
**Action:** Adding `aria-current="page"` programmatically informs assistive technologies of the active state, greatly enhancing the accessibility of site navigation.
