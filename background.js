browser.contextMenus.create({
	id: "wordreference",
	title: "Buscar en WordReference",
	contexts: ["selection"],
	onclick: abrirWR
});
function abrirWR(info) {
	var selection = info.selectionText;
	selection = selection.replace(/\u00AD/g, '');
	var link = "http://www.wordreference.com/es/translation.asp?tranword=" + selection;
	var creating = browser.tabs.create({
		url:link
	});
};