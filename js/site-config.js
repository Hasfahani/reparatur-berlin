(function () {
    window.SITE_CONFIG = {
        brand: {
            name: "FixWerk Berlin",
            nameEN: "FixWerk Berlin",
            tagline: "Reparaturservice für Haushalte in Berlin",
            taglineEN: "Repair service for households across Berlin",
            city: "Berlin",
            countryCode: "DE",
            theme: {
                primary: "#c85d2f",
                primaryDark: "#8e3d1d",
                primarySoft: "#fbe4d7",
                heading: "#171412",
                text: "#342f2c",
                textMuted: "#6c635c",
                surface: "#fffdf9",
                surfaceAlt: "#f4eee7",
                surfaceDark: "#201c18",
                border: "#e4d6c9",
                success: "#2d6e49",
                highlight: "#e9bb62"
            }
        },
        contact: {
            phone: "+493012345678",
            phoneDisplay: "+49 30 12345678",
            email: "kontakt@fixwerk-berlin.de",
            whatsapp: "493012345678",
            domain: "fixwerk-berlin.de",
            openingHours: "Mo–Fr 09:00-18:00, Sa 10:00-14:00",
            addressLines: ["Invalidenstraße 120"],
            postalCode: "10115",
            city: "Berlin"
        },
        districts: [
            "Mitte",
            "Prenzlauer Berg",
            "Friedrichshain",
            "Kreuzberg",
            "Neukölln",
            "Charlottenburg",
            "Schöneberg",
            "Moabit",
            "Wedding",
            "Pankow"
        ],
        metrics: {
            de: [
                { value: "Berlinweit", label: "Einsätze für viele Berliner Haushalte mit klarer lokaler Ausrichtung" },
                { value: "Vor Ort", label: "Fehlerdiagnose und Einschätzung direkt bei Ihnen oder nach Geräteart per Rücksprache" },
                { value: "Direkt", label: "Telefon, E-Mail und Anfrageformular sind ohne Umwege erreichbar" }
            ],
            en: [
                { value: "Berlin-wide", label: "Local repair coverage for households across Berlin" },
                { value: "On-site", label: "Initial diagnostics and practical next steps at your location when needed" },
                { value: "Direct", label: "Phone, email and request form are always easy to reach" }
            ]
        },
        trustBadges: {
            de: [
                "Haushaltsgeräte und kleinere Reparaturen",
                "Transparente Erstberatung ohne Umwege",
                "Ruhiger, vertrauensvoller Auftritt mit Berlin-Fokus",
                "Schnelle Kontaktaufnahme per Telefon, E-Mail oder WhatsApp"
            ],
            en: [
                "Appliance repair and practical household support",
                "Clear first assessment without unnecessary friction",
                "Berlin-focused positioning with a calm premium feel",
                "Fast contact by phone, email or WhatsApp"
            ]
        },
        services: {
            de: [
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.5"/><circle cx="12" cy="13" r="4"/><circle cx="8" cy="6" r="0.75" fill="currentColor" stroke="none"/><circle cx="11" cy="6" r="0.75" fill="currentColor" stroke="none"/></svg>',
                    title: "Waschmaschinen-Reparatur",
                    copy: "Wenn die Maschine nicht mehr abpumpt, schleudert oder Wasser verliert, helfen wir mit einer klaren Ersteinschätzung und einem planbaren nächsten Schritt."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><line x1="3" y1="7" x2="21" y2="7"/><path d="M8 12v5M12 11v6M16 12v5"/><path d="M6 4.5h3"/></svg>',
                    title: "Geschirrspüler-Reparatur",
                    copy: "Bei störenden Fehlermeldungen, schlechtem Reinigungsergebnis oder Undichtigkeiten prüfen wir, ob eine sinnvolle Reparatur möglich ist."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="9" y1="5" x2="9" y2="7"/><line x1="9" y1="13" x2="9" y2="17"/></svg>',
                    title: "Kühlschrank & Gefriergerät",
                    copy: "Kühlt nicht mehr richtig, bildet Eis oder läuft aus? Wir prüfen Kühlschränke und Gefriergeräte und geben eine ehrliche Einschätzung zu Reparatur und Kosten."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="5" y="12" width="14" height="7" rx="1"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/></svg>',
                    title: "Backofen- und Herdservice",
                    copy: "Ob fehlende Hitze, ungleichmäßiges Backen oder ausfallende Kochfelder: wir sorgen für Orientierung und eine saubere Reparaturentscheidung."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
                    title: "Kleingeräte-Reparatur",
                    copy: "Auch Mikrowellen, Wasserkocher, Kaffeemaschinen und andere Haushaltskleingeräte werden geprüft und wenn möglich fachgerecht repariert."
                }
            ],
            en: [
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.5"/><circle cx="12" cy="13" r="4"/><circle cx="8" cy="6" r="0.75" fill="currentColor" stroke="none"/><circle cx="11" cy="6" r="0.75" fill="currentColor" stroke="none"/></svg>',
                    title: "Washing machine repair",
                    copy: "If the machine will not drain, spin or stay watertight, we help with a practical first assessment and a clear next step."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><line x1="3" y1="7" x2="21" y2="7"/><path d="M8 12v5M12 11v6M16 12v5"/><path d="M6 4.5h3"/></svg>',
                    title: "Dishwasher repair",
                    copy: "For recurring error messages, weak cleaning results or leaks, we review whether a repair is sensible and how to proceed."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="9" y1="5" x2="9" y2="7"/><line x1="9" y1="13" x2="9" y2="17"/></svg>',
                    title: "Fridge & freezer repair",
                    copy: "Not cooling properly, icing over or leaking water? We assess the fault and give you an honest answer on repairability and cost."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="5" y="12" width="14" height="7" rx="1"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/></svg>',
                    title: "Oven & stove repair",
                    copy: "From heating issues to uneven baking or faulty hob zones, the goal is a realistic diagnosis and a clear repair path."
                },
                {
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
                    title: "Small appliances",
                    copy: "Microwaves, kettles, coffee machines and other household appliances — checked and repaired where possible with the same straightforward service."
                }
            ]
        },
        deviceGroups: {
            de: [
                "Waschmaschine",
                "Geschirrspüler",
                "Trockner",
                "Backofen",
                "Kühlschrank",
                "Gefriergerät",
                "Mikrowelle",
                "Kleingeräte"
            ],
            en: [
                "Washing machine",
                "Dishwasher",
                "Dryer",
                "Oven",
                "Refrigerator",
                "Freezer",
                "Microwave",
                "Small appliances"
            ]
        },
        reasons: {
            de: [
                {
                    title: "Verständliche Kommunikation",
                    copy: "Kunden sehen sofort, wie sie FixWerk Berlin erreichen, welche Angaben hilfreich sind und wie die Anfrage weiterläuft."
                },
                {
                    title: "Seriöser erster Eindruck",
                    copy: "Die Gestaltung wirkt hochwertig und lokal verankert, ohne übertrieben oder reisserisch zu sein."
                },
                {
                    title: "Praktisch für den Alltag",
                    copy: "Kurze Formulare, gut sichtbare CTAs und mobile Erreichbarkeit machen die Seite alltagstauglich für Berliner Haushalte."
                }
            ],
            en: [
                {
                    title: "Clear communication",
                    copy: "Visitors can instantly see how to reach FixWerk Berlin, what to send and what the next step looks like."
                },
                {
                    title: "Serious first impression",
                    copy: "The design feels premium and local without becoming loud, exaggerated or overly sales-driven."
                },
                {
                    title: "Practical for everyday needs",
                    copy: "Short forms, visible CTAs and mobile-friendly contact options make the site useful in real-life repair situations."
                }
            ]
        },
        process: {
            de: [
                {
                    title: "Anfrage senden",
                    copy: "Sie nennen Gerät, Problem, Bezirk und eine mögliche Erreichbarkeit."
                },
                {
                    title: "Rückmeldung erhalten",
                    copy: "FixWerk Berlin meldet sich zur Ersteinschätzung, mit Fragen zum Gerät oder zur Terminabstimmung."
                },
                {
                    title: "Nächsten Schritt abstimmen",
                    copy: "Je nach Fall folgt ein Vor-Ort-Termin, eine weitere Prüfung oder eine klare Empfehlung zum weiteren Vorgehen."
                }
            ],
            en: [
                {
                    title: "Send your request",
                    copy: "Share the appliance, issue, district and the best way to reach you."
                },
                {
                    title: "Receive a response",
                    copy: "FixWerk Berlin gets back to you with an initial assessment, follow-up questions or scheduling options."
                },
                {
                    title: "Confirm the next step",
                    copy: "Depending on the case, the next step may be an on-site visit, further review or a practical recommendation."
                }
            ]
        },
        testimonials: {
            de: [
                {
                    quote: "Schon auf den ersten Blick wirkt der Betrieb seriös und gut erreichbar. Genau so sucht man einen Reparaturservice in Berlin.",
                    author: "Maria S., Berlin-Mitte",
                    role: "Beispielstimme für diese Präsentationsversion"
                },
                {
                    quote: "Mir gefällt, dass sofort klar ist, welche Angaben sinnvoll sind und wie die Kontaktaufnahme weitergeht.",
                    author: "Jonas K., Berlin-Pankow",
                    role: "Beispielstimme für diese Präsentationsversion"
                },
                {
                    quote: "Die Seite fühlt sich deutlich hochwertiger an als typische lokale Reparaturseiten und bleibt trotzdem angenehm sachlich.",
                    author: "Sabine R., Berlin-Charlottenburg",
                    role: "Beispielstimme für diese Präsentationsversion"
                }
            ],
            en: [
                {
                    quote: "The business feels credible and easy to reach from the first screen, which is exactly what you want from a local repair service.",
                    author: "Maria S., Berlin-Mitte",
                    role: "Sample voice for this presentation version"
                },
                {
                    quote: "I like that it is immediately clear what information to send and what happens after the enquiry.",
                    author: "Jonas K., Berlin-Pankow",
                    role: "Sample voice for this presentation version"
                },
                {
                    quote: "It feels more premium than most local repair websites while still staying calm and believable.",
                    author: "Sabine R., Berlin-Charlottenburg",
                    role: "Sample voice for this presentation version"
                }
            ]
        },
        faq: {
            de: [
                {
                    q: "Welche Reparaturen übernimmt FixWerk Berlin?",
                    a: "Die Website ist aktuell auf Haushaltsgeräte und kleinere Reparaturen ausgerichtet, zum Beispiel Waschmaschinen, Geschirrspüler, Öfen, Kühlgeräte und ähnliche Alltagsgeräte."
                },
                {
                    q: "Bieten Sie Vor-Ort-Service in Berlin an?",
                    a: "Ja, für viele Anfragen ist eine Vor-Ort-Prüfung in Berlin sinnvoll. Ob ein Einsatz direkt vor Ort oder ein anderer Ablauf passt, wird nach der ersten Schilderung abgestimmt."
                },
                {
                    q: "Wie schnell kann ich eine Anfrage stellen?",
                    a: "Telefon, E-Mail und Formular sind so aufgebaut, dass Sie Ihr Anliegen in wenigen Minuten übermitteln können."
                },
                {
                    q: "Wird das Gerät vor einer Reparatur geprüft?",
                    a: "Ja, vor einer Reparaturempfehlung geht es immer zuerst um eine nachvollziehbare Diagnose und eine realistische Einschätzung."
                },
                {
                    q: "Welche Informationen sollte ich mitsenden?",
                    a: "Hilfreich sind Geräteart, Marke oder Modell, eine kurze Fehlerbeschreibung, Ihr Bezirk in Berlin und Zeiten für einen Rückruf."
                },
                {
                    q: "Welche Berliner Bezirke werden bedient?",
                    a: "Der Fokus liegt auf vielen innerstädtischen und angrenzenden Bezirken in Berlin. Details zum Einsatzgebiet sind auf der Website aufgeführt."
                }
            ],
            en: [
                {
                    q: "What kind of repairs does FixWerk Berlin handle?",
                    a: "The website is currently positioned around household appliances and small repair jobs such as washing machines, dishwashers, ovens, cooling appliances and similar everyday equipment."
                },
                {
                    q: "Do you offer on-site service in Berlin?",
                    a: "Yes. For many issues an on-site check in Berlin is the most practical option. The best service route is confirmed after the first enquiry."
                },
                {
                    q: "How quickly can I send a request?",
                    a: "Phone, email and the request form are all designed so you can submit the essentials within a few minutes."
                },
                {
                    q: "Do you inspect the appliance before recommending a repair?",
                    a: "Yes. The process starts with a realistic diagnosis and a clear assessment before any repair recommendation is made."
                },
                {
                    q: "What information should I include?",
                    a: "Helpful details include the appliance type, brand or model, a short description of the issue, your Berlin district and the best time for a callback."
                },
                {
                    q: "Which districts do you cover?",
                    a: "The focus is on many central and surrounding districts in Berlin. The current coverage area is listed on the site."
                }
            ]
        },
        contactHighlights: {
            de: [
                "Geräteart und kurze Fehlerbeschreibung",
                "Bezirk oder Postleitzahl in Berlin",
                "Marke oder Modell, falls bekannt",
                "Wunschzeit für Rückruf oder Termin"
            ],
            en: [
                "Appliance type and a short issue summary",
                "Berlin district or postcode",
                "Brand or model if known",
                "Preferred callback or appointment time"
            ]
        },
        premiumSignals: {
            de: [
                {
                    title: "Klare Anfrageführung",
                    copy: "Die Seite führt Besucher ohne Suchaufwand zum passenden Kontaktweg."
                },
                {
                    title: "Sichtbarer Berlin-Bezug",
                    copy: "Standort, Bezirke und Servicebezug fühlen sich lokal und glaubwürdig an."
                },
                {
                    title: "Ruhige Premium-Anmutung",
                    copy: "Wertige Gestaltung und klare Sprache stärken das Vertrauen, ohne aufdringlich zu wirken."
                }
            ],
            en: [
                {
                    title: "Clear enquiry flow",
                    copy: "The site moves visitors toward the right contact option without extra friction."
                },
                {
                    title: "Visible Berlin relevance",
                    copy: "Location, districts and service language feel genuinely local and believable."
                },
                {
                    title: "Calm premium look",
                    copy: "Refined visuals and direct language build trust without becoming pushy."
                }
            ]
        },
        differentiators: {
            de: [
                {
                    title: "Für echte Haushaltsprobleme gedacht",
                    copy: "Die Inhalte sprechen Kunden an, die schnell und verständlich Hilfe für ihren Alltag brauchen."
                },
                {
                    title: "Seriös statt marktschreierisch",
                    copy: "FixWerk Berlin wirkt professionell, lokal und erreichbar, ohne mit leeren Werbeversprechen zu arbeiten."
                },
                {
                    title: "Konsequent auf Kontakt ausgerichtet",
                    copy: "Von Hero bis Footer unterstützt jede Sektion die Anfrage, den Anruf oder den nächsten Schritt."
                }
            ],
            en: [
                {
                    title: "Designed for real household issues",
                    copy: "The content speaks to customers who need quick, practical repair help for everyday problems."
                },
                {
                    title: "Serious instead of shouty",
                    copy: "FixWerk Berlin feels professional, local and reachable without leaning on empty sales promises."
                },
                {
                    title: "Built around contact intent",
                    copy: "From hero to footer, each section supports the next call, form submission or follow-up step."
                }
            ]
        },
        coverage: {
            de: "FixWerk Berlin ist in vielen zentralen Berliner Bezirken im Einsatz, darunter Mitte, Pankow, Friedrichshain, Kreuzberg, Charlottenburg, Schöneberg, Moabit und angrenzende Wohngebiete. So bleibt der Auftritt lokal, konkret und für Haushalte in Berlin sofort nachvollziehbar.",
            en: "FixWerk Berlin is positioned for many central Berlin districts including Mitte, Pankow, Friedrichshain, Kreuzberg, Charlottenburg, Schöneberg, Moabit and nearby residential areas. This keeps the service footprint local, concrete and easy to understand."
        },
        legal: {
            owner: "FixWerk Berlin, Demo-Präsentation",
            representative: "Daniel Krause",
            vatId: "wird mit den finalen Unternehmensdaten ergänzt"
        }
    };
})();



