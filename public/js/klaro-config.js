// Config für Klaro Cookie Consent
window.klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'top', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    translations: {
        de: {
            privacyPolicyUrl: '/datenschutz',
            consentModal: {
                title: 'Informationen die wir sammeln',
                description: 'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.\n',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen',
                styling: 'Styling',
            },
            ok: 'Alle akzeptieren',
            decline: 'Ablehnen',
            close: 'Schließen',
            service: {
                purpose: 'Zweck',
                purposes: 'Zwecke',
                required: {
                    title: 'Notwendig',
                    description: 'Diese Dienste sind für die korrekte Funktionsweise der Website notwendig.',
                },
            },
            googleAnalytics: {
                description: 'Sammeln von Besucherstatistiken',
            },
            poweredBy: 'Realisiert mit Klaro!',
        }
    },
    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            required: false,
            default: false,
            cookies: [
                [/^_ga.*$/i, '/', 'perfectio-die-finanzmakler.de'],
                [/^_gid.*$/i, '/', 'perfectio-die-finanzmakler.de'],
            ],
            callback: function(consent, service) {
                // Callback wird ausgeführt, wenn sich der Consent-Status ändert
                if (consent) {
                    // Analytics wurde akzeptiert
                    if (document.readyState === 'complete') {
                        // Seite bereits geladen
                        executeAnalytics();
                    } else {
                        // Warte auf Seitenladung
                        window.addEventListener('load', executeAnalytics);
                    }
                } else {
                    // Analytics wurde abgelehnt - Cookie löschen
                    deleteCookies(['_ga', '_gid', '_gat']);
                }
            },
        }
    ],
};

// Hilfsfunktion zum Ausführen von Analytics
function executeAnalytics() {
    const scripts = document.querySelectorAll('script[data-name="google-analytics"]');
    scripts.forEach(script => {
        eval(script.innerHTML);
    });
}

// Hilfsfunktion zum Löschen von Cookies
function deleteCookies(cookieNames) {
    cookieNames.forEach(cookieName => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    });
}
