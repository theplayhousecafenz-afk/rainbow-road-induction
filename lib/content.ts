export interface Step {
  id: number;
  title: string;
  icon: string;
  content: string;
  keyPoints?: string[];
  warning?: string;
  tip?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Welcome & Your Role Today',
    icon: '🏔️',
    content: `Welcome to Rainbow Ski Area! As a volunteer helping with road and car park duties, you play a vital role in keeping our guests and staff safe on one of New Zealand's alpine access roads.

**What This Induction Covers**
This induction gives you an overview of the road and car park environment, the key safety rules, and what to expect on a typical day.

**The Access Road**
The Rainbow access road is a public road when the gate is unlocked. Once open, Rainbow Ski Area is responsible for taking all reasonable steps to ensure user safety on the road. Guests must follow all signage and staff directions.

**Your Responsibilities as a Volunteer**
• Always follow instructions from the Mountain Manager or their delegate
• Wear your high-visibility vest at all times when working outdoors
• Never direct traffic or make road decisions without supervisor approval
• If in doubt about anything — ask your supervisor first

**Chain of Command**
The Mountain Manager has overall responsibility for road and car park operations. If the Mountain Manager is not on site, their designated relief manager takes over. Always know who is in charge for your shift before you start work.

**Before You Start**
Check in with your supervisor, confirm where you are stationed, and make sure you have your radio (if assigned one) and know the radio check-in procedure.`,
    keyPoints: [
      'You are in an alpine environment — conditions can change rapidly',
      'Always follow signage and supervisor instructions',
      'Wear your hi-vis vest whenever you are working outdoors',
      'Know who the duty manager is before your shift starts',
    ],
    tip: 'If you ever feel unsafe or unsure about a situation, stop and ask your supervisor. There is never pressure to do something that feels unsafe.',
  },
  {
    id: 2,
    title: 'Car Park Management',
    icon: '🚗',
    content: `Managing the car parks efficiently ensures maximum capacity and smooth traffic flow. Good car park management directly impacts the guest experience.

**Car Park Order — Fill in This Sequence**
1. Main car park first
2. Robert Lodge car park second
3. Top car park third
4. Directors car park fourth
5. Doppelmayr hut area
6. Chains bay 3 (overflow)

**Key Rules**
• Leave room for the Ambulance in front of the Patrol First Aid Room and Toilets at all times
• Staff park in the middle car park — not in guest areas
• On busy days, park vehicles bumper-to-bumper with a 6.5m gap between each double row to maximise space
• Close Directors car park until it is genuinely needed
• Assign someone to manage Robert Lodge car park on busy days

**Directing Traffic**
• Use clear, confident hand signals
• Make eye contact with the driver before signalling
• Signal one car at a time — never wave multiple vehicles through at once
• If a vehicle is oversized or a campervan, check with your supervisor before placing it

**When It Gets Busy**
When you are expecting a full day, maintain control of every car park including Robert Lodge and Directors. Start filling in order and do not skip ahead — a half-full top car park with an empty main area causes confusion and congestion.`,
    keyPoints: [
      'Fill main car park first, then Robert Lodge, Top, Directors',
      'Always keep Ambulance access clear in front of Patrol First Aid Room',
      'Staff park in the middle car park only',
      'Close Directors car park until needed on busy days',
    ],
    warning: 'Never block the ambulance access area in front of the Patrol First Aid Room. This must remain clear at all times — no exceptions.',
  },
  {
    id: 3,
    title: 'Road Safety & Chains Policy',
    icon: '⛓️',
    content: `The access road is an alpine environment. Ice, snow, and rapidly changing conditions make road safety critical for everyone.

**Chains Policy — No Exceptions**
Rainbow's chains policy is absolute: No chains, No access, No exceptions. All vehicles must carry chains when the chains call is in effect.

• If a vehicle arrives without chains, direct them to the shuttle bus service from the bottom car park
• Private staff and sub-contractor vehicles must also obey the daily chains call
• The chains call for the day must be made by 6:00am so it can be included in morning reports

**Types of Chain Call**
• **Carry Chains** — chains must be in the vehicle but may not need fitting yet
• **Fit Chains** — chains must be fitted before proceeding
• **4WD Carry Chains** — 4WD vehicles carry chains, 2WD must fit chains
• **Road Closed** — no public vehicles proceed; staff only with supervisor authorisation

**What You Tell Guests**
If a vehicle arrives without chains when chains are required: politely explain the policy, offer directions to the shuttle bus pickup point, and do not let them proceed. You are keeping them safe, not being difficult.

**Icy Conditions & Traffic Management**
In very difficult conditions, traffic may be released in intervals:
• 200m spacing between vehicles on the road at all times
• Vehicles must stay in low gear on descent
• Drivers should pump brakes gently — never lock wheels
• Slow down before corners and steep sections, not during them

**Grit & Signage**
If grit has been applied to icy sections, do not let vehicles park on grit areas. Alert your supervisor if a gritty section has become icy again.`,
    keyPoints: [
      'No chains, No access — no exceptions, including staff vehicles',
      'Chain call must be made by 6:00am each day',
      'Vehicles without chains are directed to the shuttle bus',
      'In icy conditions: 200m spacing, low gear, pump brakes gently',
    ],
    warning: 'Never wave a vehicle through without chains when the chains call requires them. This is a non-negotiable safety rule.',
    tip: 'When in doubt about the chain call status, radio your supervisor or check the morning briefing notes rather than making a call yourself.',
  },
  {
    id: 4,
    title: 'Health & Safety on the Road',
    icon: '🦺',
    content: `Working on an alpine access road presents unique hazards. Understanding these risks and how to manage them keeps you and our guests safe.

**Personal Safety Rules**
• Always wear your high-visibility vest when working in or near traffic
• Never stand in the path of moving vehicles
• Stay aware of your surroundings — vehicles on snow and ice take longer to stop
• Do not use your personal phone while directing traffic
• Work in pairs where possible, especially in poor visibility

**Avalanche Awareness**
Rainbow's access road passes through known avalanche paths. As a car park or road volunteer, you are not expected to assess avalanche risk — that is for trained patrol staff. However you must:
• Know the location of your designated safe shelter area before your shift starts
• Follow all evacuation instructions from patrol staff immediately
• Never enter a closed zone, even briefly

**Weather & Visibility**
Alpine weather changes fast. If conditions deteriorate significantly during your shift:
• Alert your supervisor immediately
• Do not make independent decisions about road closures
• Move guests to shelter if directed to do so

**Radio Codes You Should Know**
• 10-4 — OK, message understood
• 10-9 — Please repeat
• 10-20 — What is your location?
• 10-40 — Accident
• 10-50 — Vehicle off road
• Code 3 — Life threatening emergency

**If There Is an Accident**
Do not attempt vehicle recovery yourself. Your role is to:
1. Keep other traffic clear of the scene
2. Radio your supervisor immediately using 10-40 (accident) or Code 3 if life-threatening
3. Keep bystanders back
4. Follow all instructions from patrol or management

Emergency rescue packs are located in the Patrol Room at the base area.`,
    keyPoints: [
      'Hi-vis vest on at all times when working outdoors',
      'Know your safe shelter location before your shift starts',
      'Radio 10-40 for accident, Code 3 for life-threatening emergency',
      'Never attempt vehicle recovery — that is for trained staff only',
    ],
    warning: 'If you hear an avalanche warning or see snow movement above the road, immediately move yourself and nearby guests to your designated shelter and radio patrol.',
  },
  {
    id: 5,
    title: 'End of Day & Key Reminders',
    icon: '✅',
    content: `As your shift wraps up, there are some important procedures to follow to ensure the road and car park are left safely.

**End of Day Car Park**
• Ensure all guests have left the car park before leaving your post
• Report any vehicles remaining after close to your supervisor — do not leave them unattended without notifying management
• Remove any cones or signage placed during your shift, unless advised otherwise by your supervisor

**Gate Closure**
The access road gate is closed every night by the patrol vehicle or staff bus. The gate must have a sign indicating no access when closed. As a volunteer, do not attempt to close or lock the gate unless specifically instructed and trained to do so.

**Reporting Issues**
If you noticed anything during your shift that needs follow-up, report it before you leave:
• Damaged signage or cones
• Icy patches that developed during the day
• Vehicles that behaved dangerously
• Any near-miss or safety concern

**Debrief**
At the end of your shift, check in with your supervisor. Let them know:
• How the car parks filled (which areas were used)
• Any issues with guest compliance (chains, speeding, etc.)
• Anything that seemed unsafe or that surprised you

**Thank You**
Volunteers are an essential part of Rainbow Ski Area. Your work in the car park and on the road directly contributes to a safer, more enjoyable day for every guest. Thank you for being here.

**Key Contacts**
• Supervisor: check in at the start of your shift
• Patrol Room: located at the base area
• Radio: Channel 1 is the primary operating channel`,
    keyPoints: [
      'Confirm all guests have left before leaving your post',
      'Report remaining vehicles and safety concerns to your supervisor',
      'Debrief with your supervisor at end of shift',
      'Do not lock the gate unless specifically trained and instructed to',
    ],
    tip: 'Keep a mental note (or jot it down) of anything unusual during your shift — even small observations can be useful in a debrief.',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the correct order to fill the car parks on a busy day?',
    options: [
      'Directors first, then Robert Lodge, then Main',
      'Main car park first, Robert Lodge second, Top third, Directors fourth',
      'Top car park first to keep the main area free for latecomers',
      'Any order is fine as long as all parks are eventually used',
    ],
    correct: 1,
    explanation: 'Always fill the Main car park first, then Robert Lodge, Top, and Directors. Directors should be closed until genuinely needed.',
  },
  {
    id: 2,
    question: "A vehicle arrives without chains when the chain call is 'Fit Chains'. What do you do?",
    options: [
      'Let them through if they have 4WD',
      'Ask your supervisor if they seem like experienced drivers',
      'Direct them to the shuttle bus — No chains, No access, No exceptions',
      'Allow them to park in the bottom car park and walk up',
    ],
    correct: 2,
    explanation: "Rainbow's chains policy is absolute: No chains, No access, No exceptions. Direct them to the shuttle bus pickup point.",
  },
  {
    id: 3,
    question: 'What radio code do you use to report an accident on the road?',
    options: [
      '10-9',
      '10-50',
      '10-40',
      'Code 3',
    ],
    correct: 2,
    explanation: '10-40 means Accident. Code 3 is for life-threatening emergencies only. 10-50 means vehicle off road.',
  },
  {
    id: 4,
    question: 'Where must ambulance access be kept clear at all times?',
    options: [
      'The main entrance to the car park',
      'In front of the Patrol First Aid Room and Toilets',
      'The Directors car park',
      'The top of the main car park',
    ],
    correct: 1,
    explanation: 'The ambulance access in front of the Patrol First Aid Room and Toilets must remain clear at all times — no vehicles parked there.',
  },
  {
    id: 5,
    question: 'If you see snow movement or hear an avalanche warning above the road, what should you do first?',
    options: [
      'Stay at your post and continue directing traffic',
      'Take a photo and report it after your shift',
      'Move yourself and nearby guests to your designated shelter and radio patrol immediately',
      'Wait for instructions from patrol before moving anyone',
    ],
    correct: 2,
    explanation: 'Your immediate priority is moving yourself and guests to the designated safe shelter and radioing patrol. Do not wait — act immediately.',
  },
];
