/*  ===================================================
 *  SITE CONFIGURATION — Zentrale Konfigurationsdatei
 *  ===================================================
 *
 *  Alle änderbaren Inhalte an einer Stelle.
 *  Business-Name, Telefon, Services, FAQ usw. werden
 *  von main.js automatisch in jede Seite eingefügt.
 *
 *  Anleitung:
 *  1. Werte hier anpassen
 *  2. Seite im Browser neu laden — fertig
 *
 *  Hinweis: <title> und <meta>-Tags in den HTML-Dateien
 *  müssen bei Namensänderung manuell aktualisiert werden
 *  (für SEO / Social-Media-Vorschau).
 */

window.SITE_CONFIG = {

    // =========================
    //  BUSINESS INFORMATION
    // =========================
    businessName:    "Hausgeräte Service Berlin",
    businessNameEN:  "Home Appliance Service Berlin",
    tagline:         "Berlin vor Ort",
    taglineEN:       "On-site in Berlin",

    // =========================
    //  CONTACT
    // =========================
    phone:           "+493012345678",
    phoneDisplay:    "030 1234 5678",
    email:           "service@hausgeraete-berlin.example",
    whatsapp:        "493012345678",
    domain:          "YOURDOMAIN.de",

    // =========================
    //  LOCATION
    // =========================
    city: "Berlin",
    districts: [
        "Mitte", "Prenzlauer Berg", "Friedrichshain", "Kreuzberg",
        "Neukölln", "Charlottenburg", "Schöneberg", "Tempelhof",
        "Pankow"
    ],

    // =========================
    //  SERVICES
    //  Karten auf der Startseite.
    //  Reihenfolge = Anzeigereihenfolge.
    //  Einfach Objekte hinzufügen / entfernen.
    // =========================
    services: [
        {
            id:   "waschmaschine",
            name: "Waschmaschine",
            desc: "Schleudert nicht, pumpt nicht ab, die Trommel dreht sich nicht oder die Tür klemmt? Wir prüfen das Problem vor Ort und reparieren direkt.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg>'
        },
        {
            id:   "geschirrspueler",
            name: "Geschirrspüler",
            desc: "Geschirr bleibt schmutzig, Wasser steht in der Maschine oder es tropft? Wir finden die Ursache und beheben den Defekt bei Ihnen zu Hause.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6m-3-3v6"/><circle cx="9" cy="17" r="1"/><circle cx="15" cy="17" r="1"/></svg>'
        },
        {
            id:   "trockner",
            name: "Trockner",
            desc: "Wäsche wird nicht trocken, Fehlermeldung im Display oder keine Wärme mehr? Wir prüfen Heizung, Sensoren und Steuerung direkt vor Ort.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16a5 5 0 0 1 0-8"/><path d="M12 18a8 8 0 0 0 0-12"/><path d="M16 16a5 5 0 0 0 0-8"/><rect x="7" y="20" width="10" height="2" rx="1"/></svg>'
        },
        {
            id:   "herd-ofen",
            name: "Herd & Backofen",
            desc: "Kochfeld reagiert nicht, Backofen bleibt kalt oder einzelne Platten heizen nicht? Wir diagnostizieren das Problem und reparieren, was sinnvoll ist.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><circle cx="12" cy="16" r="2"/></svg>'
        }
    ],

    // =========================
    //  APPLIANCE DROPDOWN
    //  Optionen im Anfrageformular.
    //  Kann mehr Einträge als „services" haben.
    // =========================
    applianceOptions: [
        { value: "waschmaschine",     label: "Waschmaschine" },
        { value: "geschirrspueler",   label: "Geschirrspüler" },
        { value: "trockner",          label: "Trockner" },
        { value: "herd-ofen",         label: "Herd / Ofen" },
        { value: "kuehlschrank",      label: "Kühlschrank" },
        { value: "gefrierschrank",    label: "Gefrierschrank" },
        { value: "mikrowelle",        label: "Mikrowelle" },
        { value: "dunstabzugshaube",  label: "Dunstabzugshaube" },
        { value: "kaffeemaschine",    label: "Kaffeemaschine" },
        { value: "sonstiges",         label: "Sonstiges" }
    ],

    // =========================
    //  TRUST BADGES
    // =========================
    trustBadges: [
        {
            text: "Fachbetrieb für Hausgeräte",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
            text: "Termine innerhalb weniger Tage",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        },
        {
            text: "Ganz Berlin \u2013 alle Bezirke",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        },
        {
            text: "Faire, transparente Preise",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        }
    ],

    // =========================
    //  BENEFITS (Warum wir)
    // =========================
    benefits: [
        {
            title: "Direkt erreichbar",
            desc:  "Kein Callcenter, keine Warteschleife. Sie rufen an \u2013 wir gehen ran. Oder stellen Sie Ihre Anfrage einfach online.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
        },
        {
            title: "Reparatur bei Ihnen zu Hause",
            desc:  "Wir kommen in Ihren Berliner Bezirk. Kein Abbauen, kein Transport \u2013 wir reparieren direkt vor Ort.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        },
        {
            title: "Klare Absprache vorab",
            desc:  "Bevor wir anfangen, erklären wir Ihnen, was defekt ist und mit welchen Kosten Sie rechnen können.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'
        },
        {
            title: "Ehrlich, auch wenn\u2019s nicht lohnt",
            desc:  "Wenn eine Reparatur teurer käme als ein neues Gerät, sagen wir Ihnen das. Ohne versteckte Kosten.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
        }
    ],

    // =========================
    //  PROCESS STEPS
    // =========================
    processSteps: [
        {
            title: "Anfrage stellen",
            desc:  "per Telefon, Kontaktformular oder WhatsApp. Beschreiben Sie kurz, welches Gerät betroffen ist."
        },
        {
            title: "Termin abstimmen",
            desc:  "wir melden uns zeitnah und vereinbaren einen passenden Termin bei Ihnen in Berlin."
        },
        {
            title: "Prüfung und Reparatur",
            desc:  "vor Ort erklären wir den Befund und reparieren direkt, wenn es sinnvoll ist."
        }
    ],

    // =========================
    //  FAQ
    //  Erstes Element startet offen.
    // =========================
    faq: [
        {
            q: "Was kostet eine Reparatur?",
            a: "Die Kosten hängen vom Gerät und Defekt ab. Vor einer Reparatur erhalten Sie immer eine Einschätzung, damit Sie entscheiden können, ob sich der Aufwand lohnt."
        },
        {
            q: "Wie schnell können Sie kommen?",
            a: "In der Regel vereinbaren wir Termine innerhalb weniger Tage. Bei dringenden Fällen versuchen wir, kurzfristige Lösungen zu finden."
        },
        {
            q: "Welche Geräte reparieren Sie?",
            a: "Wir reparieren Waschmaschinen, Geschirrspüler, Trockner, Herde, Backöfen, Kühlschränke, Gefrierschränke und viele weitere Haushaltsgeräte."
        },
        {
            q: "Muss ich das Gerät vorher abbauen?",
            a: "Nein. Wir kommen zu Ihnen nach Hause und prüfen das Gerät direkt an seinem Standort. Sie müssen nichts vorbereiten."
        },
        {
            q: "Was, wenn sich die Reparatur nicht lohnt?",
            a: "Dann sagen wir Ihnen das offen. Wenn ein neues Gerät günstiger wäre als die Reparatur, beraten wir Sie ehrlich \u2013 ohne versteckte Kosten."
        }
    ],

    // =========================
    //  STRUCTURED DATA (JSON-LD)
    //  Wird automatisch generiert.
    // =========================
    serviceTypes: [
        "Waschmaschinenreparatur",
        "Geschirrspülerreparatur",
        "Trocknerreparatur",
        "Herd- und Ofenreparatur"
    ],
    serviceTypesEN: [
        "Washing machine repair",
        "Dishwasher repair",
        "Dryer repair",
        "Oven and stove repair"
    ],

    // =========================
    //  ENGLISH TRANSLATIONS
    //  Benutzt auf -en.html Seiten
    // =========================
    servicesEN: [
        {
            id:   "washing-machine",
            name: "Washing Machine",
            desc: "Not spinning, won\u2019t drain, drum not turning, or door stuck? We diagnose and repair the issue on-site.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg>'
        },
        {
            id:   "dishwasher",
            name: "Dishwasher",
            desc: "Dishes still dirty, water standing, or leaking? We find the cause and fix the problem at your home.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6m-3-3v6"/><circle cx="9" cy="17" r="1"/><circle cx="15" cy="17" r="1"/></svg>'
        },
        {
            id:   "dryer",
            name: "Dryer",
            desc: "Clothes not drying, error on display, or no heat? We check heating, sensors and controls on-site.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16a5 5 0 0 1 0-8"/><path d="M12 18a8 8 0 0 0 0-12"/><path d="M16 16a5 5 0 0 0 0-8"/><rect x="7" y="20" width="10" height="2" rx="1"/></svg>'
        },
        {
            id:   "oven-stove",
            name: "Oven & Stove",
            desc: "Cooktop not responding, oven stays cold, or individual burners not heating? We diagnose and repair what makes sense.",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><circle cx="12" cy="16" r="2"/></svg>'
        }
    ],

    applianceOptionsEN: [
        { value: "washing-machine",  label: "Washing Machine" },
        { value: "dishwasher",       label: "Dishwasher" },
        { value: "dryer",            label: "Dryer" },
        { value: "oven-stove",       label: "Oven / Stove" },
        { value: "refrigerator",     label: "Refrigerator" },
        { value: "freezer",          label: "Freezer" },
        { value: "microwave",        label: "Microwave" },
        { value: "range-hood",       label: "Range Hood" },
        { value: "coffee-machine",   label: "Coffee Machine" },
        { value: "other",            label: "Other" }
    ],

    trustBadgesEN: [
        {
            text: "Certified Appliance Service",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        },
        {
            text: "Appointments Within Days",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        },
        {
            text: "All Berlin Districts",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        },
        {
            text: "Fair, Transparent Prices",
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        }
    ],

    benefitsEN: [
        {
            title: "Quick Response",
            desc:  "No call centre, no waiting. Call us and we pick up \u2013 or send your request online.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
        },
        {
            title: "On-site Service in Berlin",
            desc:  "We come to your Berlin district. No dismounting, no transport \u2013 we repair right at your home.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        },
        {
            title: "Transparent Communication",
            desc:  "Before we start, we explain what\u2019s wrong and what the expected cost will be.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'
        },
        {
            title: "Repair Only When It Makes Sense",
            desc:  "If a repair would cost more than a new appliance, we\u2019ll tell you honestly. No hidden fees.",
            icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
        }
    ],

    processStepsEN: [
        {
            title: "Submit your request",
            desc:  "by phone, contact form, or WhatsApp. Briefly describe which appliance is affected."
        },
        {
            title: "Schedule an appointment",
            desc:  "we\u2019ll get back to you promptly and arrange a convenient time at your home in Berlin."
        },
        {
            title: "Diagnosis and repair",
            desc:  "on-site we explain our findings and repair directly if it makes sense."
        }
    ],

    faqEN: [
        {
            q: "How much does a repair cost?",
            a: "The cost depends on the appliance and the defect. Before any repair, you\u2019ll always receive an estimate so you can decide whether it\u2019s worth it."
        },
        {
            q: "How quickly can you come?",
            a: "We typically schedule appointments within a few days. For urgent cases, we try to find a short-notice solution."
        },
        {
            q: "Which appliances do you repair?",
            a: "We repair washing machines, dishwashers, dryers, ovens, stoves, refrigerators, freezers and many other household appliances."
        },
        {
            q: "Do I need to disconnect the appliance beforehand?",
            a: "No. We come to your home and check the appliance right where it is. You don\u2019t need to prepare anything."
        },
        {
            q: "What if the repair isn\u2019t worth it?",
            a: "Then we\u2019ll tell you openly. If a new appliance would be cheaper than the repair, we advise you honestly \u2013 no hidden costs."
        }
    ]
};
