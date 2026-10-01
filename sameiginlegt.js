/* Sameiginleg virkni fyrir alla leiki */

const GEYMSLA = {
  lesa(lykill, sjalfgefid) {
    try {
      const v = localStorage.getItem("evropuleikir-" + lykill);
      return v === null ? sjalfgefid : JSON.parse(v);
    } catch (e) { return sjalfgefid; }
  },
  skrifa(lykill, gildi) {
    try { localStorage.setItem("evropuleikir-" + lykill, JSON.stringify(gildi)); } catch (e) {}
  }
};

function validSvaedi() {
  return GEYMSLA.lesa("svaedi", "allt");
}

function iSvaedi(hlutur) {
  const s = validSvaedi();
  return s === "allt" || hlutur.svaedi === s;
}

function stokka(listi) {
  const a = listi.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function talaIs(n) {
  // 1234567 -> "1.234.567", 0.44 -> "0,44"
  const [heil, brot] = String(n).split(".");
  const h = heil.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return brot ? h + "," + brot : h;
}

function ibuarTexti(n) {
  if (n >= 1000000) {
    const m = n / 1000000;
    return talaIs(Math.round(m * 10) / 10) + " milljónir";
  }
  if (n >= 1000) return talaIs(Math.round(n / 1000)) + " þúsund";
  return talaIs(n);
}

/* Setur svæðaval í hausinn. kallfall keyrir þegar svæði breytist. */
function setjaSvaedaval(kallfall) {
  const stadur = document.getElementById("svaedaval");
  if (!stadur) return;
  const valkostir = [["allt", "Öll svæði"], ["vestur", "Vestur"], ["austur", "Austur"], ["sudur", "Suður"]];
  stadur.innerHTML = valkostir.map(([k, t]) =>
    `<button type="button" data-s="${k}" aria-pressed="${validSvaedi() === k}">${t}</button>`).join("");
  stadur.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    GEYMSLA.skrifa("svaedi", b.dataset.s);
    stadur.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    if (kallfall) kallfall();
  });
}

function landaListi(skilyrdi) {
  return LOND.filter(l => iSvaedi(l) && (!skilyrdi || skilyrdi(l)));
}
