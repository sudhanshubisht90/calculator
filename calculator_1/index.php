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
  .table-d input,.table-d .input-group-text {
    background-color: #fce5cd;
  }
    </style>
  </head>
  <body>
<div class="table-responsive">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">Annual Income</th>
            <td colspan="2" class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="annual_income" id="annual_income" value="80000">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Monthly Income</th>
            <td colspan="2">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="monthly_income" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Ratios GDS / TDS</th>
            <td class="table-d">
              <div class="input-group">
              <input type="text" class="form-control" name="gds" id="gds" value="39">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
          </td>
            <td class="table-d">
              <div class="input-group">
              <input type="text" class="form-control" name="tds" id="tds" value="44">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
          </td>
          </tr>
          <tr>
            <th scope="row">Maximum PITHOD</th>
            <td>
            <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">$</span>
            </div>
            <input readonly type="text" class="form-control" id="Maximum_PITHOD_1" value="0">
            </div>
            </td>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="Maximum_PITHOD_2" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Installment Pmts</th>
            <td></td>
            <td class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="installment_pmts" id="installment_pmts" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Revolving Balance</th>
            <td></td>
            <td class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="revolving_balance" id="revolving_balance" value="0">
              </div>
          </td>
          </tr>
          <tr>
            <th scope="row">Maximum PITH</th>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="Maximum_PITH_1" value="0">
              </div>
            </td>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="Maximum_PITH_2" value="-1299">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Maximum PITH (lesser)</th>
            <td colspan="2">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="Maximum_PITH_lesser" value="-1299">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Less Annual Tax</th>
            <td class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="less_annual_tax" id="less_annual_tax_1" value="4000">
              </div>
            </td>
            <td>
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">$</span>
                </div>
                <input readonly type="text" class="form-control" id="less_annual_tax_2" value="-1299">
                </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Heat</th>
            <td colspan="2" class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="heat" id="heat" value="100">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Condo Fees (full amount)</th>
            <td colspan="2" class="table-d">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input type="text" class="form-control" name="condo_fees" id="condo_fees" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Maximum PI</th>
            <td colspan="2">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly type="text" class="form-control" id="maximum_PI" value="-28">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Amortization (years)</th>
            <td colspan="2" class="table-d">
              <input type="text" class="form-control" name="amortization" id="amortization" value="25">
            </td>
          </tr>
          <tr>
            <th scope="row">Stress Test Rate</th>
            <td colspan="2" class="table-d">
              <div class="input-group">
              <input type="text" class="form-control" name="stress_test_rate" id="stress_test_rate" value="5.25">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Gross Loan Amount</th>
            <td colspan="2">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly="" type="text" class="form-control" id="gross_loan_amount" value="0">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">CMHC Premium % / $</th>
            <td>
              <div class="input-group">
              <input readonly type="text" class="form-control" name="stress_test_rate" id="cmhc_premium_1" value="">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
            </td>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly="" type="text" class="form-control" id="cmhc_premium_2" value="">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Net Loan Amount</th>
            <td colspan="2">
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly="" type="text" class="form-control" id="net_loan_amount" value="">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Down Payment</th>
            <td class="table-d">
              <div class="input-group">
              <input type="text" class="form-control" name="down_payment" id="down_payment" value="10">
              <div class="input-group-append">
              <span class="input-group-text" id="inputGroupPrepend">%</span>
              </div>
              </div>
          </td>
            <td>
              <div class="input-group">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">$</span>
              </div>
              <input readonly="" type="text" class="form-control" id="down_payment_2" value="">
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Purchase Price</th>
            <td colspan="2">
              <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">$</span>
                </div>
              <input readonly type="text" class="form-control" name="down_payment" id="purchase_price" value="">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="./assets/js/calculator.js" charset="utf-8"></script>
    </body>
    </html>
