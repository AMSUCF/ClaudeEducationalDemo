# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Agentic AI & the Humanities** - An educational website exploring the implications of agentic AI for humanities education, designed for concerned educators.

The site includes:
- Educational content explaining agentic AI concepts
- Analysis of applications, labor implications, and equity concerns
- An interactive decision-based game: "Principal's Dilemma"
- Resources and discussion questions for educators

**Target Audience:** Educators (particularly humanities educators) with no technical background, concerned about AI's impact on education.

**Deployment:** Static site hosted on GitHub Pages

## Development Setup

### Prerequisites
- Modern web browser
- Basic text editor or IDE
- Git for version control
- (Optional) Local web server for testing

### Installation
This is a static website with no build process or dependencies beyond:
- P5.js (loaded via CDN)
- Standard HTML/CSS/JavaScript

To run locally:
```bash
# Clone the repository
git clone [repository-url]

# Navigate to directory
cd ClaudeEducationalDemo

# Serve with any static server, e.g.:
python -m http.server 8000
# Or simply open index.html in a browser
```

### Deployment to GitHub Pages
The site is configured for GitHub Pages deployment from the root directory:
1. Push to main/master branch
2. Enable GitHub Pages in repository settings
3. Select root directory as source
4. Site will be available at: `https://[username].github.io/ClaudeEducationalDemo/`

## Project Structure

```
/
├── index.html                  # Home page
├── what-is-agentic-ai.html    # Explanation of agentic AI concepts
├── applications.html           # Applications and implications
├── labor-equity.html          # Labor and equity concerns
├── game.html                  # Interactive game
├── resources.html             # Resources and further reading
├── css/
│   ├── main.css               # Core styles and layout
│   ├── retro-theme.css        # Retro aesthetic enhancements
│   └── game.css               # Game-specific styles
├── js/
│   ├── navigation.js          # Site navigation and smooth scrolling
│   ├── interactive-elements.js # Expandable cards, sliders, etc.
│   ├── game/
│   │   ├── game-engine.js     # Main game orchestration
│   │   ├── narrative-data.js  # All 10 scenarios with choices
│   │   ├── metrics-tracker.js # Game state and metrics management
│   │   └── endings.js         # Multiple ending logic
│   └── p5-sketches/
│       ├── background-home.js # Home page animated background
│       └── scene-office.js    # Game scene backgrounds (office, classroom, staff room)
├── assets/
│   └── images/
│       └── the-diamond-age.png # Book cover for resources page (to be added)
└── CLAUDE.md                  # This file
```

## Architecture

### Key Design Decisions

**Static Site Architecture:**
- No build process, server-side code, or external dependencies
- All functionality in vanilla JavaScript
- P5.js for canvas animations
- LocalStorage for game save states
- Designed for GitHub Pages deployment

**Content Pages (what-is-agentic-ai.html, applications.html, labor-equity.html):**
- Self-contained HTML pages with shared CSS
- Interactive elements (expandable cards, sliders) via JavaScript
- Responsive grid layouts
- Accessible design with keyboard navigation

**Game Architecture:**
- **narrative-data.js:** Contains all 10 scenarios as data structures
  - Each scenario has: title, text, pressure indicator, choices
  - Each choice has: text, consequences (metric changes), outcome text
- **metrics-tracker.js:** Manages game state
  - Tracks 5 metrics: equity, budget, scores, morale, autonomy
  - Handles save/load to localStorage
  - Animates metric changes
- **game-engine.js:** Orchestrates game flow
  - Loads scenarios sequentially
  - Handles player choices
  - Shows consequences
  - Triggers ending
- **endings.js:** Contains 8 possible endings
  - Determines ending based on final metric values
  - Each ending has: title, description, reflection questions
- **P5.js scenes:** Simple generated backgrounds for visual variety

### Game Design Philosophy

The game is deliberately designed to be **difficult with no perfect solutions**. This reflects the reality educators face:
- Every choice involves trade-offs
- External pressures constrain options
- Metrics often move in opposition (e.g., raising test scores may lower equity)
- Multiple "losing" outcomes are possible

The goal is experiential understanding of the pressures and dilemmas facing educators, not to "win."

### Styling Approach

**Retro Playful Aesthetic:**
- Color palette: warm oranges, teals, cream, brown
- Monospace/terminal fonts for UI elements
- Chunky bordered buttons with shadow effects
- Subtle scanline effect overlay
- CRT screen aesthetic for game portions
- Accessible with high contrast and keyboard navigation

## Common Development Tasks

### Adding New Content Sections
To add a new section to existing pages:
1. Add HTML content following existing card/grid patterns
2. Use semantic classes from `main.css` (e.g., `.content-section`, `.highlight-box`)
3. For interactive elements, update `interactive-elements.js`

### Modifying Game Scenarios
Edit `js/game/narrative-data.js`:
- Each scenario is an object in the `scenarios` array
- Ensure choices array includes `consequences` object with all 5 metrics
- Keep `outcome` text concise (2-3 sentences)

### Adding New Game Endings
Edit `js/game/endings.js`:
1. Add new ending object to `endings` property
2. Update `determineEnding()` function with logic for when ending triggers
3. Include: `title`, `description` (array of paragraphs), `reflection` (array of questions)

