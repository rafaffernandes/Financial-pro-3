/**
 * Finanças Pro v3 — Market Data API
 *
 * Integrations:
 *  - brapi.dev          → B3 stock & FII quotes
 *  - awesomeapi.com.br  → exchange rates
 *  - api.bcb.gov.br     → BCB/SGS economic indicators
 */

const BRAPI      = 'https://brapi.dev/api';
const AWESOME    = 'https://economia.awesomeapi.com.br/json';
const BCB_SGS    = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs';

// BCB SGS series codes
const SGS = {
  SELIC_META:  432,   // Meta da taxa SELIC (% a.a.)
  SELIC_DIARIA: 11,   // Taxa SELIC acumulada no mês
  CDI:          12,   // CDI acumulado no mês
  IPCA:        433,   // IPCA (% a.m.)
  IGPM:        189,   // IGP-M (% a.m.)
  INPC:        188,   // INPC (% a.m.)
  POUPANCA:    196,   // Rendimento poupança (% a.m.)
  DOLAR_PTAX: 1,      // Dólar PTAX (venda)
  USD_BRL:   10813,   // Taxa câmbio USD/BRL diária
};

/** Generic fetch with timeout and error handling */
async function apiFetch(url, timeout = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}

// ── brapi ─────────────────────────────────────────────────────

/**
 * Fetch real-time quotes for one or more tickers from brapi.
 * @param {string[]} tickers — e.g. ['PETR4', 'VALE3', 'KNRI11']
 * @returns {Object[]} array of quote objects
 */
export async function fetchQuotes(tickers) {
  if (!tickers || tickers.length === 0) return [];
  const list = tickers.join(',');
  const data = await apiFetch(`${BRAPI}/quote/${list}?range=1d&interval=1d`);
  return data?.results ?? [];
}

/**
 * Fetch a single ticker with extended fundamentals.
 * @param {string} ticker
 */
export async function fetchStockDetails(ticker) {
  const data = await apiFetch(
    `${BRAPI}/quote/${ticker}?range=3mo&interval=1d&fundamental=true`
  );
  return data?.results?.[0] ?? null;
}

/**
 * Search for tickers by company name or symbol.
 * @param {string} query
 */
export async function searchTickers(query) {
  const data = await apiFetch(`${BRAPI}/quote/list?search=${encodeURIComponent(query)}&limit=15`);
  return data?.stocks ?? [];
}

/**
 * Fetch historical price data for a ticker.
 * @param {string} ticker
 * @param {'1mo'|'3mo'|'6mo'|'1y'|'2y'} range
 */
export async function fetchHistory(ticker, range = '1y') {
  const data = await apiFetch(`${BRAPI}/quote/${ticker}?range=${range}&interval=1d`);
  const result = data?.results?.[0];
  return result?.historicalDataPrice ?? [];
}

/**
 * Fetch top market indices (IBOV, IFIX, SMLL, IDIV).
 */
export async function fetchIndices() {
  const tickers = ['^BVSP', '^IFIX'];
  return fetchQuotes(tickers).catch(() => []);
}

// ── AwesomeAPI ────────────────────────────────────────────────

/**
 * Fetch latest exchange rates.
 * @param {string[]} pairs — e.g. ['USD-BRL', 'EUR-BRL', 'BTC-BRL']
 * @returns {Object} map of pair → rate data
 */
export async function fetchExchangeRates(pairs = ['USD-BRL', 'EUR-BRL', 'BTC-BRL', 'GBP-BRL', 'ARS-BRL', 'JPY-BRL']) {
  const joined = pairs.join(',');
  const data = await apiFetch(`${AWESOME}/last/${joined}`);
  return data ?? {};
}

/**
 * Fetch exchange rate history for a pair.
 * @param {string} pair — e.g. 'USD-BRL'
 * @param {number} days
 */
export async function fetchExchangeHistory(pair, days = 30) {
  const data = await apiFetch(`${AWESOME}/daily/${pair}/${days}`);
  return Array.isArray(data) ? data : [];
}

// ── BCB / SGS ─────────────────────────────────────────────────

/**
 * Generic BCB SGS series fetch.
 * @param {number} serie — SGS series code
 * @param {number} n     — number of last records
 */
export async function fetchBCBSerie(serie, n = 12) {
  const data = await apiFetch(`${BCB_SGS}/${serie}/dados/ultimos/${n}?formato=json`);
  return Array.isArray(data) ? data : [];
}

/** Meta da taxa SELIC (% a.a.) — last 12 months */
export async function fetchSELIC(n = 12) {
  return fetchBCBSerie(SGS.SELIC_META, n);
}

/** CDI acumulado — last 12 months */
export async function fetchCDI(n = 12) {
  return fetchBCBSerie(SGS.CDI, n);
}

/** IPCA mensal — last 12 months */
export async function fetchIPCA(n = 12) {
  return fetchBCBSerie(SGS.IPCA, n);
}

/** IGP-M mensal — last 12 months */
export async function fetchIGPM(n = 12) {
  return fetchBCBSerie(SGS.IGPM, n);
}

/** INPC mensal — last 12 months */
export async function fetchINPC(n = 12) {
  return fetchBCBSerie(SGS.INPC, n);
}

/** Rendimento poupança mensal — last 12 months */
export async function fetchPoupanca(n = 12) {
  return fetchBCBSerie(SGS.POUPANCA, n);
}

// ── Composite loaders ─────────────────────────────────────────

/**
 * Load all economic indicators in parallel.
 * Returns an object with the last value (or null on error) for each indicator.
 */
export async function fetchAllIndicadores() {
  const [selic, cdi, ipca, igpm, inpc, poupanca] = await Promise.allSettled([
    fetchSELIC(1),
    fetchCDI(1),
    fetchIPCA(1),
    fetchIGPM(1),
    fetchINPC(1),
    fetchPoupanca(1),
  ]);

  const last = (r) => (r.status === 'fulfilled' ? r.value?.[0] ?? null : null);

  return {
    selic:    last(selic),
    cdi:      last(cdi),
    ipca:     last(ipca),
    igpm:     last(igpm),
    inpc:     last(inpc),
    poupanca: last(poupanca),
  };
}

/**
 * Load indicator series for chart display (12 months by default).
 */
export async function fetchIndicadoresSeries(n = 12) {
  const [selic, cdi, ipca, igpm] = await Promise.allSettled([
    fetchSELIC(n),
    fetchCDI(n),
    fetchIPCA(n),
    fetchIGPM(n),
  ]);

  const val = (r) => (r.status === 'fulfilled' ? r.value : []);

  return {
    selic: val(selic),
    cdi:   val(cdi),
    ipca:  val(ipca),
    igpm:  val(igpm),
  };
}

// ── Helpers ───────────────────────────────────────────────────

/** Parse BCB date string "DD/MM/YYYY" → Date */
export function parseBCBDate(str) {
  if (!str) return null;
  const [d, m, y] = str.split('/');
  return new Date(`${y}-${m}-${d}`);
}

/** Format a BCB series array into { labels, values } for Chart.js */
export function bcbSeriesToChart(series) {
  return {
    labels: series.map((s) => s.data),
    values: series.map((s) => parseFloat(s.valor)),
  };
}
