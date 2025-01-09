function onFormSubmit(e) {

    /* 
    When a form is submitted, copy the response data over into
    the roster spreadsheet in the appropriate format
    */

    const sheet = SpreadsheetApp.getActiveSpreadsheet();

    // Get the form responses sheet
    const responseSheet = sheet.getSheetByName('Form Responses'); // Change if your sheet name differs
    const responseRow = e.values; // Access the submitted row

    // Get the pre-made table sheet and set the target range
    const targetSheet = sheet.getSheetByName('Sheet1'); // Change to your target sheet name
    const lastRow = targetSheet.getLastRow() + 1; // Find next empty row

    // Define the columns you want to copy (adjust indices as needed)
    const columnsToCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Adjust for your specific columns
    const valuesToCopy = columnsToCopy.map(i => responseRow[i]);

    // add Student column
    valuesToCopy.push(valuesToCopy[8]);
    valuesToCopy[8] = valuesToCopy[7];
    valuesToCopy[7] = "Student";


    // Insert values into the target sheet
    targetSheet.getRange(lastRow, 1, 1, valuesToCopy.length).setValues([valuesToCopy]);

    // Sort alphabetically
    targetSheet.getRange(5, 1, 100, 10).sort(1)
}