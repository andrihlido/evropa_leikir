/* =========================================================
   GÖGN FYRIR EVRÓPULEIKI
   Allar upplýsingar eru sóttar í kennslubókina Evrópu
   (Hilmar Egill Sveinbjörnsson). Til að bæta við efni er
   nóg að breyta þessari skrá; allir leikir lesa héðan.
   svaedi: "vestur" | "austur" | "sudur"
   ========================================================= */

const SVAEDI = {
  vestur: { nafn: "Vestur-Evrópa", stutt: "Vestur" },
  austur: { nafn: "Austur-Evrópa", stutt: "Austur" },
  sudur:  { nafn: "Suður-Evrópa",  stutt: "Suður" }
};

/* ---------- LÖND ----------
   stadreyndir: setningar sem nefna ekki landið sjálft
   (notaðar sem erfiðustu vísbendingarnar í „Hvaða land?“) */
const LOND = [
  // ---------------- VESTUR-EVRÓPA ----------------
  { id: "bretland", nafn: "Bretland", svaedi: "vestur", hofudborg: "London",
    staerd: 245000, ibuar: 70000000, tungumal: "enska",
    ja: "yes", nei: "no", takk: "thanks",
    matur: ["Fiskur og franskar", "Shepherd's pie", "Te"],
    stadreyndir: [
      "Hæsti tindur landsins er Ben Nevis, 1343 metra hár.",
      "Þar er vinstri umferð.",
      "Í höfuðborginni er Heathrow, ein stærsta flugstöð í heimi."
    ] },
  { id: "irland", nafn: "Írland", svaedi: "vestur", hofudborg: "Dublin",
    staerd: 70000, ibuar: 5300000, tungumal: "írska (gelíska) og enska",
    ja: "is ea", nei: "ní hea", takk: "go raibh maith agat",
    matur: ["Irish stew – kjötpottréttur", "Coddle – grænmetispottréttur", "Plómubúðingur"],
    stadreyndir: [
      "Eyjan er oft nefnd „Eyjan græna“ vegna þess hve stór hluti hennar er graslendi.",
      "Landið varð sjálfstætt ríki árið 1921."
    ] },
  { id: "frakkland", nafn: "Frakkland", svaedi: "vestur", hofudborg: "París",
    staerd: 547000, ibuar: 67000000, tungumal: "franska",
    ja: "oui", nei: "non", takk: "merci",
    matur: ["Bouillabaisse – fiskisúpa", "Baguette og croissant", "Ostar eins og Brie og Camembert"],
    stadreyndir: [
      "Þar er hæsti foss Evrópu, Gavarnie, 422 metra hár.",
      "Eyjan Korsíka í Miðjarðarhafi tilheyrir landinu.",
      "Bylting var gerð þar árið 1789."
    ] },
  { id: "belgia", nafn: "Belgía", svaedi: "vestur", hofudborg: "Brussel",
    staerd: 31000, ibuar: 11800000, tungumal: "flæmska og franska",
    ja: "ja / oui", nei: "nee / non", takk: "dank u / merci",
    matur: ["Kræklingur og franskar", "Waterzooi – súpa með fiski eða kjúklingi", "Súkkulaði"],
    stadreyndir: [
      "Súkkulaðið þaðan er af mörgum talið það besta í heiminum.",
      "Höfuðstöðvar Evrópusambandsins eru í höfuðborginni.",
      "Landið er eitt af Benelúxlöndunum."
    ] },
  { id: "holland", nafn: "Holland", svaedi: "vestur", hofudborg: "Amsterdam",
    staerd: 42000, ibuar: 18400000, tungumal: "hollenska",
    ja: "ja", nei: "nee", takk: "bedankt",
    matur: ["Erwtensoep – baunasúpa", "Aspas með hollandesósu", "Edam-ostur"],
    stadreyndir: [
      "Landið er þekkt fyrir vindmyllur og túlípanarækt.",
      "Höfnin í Rotterdam er ein sú stærsta í Evrópu."
    ] },
  { id: "luxemborg", nafn: "Lúxemborg", svaedi: "vestur", hofudborg: "Lúxemborg",
    staerd: 2586, ibuar: 700000, tungumal: "franska og þýska",
    ja: "oui", nei: "non", takk: "merci",
    matur: ["Bouneschlupp – baunasúpa", "Haam am Hée – svínakjöt"],
    stadreyndir: [
      "Landið er eitt af Benelúxlöndunum.",
      "Höfuðborgin heitir það sama og landið."
    ] },
  { id: "thyskaland", nafn: "Þýskaland", svaedi: "vestur", hofudborg: "Berlín",
    staerd: 357000, ibuar: 84100000, tungumal: "þýska",
    ja: "ja", nei: "nein", takk: "danke",
    matur: ["Súrkál (sauerkraut)", "Bratwurst – pylsa", "Svartaskógsterta"],
    stadreyndir: [
      "Ekkert annað land í Evrópu á landamæri að eins mörgum löndum.",
      "Landið var sameinað á ný 3. október 1990 eftir 40 ára aðskilnað.",
      "Þaðan koma bílarnir Mercedes Benz, BMW og Audi."
    ] },
  { id: "sviss", nafn: "Sviss", svaedi: "vestur", hofudborg: "Bern",
    staerd: 41000, ibuar: 10000000, tungumal: "þýska og retórómanska",
    ja: "ja / gea", nei: "nein / na", takk: "danke / engraziel",
    matur: ["Ostafondú", "Rösti-kartöflur", "Súkkulaði"],
    stadreyndir: [
      "Fjallið Matterhorn rís þar 4478 metra yfir fjallaþorpinu Zermatt.",
      "Landið er eitt af Alpalöndunum."
    ] },
  { id: "austurriki", nafn: "Austurríki", svaedi: "vestur", hofudborg: "Vín",
    staerd: 84000, ibuar: 9100000, tungumal: "þýska",
    ja: "ja", nei: "nein", takk: "danke",
    matur: ["Vínarsnitsel", "Sacher-terta með rjóma"],
    stadreyndir: [
      "Brennerskarð, ein mikilvægasta leiðin milli Norður- og Suður-Evrópu, er á landamærum þess og Ítalíu.",
      "Landið er eitt af Alpalöndunum."
    ] },
  { id: "liechtenstein", nafn: "Liechtenstein", svaedi: "vestur", hofudborg: "Vaduz",
    staerd: 160, ibuar: 40000, tungumal: "þýska",
    ja: "ja", nei: "nein", takk: "danke",
    matur: ["Knöpfle – ostaréttur", "Ribel – eftirréttur úr grjónum"],
    stadreyndir: [
      "Smáríki í Alpafjöllum á milli Sviss og Austurríkis.",
      "Þar er enginn flugvöllur.",
      "Gjaldmiðillinn er svissneskur franki."
    ] },

  // ---------------- AUSTUR-EVRÓPA ----------------
  { id: "polland", nafn: "Pólland", svaedi: "austur", hofudborg: "Varsjá",
    staerd: 313000, ibuar: 38200000, tungumal: "pólska",
    ja: "tak", nei: "nie", takk: "dziękuję",
    matur: ["Bigos – kjötpottréttur", "Pierogi"],
    stadreyndir: [
      "Í saltnámum nærri Kraków er kapella þar sem allt er úr salti, líka ljósakrónurnar.",
      "Í landinu eru yfir 10 þúsund vötn.",
      "Rafvirkinn Lech Walesa var kjörinn forseti landsins árið 1990."
    ] },
  { id: "tekkland", nafn: "Tékkland", svaedi: "austur", hofudborg: "Prag",
    staerd: 79000, ibuar: 10600000, tungumal: "tékkneska",
    ja: "ano", nei: "ne", takk: "děkuji",
    matur: ["Kartöflubollur", "Kure na paprice – kjúklingaréttur", "Bramboraky – kartöflupönnukökur"],
    stadreyndir: [
      "Austur-Evrópa nær frá þessu landi í vestri til Rússlands í austri.",
      "Landið var áður hluti af Tékkóslóvakíu."
    ] },
  { id: "slovakia", nafn: "Slóvakía", svaedi: "austur", hofudborg: "Bratislava",
    staerd: 49000, ibuar: 5500000, tungumal: "slóvakíska",
    ja: "áno", nei: "nie", takk: "ďakujem",
    matur: ["Halušky", "Snitsel með súrkáli"],
    stadreyndir: [
      "Landið var áður hluti af Tékkóslóvakíu."
    ] },
  { id: "ungverjaland", nafn: "Ungverjaland", svaedi: "austur", hofudborg: "Búdapest",
    staerd: 93000, ibuar: 9700000, tungumal: "ungverska",
    ja: "igen", nei: "nem", takk: "köszönöm",
    matur: ["Ungversk gúllassúpa", "Halászlé – fiskisúpa"],
    stadreyndir: [
      "Keðjubrúin í höfuðborginni tengir saman borgarhlutana Buda og Pest."
    ] },
  { id: "rumenia", nafn: "Rúmenía", svaedi: "austur", hofudborg: "Búkarest",
    staerd: 238000, ibuar: 19000000, tungumal: "rúmenska",
    ja: "da", nei: "nu", takk: "mulțumesc",
    matur: ["Mititei – kryddpylsa", "Tocănița – kjötpottréttur"],
    stadreyndir: [
      "Í landinu eru Karpatafjöll og Transylvaníu-Alpar.",
      "Þar eru ræktuð tóbak, vínber, sólblóm og rósir."
    ] },
  { id: "bulgaria", nafn: "Búlgaría", svaedi: "austur", hofudborg: "Sofía",
    staerd: 111000, ibuar: 6700000, tungumal: "búlgarska",
    ja: "da", nei: "ne", takk: "blagodarja",
    matur: ["Banitsa – ostaréttur", "Shopska-salat – grænmetissalat", "Bob chorba – baunasúpa"],
    stadreyndir: [
      "Balkanskagi dregur nafn sitt af Balkanfjöllum í þessu landi.",
      "Þar eru Rhodopi- og Balkanfjöll."
    ] },
  { id: "eistland", nafn: "Eistland", svaedi: "austur", hofudborg: "Tallinn",
    staerd: 45000, ibuar: 1400000, tungumal: "eistneska og rússneska",
    ja: "jah", nei: "ei", takk: "aitäh",
    matur: ["Verivorst – svört pylsa", "Mulgikapsad – svínakjöt með súrkáli"],
    stadreyndir: [
      "Tungumálið er skylt finnsku.",
      "Nyrst Eystrasaltsríkjanna.",
      "Landinu tilheyra um 1.500 eyjar."
    ] },
  { id: "lettland", nafn: "Lettland", svaedi: "austur", hofudborg: "Ríga",
    staerd: 65000, ibuar: 1900000, tungumal: "lettneska og rússneska",
    ja: "jā", nei: "nē", takk: "paldies",
    matur: ["Rasols – kartöflusalat", "Gúllasréttir"],
    stadreyndir: [
      "Ísland var fyrsta þjóðin sem viðurkenndi opinberlega sjálfstæði landsins.",
      "Höfuðborgin er stærsta borg Eystrasaltsríkjanna."
    ] },
  { id: "lithaen", nafn: "Litháen", svaedi: "austur", hofudborg: "Vilníus",
    staerd: 65000, ibuar: 2800000, tungumal: "litháíska",
    ja: "taip", nei: "ne", takk: "ačiū",
    matur: ["Pönnukökur", "Duona – rúgbrauð"],
    stadreyndir: [
      "Syðst Eystrasaltsríkjanna.",
      "Í höfuðborginni er einn elsti háskóli Evrópu."
    ] },
  { id: "hvitarussland", nafn: "Hvíta-Rússland", svaedi: "austur", hofudborg: "Minsk",
    staerd: 208000, ibuar: 9000000, tungumal: "hvítrússneska og rússneska",
    ja: "da", nei: "nie", takk: "dziakuju",
    matur: ["Kjötsúpa með grænmeti", "Draniki – kartöfluréttur", "Fylltar kjötrúllur"],
    stadreyndir: [
      "Þar er mikið um nautgripa- og svínarækt og skógarhögg."
    ] },
  { id: "ukraina", nafn: "Úkraína", svaedi: "austur", hofudborg: "Kíev (Kænugarður)",
    staerd: 604000, ibuar: 41000000, tungumal: "úkraínska",
    ja: "tak", nei: "ni", takk: "djakuju",
    matur: ["Kíev-kjúklingur", "Borsjtj – rauðrófusúpa"],
    stadreyndir: [
      "Svarta moldin í landinu er oft kölluð „matarkista Evrópu“.",
      "Rússar réðust inn í landið 24. febrúar 2022."
    ] },
  { id: "moldova", nafn: "Moldóva", svaedi: "austur", hofudborg: "Kísinev",
    staerd: 34000, ibuar: 3000000, tungumal: "moldóvska",
    ja: "da", nei: "nu", takk: "mulțumesc",
    matur: ["Pönnukökur fylltar með lambakjöti eða grænmeti", "Kryddpylsa"],
    stadreyndir: [
      "Þar eru ræktuð tóbak, vínber, sólblóm og rósir."
    ] },
  { id: "russland", nafn: "Rússland", svaedi: "austur", hofudborg: "Moskva",
    staerd: 17075000, ibuar: 144000000, tungumal: "rússneska",
    ja: "da", nei: "njet", takk: "spasíba",
    matur: ["Borsjtj – rauðrófusúpa", "Kholodets", "Fyllt egg"],
    stadreyndir: [
      "Stærsta ríki heims. Það nær yfir 11 tímabelti.",
      "Þar er Volga, lengsta fljót Evrópu.",
      "Þar er Elbrús, hæsti tindur Evrópu, 5642 metra hár."
    ] },

  // ---------------- SUÐUR-EVRÓPA ----------------
  { id: "portugal", nafn: "Portúgal", svaedi: "sudur", hofudborg: "Lissabon",
    staerd: 92000, ibuar: 10500000, tungumal: "portúgalska",
    ja: "sim", nei: "não", takk: "obrigado",
    matur: ["Saltfiskur", "Sardínur", "Caldo verde – hvítkálssúpa"],
    stadreyndir: [
      "Eyjan Madeira í Atlantshafi tilheyrir landinu.",
      "Landið þekur tæplega einn fimmta hluta Íberíuskagans."
    ] },
  { id: "spann", nafn: "Spánn", svaedi: "sudur", hofudborg: "Madríd",
    staerd: 505000, ibuar: 48000000, tungumal: "spænska",
    ja: "sí", nei: "no", takk: "gracias",
    matur: ["Paella – hrísgrjónaréttur", "Tapas – smáréttir", "Tortilla"],
    stadreyndir: [
      "Þar eru töluð fjögur tungumál: spænska, katalónska, baskneska og gallíska.",
      "Alhambrahöllin í Granada er frá tímum mára.",
      "Kanaríeyjar tilheyra landinu."
    ] },
  { id: "andorra", nafn: "Andorra", svaedi: "sudur", hofudborg: "Andorra la Vella",
    staerd: 468, ibuar: 83000, tungumal: "katalónska",
    ja: "sí", nei: "no", takk: "gràcies",
    matur: ["Coques – kryddaðar flatkökur", "Eggjakaka með sveppum"],
    stadreyndir: [
      "Smáríki á Íberíuskaga.",
      "Þar er töluð katalónska."
    ] },
  { id: "monako", nafn: "Mónakó", svaedi: "sudur", hofudborg: "Mónakó",
    staerd: 2, ibuar: 40000, tungumal: "franska",
    ja: "oui", nei: "non", takk: "merci",
    matur: ["Socca – pönnukökur", "Stocafi – þorskréttur"],
    stadreyndir: [
      "Landið er aðeins um 2 km² að stærð.",
      "Höfuðborgin heitir það sama og landið."
    ] },
  { id: "italia", nafn: "Ítalía", svaedi: "sudur", hofudborg: "Róm",
    staerd: 301000, ibuar: 60000000, tungumal: "ítalska",
    ja: "sì", nei: "no", takk: "grazie",
    matur: ["Pasta", "Pitsa", "Ís"],
    stadreyndir: [
      "Þar eru eldfjöllin Etna og Vesúvíus.",
      "Skakki turninn í Pisa er þar.",
      "Eyjarnar Sikiley og Sardinía tilheyra landinu."
    ] },
  { id: "pafagardur", nafn: "Páfagarður", svaedi: "sudur", hofudborg: null,
    staerd: 0.44, ibuar: 764, tungumal: "ítalska",
    ja: "sì", nei: "no", takk: "grazie",
    matur: [],
    stadreyndir: [
      "Minnsta sjálfstæða ríki heims.",
      "Páfinn hefur þar aðsetur."
    ] },
  { id: "sanmarino", nafn: "San Marínó", svaedi: "sudur", hofudborg: "San Marínó",
    staerd: 61, ibuar: 34000, tungumal: "ítalska",
    ja: "sì", nei: "no", takk: "grazie",
    matur: ["Cacciatello – kaka"],
    stadreyndir: [
      "Smáríki á Ítalíuskaga sem hefur verið sjálfstætt frá um 400 e.Kr."
    ] },
  { id: "slovenia", nafn: "Slóvenía", svaedi: "sudur", hofudborg: "Ljúblíana",
    staerd: 20000, ibuar: 2100000, tungumal: "slóvenska",
    ja: "da", nei: "ne", takk: "hvala",
    matur: ["Potica – rúlluterta", "Bled-kaka"],
    stadreyndir: [
      "Út í eyjuna á Bledvatni er aðeins róið á árabátum."
    ] },
  { id: "kroatia", nafn: "Króatía", svaedi: "sudur", hofudborg: "Zagreb",
    staerd: 57000, ibuar: 3900000, tungumal: "króatíska",
    ja: "da", nei: "ne", takk: "hvala",
    matur: ["Skinka frá Dalmatíu", "Ostar frá eyjunni Pag"],
    stadreyndir: [
      "Eyjan Hvar er ein af perlum Adríahafsins.",
      "Borgin Dubrovnik er á heimsminjaskrá UNESCO.",
      "Landið lýsti yfir sjálfstæði 25. júní 1991."
    ] },
  { id: "bosnia", nafn: "Bosnía og Hersegóvína", svaedi: "sudur", hofudborg: "Sarajevó",
    staerd: 51000, ibuar: 3200000, tungumal: "bosníska, króatíska og serbíska",
    ja: "da", nei: "ne", takk: "hvala",
    matur: ["Lonac – kjöt- og grænmetispottréttur"],
    stadreyndir: [
      "Landið var áður hluti af Júgóslavíu."
    ] },
  { id: "serbia", nafn: "Serbía", svaedi: "sudur", hofudborg: "Belgrad",
    staerd: 78000, ibuar: 6700000, tungumal: "serbíska",
    ja: "da", nei: "ne", takk: "hvala",
    matur: [],
    stadreyndir: [
      "Landið var áður hluti af Júgóslavíu."
    ] },
  { id: "svartfjallaland", nafn: "Svartfjallaland", svaedi: "sudur", hofudborg: "Podgorica",
    staerd: 14000, ibuar: 640000, tungumal: "serbíska",
    ja: "da", nei: "ne", takk: "hvala",
    matur: ["Lambakjöt soðið í mjólk"],
    stadreyndir: [
      "Landið var áður hluti af Júgóslavíu."
    ] },
  { id: "kosovo", nafn: "Kosovó", svaedi: "sudur", hofudborg: "Pristina",
    staerd: 11000, ibuar: 1700000, tungumal: "albanska og serbíska",
    ja: "po", nei: "jo", takk: "faleminderit",
    matur: [],
    stadreyndir: [
      "Í stríðsátökunum á Balkanskaga flúði um hálf milljón manna þaðan til Albaníu."
    ] },
  { id: "nmakedonia", nafn: "Norður-Makedónía", svaedi: "sudur", hofudborg: "Skopje",
    staerd: 25000, ibuar: 1800000, tungumal: "makedóníska og albanska",
    ja: "da", nei: "ne", takk: "blagodaram",
    matur: ["Baunapottréttur", "Fylltar paprikur"],
    stadreyndir: [
      "Landið var áður hluti af Júgóslavíu."
    ] },
  { id: "albania", nafn: "Albanía", svaedi: "sudur", hofudborg: "Tírana",
    staerd: 29000, ibuar: 2800000, tungumal: "albanska",
    ja: "po", nei: "jo", takk: "faleminderit",
    matur: ["Qofte – kjötbollur"],
    stadreyndir: [
      "Þar voru byggð um 750 þúsund skotbyrgi af ótta við innrás.",
      "Móðir Teresa, sem fékk friðarverðlaun Nóbels, var þaðan."
    ] },
  { id: "grikkland", nafn: "Grikkland", svaedi: "sudur", hofudborg: "Aþena",
    staerd: 132000, ibuar: 10000000, tungumal: "gríska",
    ja: "nai", nei: "ochi", takk: "efcharistó",
    matur: ["Grískt salat", "Moussaka – ofnréttur"],
    stadreyndir: [
      "Saga Ólympíuleikanna hófst þar árið 776 f.Kr.",
      "Syðsti tangi Evrópu er á eyjunni Gavdos við Krít, sem tilheyrir landinu."
    ] },
  { id: "tyrkland", nafn: "Tyrkland", svaedi: "sudur", hofudborg: "Ankara",
    staerd: 770000, ibuar: 88000000, tungumal: "tyrkneska",
    ja: "evet", nei: "hayır", takk: "teşekkürler",
    matur: ["Kebab", "Pilaki – baunaréttur"],
    stadreyndir: [
      "Aðeins lítill hluti landsins er í Evrópu.",
      "Á 18. og 19. öld réð það (Ottómanveldið) yfir nær öllum Balkanskaga."
    ] },
  { id: "malta", nafn: "Malta", svaedi: "sudur", hofudborg: "Valletta",
    staerd: 316, ibuar: 600000, tungumal: "maltneska",
    ja: "iva", nei: "le", takk: "grazzi",
    matur: ["Fiskipæ", "Kanínupottréttur"],
    stadreyndir: [
      "Eyríki í Miðjarðarhafi."
    ] },
  { id: "kypur", nafn: "Kýpur", svaedi: "sudur", hofudborg: "Nicósía",
    staerd: 9251, ibuar: 1400000, tungumal: "gríska og tyrkneska",
    ja: "nai / evet", nei: "ochi / hayır", takk: "efcharistó / teşekkürler",
    matur: ["Kryddaður lambapottréttur með sítrónu"],
    stadreyndir: [
      "Eyríki sem er landfræðilega hluti af Asíu en oftast talið með Evrópu."
    ] }
];

