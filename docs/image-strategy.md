# Image Strategy Audit and Plan

## 1) Site Review Summary

### Working well
- Page structure is clear and mobile-friendly.
- Calls to action are plain-spoken and non-sensational.
- Navigation groups families and professionals under resources.
- Tone is generally calm and respectful.

### Needs improvement
- Several pages feel text-heavy and visually flat before users reach the CTA.
- Long content blocks on programs, admissions, and insurance can feel dense under stress.
- Resource pages need stronger visual continuity with family/professional pathways.
- Contact page benefits from contextual trust imagery near the form.

### Where imagery adds value
- Hero zones: quickly communicates emotional safety and setting.
- Process-heavy sections: improves comprehension by grounding abstract steps.
- Trust sections: supports credibility through realistic environments and professional presence.

## 2) Cohesive Visual Style

- Natural light, neutral-to-warm tones.
- Documentary-style framing over posed stock posture.
- Calm, real environments: living rooms, counseling rooms, shared common spaces, exterior walkways.
- Subjects: present and supported, not distressed.
- Diversity: represent age, race, and lived experience naturally through context, not staged symbolism.
- Avoid: needles, pills, drug paraphernalia, emergency scenes, dramatic facial distress, hospital-heavy visuals.

## 3) Page-by-Page Image Plan

### Home
- Hero image
  - Purpose: trust and emotional safety
  - Subject: calm residential common area with natural light
  - Orientation: wide hero
  - Placement: directly after headline block
- Supporting image 1
  - Purpose: connection
  - Subject: supportive one-on-one conversation
  - Orientation: landscape
  - Placement: lower supporting image row
- Supporting image 2
  - Purpose: environment
  - Subject: quiet shared room
  - Orientation: landscape
  - Placement: lower supporting image row
- Supporting image 3
  - Purpose: professional guidance
  - Subject: counselor with adult client
  - Orientation: landscape
  - Placement: lower supporting image row

### Programs (ASAM 3.1)
- Hero image
  - Purpose: explain level of care setting
  - Subject: structured but welcoming residential interior
  - Orientation: wide hero
  - Placement: under hero copy
- Supporting image 1
  - Purpose: explanation of daily routine
  - Subject: small group session room
  - Orientation: landscape
  - Placement: between feature list and eligibility content
- Supporting image 2
  - Purpose: trust and calm
  - Subject: prepared counseling/group room
  - Orientation: landscape
  - Placement: paired with supporting image 1

### Admissions
- Hero image
  - Purpose: reduce intake anxiety
  - Subject: calm intake conversation
  - Orientation: wide hero
  - Placement: under hero copy
- Supporting image 1
  - Purpose: process clarity
  - Subject: coordinator reviewing referral materials
  - Orientation: landscape
  - Placement: after admissions process section
- Supporting image 2
  - Purpose: welcome and readiness
  - Subject: entrance/common area
  - Orientation: landscape
  - Placement: after admissions process section

### Insurance & Payment
- Hero image
  - Purpose: lower financial uncertainty
  - Subject: benefits discussion in neutral office
  - Orientation: wide hero
  - Placement: under hero copy
- Supporting image 1
  - Purpose: explanation
  - Subject: team member reviewing plan details
  - Orientation: landscape
  - Placement: after payer clarity
- Supporting image 2
  - Purpose: reassurance
  - Subject: consultation with family member
  - Orientation: landscape
  - Placement: paired with supporting image 1

### Resources (including Families and For Professionals)
- Resources hero image
  - Purpose: calm learning context
  - Subject: reading/counseling environment
  - Orientation: wide hero
  - Placement: under resources hero copy
- Resources supporting image 1
  - Purpose: family relevance
  - Subject: family conversation in living room
  - Orientation: landscape
  - Placement: before article index
- Resources supporting image 2
  - Purpose: professional relevance
  - Subject: clinical collaboration discussion
  - Orientation: landscape
  - Placement: before article index
- Resources supporting image 3
  - Purpose: educational continuity
  - Subject: notebook/laptop workspace
  - Orientation: landscape
  - Placement: before article index
- Families hero image
  - Purpose: emotional safety
  - Subject: counselor and family member in private room
  - Orientation: wide hero
  - Placement: under hero copy
- Professionals hero image
  - Purpose: efficiency and trust
  - Subject: referral discussion between professionals
  - Orientation: wide hero
  - Placement: under hero copy

### About
- Hero image
  - Purpose: credibility and place
  - Subject: welcoming treatment environment
  - Orientation: wide hero
  - Placement: under hero copy
- Supporting image 1
  - Purpose: team credibility
  - Subject: staff collaboration
  - Orientation: landscape
  - Placement: below about narrative
- Supporting image 2
  - Purpose: community grounding
  - Subject: local calm outdoor environment
  - Orientation: landscape
  - Placement: below about narrative

### Contact
- Hero image
  - Purpose: lower first-contact friction
  - Subject: front desk/consultation area
  - Orientation: wide hero
  - Placement: under hero copy
- Supporting image 1
  - Purpose: humanize outreach
  - Subject: supportive intake conversation
  - Orientation: landscape
  - Placement: right column below map

## 4) Stock Search Queries

### Unsplash / Pexels
- addiction recovery group session natural light
- supportive counselor talking with adult in office
- calm therapy room neutral tones
- family conversation living room documentary style
- residential treatment center common area natural light
- healthcare case manager meeting adult client
- quiet community outdoor path morning light
- mental health support conversation candid

### Shutterstock / Getty
- addiction recovery counseling session natural light candid
- substance use treatment residential common room neutral
- clinician and adult patient consultation non clinical office
- supportive family member counseling conversation authentic
- behavioral health referral coordination meeting
- therapy office warm neutral interior professional
- recovery support group adults documentary photography
- calm residential healthcare hallway natural daylight

## 5) Code-Level Guidance

- Use `ContentImage` for all content placements.
- Keep image assets in:
  - `public/images/home`
  - `public/images/programs`
  - `public/images/admissions`
  - `public/images/insurance-payment`
  - `public/images/resources`
  - `public/images/about`
  - `public/images/contact`
- Replace placeholder SVG files with optimized JPEG/WebP exports while keeping same filenames.
- Keep alt text descriptive and non-clinical.
- Keep captions brief and supportive.
- Maintain responsive behavior using Next Image with `fill` and explicit ratio containers.
