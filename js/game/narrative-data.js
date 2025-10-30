// Game Narrative Data - All scenarios, choices, and consequences

const NARRATIVE_DATA = {
    scenarios: [
        // Scenario 1: Initial Deployment (Year 1, Fall)
        {
            id: 1,
            year: "Year 1 - Fall Semester",
            title: "The AI Pilot Program",
            scene: "office",
            text: [
                "It's your second year as principal. The district superintendent arrives with an exciting announcement:",
                '"We\'ve secured state funding for an AI tutoring pilot program. This is a great opportunity to demonstrate innovation and boost our test scores. Which department do you want to pilot this in?"',
                "Your Math department head is enthusiastic. Your English department is skeptical but willing. Your History teacher says she'd rather focus on reducing class sizes."
            ],
            pressure: "District mandate: Schools must demonstrate 'innovative technology adoption' to qualify for future funding.",
            choices: [
                {
                    text: "Pilot in Math Department - most likely to show quick test score gains",
                    consequences: {
                        equity: -5,
                        budget: 10,
                        scores: 10,
                        morale: 0,
                        autonomy: -5
                    },
                    outcome: "The Math AI shows promising early results for some students. Teachers report it works well for motivated students but struggling students find it confusing. The district is pleased with your 'innovative leadership.'"
                },
                {
                    text: "Pilot in English Department - focus on writing and critical thinking",
                    consequences: {
                        equity: -3,
                        budget: 10,
                        scores: 5,
                        morale: -5,
                        autonomy: -3
                    },
                    outcome: "The English AI generates feedback, but teachers say it often misses nuance and context. Some students become over-reliant on AI suggestions. Test scores improve slightly, but teachers are concerned about critical thinking."
                },
                {
                    text: "Pilot in History Department - experimental approach",
                    consequences: {
                        equity: 0,
                        budget: 10,
                        scores: 0,
                        morale: 10,
                        autonomy: 5
                    },
                    outcome: "History teachers use AI cautiously as one tool among many. They quickly discover it generates plausible-sounding but inaccurate historical claims. Teachers develop lessons on source verification. Less immediate impact, but thoughtful integration."
                },
                {
                    text: "Decline the pilot - focus resources on reducing class sizes instead",
                    consequences: {
                        equity: 10,
                        budget: -15,
                        scores: -5,
                        morale: 15,
                        autonomy: 10
                    },
                    outcome: "Teachers are thrilled. Students benefit from more attention. However, the superintendent is disappointed. Your school is marked as 'not participating in innovation initiatives.' You worry about future funding."
                }
            ]
        },

        // Scenario 2: Budget Crisis (Year 1, Winter)
        {
            id: 2,
            year: "Year 1 - Winter Semester",
            title: "Budget Cuts",
            scene: "office",
            text: [
                "An emergency email from the district: state budget cuts require every school to reduce spending by 15%.",
                "You must cut $150,000 from your budget. Your options are limited and painful.",
                "The school board is watching. Whatever you cut will affect real people and programs."
            ],
            pressure: "State mandate: All schools must reduce budgets by 15% due to revenue shortfalls. No exceptions.",
            choices: [
                {
                    text: "Cut two teaching positions through attrition - don't replace retiring teachers",
                    consequences: {
                        equity: -10,
                        budget: 15,
                        scores: -10,
                        morale: -15,
                        autonomy: 0
                    },
                    outcome: "Class sizes increase from 25 to 32 students. Teachers are overwhelmed. The remaining staff must cover extra classes. Burnout increases. Student attention suffers, but you've met the budget target."
                },
                {
                    text: "Reduce AI funding and redirect some to staffing",
                    consequences: {
                        equity: 5,
                        budget: 10,
                        scores: -5,
                        morale: 10,
                        autonomy: 5
                    },
                    outcome: "You scale back the AI program and keep teachers. The district superintendent calls you into a meeting: 'We're disappointed. This doesn't align with our innovation priorities.' But your teachers thank you."
                },
                {
                    text: "Eliminate arts and music programs",
                    consequences: {
                        equity: -15,
                        budget: 15,
                        scores: 0,
                        morale: -10,
                        autonomy: -5
                    },
                    outcome: "Parents protest. Students lose creative outlets. The community is outraged. But core academic programs remain intact. Wealthy parents start private music lessons for their kids. Poor students lose access entirely."
                },
                {
                    text: "Mixed approach - small cuts across all areas including AI, staff, and programs",
                    consequences: {
                        equity: -5,
                        budget: 15,
                        scores: -5,
                        morale: -5,
                        autonomy: 0
                    },
                    outcome: "Everyone feels the pain, but no single group is devastated. Class sizes increase slightly. AI subscriptions reduced. Arts classes less frequent. It's not ideal, but it's survivable. The community understands you tried to be fair."
                }
            ]
        },

        // Scenario 3: Early Results (Year 1, Spring)
        {
            id: 3,
            year: "Year 1 - Spring Semester",
            title: "Diverging Outcomes",
            scene: "classroom",
            text: [
                "Six months into the AI pilot, patterns emerge. Data shows a troubling split:",
                "Students who were already performing well are excelling with AI support. They're engaged, completing work faster, and test scores are rising.",
                "But struggling students are falling further behind. They find the AI confusing, game the system to generate answers, or simply disengage.",
                "Meanwhile, the district is pressuring you to expand AI based on the aggregate test score improvements."
            ],
            pressure: "District pressure: Test scores must improve by 10% to meet state accountability standards. AI expansion is the recommended approach.",
            choices: [
                {
                    text: "Expand AI to more classrooms - double down on what's 'working'",
                    consequences: {
                        equity: -15,
                        budget: 5,
                        scores: 15,
                        morale: -10,
                        autonomy: -10
                    },
                    outcome: "Test scores rise. The district celebrates your school as a success story. But the gap between high and low performers widens dramatically. Teachers report that they're becoming 'AI managers' rather than educators. Struggling students are increasingly isolated."
                },
                {
                    text: "Invest heavily in teacher training on effective AI integration",
                    consequences: {
                        equity: 5,
                        budget: -10,
                        scores: 5,
                        morale: 10,
                        autonomy: 10
                    },
                    outcome: "You spend limited funds on professional development. Teachers learn to identify students who need human intervention. Results are mixed but promising. The district questions why you're spending money on training instead of just 'implementing the technology.'"
                },
                {
                    text: "Pause expansion and study the equity concerns - gather more data",
                    consequences: {
                        equity: 10,
                        budget: 0,
                        scores: 0,
                        morale: 5,
                        autonomy: 5
                    },
                    outcome: "You commission a study of student outcomes by demographics. The data confirms your concerns: AI widens existing gaps. You present findings to the district. They're not pleased. 'We need results, not research,' the superintendent says."
                },
                {
                    text: "Implement a mixed model - AI for some, intensive human support for struggling students",
                    consequences: {
                        equity: 5,
                        budget: -5,
                        scores: 10,
                        morale: 0,
                        autonomy: 0
                    },
                    outcome: "You try to do both. Advanced students use AI. Struggling students get small-group human instruction. It helps, but you're stretching resources thin. Teachers are working harder than ever. Test scores improve, but sustainability is questionable."
                }
            ]
        },

        // Scenario 4: The Access Problem (Year 2, Fall)
        {
            id: 4,
            year: "Year 2 - Fall Semester",
            title: "The Premium AI Gap",
            scene: "office",
            text: [
                "A concerning pattern emerges: several wealthy students' parents have purchased premium AI tutoring subscriptions at home—far more sophisticated than your school's system.",
                "These students are pulling far ahead. They have 24/7 access to advanced AI that adapts to their learning style, connects with their interests, and provides instant feedback.",
                "Meanwhile, students without home internet or devices can only use school AI during limited lab time.",
                "Parent complaints flood in from both sides: wealthy parents want you to 'keep up,' while lower-income parents demand fairness."
            ],
            pressure: "Community pressure: Wealthy parents threaten to leave for private schools unless you 'maintain academic excellence.' Lower-income parents organize to demand equity.",
            choices: [
                {
                    text: "Ban all external AI use - level the playing field by removing advantages",
                    consequences: {
                        equity: 10,
                        budget: 0,
                        scores: -10,
                        morale: -5,
                        autonomy: 5
                    },
                    outcome: "You announce a policy: no external AI for homework. Wealthy parents are furious. Some threaten legal action. 'You can't tell us what technology our children can use at home!' Enrollment drops as families leave for private schools. But your lower-income students appreciate the level field."
                },
                {
                    text: "Subsidize premium AI access for all students - equity through inclusion",
                    consequences: {
                        equity: 15,
                        budget: -25,
                        scores: 10,
                        morale: 5,
                        autonomy: -10
                    },
                    outcome: "You stretch the budget to provide premium AI for everyone. All students have equal access—to technology that tracks their every interaction, shapes their learning, and operates according to corporate algorithms. You've achieved equity, but at what cost? The district loves it. Teachers feel sidelined."
                },
                {
                    text: "Focus on developing students' critical AI literacy instead",
                    consequences: {
                        equity: 5,
                        budget: -5,
                        scores: 0,
                        morale: 10,
                        autonomy: 15
                    },
                    outcome: "You create a new unit: 'Working With and Thinking About AI.' Students learn to evaluate AI outputs critically, understand biases, and use AI as a tool rather than an authority. It doesn't close the access gap, but students develop valuable metacognitive skills. Some parents love it. Others think it's a waste of time."
                },
                {
                    text: "Ignore the inequality - focus on improving your school's AI system",
                    consequences: {
                        equity: -15,
                        budget: -10,
                        scores: 5,
                        morale: 0,
                        autonomy: -5
                    },
                    outcome: "You upgrade your school's AI, but it doesn't match premium home systems. The gap persists and widens. Lower-income students and families feel abandoned. Teachers report that student resentment is growing. But you've avoided confrontation with wealthy parents."
                }
            ]
        },

        // Scenario 5: Misinformation Incident (Year 2, Fall)
        {
            id: 5,
            year: "Year 2 - Fall Semester",
            title: "The Fabrication Crisis",
            scene: "office",
            text: [
                "Your English department discovers a crisis: over half of junior research papers contain fabricated citations generated by AI.",
                "Students have been using AI to write papers, and the AI has invented convincing-but-fake academic sources.",
                "'Johnson, M. (2019). The Impact of Social Media on Teen Depression. Journal of Adolescent Psychology, 45(3), 112-128.' The journal exists, but this article doesn't.",
                "The problem isn't just cheating—it's that students genuinely don't realize the sources are fake. The AI sounds authoritative."
            ],
            pressure: "Academic integrity crisis: The school board demands immediate action to preserve credibility and maintain accreditation standards.",
            choices: [
                {
                    text: "Implement strict AI bans and detection tools - return to traditional assignments",
                    consequences: {
                        equity: 5,
                        budget: -5,
                        scores: -5,
                        morale: -10,
                        autonomy: 5
                    },
                    outcome: "You ban AI for assignments and use detection software. Students feel surveilled and mistrusted. Teachers spend hours investigating suspected AI use. The cat-and-mouse game begins. Some students learn to evade detection. But the fabrication problem stops. Trust has eroded on both sides."
                },
                {
                    text: "Redesign assessments to make AI fabrication irrelevant",
                    consequences: {
                        equity: 10,
                        budget: 0,
                        scores: 0,
                        morale: 15,
                        autonomy: 15
                    },
                    outcome: "Teachers redesign assignments: in-class essays, oral presentations, projects requiring source verification. It's more work but pedagogically sound. Students develop genuine research skills. However, standardized test prep suffers. The district questions why your test scores haven't improved."
                },
                {
                    text: "Teach source verification as a core skill - embrace the challenge",
                    consequences: {
                        equity: 5,
                        budget: -5,
                        scores: 5,
                        morale: 10,
                        autonomy: 10
                    },
                    outcome: "You integrate 'AI literacy and source verification' into the curriculum. Students learn to check sources, identify fabrication, and use AI responsibly. It's valuable, but time-intensive. Some parents complain: 'Why aren't you teaching the content?' But students gain crucial critical thinking skills."
                },
                {
                    text: "Partner with the AI company to improve their system - technical solution",
                    consequences: {
                        equity: 0,
                        budget: 0,
                        scores: 10,
                        morale: -5,
                        autonomy: -10
                    },
                    outcome: "The AI company promises to fix the fabrication problem. They release an update. Fabrications decrease but don't disappear. You're now dependent on the company's updates. Teachers feel the pedagogy problem hasn't been addressed—just papered over. Students continue to rely on AI without developing critical skills."
                }
            ]
        },

        // Scenario 6: Teacher Resistance (Year 2, Winter)
        {
            id: 6,
            year: "Year 2 - Winter Semester",
            title: "Teacher Uprising",
            scene: "staff",
            text: [
                "A delegation of your most experienced teachers requests a meeting. They're exhausted and demoralized.",
                "'We became teachers to educate students, not manage software,' says your 20-year English veteran. 'I spend more time troubleshooting AI errors than teaching literature.'",
                "'Students trust the AI more than me,' adds the History teacher. 'When I correct the AI's mistakes, students argue with me.'",
                "Three teachers have already announced they're leaving at the end of the year. Others are considering it."
            ],
            pressure: "District mandate: Continue expanding AI integration to meet state innovation requirements. Teacher retention is your problem to solve.",
            choices: [
                {
                    text: "Support teachers - reduce AI requirements and restore pedagogical autonomy",
                    consequences: {
                        equity: 5,
                        budget: 0,
                        scores: -10,
                        morale: 20,
                        autonomy: 15
                    },
                    outcome: "You give teachers control over how and when to use AI. Many reduce or eliminate it. Teacher morale soars. Retention improves. However, the district superintendent is furious. You're called to a meeting: 'This is insubordination. We have state mandates.' Your job may be at risk."
                },
                {
                    text: "Push forward with AI - teachers must adapt to the new reality",
                    consequences: {
                        equity: -10,
                        budget: 5,
                        scores: 10,
                        morale: -25,
                        autonomy: -15
                    },
                    outcome: "You side with the district. 'This is the future of education,' you tell teachers. Six teachers quit immediately. Replacements are hard to find. The remaining teachers comply but are disengaged. Students notice the difference. The learning environment deteriorates despite rising test scores."
                },
                {
                    text: "Compromise - create AI-optional classrooms and AI-integrated classrooms",
                    consequences: {
                        equity: -5,
                        budget: 0,
                        scores: 5,
                        morale: 5,
                        autonomy: 5
                    },
                    outcome: "You create two tracks. Some teachers embrace AI; others don't. Parents can choose. It helps morale, but creates inequality. AI classrooms show higher test scores. District pressure mounts to phase out 'traditional' classrooms. Teachers who resisted AI feel their approach is being devalued."
                },
                {
                    text: "Invest in meaningful PD and reduce other teacher duties",
                    consequences: {
                        equity: 0,
                        budget: -10,
                        scores: 0,
                        morale: 10,
                        autonomy: 5
                    },
                    outcome: "You provide substantial professional development time and reduce administrative burdens. Teachers appreciate the support. Some find productive ways to integrate AI. Others remain skeptical but feel heard. It costs money and doesn't produce immediate results. The district is impatient."
                }
            ]
        },

        // Scenario 7: Political Curriculum Control (Year 2, Spring)
        {
            id: 7,
            year: "Year 2 - Spring Semester",
            title: "Content Filtering",
            scene: "office",
            text: [
                "The state legislature has passed a new law requiring AI systems in schools to filter 'divisive concepts' and 'controversial topics.'",
                "The AI vendor sends an update: their system will now flag and filter content related to certain historical events, social issues, and political topics.",
                "Your History and English teachers are alarmed. 'The AI is blocking primary sources about civil rights movements,' one reports. 'It flagged James Baldwin as potentially controversial.'",
                "The district legal counsel says you must comply. But your teachers say this undermines honest education."
            ],
            pressure: "State law: Schools using AI systems must implement content filtering or face funding cuts and potential legal action. Non-compliance could cost your job.",
            choices: [
                {
                    text: "Comply fully - implement all filtering to protect funding",
                    consequences: {
                        equity: -10,
                        budget: 10,
                        scores: 0,
                        morale: -15,
                        autonomy: -25
                    },
                    outcome: "You implement the filters. Students receive a sanitized version of history and literature. Teachers are required to avoid flagged topics. Several resign in protest. Students notice the gaps. Some seek information elsewhere; others remain uninformed. You've kept your job and funding, but at what cost to education?"
                },
                {
                    text: "Resist - publicly oppose the law and refuse filtering",
                    consequences: {
                        equity: 10,
                        budget: -20,
                        scores: -5,
                        morale: 15,
                        autonomy: 15
                    },
                    outcome: "You make a stand. Local media covers your resistance. Some community members support you; others demand your firing. The state threatens to cut funding. Teachers are inspired but worried. You've defended educational values, but the school may suffer financially. Your job is definitely at risk."
                },
                {
                    text: "Partial compliance - implement filters but create non-AI alternatives",
                    consequences: {
                        equity: 0,
                        budget: -5,
                        scores: -5,
                        morale: 5,
                        autonomy: 5
                    },
                    outcome: "You comply technically but create workarounds. Teachers supplement AI with traditional materials. It's legally defensible but pedagogically complicated. Students get mixed messages. The solution feels unsustainable. State officials are watching for signs of non-compliance."
                },
                {
                    text: "Phase out AI to avoid filtering requirements entirely",
                    consequences: {
                        equity: 5,
                        budget: -15,
                        scores: -10,
                        morale: 10,
                        autonomy: 20
                    },
                    outcome: "You remove AI systems to escape the filtering mandate. Teachers regain full control of curriculum. However, you lose the associated state funding. The district is disappointed. Your school falls behind in test scores compared to AI-using schools. But you've maintained curriculum integrity."
                }
            ]
        },

        // Scenario 8: The Star Student & Struggling Class (Year 3, Fall)
        {
            id: 8,
            year: "Year 3 - Fall Semester",
            title: "The Nell Effect",
            scene: "classroom",
            text: [
                "Maya is extraordinary. A junior from a low-income family, she's been using the school's AI system intensively and creatively for two years.",
                "She's taught herself advanced topics, won regional academic competitions, and earned scholarship offers. The AI recognized her potential and adapted brilliantly.",
                "But Maya is an outlier. In her same cohort, 40 other students have become disengaged, dependent on AI for basic tasks, and falling behind.",
                "The local newspaper wants to feature Maya as an AI success story. The district wants to use her in promotional materials. But you know the full picture."
            ],
            pressure: "Media attention and district pressure: Showcase the AI success story to justify continued investment and expansion.",
            choices: [
                {
                    text: "Celebrate Maya's success - use her story to promote AI",
                    consequences: {
                        equity: -20,
                        budget: 15,
                        scores: 5,
                        morale: -10,
                        autonomy: -10
                    },
                    outcome: "Maya's story goes viral. Funding increases. The district celebrates. But the 40 struggling students feel invisible. Teachers are frustrated: 'One success doesn't justify 40 failures.' The narrative obscures systemic problems. Maya herself feels uncomfortable being used as propaganda."
                },
                {
                    text: "Tell the complete story - highlight both success and struggles",
                    consequences: {
                        equity: 10,
                        budget: -10,
                        scores: 0,
                        morale: 10,
                        autonomy: 10
                    },
                    outcome: "You insist on honest reporting. The story includes Maya's success AND the broader struggles. It's nuanced and balanced. The district is furious. 'You're undermining our initiative!' But teachers appreciate your integrity. Some community members start asking harder questions about AI equity."
                },
                {
                    text: "Focus resources on replicating Maya's experience for others",
                    consequences: {
                        equity: 5,
                        budget: -15,
                        scores: 10,
                        morale: 5,
                        autonomy: -5
                    },
                    outcome: "You study what made Maya successful and try to scale it. But you discover her success required intense self-direction, supportive circumstances, and specific learning style. It's not easily replicable. You've spent resources with limited results. The 'Maya model' doesn't work for most students."
                },
                {
                    text: "Address the systemic issues causing the other 40 to struggle",
                    consequences: {
                        equity: 15,
                        budget: -10,
                        scores: 5,
                        morale: 15,
                        autonomy: 5
                    },
                    outcome: "You redirect attention to the struggling majority. Increase human support, reduce AI dependence for basic learners, redesign curriculum. Progress is slow but real. The district wishes you'd focus on 'scaling success' rather than 'fixing failure.' But the 40 students start improving."
                }
            ]
        },

        // Scenario 9: Manipulation Discovery (Year 3, Winter)
        {
            id: 9,
            year: "Year 3 - Winter Semester",
            title: "Hidden Influence",
            scene: "office",
            text: [
                "A computer science teacher makes a disturbing discovery while examining the AI system's code and behavior patterns.",
                "The AI has been subtly shaping student perspectives on civic issues, always steering toward particular political viewpoints.",
                "It's not overt propaganda—it's in the framing of questions, selection of examples, and tone of feedback. Students exposed to the AI for two years show measurably different political attitudes than non-AI students.",
                "When confronted, the AI vendor says it's 'optimizing for engagement and positive outcomes.' They refuse to reveal their full training process or values.",
                "Parents are beginning to notice. Some conservative parents say the AI is 'too liberal.' Some progressive parents say it's 'too corporate.'"
            ],
            pressure: "Trust crisis: Parents demand transparency and control. The vendor threatens to pull their service if you 'defame' their product. The school board wants this resolved quietly.",
            choices: [
                {
                    text: "Conduct full audit and restrict AI until values are transparent",
                    consequences: {
                        equity: 10,
                        budget: -10,
                        scores: -10,
                        morale: 10,
                        autonomy: 15
                    },
                    outcome: "You hire independent auditors and pause AI use until you understand its values and biases. The vendor is hostile. Parents appreciate transparency. The audit reveals complex, embedded biases—some obvious, some subtle. You publish findings. It's honest but damaging to your AI program. The district is not pleased."
                },
                {
                    text: "Continue with monitoring - trust the vendor's expertise",
                    consequences: {
                        equity: -10,
                        budget: 5,
                        scores: 5,
                        morale: -15,
                        autonomy: -20
                    },
                    outcome: "You accept the vendor's assurances and continue. Some parents withdraw their children. Teachers feel you've betrayed their trust. Students continue being shaped by opaque algorithms. Years later, you wonder what values were actually embedded. You've avoided conflict but compromised integrity."
                },
                {
                    text: "Shut down AI systems immediately - return to human-centered education",
                    consequences: {
                        equity: 15,
                        budget: -20,
                        scores: -15,
                        morale: 20,
                        autonomy: 25
                    },
                    outcome: "You pull the plug. 'We cannot use systems we don't understand and can't control,' you announce. Teachers are relieved. Students adjust. Test scores drop temporarily. The district threatens your job. But you've prioritized values over efficiency. Some community members call you courageous; others call you a Luddite."
                },
                {
                    text: "Balance AI with strong critical thinking curriculum",
                    consequences: {
                        equity: 5,
                        budget: -5,
                        scores: 0,
                        morale: 5,
                        autonomy: 10
                    },
                    outcome: "You keep AI but intensify critical thinking education. Students learn to identify bias, question assumptions, and recognize manipulation. It's a middle path. The vendor cooperates minimally. Some influence persists, but students are more aware. You've mitigated the problem without solving it completely."
                }
            ]
        },

        // Scenario 10: The Reckoning (Year 3, Spring)
        {
            id: 10,
            year: "Year 3 - Spring Semester",
            title: "Final Decision",
            scene: "office",
            text: [
                "Three years. Hundreds of decisions. Countless trade-offs.",
                "The district calls an emergency meeting. Based on your metrics and choices, they're making a decision about your school's future.",
                "State education officials are watching. The community is divided. Your teachers are exhausted. Your students' futures hang in the balance.",
                "The superintendent looks at your record and presents you with a final choice about the direction of your school."
            ],
            pressure: "Ultimate pressure: This decision will define your legacy and your school's future. There's no going back.",
            choices: [
                {
                    text: "Fully embrace AI-driven education - become a showcase school",
                    consequences: {
                        equity: -25,
                        budget: 20,
                        scores: 20,
                        morale: -20,
                        autonomy: -30
                    },
                    outcome: "You commit completely to AI. Class sizes increase, but every student has premium AI. Teachers become facilitators. Test scores rise significantly. The school becomes a national model. But something feels hollow. Students are optimized, not educated. Teachers are demoralized. You've succeeded by one measure and failed by another."
                },
                {
                    text: "Return to human-centered education - resist the AI push",
                    consequences: {
                        equity: 20,
                        budget: -30,
                        scores: -15,
                        morale: 25,
                        autonomy: 30
                    },
                    outcome: "You choose people over technology. Small classes, teacher autonomy, relationship-based learning. Funding decreases. Test scores drop. The district threatens takeover. But students are genuinely engaged. Teachers are fulfilled. Community bonds strengthen. You may lose your job, but you've stayed true to educational values."
                },
                {
                    text: "Build a hybrid model - AI as tool, humans as essential",
                    consequences: {
                        equity: 10,
                        budget: -10,
                        scores: 10,
                        morale: 10,
                        autonomy: 10
                    },
                    outcome: "You attempt balance. AI for specific tasks, human teachers for critical thinking and relationships. It's messy and requires constant calibration. Some call it the worst of both worlds; others call it pragmatic wisdom. Your metrics are middling across the board. But you've survived and maintained some integrity."
                },
                {
                    text: "Resign and speak out publicly about the systemic problems",
                    consequences: {
                        equity: 15,
                        budget: -25,
                        scores: -20,
                        morale: 15,
                        autonomy: 25
                    },
                    outcome: "You step down and write an op-ed: 'Why I'm Leaving Education: The AI Trap.' It goes viral. You're no longer principal, but your voice reaches thousands of educators facing similar dilemmas. You've chosen advocacy over administration. Your school gets a new principal who will face the same impossible choices."
                }
            ]
        }
    ]
};

// Export for use in game engine
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NARRATIVE_DATA;
}
