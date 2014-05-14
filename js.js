
// JavaScript Document
function calculateConversionRate() {
    var rate;
    var wtStr = document.form.weight.value;
    var htStr = document.form.height.value;
    if (!wtStr || !htStr) {
        rate = '--';
    }
    else {
        var weight = parseFloat(wtStr);
        var height = parseFloat(htStr);
        var percent = (weight / height * 100).toFixed(2);
        if (!isFinite(percent)) rate = '--';
        else rate = percent + '%';
    }
    document.form.ConversionRate.value = rate;
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
    var $email = $('input[type="email"]');
	if ($email.val().indexOf("." && "@") > -1) {
		$('.screen').removeClass('unsuccessful').addClass('successful');
	} else {
		$('.screen').removeClass('successful').addClass('unsuccessful');
	};
};

calculateConversionRate();
