// Game Endings - Multiple endings based on final metrics and choices

const ENDINGS = {
    // Determine ending based on final metrics
    determineEnding: function(metrics) {
        // Calculate key indicators
        const avg = this.average(Object.values(metrics));
        const highestMetric = this.getHighest(metrics);
        const lowestMetric = this.getLowest(metrics);

        // Check for specific ending conditions
        if (metrics.autonomy <= 20 && metrics.scores >= 70) {
            return this.endings.corporateTakeover;
        }

        if (metrics.equity <= 30 && metrics.scores >= 70) {
            return this.endings.nellEffect;
        }

        if (metrics.morale <= 25) {
            return this.endings.burnoutDeparture;
        }

        if (metrics.autonomy >= 70 && metrics.morale >= 70 && avg < 60) {
            return this.endings.educationalOasis;
        }

        if (metrics.scores >= 75 && metrics.morale <= 40) {
            return this.endings.testScoreSuccess;
        }

        if (metrics.equity >= 70 && metrics.morale >= 65) {
            return this.endings.equityAchievement;
        }

        if (avg >= 60) {
            return this.endings.pragmaticBalance;
        }

        // Default ending
        return this.endings.democraticResistance;
    },

    // Helper functions
    average: function(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    },

    getHighest: function(metrics) {
        return Object.entries(metrics).reduce((a, b) => b[1] > a[1] ? b : a);
    },

    getLowest: function(metrics) {
        return Object.entries(metrics).reduce((a, b) => b[1] < a[1] ? b : a);
    },

    // All possible endings
    endings: {
        corporateTakeover: {
            title: "Corporate Takeover",
            description: [
                "Your school has become a showcase for AI-driven education. Test scores are impressive. The district celebrates you as a visionary.",
                "But at what cost?",
                "Teachers have been reduced to facilitators, managing systems they didn't design and don't fully control. Class sizes have increased because 'AI can handle more students.' Pedagogical autonomy is gone—the curriculum is determined by algorithms optimized for measurable outcomes.",
                "Students are learning, but are they being educated? They can pass tests, but struggle with ambiguity, debate, and independent thought. The humanities have become data points.",
                "You succeeded in the metrics that matter to the district. But late at night, you wonder: did you preserve education, or replace it with something else?"
            ],
            reflection: [
                "What did you sacrifice to achieve high test scores?",
                "Who benefited most from the AI systems—students, or the companies providing them?",
                "Could you have resisted the pressure to optimize everything?",
                "What would it take to reclaim pedagogical autonomy once it's lost?"
            ]
        },

        nellEffect: {
            title: "The Nell Effect",
            description: [
                "A handful of your students flourished spectacularly with AI. They've won scholarships, national competitions, and media attention. The district uses them in promotional materials.",
                "But the majority struggled and fell behind.",
                "The gap between high-performing and struggling students has widened dramatically. Like Nell in *The Diamond Age*, a few exceptional students with the right combination of circumstances, motivation, and support used AI brilliantly. Everyone else got left behind.",
                "Wealthy students who could afford premium AI at home pulled further ahead. Students without resources or self-direction became increasingly dependent on AI for basic tasks. The middle disappeared.",
                "You created a few stars, but failed the majority. Educational equity was sacrificed for showcase success stories."
            ],
            reflection: [
                "Why did AI work brilliantly for some students but fail others?",
                "What support systems separated success from struggle?",
                "Could you have prevented the widening inequality?",
                "Is technology that only helps already-advantaged students worth implementing?"
            ]
        },

        burnoutDeparture: {
            title: "Burnout & Departure",
            description: [
                "The pressure broke you—and your teachers.",
                "Caught between impossible demands—raise test scores, cut budgets, implement AI, maintain equity, satisfy parents, comply with mandates—you tried to do everything. In the end, you did nothing well.",
                "Teachers left in droves. Those who remained are demoralized and exhausted. Students sense the dysfunction. The learning environment has deteriorated.",
                "You're updating your résumé. Maybe it's time to leave education entirely. The system isn't designed for success—it's designed to extract labor until people break.",
                "You're not alone. Thousands of educators face these same impossible conditions. But that doesn't make it hurt less."
            ],
            reflection: [
                "What were the competing pressures that made your job impossible?",
                "Who had the power in these systems? Who didn't?",
                "Could any individual principal succeed in these conditions?",
                "What systemic changes would be needed to make this role sustainable?"
            ]
        },

        educationalOasis: {
            title: "Educational Oasis",
            description: [
                "Your school has become an island of sanity in a sea of AI hype.",
                "You maintained small class sizes, teacher autonomy, and human-centered pedagogy. Students are genuinely engaged. Teachers are fulfilled. The community trusts you.",
                "But you're surrounded. Neighboring schools have fully adopted AI and show higher test scores. The district questions your approach. Funding is tight. Your position is precarious.",
                "You've proven that an alternative is possible—but can it survive?",
                "Parents seek out your school, but you can't accommodate everyone. You've created something valuable, but it's fragile and may not last. The pressure to conform continues."
            ],
            reflection: [
                "What made your approach possible? Could it be scaled?",
                "How do you maintain values-driven education in a metrics-driven system?",
                "What would it take for your oasis to become the norm rather than the exception?",
                "Can individual schools resist systemic pressure, or is collective action necessary?"
            ]
        },

        testScoreSuccess: {
            title: "Test Score Success",
            description: [
                "Congratulations—your test scores are the highest in the district.",
                "The numbers are undeniable. Standardized assessments show significant gains. The district showcases your school. Your job is secure. The state is pleased.",
                "But at what human cost?",
                "Teacher morale has collapsed. Many of your best educators have left or plan to. Students are stressed and anxious. The joy of learning has been replaced by optimization for assessment.",
                "Parents notice their children are good at taking tests but struggle with creativity, independent thinking, and genuine engagement. Something essential has been lost in pursuit of measurable success.",
                "You won the game the system designed—but was it worth playing?"
            ],
            reflection: [
                "What aspects of education can't be measured by test scores?",
                "How did the focus on metrics change what happened in classrooms?",
                "Who defines success in education—and why?",
                "Can you have high test scores AND genuine learning, or are they in tension?"
            ]
        },

        equityAchievement: {
            title: "Equity Achievement",
            description: [
                "Against the odds, you've made real progress on educational equity.",
                "The gaps between privileged and disadvantaged students have narrowed. All students have access to quality education and human support. Teachers are empowered and engaged. The school culture is healthy.",
                "It wasn't easy or quick. You made hard choices, fought the district on some mandates, spent money carefully, and prioritized people over technology.",
                "The results aren't perfect. Test scores are decent but not spectacular. Budget is tight. Some innovations were sacrificed. But the fundamentals are sound.",
                "Most importantly: students are learning, teachers are teaching, and everyone has a fair shot. That's what education is supposed to be."
            ],
            reflection: [
                "What decisions most contributed to equity gains?",
                "What trade-offs did you make to achieve this outcome?",
                "How can this approach be protected and sustained?",
                "What would it take to make equity the default rather than the exception?"
            ]
        },

        democraticResistance: {
            title: "Democratic Resistance",
            description: [
                "Your journey led you to a realization: these problems can't be solved by individual principals making good choices. They're systemic.",
                "You've connected with other educators, parents, and students facing similar dilemmas. Together, you're organizing for change.",
                "You're advocating for: teacher voice in AI adoption decisions, equitable funding, protection of pedagogical autonomy, transparency in ed-tech systems, and democratic governance of education.",
                "Your school's metrics are mixed. You didn't 'win' by conventional measures. But you've helped build a movement for a different kind of education—one that serves students and teachers, not test scores and tech companies.",
                "The struggle continues, but you're not alone."
            ],
            reflection: [
                "Why couldn't individual good decisions solve these problems?",
                "What systemic changes are needed to transform education?",
                "Who should have power in educational decision-making?",
                "How can educators build collective power to shape policy?"
            ]
        },

        pragmaticBalance: {
            title: "Pragmatic Balance",
            description: [
                "You threaded the needle. Your metrics are solidly in the middle across the board—not excellent, but not disastrous.",
                "You used AI selectively, maintained reasonable teacher autonomy, kept equity concerns in mind, met most budget requirements, and produced acceptable test scores.",
                "It's not inspiring, but it's sustainable. Your teachers haven't burned out. Students are learning adequately. The community is satisfied. The district isn't celebrating you, but they're not targeting you either.",
                "Some call this compromise. Others call it cowardice. You call it survival.",
                "The question is: can incremental moderation lead to genuine improvement, or does it just maintain inadequate systems?"
            ],
            reflection: [
                "Is pragmatic compromise a valid strategy or a cop-out?",
                "What did you avoid by staying in the middle?",
                "Can gradual, balanced approaches lead to meaningful change?",
                "When is compromise wisdom, and when is it complicity?"
            ]
        }
    }
};

// Export for use in game engine
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENDINGS;
}
