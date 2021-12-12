$(document).ready(function(){var t=document.getElementById("loan_amount"),e=document.getElementById("interest_rate"),a=document.getElementById("amortization_year"),n=document.getElementById("term_year"),r=document.getElementById("monthly_payment"),l=document.getElementById("int_rate_per"),u=document.getElementById("extra_payment"),o=document.getElementById("payment_interval"),d=document.getElementById("tr-main-balance-0"),c=document.getElementById("d18_value"),v=document.getElementById("interest_paid"),s=document.getElementById("principal_paid"),p=document.getElementById("outstanding_balance"),m=document.getElementById("total_payments"),F=document.getElementById("total_interest"),x=document.getElementById("number_of_years"),y=0,f=0,g=0,_=0,I=0,b=0;function B(t){var e="";if(e+='<tr class="dynamic-row installment-row-'+t+'">',e+='<td class="tr-month" id="tr-month-'+t+'" data-value="0">',e+="</td>",e+='<td class="tr-payment" id="tr-payment-'+t+'" data-value="0">',e+="</td>",e+='<td class="tr-ext-payment" id="tr-ext-payment-'+t+'" data-value="0">',e+="</td>",e+='<td class="tr-interest" id="tr-interest-'+t+'" data-value="0">',e+="</td>",e+='<td class="tr-principal" id="tr-principal-'+t+'" data-value="0">',e+="</td>",e+='<td class="tr-balance">',e+='<div class="input-group">',e+='<div class="input-group-prepend">',e+='<span class="input-group-text" id="inputGroupPrepend">$</span>',e+="</div>",e+='<input disabled type="text" class="form-control main_balance tr-main-balance" id="tr-main-balance-'+t+'" name="tr-balance" value="10000">',e+="</div>",e+="</td>",e+="</tr>",$(".installment-row-"+t).remove(),$(".installment-list").append(e),$("#tr-month-"+t).attr("data-value",t).text(t),$("#tr-payment-"+t).attr("data-value",f).text(f),$("#tr-ext-payment-"+t).attr("data-value",g).text(g),$("#tr-interest-"+t).attr("data-value",_).text(_),$("#tr-principal-"+t).attr("data-value",I).text(I),$("#tr-main-balance-"+t).attr("data-value",b).val(b),!(b>0))return $("#calculate").removeAttr("disabled").text("Calculate"),v.value=h(),s.value=w(),p.value=k(),p.value<0?$("#outstanding_balance").css("color","red"):$("#outstanding_balance").css("color","black"),m.value=z(t),F.value=A(t),x.value=C(t),!1;setTimeout(function(){G(t,b)},5)}$(document).on("click","#calculate",function(){$("#calculate").attr("disabled","disabled").text("calculating").append("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>"),E(),$(".dynamic-row").remove();var n=e.value;d.value=t.value;var i=12*amortization_year.value,u=function(t){return(100*(parseFloat(((parseFloat(1..toFixed(2))+t/200).toFixed(2)**(2/12).toFixed(10)).toFixed(9))-parseFloat(1)).toFixed(12)).toFixed(5)}(n);l.value=u,r.value=-function(t,e,a,n,r){if(n=void 0!==n?n:0,r=void 0!==r?r:0,0!=t){var l=Math.pow(1+t,e);return-t*(n+l*a)/((-1+l)*(1+t*r))}if(0!=e)return-(n+a)/e;return 0}(u/100,i,t.value,0).toFixed(2),y=D(a.value,d.value,0),f=q(a.value,d.value,r.value,parseFloat(l.value)),g=j(y,d.value),_=T(y,d.value),I=P(y),b=M(y,d.value),y>0&&B(y)});var E=function(){$("input[type='number'].edit").each(function(t,e){""===$.trim($(e).val())&&$(e).val(0),"amortization_year"===$(e).attr("id")&&$(e).val()<=1&&$(e).val(1),"loan_amount"===$(e).attr("id")&&$(e).val()<=1&&$(e).val(1),"loan_amount"!==$(e).attr("id")&&"interest_rate"!==$(e).attr("id")||$(e).val(parseFloat($(e).val()).toFixed(2))})},h=function(){var t=0,e=12*n.value;for(i=1;i<=e;i++)$("#tr-interest-"+i).length>0&&(t+=parseFloat($("#tr-interest-"+i).attr("data-value")));return t.toFixed(2)},w=function(){for(var t=0,e=12*n.value,a=1;a<=e;a++)$("#tr-principal-"+a).length>0&&(t+=parseFloat($("#tr-principal-"+a).attr("data-value")));return t.toFixed(2)},k=function(){return(t.value-s.value).toFixed(2)},z=function(t){for(var e=0,a=0,n=1;n<=t;n++)e+=parseFloat($("#tr-interest-"+n).attr("data-value")),a+=parseFloat($("#tr-principal-"+n).attr("data-value"));return(e+a).toFixed(2)},A=function(t){for(var e=0,a=1;a<=t;a++)e+=parseFloat($("#tr-interest-"+a).attr("data-value"));return e.toFixed(2)},C=function(t){return(t/12).toFixed(2)},G=function(t,e){y=D(a.value,e,t),f=q(a.value,e,r.value,parseFloat(l.value)),g=j(y,e),_=T(y,e),I=P(y),b=M(y,e),y>0&&B(y)};function M(t,e){return 0==t?0:(e-I).toFixed(2)}function P(t){let e=0;return 0==t?e=0:(e=f-_,e+=0==parseInt(g)?0:parseInt(g)),e.toFixed(2)}function T(t,e){let a=(0).toFixed(2);return 0==t?a=(0).toFixed(2):(e=parseFloat(e).toFixed(2),a=(parseFloat(l.value)*e/100).toFixed(2)),a}function j(t,e){var a=(0).toFixed(2),n=(0).toFixed(2);return a=parseInt(e)<=parseInt(r.value)||0==t?(0).toFixed(2):c.value>0&&t%o.value==0?c.value.toFixed(2):(0).toFixed(2),n=0==o.value||parseInt(e)<=parseInt(r.value)?(0).toFixed(2):parseInt(t)%parseInt(o.value)==0?u.value:(0).toFixed(2),parseFloat(parseFloat(a)+parseFloat(n)).toFixed(2)}function q(t,e,a,n){var r=0;return r=0==y?r.toFixed(2):y==12*t||a>(1+n/100)*e?((1+n/100)*e).toFixed(2):a}function D(t,e,a){return 0==e?a=0:a>=12*t||e<=0?a=0:a+=1,a}$("#calculate").click()});
