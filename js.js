var $email = $('input[type="email"]');

// JavaScript Document
function calculateConversionRate() {
    var wtStr =document.form.weight.value;
    if (!wtStr)
        wtStr = '0';
    var htStr = document.form.height.value;
    if (!htStr)
        htStr = '0';
    var weight = parseFloat(wtStr);
    var height = parseFloat(htStr);
    document.form.ConversionRate.value = (weight / height).toFixed(2);
}



function calculateViews() {
    var wtStr =document.form.ConversionRate.value;
    if (!wtStr)
        wtStr = '0';
    var htStr = document.form.ConversionRate.value;
    if (!htStr)
        htStr = '0';
    var ConversionRate = parseFloat(wtStr);
    var height = parseFloat(htStr);
    document.form.weight.value = (ConversionRate * height).toFixed(2);
}


function valEmail(){
	if ($email.val().indexOf("." && "@") > -1) {
		$('.screen').removeClass('unsuccessful').addClass('successful');
	} else {
		$('.screen').removeClass('successful').addClass('unsuccessful');
	};
};