/* ---------- TENGINGAR (þrautasafn) ----------
   Hver þraut: 4 flokkar með 4 orðum. erfidleiki 1–4 ræður lit. */
const TENGINGAR = [
  { id: "v1", titill: "París og nágrenni", svaedi: "vestur", flokkar: [
    { heiti: "Höfuðborgir í Vestur-Evrópu", ord: ["London", "Dublin", "Bern", "Vaduz"], erfidleiki: 1 },
    { heiti: "Kennileiti í París", ord: ["Eiffelturninn", "Sigurboginn", "Notre Dame", "Louvre"], erfidleiki: 2 },
    { heiti: "„Takk“ á ólíkum tungumálum", ord: ["merci", "danke", "bedankt", "thanks"], erfidleiki: 3 },
    { heiti: "Stórár í Vestur-Evrópu", ord: ["Thames", "Signa", "Loire", "Rín"], erfidleiki: 4 }
  ] },
  { id: "v2", titill: "Borgir, fjöll og eyjar", svaedi: "vestur", flokkar: [
    { heiti: "Borgir í Þýskalandi", ord: ["Hamborg", "München", "Köln", "Frankfurt"], erfidleiki: 1 },
    { heiti: "Borgir í Frakklandi", ord: ["Lyon", "Marseille", "Toulouse", "Nice"], erfidleiki: 2 },
    { heiti: "Fjallgarðar", ord: ["Alparnir", "Júrafjöll", "Pýreneafjöll", "Pennínafjöll"], erfidleiki: 3 },
    { heiti: "Eyjar", ord: ["Korsíka", "Orkneyjar", "Mön", "Hjaltlandseyjar"], erfidleiki: 4 }
  ] },
  { id: "v3", titill: "Stríð og landhelgi", svaedi: "vestur", flokkar: [
    { heiti: "Bandamenn í fyrri heimsstyrjöld", ord: ["Bretland", "Frakkland", "Bandaríkin", "Ítalía"], erfidleiki: 1 },
    { heiti: "Miðveldin í fyrri heimsstyrjöld", ord: ["Þýskaland", "Austurríki-Ungverjaland", "Búlgaría", "Ottómanveldið"], erfidleiki: 2 },
    { heiti: "Tengist þorskastríðunum", ord: ["togvíraklippur", "varðskip", "freigátur", "togarar"], erfidleiki: 3 },
    { heiti: "Landhelgi Íslands í sjómílum", ord: ["4", "12", "50", "200"], erfidleiki: 4 }
  ] },
  { id: "a1", titill: "Austur á bóginn", svaedi: "austur", flokkar: [
    { heiti: "Höfuðborgir í Austur-Evrópu", ord: ["Tallinn", "Ríga", "Vilníus", "Minsk"], erfidleiki: 1 },
    { heiti: "Fljót í Austur-Evrópu", ord: ["Volga", "Dnepr", "Visla", "Don"], erfidleiki: 2 },
    { heiti: "Þjóðlegur matur í Austur-Evrópu", ord: ["Borsjtj", "Pierogi", "Bigos", "Gúllassúpa"], erfidleiki: 3 },
    { heiti: "„Takk“ á ólíkum tungumálum", ord: ["dziękuję", "spasíba", "aitäh", "paldies"], erfidleiki: 4 }
  ] },
  { id: "a2", titill: "Met og fjöll", svaedi: "austur", flokkar: [
    { heiti: "Evrópumet sem finnast í Rússlandi", ord: ["Elbrús", "Volga", "Ladogavatn", "Kaspílægðin"], erfidleiki: 1 },
    { heiti: "Fjallgarðar í Austur-Evrópu", ord: ["Karpatafjöll", "Transylvaníu-Alpar", "Balkanfjöll", "Kákasusfjöll"], erfidleiki: 2 },
    { heiti: "Ræktað í Búlgaríu, Rúmeníu og Moldóvu", ord: ["tóbak", "vínber", "sólblóm", "rósir"], erfidleiki: 3 },
    { heiti: "Tengist kalda stríðinu", ord: ["járntjaldið", "Berlínarmúrinn", "vígbúnaðarkapphlaup", "Sovétríkin"], erfidleiki: 4 }
  ] },
  { id: "a3", titill: "Eystrasalt og nágrenni", svaedi: "austur", flokkar: [
    { heiti: "Lönd í Austur-Evrópu", ord: ["Moldóva", "Slóvakía", "Úkraína", "Ungverjaland"], erfidleiki: 1 },
    { heiti: "„Já“ á ólíkum tungumálum", ord: ["tak", "ano", "igen", "taip"], erfidleiki: 2 },
    { heiti: "Borgir í Póllandi", ord: ["Kraków", "Poznan", "Gdansk", "Lódz"], erfidleiki: 3 },
    { heiti: "Sankti Pétursborg", ord: ["Leníngrad", "Neva", "Vetrarhöllin", "Pétur mikli"], erfidleiki: 4 }
  ] },
  { id: "s1", titill: "Skagar og höf", svaedi: "sudur", flokkar: [
    { heiti: "Skagar í Suður-Evrópu", ord: ["Íberíuskagi", "Ítalíuskagi", "Balkanskagi", "Pelopsskagi"], erfidleiki: 1 },
    { heiti: "Höf í Miðjarðarhafi", ord: ["Adríahaf", "Jónahaf", "Tyrrenahaf", "Eyjahaf"], erfidleiki: 2 },
    { heiti: "Eyjar", ord: ["Sikiley", "Sardinía", "Krít", "Mallorca"], erfidleiki: 3 },
    { heiti: "„Já“ á ólíkum tungumálum", ord: ["sí", "sim", "nai", "po"], erfidleiki: 4 }
  ] },
  { id: "s2", titill: "Ítalía og Spánn", svaedi: "sudur", flokkar: [
    { heiti: "Smáríki í Suður-Evrópu", ord: ["Andorra", "Mónakó", "San Marínó", "Páfagarður"], erfidleiki: 1 },
    { heiti: "Borgir á Ítalíu", ord: ["Mílanó", "Tórínó", "Flórens", "Feneyjar"], erfidleiki: 2 },
    { heiti: "Tungumál töluð á Spáni", ord: ["spænska", "katalónska", "baskneska", "gallíska"], erfidleiki: 3 },
    { heiti: "Ítölsk vörumerki", ord: ["Fiat", "Ferrari", "Armani", "Parmesan"], erfidleiki: 4 }
  ] },
  { id: "s3", titill: "Balkanskagi og Grikkland", svaedi: "sudur", flokkar: [
    { heiti: "Áður hluti af Júgóslavíu", ord: ["Slóvenía", "Króatía", "Serbía", "Svartfjallaland"], erfidleiki: 1 },
    { heiti: "Höfuðborgir á Balkanskaga", ord: ["Tírana", "Skopje", "Sarajevó", "Aþena"], erfidleiki: 2 },
    { heiti: "Vinsælir áfangastaðir Íslendinga á Spáni", ord: ["Mallorca", "Ibiza", "Benidorm", "Kanaríeyjar"], erfidleiki: 3 },
    { heiti: "Keppnisgreinar á fornum Ólympíuleikum", ord: ["glíma", "hnefaleikar", "kerruakstur", "kappreiðar"], erfidleiki: 4 }
  ] }
];

