/*
 * Central placeholder-first website configuration.
 *
 * Update this file when the final business details are ready.
 * The site reads these values for visible copy, contact links,
 * reusable sections and SEO placeholders.
 */

(function () {
    const PLACEHOLDERS = {
        BUSINESS_NAME: "{{BUSINESS_NAME}}",
        PHONE_NUMBER: "{{PHONE_NUMBER}}",
        PHONE_DISPLAY: "{{PHONE_NUMBER}}",
        EMAIL: "{{EMAIL}}",
        WHATSAPP_NUMBER: "{{WHATSAPP_NUMBER}}",
        DOMAIN: "{{DOMAIN}}",
        ADDRESS_LINE_1: "{{ADDRESS_LINE_1}}",
        ADDRESS_LINE_2: "{{ADDRESS_LINE_2}}",
        POSTAL_CODE: "{{POSTAL_CODE}}",
        CITY: "{{CITY}}",
        OPENING_HOURS: "{{OPENING_HOURS}}",
        PRIMARY_SERVICE: "{{PRIMARY_SERVICE}}",
        SERVICE_LIST: "{{SERVICE_LIST}}",
        CTA_PRIMARY: "{{CTA_PRIMARY}}",
        CTA_SECONDARY: "{{CTA_SECONDARY}}",
        LEGAL_OWNER: "{{LEGAL_OWNER}}",
        LEGAL_REPRESENTATIVE: "{{LEGAL_REPRESENTATIVE}}",
        VAT_ID: "{{VAT_ID}}"
    };

    window.SITE_CONFIG = {
        placeholders: PLACEHOLDERS,
        brand: {
            name: PLACEHOLDERS.BUSINESS_NAME,
            nameEN: PLACEHOLDERS.BUSINESS_NAME,
            tagline: "Berlin service template",
            taglineEN: "Berlin repair template",
            city: "Berlin",
            countryCode: "DE",
            theme: {
                primary: "#d36336",
                primaryDark: "#9f3d1d",
                primarySoft: "#fde7db",
                heading: "#161616",
                text: "#343434",
                textMuted: "#666666",
                surface: "#fffdf9",
                surfaceAlt: "#f5f0ea",
                surfaceDark: "#1d1f23",
                border: "#e8d8cb",
                success: "#25734d",
                highlight: "#f3c56b"
            }
        },
        contact: {
            phone: PLACEHOLDERS.PHONE_NUMBER,
            phoneDisplay: PLACEHOLDERS.PHONE_DISPLAY,
            email: PLACEHOLDERS.EMAIL,
            whatsapp: PLACEHOLDERS.WHATSAPP_NUMBER,
            domain: PLACEHOLDERS.DOMAIN,
            openingHours: PLACEHOLDERS.OPENING_HOURS,
            addressLines: [PLACEHOLDERS.ADDRESS_LINE_1, PLACEHOLDERS.ADDRESS_LINE_2],
            postalCode: PLACEHOLDERS.POSTAL_CODE,
            city: PLACEHOLDERS.CITY
        },
        districts: ["Mitte", "Prenzlauer Berg", "Friedrichshain", "Kreuzberg", "Neukölln", "Charlottenburg", "Schöneberg", "Tempelhof", "Pankow", "Wedding", "Steglitz", "Lichtenberg"],
        metrics: {
            de: [
                { value: "Berlinweit", label: "Lokale Präsenz mit klarer Ausrichtung auf Suchanfragen aus Berlin" },
                { value: "Premium", label: "Strukturiert für Vertrauen, Qualität und einen starken ersten Eindruck" },
                { value: "Flexibel", label: "In wenigen Minuten auf Marke, Servicefokus und Kontaktdaten anpassbar" }
            ],
            en: [
                { value: "Berlin-wide", label: "Coverage with strong local positioning" },
                { value: "Clear", label: "Communication around timing, process and next steps" },
                { value: "Flexible", label: "Template ready for changing services and branding" }
            ]
        },
        trustBadges: {
            de: [
                "Klarer Weg von der Suchanfrage bis zur Kontaktaufnahme",
                "Berlin-Fokus für starke lokale Relevanz",
                "Premium-Auftritt statt generischer Handwerker-Optik",
                "Vor-Ort-, Werkstatt- oder Hybridmodell flexibel darstellbar"
            ],
            en: [
                "Structured enquiries and clear follow-up",
                "Berlin-focused setup for local visibility",
                "Easy to adapt for on-site or workshop service",
                "CTA-focused template for faster lead capture"
            ]
        },
        services: {
            de: [
                {
                    title: "{{PRIMARY_SERVICE}}",
                    copy: "Die Hauptleistung steht bewusst als sauberer Platzhalter bereit und kann direkt auf Ihr finales Kerngeschäft oder Ihre profitabelste Servicekategorie zugeschnitten werden."
                },
                {
                    title: "Reparaturen mit lokalem Vertrauensaufbau",
                    copy: "Die Karten funktionieren für Waschmaschinen, Geschirrspüler, Elektronik, Handyreparaturen oder andere Felder, ohne wie eine austauschbare Vorlage zu wirken."
                },
                {
                    title: "Fehlerdiagnose, Anfrage und Terminlogik",
                    copy: "Die Seite führt Interessenten mit klaren Schritten von der Suchanfrage über das Problemverständnis bis zur Kontaktaufnahme oder Terminvereinbarung."
                },
                {
                    title: "Berlin als echter Conversion-Hebel",
                    copy: "Bezirke, Zielgruppen, Einsatzgebiete und lokale Suchintentionen sind bereits eingebaut und können später präzise auf Ihre Marktposition geschärft werden."
                }
            ],
            en: [
                {
                    title: "{{PRIMARY_SERVICE}}",
                    copy: "The main service stays editable so you can later align the website with the final business focus."
                },
                {
                    title: "Appliance and everyday repair work",
                    copy: "This card structure fits washing machines, dishwashers, dryers, ovens, electronics or other repair categories."
                },
                {
                    title: "Diagnosis and clear next steps",
                    copy: "Visitors are guided into a request flow with strong clarity, without hardcoded promises or fixed pricing claims."
                },
                {
                    title: "Service across Berlin",
                    copy: "Local relevance is already built in and can later be refined for districts, niches or specialisations."
                }
            ]
        },
        deviceGroups: {
            de: ["Waschmaschine", "Geschirrspüler", "Trockner", "Herd und Backofen", "Kühlgeräte", "Kleingeräte", "Elektronik", "Weitere Leistungen auf Anfrage"],
            en: ["Washing machine", "Dishwasher", "Dryer", "Oven and stove", "Cooling appliances", "Small appliances", "Electronics", "Additional services on request"]
        },
        reasons: {
            de: [
                {
                    title: "Vertrauen schon vor dem ersten Anruf",
                    copy: "Die Seite kommuniziert klar, wertig und ruhig. Genau das senkt Zweifel und erhöht die Wahrscheinlichkeit, dass Besucher tatsächlich Kontakt aufnehmen."
                },
                {
                    title: "Schneller Weg zur Anfrage",
                    copy: "CTA, Formulare und Kontaktmöglichkeiten sind sichtbar, mobilfreundlich und auf lokale Suchanfragen mit hoher Handlungsabsicht ausgerichtet."
                },
                {
                    title: "Professionell, aber nicht starr",
                    copy: "Business-Name, Kontaktdaten, Farbwelt, Keywords und Servicekarten lassen sich zentral austauschen, ohne dass die Seite an Qualität verliert."
                }
            ],
            en: [
                {
                    title: "Trust through clarity",
                    copy: "The wording is transparent on purpose and avoids generic, overblown claims."
                },
                {
                    title: "Fast path to contact",
                    copy: "CTA placement, forms and contact options are optimised for mobile visitors and local searches."
                },
                {
                    title: "Easy to update",
                    copy: "Business name, contact data, colour palette, keywords and service cards can be changed centrally."
                }
            ]
        },
        process: {
            de: [
                {
                    title: "Anfrage senden",
                    copy: "Interessenten schildern kurz Gerät, Problem und Berliner Bezirk."
                },
                {
                    title: "Rückmeldung erhalten",
                    copy: "Die Vorlage kommuniziert den nächsten Schritt klar per Telefon, E-Mail oder WhatsApp."
                },
                {
                    title: "Termin oder weitere Infos",
                    copy: "Je nach finalem Geschäftsmodell lässt sich dieser Schritt auf Vor-Ort-Service oder Werkstattannahme anpassen."
                }
            ],
            en: [
                {
                    title: "Send a request",
                    copy: "Visitors describe the appliance, issue and Berlin district in a few lines."
                },
                {
                    title: "Receive a response",
                    copy: "The template clearly communicates the next step by phone, email or WhatsApp."
                },
                {
                    title: "Book the next step",
                    copy: "This stage can later be adapted for on-site visits, workshop drop-off or remote triage."
                }
            ]
        },
        testimonials: {
            de: [
                {
                    quote: "Die Seite wirkt hochwertig, ruhig und sofort vertrauenswürdig. Genau so sollte ein Berliner Reparaturbetrieb digital auftreten.",
                    author: "Beispielbewertung, Berlin-Mitte",
                    role: "Platzhalter für eine spätere echte Kundenstimme"
                },
                {
                    quote: "Schon auf dem Handy ist sofort klar, wo ich anrufen oder anfragen muss. Das fühlt sich professionell und glaubwürdig an.",
                    author: "Beispielbewertung, Berlin-Pankow",
                    role: "Platzhalter für eine spätere echte Kundenstimme"
                },
                {
                    quote: "Die Struktur verbindet Design, Local SEO und Conversion sehr sauber. Sie wirkt wie eine Website, die wirklich Anfragen gewinnen soll.",
                    author: "Beispielbewertung, Berlin-Charlottenburg",
                    role: "Platzhalter für eine spätere echte Kundenstimme"
                }
            ],
            en: [
                {
                    quote: "The website feels professional and guides people straight into the enquiry flow. That is exactly what a Berlin repair brand needs.",
                    author: "Sample review, Berlin-Mitte",
                    role: "Placeholder for a future customer voice"
                },
                {
                    quote: "Clear structure, strong mobile presentation and immediate contact options. It creates trust before the first call.",
                    author: "Sample review, Berlin-Pankow",
                    role: "Placeholder for a future customer voice"
                },
                {
                    quote: "The structure can be adapted to a concrete repair niche very quickly without rebuilding the whole site.",
                    author: "Sample review, Berlin-Charlottenburg",
                    role: "Placeholder for a future customer voice"
                }
            ]
        },
        faq: {
            de: [
                {
                    q: "Kann ich den finalen Business-Namen später einfach austauschen?",
                    a: "Ja. Der Name ist zentral konfiguriert und wird in Branding, Footer, Kontaktblock und strukturierten Daten wiederverwendet."
                },
                {
                    q: "Was passiert, wenn sich Services oder Keywords ändern?",
                    a: "Die Servicekarten, Textmodule und SEO-Vorlagen sind bewusst flexibel angelegt, damit Sie Schwerpunkte später ohne Redesign anpassen können."
                },
                {
                    q: "Ist die Seite für lokale Sichtbarkeit in Berlin vorbereitet?",
                    a: "Ja. Struktur, Headings, CTA-Logik, semantische Abschnitte und Berlin-Bezug sind bereits so aufgebaut, dass sie für Local SEO sauber erweitert werden können."
                },
                {
                    q: "Kann später ein echtes Buchungssystem angeschlossen werden?",
                    a: "Ja. Die Formulare sind so markiert, dass eine spätere Backend- oder CRM-Anbindung ohne kompletten Umbau möglich bleibt."
                },
                {
                    q: "Wirkt die Seite auch ohne finale Marke schon professionell?",
                    a: "Ja. Genau dafür ist sie gebaut: als hochwertige Vorlage, die schon jetzt stark aussieht und später mit Ihrer finalen Identität nur noch präziser wird."
                }
            ],
            en: [
                {
                    q: "Can the final business name be swapped in later?",
                    a: "Yes. The name is centralised and reused in branding, footer, contact blocks and structured data."
                },
                {
                    q: "What if services or keywords change later?",
                    a: "Service cards, content modules and SEO templates are intentionally flexible so you can adjust focus areas without redesigning the site."
                },
                {
                    q: "Is the site prepared for local visibility in Berlin?",
                    a: "Yes. Structure, headings, CTA logic, semantic sections and Berlin relevance are already set up for future Local SEO refinement."
                },
                {
                    q: "Can a real booking system be connected later?",
                    a: "Yes. The forms are marked so a later backend or CRM integration can be added without rebuilding the front-end."
                }
            ]
        },
        contactHighlights: {
            de: [
                "Telefon, Formular und WhatsApp als klare Kontaktwege",
                "Formulartext für schnelle mobile Nutzung optimiert",
                "Hinweisflächen für finale Servicezeiten und Adresse"
            ],
            en: [
                "Phone, form and WhatsApp as clear contact routes",
                "Form copy optimised for fast mobile use",
                "Dedicated placeholders for final opening hours and address"
            ]
        },
        premiumSignals: {
            de: [
                {
                    title: "Professioneller Erstkontakt",
                    copy: "Schon vor dem ersten Gespräch vermittelt die Seite Klarheit, Struktur und Verlässlichkeit."
                },
                {
                    title: "Lokal relevant in Berlin",
                    copy: "Der Berlin-Bezug ist sichtbar eingebaut, ohne die Seite auf starre Keyword-Kombinationen festzulegen."
                },
                {
                    title: "Für echte Anfragen gebaut",
                    copy: "Alle wichtigen Wege zur Kontaktaufnahme sind sichtbar, einfach und auf mobile Nutzung optimiert."
                }
            ],
            en: [
                {
                    title: "Professional first impression",
                    copy: "Before the first call, the website already communicates clarity, structure and reliability."
                },
                {
                    title: "Locally relevant in Berlin",
                    copy: "Berlin relevance is built into the structure without locking the site into rigid keyword combinations."
                },
                {
                    title: "Built for real enquiries",
                    copy: "Every important contact path is visible, simple and optimised for mobile visitors."
                }
            ]
        },
        differentiators: {
            de: [
                {
                    title: "Keine Billigvorlage",
                    copy: "Die Gestaltung setzt auf Ruhe, Wertigkeit und Substanz statt auf laute Werbeoptik oder generische Handwerker-Klischees."
                },
                {
                    title: "Flexibel ohne Qualitätsverlust",
                    copy: "Sie können Marke, Services, Farben und Keywords später austauschen, ohne die komplette Website neu aufbauen zu müssen."
                },
                {
                    title: "Lead-fokussierte Struktur",
                    copy: "Jeder Abschnitt hat eine Aufgabe: Vertrauen aufbauen, Fragen klären oder den nächsten Kontakt auslösen."
                }
            ],
            en: [
                {
                    title: "Not a cheap template",
                    copy: "The design leans on calm, premium structure instead of noisy sales styling or generic trade clichés."
                },
                {
                    title: "Flexible without losing quality",
                    copy: "Brand, services, colours and keywords can change later without forcing a full rebuild."
                },
                {
                    title: "Lead-focused structure",
                    copy: "Every section has a purpose: build trust, answer hesitation or trigger the next contact step."
                }
            ]
        },
        legal: {
            owner: PLACEHOLDERS.LEGAL_OWNER,
            representative: PLACEHOLDERS.LEGAL_REPRESENTATIVE,
            vatId: PLACEHOLDERS.VAT_ID
        }
    };
})();
