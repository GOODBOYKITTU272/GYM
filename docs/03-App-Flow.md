# Document 03 — App Flow

_Converted from `NowWise App Flow.pdf` via pdftotext. Best-effort conversion; the original PDF remains in the repo root as the reference source of truth for exact formatting._

**Note (Phase 1 correction): Journeys 4 (Restaurant Menu Decision) and 5 (Grocery Receipt Scan) are V1.1 scope, not initial MVP.**

---

Document 03 — App Flow
Navigation & User Journey Map for NowWise
Product Name
NowWise

Internal Platform
NowWise OS

Document Purpose
This document defines how users, admins, and reviewers move through NowWise before any screen is built.
The goal is to make the product feel like one connected system, not separate random pages.

1. Product Flow Summary
NowWise has two main experiences:

1.1 User Experience
Primary channel:
Telegram
The user does not start with a traditional app or website.
The user starts by sending a message, voice note, product name, photo, receipt, or reminder request to the
NowWise Telegram bot.
The user journey is chat-first.

1.2 Admin Experience
Primary channel:

1

Web dashboard
Admins use the web dashboard to:
• View users
• Review food/product logs
• Fix failed AI results
• Manage product database
• Review voice transcripts
• Manage reminders
• Preview weekly reports
• Handle privacy/data requests

2. Navigation Type
2.1 Telegram User Navigation
Telegram does not use pages. It uses conversational navigation.
Main interaction types:
Interaction

Example

Text message

“I ate rice dal curd”

Voice note

User speaks meal/product/reminder

Photo

Food/product/receipt/menu image

Bot buttons

Taken / Later / Skip

Quick reply buttons

Yes / No / Correct

Inline actions

View weekly summary, change goal, privacy settings

2.2 Admin Web Navigation
Admin dashboard uses:
• Left sidebar
• Top header
• Search bar
• Filters
• Detail pages
• Review drawers

2

• Edit modals
Main sidebar:

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
Behavior Patterns
Privacy Requests
Settings

2.3 User Web Dashboard Navigation
User web dashboard is secondary, not MVP-first.
Future user web navigation:

Dashboard
Timeline
Food Logs
Products
Reminders
Weekly Story
Privacy
Settings
For MVP, user web dashboard can be basic or skipped. Telegram should remain primary.

3. First Screen
3.1 Brand New User First Screen
Entry point:

3

User opens Telegram bot link.
Example:

https://t.me/nowwise_bot
Bot sends:
Hi, I’m NowWise.
I help you make better food, grocery, restaurant, and habit decisions.
You can speak, type, or send photos.
What do you want help with first?
Buttons:

🍽 Log food
🛒 Check product
⏰ Set reminder
🎯 Set health goal

3.2 Returning User First Screen
Returning user opens Telegram and sends any message.
No homepage.
No dashboard first.
The bot reacts based on intent.
Example:
User:
I ate dosa and chutney
Bot:
Logged as breakfast at 8:42 AM. Add protein later today if possible.

4

4. Auth Flow
4.1 Telegram User Auth
MVP user auth is automatic through Telegram.
No email/password needed.
System identifies user using:

telegram_user_id
telegram_chat_id
Flow:

User opens Telegram bot
→ Bot receives Telegram identity
→ System checks users table
→ If new user, create user
→ Start onboarding
→ If existing user, process message normally

4.2 Admin Auth
Admin dashboard uses Supabase Auth.
Flow:

Admin visits /admin/login
→ Enters email/password
→ Supabase Auth verifies
→ System checks admin role
→ Redirect to /admin/dashboard
If user is not admin:

Redirect to /admin/login
Show: “You do not have access to this workspace.”

5

4.3 Future User Web Auth
Future user dashboard auth options:
• Login using Telegram OTP/deep link
• Magic link
• Phone number OTP
But not required for MVP.

5. Pages List
5.1 Public Pages
Route

Page

Description

MVP

/

Landing Page

Explains NowWise and Telegram CTA

Should Have

/privacy

Privacy Policy

