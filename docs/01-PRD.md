# Document 01 — Product Requirements (PRD)

_Converted from `NowWise Product Requirements.pdf` via pdftotext. Best-effort conversion; the original PDF remains in the repo root as the reference source of truth for exact formatting._

**Note (Phase 1 correction): §11 "Updated Database Schema" in this document is DEPRECATED. Document 05 (Backend Schema) is the sole authoritative schema.**

---

Updated PRD: NowWise
Voice-First AI Lifestyle Operating System Using Telegram +
OpenWhispr-Inspired Local ASR
Product Name: NowWise
Internal Platform: NowWise OS
Core AI Engine: NowWise Decision Engine
Voice Layer: NowWise Voice Intelligence Layer
Open-Source Voice Foundation: OpenWhispr-inspired ASR service
Primary Channel: Telegram
Secondary Channels: WhatsApp, LINE, Mobile App later
Product Category: AI Lifestyle OS / Food Decision Engine / Habit Intelligence Platform
Version: Updated PRD v2.0
Core Principle: The user should never wait, never fill unnecessary forms, and never feel judged.

1. Updated Product Decision
The old NowWise PRD was correct in product vision, but after analyzing OpenWhispr, one major update is
needed:
Voice should become the primary input path.
Earlier priority:
1. Text
2. Voice
3. Photo
4. Barcode
5. Receipt
Updated priority:
1. Voice
2. Text
3. Product name
4. Receipt
5. Photo
6. Barcode
Why?

1

Because in real life, the user is not sitting calmly and entering data. The user is:
• In Reliance Fresh
• At billing counter
• In restaurant
• Driving
• Walking
• Talking fast
• Having poor internet
• Not interested in filling forms
Voice solves this better than photo.

2. Final Product Positioning
NowWise is a voice-first AI lifestyle operating system that helps users make better food, grocery,
restaurant, product, and habit decisions through Telegram.
The user simply speaks, types, or sends a photo.
NowWise automatically understands:
• What the user said
• What the user ate
• What the user is buying
• What habit they want to schedule
• Whether this is breakfast/lunch/dinner/snack
• The real date and time
• The user’s goal
• Past food behavior
• Repeated sweets/snacks
• Product intelligence
• Recommended next action

3. Updated One-Line Product Definition
NowWise is a Telegram-first, voice-first AI lifestyle companion that converts everyday speech, food photos,
grocery products, receipts, and habit requests into personalized real-time recommendations and long-term
behavior intelligence.

2

4. Why PRD Needs Update After OpenWhispr
OpenWhispr changes our thinking because it shows that voice is not just transcription.
Voice can become:
• Food logging
• Product lookup
• Reminder creation
• Grocery basket analysis
• Restaurant decision support
• AI command input
• Daily reflection
• Weekly report request
• Admin productivity tool
• Internal PRD/prompt creation tool
OpenWhispr also proves that local/private voice processing is possible using local engines such as Whisper
and Parakeet.
But harsh point:
We should not install the full OpenWhispr desktop app inside NowWise production backend.
OpenWhispr is a desktop application. NowWise needs a server-side Telegram voice pipeline.
So the updated PRD must say:
Use OpenWhispr as architecture reference and local ASR foundation, not as the entire
NowWise product.

5. Updated Product Architecture
User
↓
Telegram
↓
NowWise Bot Gateway
↓
Input Router
├── Voice Input
├── Text Input
├── Product Name Input

3

├── Photo Input
├── Receipt Input
└── Menu Input
↓
NowWise Voice Intelligence Layer
├── OpenWhispr Local ASR Service
├── Whisper.cpp
├── NVIDIA Parakeet / Sherpa ONNX
├── Cloud ASR Fallback
└── Wispr Flow Optional Fallback
↓
Transcript
↓
Intent Classifier
↓
Event Engine
↓
NowWise Product Graph / Food Graph / Habit Graph
↓
Decision Engine
↓
Telegram Reply
↓
Weekly Story / Dashboard / Admin Review

6. Core Product Philosophy
Old Philosophy
The user should not manually select date and time.

Updated Philosophy
The user should simply speak or send. NowWise should capture everything else.
That means:
• No manual date
• No manual time
• No manual meal type
• No manual form
• No forced photo upload
• No long onboarding

4

• No calorie obsession
• No shame language
• No medical diagnosis
• No selling personal data

