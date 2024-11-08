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
        <li>Die Ampel-Koalition ist nach monatelangen Streitigkeiten und Uneinigkeiten, insbesondere über den Haushalt 2025, zerbrochen.</li>
        <li>Der FDP-Vorsitzende Christian Lindner wurde von Bundeskanzler Olaf Scholz als Finanzminister entlassen. Lindner wirft Scholz vor, den Bruch der Koalition kalkuliert herbeigeführt zu haben.</li>
        <li>Der Bundesverkehrsminister Volker Wissing bleibt als parteiloser Minister im Amt. Alle anderen FDP-Minister sind zurückgetreten.</li>
        <li>Es werden Neuwahlen erwartet, der genaue Zeitpunkt ist noch unklar. Scholz will im Januar die Vertrauensfrage stellen, die Opposition drängt auf einen schnelleren Ablauf.</li>
        <li>Die Folgen des Zerbrechens der Ampel sind weitreichend, insbesondere in Anbetracht der Wahl Donald Trumps zum US-Präsidenten und der damit verbundenen Unsicherheiten in der Wirtschafts- und Sicherheitspolitik.</li>
      </ul>
    `,
    shownotes: `
      <div class="space-y-8">
        <section>
          <h3 class="text-xl font-semibold mb-4">I. Das Ende der Ampel-Koalition</h3>
          <p>Nach monatelangen Streitigkeiten hat die Ampel-Koalition ihre Arbeit eingestellt. Die Uneinigkeit über den Haushalt 2025, insbesondere die von Lindner geforderte Einhaltung der Schuldenbremse, führte zum Bruch. Scholz entließ Lindner als Finanzminister und warf ihm mangelnde Kompromissbereitschaft und Egoismus vor. Lindner wiederum beschuldigt Scholz, den Bruch der Koalition bewusst herbeigeführt zu haben.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">II. Volker Wissings Verbleib als Verkehrsminister</h3>
          <p>Während alle anderen FDP-Minister aus der Regierung ausgeschieden sind, verbleibt Volker Wissing als Verkehrsminister im Amt. Er tritt aus der FDP aus und wird somit als Parteiloser die Geschäfte weiterführen. Dieser Schritt wird von Experten als vorteilhaft für Scholz bewertet, da er den Eindruck erweckt, dass nicht die FDP als Partei das Problem war, sondern einzelne Personen.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">III. Neuwahlen und politische Lähmung</h3>
          <p>Infolge des Koalitionsbruchs werden Neuwahlen erwartet. Scholz plant, im Januar die Vertrauensfrage im Bundestag zu stellen. Die Opposition drängt hingegen auf einen schnelleren Ablauf und fordert Scholz auf, die Vertrauensfrage noch in dieser Woche zu stellen. Bis zur Bildung einer neuen Regierung wird Deutschland von einer geschäftsführenden Regierung geleitet, die in ihren Handlungsmöglichkeiten eingeschränkt ist. Diese politische Lähmung ist besonders kritisch in Anbetracht der Wahl Donald Trumps zum US-Präsidenten und der damit einhergehenden Unsicherheiten.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">IV. Die Rolle der FDP</h3>
          <p>Die FDP befindet sich laut Umfragen derzeit unter der Fünf-Prozent-Hürde und würde den Einzug in den Bundestag verpassen. Der Austritt aus der Ampel-Koalition kann als Versuch gewertet werden, das Image der Partei zu verbessern und sich als verantwortungsbewusste Kraft zu präsentieren, die unbeliebte Entscheidungen nicht mitträgt. Es besteht jedoch auch die Gefahr, dass dieser Schritt von den Wählern als Desertion in einer schwierigen Zeit gewertet wird.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">V. Ausblick</h3>
          <p>Die Folgen des Ampel-Bruchs und der Wahl Donald Trumps sind noch nicht absehbar. Deutschland steht vor großen Herausforderungen in der Wirtschafts- und Sicherheitspolitik. Die politische Landschaft ist instabil und es ist unklar, welche Koalitionen nach der Neuwahl möglich sein werden.</p>
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
