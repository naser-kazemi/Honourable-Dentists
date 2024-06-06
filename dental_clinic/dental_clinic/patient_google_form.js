// Google Apps Script (Code.gs)
function onFormSubmit(e) {

    var responses = e.values;

    // print the type of e
    Logger.log(typeof e);

    var data = {
        first_name: responses[1],
        last_name: responses[2],
        national_id: responses[3],
        birth_date: responses[4],
        province: responses[5],
        city: responses[6],
        phone_number: responses[7],
        address: responses[8],
        is_patient: true,
    };

    var options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(data)
    };

    var url = 'https://6fe0-5-216-98-58.ngrok-free.app/api/users/create/';  // Replace with your ngrok URL
    UrlFetchApp.fetch(url, options);
}

function setupTrigger() {
    var form = FormApp.openById('1wTt-TvgSRXds_Jz1lIl9ihWH43XXpXS-9qsEYNTQ1c4');  // Replace with your actual form ID
    ScriptApp.newTrigger('onFormSubmit')
        .forForm(form)
        .onFormSubmit()
        .create();
}