/* ---------- ORÐLA ----------
   Fimm stafa orð úr bókinni. vis = vísbending sem má sýna. */
const ORDLA = [
  { ord: "PARÍS", svaedi: "vestur", vis: "Höfuðborg" },
  { ord: "VADUZ", svaedi: "vestur", vis: "Höfuðborg" },
  { ord: "SIGNA", svaedi: "vestur", vis: "Fljót sem skiptir höfuðborg í tvennt" },
  { ord: "LOIRE", svaedi: "vestur", vis: "Stórá í Frakklandi" },
  { ord: "MÓSEL", svaedi: "vestur", vis: "Siglingaá í Þýskalandi" },
  { ord: "ÞÝSKA", svaedi: "vestur", vis: "Tungumál" },
  { ord: "ENSKA", svaedi: "vestur", vis: "Tungumál" },
  { ord: "WALES", svaedi: "vestur", vis: "Hluti af Stóra-Bretlandi" },
  { ord: "MINSK", svaedi: "austur", vis: "Höfuðborg" },
  { ord: "SOFÍA", svaedi: "austur", vis: "Höfuðborg" },
  { ord: "VOLGA", svaedi: "austur", vis: "Lengsta fljót Evrópu" },
  { ord: "VISLA", svaedi: "austur", vis: "Fljót í Póllandi" },
  { ord: "DNEPR", svaedi: "austur", vis: "Fljót í Austur-Evrópu" },
  { ord: "BIGOS", svaedi: "austur", vis: "Pólskur matur" },
  { ord: "RÓSIR", svaedi: "austur", vis: "Ræktað í Búlgaríu" },
  { ord: "TÓBAK", svaedi: "austur", vis: "Ræktað í Rúmeníu og Moldóvu" },
  { ord: "AÞENA", svaedi: "sudur", vis: "Höfuðborg" },
  { ord: "SPÁNN", svaedi: "sudur", vis: "Land" },
  { ord: "MALTA", svaedi: "sudur", vis: "Eyríki" },
  { ord: "KÝPUR", svaedi: "sudur", vis: "Eyríki" },
  { ord: "PASTA", svaedi: "sudur", vis: "Ítalskur matur" },
  { ord: "PITSA", svaedi: "sudur", vis: "Ítalskur matur" },
  { ord: "TAPAS", svaedi: "sudur", vis: "Spænskir smáréttir" },
  { ord: "MÁRAR", svaedi: "sudur", vis: "Réðu Spáni á 8. öld" }
];

