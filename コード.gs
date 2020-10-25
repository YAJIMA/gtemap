function myFunction() {
  // CSVのURL
  const csv_url = "http://code.hatchbit.jp/tests/json/dummy.csv";
  
  // 出力先のスプレッドシート
  const spreadsheet_url = "https://docs.google.com/spreadsheets/d/1qzAHkHCzob2Kgit1pGBz23PaYVcgw-XhTxt-NEnGEug/edit?usp=sharing";
  const spreadsheet_id = "1qzAHkHCzob2Kgit1pGBz23PaYVcgw-XhTxt-NEnGEug";
  const sheet_name_1 = "シート1";
  
  // スプレッドシートの設定
  var sheet = SpreadsheetApp.openByUrl(spreadsheet_url).getSheetByName(sheet_name_1);
  
  // CSVデータを取り込み
  var csv_context = UrlFetchApp.fetch(csv_url).getContentText("UTF-8");
  var csv_data = Utilities.parseCsv(csv_context, ",");
  
  sheet.getRange(1, 1, csv_data.length, csv_data[0].length).setValues(csv_data);
}
