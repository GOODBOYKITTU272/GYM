# Document 04 — UI/UX Design Brief

_Converted from `NowWise UI-UX Design Brief.pdf` via pdftotext. Best-effort conversion; the original PDF remains in the repo root as the reference source of truth for exact formatting._

**Note (Phase 1 correction): §9.2 admin `/settings` "thresholds" entry refers to the AI confidence threshold, which is configurable (default 0.70), not a fixed constant.**

---

Document 04 — UI/UX Design Brief
Visual & Interaction Design Guide for NowWise
Product Name
NowWise

Internal Platform
NowWise OS

Product Type
Telegram-first, voice-first AI lifestyle operating system for food, grocery, restaurant, product, habit, and
behavior intelligence.

1. Design Goal
NowWise should feel like:
A calm, intelligent lifestyle companion that helps the user make better decisions without
shame, stress, or complicated tracking.
The product should not feel like:
• A hospital app
• A calorie counter
• A fitness punishment app
• A boring admin panel
• A medical diagnosis tool
• A cluttered nutrition dashboard
• A generic chatbot
The user should feel:
“I can just speak or type. NowWise understands and helps me.”

1

2. Overall Aesthetic
Recommended Aesthetic
Attribute

Direction

Style

Minimal, calm, premium, human

Mood

Trustworthy, soft, intelligent

Visual Density

Clean, not empty

Brand Feeling

More lifestyle OS than fitness tracker

UI Complexity

Simple for users, powerful for admins

Emotional Tone

Supportive, non-judgmental

Design Inspiration

Linear + Notion + Raycast + Apple Health calmness

Design Keywords
Use these words to guide all design decisions:

Calm
Fast
Private
Friendly
Premium
Useful
Human
Clear
Non-judgmental
Voice-first
Avoid these feelings:

Clinical
Scary
Guilty
Over-gamified
Childish
Crowded
Diet-culture

2

Insurance-risk
Medical-diagnosis

3. Brand Personality
NowWise should sound like a smart assistant, not a strict coach.

Personality
Trait

Meaning

Calm

Never panics user

Direct

Gives useful answer quickly

Gentle

No shame language

Smart

Uses context and history

Practical

Gives next action

Private

Respects user trust

Human

Avoids robotic reports

Voice Examples
Bad:
You ate too much sugar. This is unhealthy.
Good:
Sweets showed up 5 days this week. Let’s reduce it to 3 days next week.
Bad:
You failed your Isabgol habit.
Good:
You completed Isabgol 4 out of 7 days. Let’s aim for 5 next week.
Bad:

3

This product is bad.
Good:
This is okay occasionally. If there’s an unsalted version, choose that today.

4. Color System
4.1 Primary Theme
Recommended default:
Light mode first, with premium dark admin support later.
Reason: health/lifestyle products should feel clean, accessible, and friendly. Telegram already controls chat
UI, so the web dashboard should be clear and operational.

4.2 Color Palette
Token

Color

Usage

Primary

#2563EB

Main CTA, selected states, links

Primary Soft

#DBEAFE

Light blue backgrounds, info cards

Secondary

#10B981

Positive habit completion, healthy choice

Warning

#F59E0B

Occasional/limit guidance

Danger

#EF4444

Errors, avoid decision, failed states

Background

#F8FAFC

Main app background

Surface

#FFFFFF

Cards, tables, panels

Surface Muted

#F1F5F9

Secondary sections

Border

#E2E8F0

Card/table borders

Text Primary

#0F172A

Main text

Text Secondary

#475569

Supporting text

Text Muted

#94A3B8

Metadata, timestamps

Purple Accent

#7C3AED

AI insights, premium intelligence

4

Token

Color

Usage

Teal Accent

#14B8A6

Wellness/lifestyle highlights

4.3 Decision Colors
Use color carefully. Do not make health feel scary.
Decision

Color

Meaning

Can Have

Green

Good/okay

Occasionally

Amber

Moderate/limit

Avoid Today

Red soft

Avoid, but no panic

Need Clarification

Blue

Ask one question

Logged

Neutral/blue

Saved event