/* ---------- TÍMALÍNA ----------
   ar: neikvæð tala = fyrir Krist */
const ATBURDIR = [
  // Vestur
  { ar: 1719, texti: "Liechtenstein er stofnað", svaedi: "vestur" },
  { ar: 1789, texti: "Franska byltingin: múgurinn ræðst á Bastilluna", svaedi: "vestur" },
  { ar: 1815, texti: "Napóleon tapar orrustunni við Waterloo", svaedi: "vestur" },
  { ar: 1871, texti: "Þýsku smáríkin sameinast í eitt ríki", svaedi: "vestur" },
  { ar: 1889, texti: "Eiffelturninn er tilbúinn fyrir heimssýninguna í París", svaedi: "vestur" },
  { ar: 1914, texti: "Fyrri heimsstyrjöldin hefst", svaedi: "vestur" },
  { ar: 1919, texti: "Versalasamningarnir eru undirritaðir", svaedi: "vestur" },
  { ar: 1921, texti: "Írland verður sjálfstætt ríki", svaedi: "vestur" },
  { ar: 1929, texti: "Kreppan mikla hefst með verðfalli í New York", svaedi: "vestur" },
  { ar: 1933, texti: "Adolf Hitler verður ríkiskanslari Þýskalands", svaedi: "vestur" },
  { ar: 1940, texti: "Bretar hernema Ísland", svaedi: "vestur" },
  { ar: 1944, texti: "Innrásin í Normandí", svaedi: "vestur" },
  { ar: 1949, texti: "Þýskaland skiptist í tvö ríki", svaedi: "vestur" },
  { ar: 1958, texti: "Landhelgi Íslands færð út í 12 sjómílur", svaedi: "vestur" },
  { ar: 1990, texti: "Austur- og Vestur-Þýskaland sameinast", svaedi: "vestur" },
  { ar: 1994, texti: "Ermarsundsgöngin eru tekin í notkun", svaedi: "vestur" },
  { ar: 2004, texti: "Umferð er hleypt á Millau-dalbrúna", svaedi: "vestur" },
  // Austur
  { ar: 1918, texti: "Pólland fær sjálfstæði", svaedi: "austur" },
  { ar: 1922, texti: "Sovétríkin eru stofnuð", svaedi: "austur" },
  { ar: 1939, texti: "Þjóðverjar ráðast inn í Pólland", svaedi: "austur" },
  { ar: 1990, texti: "Lech Walesa er kjörinn forseti Póllands", svaedi: "austur" },
  { ar: 1991, texti: "Sovétríkin falla og kalda stríðinu lýkur", svaedi: "austur" },
  { ar: 2014, texti: "Átök hefjast milli Rússlands og Úkraínu", svaedi: "austur" },
  { ar: 2022, texti: "Rússar ráðast inn í Úkraínu", svaedi: "austur" },
  // Suður
  { ar: -776, texti: "Fyrstu skráðu Ólympíuleikarnir í Olympia", svaedi: "sudur" },
  { ar: 393, texti: "Síðustu skráðu Ólympíuleikarnir til forna", svaedi: "sudur" },
  { ar: 1492, texti: "Kristófer Kólumbus siglir til Ameríku", svaedi: "sudur" },
  { ar: 1564, texti: "Galíleó Galíleí fæðist í Pisa", svaedi: "sudur" },
  { ar: 1861, texti: "Ítalía verður til við sameiningu borgríkjanna", svaedi: "sudur" },
  { ar: 1896, texti: "Fyrstu Ólympíuleikar nútímans í Aþenu", svaedi: "sudur" },
  { ar: 1936, texti: "Borgarastríð hefst á Spáni", svaedi: "sudur" },
  { ar: 1975, texti: "Juan Carlos verður konungur Spánar", svaedi: "sudur" },
  { ar: 1979, texti: "Móðir Teresa fær friðarverðlaun Nóbels", svaedi: "sudur" },
  { ar: 1985, texti: "Einræðisherrann Enver Hoxha í Albaníu deyr", svaedi: "sudur" },
  { ar: 1991, texti: "Króatía lýsir yfir sjálfstæði", svaedi: "sudur" }
];