Explains food/voice/photo data handling

Must Have

/terms

Terms

General terms and wellness disclaimer

Must Have

/support

Support

Help/contact page

Should Have

5.2 Admin Pages
Route

Page

Description

MVP

/admin/login

Admin Login

Admin authentication

Must
Have

/admin/dashboard

Admin Dashboard

High-level metrics

Must
Have

/admin/users

Users List

View all users

Must
Have

/admin/users/:id

User Detail

View user profile, timeline,
reminders

Must
Have

/admin/events

Event Timeline

All user events with filters

Must
Have

/admin/voice-events

Voice Events

Voice transcripts, failures, ASR
provider metrics

Must
Have

6

Route

Page

Description

MVP

/admin/food-logs

Food Logs

Structured meal logs

Must
Have

/admin/product-logs

Product Logs

Product lookup history

Must
Have

/admin/products

Product Database

Add/edit/search products

Must
Have

/admin/products/:id

Product Detail

Product nutrition, variants, logs,
corrections

Must
Have

/admin/product-

Product Review
Queue

Low-confidence product matches

Must
Have

Reminder
Management

View reminder schedules and
actions

Must
Have

Weekly Reports

Preview/generated weekly
summaries

Must
Have

Pattern Detection

Sugar, sodium, late-night, lowprotein patterns

Should
Have

Privacy Requests

Export/delete requests

Must
Have

Admin Settings

Roles, providers, thresholds

Should
Have

reviews
/admin/reminders
/admin/weeklyreports
/admin/behaviorpatterns
/admin/privacyrequests
/admin/settings

5.3 Future User Dashboard Pages
Route

Page

Description

MVP

/user/dashboard

User Dashboard

Personal summary

Later

/user/timeline

Timeline

Food/product/habit history

Later

/user/reminders

Reminders

Manage habits

Later

/user/weekly-story

Weekly Story

Weekly report archive

Later

/user/privacy

Privacy Center

Export/delete/control data

Should Have

/user/settings

Settings

Goal/timezone/language

Later

7

6. Telegram Menu Structure
Telegram bot should support both natural chat and command menu.

6.1 Bot Commands
/start
/help
/log_food
/check_product
/set_reminder
/my_week
/my_goal
/privacy

6.2 Persistent Menu Buttons
Button

Action

Log Food

User can type/speak/send photo

Check Product

Product name, voice, barcode/photo later

Set Reminder

Habit reminder setup

My Week

Weekly summary

My Goal

View/change health goal

Privacy

Data/privacy options

7. Onboarding Flow
7.1 New User Onboarding
User starts bot
→ Bot welcomes user
→ Bot asks primary goal
→ User selects goal
→ Bot asks language preference

8

→ Bot confirms timezone
→ Bot gives first action options

7.2 Onboarding Step 1: Welcome
Bot:
Hi, I’m NowWise.
I help you make better food, grocery, restaurant, and habit decisions.
You can speak, type, or send photos.
Buttons:

Start

7.3 Onboarding Step 2: Goal
Bot:
What is your main goal right now?
Buttons:

Better food habits
Digestion
Sugar control
Weight control
Energy
User can also type custom goal.

7.4 Onboarding Step 3: Language
Bot:
Which language should I use?
Buttons:

9

English
Hinglish
Hindi
Telugu

7.5 Onboarding Step 4: Timezone
System auto-detects from default or asks once:
I’ll use Asia/Kolkata for your reminders and food timeline. Is that correct?
Buttons:

Yes
Change

7.6 Onboarding Step 5: First Action
Bot:
Done. What do you want to do first?
Buttons:

🍽 Log food
🛒 Check product
⏰ Set reminder
📊 See example weekly report

8. Core User Journey 1 — Voice Food Logging
Goal
User wants to log food quickly.

10

Entry Points
• Sends voice note directly
• Taps “Log Food”
• Uses /log_food

