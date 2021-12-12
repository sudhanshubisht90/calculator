$(document).ready(function(){
  var ele_loan_amount = document.getElementById("loan_amount");
  var ele_interest_rate = document.getElementById("interest_rate");
  var ele_amortization_year = document.getElementById("amortization_year");
  var ele_term_year = document.getElementById("term_year");
  var ele_monthly_payment = document.getElementById("monthly_payment");
  var ele_int_rate_per = document.getElementById("int_rate_per");
  var ele_extra_payment = document.getElementById("extra_payment");
  var ele_payment_interval = document.getElementById("payment_interval");
  var ele_main_balance = document.getElementById("tr-main-balance-0");
  var ele_d18_value = document.getElementById("d18_value");
  var ele_interest_paid = document.getElementById("interest_paid");
  var ele_principal_paid = document.getElementById("principal_paid");
  var ele_outstanding_balance = document.getElementById("outstanding_balance");
  var ele_total_payments = document.getElementById("total_payments");
  var ele_total_interest = document.getElementById("total_interest");
  var ele_number_of_years = document.getElementById("number_of_years");

  var main_number_of_month = 0;
  var main_payment_of_month = 0;
  var main_ext_month_payment = 0;
  var main_row_interest = 0;
  var main_row_principal = 0;
  var main_row_balance = 0;

   $(document).on("click","#calculate",function(){
     $("#calculate").attr('disabled','disabled').text('calculating').append("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>");
     getArrangeInputs();
     $(".dynamic-row").remove();
    var number_of_month = 0;
    var payment_of_month = 0;
    var ext_month_payment = 0;
    var row_interest = 0;
    var row_principal = 0;
    var row_balance = 0;
    var interest_rate_value = ele_interest_rate.value;
    ele_main_balance.value = ele_loan_amount.value;
    var number_of_payments = (amortization_year.value*12);
    var int_rate_per = get_int_rate_per(interest_rate_value);
    ele_int_rate_per.value = int_rate_per;
    ele_monthly_payment.value = -pmt((int_rate_per/100),number_of_payments,ele_loan_amount.value,0).toFixed(2);

    main_number_of_month = getMonthNumber(ele_amortization_year.value, ele_main_balance.value, number_of_month);
    main_payment_of_month = getPayment(ele_amortization_year.value,ele_main_balance.value,ele_monthly_payment.value,parseFloat(ele_int_rate_per.value));
    main_ext_month_payment = getExtPayment(main_number_of_month,ele_main_balance.value);
    main_row_interest = getInterest(main_number_of_month,ele_main_balance.value);
    main_row_principal = getPrincipal(main_number_of_month);
    main_row_balance = getBalance(main_number_of_month,ele_main_balance.value);
    if(main_number_of_month > 0){
      appendInstallmentList(main_number_of_month);
    }
  });

  function appendInstallmentList(main_number_of_month){
    var string = '';
    string +='<tr class="dynamic-row installment-row-'+main_number_of_month+'">';
    string +='<td class="tr-month" id="tr-month-'+main_number_of_month+'" data-value="0">';
    string +='</td>';
    string +='<td class="tr-payment" id="tr-payment-'+main_number_of_month+'" data-value="0">';
    string +='</td>';
    string +='<td class="tr-ext-payment" id="tr-ext-payment-'+main_number_of_month+'" data-value="0">';
    string +='</td>';
    string +='<td class="tr-interest" id="tr-interest-'+main_number_of_month+'" data-value="0">';
    string +='</td>';
    string +='<td class="tr-principal" id="tr-principal-'+main_number_of_month+'" data-value="0">';
    string +='</td>';
    string +='<td class="tr-balance">';
    string +='<div class="input-group">';
    string +='<div class="input-group-prepend">';
    string +='<span class="input-group-text" id="inputGroupPrepend">$</span>';
    string +='</div>';
    string +='<input disabled type="text" class="form-control main_balance tr-main-balance" id="tr-main-balance-'+main_number_of_month+'" name="tr-balance" value="10000">';
    string +='</div>';
    string +='</td>';
    string +='</tr>';

    $(".installment-row-"+main_number_of_month).remove();
    $(".installment-list").append(string);
    $("#tr-month-"+main_number_of_month).attr('data-value',main_number_of_month).text(main_number_of_month);
    $("#tr-payment-"+main_number_of_month).attr('data-value',main_payment_of_month).text(main_payment_of_month);
    $("#tr-ext-payment-"+main_number_of_month).attr('data-value',main_ext_month_payment).text(main_ext_month_payment);
    $("#tr-interest-"+main_number_of_month).attr('data-value',main_row_interest).text(main_row_interest);
    $("#tr-principal-"+main_number_of_month).attr('data-value',main_row_principal).text(main_row_principal);
    $("#tr-main-balance-"+main_number_of_month).attr('data-value',main_row_balance).val(main_row_balance);
    if(main_row_balance > 0){
      setTimeout(function(){
        getNextRowInstallment(main_number_of_month,main_row_balance);
      },5);
    }
    else{
      $("#calculate").removeAttr('disabled').text("Calculate");
      ele_interest_paid.value = getPaidInterest();
      ele_principal_paid.value = getPaidPrincipal();
      ele_outstanding_balance.value = getOutstandingBalance();
      if(ele_outstanding_balance.value < 0){
        $("#outstanding_balance").css('color','red');
      }
      else{
        $("#outstanding_balance").css('color','black');
      }
      ele_total_payments.value = getTotalPayments(main_number_of_month);
      ele_total_interest.value = getTotalInterest(main_number_of_month);
      ele_number_of_years.value = getNumberOfYears(main_number_of_month);
      return false;
    }
  }
  var percentage = function(num, per){
    return (num/100)*per;
  }
  var getArrangeInputs = function(){
    $("input[type='number'].edit").each(function(index,ele) {
        //$(ele).val($(ele).val().replace(/[^0-9]/g, 0));
        if($.trim($(ele).val())===""){
          $(ele).val(0);
        }
        if($(ele).attr('id')==='amortization_year' && $(ele).val()<=1){
          $(ele).val(1);
        }
        if($(ele).attr('id')==='loan_amount' && $(ele).val()<=1){
          $(ele).val(1);
        }
        if($(ele).attr('id')==='loan_amount' || $(ele).attr('id')==='interest_rate'){
          $(ele).val(parseFloat($(ele).val()).toFixed(2));
        }
    });
  }

  var getPaidInterest = function(){
    var amount = 0.00;
    var terms_are = (ele_term_year.value*12);
    for(i=1;i<=terms_are;i++){
      if($("#tr-interest-"+i).length > 0){
        amount+=parseFloat($("#tr-interest-"+i).attr("data-value"));
      }
    }
    return amount.toFixed(2);
  }

  var getPaidPrincipal = function(){
    var amount = 0.00;
    var terms_are = (ele_term_year.value*12);
    for(var i=1;i<=terms_are;i++){
      if($("#tr-principal-"+i).length > 0){
        amount+=parseFloat($("#tr-principal-"+i).attr("data-value"));
      }
    }
    return amount.toFixed(2);
  }

  var getOutstandingBalance = function(){
    return (ele_loan_amount.value-ele_principal_paid.value).toFixed(2);
  }

  var getTotalPayments = function(last_month){
    var totalInterest = 0.00;
    var totalPrincipal = 0.00;
    for(var j=1;j<=last_month;j++){
      totalInterest+=parseFloat($("#tr-interest-"+j).attr("data-value"));
      totalPrincipal+=parseFloat($("#tr-principal-"+j).attr("data-value"));
    }
    return (totalInterest+totalPrincipal).toFixed(2);
  }

  var getTotalInterest = function(last_month){
    var totalInterest = 0.00;
    for(var k=1;k<=last_month;k++){
      totalInterest+=parseFloat($("#tr-interest-"+k).attr("data-value"));
    }
    return (totalInterest).toFixed(2);
  }

  var getNumberOfYears = function(last_month){
    return (last_month/12).toFixed(2);
  }

  var getNextRowInstallment = function(previous_number_of_month,previous_row_balance){
    main_number_of_month = getMonthNumber(ele_amortization_year.value, previous_row_balance, previous_number_of_month);
    main_payment_of_month = getPayment(ele_amortization_year.value,previous_row_balance,ele_monthly_payment.value,parseFloat(ele_int_rate_per.value));
    main_ext_month_payment = getExtPayment(main_number_of_month,previous_row_balance);
    main_row_interest = getInterest(main_number_of_month,previous_row_balance);
    main_row_principal = getPrincipal(main_number_of_month);
    main_row_balance = getBalance(main_number_of_month,previous_row_balance);
    if(main_number_of_month > 0){
      appendInstallmentList(main_number_of_month);
    }
  }

  function getBalance(main_number_of_month,balance_amount){
    return (main_number_of_month == 0)?0:(balance_amount-main_row_principal).toFixed(2);
  }

  function getPrincipal(main_number_of_month){

    let col_principal = 0;
    if(main_number_of_month == 0){
      col_principal = 0;
    }
    else{
      col_principal = (main_payment_of_month-main_row_interest);
      col_principal += (parseInt(main_ext_month_payment)==0)?0:parseInt(main_ext_month_payment);
    }

    return col_principal.toFixed(2);
  }

  function getInterest(main_number_of_month,balance_amount){
    let col_interest = (0).toFixed(2);
    if(main_number_of_month == 0){
      col_interest = (0).toFixed(2);
    }
    else{
      //col_interest = ((parseFloat(ele_int_rate_per.value)*balance_amount)/100);
      //col_interest = ((parseFloat(parseFloat(ele_int_rate_per.value))/100)*balance_amount);
      balance_amount = parseFloat(balance_amount).toFixed(2);
      //col_interest = 2449.453816;
      //col_interest = (((parseFloat(ele_int_rate_per.value)*balance_amount)/100)+0.01).toFixed(2);
      col_interest = (((parseFloat(ele_int_rate_per.value)*balance_amount)/100)).toFixed(2);
    }
    return col_interest;
  }

  function getExtPayment(main_number_of_month,balance_amount){
    var main_ext_payment = (0).toFixed(2);
    var plus_with_ext_payment = (0).toFixed(2);
    if(parseInt(balance_amount)<=parseInt(ele_monthly_payment.value) || main_number_of_month == 0){
      main_ext_payment = (0).toFixed(2);
    }
    else{
      if(ele_d18_value.value>0){
        if((main_number_of_month%ele_payment_interval.value) == 0){
          main_ext_payment = (ele_d18_value.value).toFixed(2);
        }
        else{
          main_ext_payment = (0).toFixed(2);
        }
      }
      else{
        main_ext_payment = (0).toFixed(2);
      }

    }
    if(ele_payment_interval.value==0 || parseInt(balance_amount)<=parseInt(ele_monthly_payment.value)){
      plus_with_ext_payment = (0).toFixed(2);
    }
    else{
      if((parseInt(main_number_of_month)%parseInt(ele_payment_interval.value)) == 0){
        plus_with_ext_payment = ele_extra_payment.value;
      }
      else{
        plus_with_ext_payment = (0).toFixed(2);
      }
    }
    return  parseFloat(parseFloat(main_ext_payment)+parseFloat(plus_with_ext_payment)).toFixed(2);
  }

  function getPayment(amortization_year, main_balance, monthly_payment, int_rate_per){
    var payment_of_month = 0.00;
    if(main_number_of_month == 0){
      payment_of_month = payment_of_month.toFixed(2);
    }
    else{
      if(main_number_of_month==(amortization_year*12) || monthly_payment>((1+int_rate_per/100)*main_balance)){
        payment_of_month = ((1+(int_rate_per/100))*main_balance).toFixed(2);
      }
      else{
        payment_of_month = monthly_payment;
      }
    }
    return payment_of_month;
  }

  function getMonthNumber(amortization_year, main_balance, number_of_month){
    if(main_balance == 0){
      number_of_month = 0;
    }
    else{
      if(number_of_month >= (amortization_year*12) || main_balance <=0){
        number_of_month = 0;
      }
      else{
        number_of_month = (number_of_month+1);
      }
    }
    return number_of_month;
  }



  function get_int_rate_per(interest_rate_value){
    var result = (parseFloat(((parseFloat((1).toFixed(2))+interest_rate_value/(100*2)).toFixed(2)**(2/12).toFixed(10)).toFixed(9))-parseFloat(1.00)).toFixed(12);
    return (result*100).toFixed(5);
  }

  function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
    future_value = typeof future_value !== 'undefined' ? future_value : 0;
    type = typeof type !== 'undefined' ? type : 0;
    if(rate_per_period != 0.0){
    // Interest rate exists
    var q = Math.pow(1 + rate_per_period, number_of_payments);
    return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
    } else if(number_of_payments != 0.0){
    // No interest rate, but number of payments exists
    return -(future_value + present_value) / number_of_payments;
    }
    return 0;
  }

  $("#calculate").click();
});
