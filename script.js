emailjs.init("1rWmGhN-U-MxBP9oe");
const G=e=>document.getElementById(e);
const URL="https://script.google.com/macros/s/AKfycbzeDUa2x8Cs0rCdGUa-l3cZY-5NNPCDZ0iwS-ExykEOH_r5bqvKVTxh3HvJsJRGkQy5lA/exec";

function majCompteur(){
  fetch(URL).then(r=>r.json()).then(d=>G('compteur').textContent="👥 "+d.count+" élève"+(d.count>1?"s ont":"  a")+" répondu").catch(()=>G('compteur').textContent="");
}

function envoyerEmail(){
const n=G('nom').value,p=G('prenom').value,c=G('classe').value;
if(!n||!p||!c)return alert("Merci de remplir tous les champs.");
const oui=G('oui').checked,data={nom:n,prenom:p,classe:c,presence:oui?"OUI":G('non').checked?"NON":"Non précisé",paiement:oui?(G('paiement').checked?"OUI":"NON"):"N/A"};
fetch(URL,{method:"POST",body:JSON.stringify(data)}).then(()=>majCompteur()).catch(console.error);
emailjs.send("service_xxxxxxx","template_a70ilq1",data).then(()=>alert("✅ Envoyé !")).catch(e=>alert("❌ Erreur : "+e.text));
}

function gererAffichagePaiement(){G('ligne-paiement').style.display=G('oui').checked?"block":"none";}

majCompteur();