Main Flow
User sends voice note
→ Telegram webhook receives voice
→ System creates voice_event
→ Audio worker downloads audio
→ Audio converted using FFmpeg
→ ASR transcribes audio
→ Transcript cleaner cleans output
→ Intent classifier detects food_log
→ Entity extractor extracts foods
→ Event engine captures timestamp
→ Meal type is inferred
→ Food log is created
→ Behavior engine checks patterns
→ Bot replies

Example
User voice:
I ate rice, dal, curd, and one sweet.
Bot:
Logged as lunch at 1:18 PM.
You had rice, dal, curd, and one sweet.
Since this is your fourth sweet this week, avoid dessert tonight and add protein at dinner.
Buttons:

Correct
Add more
View today

11

Correction Path
User taps:

Correct
Bot:
What should I correct?
Buttons:

Wrong meal type
Wrong food
Wrong time
Delete this log
If user taps “Wrong meal type”:
Bot:
What should this be?
Buttons:

Breakfast
Lunch
Snack
Dinner
After correction:
Updated. I’ll remember this pattern.

Empty State
If this is the user’s first food log:
Bot adds:

12

This is your first food log. I’ll start building your daily food timeline from now.

Error State
If ASR fails:
I couldn’t clearly understand the voice note. Please type it or send again.
Buttons:

Type instead
Send again

9. Core User Journey 2 — Product Lookup at Store
Goal
User wants to know if they should buy/eat a packaged product.

Entry Points
• User types product name
• User sends voice
• User taps “Check Product”
• User sends product photo

Main Flow
User sends product name/voice/photo
→ Input router detects product lookup
→ Product matcher searches Product Graph
→ Fuzzy matching handles typos
→ Confidence score generated
→ User history checked
→ Product decision generated
→ Bot replies

13

Example
User:
Tony Garden Sunflower Seeds
Bot:
I found Tony Garden Sunflower Seeds.
Decision: Okay occasionally.
If this is salted, keep it to a small handful. Unsalted is better today because you already had
salty snacks twice this week.
Buttons:

Salted
Unsalted
Wrong product
Show alternative

Low Confidence Path
If system finds multiple products:
Bot:
I found a few possible matches. Which one is it?
Buttons:

Sunflower Seeds
Pumpkin Seeds
Mixed Seeds
None of these

Wrong Product Path
User taps:

14

Wrong product
Bot:
Please type the product name or send a clearer photo.
System routes original match to admin review.

Empty State
If product is not in database:
Bot:
I don’t have this product verified yet. I’ll still give a general suggestion and send it for review.
Then:
Based on the name, this looks like a seeds/snack product. If it is salted or flavored, keep
portion small. If plain/unsalted, it is usually a better option.

10. Core User Journey 3 — Habit Reminder
Creation
Goal
User wants to schedule a daily health habit reminder.

Entry Points
• Voice: “Remind me daily…”
• Text: “Remind me every day at 9:30 PM…”
• Taps “Set Reminder”
• Uses /set_reminder

15

Main Flow
User sends reminder request
→ Intent classifier detects reminder_creation
→ Habit parser extracts habit
→ Time parser extracts schedule
→ Reminder record created
→ Confirmation sent
→ Reminder scheduler sends future reminders
→ User taps Taken/Later/Skip
→ Habit check-in stored
→ Weekly report includes adherence

Example
User:
Remind me every night at 9:30 to take Isabgol.
Bot:
Done. I’ll remind you every night at 9:30 PM to take Isabgol with enough water.
At 9:30 PM:
Time for Isabgol. Please take it with enough water.
Buttons:

Taken
Later
Skip

Later Flow
User taps:

Later

16

Bot:
When should I remind you again?
Buttons:

15 min
30 min
1 hour
Tomorrow

Skip Flow
User taps:

Skip
Bot:
Skipped for today. I’ll remind you again tomorrow.

Already Completed Logic
If user says:
I took Isabgol
before scheduled reminder:
System marks habit completed.
At reminder time, bot should not send duplicate reminder.

17

11. Core User Journey 4 — Restaurant Menu
Decision
Goal
User wants to know what to order.