7. Updated V1 Product Scope
V1 Must-Have
Feature

Updated
Decision

Why

1

Telegram bot

Keep

Lowest friction

2

Voice food logging

Upgrade to core

Voice is now primary

3

OpenWhispr-style ASR service

Add

Gives local/open-source voice
foundation

4

Cloud ASR fallback

Add

Needed if local ASR fails

5

Text food logging

Keep

Works in poor network

6

Product name search

Keep

Fast supermarket flow

7

Auto timestamp

Keep

User should not select date/time

8

Auto meal type

Keep

Breakfast/lunch/snack/dinner inference

9

Habit reminders

Keep

Daily retention loop

10

Isabgol reminder

Keep

Strong concrete use case

11

Taken/Later/Skip buttons

Keep

Converts reminder into data

12

Weekly behavior report

Keep

Shows user value

13

Product intelligence database

Keep

Required for packaged product
decisions

14

Offline/background photo
queue

Keep

Photo must not block user

15

Admin review queue

Keep

Needed for low-confidence AI cases

16

Privacy center

Keep

Voice and health data are sensitive

No.

5

8. What Should Move Out of V1
Feature

Decision

Reason

Full mobile app

Later

Telegram first validates demand

Full barcode scanner

V2

Product database dependency is high

Wearables

V2/Future

Not needed to prove usage

Doctor portal

Future

Regulatory and trust complexity

Insurance analytics

Avoid V1

Trust risk

Full fridge AI

Later

Hard and not needed now

Family mode

Future

Adds complexity

Meeting transcription

Not for NowWise
V1

OpenWhispr has it, but NowWise does not need
it

Voice biometrics

Avoid

Privacy risk

Emotion detection from
voice

Avoid

Too sensitive

9. Updated User Flows
Flow 1: Voice Food Log
User sends Telegram voice:
I ate rice, dal, curd, and one sweet.
System steps:
1. Telegram receives voice note.
2. Backend downloads audio.
3. Audio is converted from OGG/OPUS to WAV.
4. Voice router sends it to OpenWhispr local ASR.
5. If local ASR fails, cloud fallback is used.
6. Transcript is generated.
7. Intent classifier detects food log.
8. Event engine captures timestamp.
9. Meal type is inferred.
10. Food items are extracted.
11. Sweet pattern is checked.

6

12. User receives recommendation.
Reply:
Logged as lunch. You had rice, dal, curd, and one sweet. Since this is your fourth sweet this
week, avoid dessert tonight and add protein at dinner.

Flow 2: Voice Product Lookup
User at Reliance sends voice:
Can I buy Tony Garden sunflower seeds?
System:
1. Transcribes voice.
2. Detects product lookup.
3. Searches NowWise Product Graph.
4. Finds sunflower seeds.
5. Checks salted/unsalted uncertainty.
6. Checks user’s weekly snack/sodium pattern.
7. Replies.
Reply:
You can buy it occasionally. If it is salted, keep it to a small handful. If unsalted, it is a better
option. Since you already had salty snacks twice this week, choose unsalted if available.

Flow 3: Voice Reminder Creation
User sends voice:
Remind me every night at 9:30 to take Isabgol.
System:
1. Transcribes voice.
2. Detects reminder creation.
3. Extracts habit: Isabgol.
4. Extracts frequency: every night.
5. Extracts time: 9:30 PM.
6. Creates reminder.
7. Confirms with user.

7

Reply:
Done. I’ll remind you every night at 9:30 PM to take Isabgol with enough water.
✅ Taken | ⏰ Later | ❌ Skip

Flow 4: Voice Grocery Basket
User says:
I am buying paneer, eggs, bananas, and chips.
System:
1. Detects grocery basket.
2. Categorizes items.
3. Checks protein, fruit, vegetables, snacks.
4. Suggests missing item.
Reply:
Good basket. Paneer and eggs cover protein, bananas cover fruit. Chips are okay occasionally.
Add one vegetable if possible.

Flow 5: Poor Internet Photo Case
User sends photo at billing counter.
System immediately replies:
Photo saved. Internet looks slow, so I’ll analyze it in the background. For faster help, you can
also speak or type the product name.
Then the system processes later.
This is important because photo should not be the main dependency.

8

10. Updated Technical Architecture
10.1 Services
Service

Responsibility

Telegram Bot Gateway

