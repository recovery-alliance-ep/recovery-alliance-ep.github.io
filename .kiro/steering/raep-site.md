---
inclusion: always
---

# Recovery Alliance of El Paso — Website (GitHub Pages)

## What this project is
Public website for Recovery Alliance of El Paso (RAEP), legal name El Paso Alliance Inc.
A peer-led Recovery Community Organization (RCO) serving El Paso and West Texas.
This rebuild replaces a draft made in SiteGround Website Builder. Content and look
should carry over from that draft, cleaned up.

## Where it lives
- GitHub organization: recovery-alliance-ep (owned by RAEP; Andres is owner)
- Repo: recovery-alliance-ep/recovery-alliance-ep.github.io (public)
- Live address until a custom domain is connected: https://recovery-alliance-ep.github.io
- Publishing: GitHub Pages from the `main` branch, root folder.

## Tech rules
- Plain static site: HTML + CSS + a small amount of vanilla JS. No framework, no build step.
  (Reason: GitHub Pages serves it as-is, and non-developer staff must be able to edit text.)
- One shared stylesheet: `assets/css/styles.css`. Colors and fonts as CSS variables in `:root`.
- Shared header/nav and footer must be identical on every page.
- Mobile-first, responsive. Must work well on phones (many visitors are on phones).
- Accessibility: semantic HTML, alt text on every image, visible focus states,
  color contrast WCAG AA, skip-to-content link.
- Images in `assets/img/`, compressed (WebP preferred, under ~300 KB each).
- Contact form: GitHub Pages can't process forms. Use Formspree (or similar) — leave
  `action="TODO-FORM-ENDPOINT"` until an RAEP-owned account is set up.
- Mark every missing fact with `TODO:` in the HTML so it's searchable. Never invent
  addresses, phone numbers, hours, staff names, statistics, bed counts, licenses,
  or accreditations.
- Each program is described on exactly ONE page. Other pages link to it instead of
  repeating the description (redundant program content was a problem on the old site).

## File structure
```
index.html
about.html
services.html            (overview only — short card per program, linking out)
peer-support.html
punto-de-partida.html    (drop-in center, outreach, overdose prevention / naloxone hub)
casa-vida.html           (residential recovery home)
alas-nuevas.html         (women's residential program)
reentry.html             (re-entry program)
dwi-program.html         (TODO: confirm with leadership whether this gets its own page)
contact.html
404.html
assets/css/styles.css
assets/js/main.js        (mobile menu toggle only)
assets/img/
CNAME                    (added later, once the domain is sorted out)
```

