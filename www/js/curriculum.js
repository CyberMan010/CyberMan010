// 30-Day Daily Storytelling Curriculum Engine
const StoryCurriculum = [
  // WEEK 1: CORE NARRATIVE ARCHITECTURE & CURING THE RAMBLING HABIT
  {
    day: 1,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'The 3-Beat Golden Spine: Hook, Struggle, Landing',
    subtitle: 'Never begin with "Let me tell you about..."—start in the action.',
    objective: 'Transform rambling chronological anecdotes into a tight 3-part narrative arc.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'The biggest mistake people make when speaking is the "chronological ramp-up": spending 2 minutes giving backstory before anything interesting happens. Listeners check out within 8 seconds.',
      rule: 'Every compelling spoken story consists of only 3 components:\n1. The Hook (Drops listener directly into friction/contradiction)\n2. The Struggle (The stakes and emotional tension)\n3. The Landing (The clean payoff, punchline, or insight without rambling off).',
      mindset: 'A story is not a recitation of calendar events; it is a journey from imbalance to resolution.'
    },
    anatomy: {
      bad: {
        title: 'The Rambling Way (What 90% do):',
        text: 'So yeah, last year around October, I think it was a Tuesday or Wednesday, my manager Dave was out because his kid had the flu, and I was sitting at my desk checking Jira tickets. Then marketing came by, or maybe it was sales, and said we had a meeting with the client, but the projector was broken in conference room 3B... so anyway, long story short, we had to fix it.'
      },
      good: {
        title: 'The Structured 3-Beat Spine:',
        text: 'Hook: I once had to pitch a $500,000 enterprise deal with zero slides after our conference projector literally sparked and caught fire 2 minutes before the client walked in.\nStruggle: I had 120 seconds to panic or adapt. Instead of apologizing, I grabbed a black marker, drew a single 3-box diagram on the white wall, and pitched looking directly into the CEO\'s eyes.\nLanding: They signed the contract that afternoon because they said our clarity without slides proved we actually understood their business inside out.'
      }
    },
    exercise: {
      prompt: 'Think of a high-pressure moment at work or in life. Write your 3-Beat Spine below:',
      scaffold: [
        { label: 'Beat 1: The Hook (Start in the moment of friction)', placeholder: 'Drop us into the room or tension. Avoid dates or unnecessary names...' },
        { label: 'Beat 2: The Struggle (What went wrong? What was at stake?)', placeholder: 'Describe the obstacle and your honest emotional reaction...' },
        { label: 'Beat 3: The Landing (The resolution & one punchy takeaway)', placeholder: 'End with the payoff and the core lesson learned...' }
      ]
    },
    voicePrompt: 'Hit record and tell your 3-beat story in 60 to 90 seconds. Speak clearly, pause after your hook, and land firmly without saying "So yeah..."!'
  },

  {
    day: 2,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'The ABT Rule: And, But, Therefore',
    subtitle: 'Randy Olson\'s narrative engine to eliminate boring "and then... and then..."',
    objective: 'Replace flat listing of facts with dramatic tension and logical consequence.',
    frameworkId: 'abt',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'When people describe projects or past events, they often commit the "And Then" sin: "We did X, and then we did Y, and then Z happened..." This puts listeners to sleep because there is no friction.',
      rule: 'Use ABT (And, But, Therefore):\n- AND = Agreement & Context (Sets common ground)\n- BUT = Contradiction / Conflict (The obstacle that breaks expectations)\n- THEREFORE = Consequence / Action (What you did and learned).',
      mindset: 'Without "BUT", there is no story. Without "THEREFORE", there is no resolution.'
    },
    anatomy: {
      bad: {
        title: 'The "And Then" Monologue:',
        text: 'We worked on the website redesign for three months, and then we launched it in June, and then some users liked it, and then our boss asked for some tweaks, and then we added a feedback form, and then we held another team meeting.'
      },
      good: {
        title: 'The ABT Framework in Action:',
        text: 'We worked on our redesign for 3 months AND launched it with rave internal reviews, BUT on day one our checkout conversions dropped by 28% because users couldn\'t find the payment button. THEREFORE, we stripped out the fancy animations within 24 hours, restoring conversions and teaching us that user simplicity always trumps design vanity.'
      }
    },
    exercise: {
      prompt: 'Pick an ongoing challenge or past project. Structure it into the ABT model:',
      scaffold: [
        { label: '1. Agreement (AND): What was normal or going well?', placeholder: 'We had X and everything seemed Y...' },
        { label: '2. Conflict (BUT): What contradiction or crisis broke through?', placeholder: 'BUT suddenly [the obstacle / crisis / unexpected turn]...' },
        { label: '3. Consequence (THEREFORE): What decisive action resolved it?', placeholder: 'THEREFORE, we decided to [action] which resulted in [outcome/learning]...' }
      ]
    },
    voicePrompt: 'Speak your ABT story out loud in 60 seconds. Notice how the word "BUT" naturally raises your vocal energy and commands attention.'
  },

  {
    day: 3,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'The 5-Second Transformation Rule',
    subtitle: 'Matthew Dicks\' secret: Every story is only about the 5 seconds you changed.',
    objective: 'Identify the exact micro-moment of emotional or intellectual transformation.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'A great story isn\'t about climbing a mountain or running a marathon. It\'s about the 5 seconds on that mountain when you realized you were never going to quit.',
      rule: 'Find your "5-Second Transformation":\nBefore that 5 seconds, you believed X or were person A.\nAfter that 5 seconds, you believed Y or became person B.\nThe entire story exists only to explain why that 5 seconds happened.',
      mindset: 'If nobody changed their mind, heart, or direction, you don\'t have a story—you have an anecdote.'
    },
    anatomy: {
      bad: {
        title: 'Lacking Transformation:',
        text: 'I ran a 10K race last year. It was raining. I was tired at mile 4, but I kept running, and then I crossed the finish line and got a medal, and then I ate a banana. It was a good race.'
      },
      good: {
        title: 'Centered on the 5-Second Shift:',
        text: 'At mile 5 of the cold October race, my knee twinged and I stopped at the side of the road, ready to call an Uber and quit. Then a 70-year-old grandmother running with an artificial knee passed me, looked at me, smiled, and said: "Nobody finishes alone, son—catch my stride." In that exact 5 seconds, my shame vanished into humility. I matched her pace, crossed the line beside her, and realized endurance is never about solo pride—it\'s about community.'
      }
    },
    exercise: {
      prompt: 'Think of an opinion or habit you changed. What was the 5-second pivot?',
      scaffold: [
        { label: 'Who you were before the 5 seconds (The old mindset):', placeholder: 'I used to believe that asking for help was a sign of weakness...' },
        { label: 'The 5-Second Pivot (The exact moment everything shifted):', placeholder: 'The moment my manager said "If you drown in silence, the whole team sinks with you"...' },
        { label: 'Who you became after (The new reality & action):', placeholder: 'Ever since that afternoon, I make vulnerability the cornerstone of how I run projects...' }
      ]
    },
    voicePrompt: 'Record your 5-second transformation story in 90 seconds. Make sure the listener feels the before vs. after shift in your tone.'
  },

  {
    day: 4,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'The Relatability Anchor: Winning Common Ground in 15s',
    subtitle: 'How to make listeners feel "That happened to me too!" right away.',
    objective: 'Use universal human vulnerabilities to hook any audience instantly.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'If you start a presentation or talk by sounding like an infallible genius, your audience silently roots against you or tunes out. People don\'t connect with perfection; they connect with shared struggle.',
      rule: 'Start with a "Relatability Anchor":\n- An everyday friction (imposter syndrome, dreading an alarm clock, awkward silence in an elevator)\n- A shared desire (wanting to do meaningful work, wanting to be heard)\n- When the audience nods in the first 15 seconds, they will stay with you for the next 10 minutes.',
      mindset: 'Connection precedes persuasion.'
    },
    anatomy: {
      bad: {
        title: 'Aloof & Unrelatable:',
        text: 'As an expert in algorithmic optimization with 12 years of enterprise credentials, I will now demonstrate why our architectural paradigms outperform all alternatives.'
      },
      good: {
        title: 'Grounding with Relatability:',
        text: 'Have you ever sat in a project meeting, listened to someone describe a terrible strategy for 20 minutes, and felt that knot in your stomach because nobody wanted to be the first to speak up? Two years ago, I swallowed that knot and stayed quiet—and it cost our team three months of wasted weekends. Today, I want to show you the 3-minute framework that guarantees that never happens again.'
      }
    },
    exercise: {
      prompt: 'Draft an opening hook that anchors your topic in a shared, relatable human feeling:',
      scaffold: [
        { label: 'The Shared Feeling / Situation ("Have you ever... / We\'ve all felt...")', placeholder: 'We have all had that moment when an email draft sat in our outbox for 3 days because...' },
        { label: 'Your Specific Micro-Story that illustrates it:', placeholder: 'For me, it happened when I had to tell our biggest partner...' },
        { label: 'The Bridge to your core message or presentation:', placeholder: 'Which brings us to the core challenge we are here to solve today...' }
      ]
    },
    voicePrompt: 'Practice opening your talk with this relatability anchor. Deliver the first 2 sentences with warmth and eye-level sincerity.'
  },

  {
    day: 5,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'The 50% Trim Rule: Cutting Fluff & Rabbit Holes',
    subtitle: 'Eliminate dates, irrelevant names, and detours that derail your point.',
    objective: 'Ruthlessly edit out the 50% of details that bore the listener.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'When telling a story in person, people often pause to remember trivial facts: "Wait, was it 2019 or 2020? No, wait, Dave had his blue Honda then, so it was 2019..." Your listener doesn\'t care about the blue Honda! They care about what happened.',
      rule: 'The 50% Trim Rule:\n1. Cut all specific dates unless the date IS the story (replace "October 14th, 2021" with "A few years ago").\n2. Consolidate characters (if Dave and Sarah both said something, attribute it to "my team").\n3. Avoid backstory detours: only include details that directly propel the climax.',
      mindset: 'Simplicity is not the lack of depth; it is the presence of focus.'
    },
    anatomy: {
      bad: {
        title: 'Clogged with Trivial Details:',
        text: 'So my brother-in-law Mike—well, he\'s actually my wife\'s half-brother, they share a mother—was visiting from Seattle, or maybe it was Portland, because he travels a lot for his consulting gig. Anyway, he has this golden retriever named Barnaby, who is 6 years old, and we went to this diner on 4th Street that usually closes at 8, but on Thursdays it closes at 9...'
      },
      good: {
        title: 'Trimmed to Pure Narrative Muscle:',
        text: 'A while ago, I was having dinner with my brother-in-law when his dog unexpectedly pulled a tablecloth off an outdoor cafe table, shattering every plate on the patio. In that instant of public mortification, the restaurant manager did something I\'ll never forget: instead of yelling, he smiled and brought out a fresh bowl of water for the dog.'
      }
    },
    exercise: {
      prompt: 'Take a story you usually tell that tends to wander. Apply the 50% Trim Rule:',
      scaffold: [
        { label: 'Original wandering premise / setup:', placeholder: 'What are the details you normally over-explain?' },
        { label: 'The Ruthless Edit (Keep ONLY the conflict, reaction, and outcome):', placeholder: 'Strip away extra names, dates, side-trips...' },
        { label: 'The 30-Second Muscle Version:', placeholder: 'Write the distilled punchy version...' }
      ]
    },
    voicePrompt: 'Record your trimmed story with a strict 45-second timer limit. Notice how much more confident and commanding you sound!'
  },

  {
    day: 6,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'Sensory Zooming: 1 Vivid Anchor Beats 10 Adjectives',
    subtitle: 'Make listeners visualize the scene using one specific sensory anchor.',
    objective: 'Replace abstract descriptions ("It was very stressful") with sensory anchors.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Telling someone "I was extremely anxious during the board presentation" makes them understand logically, but not feel it emotionally. Emotional memory is triggered by sensory cues.',
      rule: 'Sensory Zooming:\nPick ONE sensory detail—a specific sound, physical texture, or visual snapshot:\n- "The sound of ice cubes clinking in a silent boardroom"\n- "The buzzing neon sign in the hospital hallway"\n- "My palms sweating against the cold aluminum steering wheel"\nOne sensory anchor transports the listener into the room with you.',
      mindset: 'Show, don\'t tell. Ground the abstract in the physical.'
    },
    anatomy: {
      bad: {
        title: 'Abstract & Emotionless:',
        text: 'It was a really terrible and chaotic meeting. Everyone was angry, the client was upset, and our team felt totally helpless and stressed out.'
      },
      good: {
        title: 'Sensory Zoom-in:',
        text: 'When our demo crashed, the room went so quiet you could hear the buzz of the fluorescent lights above us. The client vice president slowly set his ceramic coffee mug on the wooden table with a sharp clink, leaned forward, and said nothing for ten agonizing seconds.'
      }
    },
    exercise: {
      prompt: 'Select a memorable scene from your past. Identify and zoom into one sensory anchor:',
      scaffold: [
        { label: 'The Abstract Emotion (What were you feeling?):', placeholder: 'e.g. Extreme relief, total panic, joyful surprise...' },
        { label: 'The Sensory Anchor (A specific sound, sight, or physical sensation):', placeholder: 'e.g. The cold metal railing, the smell of burnt coffee, the ticking wall clock...' },
        { label: 'Integrate into your scene (2-3 sentences):', placeholder: 'Write the moment incorporating that physical detail...' }
      ]
    },
    voicePrompt: 'Speak your sensory scene aloud. Lower your voice and slow down slightly as you describe the sensory anchor to pull your listener in.'
  },

  {
    day: 7,
    week: 1,
    weekTitle: 'Core Narrative Architecture',
    title: 'Week 1 Integration: Your 90-Second Signature Origin Story',
    subtitle: 'Synthesize the Hook, ABT, and Sensory Zoom into your go-to origin story.',
    objective: 'Craft and deliver your foundational 90-second story for interviews and introductions.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 1, anatomy: 3, guided: 3, voice: 3 },
    concept: {
      spark: 'You have completed Week 1! You now know how to hook listeners, inject tension with ABT, cut the fluff, and ground scenes with sensory anchors.',
      rule: 'Your Signature Origin Story answers: "Why do you do what you do?"\n- 0:00 - 0:15: Relatable Hook + Setting\n- 0:15 - 0:45: The ABT Struggle + 5-Second Transformation\n- 0:45 - 1:15: The Decisive Action & Sensory Anchor\n- 1:15 - 1:30: The Clean Landing & Mission Statement.',
      mindset: 'When you master your origin story, you never fear being asked "Tell me about yourself" again.'
    },
    anatomy: {
      bad: {
        title: 'Resume Regurgitation:',
        text: 'I graduated in 2017 with a degree in computer science, then I took an analyst role at Acme Corp, where I did SQL queries, and then in 2020 I transitioned to product management, and now I specialize in agile workflows.'
      },
      good: {
        title: 'The Signature Origin Story:',
        text: 'Six years ago, I watched my mother spend 4 hours every Sunday night crying at the kitchen table over complicated medical insurance billing paperwork. In that moment, watching her struggle against an incomprehensible system, I realized technology is useless unless it protects human peace of mind. I quit my comfortable corporate track to dedicate my career to designing intuitive healthcare tools. That is why I wake up every morning obsessed with removing friction for everyday users.'
      }
    },
    exercise: {
      prompt: 'Craft your 90-second Signature Origin Story using all Week 1 tools:',
      scaffold: [
        { label: 'The Inciting Moment (The scene that sparked your passion/vocation):', placeholder: 'Describe the specific moment you realized your path...' },
        { label: 'The ABT Struggle (The challenge you confronted):', placeholder: 'I wanted X and had Y, BUT obstacle Z forced me to realize...' },
        { label: 'The Landing & Mission (Why this defines who you are today):', placeholder: 'Ever since that day, my standard of success has been...' }
      ]
    },
    voicePrompt: 'Record your full 90-second Signature Story. Check your pacing against the 130 WPM target and save it to your Story Vault!'
  },

  // WEEK 2: BUSINESS & PRESENTATION FRAMEWORKS
  {
    day: 8,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'The SCQA Framework: McKinsey’s Strategic Standard',
    subtitle: 'Situation, Complication, Question, Answer: Command the boardroom.',
    objective: 'Structure any business proposal or project update to captivate senior stakeholders.',
    frameworkId: 'scqa',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Executives have zero patience for wading through 20 slides of background data to find out what you want. SCQA aligns the room in under 60 seconds.',
      rule: 'SCQA Architecture:\n- S (Situation): Undisputed baseline both you and your audience agree on.\n- C (Complication): The unexpected shift or threat that makes status quo unsustainable.\n- Q (Question): The exact question the audience is now desperate to answer.\n- A (Answer): Your strategic recommendation.',
      mindset: 'Do not start with your solution; frame the question first so they crave your answer.'
    },
    anatomy: {
      bad: {
        title: 'Unstructured Proposal:',
        text: 'Here is our new AI ticketing system. It has automated natural language models, multi-channel Slack support, sentiment scoring, and costs $30,000 annually. We think it will really improve our productivity.'
      },
      good: {
        title: 'Executive SCQA Structure:',
        text: 'Situation: Over the past 12 months, our engineering velocity reached an all-time high with 4 major feature releases.\nComplication: However, our tier-1 bug tickets surged by 85%, and our senior developers are now spending 18 hours a week answering customer support inquiries instead of building roadmap features.\nQuestion: How can we protect developer focus without ballooning customer support headcount?\nAnswer: We implement an automated triage layer that resolves 60% of repetitive bugs instantly, freeing 70 developer hours per sprint.'
      }
    },
    exercise: {
      prompt: 'Draft an SCQA pitch for an idea, project, or process improvement:',
      scaffold: [
        { label: 'Situation (Undisputed, agreed-upon context):', placeholder: 'For the past 6 months, our team has been...' },
        { label: 'Complication (The threat or friction that broke the calm):', placeholder: 'However, recently [friction occurred] which threatens [business metric]...' },
        { label: 'Question (The sharp dilemma the room must address):', placeholder: 'How do we [achieve goal] without [negative consequence]?' },
        { label: 'Answer (Your clear recommendation & next step):', placeholder: 'By implementing [solution], we unlock [tangible benefit]...' }
      ]
    },
    voicePrompt: 'Deliver this SCQA pitch out loud in 75 seconds. Project authority by pausing before you deliver the "Question".'
  },

  {
    day: 9,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'The STAR-L Formula: Acing High-Stakes Reviews',
    subtitle: 'Elevate the standard STAR method by adding the transformative "Learning".',
    objective: 'Tell captivating stories of past performance in interviews and quarterly reviews.',
    frameworkId: 'star-l',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Most interview answers stop at the "Result": "We launched it and made $50K." That proves you can execute, but the "Learning" proves you have executive wisdom and growth mindset.',
      rule: 'STAR-L:\n- Situation (15s): Where and when.\n- Task (15s): Your specific mission.\n- Action (45s): The distinct choices and decisions YOU made.\n- Result (15s): Measurable impact.\n- Learning (15s): The lasting principle that makes you a better leader today.',
      mindset: 'Results show what you did; learnings show who you have become.'
    },
    anatomy: {
      bad: {
        title: 'Vague & Self-Centered:',
        text: 'I worked on a team that had a lot of conflicts. We weren\'t getting along. I stepped up and talked to people, and then the team got better and we hit our deadline. I\'m a great team player.'
      },
      good: {
        title: 'Structured STAR-L Delivery:',
        text: 'Situation: Two weeks before our beta launch, our lead backend engineer and design lead stopped speaking after a fierce architectural disagreement.\nTask: As product owner, I had to resolve the impasse without missing our beta window.\nAction: Instead of taking sides, I booked a 2-hour room, prohibited code talk for the first 45 minutes, and asked both to map out the customer’s emotional journey on paper. Seeing the customer\'s perspective dissolved their personal ego.\nResult: We agreed on a hybrid architecture in 90 minutes and shipped the beta on schedule with zero bugs.\nLearning: When smart people clash, the fastest way to align them is not logic, but pointing both eyes toward customer pain.'
      }
    },
    exercise: {
      prompt: 'Structure a past high-stakes experience with STAR-L:',
      scaffold: [
        { label: 'Situation & Task (The challenge & your role):', placeholder: 'When X occurred, my objective was...' },
        { label: 'Action (Specific verbs: decisions, risks taken, steps executed):', placeholder: 'I initiated... organized... refactored...' },
        { label: 'Result (Quantified metrics or concrete proof):', placeholder: 'As a result, we achieved...' },
        { label: 'Learning (The leadership principle you carry forward):', placeholder: 'What this permanently taught me is...' }
      ]
    },
    voicePrompt: 'Record your STAR-L response with an interview mindset. Keep your delivery under 2 minutes.'
  },

  {
    day: 10,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'The Sparkline: What Is vs. What Could Be',
    subtitle: 'Nancy Duarte’s keynote structure behind Steve Jobs’ iconic presentations.',
    objective: 'Create dramatic contrast to inspire teams and captivate large presentation audiences.',
    frameworkId: 'sparkline',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'A flat presentation delivers information. A magnetic presentation creates contrast. Nancy Duarte analyzed Martin Luther King Jr., Steve Jobs, and Abraham Lincoln and found they all use the "Sparkline": oscillating between the status quo (What Is) and the vision (What Could Be).',
      rule: 'The Sparkline Rhythm:\n1. State What Is (The frustrating baseline everyone tolerates)\n2. Reveal What Could Be (The inspiring alternative)\n3. Heighten the Hurdle (Address doubts)\n4. Land on the "New Bliss" (The transformed world).',
      mindset: 'Audiences only move when the distance between "What Is" and "What Could Be" becomes intolerable.'
    },
    anatomy: {
      bad: {
        title: 'Flat Information Dump:',
        text: 'Our cloud migration roadmap has 4 phases. Phase 1 is infrastructure audit. Phase 2 is containerization. Phase 3 is data migration. It will take 6 months and cost $120,000.'
      },
      good: {
        title: 'Sparkline Keynote Architecture:',
        text: 'What Is: Today, every time our servers spike, our engineers spend their Friday nights staring at red alert dashboards in fear.\nWhat Could Be: Imagine leaving the office at 5:00 PM on a Friday knowing your infrastructure self-heals in milliseconds with zero human intervention.\nWhat Is: For 5 years, we told ourselves legacy systems were too complex to touch.\nWhat Could Be: Over the last 30 days, our prototype proved that modern auto-scaling cuts downtime by 99% while slashing hosting bills by a third.\nThe New Bliss: Let\'s stop babysitting servers and start building the future our customers deserve.'
      }
    },
    exercise: {
      prompt: 'Write a Sparkline contrast for a vision you want to communicate:',
      scaffold: [
        { label: 'What Is (The painful current reality):', placeholder: 'Today, the way we [process/work/live] is...' },
        { label: 'What Could Be (The thrilling alternative):', placeholder: 'Imagine a reality where [positive transformation]...' },
        { label: 'The New Bliss (The inspiring call to action):', placeholder: 'Together, we can step into this new standard by...' }
      ]
    },
    voicePrompt: 'Deliver this contrast with dynamic vocal range: use a somber, steady tone for "What Is", and elevate your energy and tempo for "What Could Be".'
  },

  {
    day: 11,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'The BAB Formula: Before, After, Bridge',
    subtitle: 'The quickest persuasion framework for pitches, proposals, and client calls.',
    objective: 'Sell any product, idea, or behavioral change in under 60 seconds.',
    frameworkId: 'bab',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'When you pitch features, people debate features. When you pitch transformation from Before to After, people buy the bridge.',
      rule: 'BAB Structure:\n- BEFORE: Describe the customer/colleague’s world with their current headache.\n- AFTER: Describe their world after the headache is gone.\n- BRIDGE: Present your idea as the vehicle that takes them there.',
      mindset: 'Do not sell the airplane; sell the vacation in Hawaii.'
    },
    anatomy: {
      bad: {
        title: 'Feature-Heavy Pitch:',
        text: 'Our new CRM has customizable pipeline stages, automated webhook notifications, API rate limiting of 500 requests per second, and SOC-2 compliance.'
      },
      good: {
        title: 'The BAB Persuasion Engine:',
        text: 'Before: Right now, your sales reps spend 2 hours every evening copying lead notes into disjointed spreadsheets, missing follow-ups, and losing deals to faster competitors.\nAfter: Picture your reps closing their laptops at 5:00 PM with every interaction automatically synced, and every warm lead queued for tomorrow morning.\nBridge: That is the peace of mind our automated pipeline delivers from day one.'
      }
    },
    exercise: {
      prompt: 'Pick a tool, habit, or idea you want someone to adopt. Apply Before-After-Bridge:',
      scaffold: [
        { label: 'Before (The acute frustration of today):', placeholder: 'Describe the daily friction they feel...' },
        { label: 'After (The effortless paradise of tomorrow):', placeholder: 'Describe what relief and victory look like...' },
        { label: 'Bridge (Your solution as the connecting bridge):', placeholder: 'Show how your recommendation creates that bridge...' }
      ]
    },
    voicePrompt: 'Speak this BAB pitch in 45 seconds. Keep your language visceral and focused on emotional relief.'
  },

  {
    day: 12,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'Data Storytelling: Humanizing the Numbers',
    subtitle: 'Never present raw metrics without a human protagonist behind them.',
    objective: 'Turn cold statistics and charts into memorable, emotionally persuasive stories.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'A slide with "42% churn rate" or "10,000 hours saved" enters the brain through the logical cortex and is forgotten within an hour. Data only persuades when it wears a human face.',
      rule: 'The "Hero Behind the Metric" Technique:\n1. State the Metric (e.g. 14% improvement)\n2. Zoom into ONE individual human who represents that number\n3. Show the contrast in their daily life\n4. Zoom back out to the collective impact.',
      mindset: 'Statistics inform; human stories inspire.'
    },
    anatomy: {
      bad: {
        title: 'Cold Data Barrage:',
        text: 'Slide 14 shows our Q3 customer satisfaction increased by 18.4%. NPS went from 42 to 58. Ticket resolution time dropped 22 minutes across all cohorts.'
      },
      good: {
        title: 'Data Brought to Life:',
        text: 'Last quarter, our metrics show we cut support ticket resolution time by 22 minutes. That sounds like a sterile spreadsheet number. But let me tell you about Sarah, a single mother running an online bakery in Denver. Two weeks ago at 9:00 PM, her payment terminal failed right before her biggest wedding cake delivery. In the past, she would have waited 40 minutes in a queue crying. Because of our 22-minute reduction, we got her terminal back online in 4 minutes. Sarah made the delivery. That 18% CSAT jump isn\'t a metric—it\'s thousands of Sarahs keeping their promises.'
      }
    },
    exercise: {
      prompt: 'Take a key metric or business number. Wrap it in a human protagonist story:',
      scaffold: [
        { label: 'The Number / Statistic:', placeholder: 'e.g. 20% faster onboarding, $10,000 saved, 500 new users...' },
        { label: 'The Single Human Protagonist (Name, role, context):', placeholder: 'Introduce one person who feels this difference...' },
        { label: 'The Concrete Before vs After for that person:', placeholder: 'What was their headache before vs their relief now?' }
      ]
    },
    voicePrompt: 'Record your data story in 90 seconds. Notice how speaking about "Sarah" makes your tone warm and authentic.'
  },

  {
    day: 13,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'The Visionary Arc: Villain, Weapon, Utopia',
    subtitle: 'Galvanize teams, investors, and clients around a bold crusade.',
    objective: 'Frame any project as a noble quest against a common enemy.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Every great movement has a villain. In storytelling, the villain doesn\'t have to be a person or competitor—it is often a destructive condition: Bureaucracy, Complexity, Waste, Loneliness, or Complacency.',
      rule: 'The 3-Part Visionary Arc:\n1. The Villain: Identify the invisible enemy stealing your team\'s time or joy.\n2. The Weapon: Your project, tool, or philosophy designed to defeat it.\n3. The Utopia: The world that emerges when that villain is defeated.',
      mindset: 'People don\'t rally around quarterly OKRs; they rally around defeating villains.'
    },
    anatomy: {
      bad: {
        title: 'Boring Project Charter:',
        text: 'We are launching the internal knowledge base project to improve documentation compliance across our 4 engineering departments.'
      },
      good: {
        title: 'The Visionary Crusade:',
        text: 'Villain: Our silent enemy is not our competitors—it is tribal knowledge silos that force our junior hires to spend 4 hours a day begging for permissions and searching broken wikis.\nWeapon: We are deploying our unified Living Playbook, turning every team\'s hard-won lessons into instant searchable wisdom.\nUtopia: On day one, any new engineer can push their first line of code in under 30 minutes with total confidence.'
      }
    },
    exercise: {
      prompt: 'Identify the "Villain" your current work or project is fighting against:',
      scaffold: [
        { label: 'The Villain (The invisible friction, waste, or outdated habit):', placeholder: 'Our real enemy is...' },
        { label: 'The Weapon (Your initiative or approach):', placeholder: 'The tool / system we are creating to slay it...' },
        { label: 'The Utopia (What victory looks like for the team):', placeholder: 'When we win, our daily reality will be...' }
      ]
    },
    voicePrompt: 'Deliver this visionary rally speech in 60 seconds with conviction and inspirational cadence.'
  },

  {
    day: 14,
    week: 2,
    weekTitle: 'Business & Presentation Frameworks',
    title: 'Week 2 Integration: The 2-Minute Executive Pitch',
    subtitle: 'Deliver a high-stakes executive pitch combining SCQA and Humanized Data.',
    objective: 'Demonstrate mastery of business storytelling under tight executive constraints.',
    frameworkId: 'scqa',
    timeBreakdown: { concept: 1, anatomy: 3, guided: 3, voice: 3 },
    concept: {
      spark: 'Congratulations on completing Week 2! You now possess the frameworks trusted by top consultants, keynote speakers, and founders.',
      rule: 'The 2-Minute Executive Pitch Blueprint:\n- 0:00 - 0:30: SCQA opening (Situation + Complication)\n- 0:30 - 0:50: The High-Stakes Question\n- 0:50 - 1:30: The Answer + Humanized Data Anchor\n- 1:30 - 2:00: Clear Call to Action & Strategic Impact.',
      mindset: 'Clarity is executive presence. The shorter and sharper your story, the more senior you appear.'
    },
    anatomy: {
      bad: {
        title: 'Rambling Pitch:',
        text: 'Thanks for having me today. I have a deck of 35 slides. First, let\'s look at market trends in 2022, then we will look at our supply chain, then competitor benchmarks, and maybe at the end we can discuss budget if we have time.'
      },
      good: {
        title: 'The 2-Minute Executive Masterpiece:',
        text: 'For 4 years, our product team delivered industry-leading customer retention. But over the last two quarters, our customer acquisition cost doubled because digital ad platforms increased prices by 120%. The question facing our leadership is: How do we continue our 30% annual growth without burning through our cash reserves? The answer is shifting 50% of our marketing budget into customer-led referral loops. Last month, our pilot with 50 power users generated 340 qualified organic leads at zero ad spend. Approving this $40,000 initiative today safeguards our entire year\'s profit margin while building an acquisition engine our competitors cannot outbid.'
      }
    },
    exercise: {
      prompt: 'Write your 2-Minute Executive Pitch using the complete Week 2 framework:',
      scaffold: [
        { label: 'The Hook & SCQA Baseline (Situation & Complication):', placeholder: 'Set the stage and highlight the pressing stakes...' },
        { label: 'The Core Strategic Question:', placeholder: 'The pivotal decision facing the room...' },
        { label: 'The Answer & Human Proof (The solution & tangible evidence):', placeholder: 'The proposal and proof of efficacy...' },
        { label: 'The Decisive Close (What do you need today?):', placeholder: 'The clear ask and expected ROI...' }
      ]
    },
    voicePrompt: 'Record your full 2-minute executive pitch. Stand up while speaking to naturally project leadership presence!'
  },

  // WEEK 3: CONVERSATIONAL CHARISMA & SOCIAL STORYTELLING
  {
    day: 15,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'The Highlight Reel vs. The Director’s Cut',
    subtitle: 'Mastering social pacing: Tell the 45-second version before offering more.',
    objective: 'Keep casual listeners leaning in by avoiding conversational monologue traps.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'In casual conversation, nothing kills charisma faster than holding hostage an audience that just wanted a quick answer. Always give the "Highlight Reel" (45 seconds) first. If they ask follow-up questions, then you can give the "Director\'s Cut".',
      rule: 'The Highlight Reel Rule:\n- Give the punchy 3-beat version in 45 seconds.\n- Stop talking and pass the conversational ball back: "Have you ever experienced something like that?"\n- Let them invite you to tell more.',
      mindset: 'Conversational storytelling is a game of catch, not a bowling ball roll.'
    },
    anatomy: {
      bad: {
        title: 'Holding the Room Hostage (Director\'s Cut without permission):',
        text: 'How was my weekend? Oh man, it started on Friday at 4:30 when my car had this strange ticking noise, so I had to call my mechanic Tony, but Tony was out having lunch, so I sat in the waiting room reading magazines for an hour... [10 minutes later] ...and that is why I ended up buying a blue tent.'
      },
      good: {
        title: 'The 45-Second Highlight Reel:',
        text: 'My weekend turned into an accidental survival expedition! I went out to buy groceries on Saturday morning, made a wrong turn on a mountain trail, and ended up trapped in an unexpected snowstorm helping a lost golden retriever find his owner. I finally made it back with the groceries 8 hours later!'
      }
    },
    exercise: {
      prompt: 'Take an event from your recent week and distill it into a 45-second Highlight Reel:',
      scaffold: [
        { label: 'The Wild Premise / Hook (1 sentence):', placeholder: 'My weekend/day turned into an accidental...' },
        { label: 'The Core Absurdity / Friction (2 sentences):', placeholder: 'What was the peak moment of struggle or comedy?' },
        { label: 'The Return & Pass the Ball (1 sentence ending with an open question):', placeholder: 'Have you ever had a routine chore spiral out of control?' }
      ]
    },
    voicePrompt: 'Speak your 45-second highlight reel with relaxed, playful social energy. Stop right at 45 seconds!'
  },

  {
    day: 16,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'The Curiosity Gap Hook',
    subtitle: 'Start with an irresistible contradiction that commands undivided attention.',
    objective: 'Hook social groups instantly with a provocative mystery or counter-intuitive truth.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'The human brain is an explanation machine. When you open a "Curiosity Gap"—presenting two facts that seem contradictory—the brain physically craves the resolution.',
      rule: 'Curiosity Gap Formulas:\n- The Contradiction: "The best piece of advice I ever got was from someone who was fired that same morning."\n- The Paradox: "How losing our biggest account actually doubled our company’s profits."\n- The Shocking Start: "I was arrested in Tokyo for being too polite."',
      mindset: 'Open the loop in sentence one. Close the loop only at the climax.'
    },
    anatomy: {
      bad: {
        title: 'Zero Curiosity:',
        text: 'I want to talk about how we should change our customer feedback process because currently it has some inefficiencies that I noticed last month.'
      },
      good: {
        title: 'The Irresistible Curiosity Gap:',
        text: 'The most profitable thing our company did last year was intentionally ignore our most vocal customer for an entire month. Everyone on our executive team told us we were committing suicide. But that silence revealed a truth that saved our business.'
      }
    },
    exercise: {
      prompt: 'Create 2 different Curiosity Gap opening hooks for a story you love to tell:',
      scaffold: [
        { label: 'Curiosity Hook Option 1 (The Paradox / Contradiction):', placeholder: 'The best thing that happened to me was losing...' },
        { label: 'Curiosity Hook Option 2 (The Surprising Person or Place):', placeholder: 'I learned everything about leadership from a 12-year-old...' },
        { label: 'The Bridge that closes the gap:', placeholder: 'How the story resolves that contradiction...' }
      ]
    },
    voicePrompt: 'Deliver both hooks out loud. Practice pausing for 2 full seconds right after the hook to let the mystery hang in the air.'
  },

  {
    day: 17,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'Vulnerability & The Self-Deprecating Pivot',
    subtitle: 'Why relatable flaws build 10x more trust than rehearsed perfection.',
    objective: 'Use self-deprecating humor and vulnerability to dissolve tension and win trust.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Bragging creates distance. Self-deprecating vulnerability creates affection. When you share a moment where you were foolish, awkward, or humbled, you signal supreme confidence.',
      rule: 'The "Humble Hero" Arc:\n1. Show your flawed initial assumption (e.g. thinking you were so smart or cool).\n2. Show reality brutally puncturing your ego.\n3. Laugh at yourself and extract the lesson.',
      mindset: 'People will forget what you achieved, but they will never forget when you made them laugh at human imperfection.'
    },
    anatomy: {
      bad: {
        title: 'Humblebragging (Creates Eye-Rolls):',
        text: 'My greatest flaw is just that I care too much and I work so hard that my team can barely keep up with my standards.'
      },
      good: {
        title: 'Charming Vulnerability:',
        text: 'In my first month as a manager, I wanted so badly to look like an inspiring visionary that I wore a three-piece suit to our casual tech office. At 10:00 AM, our senior architect walked up to me with a plate of donuts, looked at my cufflinks, and whispered: "Are you here to fire us, or are you going to a funeral?" It burst my bubble of self-importance immediately. I took off the tie, sat down with them, and learned that leadership is about listening, not costume design.'
      }
    },
    exercise: {
      prompt: 'Write a micro-story about a time you made a foolish mistake or had your ego checked:',
      scaffold: [
        { label: 'The Pretense (How you thought you were cool/smart):', placeholder: 'I was totally convinced that...' },
        { label: 'The Puncturing Moment (How reality humbled you):', placeholder: 'Until [person/event] made me realize...' },
        { label: 'The Laughter & Lesson:', placeholder: 'Now I always remember that...' }
      ]
    },
    voicePrompt: 'Record your story with a self-aware, warm smile. Notice how your vocal cadence relaxes when you aren\'t trying to impress anyone.'
  },

  {
    day: 18,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'Re-Architecting: "So, What Do You Do?"',
    subtitle: 'Replace your dry job title with a 30-second Problem-Solution-Stakes story.',
    objective: 'Never give a boring resume title again when meeting new people.',
    frameworkId: 'bab',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'When someone asks "What do you do?", 99% of people respond: "I\'m a senior data analyst at Financial Corp." The conversation immediately dies. Titles describe hierarchy; stories describe mission.',
      rule: 'The 3-Beat "What Do You Do" Engine:\n1. The Problem you fight: "You know how [common human frustration]..."\n2. What you do: "Well, I build [tool/solution] that..."\n3. The Human Stakes: "So that [everyday person] can [enjoy freedom/relief]."',
      mindset: 'Frame your work by the relief you create for others.'
    },
    anatomy: {
      bad: {
        title: 'The Conversation Killer:',
        text: 'I\'m a compliance and risk assessment manager for enterprise cloud migrations.'
      },
      good: {
        title: 'The Magnetic Mission Answer:',
        text: 'You know how every time you hear about a major company getting hacked, millions of regular people lose their private passwords and credit card data? Well, my job is to act like an ethical burglar. I try to break into our company’s cloud servers every single week so that our customer’s savings and identities remain completely impenetrable. Basically, I give our security team nightmares so our users can sleep at night.'
      }
    },
    exercise: {
      prompt: 'Re-invent how you answer "What do you do?" using the 3-Beat Mission formula:',
      scaffold: [
        { label: 'The Universal Problem ("You know how..."):', placeholder: 'You know how people struggle with...' },
        { label: 'The Vehicle ("What I do is..."):', placeholder: 'What I do is build/design/manage...' },
        { label: 'The Human Relief ("So that..."):', placeholder: 'So that people never have to worry about...' }
      ]
    },
    voicePrompt: 'Say this answer aloud 3 times until it rolls off your tongue naturally. Keep it conversational and proud.'
  },

  {
    day: 19,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'The Coffee Chat Spine: Turning Mundane into Banter',
    subtitle: 'How to answer "How was your weekend?" or "What’s new?" with narrative delight.',
    objective: 'Find the extraordinary narrative spark inside ordinary daily routines.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'You don\'t need to fight tigers or jump out of airplanes to tell great stories. Jerry Seinfeld built a legendary career telling stories about dry cleaning and soup. Great storytelling is finding the humor and drama in everyday micro-moments.',
      rule: 'The Micro-Drama Technique:\n1. Mundane Goal: "I just wanted to buy a flathead screwdriver."\n2. The Unreasonable Obstacle: "Which apparently required negotiating with an existential hardware store clerk."\n3. The Takeaway: "I walked out with 3 plants and no screwdriver."',
      mindset: 'Life is fascinating if you pay attention to the absurdities.'
    },
    anatomy: {
      bad: {
        title: 'The Monosyllabic Answer:',
        text: 'How was my weekend? Pretty good, just relaxed. Watched some Netflix, did laundry. Nothing special. How about yours?'
      },
      good: {
        title: 'The Micro-Drama Anecdote:',
        text: 'I attempted to assemble an IKEA bookshelf without reading the instructions because I foolishly trusted my male spatial intuition. Three hours later, I had constructed what looked like a modern art sculpture of a Swedish warship with four leftover mysterious wooden pegs. My cat looked at me with deep disappointment. I had to swallow my pride and disassemble the entire thing backward.'
      }
    },
    exercise: {
      prompt: 'Recall a tiny frustration from this past week. Frame it as a comedic Micro-Drama:',
      scaffold: [
        { label: 'The Simple Goal:', placeholder: 'All I wanted to do was...' },
        { label: 'The Absurd Escalation:', placeholder: 'Instead, I found myself...' },
        { label: 'The Self-Deprecating Punchline:', placeholder: 'The moral of the story is...' }
      ]
    },
    voicePrompt: 'Deliver your coffee chat anecdote with lively, expressive facial expressions and natural vocal inflection.'
  },

  {
    day: 20,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'Character Dialogue & Voice Shifts',
    subtitle: 'Bring scenes to life by replacing indirect reporting with direct quotes.',
    objective: 'Incorporate punchy, authentic spoken dialogue into your verbal narratives.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Indirect reporting drains the oxygen out of a story: "He said that we should probably reconsider our timeline because he was worried." Direct dialogue puts the listener in the room: "He leaned across the desk and said: \'If we launch on Friday, this plane crashes.\'"',
      rule: 'Direct Dialogue Rules:\n1. Keep dialogue under 10 words per quote.\n2. Shift your voice slightly (pitch, pace, or volume) when speaking for another character.\n3. Cut speech tags ("he said", "she replied")—just say the quote directly.',
      mindset: 'Don\'t tell me what they talked about; let me hear their voices.'
    },
    anatomy: {
      bad: {
        title: 'Flat Indirect Reporting:',
        text: 'My doctor told me that I was eating terribly and that my cholesterol was getting dangerous and that if I didn\'t start exercising right away I was going to have severe medical complications.'
      },
      good: {
        title: 'Direct Spoken Dialogue:',
        text: 'My doctor slid my lab results across the desk, took off his glasses, and stared straight at me. He said: "Mark, do you want to see your daughter graduate high school?" The room went dead silent. He didn\'t lecture me about calories. Just that one question.'
      }
    },
    exercise: {
      prompt: 'Take a conversation from your life. Turn indirect summary into punchy direct quotes:',
      scaffold: [
        { label: 'The Setup / Physical gesture:', placeholder: 'She paused, looked down at her notes, and...' },
        { label: 'The Direct Quote (Under 10 words):', placeholder: 'She said: "[Direct quote]"' },
        { label: 'The Immediate Impact / Reaction:', placeholder: 'In that moment, everything changed because...' }
      ]
    },
    voicePrompt: 'Speak this scene aloud. Practice changing your posture and tone when you speak the other character\'s line.'
  },

  {
    day: 21,
    week: 3,
    weekTitle: 'Conversational Charisma & Social Storytelling',
    title: 'Week 3 Integration: The 60-Second Magnetic Social Anecdote',
    subtitle: 'Deliver a hilarious or memorable social story that captivates any gathering.',
    objective: 'Showcase Week 3 social charisma: tight pacing, curiosity gap, and dialogue.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 1, anatomy: 3, guided: 3, voice: 3 },
    concept: {
      spark: 'Congratulations on completing Week 3! You have mastered the art of casual, magnetic conversational storytelling.',
      rule: 'The 60-Second Social Anecdote Formula:\n- 0:00 - 0:10: Curiosity Gap Hook\n- 0:10 - 0:35: The Struggle + 1 Direct Quote\n- 0:35 - 0:50: The Punchline / Climax\n- 0:50 - 1:00: Pass the Conversational Ball.',
      mindset: 'The goal of social storytelling is not to show off, but to invite laughter and connection.'
    },
    anatomy: {
      bad: {
        title: 'Rambling Monologue:',
        text: 'So last month I was at this airport, I forget which one, maybe Chicago, and I had a long layover, so I bought coffee, and the barista was weird, and then my gate changed, and then...'
      },
      good: {
        title: '60 Seconds of Social Gold:',
        text: 'I learned never to judge a book by its cover while sitting next to a tattooed biker on a flight to Dallas. I was trying to look busy on my laptop because the guy looked like he ate iron for breakfast. Halfway through the flight, turbulence hit hard, and this 250-pound mountain of leather grabbed my arm, looked at me with giant terrified eyes, and whispered: "Hold my hand, brother, I\'m terrified of clouds!" We held hands through the turbulence and spent the next two hours talking about his prize-winning orchid garden. Has anyone else ever made the most unexpected friend on a flight?'
      }
    },
    exercise: {
      prompt: 'Craft your 60-second social anecdote ready for your next dinner party or chat:',
      scaffold: [
        { label: 'The Irresistible Opening (Curiosity Gap):', placeholder: 'I learned never to [X] when I was at [Y]...' },
        { label: 'The Turning Point & One Direct Quote:', placeholder: 'Suddenly [event], and they looked at me and said: "[Quote]"...' },
        { label: 'The Punchline & Question for the group:', placeholder: 'The punchline, followed by "Have you ever...?"' }
      ]
    },
    voicePrompt: 'Record your 60-second social story. Keep your energy high, smile through your voice, and save it to your Story Vault!'
  },

  // WEEK 4: IMPROMPTU MASTERY, RHETORIC & HIGH-STAKES INFLUENCE
  {
    day: 22,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The PREP Method: Spontaneous Speaking Weapon',
    subtitle: 'Point, Reason, Example, Point: Master thinking fast on your feet.',
    objective: 'Never freeze when unexpectedly asked "What do you think?" in meetings.',
    frameworkId: 'prep',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'You\'re sitting in a meeting, and suddenly the VP turns to you and says: "What\'s your opinion on this proposal?" Most people freeze, ramble, and use 50 filler words ("Um, well, I think maybe..."). PREP gives your brain an immediate 4-step roadmap.',
      rule: 'The PREP Architecture:\n1. POINT: State your bottom line in one direct sentence.\n2. REASON: Give the primary rationale (the "Why").\n3. EXAMPLE: A 20-second micro-story or proof point.\n4. POINT: Restate your conclusion with forward momentum.',
      mindset: 'Structure breeds speed. When your structure is automatic, your mind is totally free.'
    },
    anatomy: {
      bad: {
        title: 'Hesitant Rambling:',
        text: 'Uh, yeah, well, I guess there are pros and cons. We could look at doing it, but on the other hand, marketing might have some thoughts, and I remember last year we did something kind of similar, so maybe we should wait or not, whatever everyone thinks.'
      },
      good: {
        title: 'Decisive PREP Delivery:',
        text: 'Point: I strongly recommend we greenlight this initiative immediately.\nReason: Because every month we delay, our top competitor is capturing the mid-market accounts we are ignoring.\nExample: Last quarter on Project Titan, we hesitated for 6 weeks waiting for perfect data, and we lost the Acme contract to a competitor who moved in 3 days.\nPoint: That is why decisive speed today is worth far more than theoretical perfection next month.'
      }
    },
    exercise: {
      prompt: 'Pick a current controversial decision or topic. Deliver an impromptu PREP breakdown:',
      scaffold: [
        { label: 'Point (Your decisive assertion):', placeholder: 'I believe we should [specific action]...' },
        { label: 'Reason (The single strongest rationale):', placeholder: 'Because [primary business / logical reason]...' },
        { label: 'Example (A rapid 20-second micro-story or precedent):', placeholder: 'For example, when we [previous experience]...' },
        { label: 'Point (The crisp, confident landing):', placeholder: 'Therefore, [re-assert the action with conviction]...' }
      ]
    },
    voicePrompt: 'Start recording with ZERO pause! Speak your PREP answer in under 50 seconds. Notice the complete absence of filler words.'
  },

  {
    day: 23,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The Turnaround Story: Framing Mistakes into Gold',
    subtitle: 'How to share failure without sounding defensive or incompetent.',
    objective: 'Transform embarrassing professional failures into badges of credibility and growth.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Everyone fails. But amateurs hide their failures or blame others, while true leaders turn failures into institutional wisdom. A well-told failure story earns 5x more trust than a victory story.',
      rule: 'The Turnaround Framework:\n1. Own the Blunder (No excuses, no blaming colleagues).\n2. The Humbling Realization (What the failure revealed about your blind spots).\n3. The Systemic Change (The safeguards and philosophy you built as a result).',
      mindset: 'Failure is only embarrassing if you didn\'t learn anything.'
    },
    anatomy: {
      bad: {
        title: 'Defensive & Blaming:',
        text: 'The launch was a mess, but honestly, it was because the vendor didn\'t deliver the APIs on time and QA didn\'t catch the edge cases. It wasn\'t really my fault.'
      },
      good: {
        title: 'The Masterful Turnaround Story:',
        text: 'Three years ago, I caused a 4-hour service outage that cost our company $60,000. It happened because I pushed a database migration script directly to production without a peer review, assuming my syntax was flawless. When the error alerts started screaming, I felt sick to my stomach. But instead of hiding it, I immediately jumped on a public call with leadership, took full responsibility, and walked through my error. Over the next 48 hours, I authored our company’s strict automated deployment guardrails that prevent any single human from making that mistake again. That mistake was painful, but it permanently shaped me into a leader who values bulletproof systems over individual arrogance.'
      }
    },
    exercise: {
      prompt: 'Draft your Turnaround Failure Story:',
      scaffold: [
        { label: 'The Ownership (Describe your mistake directly without hedging):', placeholder: 'I made the mistake of...' },
        { label: 'The Shock & Realization (The immediate consequence):', placeholder: 'When it blew up, I realized my blind spot was...' },
        { label: 'The Lasting Safeguard (What you built / how you lead now):', placeholder: 'Ever since that experience, I always...' }
      ]
    },
    voicePrompt: 'Record your turnaround story with calm, mature authority. No defensiveness—pure leadership.'
  },

  {
    day: 24,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The Rule of Three: Cadence, Rhythm & Punch',
    subtitle: 'Why human memory is wired for triplets in speaking and rhetoric.',
    objective: 'Harness the rhetorical power of three-part phrasing for unforgettable speeches.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'From "Life, liberty, and the pursuit of happiness" to "Veni, vidi, vici" and "Blood, sweat, and tears", the human mind processes triplets with unmatched resonance. Two is an incomplete list; four is a cognitive burden; three is rhythm.',
      rule: 'Using the Rule of Three:\n1. Three beats in a story (Hook, Struggle, Landing).\n2. Three adjectives to describe an emotional state ("tired, terrified, and totally alone").\n3. The Comic Triplet: Pattern, Pattern, Twist ("We need discipline, dedication, and a giant box of pizza").',
      mindset: 'Rhythm is the secret sauce that separates talking from performing.'
    },
    anatomy: {
      bad: {
        title: 'Clunky & Overloaded:',
        text: 'Our team needs better communication, more accountability, faster execution, clear KPIs, higher engagement, and better tooling.'
      },
      good: {
        title: 'The Power of the Triplet:',
        text: 'When the crisis hit, we had three choices: we could surrender to panic, we could point fingers at each other, or we could roll up our sleeves and build our way out. We chose to build.'
      }
    },
    exercise: {
      prompt: 'Create 2 different rhetorical triplets for your next presentation or meeting:',
      scaffold: [
        { label: 'Triplet 1: Three Choices / Actions:', placeholder: 'We can [Choice 1], we can [Choice 2], or we can [Inspiring Choice 3]...' },
        { label: 'Triplet 2: Three Human Values / Results:', placeholder: 'This gives our team [Value 1], [Value 2], and [Value 3]...' },
        { label: 'The Climax Sentence:', placeholder: 'End with one punchy summary sentence...' }
      ]
    },
    voicePrompt: 'Deliver your triplets with rhythmic cadences. Accentuate the third item with slightly more volume and a downward pitch.'
  },

  {
    day: 25,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'Masterful Pacing: Pauses, Speed & Punchlines',
    subtitle: 'The power of silence: Why the pause is where meaning lives.',
    objective: 'Conquer the fear of silence to build suspense and let critical points sink in.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Inexperienced speakers fear silence. They fill every millisecond with "um", "uh", or frantic words because silence feels like failure. Master storytellers know that silence is the frame that gives the picture its value.',
      rule: 'The 3 Power Pauses:\n1. The Pre-Hook Pause (2 full seconds before your first word—commands immediate room silence).\n2. The Suspense Pause (Right before the climax or decision).\n3. The Landing Pause (After your final punchline—lets the insight echo).',
      mindset: 'Mark Twain: "The right word may be effective, but no word was ever as effective as a rightly timed pause."'
    },
    anatomy: {
      bad: {
        title: 'Rushed & Breathless:',
        text: 'And then we opened the door and the server was completely flooded with water and we had to run and get buckets and um yeah it was crazy.'
      },
      good: {
        title: 'Deliberate Pacing with Suspense Pauses:',
        text: 'At 3:00 AM, we finally reached the server room door.\n[PAUSE - 2 seconds]\nI turned the handle, pushed it open, and looked inside.\n[PAUSE - 2 seconds]\nThere was four inches of standing water across the floor, and our primary rack was humming in the dark.'
      }
    },
    exercise: {
      prompt: 'Write a suspenseful 30-second scene with explicit [PAUSE] notations:',
      scaffold: [
        { label: 'The Buildup (Lead up to the door / moment):', placeholder: 'Describe the approach...' },
        { label: 'The Suspense Pause (Mark [PAUSE 2s]):', placeholder: 'Insert the moment of breath...' },
        { label: 'The Reveal & Landing Pause (Mark [PAUSE 2s]):', placeholder: 'The shocking reality revealed...' }
      ]
    },
    voicePrompt: 'Record your scene strictly respecting the 2-second silent pauses. Count "1-1000, 2-1000" in your head during the silence.'
  },

  {
    day: 26,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The Sticky Landing: Ending on an Image, Not a Mumble',
    subtitle: 'Never say "So yeah... that was that" again. Land your final sentence with pride.',
    objective: 'Deliver crisp, memorable concluding sentences that linger in the audience’s mind.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'How many times have you listened to someone tell an interesting story, only for them to taper off awkwardly into: "So yeah... haha... that happened... anyway..."? The landing is the last taste you leave in their mouth.',
      rule: 'Landing Techniques:\n1. The Visual Echo: End on a strong visual image.\n2. The Moral Punchline: A universal truth in under 8 words.\n3. The Call to Adventure: Challenging the listener directly.',
      mindset: 'Stick the landing like an Olympic gymnast. Complete the sentence, close your mouth, and smile.'
    },
    anatomy: {
      bad: {
        title: 'The Awkward Mumble:',
        text: 'And so we finished the project and it worked pretty well, so yeah, that\'s basically the story, I don\'t know if that answered your question.'
      },
      good: {
        title: 'The Resonant Landing:',
        text: 'We handed the keys of the newly built community center to the neighborhood kids at dusk. As they ran through the gymnasium doors cheering, I realized: we hadn\'t just poured concrete and hung drywall. We had built a sanctuary where the next generation could dare to dream.'
      }
    },
    exercise: {
      prompt: 'Write 3 different punchy concluding sentences for a favorite story:',
      scaffold: [
        { label: 'Option A: The Visual Echo (Leaves a picture in their mind):', placeholder: 'To this day, every time I look at that broken coffee mug on my desk, I remember...' },
        { label: 'Option B: The 8-Word Moral (Short, memorable aphorism):', placeholder: 'Courage isn\'t having no fear—it\'s moving anyway.' },
        { label: 'Option C: The Call to Adventure (Challenges the audience):', placeholder: 'The question is: will you stay in the safe harbor, or will you set sail?' }
      ]
    },
    voicePrompt: 'Deliver all 3 landing sentences aloud. Focus on lowering your vocal pitch at the final period to project finality.'
  },

  {
    day: 27,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The Q&A Shield: Answering Tough Questions with Stories',
    subtitle: 'Bridge hostile or awkward questions into compelling narratives.',
    objective: 'Deflect defensiveness during Q&A by using micro-stories as proof.',
    frameworkId: 'prep',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'When someone asks an aggressive question ("Isn\'t your price twice as high as competitor X?"), debating numbers makes you look defensive. Answering with a story changes the terrain entirely.',
      rule: 'The "Bridge & Story" Technique:\n1. Validate & Reframe: "That is the central concern every partner considers before working with us."\n2. The Case Story: "Let me tell you about Acme Corp, who asked that exact question 6 months ago..."\n3. The Result: "They saved 4x their investment in 90 days."',
      mindset: 'Arguments invite counter-arguments; stories invite empathy.'
    },
    anatomy: {
      bad: {
        title: 'Defensive Argumentation:',
        text: 'No, that\'s totally incorrect. Our pricing includes 24/7 support and enterprise servers, so if you calculate the total cost of ownership we are actually cheaper!'
      },
      good: {
        title: 'The Narrative Shield:',
        text: 'That is the most important question any team should ask before committing budget. Six months ago, the CTO of Nexus Health looked at our quote and asked the exact same question. He initially chose a vendor that was 40% cheaper. Three months later, that cheaper vendor suffered a 48-hour HIPAA compliance breach that cost Nexus $300,000 in penalties. He called us the next morning and said: "Cheap tools are the most expensive mistake a company can make." Today, Nexus runs 100% of their critical workflows on our platform without a single incident.'
      }
    },
    exercise: {
      prompt: 'Pick a tough question or objection you frequently face. Build your Narrative Shield:',
      scaffold: [
        { label: 'The Tough Objection / Question:', placeholder: 'e.g. Why should we promote you over someone with more seniority?' },
        { label: 'The Validation & Reframe:', placeholder: 'That is a fair and essential question...' },
        { label: 'The Micro-Story that answers it:', placeholder: 'Let me share what happened when our team faced...' }
      ]
    },
    voicePrompt: 'Record your Q&A Shield response with serene composure. Speak with the calm assurance of someone holding undisputed truth.'
  },

  {
    day: 28,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The Metaphor Engine: Explaining Complexity Simply',
    subtitle: 'How to translate intricate technical concepts into everyday physical analogies.',
    objective: 'Make complex topics instantly understandable to any non-technical audience.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Albert Einstein said: "If you can\'t explain it simply, you don\'t understand it well enough." Metaphors bridge the gap between abstract technical jargon and human common sense.',
      rule: 'The Metaphor Equation:\n- Your Complex Subject (e.g. APIs, Kubernetes, Technical Debt, Machine Learning)\n- An Everyday Physical Comparison (e.g. Restaurant waiter, City plumbing, Credit card debt, Sorting laundry)\n- Connect the 3 points of similarity.',
      mindset: 'A good metaphor is worth 100 explanatory slides.'
    },
    anatomy: {
      bad: {
        title: 'Suffocated by Jargon:',
        text: 'An API is an Application Programming Interface that exposes predefined endpoints utilizing REST protocols to exchange JSON payloads across stateless HTTP network layers.'
      },
      good: {
        title: 'The Restaurant Waiter Metaphor:',
        text: 'Think of an API like a waiter at a restaurant. You are the customer sitting at the table. The kitchen is the database with all the food and chef logic. You don\'t need to go back into the hot kitchen and cook the steak yourself. You simply tell the waiter what you want from the menu, the waiter runs your request back to the kitchen, and brings you back your hot meal. That waiter is the API—connecting your desires to the backend engine seamlessly.'
      }
    },
    exercise: {
      prompt: 'Pick a complex topic from your work or field. Build a physical metaphor for it:',
      scaffold: [
        { label: 'The Complex / Technical Concept:', placeholder: 'e.g. Asynchronous processing, indexing, compound interest...' },
        { label: 'The Everyday Physical Analogy:', placeholder: 'Think of it like a [waiter / highway / library index / plumbing]...' },
        { label: 'The 3-Sentence Explanation connecting them:', placeholder: 'Explain how the analogy works step-by-step...' }
      ]
    },
    voicePrompt: 'Deliver your metaphor to an imaginary 10-year-old. Keep your tone enthusiastic and approachable.'
  },

  {
    day: 29,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'The 60-Second Hero’s Journey',
    subtitle: 'Compress Joseph Campbell’s mythic narrative arc into a 1-minute leadership story.',
    objective: 'Deliver epic leadership stories that motivate teams through uncertainty and change.',
    frameworkId: 'pixar',
    timeBreakdown: { concept: 2, anatomy: 3, guided: 3, voice: 2 },
    concept: {
      spark: 'Star Wars, The Matrix, and The Lord of the Rings all share the same monomyth: The Hero\'s Journey. When leaders compress this arc into 60 seconds, they make their teams feel like heroes on a grand quest rather than cogs in a corporate machine.',
      rule: 'The 60-Second Hero’s Arc:\n1. The Ordinary World (Status quo)\n2. The Call & The Abyss (The crisis that pushed everyone into darkness)\n3. The Transformation & Return (The elixir/wisdom brought back to enrich the tribe).',
      mindset: 'Never make yourself the hero. Make your team or customer the hero, and make yourself the guide.'
    },
    anatomy: {
      bad: {
        title: 'Self-Aggrandizing Speech:',
        text: 'When things got tough, I came in and worked 90 hours a week and saved the project single-handedly while everyone else panicked.'
      },
      good: {
        title: 'The Team Monomyth:',
        text: 'Six months ago, our team was on the brink of collapse. We had lost our biggest client, our morale was shattered, and the easy path was to surrender and scale back. But instead of folding, every person in this room stepped into the arena. You stayed late, challenged legacy assumptions, and built a prototype in 3 weeks that redefined what this company is capable of. Today, we are not the same team that started that journey. We are battle-tested, fearless, and ready for whatever mountain lies ahead.'
      }
    },
    exercise: {
      prompt: 'Frame a team challenge or personal journey as a 60-Second Hero’s Journey:',
      scaffold: [
        { label: 'The Ordinary World & The Abyss (The crisis that threatened to break you):', placeholder: 'Six months ago, when [crisis occurred], we were on the brink of...' },
        { label: 'The Crucible / Trial (How the team stepped up and adapted):', placeholder: 'Instead of backing down, we...' },
        { label: 'The Transformed Return (Who you are now as a result):', placeholder: 'Today, as a result of that fire, we are...' }
      ]
    },
    voicePrompt: 'Record your Hero’s Journey with cinematic gravity. Let your team hear the pride in your voice.'
  },

  {
    day: 30,
    week: 4,
    weekTitle: 'Impromptu Mastery & Rhetoric',
    title: 'Storytelling Graduation: Your Lifelong Story Bank',
    subtitle: 'Review your 30-day journey and build your permanent storytelling habit.',
    objective: 'Consolidate all frameworks and establish your daily 10-minute storytelling ritual.',
    frameworkId: '3-beat',
    timeBreakdown: { concept: 2, anatomy: 2, guided: 3, voice: 3 },
    concept: {
      spark: 'You have done what fewer than 2% of professionals ever do: you completed 30 days of deliberate storytelling training! You now have a mental library of frameworks: ABT, SCQA, STAR-L, BAB, Sparkline, PREP, and the 3-Beat Golden Spine.',
      rule: 'The Lifelong 10-Minute Ritual:\n1. Keep your Story Vault active. Whenever something funny, frustrating, or transformative happens in your day, write a 3-sentence note in your vault.\n2. Spend 5 minutes every week running an Impromptu Gym challenge.\n3. Before any meeting, pitch, or dinner, pick ONE story from your vault to share.',
      mindset: 'The master of stories is the master of influence, connection, and charisma.'
    },
    anatomy: {
      bad: {
        title: 'The Untrained Speaker:',
        text: 'Rambles, forgets the point, gives 10 minutes of backstory, freezes during Q&A, and ends with "So yeah... that was that."'
      },
      good: {
        title: 'The StoryCraft Graduate:',
        text: 'Drops listeners into the hook in 7 seconds. Uses ABT for dramatic tension. Quantifies metrics with human faces. Answers questions with PREP precision. Lands stories with resonant, lasting punch.'
      }
    },
    exercise: {
      prompt: 'Write your Graduation Reflection: How has your storytelling transformed over these 30 days?',
      scaffold: [
        { label: 'Where you were 30 days ago (Your initial struggle with rambling/structure):', placeholder: '30 days ago, whenever I spoke or presented, I used to...' },
        { label: 'Your favorite framework and breakthrough moment:', placeholder: 'The framework that changed my speaking forever was [Framework] because...' },
        { label: 'Your commitment for the future:', placeholder: 'From today onward, whenever I stand up to speak, I will always...' }
      ]
    },
    voicePrompt: 'Record your final graduation reflection. Celebrate your massive growth, save it to your Story Vault, and claim your StoryCraft Master Badge!'
  }
];

window.StoryCurriculum = StoryCurriculum;