Receives text, voice, photos, receipts

Input Router

Determines input type

Audio Fetcher

Downloads Telegram voice/audio file

Audio Converter

Converts OGG/OPUS/WebM to ASR-ready format

Voice Router

Chooses ASR provider

OpenWhispr ASR Adapter

Uses local Whisper/Parakeet style service

Cloud ASR Adapter

Fallback provider

Transcript Cleaner

Cleans raw transcript

Intent Classifier

Detects food/product/reminder/grocery/menu

Event Engine

Creates timeline events

Product Graph

Stores product/brand/nutrition/ingredients

Habit Scheduler

Creates reminders

Decision Engine

Produces user-specific recommendation

Weekly Report Engine

Produces weekly story

Admin Review Queue

Reviews failed/low-confidence cases

Privacy Cleaner

Deletes raw audio after transcription

10.2 OpenWhispr-Inspired ASR Service
The ASR service should expose an OpenAI-style endpoint:

POST /v1/audio/transcriptions
Input:

file: audio.ogg/audio.webm/audio.wav
model: whisper-small / whisper-medium / parakeet

9

language: en-IN / hi-IN / auto
prompt: custom dictionary
Output:

{
"text": "I ate rice, dal, curd, and one sweet."
}
This is useful because OpenWhispr’s custom ASR shim pattern already describes a service that accepts
multipart audio on /audio/transcriptions and returns JSON with a text field.

11. Updated Database Schema
11.1 users
Field

Purpose

id

User ID

telegram_user_id

Telegram identity

name

User name

timezone

Local timezone

language_preference

English/Hinglish/Hindi/Telugu

created_at

Signup date

11.2 user_profiles
Field

Purpose

user_id

Link to user

primary_goal

Digestion, weight, sugar control, energy

food_preferences

Vegetarian/non-vegetarian/etc.

allergies

Optional

reminder_preferences

Quiet hours, preferred time

privacy_mode

Normal/private/local-preferred

10

11.3 user_events
Field

Purpose

id

Event ID

user_id

User

event_type

food_log/product_lookup/reminder/grocery/menu

source

voice/text/photo/receipt/barcode

occurred_at

Real timestamp

timezone

User timezone

inferred_meal_type

breakfast/lunch/snack/dinner

raw_input

Original text/transcript

ai_interpretation

Structured meaning

confidence_score

AI confidence

status

processed/review/failed

11.4 voice_events
Field

Purpose

id

Voice event ID

user_id

User

telegram_message_id

Telegram source

received_at

Backend time

occurred_at

Telegram message time

audio_temp_path

Temporary file

provider_used

openwhispr_local/cloud_fallback

raw_transcript

ASR output

cleaned_transcript

Cleaned text

language

Detected language

confidence_score

ASR confidence

11

Field

Purpose

processing_time_ms

Latency

raw_audio_deleted_at

Privacy deletion timestamp

11.5 products
Field

Purpose

id

Product ID

brand

Brand name

product_name

Product name

category

Snacks, dairy, seeds, drinks

barcode

Optional

ingredients

Ingredient text

nutrition

JSON nutrition fields

allergens

Allergen flags

processing_level

Low/medium/high

verification_status

unverified/admin_verified

created_at

Created date

Field

Purpose

id

Product log ID

user_id

User

product_id

Matched product

query_text

User input

source

voice/text/photo/barcode

decision

can_have/avoid/occasionally

reason

AI reason

11.6 product_logs

12

Field

Purpose

confidence_score

Match confidence

occurred_at

Timestamp

11.7 reminders
Field

Purpose

id

Reminder ID

user_id

User

habit_name

Isabgol, water, walk

frequency

daily/weekly/custom

reminder_time

Time

timezone

User timezone

active

True/false

created_from

voice/text

11.8 reminder_events
Field

Purpose

id

Reminder occurrence

reminder_id

Parent reminder

scheduled_at

Time due

sent_at

Sent time

user_action

taken/later/skip/no_response

action_at

When user responded

11.9 behavior_patterns
Field

Purpose

id

Pattern ID

13

Field

Purpose

user_id

User

pattern_type

sweets/sodium/late_night/low_protein

period_start

Start date

period_end

End date

evidence

Events supporting pattern

insight

Human-readable insight

severity

low/medium/high

12. AI Modules
Module

Purpose

ASR module

