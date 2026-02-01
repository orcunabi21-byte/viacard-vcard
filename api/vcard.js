export default function handler(req, res) {
  res.setHeader("Content-Type", "text/vcard; charset=utf-8");
  res.setHeader("Content-Disposition", "inline");

  res.status(200).send(`BEGIN:VCARD
VERSION:3.0
N:Aslan;Orçun;;;
FN:Orçun Aslan
TITLE:Dijital Çözüm Uzmanı
TEL;TYPE=CELL:905413011544
EMAIL:aslantisdesign@gmail.com
URL:https://www.viacard.tr
END:VCARD`);
}

