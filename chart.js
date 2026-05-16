/**
 * Initializes or updates the TradingView Chart
 * @param {string} containerId - The ID of the container div
 * @param {string} symbol - The pair to display (e.g., "BINANCE:ETHUSDT")
 */
function initTradingViewChart(containerId, symbol = 'BINANCE:AAVEUSDT') {
  // Clear the container first to prevent multiple charts stacking
  document.getElementById(containerId).innerHTML = '';

  new TradingView.widget({
    autosize: true,
    symbol: symbol,
    interval: 'H',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    locale: 'en',
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: containerId,
  });
}