Turns voice into text

Transcript cleaner

Cleans filler words

Intent classifier

Determines what user wants

Entity extractor

Extracts food/product/time/habit

Meal inference engine

Infers breakfast/lunch/snack/dinner

Product matcher

Matches packaged products

Habit parser

Creates reminders

Decision engine

Gives can-have/avoid/occasionally

Pattern detector

Finds repeated sweets/snacks/habits

Weekly story generator

Summarizes behavior

Safety guardrail

Avoids diagnosis/medical claims

13. Updated AI Decision Formula
Transcript/Input
+ User Goal
+ Current Time
+ Meal Window

14

+ Today’s Timeline
+ Weekly Patterns
+ Product/Food Data
+ Confidence Score
= Personalized Decision
Example:
User:
Can I buy Tony Garden sunflower seeds?
System context:
• Time: 7:15 PM
• User goal: reduce sweets and improve digestion
• This week: salty snacks twice
• Product: sunflower seeds, maybe salted
• Confidence: medium
Reply:
You can buy it occasionally. If this is salted, keep it small. Unsalted is better today because
your salty snacks are already high this week.

14. Updated Feature Priority
Must Build First
Rank

Feature

Why

1

Telegram bot

Distribution

2

Voice note support

Main UX

3

OpenWhispr-style local ASR

Privacy and cost control

4

Cloud ASR fallback

Reliability

5

Auto timestamp

No manual logging

6

Intent classifier

Converts speech into action

7

Food logging

Daily core use

8

Product lookup

Supermarket use case

15

Rank

Feature

Why

9

Reminder creation

Habit retention

10

Weekly report

Value proof

11

Admin review

Quality control

12

Privacy controls

Trust

Should Build Next
Feature

Why

Product compliance portal

Fix product data

Restaurant menu analysis

Strong use case

Grocery receipt scan

Works after billing

Product alternatives

Makes recommendation actionable

User correction flow

Improves accuracy

Daily reflection

Adds context

Later
Feature

Why Later

Barcode scanner

Needs product DB maturity

Wearables

Not needed for first proof

Full mobile app

Telegram first

Family mode

Complexity

Doctor reports

Requires trust and governance

B2B insights

Must wait until user trust is strong

Must Avoid
Feature

Why Avoid

Selling personal data

Destroys trust

16

Feature

Why Avoid

Disease prediction claims

Regulatory and ethical risk

Voice biometrics

Privacy risk

Emotion/stress inference from voice

Sensitive and unnecessary

Always-listening mode

Trust disaster

Insurance scoring

Not V1, dangerous positioning

15. Updated MVP
MVP Promise
Speak to NowWise on Telegram. It logs your food, checks products, creates reminders, and
gives weekly behavior insights.

MVP Includes
Feature

Include

Telegram text

Yes

Telegram voice

Yes

Photo upload

Limited

OpenWhispr-inspired ASR

Yes

Cloud fallback

Yes

Food logs

Yes

Product lookup

Yes

Habit reminders

Yes

Isabgol flow

Yes

Weekly report

Yes

Admin review

Yes

Privacy controls

Yes

17

MVP Excludes
Feature

Exclude

Full app

Yes

Barcode

Yes

Wearables

Yes

Insurance

Yes

Doctor portal

Yes

Meeting transcription

Yes

OpenWhispr notes app

Yes

16. Updated Admin Panel
Admin panel should include:
Section

Purpose

Users

View user profile and goals

Events

See user logs by date/time

Voice events

See transcript success/failure

Low-confidence queue

Fix uncertain logs

Product database

Add/edit product records

Product corrections

Approve user corrections

Reminders

Check delivery and actions

Weekly reports

Preview generated summary

Privacy requests

Export/delete user data

ASR metrics

Provider latency, accuracy, fallback rate

18

17. Updated Technical Stack
Layer

Recommended Stack

Front channel

Telegram Bot API

Backend

Node.js / Next.js API / Python workers

Database

Supabase Postgres

File storage

Supabase Storage

Queue

Redis / BullMQ / Supabase queue

Audio conversion

FFmpeg

Local ASR

Whisper.cpp / Parakeet / sherpa-onnx

ASR inspiration

OpenWhispr

Cloud fallback

OpenAI / Groq / Deepgram

AI reasoning

GPT / Claude / Gemini

Admin dashboard

Next.js