Entry Points
• Sends menu photo
• Sends restaurant menu link
• Says “Should I order biryani or grilled chicken?”
• Taps “Restaurant Help”

Main Flow
User sends menu/query
→ System detects restaurant intent
→ If photo/link, extract menu items
→ Food categories identified
→ Today’s timeline checked
→ User goal checked
→ Recommendations generated
→ Bot replies

Example
User:
Should I order biryani or grilled chicken?
Bot:
Today, grilled chicken is the better choice.
If you choose biryani, avoid sweet drinks and keep dinner lighter.
Buttons:

18

Log grilled chicken
Log biryani
Show lighter options

Menu Photo Flow
User sends menu photo.
Bot:
I’m reading the menu. I’ll suggest the best options.
Then:
Best option: grilled paneer/chicken bowl.
Okay option: dal/rice combo.
Avoid today: fried starters and sweet drinks.

12. Core User Journey 5 — Grocery Receipt Scan
Goal
User wants AI to analyze grocery purchase after billing.

Entry Points
• Sends receipt photo
• Taps “Analyze Receipt”

Main Flow
User sends receipt photo
→ System creates receipt event
→ Image stored temporarily
→ OCR extracts items
→ Items categorized
→ Grocery basket analyzed

19

→ Missing categories detected
→ Bot replies

Example Reply
Your basket has dairy, snacks, and bananas.
Missing this time: vegetables and protein.
Next time add spinach, carrots, eggs, paneer, or dal.
Buttons:

Add to grocery memory
Correct items
Create next shopping list

13. Core User Journey 6 — Weekly Story
Goal
User wants to understand weekly behavior.

Entry Points
• Automatic weekly report
• User taps “My Week”
• User uses /my_week

Main Flow
Weekly cron runs
→ System fetches food logs, products, reminders
→ Behavior patterns detected
→ Weekly report generated
→ Bot sends summary
→ User can ask follow-up

20

Example Weekly Report
Your NowWise Week
Food logs: 18
Product checks: 6
Isabgol: 4/7 days
Sweets: 5 days
Vegetables: 2 days
Best improvement: You logged dinner consistently.
Next week focus: Reduce sweets to 3 days and add vegetables at dinner.
Buttons:

Explain more
Set next week goal
View reminders

14. Core User Journey 7 — Privacy and Data
Control
Goal
User wants to understand or delete data.

Entry Points
• /privacy
• Telegram menu button
• User dashboard privacy page

Main Flow
Bot:
Your data controls:

21

Voice audio: deleted after transcription by default
Transcript: stored for your timeline
Photos: stored only if needed
Partner sharing: off by default
Buttons:

Export my data
Delete my data
Change settings
Privacy policy

Delete Data Flow
User taps:

Delete my data
Bot:
This will delete your NowWise food logs, reminders, transcripts, product checks, and reports.
Are you sure?
Buttons:

Yes, delete
Cancel
If confirmed:
Request received. Your data deletion will be processed.
Admin sees deletion request in:

/admin/privacy-requests

22

15. Admin Journey 1 — Review Low-Confidence
Voice Event
Goal
Admin fixes failed/uncertain voice transcription.

Entry Point
Admin logs in and goes to:

/admin/voice-events

Flow
Admin opens Voice Events
→ Filters status = needs_review
→ Opens event drawer
→ Sees audio metadata/transcript
→ Sees AI interpretation
→ Corrects transcript or intent
→ Saves correction
→ System updates event
→ Pattern/product/food logs updated

Voice Event Detail Drawer
Fields shown:
• User
• Telegram message ID
• Received time
• Provider used
• Raw transcript
• Cleaned transcript
• Confidence
• Intent detected
• Extracted entities

23

• Error/failure reason
• Correction form
Actions:

Approve
Edit transcript
Change intent
Send to product review
Mark failed

16. Admin Journey 2 — Product Compliance Review
Goal
Admin fixes product data and low-confidence matches.

Entry Point
/admin/product-reviews

