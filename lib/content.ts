export interface Step {
  id: number;
  title: string;
  icon: string;
  content: string;
  keyPoints?: string[];
  warning?: string;
  tip?: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Welcome & Money Handling",
    icon: "🎫",
    content: `Welcome to the Rainbow Ski Area Ticket Office! You are often the very first person a guest interacts with on the mountain — a friendly, efficient window sets the tone for their whole day.

This induction covers the four key areas of the Ticket Office: money handling, day passes and memberships, daily operations, and the gift shop and general duties.

**The Safe**
Only the Ticket Office Supervisor, Ticket Office 2IC, Mountain Manager, and Customer Services Team Leader have access to the safe key. The safe is locked at all times. All money going in or out must be double-checked and signed off.

**Floats**
Each ticket window float is $250.00, made up of:
• $20 × 5 = $100
• $10 × 5 = $50
• $5 × 10 = $50
• $2 × 20 = $40
• $1 × 10 = $10

Floats must be double-checked every morning and signed in/out by the Ticket Office Supervisor or 2IC.

**Cash Management**
• If a mistake or refund occurs, print a receipt copy and put it in the till
• When cashing up, bundle notes in groups of 10, same denomination, facing the same way
• Running low on change? Ask the Supervisor or 2IC to exchange from the safe — both of you double-check amounts

**Accepted Payment Methods**
Rainbow ACCEPTS: Cash, EFTPOS (any NZ bank), Bankcard, Mastercard, Visa, Rainbow Work Party Credits, Rainbow Promo Vouchers
Rainbow does NOT accept: Diners or American Express, Cheques of any kind (except school groups)

**EFTPOS Transactions**
For a standard card transaction:
1. Select Credit Cards / EFTPOS as payment method
2. For automatic transaction press ☑
3. Swipe or insert card on the EFTPOS pinpad
4. Guest selects account and enters PIN (or signs)
5. If signature: give the customer the Merchant copy to sign — always check the signature
6. Retain the card until the transaction is accepted
7. Merchant copy goes in cash drawer; customer keeps their copy

**If EFTPOS Goes Offline (EOV Mode)**
• Transactions process automatically when the system comes back online
• No refunds or cash out in offline mode
• Check signatures carefully — the bank will NOT honour fraudulent EOV transactions
• Maximum 99 EOV transactions per terminal; only one per card`,
    keyPoints: [
      "Only Supervisor, 2IC, Mountain Manager, and CS Team Leader can access the safe",
      "Each window float is exactly $250 — count and sign off every morning",
      "No Diners, Amex, or personal cheques (school group cheques are ok)",
      "Always check the signature on signed card transactions",
      "In offline (EOV) mode: no refunds, no cash out — check signatures carefully",
    ],
    warning: "In EOV offline mode, the bank will not cover fraudulent transactions — it is your responsibility to check signatures thoroughly. When in doubt, do not process the transaction.",
    tip: "If you're ever unsure about a payment or refund, call the Ticket Office Supervisor. It's always better to ask than to fix a mistake later.",
  },
  {
    id: 2,
    title: "Day Passes, Memberships & Discounts",
    icon: "🎟️",
    content: `**Day Pass — Important Language**
Always call them "Day Passes" — never "lift passes" or "lift tickets." A Day Pass entitles the holder to use all Rainbow facilities: lifts, slopes, toilets, day lodge, café, and car park. It can be revoked for bad behaviour or entering closed areas.

**Age & Pass Definitions**
• Adult — 18 and over
• Senior — 65 to 74
• Super Senior / Golden Age — 75 and over
• Youth — 7 to 17 years
• Child — Under 7 years
• Student — must have current NZ/AUS tertiary ID with the current year. No ISIC cards accepted.

**Learner Passes & Upgrades**
Learner Day Pass holders may only use beginner and intermediate slopes. To upgrade: clip off the Learner pass, ring the upgrade on the till, and print a full Day Pass of the appropriate type.

**Multi-Day Passes**
Rainbow sells 3-day and 5-day multi-passes. The guest keeps a "master copy." Each day they visit: mark a strike on their master copy and print a day pass with today's date. When all days are used, discard the master pass.

**Membership Tiers**
• Gold — ski any day Rainbow is open for free. No ticket queuing. Reciprocal discounts at other NZ ski fields
• Silver — free skiing on weekdays (including school holidays and public holidays)
• Bronze — $10 off weekend passes, $20 off weekday passes ($5/$10 for Youths). Must come to the ticket window each day
• Platinum — life membership, ski any day for life

**Complimentary Vouchers (Comps)**
Always check the serial number, signature, and validity date before redeeming. Staff may only issue comps if specifically authorised by the Mountain Manager or a Committee Member. Process each voucher separately in SalesPoint: add product → Modify → Discounts → select correct type → enter voucher number. Hand all vouchers in with your daily cash-up.

**Work Party Credits**
Volunteers earn credits for summer work days. Credits have a unique number. Check the Work Party Credits file, confirm they haven't already used it, process the sale, then mark it as used with date and your initials. Credits expire at the end of the season issued — no carry-over.

**Other Discounts**
• Industry (50%) — staff of other ski areas or ski/snowboard retailers, with current ID and a letter of introduction dated within two weeks, or verified against the retailer's staff list
• Reciprocal — full season pass holders from Mt Lyford, Ohau, Treble Cone, Cardrona, or club members from Hanmer Springs, Craigieburn, Broken River, Cheeseman, or Mt Olympus. Adult $20 off, Student $15 off, Youth $10 off
• Chill13 Pass — full day pass at no cost (Chill13 only — no other Chill passes)
• Disabled skiers — caretaker accompanying a disabled skier receives a complimentary pass (two for the price of one)
• Freeform discounts — Supervisor or 2IC only`,
    keyPoints: [
      "Always say 'Day Pass' — never 'lift pass' or 'lift ticket'",
      "Student ID must be current NZ/AUS tertiary ID with current year — no ISIC cards",
      "Learner passes: clip and ring an upgrade if guest wants to access full slopes",
      "Comps: always check serial number, signature, and validity date before redeeming",
      "Work Party Credits expire end of season — no carry-over to next year",
    ],
    warning: "Discounts are strictly monitored. Always use the pre-set discount categories in SalesPoint and enter reference details (voucher number, customer name). Freeform discounts require Supervisor or 2IC authorisation only — you cannot apply them yourself.",
    tip: "When in doubt about a discount entitlement, ask the Supervisor. Ticket Office staff are held accountable for any non-complying discounts.",
  },
  {
    id: 3,
    title: "Daily Operations & Refunds",
    icon: "🗂️",
    content: `**Opening — Supervisor Tasks**
• Collect till floats from the safe for terminals in use today
• Check pass rolls in the printers — ensure plenty are loaded and installed correctly
• Brief window staff on the day's events, conditions, and any special notes
• Update the blackboard outside with date, weather, and what's on

**Opening — Staff Tasks**
1. Count your till float — must equal exactly $250.00
2. Fill out the Daily Cash Up form: date, name, window number — sign that you checked your float
3. Top up ticket wickets
4. Tidy inside and outside area, check for rubbish
5. Fill up retail shelves

**Half-Day Changeover**
From 12:30 PM, sell half-day products (passes and rental). Change tickets from blue to red.

**Closing — Staff Tasks**
1. Run a settlement of the EFTPOS terminal — cannot be run before 3:00 PM
2. Close sessions on your till (MENU / BALANCE and MENU / CLOSE SESSION)
3. Count out float, put in the correct float bag for your window, have it checked, then put in the safe
4. Get daily takings printout from Supervisor (or tally all sessions yourself)
5. Complete the Daily Cash Up form and get another operator to double-check
6. If not balancing: recheck your float. Still off? Advise the Supervisor
7. Leave your workspace tidy, empty bins, fill out your timesheet

**Closing — Supervisor Tasks**
• Collate all daily cash-ups and EFTPOS printouts from each window
• Put banking in safe and lock
• Check time sheets
• Check heaters, turn off lights, secure the building

**School Groups & Group Bookings**
• Check with the teacher how many of each package type they need
• Confirm: paying on the day or on account?
• On account: press ACCOUNTS (top left) and select the school from the list — get the teacher to sign the receipt and print a duplicate for them
• Schools must pay as a group in one amount — group discounts don't apply if paid separately
• Accepted for schools: cash, cheque, credit card, EFTPOS

**Refunds**
• Refunds are processed using the same payment method as the original sale
• For card refunds: the customer must have the same card with them
• The Merchant card and PIN (kept in safe) are needed for card refunds — get from Supervisor
• There is NO refund on rental equipment — rental refund decisions are at the discretion of the Customer Services Team Leader
• Guest injuries: no refunds without approval from the Mountain Manager, Ticket Office Supervisor, or 2IC

**Rental Cards at the Ticket Window**
When a guest buys rental equipment at your window:
1. Fill out the rental card with what they have paid
2. Ask for ID (driver's licence, credit card, or car rego) and record the number on the card
3. Maximum four customers per rental card
4. After payment, staple the receipt duplicate to the back of the rental card
5. Ask the customer to keep their original receipt and take the stapled card to Rentals
6. Advise beginner/intermediate snowboarders to wear a wrist guard`,
    keyPoints: [
      "Float must be exactly $250 — count and sign off before your first sale",
      "Half-day switchover (blue to red tickets) happens at 12:30 PM",
      "EFTPOS settlement cannot be run before 3:00 PM",
      "Till not balancing? Recheck your float first, then tell your Supervisor",
      "No rental refunds — refer all rental refund requests to the Customer Services Team Leader",
    ],
    warning: "Never process a refund for a guest injury without approval from the Mountain Manager, Ticket Office Supervisor, or 2IC. This policy applies even if the guest is very upset — always escalate to your Supervisor.",
    tip: "If your till isn't balancing at close, a float counting error at the start of the day is the most common cause. Double-check your morning count first.",
  },
  {
    id: 4,
    title: "Gift Shop, Stock & General Duties",
    icon: "🛍️",
    content: `**Clothing Hire**
The Ticket Office hires out clothing to guests. Record all hires correctly and make sure guests understand the return process and any charges that apply for damage or late return.

**Toboggan Hire**
Toboggans are available for hire at the ticket window. Record the hire and advise guests of the return time and the designated toboggan area. Only hire to guests who will use toboggans in the correct area.

**Retail**
The Gift Shop sells Rainbow merchandise and ski-related items. Keep shelves tidy and stocked. All retail sales must go through the till — no exceptions.

**Stock Management**
• Stationery — keep an eye on rental cards, daily cash-up forms, receipt rolls, and office supplies. Tell the Supervisor when stocks are getting low
• Passes — check pass rolls in the printers at opening. Replace a roll promptly if it runs low mid-day and advise the Supervisor
• General — keep the ticket office and gift shop tidy and well-presented at all times

**Lost and Found**
• Items handed in: place in the lost property area
• Valuable items (phone, wallet, keys): give directly to the Ticket Office Supervisor immediately — do not leave them unattended
• Someone claiming a lost item: they must describe it before you show it to them
• Record all lost property handed in

**Voice Messages**
Check and action voice messages at the start of each day. Pass enquiries you cannot answer to the Ticket Office Supervisor. Common messages: group bookings, membership questions, lost property calls.

**General Guest Advice**
When guests ask what to bring or wear, advise:
• Sunglasses and sunscreen
• Warm clothing in layers
• Hats and gloves
• Waterproof trousers — essential!

**Maintenance**
Log all non-routine maintenance and repair requirements on the RSCI SharePoint portal (skirainbow.sharepoint.com). Check open tasks first — if it's not already listed, create a new task with item, category, description, priority, and due date.

**End of Season Close Down**
• Complete a full stocktake of equipment, consumables, stationery, and retail stock
• List what is needed for the start of next season
• Clean all areas thoroughly and remove all rubbish
• Hand in all lost property to the Customer Services Manager
• Report any maintenance or repairs needed for next season
• Turn off all heaters and lock the building securely`,
    keyPoints: [
      "All retail sales go through the till — no exceptions",
      "Valuable lost property goes straight to the Ticket Office Supervisor, not left unattended",
      "Check pass rolls and stationery stocks at the start of every shift",
      "Check and action voice messages first thing every day",
      "Log all maintenance on the RSCI SharePoint portal",
    ],
    tip: "A tidy, well-stocked ticket office and gift shop makes a great first impression. Take 10 minutes at the start and end of each shift to make sure everything is in order.",
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "A guest wants to pay with an American Express card. What do you do?",
    options: [
      "Accept it — any credit card is fine at Rainbow",
      "Politely decline — Rainbow does not accept Amex or Diners cards",
      "Accept it only if the amount is over $50",
      "Ask the Supervisor to approve it first",
    ],
    correct: 1,
    explanation: "Rainbow does not accept American Express or Diners cards. Accepted cards are EFTPOS (any NZ bank), Bankcard, Mastercard, and Visa.",
  },
  {
    id: 2,
    question: "A guest presents an ISIC (International Student Identity Card) and asks for a student discount. What do you do?",
    options: [
      "Accept it — it's a recognised international student ID",
      "Accept it only if it has a photo on it",
      "Decline — Rainbow does not accept ISIC cards for student discount",
      "Give a 25% discount instead of the full student rate",
    ],
    correct: 2,
    explanation: "Rainbow does not accept ISIC cards. Student discount requires a current NZ or Australian tertiary institution ID showing the current year.",
  },
  {
    id: 3,
    question: "The EFTPOS system goes offline. A guest wants a cash refund for an item they paid for by EFTPOS. What do you do?",
    options: [
      "Process it in cash — simpler and the guest shouldn't have to wait",
      "No refunds or cash out are permitted while in offline (EOV) mode",
      "Process it offline and sort it out when the system comes back",
      "Ask the customer to come back the next day",
    ],
    correct: 1,
    explanation: "In EOV offline mode, no refunds and no cash out are permitted under any circumstances. The guest must return when the EFTPOS system is back online.",
  },
  {
    id: 4,
    question: "What is the correct procedure when a guest is injured on the mountain and asks for a Day Pass refund?",
    options: [
      "Issue a full refund — it's the compassionate thing to do",
      "Offer a partial refund based on how long they skied",
      "No refund without approval from the Mountain Manager, Ticket Office Supervisor, or 2IC",
      "Give them a credit voucher for another day",
    ],
    correct: 2,
    explanation: "In the event of a guest injury, no refunds are given without explicit approval from the Mountain Manager, Ticket Office Supervisor, or Ticket Office 2IC. Always escalate — do not make exceptions.",
  },
  {
    id: 5,
    question: "At what time can you run the EFTPOS terminal settlement as part of closing the Ticket Office?",
    options: [
      "Any time after midday",
      "Only after the very last transaction of the day",
      "Not before 3:00 PM",
      "At exactly 5:00 PM when the mountain closes",
    ],
    correct: 2,
    explanation: "The EFTPOS settlement cannot be run before 3:00 PM. This is a required part of the closing procedure for all ticket office staff.",
  },
];