### Styling Changes
- **Layout/structure:** Edit `css/main.css`
- **Visual effects/theme:** Edit `css/retro-theme.css`
- **Game-specific:** Edit `css/game.css`
- Use CSS custom properties (defined in `:root` of main.css) for colors

### Testing
**Manual testing checklist:**
- [ ] All pages load and display correctly
- [ ] Navigation works across all pages
- [ ] Interactive elements (cards, sliders) function properly
- [ ] Game loads and progresses through all 10 scenarios
- [ ] Metrics update correctly after choices
- [ ] Game endings display based on metrics
- [ ] Save/load game state works (localStorage)
- [ ] Responsive design works on mobile/tablet
- [ ] Keyboard navigation functions
- [ ] P5.js backgrounds render

**Test game flow:**
1. Start game from intro screen
2. Make choices through all 10 scenarios
3. Verify metrics change appropriately
4. Check that ending matches final metric values
5. Test restart functionality

## Important Conventions

### HTML Structure
- Semantic HTML5 elements
- Consistent class naming: `.section-type` (e.g., `.content-section`, `.game-container`)
- IDs for unique elements that JavaScript references
- Accessibility: ARIA labels where appropriate, keyboard navigation support

### JavaScript Patterns
- No external libraries except P5.js
- ES6+ syntax (const/let, arrow functions, template literals)
- Event listeners attached in DOMContentLoaded
- Game state managed through MetricsTracker class
- LocalStorage for persistence

### CSS Organization
- Mobile-first responsive design
- CSS Grid for layouts
- Flexbox for component alignment
- Consistent spacing using CSS custom properties
- BEM-like naming for clarity

### File Organization
- One HTML file per page
- CSS separated by concern (layout, theme, game)
- JavaScript modular by function
- P5.js sketches in separate files

## Thematic Context

The project draws inspiration from Neal Stephenson's *The Diamond Age* (specifically the "Primer" concept) to explore:
- How the same educational technology produces vastly different outcomes based on context
- The risk of AI widening rather than closing educational equity gaps
- The potential for AI to manipulate rather than liberate learners
- The importance of human relationships in education

This context is explained in `resources.html` but informs the game's design throughout.

## Future Enhancements

Potential additions (not yet implemented):
- Additional game scenarios
- More P5.js visual effects
- Audio for game
- Sharing game results
- Teacher discussion guide
- Localization for multiple languages

## Notes for Future Developers

**When modifying game scenarios:**
- Maintain the balance of difficulty - no choice should be clearly "right"
- Ensure consequences feel logical and proportional
- Keep pressure indicators realistic (based on actual educational policy)
- Test that metric changes lead to appropriate endings

**When adding content:**
- Maintain accessibility (keyboard navigation, screen reader compatibility)
- Keep explanations jargon-free for non-technical educators
- Use examples and scenarios to illustrate abstract concepts
- Balance critical perspective with understanding of real constraints

**Design philosophy:**
- Prioritize clarity over sophistication
- Make complex issues understandable without oversimplifying
- Create space for reflection and discussion, not just information delivery
- Respect educators' intelligence and experience

## Technical Limitations

- No server-side processing
- No database (game state in localStorage only)
- No user accounts or persistent identity
- Limited to what vanilla JavaScript + P5.js can do
- GitHub Pages hosting constraints (static files only)

These are features, not bugs - the simplicity enables easy deployment, modification, and accessibility.

## Recent Updates & Bug Fixes

### Bug Fixes (Latest)

**Game Scene Rendering:**
- Fixed books flashing different colors on every frame in `scene-office.js`
  - Book colors are now initialized once at startup with a predefined palette
  - Colors remain consistent during gameplay
  - Books re-initialize colors only on window resize
- Fixed bookshelf overlapping with desk
  - Adjusted bookshelf position from `width * 0.05` to `width * 0.02`
  - Reduced bookshelf width to ensure clear separation from desk
- Fixed P5.js canvas not appearing until window resize
  - Canvas now properly initializes when game screen becomes visible
  - Added `canvasInitialized` flag to track initialization state
  - Game engine explicitly triggers canvas initialization after showing game screen
  - Draw loop checks for canvas initialization before rendering
  - Modified files: `scene-office.js`, `game-engine.js`

**Interactive Elements:**
- Fixed expandable cards button functionality (applications.html)
  - Root cause: HTML had inline onclick="toggleCard(this)" conflicting with event listeners
  - Removed all inline onclick attributes from HTML
  - Modified toggleCard() to directly toggle card state instead of calling button.click()
  - Refactored to use shared toggle function for both button and card clicks
  - Button click now properly expands/collapses content
  - Card click (anywhere except button) also toggles expansion
  - Both methods work independently without conflicts
  - Keyboard accessible with Enter/Space key support
  - Modified files: `interactive-elements.js`, `applications.html`

**Game UX Improvements:**
- Added auto-scroll to top when new scenario loads
  - Automatically scrolls to game screen top when scenario changes
  - Ensures users see metrics dashboard and new narrative content
  - Smooth scroll behavior for better user experience
  - Triggered on scenario load and when continuing from consequences
  - Modified file: `game-engine.js`

**Resources Page Enhancement:**
- Added Diamond Age book cover image display
  - Image floats left with text wrapping on desktop
  - Centered display on mobile devices
  - Retro styling with chunky border, box shadow, and vintage filter
  - Hover effect with subtle elevation
  - Location: `assets/images/the-diamond-age.png` (to be added by user)
