// Prompt Bank for Impromptu Gym and Daily Story Practice
const PromptCategories = [
  { id: 'all', name: 'All Prompts' },
  { id: 'work', name: 'Workplace & Leadership' },
  { id: 'social', name: 'Social & Banter' },
  { id: 'pitch', name: 'Pitch & Influence' },
  { id: 'lessons', name: 'Mistakes & Lessons' },
  { id: 'impromptu', name: 'Rapid Spontaneous' }
];

const StoryPrompts = [
  // Work & Leadership
  { id: 1, category: 'work', title: 'The Crisis Pivot', prompt: 'Tell a story about a project that went completely off track and how you navigated the team out of the chaos.' },
  { id: 2, category: 'work', title: 'The Uncomfortable Disagreement', prompt: 'Tell about a time you strongly disagreed with a senior leader or colleague and how you voiced your stance constructively.' },
  { id: 3, category: 'work', title: 'The 11th-Hour Save', prompt: 'Describe a moment when a critical deadline or presentation was in jeopardy and you pulled off a last-minute triumph.' },
  { id: 4, category: 'work', title: 'Delivering Hard Feedback', prompt: 'Share an experience where you had to deliver difficult, honest feedback to someone and it transformed your relationship.' },
  { id: 5, category: 'work', title: 'Championing an Unpopular Idea', prompt: 'Tell a story about an idea everyone doubted at first, but you believed in and proved right.' },
  { id: 6, category: 'work', title: 'The First Day on the Job', prompt: 'Describe your first day at a new company or role where you felt like an imposter, and what changed.' },
  { id: 7, category: 'work', title: 'When the Technology Failed', prompt: 'Tell about a demo, presentation, or client meeting where technology crashed in front of everyone.' },
  { id: 8, category: 'work', title: 'Delegating Control', prompt: 'Tell a story about learning to let go of micromanaging and trusting a teammate with a high-stakes deliverable.' },
  { id: 9, category: 'work', title: 'The Unexpected Mentor', prompt: 'Share a story about someone who gave you tough love or unexpected guidance that shaped your career.' },
  { id: 10, category: 'work', title: 'The Customer Who Cried', prompt: 'Tell about an intense interaction with an angry customer that you managed to turn into a raving fan.' },

  // Social & Banter
  { id: 11, category: 'social', title: 'The Travel Disaster', prompt: 'Describe a trip or vacation where everything went hilariously wrong from missed flights to strange lodging.' },
  { id: 12, category: 'social', title: 'The Awkward Encounter', prompt: 'Tell a funny story about mistaking someone for someone else or an embarrassing social faux pas.' },
  { id: 13, category: 'social', title: 'The Culinary Catastrophe', prompt: 'Share an anecdote about a meal you cooked, ordered, or attended that turned into absolute chaos.' },
  { id: 14, category: 'social', title: 'The Misunderstanding', prompt: 'Describe a time a simple text message or misheard phrase spiraled into a giant misunderstanding.' },
  { id: 15, category: 'social', title: 'The Strange Hobby', prompt: 'Tell someone about a quirky obsession or obscure hobby you fell into and why it fascinated you.' },
  { id: 16, category: 'social', title: 'Meeting Your Idol', prompt: 'Share a story about meeting a person you deeply respected and how the interaction actually played out.' },
  { id: 17, category: 'social', title: 'The Road Trip Mystery', prompt: 'Tell about an odd discovery or surreal event that happened while driving on an empty highway.' },
  { id: 18, category: 'social', title: 'The Animal Encounter', prompt: 'Describe a hilarious or startling encounter with a pet or wild animal.' },
  { id: 19, category: 'social', title: 'The Impulsive Purchase', prompt: 'Tell the story of buying something ridiculous on impulse and the aftermath of owning it.' },
  { id: 20, category: 'social', title: 'The Family Legend', prompt: 'Tell a story passed down in your family or friend group that sounds almost too crazy to be true.' },

  // Pitch & Influence
  { id: 21, category: 'pitch', title: 'Selling Without a Budget', prompt: 'Pitch an initiative to your manager or team when there are zero extra resources available.' },
  { id: 22, category: 'pitch', title: 'The 60-Second Elevator Pitch', prompt: 'Explain what you do or a project you care about using the Before-After-Bridge structure.' },
  { id: 23, category: 'pitch', title: 'Why This Change Matters Now', prompt: 'Persuade your team why an old comfortable habit must be replaced with a new workflow immediately.' },
  { id: 24, category: 'pitch', title: 'The Investment That Paid Off', prompt: 'Tell a story to convince an audience that spending money upfront on quality saves 10x downstream.' },
  { id: 25, category: 'pitch', title: 'Adopting a New Tool', prompt: 'Pitch a controversial tool or methodology by focusing on emotional relief rather than technical features.' },
  { id: 26, category: 'pitch', title: 'Recruiting a Dream Teammate', prompt: 'Tell a candidate why joining your team will be the defining adventure of their professional life.' },
  { id: 27, category: 'pitch', title: 'The Non-Profit Mission', prompt: 'Inspire an audience to donate or volunteer for a cause by telling the story of one specific human.' },
  { id: 28, category: 'pitch', title: 'Changing a Client’s Mind', prompt: 'Share how you persuaded a skeptical client away from a bad decision they insisted on making.' },

  // Mistakes & Lessons
  { id: 29, category: 'lessons', title: 'The Best Bad Decision', prompt: 'Tell a story about a decision that looked disastrous at first, but ended up being the greatest gift.' },
  { id: 30, category: 'lessons', title: 'The Cost of Overconfidence', prompt: 'Describe a time you thought you were completely prepared, only to be humbled by reality.' },
  { id: 31, category: 'lessons', title: 'The Assumption Trap', prompt: 'Tell about a situation where you made a false assumption about a colleague or client.' },
  { id: 32, category: 'lessons', title: 'Burnout & The Rebound', prompt: 'Share a story about pushing yourself too far, hitting a wall, and redefining your boundaries.' },
  { id: 33, category: 'lessons', title: 'The Ignored Warning', prompt: 'Describe a gut feeling or red flag you ignored and the unforgettable lesson that followed.' },
  { id: 34, category: 'lessons', title: 'Failing in Public', prompt: 'Tell about a speech, contest, or launch that flopped publicly and how you rebuilt your composure.' },

  // Rapid Spontaneous
  { id: 35, category: 'impromptu', title: 'The Item in Your Pocket', prompt: 'Pick one physical item within arm’s reach and tell a 90-second story showing why it represents your worldview.' },
  { id: 36, category: 'impromptu', title: 'The 5-Year Younger Self', prompt: 'If you had 2 minutes to talk to yourself 5 years ago, what story would you tell them to change their trajectory?' },
  { id: 37, category: 'impromptu', title: 'The Turning Point Year', prompt: 'Pick one year in your life that changed everything and explain the 5-second pivot that defined it.' },
  { id: 38, category: 'impromptu', title: 'The Worst Advice You Ever Took', prompt: 'Tell a story about following conventional advice that totally backfired.' },
  { id: 39, category: 'impromptu', title: 'The Serendipitous Accident', prompt: 'Describe a chance meeting or random detour that permanently altered your career or personal life.' },
  { id: 40, category: 'impromptu', title: 'A Secret Talent or Failure', prompt: 'Tell a story about something you are shockingly bad at despite trying hard.' }
];

const ImpromptuConstraints = [
  '⏱️ Constraint: Complete your story in under 75 seconds.',
  '🎯 Constraint: Start with the final sentence / punchline first, then explain how you got there.',
  '🤐 Constraint: Zero filler words allowed (no "um", "uh", "like", "you know"). Pause in silence instead.',
  '👂 Constraint: Include at least 1 vivid sound (e.g. "the piercing ring of the phone", "the silence in the room").',
  '⚡ Constraint: Use the ABT formula explicitly (Agreement, But, Therefore).',
  '💬 Constraint: Quote direct speech or dialogue from another person.',
  '👀 Constraint: Describe one physical gesture or expression in detail.',
  '🏢 Constraint: Frame your story for an audience of C-suite executives in a board room.'
];

window.PromptCategories = PromptCategories;
window.StoryPrompts = StoryPrompts;
window.ImpromptuConstraints = ImpromptuConstraints;
