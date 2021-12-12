<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style media="screen">
    .table-borderless td,
    .table-borderless th {
    border: 0;
    }
  .table-w input,.table-w .input-group-text {
    background-color: #f1f10d;
  }
  .table-sky input,.table-sky .input-group-text {
    background-color: #d6f4d9;
  }
  .table-p{
    background-color: #fce5cd;
    border-bottom: solid 2px #ff4d4d !important;
  }
  .installment-list tr:nth-child(1){
    background-color: #fce5cd;
  }
  .table-orange{
    background-color: #ff9900;
  }
    </style>
  </head>
  <body>
<div class="table-responsive container">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th colspan="5" class="table-orange">Mortgage Calculator</th>
          </tr>
          <tr>
            <th colspan="2" class="table-p">Loan Details</th>
            <th></th>
            <th colspan="2" class="table-p">Balance at Term</th>
          </tr>
          <tr>
            <th>Loan Amount</th>
            <td class="table-w">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="number" class="form-control edit" name="loan_amount" id="loan_amount" value="300000">
              </div>
            </td>
            <td></td>
            <th>Interest Paid</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input disabled type="text" class="form-control" id="interest_paid" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th>Interest Rate</th>
            <td class="table-w">
              <div class="input-group">
              <input type="number" class="form-control edit" name="interest_rate" id="interest_rate" value="10.00">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
            </td>
            <td></td>
            <th>Principal Paid</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input disabled type="text" class="form-control" id="principal_paid" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th>Amortization (years)</th>
            <td class="table-w">
              <div class="input-group">
              <input type="number" class="form-control edit" id="amortization_year" value="1">
              </div>
            </td>
            <td></td>
            <th>Outstanding Balance</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input style="font-weight: bold;" disabled type="text" class="form-control" id="outstanding_balance" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th>Term (years)</th>
            <td class="table-w">
              <div class="input-group">
              <input type="number" class="form-control edit" id="term_year" value="8">
              </div>
            </td>
            <td></td>
            <th></th>
            <td></td>
          </tr>
          <tr>
            <th>Monthly Payment</th>
            <td class="table-sky">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input style="font-weight: bold;" disabled type="text" class="form-control" id="monthly_payment" value="0">
              </div>
            </td>
            <td></td>
            <th></th>
            <td>
              <input disabled type="hidden" class="form-control" id="int_rate_per" value="0.16598">
            </td>
          </tr>
          <tr>
            <th colspan="2" class="table-p">Extra Payments</th>
            <th></th>
            <th colspan="2" class="table-p">Fully Amortized</th>
          </tr>
          <tr>
            <th>Extra Payment</th>
            <td class="table-w">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="number" class="form-control edit" id="extra_payment" value="0">
              </div>
            </td>
            <td></td>
            <th>Total Payments</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input disabled type="text" class="form-control" id="total_payments" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th>Payment Interval</th>
            <td class="table-w">
              <div class="input-group">
              <input type="number" class="form-control edit" id="payment_interval" value="0">
              </div>
            </td>
            <td></td>
            <th>Total Interest</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input disabled type="text" class="form-control" id="total_interest" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="hidden" name="d18_value" id="d18_value" value="0">
            </td>
            <td></td>
            <th>Number of Years</th>
            <td>
              <div class="input-group">
              <input disabled type="text" class="form-control" id="number_of_years" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-center">
              <button type="button" id="calculate" class="btn btn-primary" name="button">Calculate</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table table-border" border="1">
        <thead>
          <tr class="table-orange">
            <th>Month</th>
            <th>Payment</th>
            <th>Extra Pmts</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody class="installment-list">
          <tr>
            <td class="tr-month" id="tr-month-0" data-value="0">
            </td>
            <td class="tr-payment" id="tr-payment-0" data-value="0">
            </td>
            <td class="tr-ext-payment" id="tr-ext-payment-0" data-value="0">
            </td>
            <td class="tr-interest" id="tr-interest-0" data-value="0">
            </td>
            <td class="tr-principal" id="tr-principal-0" data-value="0">
            </td>
            <td class="tr-balance">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input disabled type="text" class="form-control main_balance tr-main-balance" id="tr-main-balance-0" name="tr-balance" value="0">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://use.fontawesome.com/de8ee0c2b5.js"></script>
    <script src="./assets/js/calculator.js" charset="utf-8"></script>
    </body>
    </html>