Reminder Done

Green

Completed

Skipped

Gray/amber

Not failure

4.4 Dark Mode Palette
Dark mode can be added for admin/premium later.
Token

Color

Background

#020617

Surface

#0F172A

Surface Muted

#1E293B

Border

#334155

Text Primary

#F8FAFC

Text Secondary

#CBD5E1

Text Muted

#64748B

Primary

#60A5FA

Positive

#34D399

Warning

#FBBF24

5

Token

Color

Danger

#F87171

5. Typography
5.1 Font
Use:

Inter
Reason:
• Clean
• Modern
• Highly readable
• Works well for dashboards
• Familiar SaaS feel
Fallback:

system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

5.2 Font Scale
Element

Size

Weight

Display

36px

700

Landing page hero

Page Title

28px

700

Admin page titles

Section Title

20px

600

Card/section headings

Card Title

16px

600

Dashboard cards

Body

14px

400

Normal text

Small

13px

400

Descriptions

Meta

12px

400

Timestamps, badges

Button

14px

500/600

6

Usage

CTA text

5.3 Typography Rules
• Use sentence case, not title case everywhere.
• Avoid all caps except small badges.
• Keep user-facing text short.
• Admin dashboards can show more detail.
• Telegram messages should be scannable.

6. Layout System
6.1 Spacing
Use 4px base spacing.
Token

Size

xs

4px

sm

8px

md

16px

lg

24px

xl

32px

2xl

48px

6.2 Border Radius
Component

Radius

Small badges

6px

Buttons

10px

Cards

14px

Modals/drawers

16px

Large panels

20px

Overall feel:
Soft rounded corners, not childish bubbles.

7

6.3 Shadows
Use subtle shadows only.
Element

Shadow

Cards

Very subtle

Modals

Medium soft shadow

Drawers

Soft side shadow

Buttons

No heavy shadows

Tables

No shadow; use border

Avoid:
• Heavy drop shadows
• Neon glow
• Overly colorful gradients
• Loud health warnings

7. Component Style
7.1 Buttons
Primary Button
Use for main actions.
Examples:
• Save
• Approve
• Create reminder
• Send report
Style:

Blue background
White text

8

10px radius
Medium weight

Secondary Button
Use for supporting actions.
Examples:
• Cancel
• View details
• Add more
• Edit
Style:

White background
Border
Dark text

Destructive Button
Use rarely.
Examples:
• Delete user data
• Delete product
• Remove reminder
Style:

Soft red background or red text
Clear confirmation modal

7.2 Cards
Cards are used for:
• Dashboard metrics

9

• User summaries
• Weekly story sections
• Product decision cards
• Reminder status cards
• Behavior pattern cards
Card style:

White background
1px border
14px radius
16–24px padding
No heavy shadow

7.3 Tables
Tables are used in admin dashboard.
Use for:
• Users
• Events
• Voice events
• Product logs
• Product database
• Reviews
• Reminders
• Reports
Table rules:
• Sticky header for large tables
• Search at top
• Filters above table
• Row click opens drawer
• Badges for status
• Confidence score column
• Date range filter on every operational table

7.4 Badges
Badges should be clear and soft.

10

Examples:
Badge

Color

Processed

Green soft

Needs review

Amber soft

Failed

Red soft

Voice

Purple soft

Text

Blue soft

Photo

Teal soft

Product lookup

Indigo soft

Reminder

Green soft

7.5 Drawers
Use right-side drawers for admin review.
Drawer use cases:
• Voice event detail
• Product review
• User quick view
• Reminder detail
• Weekly report preview
• Food log correction
Reason:
Admin should not lose table context.
Drawer width:

Desktop: 480px–720px
Mobile: Full screen

7.6 Modals
Use modals only for focused decisions.

11

Examples:
• Confirm delete
• Merge duplicate products
• Create product
• Export user data
• Approve privacy deletion
• Regenerate weekly report
Do not use modals for normal browsing.

8. Telegram UX Design
Telegram is the main user product.

8.1 Telegram Design Principle
Each Telegram response should follow this structure:

1. Status
2. Decision
3. Short reason
4. Next action
5. Buttons if needed

8.2 Food Log Message Template
User:
I ate rice, dal, curd, and one sweet.
Bot:

Logged as lunch at 1:18 PM.
You had rice, dal, curd, and one sweet.
Since this is your fourth sweet this week, avoid dessert tonight and add protein
at dinner.
Buttons:

12

Correct
Add more
View today

8.3 Product Lookup Template
User:
Tony Garden Sunflower Seeds
Bot:

I found Tony Garden Sunflower Seeds.
Decision: Okay occasionally.
If this is salted, keep it to a small handful. Unsalted is better today because
you already had salty snacks twice this week.
Buttons:

Salted
Unsalted
Wrong product
Show alternative

8.4 Reminder Template
Bot:

Time for Isabgol.
Please take it with enough water.
Buttons:

13

Taken
Later
Skip

8.5 Weekly Story Template
Bot:

Your NowWise Week
Food logs: 18
Product checks: 6
Isabgol: 4/7 days
Sweets: 5 days
Vegetables: 2 days
Best improvement:
You logged dinner consistently.
Next week focus:
Reduce sweets to 3 days and add vegetables at dinner.
Buttons:

Explain more
Set next goal
View reminders

8.6 Error Message Template
Bad:
Error: transcription failed.
Good:

14

I couldn’t clearly understand the voice note.
Please type it or send again.
Buttons:

Type instead
Send again

9. Admin Dashboard UX
9.1 Admin Dashboard Vibe
Admin dashboard should feel like:
Linear-style operations dashboard for AI health/lifestyle data review.
It should be:
• Fast
• Searchable
• Filterable
• Review-focused
• Not decorative
• Not overloaded

9.2 Admin Sidebar
Sidebar items:

Dashboard
Users
Events
Voice Events
Food Logs
Product Logs
Product Database
Product Reviews
Reminders
Weekly Reports

15

Behavior Patterns
Privacy Requests
Settings
Sidebar style:

Fixed left sidebar
Light background
Active item blue highlight
Compact icons
Text labels visible on desktop
Collapsible later

9.3 Admin Header
Header should contain:
• Page title
• Global date range
• Search
• Admin profile menu
• Environment badge: staging/production
Example:

Voice Events

Last 7 days

Search user/product/transcript

9.4 Admin Dashboard Home
Cards:
Card

Description

Active users

Daily/weekly active users

Logs today

Total user events

Voice notes today

Voice adoption

Product lookups

Store/product usage

Reminders sent

Habit system volume

16

Admin

Card

Description

Reminder completion

Retention signal

Low-confidence queue

Admin workload

Failed transcriptions

ASR quality

Weekly reports sent

Engagement

Raw audio deletion

Privacy compliance

9.5 Admin Review UX
Review screens must be built for speed.
Each review drawer should show:

Original input
AI interpretation
Confidence score
Suggested correction
Admin action buttons
Audit info
Primary actions:

Approve
Edit
Reject
Send to review
After admin completes one review:
Automatically load next pending review.

10. Product Compliance Portal UX
10.1 Product Database Page
Purpose:

17

Manage packaged food/product intelligence.
Table columns:

Brand
Product name
Category
Barcode
Processing level
Verification status
Updated date
Confidence
Actions:

Add product
Import CSV
Merge duplicates
Review pending

10.2 Product Detail Page
Sections:
1. Product identity
2. Variants
3. Ingredients
4. Nutrition
5. Allergens
6. Processing level
7. Decision rules
8. User lookup history
9. Admin audit trail

10.3 Product Review Drawer
When AI is unsure, admin sees:
• User query
• Source: voice/text/photo
• AI match

18

• Confidence
• Possible matches
• Product database search
• Create new product option
Actions:

Approve match
Change product
Create product
Merge duplicate
Reject

11. User Web Dashboard UX
User web dashboard is not primary in MVP, but when built it should be simple.

11.1 User Dashboard Sections
Section

Purpose

Today timeline

Food/product/reminder events

Current focus

One improvement for today

Habits

Taken/skipped reminders

Product checks

Recent products checked

