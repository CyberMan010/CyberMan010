// Storytelling Frameworks Engine
const StoryFrameworks = [
  {
    id: 'abt',
    name: 'ABT (And, But, Therefore)',
    tagline: 'The universal cure for boring "And then..." rambling',
    bestFor: 'Daily Conversations, Status Updates & Pitches',
    difficulty: 'Beginner',
    icon: '⚡',
    whyItWorks: 'Ramblers string facts together with "And then... and then...". The ABT formula forces narrative tension with BUT and causal consequence with THEREFORE.',
    beats: [
      {
        id: 'and',
        title: 'Agreement (AND)',
        prompt: 'Establish the baseline status quo or agreement. What was happening or what is commonly true?',
        placeholder: 'We were shipping software on time AND customers were happy with our features...',
        guide: 'State 1 or 2 facts that set the stage and create connection.'
      },
      {
        id: 'but',
        title: 'Conflict (BUT)',
        prompt: 'Introduce the obstacle, friction, or unexpected contradiction.',
        placeholder: 'BUT then user retention dropped by 35% in a single month and no one knew why...',
        guide: 'This is the hook that awakens your listener’s brain.'
      },
      {
        id: 'therefore',
        title: 'Resolution (THEREFORE)',
        prompt: 'What action was taken or what conclusion was reached as a consequence?',
        placeholder: 'THEREFORE, we halted new feature work for 2 weeks to interview churning users, uncovering a hidden onboarding bug.',
        guide: 'Deliver the decisive action and its takeaway.'
      }
    ],
    example: {
      context: 'Executive update',
      sample: 'Our mobile app downloads hit 50,000 last quarter AND our reviews were stellar, BUT we noticed our conversion on paid tiers remained completely flat. THEREFORE, we simplified the 5-step upgrade checkout down to a single 1-click prompt, resulting in an immediate 40% jump in paid subscribers.'
    }
  },
  {
    id: 'scqa',
    name: 'SCQA (Situation - Complication - Question - Answer)',
    tagline: 'McKinsey’s gold-standard executive communication framework',
    bestFor: 'Business Presentations, Proposals & Leadership Talks',
    difficulty: 'Intermediate',
    icon: '🏢',
    whyItWorks: 'Executives lose patience with long chronologies. SCQA anchors the situation in 15 seconds, frames the crisis, states the core dilemma, and lands the strategic solution.',
    beats: [
      {
        id: 'situation',
        title: 'Situation (S)',
        prompt: 'State the undisputed context your audience already knows and agrees with.',
        placeholder: 'For the last 3 years, our company has been the leading supplier in regional logistics...',
        guide: 'Keep it objective and undeniable. No controversy yet.'
      },
      {
        id: 'complication',
        title: 'Complication (C)',
        prompt: 'What changed? What threat, friction, or sudden opportunity entered the scene?',
        placeholder: 'However, three new venture-backed competitors entered the market with 20% lower pricing...',
        guide: 'Highlight the stakes: what happens if nothing is done?'
      },
      {
        id: 'question',
        title: 'Question (Q)',
        prompt: 'The pivotal question the room is silently asking or must answer.',
        placeholder: 'How can we maintain our premium profit margins without losing enterprise market share?',
        guide: 'Formulate one sharp, high-leverage question.'
      },
      {
        id: 'answer',
        title: 'Answer (A)',
        prompt: 'Your solution, recommendation, or call to action.',
        placeholder: 'By bundling guaranteed 2-hour SLAs and proprietary inventory telemetry that competitors cannot match.',
        guide: 'Direct, confident, and rooted in value.'
      }
    ],
    example: {
      context: 'Strategy Pitch',
      sample: 'Situation: Our customer support team handles 10,000 tickets monthly with a 94% satisfaction rating. Complication: As our user base doubled this summer, ticket resolution times slowed from 4 hours to 36 hours. Question: How do we return to same-day resolution without hiring 20 expensive new agents? Answer: We deploy an intelligent triage assistant for the top 5 repetitive queries, freeing our specialists for high-touch customer emergencies.'
    }
  },
  {
    id: 'star-l',
    name: 'STAR-L (Situation - Task - Action - Result - Learning)',
    tagline: 'The battle-tested framework for high-stakes interviews & project reviews',
    bestFor: 'Job Interviews, Performance Reviews & Board Updates',
    difficulty: 'Intermediate',
    icon: '⭐',
    whyItWorks: 'Prevents the common mistake of saying "We did this..." by isolating your personal actions and proving real-world business impact with an overarching lesson.',
    beats: [
      {
        id: 'situation',
        title: 'Situation',
        prompt: 'Where and when did this happen? What were the conditions?',
        placeholder: 'At my previous role, our primary payment vendor had an unexpected global outage during our biggest sale of the year...',
        guide: 'Brief context: 1-2 sentences maximum.'
      },
      {
        id: 'task',
        title: 'Task',
        prompt: 'What was your specific responsibility or goal in that scenario?',
        placeholder: 'I was tasked with leading the emergency triage to restore payment flow without double-charging customers...',
        guide: 'Clarify what YOU had to achieve.'
      },
      {
        id: 'action',
        title: 'Action',
        prompt: 'What specific steps did you take? What decisions did you make under pressure?',
        placeholder: 'I immediately mobilized a 3-person engineering pod, spun up an alternative Stripe fallback gateway, and wrote the failover script within 90 minutes...',
        guide: 'Focus on verbs, decisions, and leadership.'
      },
      {
        id: 'result',
        title: 'Result',
        prompt: 'What was the tangible outcome? Include numbers or metrics if possible.',
        placeholder: 'We recaptured $180,000 in transactions that would have bounced, ending the day at 112% of our sales target...',
        guide: 'Quantifiable proof of success.'
      },
      {
        id: 'learning',
        title: 'Learning (L)',
        prompt: 'What is the universal takeaway or wisdom that shapes how you lead today?',
        placeholder: 'This taught me that resilience is not about hoping things won’t break, but engineering automated fallbacks before you ever need them.',
        guide: 'The insight that elevates your story from bragging to wisdom.'
      }
    ],
    example: {
      context: 'Behavioral Interview',
      sample: 'Situation: During a major company rebrand, our marketing and product teams had conflicting visions for our messaging. Task: As lead product marketer, I had to align both departments to hit our immovable launch date. Action: Rather than debating opinions, I ran 10 rapid customer interviews and brought direct video clips of user reactions to a joint workshop. Result: Both teams aligned unanimously within 2 hours, and the launch delivered a 45% increase in signups. Learning: Customer voices always dissolve internal politics faster than arguments.'
    }
  },
  {
    id: '3-beat',
    name: 'The 3-Beat Golden Spine (Hook - Struggle - Landing)',
    tagline: 'The fastest structure for social banter and casual speaking',
    bestFor: 'Dinner Parties, Networking, Coffee Chats & Speeches',
    difficulty: 'Beginner',
    icon: '🎯',
    whyItWorks: 'Cuts out unnecessary backstory. You drop the listener directly into the action, show the human friction, and land cleanly on a punchline or insight.',
    beats: [
      {
        id: 'hook',
        title: '1. The Hook (Drop into action)',
        prompt: 'Start with a vivid moment, surprising fact, or contradictory statement. Never start with "So yesterday I was thinking..."',
        placeholder: 'The most terrifying moment of my career was standing in front of 400 people with a completely blank presentation slide...',
        guide: 'Grab their curiosity within the first 7 seconds.'
      },
      {
        id: 'struggle',
        title: '2. The Struggle (The tension)',
        prompt: 'What went wrong? What was at stake? How did you feel in that pressure cooker?',
        placeholder: 'The projector died, my notes vanished, and the CEO of our biggest client was sitting in the front row staring at me with his arms crossed...',
        guide: 'Add 1 sensory detail: a sound, physical reaction, or thought.'
      },
      {
        id: 'landing',
        title: '3. The Landing (The payoff / punchline)',
        prompt: 'How did it resolve, and what did you learn or laugh about?',
        placeholder: 'I closed my laptop, walked to the edge of the stage, and spoke from the heart for 15 minutes. It turned out to be our highest-rated pitch of the conference.',
        guide: 'End crisply. Do NOT trail off with "So yeah... that was that".'
      }
    ],
    example: {
      context: 'Casual dinner conversation',
      sample: 'Hook: I learned the secret to effective negotiation from a 6-year-old on an airplane. Struggle: We were flying back from Chicago, and this little girl next to me wanted my window seat. Instead of begging or crying, she offered me half of a slightly melted chocolate bar and asked: "Do you prefer looking at clouds, or chocolate?" Landing: I took the chocolate immediately. She taught me that true persuasion isn’t about pushing—it’s about discovering what the other person values even more.'
    }
  },
  {
    id: 'bab',
    name: 'BAB (Before - After - Bridge)',
    tagline: 'The ultimate persuasion formula for pitches and selling ideas',
    bestFor: 'Sales Pitches, Product Demos & Team Motivation',
    difficulty: 'Beginner',
    icon: '🌉',
    whyItWorks: 'Contrasts existing pain with a desirable future, making your idea the obvious bridge between the two.',
    beats: [
      {
        id: 'before',
        title: 'Before (The Current Frustration)',
        prompt: 'Describe the frustrating reality your audience is living through today.',
        placeholder: 'Every Monday morning, our team wastes 45 minutes manually compiling spreadsheets from 6 different tools...',
        guide: 'Make them nod their head in recognition of the pain.'
      },
      {
        id: 'after',
        title: 'After (The Desired Future)',
        prompt: 'Paint a vivid picture of what life looks like once the problem is solved.',
        placeholder: 'Imagine starting Monday at 9:00 AM with a single unified dashboard ready before your first sip of coffee...',
        guide: 'Appeal to ease, relief, and victory.'
      },
      {
        id: 'bridge',
        title: 'Bridge (The Solution)',
        prompt: 'Show how your proposal or idea bridges the gap from Before to After.',
        placeholder: 'That is exactly why we are automating this workflow with our new integration pipeline today.',
        guide: 'Clear, confident path forward.'
      }
    ],
    example: {
      context: 'Product pitch',
      sample: 'Before: Most professionals dread public speaking because they freeze or ramble when the spotlight hits them. After: Picture standing up in any meeting, speaking with calm precision, and seeing your colleagues nodding in rapt attention. Bridge: StoryCraft trains that exact reflex in 10 minutes a day through daily structured speaking drills.'
    }
  },
  {
    id: 'sparkline',
    name: 'The Sparkline (What Is vs. What Could Be)',
    tagline: 'Nancy Duarte’s keynote structure used by Steve Jobs & MLK',
    bestFor: 'Keynote Speeches, Town Halls & Inspirational Talks',
    difficulty: 'Advanced',
    icon: '✨',
    whyItWorks: 'Constantly oscillates between reality (What Is) and possibility (What Could Be), building momentum until reaching a grand "New Bliss".',
    beats: [
      {
        id: 'what-is-1',
        title: '1. What Is (Current Reality)',
        prompt: 'Acknowledge the current reality, friction, and limitations of today.',
        placeholder: 'Today, our industry accepts that building complex applications takes months and costs hundreds of thousands of dollars...',
        guide: 'Ground the audience in the known world.'
      },
      {
        id: 'what-could-be-1',
        title: '2. What Could Be (First Glimpse of Tomorrow)',
        prompt: 'Introduce the thrilling possibility. What if those limits vanished?',
        placeholder: 'What if a solo creator could prototype and deploy a production system in a single afternoon?',
        guide: 'Elevate their imagination.'
      },
      {
        id: 'the-hurdle',
        title: '3. The Hurdle (Why it hasn’t happened yet)',
        prompt: 'Address the real obstacle or fear holding everyone back.',
        placeholder: 'The barrier was never ambition—it was fragmented tooling and legacy friction...',
        guide: 'Validate their skepticism.'
      },
      {
        id: 'new-bliss',
        title: '4. The New Bliss (The Grand Vision & Call)',
        prompt: 'Describe the transformed world and invite them to build it together.',
        placeholder: 'By breaking these silos, we unlock creativity for millions. Let us step into that future today.',
        guide: 'Inspire bold action.'
      }
    ],
    example: {
      context: 'All-Hands Company Speech',
      sample: 'What is: Right now, our teams spend 40% of their day sitting in status meetings explaining what they did yesterday. What could be: Imagine a workplace where your calendar is open for deep, unbroken creative work, and information flows automatically. The hurdle: We were afraid that fewer meetings meant losing alignment. New bliss: Over the last month of asynchronous updates, our shipping velocity doubled and employee stress plunged. Let’s make this our new standard of excellence.'
    }
  },
  {
    id: 'pixar',
    name: 'The Pixar Story Spine',
    tagline: 'The 6-beat narrative engine behind every Pixar blockbuster',
    bestFor: 'Personal Memoirs, Brand Stories & Motivational Talks',
    difficulty: 'Advanced',
    icon: '🎬',
    whyItWorks: 'Creates deep emotional engagement through clear causality. Every beat is logically connected to the one before it.',
    beats: [
      { id: 'beat1', title: '1. Once upon a time...', prompt: 'Introduce the hero and their baseline normal world.', placeholder: 'Once upon a time, there was an introverted engineer who dreaded speaking in meetings...', guide: 'Establish the relatable hero.' },
      { id: 'beat2', title: '2. Every day...', prompt: 'What was their daily routine or status quo?', placeholder: 'Every day, she had great ideas but stayed silent while others took the credit...', guide: 'Deepen the longing for change.' },
      { id: 'beat3', title: '3. Until one day...', prompt: 'The inciting incident that forced change.', placeholder: 'Until one day, her manager was unexpectedly absent and she had to pitch the biggest client alone...', guide: 'The point of no return.' },
      { id: 'beat4', title: '4. Because of that...', prompt: 'The chain reaction of challenges and trials.', placeholder: 'Because of that, she forced herself to use a simple 3-part framework on a napkin...', guide: 'Action and struggle.' },
      { id: 'beat5', title: '5. Until finally...', prompt: 'The climax and moment of breakthrough.', placeholder: 'Until finally, the client signed a multi-million contract specifically praising her clarity...', guide: 'The triumph.' },
      { id: 'beat6', title: '6. And ever since then...', prompt: 'The lasting transformation.', placeholder: 'And ever since then, she knew that great speaking is not an innate gift, but a learned structure anyone can master.', guide: 'The moral of the journey.' }
    ],
    example: {
      context: 'Leadership origin',
      sample: 'Once upon a time, our startup was run out of a tiny basement with two broken laptops. Every day, we coded 14 hours a day hoping someone would find our tool. Until one day, our first paying customer sent an email saying our app saved their non-profit 30 hours of work every week. Because of that, we stopped obsessing over code syntax and started obsessing over human relief. Until finally, over 10,000 teams joined our mission. And ever since then, our core metric has remained human impact rather than lines of code.'
    }
  },
  {
    id: 'prep',
    name: 'PREP (Point - Reason - Example - Point)',
    tagline: 'The 60-second impromptu weapon for when you get put on the spot',
    bestFor: 'Spontaneous Meetings, Q&A, Rapid Feedback & Opinions',
    difficulty: 'Beginner',
    icon: '🎯',
    whyItWorks: 'Eliminates filler words ("Ummm...", "Like...") because your mind knows exactly where you are heading: State the point, back it with reason, illustrate with a micro-story, and restate the point.',
    beats: [
      {
        id: 'point1',
        title: 'Point (Top-Line Assertion)',
        prompt: 'State your main point directly in one punchy sentence. No hedging.',
        placeholder: 'I believe we should postpone the product release by one week.',
        guide: 'Direct and decisive.'
      },
      {
        id: 'reason',
        title: 'Reason (The "Why")',
        prompt: 'Why do you believe this? What is the core logical justification?',
        placeholder: 'Because our stress-testing yesterday showed a memory leak on older mobile devices.',
        guide: 'Clear, concise rationale.'
      },
      {
        id: 'example',
        title: 'Example (Micro-Story)',
        prompt: 'A quick 20-second concrete illustration or previous experience.',
        placeholder: 'Last year on project Alpha, we rushed a build with a minor bug, and cleaning up the bad reviews took 6 months.',
        guide: 'Concrete proof from lived reality.'
      },
      {
        id: 'point2',
        title: 'Point (Landing / Re-statement)',
        prompt: 'Restate your point with forward momentum and conviction.',
        placeholder: 'Therefore, taking 7 days now protects our brand reputation for the entire year.',
        guide: 'Bookend your thought cleanly.'
      }
    ],
    example: {
      context: 'Meeting Discussion',
      sample: 'Point: We should double down on in-person team offsites this quarter. Reason: Complex strategic decisions stall over Slack but resolve in minutes when people share a whiteboard. Example: When our engineering and product leads met in Denver last month, they resolved a 4-month architecture deadlock in one afternoon. Point: That is why investing in face-to-face time directly accelerates our execution speed.'
    }
  }
];

window.StoryFrameworks = StoryFrameworks;
