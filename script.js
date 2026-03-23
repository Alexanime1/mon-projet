emailjs.init("1rWmGhN-U-MxBP9oe");
function envoyerEmail(){
const n=document.getElementById('nom').value,p=document.getElementById('prenom').value,c=document.getElementById('classe').value;
if(!n||!p||!c){alert("Merci de remplir tous les champs.");return;}
const oui=document.getElementById('oui').checked;
emailjs.send("service_xxxxxxx","template_a70ilq1",{
nom:n,prenom:p,classe:c,
presence:oui?"OUI":document.getElementById('non').checked?"NON":"Non précisé",
paiement:oui?(document.getElementById('paiement').checked?"OUI":"NON"):"N/A"
}).then(()=>alert("✅ Envoyé !")).catch(e=>alert("❌ Erreur : "+e.text));
}
function gererAffichagePaiement(){
document.getElementById('ligne-paiement').style.display=document.getElementById('oui').checked?"block":"none";
}