Weekly story

Summary

Privacy

Data controls

11.2 User Dashboard Tone
Do not show scary charts first.
Show:

Today you logged 3 events.
Your current focus: avoid sweets tonight.
Isabgol: pending at 9:30 PM.

19

Keep dashboards story-first, not analytics-first.

12. Mobile Responsiveness
12.1 Admin Mobile
Admin dashboard should work on mobile but does not need to be perfect for heavy review.
Mobile behavior:
• Sidebar becomes hamburger menu
• Tables become cards
• Drawers become full-screen sheets
• Filters collapse into filter button
• Action buttons remain sticky at bottom

12.2 User Web Mobile
User web dashboard should be mobile-first.
Navigation:

Bottom tabs
Tabs:

Today
Reminders
Week
Privacy

13. Accessibility
13.1 Requirements
Area

Requirement

Contrast

Meet WCAG AA contrast

20

Area

Requirement

Font size

Minimum 14px body text

Buttons

Minimum 44px touch target on mobile

Color

Do not rely only on color for status

Keyboard

Admin dashboard must support keyboard navigation

Screen readers

Buttons and inputs need labels

Error messages

Clear, human readable

Forms

Visible labels, not placeholder-only

13.2 Health-Sensitive Design
Because this is lifestyle/health-adjacent, accessibility also means emotional safety.
Avoid:
• Red scary warnings everywhere
• “Failure” labels
• Weight-loss obsession visuals
• Before/after body imagery
• Disease prediction banners
• Insurance-style risk scores
Use:
• Gentle progress
• Simple suggestions
• Calm warnings
• Weekly improvement framing

14. Icons
Use Lucide Icons.
Recommended icons:
Concept

Icon

Food

Utensils

21

Concept

Icon

Product

Package

Voice

Mic

Reminder

Bell

Water

Droplet

Weekly report

CalendarDays

User

User

Privacy

Shield

Review

ClipboardCheck

Warning

TriangleAlert

Success

CheckCircle

Search

Search

Settings

Settings

Dashboard

LayoutDashboard

Icon style:

Stroke icons
No filled cartoon icons
Consistent 18–20px size

15. Charts and Data Visualization
Use simple charts only.

15.1 Recommended Charts
Chart

Use

Line chart

Logs over time

Bar chart

Weekly habit completion

Donut chart

Food category split, if needed

Heatmap

Habit calendar later

22

Chart

Use

Progress bar

Weekly focus progress

15.2 Avoid
• Complex medical graphs
• Insurance-like risk meters
• Scary red “diabetes risk” UI
• Too many charts on user dashboard
• Calorie obsession dashboards

16. Empty States
16.1 User Empty States
No Food Logs
No food logs yet.
Send a voice note like:
“I ate dosa and chutney.”
CTA:

Log food

No Reminders
No reminders yet.
Try:
“Remind me daily at 9:30 PM to take Isabgol.”
CTA:

23

Create reminder

No Weekly Story
Your weekly story needs a few more logs.
Use NowWise for 3–5 days and I’ll summarize your patterns.

16.2 Admin Empty States
No Reviews
No pending reviews.
Low-confidence AI outputs will appear here.

No Products
No products yet.
Add your first product or import a CSV.

No Voice Events
No voice events yet.
Telegram voice notes will appear here after users start speaking to NowWise.

17. Loading States
17.1 Telegram Loading
For text/product lookup:

24

Checking this now.
For voice:

Got your voice note. I’m understanding it now.
For photo:

Photo saved. I’ll analyze it in the background.
For receipt:

Receipt saved. I’m reading the items.

17.2 Admin Loading
Use:
• Skeleton table rows
• Skeleton cards
• Spinner only inside buttons
• Right drawer skeleton for details
Avoid full-screen loaders unless necessary.

18. Error States
18.1 Voice Error
I couldn’t clearly understand the voice note.
Please type it or send again.
Buttons:

25

Type instead
Send again

18.2 Product Not Found
I don’t have this product verified yet.
I’ll give a general suggestion and send it for review.
Buttons:

Send photo
Type details
Cancel