Flow
Admin opens Product Reviews
→ Selects low-confidence product match
→ Compares user query and AI match
→ Searches product database
→ Selects correct product or creates new product
→ Adds nutrition/ingredients if available
→ Marks verified
→ Saves correction

Product Review Drawer
Shows:
• User query

24

• Input source: voice/text/photo
• AI matched product
• Confidence score
• Existing product records
• Suggested duplicates
• Product edit form
Actions:

Approve match
Change product
Create product
Merge duplicate
Reject

17. Admin Journey 3 — Weekly Report Preview
Goal
Admin verifies quality of weekly stories.

Entry Point
/admin/weekly-reports

Flow
Admin opens Weekly Reports
→ Filters pending reports
→ Opens report preview
→ Checks food/habit/pattern summary
→ Approves or edits
→ Report sent to user
Actions:

Approve
Edit

25

Regenerate
Do not send

18. Admin Dashboard Structure
18.1 Dashboard Metrics
Admin dashboard should show:
Metric

Purpose

Active users

Product usage

Logs today

Engagement

Voice notes today

Voice adoption

Product lookups

Supermarket use case

Reminders sent

Habit system

Reminder completion rate

Retention signal

Low-confidence events

Admin workload

Failed transcriptions

Voice quality

Weekly reports sent

Retention

Raw audio deletion success

Privacy compliance

18.2 Global Filters
Admin pages should support:
• Date range
• User
• Source: voice/text/photo/receipt
• Event type
• Status
• Confidence score
• Provider
• Goal
• Language

26

19. Empty States
19.1 Telegram Empty States
No Food Logs Yet
Bot:
You haven’t logged food yet. Send a voice note like: “I ate dosa and chutney.”
Buttons:

Log food
Set goal

No Reminders Yet
Bot:
You don’t have reminders yet. You can say: “Remind me daily at 9:30 PM to take Isabgol.”
Buttons:

Create reminder

No Weekly Report Yet
Bot:
I need at least a few logs before creating your weekly story. Try logging meals or products for
3–5 days.

19.2 Admin Empty States
No Low-Confidence Reviews
Message:
No pending reviews. AI outputs are currently above review threshold.

27

No Products
Message:
Product database is empty. Add your first product or import a CSV.

No Voice Events
Message:
No voice events yet. Voice notes will appear here after Telegram users start speaking to
NowWise.

20. Loading States
Telegram
For quick tasks:
One moment, checking this.
For voice:
Got your voice note. I’m understanding it now.
For photo:
Photo saved. I’ll analyze it in the background.
For menu:
I’m reading the menu and finding better options.

Admin Dashboard
Use table skeletons for:
• Users
• Events
• Product logs

28

• Voice events
Use drawer loading state for:
• Detail views
• AI output
• Transcript review

21. Error States
21.1 Telegram Voice Error
Bot:
I couldn’t clearly understand the voice note. Please type it or send again.
Buttons:

Type instead
Send again

21.2 Product Not Found
Bot:
I don’t have this product verified yet. I’ll give a general suggestion and send it for review.
Buttons:

Send photo
Type details
Cancel

21.3 Reminder Time Missing
User:
Remind me to take Isabgol.

29

Bot:
What time should I remind you?
Buttons:

Morning
Afternoon
Evening
Night
Choose time

21.4 Telegram Delivery Failed
System should retry.
Admin should see failure in:

/admin/events
/admin/reminders

21.5 Admin Unauthorized
Redirect:

/admin/login
Message:
You do not have permission to access this page.

30

22. Modal / Drawer / Overlay Interactions
22.1 Admin Drawers
Use right-side drawers for:
• User quick view
• Event detail
• Voice event review
• Product review
• Reminder detail
• Weekly report preview
Reason:
Admins should not lose table context.

22.2 Admin Modals
Use modals for:
• Confirm delete
• Merge products
• Create product
• Change admin role
• Export user data
• Approve privacy deletion

22.3 Telegram Confirmation Buttons
Use inline buttons for:
• Taken / Later / Skip
• Correct / Add more / Delete
• Salted / Unsalted / Wrong product
• Yes / No / Change
• Export / Delete / Cancel