## Design (approximated from SiteGround draft — confirm with official brand colors if they exist)
- Deep navy background: ~#0B0D3A
- Royal blue section band: ~#2B22D9
- Gold/yellow accent + primary buttons: ~#E6C640
- White text on dark; near-black text (#111) on light/gold
- Logo colors (hands logo): red, yellow, black, tan — can be used as small accents
- Headings: Poppins, bold (Google Fonts)
- Body: Open Sans (Google Fonts)
- Rounded cards (~16px radius), soft shadows, small uppercase eyebrow labels above headings
- Primary button: gold fill, dark text. Secondary: underlined text link with arrow.

## Navigation
Logo/wordmark "Recovery Alliance" (links home) · About · Services · Peer Support ·
Punto de Partida · Contact
- Programs (Casa Vida, Alas Nuevas, Re-entry, DWI) are reached from Services.
- Tap-to-call phone link in the header: (915) 594-7000 → `tel:+19155947000`
- Do NOT include the heart icon or "Log In" from the SiteGround template (store leftovers).
- Mobile: hamburger menu that actually works (broken hamburger nav was a problem on the old site).

## Language
- Person-first, stigma-free: "people in recovery," "substance use disorder," not "addicts"
  or "alcoholics." Use "MOUD" (medications for opioid use disorder), not "MAT."
- Name: "Recovery Alliance of El Paso" (not "The Recovery Alliance").
- Values line to feature: no stigma, no shame.
- Peer support complements professional care. Wherever crisis is mentioned:
  "In a crisis, call or text 988. In an emergency, call 911."

## Home page content (from the draft — keep wording unless noted)

### Hero (dark, background photo of people with arms around each other)
- Eyebrow: RECOVERY ALLIANCE OF EL PASO
- H1: You do not have to find your way **alone.** ("alone." in gold)
- Body: Recovery Alliance is a peer-led Recovery Community Organization serving El Paso
  and West Texas. Our staff bring lived experience of substance use recovery, mental
  health recovery, and justice involvement—so support begins with understanding,
  dignity, and hope.
- Primary button: Connect with a peer → contact.html
- Link: Learn what peer support means → peer-support.html

### Community section (royal blue band)
- Left card: eyebrow "ACCREDITED RCO" — TODO: confirm who accredited RAEP before publishing
  - Heading: Experience, Strength and Hope.
  - Small text: TODO: rewrite — draft says "Peer lived experience transforming vulnerability
    into collective resilience across El Paso and West Texas." (too jargony)
  - Draft has a quote icon but no quote — either add a real, consented quote with
    attribution or remove the icon.
- Right: H2 Recovery grows in community.
  - Body: We are an accredited Recovery Community Organization: people in recovery,
    families, and allies building connection through peer-led services, social
    activities, and advocacy. Recovery Alliance fosters recovery as a life-affirming
    process and works to smash stigma and remove barriers.
  - Link: See who we are → about.html
  - Photo: group of people embracing outdoors

### Pathways section (light background)
- Eyebrow: DISTINCT PATHWAYS TO HEALING
- H2: Support shaped around real life.
- Intro: Recovery can begin in many places. We meet people with practical guidance,
  steady encouragement, and connection to community.
- Three cards:
  1. Eyebrow ONE-TO-ONE PEER CARE — "Peer recovery coaching" — One-to-one support from
     state-certified peers who have navigated recovery themselves.
     Link: Meet your kind of support → peer-support.html
  2. (Featured, dark card) Tag LIFE-BUILDING PATH / "Holistic Stability" — "Recovery support
     services" — Residential, justice-involved, and life-building support that helps turn
     next steps into a path forward. Button → services.html (TODO: button label cut off)
  3. Eyebrow HARM REDUCTION & OUTREACH — "Punto de Partida" — A low-barrier opioid drop-in
     center, street outreach team, and Region 10 naloxone resource hub.
     Link: Visit Punto de Partida → punto-de-partida.html
- TODO: confirm nothing else sits between this section and the CTA.

### CTA section (dark background, gold card, photo on left)
- Eyebrow: TAKE THE NEXT STEP
- H2: Start where you are.
- Body: Whether you are seeking support for yourself, a loved one, or your community,
  a conversation with a peer can help clarify the next step.
- Primary button: Talk with Recovery Alliance → contact.html
- REMOVE "Return to Home ↑" (it's on the home page).
- Disclaimer: Peer support complements professional care; it is not a substitute for
  therapy or emergency services. In a crisis, call or text 988. In an emergency, call 911.
- Photo: TODO: confirm who is pictured and that RAEP has consent/license.

### Footer
- Recovery Alliance of El Paso · nav links
- Phone: (915) 594-7000
- TODO: address, email, hours, social links (Facebook page exists — TODO: get URL)
- © 2026 Recovery Alliance of El Paso (El Paso Alliance Inc.)
- Remove "Powered by SiteGround Website Builder."
- Crisis line: 988

## About page (source: old site + Facebook — rewrite, don't copy)
- Who we are (use the Facebook bio as the base): Recovery Alliance of El Paso is a safe,
  nonjudgmental space where individuals, families and communities affected by substance
  and alcohol use disorder can find immediate help, pathways to healing, and hope, guided
  by people who have been there before.
- Vision: A community where long-term recovery thrives.
- History timeline (facts from the old site):
  - 1998: El Paso Alliance founded by people in recovery, families and allies to open a
    public dialogue about addiction, treatment and recovery, and fight stigma.
  - 1999: Community meetings begin (March).
  - April 11, 2000: City of El Paso proclaims El Paso Alliance Day of Sobriety.
  - 2001: 501(c)(3) status.
  - 2002: Shift from advocacy to direct peer services.
  - February 14, 2005: Casa Vida de Salud opens; serves 126 people its first year.
  - TODO: 2006 to today (drop-in center, Alas Nuevas, re-entry, naloxone hub, etc.)
- "What we do today" — short list linking to each program page.

## Program pages
Build each with the shared header/footer, a page hero, and clearly marked TODO sections.
Every program description must be confirmed by leadership before launch.

### casa-vida.html — Casa Vida de Salud (residential recovery home, central El Paso)
Structure: What it is · Who it serves · Daily life · Support we connect you to ·
Multiple pathways · How to get in.
- Known from old site: adults 18+, structured daily curriculum, recovery coaching,
  life skills groups, education on substance use, spiritual support, introduction to
  12-step and faith-based programs, social/recreational events, Texas certified peer
  support, meals, free Narcan.
- TODO: confirm current bed count (old site says 37 — may be outdated).
- TODO: confirm length of stay (old site says both "long-term" and "up to 3 months").
- TODO: confirm meals (old site says 3 daily).
- DO NOT publish the old IOP/SOP or "licensed professionals / ASAM / individualized
  treatment" text unless leadership confirms a current treatment license and licensed
  clinicians. Default wording: "We connect residents to treatment and MOUD providers."
- TODO: "Project Home Program" — confirm whether this is a current program name.

### alas-nuevas.html — Alas Nuevas (women's residential program)
- TODO: all details (who it serves, length of stay, services, how to get in).
- Leadership messaging uses a "cost of addiction vs. benefit of recovery" frame:
  recovery support services like Alas Nuevas yield returns for women, families and
  community. TODO: get approved copy/stats before using numbers.

### reentry.html — Re-entry program
- From old site (rewrite): helps people leaving jail or detention return to the community
  and become self-supporting, with the goal of reducing recidivism. Addresses housing,
  employment, family reunification, and treatment for substance use, mental and
  physical health. Coordination with jail-to-community systems: release orders,
  housing assessment, transportation, medication.
- TODO: confirm current services and how to get connected.

### dwi-program.html — DWI program
- TODO: all details. Confirm with leadership whether it gets its own page.

### punto-de-partida.html
- Drop-in amenities: showers, bathrooms, laundry, clothing closet, respite area, food.
- Street outreach team (unhoused neighbors and encampments).
- Overdose prevention; Region 10 naloxone distribution hub; free Narcan.
- TODO: address, hours, confirm what to call it publicly (Punto de Partida vs.
  Proyecto Centro Salvavida).

### services.html
Overview only: one short card per program linking to its page — peer coaching,
recovery groups, Punto de Partida, Casa Vida, Alas Nuevas, Re-entry, DWI program,
linkage to treatment/MOUD/housing/health care, IDs/paperwork/jobs help.

## Later (not now)
- Spanish version of every page
- Custom domain (CNAME) once RAEP controls it (recoveryalliance.net — access still unresolved)
- Update outside listings (Google, Facebook, treatment directories) when the site launches;
  claim the unclaimed directory listing and fix its "Private Pay" tag
- Donate page / Giving Day link
