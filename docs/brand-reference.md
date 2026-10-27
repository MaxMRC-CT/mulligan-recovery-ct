# Mulligan Brand Reference (v3)

Source of truth: "Mulligan Brand Sheet.pdf" in the Google Drive folder "Mulligan CT Brand Kit".
Logo files: "Mulligan CT Logos" in the same folder.

## Core Direction
- Minimal, calm, modern
- Warm White base, Charcoal text, Mulligan Orange accents
- Rounded corners, soft shadows
- Reduce cognitive load and make next steps obvious

## Color
- Mulligan Orange `#FB6222`: mark, buttons, rules, headlines 24px+
- Deep Orange `#C2410C`: small orange text, links and labels (orange on white is too light for small text)
- Ember Red `#EF4336` → Sunrise Amber `#FAAB3F`: gradient for the logo and thin accent lines only
- Charcoal `#1F1F22`: all body text, dark grounds
- Warm White `#FAF7F2`: light ground

## Typography
- Montserrat 600–700: headlines, titles, buttons; Bold Italic for the tagline
- Source Sans 3 400 (600 for emphasis): body copy and forms
- Fallback: Arial / Calibri

## Voice & Language
- Plain, warm, direct and accountable; never salesy or clinical-sounding to the public
- Tagline: "Real People. Real Recovery. Real Simple."
- Say: person in recovery, residential substance use treatment, supportive accountable care, returned to use
- Avoid: addict, abuser, rehab, detox (not offered), "guaranteed" results, relapsed / failed, clean / dirty
- Use "ASAM 3.1" only with payers and clinicians (e.g. For Professionals), not in consumer copy
- Public copy only describes licensed, approved services

## Web Content Rules
- Short paragraphs (2-3 lines)
- 8th-10th grade reading level
- Explain terms once, then plain language
- CTA language prefers: "Talk to someone today", "See if Mulligan is right for you"

## Logo Use
- Clear space of at least ¼ the mark's height on all sides
- Mark no smaller than 40px; lockup no smaller than 150px wide
- Don't stretch, recolor, rotate, add effects, put the white wordmark on light or busy photos, or rebuild the logo in another font

## Asset Mapping
- Header lockup (light grounds): `public/images/brand/MRC-CT_Lockup-Descriptor_GradientM_for-light-bg.webp`
- Circle mark: `public/logo-circle.png`
- Full logo (legacy): `public/logo.png`

## Token Strategy
- Colors live as CSS variables in `app/globals.css` and are mapped in `tailwind.config.ts`
- Orange tokens expose RGB channels (`--primary-rgb`, etc.) so Tailwind opacity modifiers work