31

23. Redirect Logic
23.1 Public Web
Action

Redirect

Visit /

Show landing page

Click Telegram CTA

Open Telegram bot link

Visit /privacy

Show privacy page

Visit /terms

Show terms page

23.2 Admin
Action

Redirect

Admin not logged in visits /admin/dashboard

/admin/login

Successful login

/admin/dashboard

Logout

/admin/login

Unauthorized role

/admin/login with error

Click user row

/admin/users/:id or drawer

Click product row

/admin/products/:id

Approve review

Stay in queue, load next review

Delete product

Back to /admin/products

Finish weekly report review

Stay on /admin/weekly-reports

23.3 Telegram
Action

Bot Response

/start new user

Onboarding

/start existing user

Main menu

/my_week with data

Weekly summary

/my_week no data

Empty weekly state

32

Action

Bot Response

/privacy

Privacy controls

Unknown message

Intent classifier tries; fallback help if unsure

Failed voice

Ask to type/send again

Reminder created

Confirmation

Reminder action taken

Thank and log

24. Logged-Out vs Logged-In Experience
24.1 Normal User
There is no traditional logged-out state inside Telegram.
States:
State

Description

New Telegram user

Onboarding required

Onboarded user

Can use all MVP bot features

Deleted user

Bot treats as new only after data deletion complete

Blocked bot

Cannot receive reminders

24.2 Admin
State

Experience

Logged out

/admin/login only

Logged in reviewer

Review queues only

Logged in product admin

Product database and reviews

Logged in super admin

Full access

Unauthorized

Redirect to login/error

33

25. Edge Cases
25.1 User Sends Multiple Messages Quickly
Example:
User sends:
1. Voice meal
2. Product name
3. Reminder request
System should process each as separate event.
If ambiguity exists, bot asks one clarification at a time.

25.2 User Sends Photo with No Caption
System asks:
Is this a meal, product, receipt, or menu?
Buttons:

Meal
Product
Receipt
Menu

25.3 User Sends Reminder Without Time
Bot asks:
What time should I remind you?
Do not guess.

34

25.4 User Travels Timezone
If user’s Telegram/location/timezone changes or reminders appear off:
Bot:
Are you currently in a different timezone?
Buttons:

Keep Asia/Kolkata
Update timezone

25.5 User Says “I Ate This Yesterday”
System should not blindly use current timestamp.
Bot should detect past reference and ask:
Should I log this for yesterday?
Buttons:

Yes
No, log now

25.6 User Asks Medical Question
Example:
Will I get diabetes?
Bot should not diagnose.
Reply:
I can help you track patterns like frequent sweets, but I can’t diagnose or predict disease. If
you’re concerned, speak with a qualified doctor. I can help you reduce sweets gradually.

35

26. Final MVP App Flow
MVP User Path
Telegram bot link
→ /start
→ Goal onboarding
→ Language/timezone confirmation
→ User sends voice/text/product/reminder
→ NowWise processes input
→ Bot replies
→ User corrects if needed
→ Events saved to timeline
→ Reminders create habit loop
→ Weekly report creates retention loop

MVP Admin Path
/admin/login
→ /admin/dashboard
→ Review voice/product/food failures
→ Correct product database
→ Monitor reminders and reports
→ Handle privacy requests

27. Build Order
Build Flow First
1. Telegram /start
2. Onboarding
3. Text food logging
4. Voice food logging
5. Product lookup
6. Reminder creation
7. Taken/Later/Skip buttons
8. Weekly report
9. Admin dashboard
10. Review queues

36

11. Privacy controls

28. Final App Flow Decision
NowWise should not feel like an app where users navigate many screens.
NowWise should feel like:
“I speak or type. It understands and helps.”
The web dashboard exists for admin quality control, not as the main consumer interface.
Therefore, the correct flow is:

Telegram = user product
Admin dashboard = operations product
Future user dashboard = secondary support product
The product wins if the user can use NowWise daily without opening a traditional app.

37