/* ---------- SATT EÐA ÓSATT ---------- */
const FULLYRDINGAR = [
  // Vestur
  { svaedi: "vestur", texti: "Ermarsundsgöngin liggja á milli Englands og Frakklands.", satt: true,
    skyring: "Göngin eru um 50 km löng járnbrautargöng undir Doversund, tekin í notkun 1994." },
  { svaedi: "vestur", texti: "Á Bretlandseyjum er hægri umferð.", satt: false,
    skyring: "Á Bretlandseyjum er vinstri umferð." },
  { svaedi: "vestur", texti: "Eiffelturninn var byggður fyrir Ólympíuleika í París.", satt: false,
    skyring: "Hann var byggður fyrir heimssýninguna í París árið 1889." },
  { svaedi: "vestur", texti: "Ekkert land í Evrópu á landamæri að fleiri löndum en Þýskaland.", satt: true,
    skyring: "Nágrannalöndin eru níu: Danmörk, Pólland, Tékkland, Austurríki, Sviss, Frakkland, Lúxemborg, Belgía og Holland." },
  { svaedi: "vestur", texti: "Rín rennur til sjávar í Miðjarðarhafið.", satt: false,
    skyring: "Rín á upptök sín í Ölpunum og rennur til sjávar í Norðursjó." },
  { svaedi: "vestur", texti: "Í Liechtenstein er enginn flugvöllur.", satt: true,
    skyring: "Landið er svo lítið að samgöngukerfið er samofið kerfunum í Sviss og Austurríki." },
  { svaedi: "vestur", texti: "Napóleon Bonaparte fæddist í París.", satt: false,
    skyring: "Hann fæddist árið 1769 á eyjunni Korsíku í Miðjarðarhafi." },
  { svaedi: "vestur", texti: "Hæsti tindur Bretlandseyja er Ben Nevis í Skosku hálöndunum.", satt: true,
    skyring: "Ben Nevis er 1343 metra hár." },
  { svaedi: "vestur", texti: "Írland er oft kallað „Eyjan rauða“.", satt: false,
    skyring: "Írland er oft nefnt „Eyjan græna“ vegna þess hve stór hluti þess er graslendi." },
  { svaedi: "vestur", texti: "Bretar hernámu Ísland 10. maí 1940.", satt: true,
    skyring: "Bretar vildu koma í veg fyrir að Þjóðverjar yrðu fyrri til að hertaka landið." },
  { svaedi: "vestur", texti: "Austur- og Vestur-Þýskaland voru sameinuð árið 1975.", satt: false,
    skyring: "Þau voru sameinuð 3. október 1990." },
  { svaedi: "vestur", texti: "Höfnin í Rotterdam í Hollandi er ein sú stærsta í Evrópu.", satt: true,
    skyring: "Stórar uppskipunarhafnir eru við strendur Vestur-Evrópu." },
  // Austur
  { svaedi: "austur", texti: "Rússland er stærsta ríki heims.", satt: true,
    skyring: "Það er um 17 milljón km² og nær yfir 11 tímabelti." },
  { svaedi: "austur", texti: "Volga er lengsta fljót Evrópu.", satt: true,
    skyring: "Volga er um 3700 km löng." },
  { svaedi: "austur", texti: "Elbrús, hæsti tindur Evrópu, er í Ölpunum.", satt: false,
    skyring: "Elbrús er í Kákasusfjöllum í Rússlandi, 5642 metra hár." },
  { svaedi: "austur", texti: "Svarta moldin í Úkraínu er oft kölluð „matarkista Evrópu“.", satt: true,
    skyring: "Þar eru ein bestu ræktarlönd Evrópu." },
  { svaedi: "austur", texti: "Eystrasaltsríkin eru Eistland, Lettland og Finnland.", satt: false,
    skyring: "Eystrasaltsríkin eru Eistland, Lettland og Litháen." },
  { svaedi: "austur", texti: "Ísland var fyrsta þjóðin sem viðurkenndi opinberlega sjálfstæði Lettlands.", satt: true,
    skyring: "Íslendingar voru meðal fyrstu þjóða til að viðurkenna sjálfstæði allra Eystrasaltsríkjanna." },
  { svaedi: "austur", texti: "Sankti Pétursborg hét lengi Stalíngrad.", satt: false,
    skyring: "Borgin hét Leníngrad mestan hluta 20. aldar en fékk aftur nafnið Sankti Pétursborg árið 1991." },
  { svaedi: "austur", texti: "Í saltnámum nærri Kraków í Póllandi er kapella þar sem allt er úr salti.", satt: true,
    skyring: "Allt í kapellunni er úr salti, líka ljósakrónurnar. Námurnar eru á heimsminjaskrá UNESCO." },
  { svaedi: "austur", texti: "Í kalda stríðinu voru háðir miklir bardagar milli Bandaríkjanna og Sovétríkjanna.", satt: false,
    skyring: "Kalda stríðið var ekki hefðbundið stríð heldur stríð um hugmyndir og völd." },
  { svaedi: "austur", texti: "Ladogavatn í Rússlandi er stærsta stöðuvatn Evrópu.", satt: true,
    skyring: "Það er 18.300 km²." },
  { svaedi: "austur", texti: "Eistneska er skyld rússnesku.", satt: false,
    skyring: "Eistneska er skyld finnsku." },
  { svaedi: "austur", texti: "Lægsti staður Evrópu er Kaspílægðin í Rússlandi.", satt: true,
    skyring: "Hún er 28 metrum undir sjávarmáli." },
  // Suður
  { svaedi: "sudur", texti: "Íberíuskagi kallast líka Pýreneaskagi.", satt: true,
    skyring: "Á skaganum eru Portúgal, Spánn, Andorra og Gíbraltar." },
  { svaedi: "sudur", texti: "Gíbraltarsund er um 140 km breitt.", satt: false,
    skyring: "Sundið er aðeins um 14 km breitt og skilur Íberíuskagann frá Afríku." },
  { svaedi: "sudur", texti: "Páfagarður er minnsta sjálfstæða ríki heims.", satt: true,
    skyring: "Páfagarður (Vatíkanið) er í Rómaborg og þar hefur páfinn aðsetur." },
  { svaedi: "sudur", texti: "Galíleó Galíleí var spænskur vísindamaður.", satt: false,
    skyring: "Galíleó var Ítali, fæddur í borginni Pisa." },
  { svaedi: "sudur", texti: "Fyrstu Ólympíuleikar nútímans voru haldnir í Aþenu árið 1896.", satt: true,
    skyring: "Frakkinn Pierre de Coubertin endurvakti leikana árið 1894." },
  { svaedi: "sudur", texti: "Á Spáni er aðeins talað eitt tungumál.", satt: false,
    skyring: "Þar eru töluð fjögur tungumál: spænska, katalónska, baskneska og gallíska." },
  { svaedi: "sudur", texti: "Etna og Vesúvíus eru eldfjöll á Ítalíu.", satt: true,
    skyring: "Ítalíuskagi myndaðist við árekstur Afríku- og Evrasíuflekanna og þar eru jarðskjálftar og eldgos tíð." },
  { svaedi: "sudur", texti: "Móðir Teresa var grísk nunna.", satt: false,
    skyring: "Móðir Teresa var albönsk nunna sem vann meðal fátækra í Kalkútta á Indlandi." },
  { svaedi: "sudur", texti: "Hæsti hiti sem mælst hefur í Evrópu var 50 °C í Sevilla á Spáni.", satt: true,
    skyring: "Hann mældist 4. ágúst 1881." },
  { svaedi: "sudur", texti: "Króatía lýsti yfir sjálfstæði árið 2001.", satt: false,
    skyring: "Króatía lýsti yfir sjálfstæði 25. júní 1991." },
  { svaedi: "sudur", texti: "Í Albaníu voru byggð um 750 þúsund skotbyrgi.", satt: true,
    skyring: "Stjórnvöld óttuðust mjög innrás í landið." },
  { svaedi: "sudur", texti: "Kýpur er landfræðilega hluti af Evrópu.", satt: false,
    skyring: "Kýpur er landfræðilega hluti af Asíu en er oftast talið með Evrópu vegna stjórnmála- og menningartengsla." }
];
