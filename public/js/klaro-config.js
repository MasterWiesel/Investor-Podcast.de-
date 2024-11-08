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
                [/^_ga.*$/i, '/', '.perfectio-die-finanzmakler.de'],
                [/^_gid.*$/i, '/', '.perfectio-die-finanzmakler.de'],
            ],
            callback: function(consent, service) {
                if (consent) {
                    if (document.readyState === 'complete') {
                        executeAnalytics();
                    } else {
                        window.addEventListener('load', executeAnalytics);
                    }
                } else {
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
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.perfectio-die-finanzmakler.de`;
    });
}

// Klaro initialisieren
window.addEventListener('load', function() {
    if (window.klaro) {
        window.klaro.show(window.klaroConfig);
    }
});
