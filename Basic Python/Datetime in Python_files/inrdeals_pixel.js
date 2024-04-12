var clid = jQuery('#script').attr('data-origin');
var ct = jQuery('#script').attr('data-ct');
if(ct)ct=ct;else ct=30;
function getUrlParameter(sParam = 'rclid') {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
function setClickIDValue(name=clid,value=getUrlParameter(),exp_days=ct) {
  var d = new Date();
  d.setTime(d.getTime() + (exp_days*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getClickIDValue(name=clid) {
  var cname = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
    while(c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if(c.indexOf(cname) == 0){
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
    var clkid = getClickIDValue();
        if (clkid !== "") {
                var trackParam = getUrlParameter();
                if(trackParam !== undefined){
                    if(clkid != getUrlParameter()){
                        setClickIDValue();
                    }
                }
        }
        else {
            setClickIDValue();
        }
        console.log(getClickIDValue());
}
checkCookie();

function getAdvertiserData(domain,offerId,txnID, amount,coupon,extra_info,category=null){
    var clkid = getClickIDValue();
    if (clkid !== "") {
        // if(clkid !== 'undefined'){
            jQuery.get(domain + "/pixel/v2",
                {
                    offer_id: offerId,
                    clkid: clkid,
                    sale_amount: amount,
                    trans_id: txnID,
                    cf_2: coupon,
                    extra_info: extra_info,
                    category: category,
                },
                function (data, status) {
                    console.log('Successful');
                });
        // }
    }
}