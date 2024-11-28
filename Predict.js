// Sample historical data (e.g., past performance data)
const historicalData = [10, 20, 15, 25, 30, 35, 40, 45, 50, 55];

// Function to calculate Simple Moving Average (SMA)
function calculateSMA(data, windowSize) {
    let result = [];
    for (let i = 0; i < data.length - windowSize + 1; i++) {
        let sum = 0;
        for (let j = 0; j < windowSize; j++) {
            sum += data[i + j];
        }
        result.push(sum / windowSize);
    }
    return result;
}

// Use SMA with a window size of 3
const smaData = calculateSMA(historicalData, 3);

// Predict future trend (simply extend the last average value for simplicity)
const predictedData = [...smaData, smaData[smaData.length - 1]];  // Example prediction

// Prepare the data for the chart
const labels = Array.from({ length: historicalData.length }, (_, i) => i + 1);

const chartData = {
    labels: labels,
    datasets: [
        {
            label: 'Historical Data',
            data: historicalData,
            borderColor: 'blue',
            fill: false,
        },
        {
            label: 'Predicted Trend (SMA)',
            data: [...smaData, ...predictedData],
            borderColor: 'red',
            fill: false,
            borderDash: [5, 5],
        },
    ],
};

// Create the chart
const ctx = document.getElementById('predictionChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    },
});
