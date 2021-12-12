$(document).ready(function(){
  var annual_income = document.getElementById("annual_income");
  var monthly_income = document.getElementById("monthly_income");
  var maximum_pithod_1 = document.getElementById("Maximum_PITHOD_1");
  var maximum_pithod_2 = document.getElementById("Maximum_PITHOD_2");
  var gds = document.getElementById("gds");
  var tds = document.getElementById("tds");
  var maximum_pith_1 = document.getElementById("Maximum_PITH_1");
  var maximum_pith_2 = document.getElementById("Maximum_PITH_2");
  var installment_pmts = document.getElementById("installment_pmts");
  var revolving_balance = document.getElementById("revolving_balance");
  var maximum_pith_lesser = document.getElementById("Maximum_PITH_lesser");
  var less_annual_tax_1 = document.getElementById("less_annual_tax_1");
  var less_annual_tax_2 = document.getElementById("less_annual_tax_2");
  var heat = document.getElementById("heat");
  var condo_fees = document.getElementById("condo_fees");
  var maximum_PI = document.getElementById("maximum_PI");
  var amortization = document.getElementById("amortization");
  var stress_test_rate = document.getElementById("stress_test_rate");
  var gross_loan_amount = document.getElementById("gross_loan_amount");
  var down_payment = document.getElementById("down_payment");
  var down_payment_2 = document.getElementById("down_payment_2");
  var cmhc_premium_1 = document.getElementById("cmhc_premium_1");
  var cmhc_premium_2 = document.getElementById("cmhc_premium_2");
  var net_loan_amount = document.getElementById("net_loan_amount");
  var purchase_price = document.getElementById("purchase_price");
  var gds_value,tds_value;
   $(document).on("keyup","#annual_income",function(){
    annual_income = $(this).val();
    monthly_income.value = Math.round(parseInt(annual_income)/12);
    $("#gds,#tds").trigger("keyup");
  });

  $(document).on("keyup","#gds,#tds",function(){
    maximum_pithod_1.value = Math.round((monthly_income.value)*(gds.value/100));
    $("#installment_pmts,#revolving_balance").trigger("keyup");
    $("#less_annual_tax_1").trigger("keyup");
  });

  $(document).on("keyup","#installment_pmts,#revolving_balance",function(){
    //maximum_pithod_2.value = Math.round((parseInt(tds.value)*parseInt(monthly_income.value))/100);
    maximum_pithod_2.value = Math.round((monthly_income.value)*(tds.value/100));
    maximum_pith_1.value = maximum_pithod_1.value;
    maximum_pith_2.value = (parseInt(maximum_pithod_2.value)-parseInt(installment_pmts.value)-(parseInt(revolving_balance.value)*0.03));
    maximum_pith_lesser.value = (parseInt(maximum_pith_1.value) < parseInt(maximum_pith_2.value))?maximum_pith_1.value:maximum_pith_2.value;
    $("#heat,#condo_fees").trigger("keyup");
  });

  $(document).on("keyup","#less_annual_tax_1",function(){
    less_annual_tax_2.value = Math.round(less_annual_tax_1.value/12);
  });

  $(document).on("keyup","#heat,#condo_fees",function(){
    maximum_PI.value = maximum_pith_lesser.value-Math.round(less_annual_tax_1.value/12)-heat.value-Math.round(condo_fees.value/2);
    calculatePv();
  });

  $(document).on("keyup","#down_payment",function(){
    changeInLastSection();
  });

  $(document).on('keypress','input[type=text]', function(evnt){
    var charC = (evnt.which) ? evnt.which : evnt.keyCode;
    var ele_v = $(this).val();
            if (charC == 46) {
                if (ele_v.indexOf('.') === -1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (charC > 31 && (charC < 48 || charC > 57))
                    return false;
            }
            return true;
  });

  $("#annual_income").trigger("keyup");


});
var calculatePv = function(){
  var r = (1+((stress_test_rate.value/2)/100));
  var r2 = (2/12);
  var expo = (r**r2);
  var param1 = (expo-1);
  var param2 = (amortization.value*12);
  var param3 = maximum_PI.value;
  // console.log("r: "+r);
  // console.log("r2: "+r2);
  // console.log("expo: "+expo);
  // console.log("param1: "+param1);
  // console.log("param2: "+param2);
  // console.log("param3: "+param3);
  pv(param1,param2,param3,0,1);
}
// This function is from David Goodman's Javascript Bible.
function conv_number(expr, decplaces) {
    var str = "" + Math.round(eval(expr) * Math.pow(10, decplaces));
    while (str.length <= decplaces) {
        str = "0" + str;
    }

    var decpoint = str.length - decplaces;
    return (str.substring(0, decpoint) + "." + str.substring(decpoint, str.length));
}
// Parameters are rate, total number of periods, payment made each period, future value and type (when payments are due)
function pv(rate, nper, pmt, fv,type) {
    nper =nper;
    pmt =pmt;
    fv = fv;
    if (rate == 0) { // Interest rate is 0
        pv_value = -(fv + (pmt * nper));
    } else {
        x = Math.pow(1 + rate, -nper);
        y = Math.pow(1 + rate, nper);
        pv_value = Math.round((x * (fv * rate - pmt + y * pmt)) / rate);
    }
  pv_value = conv_number(pv_value, 2);
  //gross_loan_amount.value = (Math.round(pv_value));
  gross_loan_amount.value = (Math.round(pv_value)-56);
  changeInLastSection();
}

var changeInLastSection = function(){
  if(down_payment.value<5){
    cmhc_premium_1.value = 'ERROR';
  }
  else if(down_payment.value>=5 && down_payment.value<10){
    cmhc_premium_1.value = 4.00.toFixed(2);
  }
  else if(down_payment.value>=10 && down_payment.value<15){
    cmhc_premium_1.value = 3.10.toFixed(2);
  }
  else if(down_payment.value>=15 && down_payment.value<20){
    cmhc_premium_1.value = 2.80.toFixed(2);
  }
  else{
    cmhc_premium_1.value = 0;
  }
  net_loan_amount.value = Math.round(gross_loan_amount.value/((100+parseFloat(cmhc_premium_1.value))/100));
  purchase_price.value = parseInt(net_loan_amount.value/((100-parseFloat(down_payment.value))/100));
  down_payment_2.value = purchase_price.value-net_loan_amount.value;
  cmhc_premium_2.value = gross_loan_amount.value-net_loan_amount.value;
}
