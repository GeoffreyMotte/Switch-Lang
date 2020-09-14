var docTitle = document.title;

let selectText = document.querySelector('#selectText');
let titre = document.querySelector('#titre');
let text = document.querySelector('#text');
// declarer les id a traduire
let TabLang = {};

TabLang["en"] = {
    'selectText' : 'Language selector',
    'titre' : 'Hello everyone!',
    'text'    : 'This is a text in French!',
    // 'ID' : 'text traduit'
};

TabLang["fr"] = {
    'selectText' : 'Selecteur de langue',
    'titre' : 'Bonjours a tous!',
    'text'    : 'Ceci est un texte en francais!',
    // 'ID' : 'text traduit'
};

function ChangeLangage(lang) { 
    let language = TabLang[lang];
    document.title = language['selectText'];


    selectText.innerHTML = language['selectText'];
    titre.innerHTML = language['titre'];
    text.innerHTML = language['text'];
    // VAR.innerHTML = language['ID tableau'];
 };

//  valider le select au change
 $('select').on("change", function( event ) {
    $('#lang-option').submit();
    ChangeLangage(this.value);
});