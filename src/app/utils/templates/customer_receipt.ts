let receipt = (body) => `<!DOCTYPE html>
<html>
<head>
    <title>Topaz International Clinic</title>
    <style>
      @page {
            size: A4;
            margin: 0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 40px;
        }

        .receipt-container {
            max-width: 595px;
            margin: 0 auto;
            border: 1px solid #ccc;
            padding: 20px;
        }

        .receipt-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .receipt-info {
            margin-bottom: 20px;
        }

        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .info-label {
            flex: 1;
        }

        .info-value {
            flex: 2;
        }

        .receipt-items {
            margin-bottom: 20px;
        }

        .item-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .item-name {
            flex: 1;
        }

        .item-quantity,
        .item-price {
            flex-basis: 80px;
            text-align: right;
        }

        .receipt-total {
            text-align: right;
            margin-bottom: 20px;
        }

        .receipt-footer {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="receipt-container">
        <div class="receipt-header">
            <h2>Topaz International Clinic</h2>
        </div>
        <div class="receipt-info">
            <div class="info-row">
                <div class="info-label">Patient:</div>
                <div class="info-value">${body.name}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Date:</div>
                <div class="info-value">${new Date().toLocaleString()}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Department</div>
                <div class="info-value">${body.dept}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Dr Name</div>
                <div class="info-value">${body.dr_name}</div>
            </div>
        </div>
        <div class="receipt-items">
            <div class="item-row">
                <div class="item-name">Consultation Fee</div>
                <div class="item-quantity"></div>
                <div class="item-price"></div>
            </div>
            <!-- Add more item rows as needed -->
        </div>

        <div class="receipt-footer">
            <p>Thank you for choosing Topaz International Clinic</p>
        </div>
    </div>
</body>
</html>`



export default receipt;