18.3 Reminder Missing Time
What time should I remind you?
Buttons:

Morning
Afternoon
Evening
Night
Choose time

18.4 Admin Error
Something went wrong while loading this data.
Try again. If it continues, check logs.
Buttons:

26

Retry
View logs

19. Forms
19.1 Form Style
Use:
• Clear labels
• Helper text
• Inline validation
• Required field markers
• Save/cancel buttons
Do not use placeholder-only forms.

19.2 Product Form Fields
Product create/edit form:

Brand
Product name
Category
Barcode
Ingredients
Nutrition facts
Allergens
Processing level
Verification status
Source
Admin notes

19.3 Reminder Form Fields
Reminder create/edit form:

27

Habit name
Reminder type
Frequency
Time
Timezone
Active status
User
Created from

20. Interaction Rules
20.1 One Primary Action Per Screen
Every screen should have one obvious main action.
Examples:
Screen

Primary Action

Product database

Add product

Product review

Approve/change match

Voice review

Approve/edit transcript

Weekly report

Approve/send

Privacy request

Complete request

20.2 Keep User in Context
Admin should not jump between pages unnecessarily.
Use drawers for detail work.
Use modals only for confirmation.

28

20.3 Confirmation Required
Require confirmation for:
• Delete user
• Delete user data
• Delete product
• Merge products
• Send weekly report manually
• Change privacy setting
• Disable reminder

21. Copywriting Rules
21.1 User-Facing Copy
Use:
• Short sentences
• No shame
• One next action
• Clear recommendation
• “Today” and “this week” framing
Avoid:
• Diagnosis
• Fear
• Blame
• Long paragraphs
• Technical nutrition jargon

21.2 Admin Copy
Admin copy can be more technical.
Use terms like:
• Confidence score
• ASR provider
• Event status
• Review queue
• Product match

29

• Parsed entities

22. Landing Page Design
Landing page is optional for MVP but should exist soon.

22.1 Landing Page Structure
Sections:
1. Hero
2. How it works
3. Use cases
4. Voice-first benefit
5. Privacy promise
6. Telegram CTA

22.2 Hero Copy
Speak to NowWise before you eat, shop, or skip a habit.
NowWise helps you make better food, grocery, restaurant, and daily habit
decisions through Telegram.
CTA:

Start on Telegram

23. Privacy Page Design
Privacy page should be calm and clear.
Sections:
• What data we store
• Voice audio policy
• Photo policy
• Transcript policy

30

• Data deletion
• Data sharing
• Medical disclaimer
• Contact support
Important statement:

Raw voice audio is deleted after transcription by default.
We do not sell personal health behavior data.

24. Visual Hierarchy Rules
Telegram
Priority:
1. Decision
2. Reason
3. Next action
4. Buttons

Admin
Priority:
1. Status
2. User/input
3. Confidence
4. AI output
5. Action

User Dashboard
Priority:
1. Today’s focus
2. Habit status
3. Timeline
4. Weekly story
5. Privacy

31

25. Design Do’s and Don’ts
Do
• Use calm colors
• Make voice the hero
• Use cards for summaries
• Use tables for operations
• Use drawers for review
• Use clear empty states
• Use supportive copy
• Show confidence scores to admins
• Keep user messages short
• Make privacy visible

Don’t
• Do not use scary red risk dashboards
• Do not show disease predictions
• Do not shame the user
• Do not make calories the main screen
• Do not require long forms
• Do not make photo upload mandatory
• Do not create cluttered admin pages
• Do not hide privacy controls
• Do not use childish gamification
• Do not create insurance-style health scoring

26. Final Design Direction
NowWise should feel like:

Telegram-first user product
+
Linear-style admin dashboard
+
Apple Health-like calm wellness tone
+
Notion-like clarity

32

+
Raycast-like speed
The design should make the product feel:
• Fast
• Calm
• Private
• Intelligent
• Human
• Premium
• Useful daily
The strongest design principle is:
NowWise should reduce effort, not add another dashboard burden.
The user should not think:
“I need to use an app.”
The user should think:
“I’ll just speak to NowWise.”

33

