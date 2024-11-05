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

        <section>
          <h3 class="text-xl font-semibold mb-4">Aktuelle Marktsituation und Ausblick</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>In den kommenden Tagen wird mit erhöhter Volatilität an den Märkten gerechnet.</li>
            <li>Die "Magnificent Seven", die größten Technologiewerte, werden ihre Quartalszahlen veröffentlichen.</li>
            <li>Die US-Präsidentschaftswahlen finden nächste Woche statt.</li>
            <li>Bitcoin befindet sich im Aufwind und nähert sich seinen Höchstständen.</li>
            <li>Ein "Golden Cross" deutet auf eine mögliche Aufwärtsbewegung hin.</li>
            <li>Ein Ausbruch über 72.000-74.000 US-Dollar könnte zu einem deutlichen Kursanstieg führen.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Fokus auf die deutsche Automobilindustrie</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Die Automobilindustrie steht vor großen Herausforderungen durch den Wandel zur E-Mobilität.</li>
            <li>Geringe Werksauslastung und Personalabbau prägen das aktuelle Bild.</li>
            <li>Chancen durch neue Technologien wie Wasserstoff.</li>
            <li>Saudi-Arabien plant ein Mega-Unternehmen für Wasserstoff.</li>
            <li>BMW plant die Markteinführung eines Brennstoffzellenfahrzeugs für 2028.</li>
            <li>Deutsche Industrie plant verstärkte Nutzung von Wasserstoff.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">BMW Aktienanalyse</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Bilanzqualität wird als branchentypisch eingestuft.</li>
            <li>Freie Cashflow-Rendite für die nächsten 5 Jahre auf 13% geschätzt.</li>
            <li>KGV von 5,1 liegt unter dem historischen Durchschnitt von 6,9.</li>
            <li>Dividendenpolitik als Argument für langfristiges Investment.</li>
            <li>Historisch stabile Dividendenentwicklung mit wenigen Ausnahmen.</li>
            <li>Empfehlung zum antizyklischen Investment in der aktuellen Situation.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Politische Spenden in den USA</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Technologiekonzerne spenden mehrheitlich an die Demokraten.</li>
            <li>Tesla unterstützt hauptsächlich die Republikaner.</li>
            <li>Kritische Betrachtung des Einflusses von Unternehmensspenden auf die Politik.</li>
            <li>Diskussion über den linken Bias amerikanischer Journalisten.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'amazon-microsoft-analyse',
    title: 'Folge 2: Amazon vs. Microsoft - Aktienanalyse',
    description: 'Trotz des Erfolgs am Allzeithoch ist Amazon nicht überbewertet. Bei Microsoft hingegen ist die Bewertung fraglich. Lohnt sich jetzt der Einstieg bei Amazon? Droht Microsoft der Absturz? Die Antworten gibt es in dieser Folge!',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/Investor%20Podcast%20Cover%20Folge%202.png',
    audioUrl: 'https://perfectio-die-finanzmakler.de/public/audio/Aktienanalyse-Microsoft%20u%20Amazon.mp3',
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
            <li>Operativ läuft das Geschäft jedoch gut: Alle Geschäftsbereiche konnten zum Wachstum beitragen.</li>
            <li>Besonders stark entwickelte sich das Cloud-Geschäft (Azure) mit einem Umsatzplus von 33%.</li>
            <li>Auch die Gaming-Sparte (Xbox) verzeichnete ein starkes Wachstum von 61%.</li>
            <li>Mittelfristig erwartet man eine Erholung der Profitabilität, da die hohen Investitionen in KI sich zukünftig auszahlen und die Kosten senken sollen.</li>
            <li>Die Bewertung der Microsoft-Aktie erscheint dennoch hoch und das Chance-Risiko-Verhältnis ungünstig.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Amazon</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Amazon präsentiert sich in Topform: Die Quartalszahlen überzeugten in allen Bereichen.</li>
            <li>Gewinn und Umsatz lagen deutlich über den Erwartungen, der Gewinn stieg im Vergleich zum Vorjahr um 52%.</li>
            <li>Besonders hervorzuheben ist die starke Performance des Cloud-Geschäfts (AWS), das einen erheblichen Beitrag zum Gewinn leistet und als "Gelddruckmaschine" bezeichnet wird.</li>
            <li>Der freie Cashflow hat sich in den letzten 12 Monaten mehr als verdoppelt.</li>
            <li>Amazon notiert zwar am Allzeithoch, erscheint aber angesichts der Wachstumsraten und der Profitabilität nicht überbewertet.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Ausblick</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Die beiden Tech-Giganten zeigen unterschiedliche Entwicklungen.</li>
            <li>Microsoft kämpft aktuell mit der Profitabilität, während Amazon von der Stärke seines Cloud-Geschäfts profitiert.</li>
            <li>Es bleibt abzuwarten, wie sich die hohen Investitionen von Microsoft in KI mittelfristig auswirken werden.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 'us-sanktionen-china',
    title: 'Folge 3: US-Sanktionen gegen China gescheitert? - Wirtschaft',
    description: 'In dieser Podcastfolge analysieren wir die Auswirkungen des Handelskrieges zwischen den USA und China, insbesondere im Hinblick auf die Chipindustrie.',
    imageUrl: 'https://perfectio-die-finanzmakler.de/public/images/podcast-covers/Investor%20Podcast%20Cover%20Folge%203.png',
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
          <p class="mb-4">Die USA haben mit hohen Erwartungen Exportkontrollen und Sanktionen im Halbleiterbereich gegen China verhängt. Diese Maßnahmen scheinen jedoch gescheitert zu sein und haben stattdessen einen Innovationsschub in China ausgelöst. Chinas größter Chiphersteller SMIC produziert nun 7-nm-Chips, die bereits in neuen Huawei-Handys verbaut werden. Experten sind überrascht, da diese Chips offenbar mit älteren, importierten Maschinen hergestellt wurden.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Abhängigkeit der USA von Drittstaaten</h3>
          <p class="mb-4">Die USA stellen zwar immer noch den Großteil der weltweiten Chip-Produktionskapazitäten, sind aber zunehmend auf die Kooperation von Ländern wie den Niederlanden oder Japan angewiesen, um ihre Sanktionspolitik durchzusetzen. Der niederländische Halbleitermaschinenhersteller ASML erzielt mittlerweile fast 30% seines Umsatzes in China. Dies zeigt, dass es für die USA immer schwieriger wird, Verbündete in ihre Sanktionspolitik einzubinden.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Kosten des Handelskriegs und Chinas Aufstieg</h3>
          <p class="mb-4">Der Handelskrieg zwischen den USA und China ist für beide Seiten teuer und trägt zu einer erhöhten Inflation weltweit bei. Verbraucher und Unternehmen sind die großen Verlierer dieses Machtkampfs. Die USA haben zwar noch einen technologischen Vorsprung, aber China holt schnell auf. Chinesische Firmen stellen nun 7-nm-Chips her, eine Entwicklung, die vor zehn Jahren noch undenkbar gewesen wäre.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Chinas zunehmende Unabhängigkeit</h3>
          <p class="mb-4">China hat seine Abhängigkeit von Importen im Halbleiterbereich in den letzten Jahren deutlich reduziert. Heimische Hersteller verdrängen ausländische Unternehmen vom chinesischen Markt. Der Handelskrieg hat China dazu gezwungen, eigene Chips und Halbleiter zu produzieren. Die Produktion von 5-nm-Chips in China zeigt, dass das Land zunehmend unabhängig von ausländischen Lieferungen wird.</p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-4">Auswirkungen der Sanktionen</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Die Sanktionen haben dazu geführt, dass China nun selbst Chips und Halbleiter herstellt, die es zuvor von amerikanischen Unternehmen bezog.</li>
            <li>Dadurch entgehen amerikanischen Unternehmen wichtige Umsätze und Gewinne.</li>
            <li>Das Beispiel des Ölsektors zeigt, dass Sanktionen neue Märkte schaffen und Anreize zur Umgehung bieten.</li>
            <li>Russland verkauft sein Öl nun an Länder wie Indien und China und erhält im Gegenzug benötigte Güter.</li>
            <li>Die Sanktionen und der Handelskonflikt haben weitreichende Folgen für die Weltwirtschaft und könnten zu wirtschaftlichen Unsicherheiten, steigender Inflation und Lieferkettenproblemen führen.</li>
          </ul>
        </section>
      </div>
    `
  }
];
