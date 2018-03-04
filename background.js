var langmatrix = {
  enes: "es/translation.asp?tranword=",
  esen: "es/en/translation.asp?spen=",
  esfr: "esfr/",
  espt: "spt/",
  esit: "sit/",
  esde: "esde/",
  eses: "definicion/",
  essin: "sinonimos/",
  esconj: "conj/EsVerbs.aspx?v=",
  enfr: "enfr/",
  fren: "fren/",
  fres: "fres/",
  frconj: "conj/FrVerbs.aspx?v=",
  enit: "enit/",
  iten: "iten/",
  ites: "ites/",
  itit: "definizione/",
  itconj: "conj/ItVerbs.aspx?v=",
  caca: "definicio/",
  ende: "ende/",
  deen: "deen/",
  dees: "dees/",
  ennl: "ennl/",
  nlen: "nlen/",
  ensv: "ensv/",
  sven: "sven/",
  enru: "enru/",
  ruen: "ruen/",
  enpt: "enpt/",
  pten: "pten/",
  ptes: "ptes/",
  enpl: "enpl/",
  plen: "plen/",
  enro: "enro/",
  roen: "roen/",
  encz: "encz/",
  czen: "czen/",
  engr: "engr/",
  gren: "gren/",
  entr: "entr/",
  tren: "tren/",
  enzh: "enzh/",
  zhen: "zhen/",
  enja: "enja/",
  jaen: "jaen/",
  enko: "enko/",
  koen: "koen/",
  enar: "enar/",
  aren: "aren/",
  enen: "definition/",
  enthe: "synonyms/",
  enusg: "EnglishUsage/",
  encol: "EnglishCollocations/"
};

browser.contextMenus.create({
  id: "wordreference",
  title: "WordReference",
  contexts: ["selection"],
  onclick: openWR
});

function openWR(info) {
  var selection = info.selectionText;
  selection = selection.replace(/\u00AD/g, '');
  var wordreflangvector = 'enes';
  browser.storage.local.get("wordreflangvector").then(item => {
    wordreflangvector = item.wordreflangvector;
  });
  var link = 'https://www.wordreference.com/' + langmatrix[wordreflangvector] + selection;
  var creating = browser.tabs.create({
    url:link
  });
};
