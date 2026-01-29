
# Fix Services Section Card Sizing

## Problem
The service cards in the Services section have inconsistent heights on both desktop and mobile, making the layout look uneven and unprofessional.

## Root Cause Analysis
Looking at line 123 and 137 in `ServicesSection.tsx`:
- The grid container uses `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` but lacks `auto-rows-fr` to equalize row heights
- Fixed height on individual cards (`h-[280px] sm:h-[300px] lg:h-[320px]`) doesn't guarantee uniform appearance across the entire grid
- The outer `motion.a` wrapper doesn't have `h-full` to stretch to fill its grid cell

## Solution

### 1. Grid Container Fix (Line 123)
Add `auto-rows-fr` to ensure all rows have equal height:
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5 lg:gap-6
```

### 2. Card Wrapper Fix (Line 125-130)
Add `h-full` to the `motion.a` wrapper so it fills the grid cell:
```tsx
<motion.a
  className="group block h-full"
  ...
>
```

### 3. Inner Card Fix (Line 137)
Remove the multiple fixed heights and use a single consistent approach:
```tsx
<div className="h-full min-h-[280px] flex flex-col bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1">
```

This uses:
- `h-full` to fill the parent container
- `min-h-[280px]` as a baseline minimum to prevent cards from being too short

---

## Technical Details

**File to modify:** `src/components/ServicesSection.tsx`

**Changes:**

| Line | Current | New |
|------|---------|-----|
| 123 | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6` | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5 lg:gap-6` |
| 130 | `className="group block"` | `className="group block h-full"` |
| 137 | `className="h-[280px] sm:h-[300px] lg:h-[320px] flex flex-col ...` | `className="h-full min-h-[280px] flex flex-col ...` |

## Expected Result
- All 6 service cards will have identical height on desktop (3 columns)
- All cards will have identical height on tablet (2 columns)  
- All cards will have identical height on mobile (1 column)
- Cards will smoothly transition between breakpoints
- Professional, symmetrical appearance matching SaaS design standards
