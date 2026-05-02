// Google Apps Script — paste this into Extensions > Apps Script in your Google Sheet
// Then Deploy > New deployment > Web app (Execute as: Me, Access: Anyone)
// Copy the URL and replace SHEET_URL in index.html

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Basic validation
  var email = (data.email || '').trim().toLowerCase();
  if (!email || email.indexOf('@') === -1) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'invalid' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var now = new Date();
  var rows = sheet.getDataRange().getValues();

  // Check for duplicate email and rate limiting
  for (var i = rows.length - 1; i >= 1; i--) {
    if ((rows[i][1] || '').toLowerCase() === email) {
      // Duplicate: reject if submitted within the last 24 hours
      var prevTime = new Date(rows[i][0]);
      if (now - prevTime < 24 * 60 * 60 * 1000) {
        return ContentService.createTextOutput(JSON.stringify({ status: 'duplicate' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
  }

  // Global rate limit: reject if more than 50 submissions in the last hour
  var recentCount = 0;
  for (var j = rows.length - 1; j >= 1; j--) {
    var rowTime = new Date(rows[j][0]);
    if (now - rowTime > 60 * 60 * 1000) break; // rows are chronological, stop early
    recentCount++;
  }
  if (recentCount >= 50) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'rate_limited' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Append row: timestamp, email, source
  sheet.appendRow([
    now.toISOString(),
    email,
    data.source || 'unknown'
  ]);

  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Sigmaflo demo form endpoint');
}