Monitoring

Sentry + logs

Analytics

Postgres dashboards

18. Updated Implementation Plan
Phase 1: Voice Prototype
Task

Output

Create Telegram bot

Bot receives messages

Receive voice notes

Voice note event captured

Download Telegram audio

Audio stored temporarily

Convert audio

OGG/OPUS to WAV

Build ASR endpoint

/v1/audio/transcriptions

Connect local Whisper/Parakeet

Transcript generated

Reply transcript to Telegram

Proof complete

19

Phase 2: Intelligence Prototype
Task

Output

Add intent classifier

Food/product/reminder detection

Add auto timestamp

Event time captured

Add meal inference

Breakfast/lunch/snack/dinner

Add food entity extraction

Food list created

Add reminder parser

Habit reminder created

Add product lookup

Product recommendation

Add simple decision engine

Basic advice

Phase 3: MVP Launch
Task

Output

Add weekly report

Weekly story sent

Add user profile

Goals/preferences

Add product database

Basic product graph

Add admin review

Correct failed AI

Add privacy deletion

Raw audio cleanup

Add fallback ASR

Reliability

Test with 50 users

Real usage data

Phase 4: Product Intelligence
Task

Output

Add compliance portal

Admin product correction

Add grocery receipt OCR

Basket intelligence

Add restaurant menu analysis

Order guidance

Add pattern detection

Sweets, sodium, low protein

Add product alternatives

Better choices

20

19. Updated Success Metrics
Voice Metrics
Metric

Target

Voice transcription success

95%+

Voice intent accuracy

90%+

Reminder creation accuracy

95%+

Food entity extraction

85%+

Product lookup from voice

80%+

Average voice processing time

Under 3 seconds

User correction rate

Under 10%

Product Metrics
Metric

Target

First voice log within day 1

50%+

First reminder created

30%+

Logs per user per week

10+

Product lookups per user per week

3+

Weekly report open rate

60%+

Day 7 retention

35%+

Day 30 retention

20%+

20. Updated Risk Table
Risk

Severity

Mitigation

OpenWhispr too desktop-heavy

High

Use only ASR pattern, not full app

Voice accuracy poor for Indian foods

High

Custom dictionary + admin correction

21

Risk

Severity

Mitigation

Product DB incomplete

High

Manual correction portal

Photo uploads slow

High

Voice/text-first design

Cloud ASR cost high

Medium

Local ASR first, cloud fallback

Privacy concerns

Very High

Delete raw audio, consent center

AI gives medical claims

High

Safety guardrails

Too many features

High

Keep MVP focused

Users do not return daily

High

Reminders + weekly story

21. Updated Engineering Prompt
Use this prompt in Claude/Codex:
We are building NowWise, a Telegram-first and voice-first AI lifestyle operating system. The
user sends Telegram voice notes, text, product names, photos, grocery receipts, or reminder
requests. The system must automatically capture timestamp/timezone, infer event type,
classify intent, extract food/product/habit entities, and reply with a personalized
recommendation.
Study OpenWhispr/openwhispr as a reference for local/open-source transcription, especially
its local Whisper/Parakeet support, self-hosted transcription pattern, audio processing, and
provider routing. Do not embed the full Electron desktop app into NowWise backend.
Build a server-side NowWise Voice Service with: - Telegram voice note ingestion - Audio
download - OGG/OPUS to WAV conversion using FFmpeg - OpenAI-style /v1/audio/
transcriptions endpoint - Local ASR adapter using Whisper.cpp or Parakeet - Cloud
fallback adapter - Transcript cleaner - Intent classifier - Event engine - Food/product/reminder
extraction - Raw audio deletion - Admin low-confidence review queue
Produce folder structure, DB schema, API routes, background jobs, test plan, and first MVP
implementation steps.

22. Final Updated Founder Recommendation
The old NowWise PRD was product-correct.
But the updated version should be:

22

Voice-first, Telegram-first, OpenWhispr-inspired, privacy-first, product-intelligencebacked.
Do not build:
Another food tracker.
Do not build:
Another photo scanner.
Do not build:
Another calorie counter.
Build:
A voice-first lifestyle decision engine that remembers the user and helps the next decision.
The user should feel:
“I just speak to NowWise. It understands my food, products, reminders, and habits. It helps
me make a better choice right now.”
That is the updated PRD direction.

23

