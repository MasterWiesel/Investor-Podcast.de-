export interface Episode {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  publishDate: string;
  summary: string;
  shownotes: string;
}

export const episodes: Episode[] = [
  {
    id: 'marktupdate-koalition',
    title: 'Folge 4: Marktupdate - Koalition in der Krise',
    description: 'In dieser Folge analysieren wir die Auswirkungen der aktuellen Regierungskrise auf die Finanzmärkte und diskutieren die möglichen Konsequenzen für Anleger und Investoren.',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/folge-4.png',
    audioUrl: 'https://perfectio-die-finanzmakler.de/public/audio/Marktupdate-Koalition.mp3',
    publishDate: '2024-11-11',
    summary: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Analyse der politischen Situation und deren Einfluss auf die Börse</li>
        <li>Mögliche Szenarien für die weitere Entwicklung des DAX</li>
        <li>Auswirkungen auf den Euro und internationale Währungsbeziehungen</li>
        <li>Chancen und Risiken für verschiedene Branchen</li>
        <li>Handlungsempfehlungen für private Anleger in unsicheren Zeiten</li>
      </ul>
    `,
    shownotes: `
      <div class="space-y-8">
        <section>
          <h3 class="text-xl font-semibold mb-4">Politische Entwicklungen und Marktreaktionen</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Die aktuelle Regierungskrise und ihre unmittelbaren Auswirkungen auf die Börse</li>
            <li>Reaktionen internationaler Investoren auf die deutsche Innenpolitik</li>
            <li>Vergleich mit ähnlichen historischen Situationen und deren Marktfolgen</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Branchenanalyse</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Besonders betroffene Sektoren und deren Entwicklungsperspektiven</li>
            <li>Gewinner und Verlierer der aktuellen Situation</li>
            <li>Langfristige Auswirkungen auf die deutsche Wirtschaft</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Handlungsempfehlungen</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Strategien zur Portfolioanpassung in volatilen Zeiten</li>
            <li>Diversifikationsmöglichkeiten zur Risikominimierung</li>
            <li>Konkrete Anlagevorschläge für verschiedene Risikoklassen</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'marktupdate-10-2024',
    title: 'Folge 1: Marktupdate 10/2024',
    description: 'In dieser Podcast-Folge analysieren wir die aktuellen Entwicklungen an der Börse, die Quartalszahlen von PayPal, die Situation der deutschen Automobilindustrie und werfen einen detaillierten Blick auf die BMW-Aktie.',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/folge-1.png',
    audioUrl: 'https://perfectio-die-finanzmakler.de/public/audio/Marktupdate-10-2024.mp3',
    publishDate: '2024-11-04',
    summary: `
      <ul class="list-disc pl-5 space-y-2">
        <li>PayPal überrascht mit Quartalszahlen: Der Gewinn pro Aktie übertrifft die Erwartungen, der Umsatz liegt leicht darunter. Die Aktie reagiert mit starken Schwankungen.</li>
        <li>Spannende Zeiten an der Börse: Die kommenden Tage versprechen hohe Volatilität, da die "Magnificent Seven" ihre Quartalszahlen veröffentlichen und die US-Präsidentschaftswahlen anstehen.</li>
        <li>Bitcoin im Aufwind: Die Kryptowährung nähert sich ihren Höchstständen und ein "Golden Cross" deutet auf eine mögliche Aufwärtsbewegung hin.</li>
        <li>Deutsche Automobilindustrie in der Krise: Die Branche steht vor großen Herausforderungen, bietet aber auch Chancen für langfristige Investoren.</li>
        <li>BMW im Fokus: Die Aktie wird analysiert und es werden Argumente für und gegen ein Investment präsentiert.</li>
      </ul>
    `,
    shownotes: `
      <div class="space-y-8">
        <section>
          <h3 class="text-xl font-semibold mb-4">Marktreaktion auf PayPal Zahlen</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>PayPal hat gute Quartalszahlen gemeldet, mit einem Gewinn pro Aktie über den Erwartungen und angehobenen Gewinnprognosen.</li>
            <li>Der Umsatz blieb jedoch leicht hinter den Erwartungen zurück.</li>
            <li>Die Aktie reagierte im vorbörslichen Handel mit starken Schwankungen, fiel zunächst um 12 % und erholte sich anschließend wieder, bevor sie erneut sank.</li>
            <li>Das Beispiel zeigt die Nervosität der Märkte und die Volatilität nach der Veröffentlichung von Unternehmenszahlen.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'amazon-microsoft-analyse',
    title: 'Folge 2: Amazon vs. Microsoft - Aktienanalyse',
    description: 'Trotz des Erfolgs am Allzeithoch ist Amazon nicht überbewertet. Bei Microsoft hingegen ist die Bewertung fraglich. Lohnt sich jetzt der Einstieg bei Amazon? Droht Microsoft der Absturz? Die Antworten gibt es in dieser Folge!',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/folge-2.png',
    audioUrl: 'https://perfectio-die-finanzmakler.de/public/audio/Aktienanalyse-Microsoft-u-Amazon.mp3',
    publishDate: '2024-11-06',
    summary: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Microsoft enttäuscht: Die Aktie stürzt nach den Quartalszahlen ab, trotz eines Gewinns und Umsatzes über den Erwartungen.</li>
        <li>Investitionen drücken auf den Gewinn: Hohe Ausgaben für KI und Rechenzentren belasten Microsofts Profitabilität.</li>
        <li>Amazon überzeugt auf ganzer Linie: Die Quartalszahlen übertreffen die Erwartungen, der Gewinn steigt um 52%.</li>
        <li>AWS als Gelddruckmaschine: Amazons Cloud-Geschäft floriert und trägt maßgeblich zum Gewinn bei.</li>
        <li>Bewertung: Microsoft erscheint überbewertet, während Amazon trotz Allzeithoch noch Potenzial hat.</li>
      </ul>
    `,
    shownotes: `
      <div class="space-y-8">
        <section>
          <h3 class="text-xl font-semibold mb-4">Microsoft</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Die Aktie von Microsoft ist nach der Veröffentlichung der Quartalszahlen deutlich gefallen, obwohl sowohl Gewinn als auch Umsatz die Erwartungen der Analysten übertrafen.</li>
            <li>Grund für den Kursrückgang sind die hohen Investitionen in KI und Rechenzentren, die die Profitabilität aktuell belasten.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'us-sanktionen-china',
    title: 'Folge 3: US-Sanktionen gegen China gescheitert? - Wirtschaft',
    description: 'In dieser Podcastfolge analysieren wir die Auswirkungen des Handelskrieges zwischen den USA und China, insbesondere im Hinblick auf die Chipindustrie.',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/folge-3.png',
    audioUrl: 'https://perfectio-die-finanzmakler.de/public/audio/Wirtschaft-Handelskrieg-USA-gegen-China.mp3',
    publishDate: '2024-11-08',
    summary: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Die US-Sanktionen im Halbleiterbereich haben Chinas Innovation angekurbelt, anstatt sie zu bremsen.</li>
        <li>Chinesische Firmen wie SMIC stellen nun selbst 7-nm-Chips her und nutzen dafür teilweise ältere, importierte Maschinen.</li>
        <li>Die USA sind zunehmend auf die Kooperation von Drittstaaten wie den Niederlanden angewiesen, um ihre Sanktionen durchzusetzen.</li>
        <li>Der Handelskrieg zwischen den USA und China ist für beide Seiten kostspielig und trägt zur globalen Inflation bei.</li>
        <li>China reduziert seine Abhängigkeit von ausländischen Importen im Halbleiterbereich und verdrängt ausländische Hersteller vom heimischen Markt.</li>
      </ul>
    `,
    shownotes: `
      <div class="space-y-8">
        <section>
          <h3 class="text-xl font-semibold mb-4">Gescheiterte Chip-Sanktionen und Chinas Innovationsschub</h3>
          <p class="mb-4">Die USA haben mit hohen Erwartungen Exportkontrollen und Sanktionen im Halbleiterbereich gegen China verhängt. Diese Maßnahmen scheinen jedoch gescheitert zu sein und haben stattdessen einen Innovationsschub in China ausgelöst.</p>
        </section>
      </div>
    `
  }
];
