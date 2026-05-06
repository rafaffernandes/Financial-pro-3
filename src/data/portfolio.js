/**
 * Finanças Pro v3 — Portfolio Data
 *
 * Static seed data for the demo portfolio.
 * In a real deployment, this would be persisted in localStorage or a backend.
 */

// ── Ações (Stocks) ─────────────────────────────────────────────
export const acoes = [
  { ticker: 'PETR4', name: 'Petrobras PN',       qty: 200,  avgPrice: 36.40, sector: 'Energia',       type: 'PN' },
  { ticker: 'VALE3', name: 'Vale ON',             qty: 100,  avgPrice: 65.80, sector: 'Mineração',     type: 'ON' },
  { ticker: 'ITUB4', name: 'Itaú Unibanco PN',   qty: 150,  avgPrice: 31.20, sector: 'Bancos',        type: 'PN' },
  { ticker: 'BBDC4', name: 'Bradesco PN',         qty: 200,  avgPrice: 13.50, sector: 'Bancos',        type: 'PN' },
  { ticker: 'WEGE3', name: 'WEG ON',              qty: 80,   avgPrice: 42.60, sector: 'Industrial',    type: 'ON' },
  { ticker: 'RENT3', name: 'Localiza ON',         qty: 60,   avgPrice: 55.00, sector: 'Consumo',       type: 'ON' },
  { ticker: 'RDOR3', name: 'Rede D\'Or ON',       qty: 50,   avgPrice: 28.40, sector: 'Saúde',         type: 'ON' },
  { ticker: 'MGLU3', name: 'Magazine Luiza ON',   qty: 500,  avgPrice:  3.20, sector: 'Varejo',        type: 'ON' },
  { ticker: 'B3SA3', name: 'B3 ON',               qty: 300,  avgPrice: 10.80, sector: 'Financeiro',    type: 'ON' },
  { ticker: 'ABEV3', name: 'Ambev ON',            qty: 400,  avgPrice:  12.10, sector: 'Bebidas',      type: 'ON' },
  { ticker: 'SUZB3', name: 'Suzano ON',           qty: 70,   avgPrice: 48.20, sector: 'Papel e Celulose', type: 'ON' },
  { ticker: 'VIVT3', name: 'Telefônica Vivo ON',  qty: 120,  avgPrice: 44.50, sector: 'Telecom',       type: 'ON' },
];

// ── FIIs (Fundos Imobiliários) ────────────────────────────────
export const fiis = [
  { ticker: 'MXRF11', name: 'Maxi Renda FII',       qty: 300,  avgPrice: 10.15, type: 'Papel',        segment: 'Recebíveis' },
  { ticker: 'KNRI11', name: 'Kinea Renda Imobiliária', qty: 50, avgPrice: 148.00, type: 'Tijolo',     segment: 'Lajes Corporativas' },
  { ticker: 'HGLG11', name: 'CSHG Logística',       qty: 80,   avgPrice: 160.50, type: 'Tijolo',      segment: 'Logística' },
  { ticker: 'XPML11', name: 'XP Malls',             qty: 100,  avgPrice:  96.20, type: 'Tijolo',      segment: 'Shopping' },
  { ticker: 'BCFF11', name: 'BC Fund Imobiliário',   qty: 120,  avgPrice:  68.30, type: 'Papel',      segment: 'Fundo de Fundos' },
  { ticker: 'VISC11', name: 'Vinci Shopping Centers',qty: 90,   avgPrice:  96.50, type: 'Tijolo',     segment: 'Shopping' },
  { ticker: 'IRDM11', name: 'Iridium Recebíveis',   qty: 150,  avgPrice: 100.80, type: 'Papel',       segment: 'Recebíveis' },
  { ticker: 'BTLG11', name: 'BTG Pactual Logística', qty: 100,  avgPrice: 104.60, type: 'Tijolo',     segment: 'Logística' },
];

// ── Renda Fixa ─────────────────────────────────────────────────
export const rendaFixa = [
  {
    id: 'rf-01',
    name: 'Tesouro Selic 2027',
    issuer: 'Tesouro Nacional',
    type: 'Tesouro Direto',
    indexer: 'SELIC',
    rate: 100,          // % of indexer
    value: 18500.00,    // current market value (BRL)
    invested: 17200.00, // amount invested
    maturity: '2027-03-01',
    purchaseDate: '2022-08-15',
  },
  {
    id: 'rf-02',
    name: 'Tesouro IPCA+ 2029',
    issuer: 'Tesouro Nacional',
    type: 'Tesouro Direto',
    indexer: 'IPCA+',
    rate: 5.62,
    value: 22100.00,
    invested: 20000.00,
    maturity: '2029-05-15',
    purchaseDate: '2021-11-22',
  },
  {
    id: 'rf-03',
    name: 'CDB Itaú 120% CDI',
    issuer: 'Banco Itaú',
    type: 'CDB',
    indexer: 'CDI',
    rate: 120,
    value: 12400.00,
    invested: 12000.00,
    maturity: '2025-12-30',
    purchaseDate: '2023-01-10',
  },
  {
    id: 'rf-04',
    name: 'LCA Bradesco 95% CDI',
    issuer: 'Banco Bradesco',
    type: 'LCA',
    indexer: 'CDI',
    rate: 95,
    value: 8750.00,
    invested: 8500.00,
    maturity: '2026-06-01',
    purchaseDate: '2023-06-01',
  },
  {
    id: 'rf-05',
    name: 'Debênture TAESA TAEE11 IPCA+6%',
    issuer: 'Taesa',
    type: 'Debênture',
    indexer: 'IPCA+',
    rate: 6.0,
    value: 10800.00,
    invested: 10000.00,
    maturity: '2028-12-15',
    purchaseDate: '2022-03-20',
  },
];

// ── Crypto (extra module) ──────────────────────────────────────
export const crypto = [
  { symbol: 'BTC', name: 'Bitcoin',  qty: 0.05,  avgPrice: 185000 },
  { symbol: 'ETH', name: 'Ethereum', qty: 0.8,   avgPrice:  9800 },
  { symbol: 'SOL', name: 'Solana',   qty: 4,     avgPrice:   580 },
];

// ── Portfolio metadata ─────────────────────────────────────────
export const meta = {
  owner: 'Investidor Demo',
  currency: 'BRL',
  createdAt: '2021-01-01',
  updatedAt: new Date().toISOString(),
  benchmark: 'CDI',
};

// ── Sector colors ──────────────────────────────────────────────
export const SECTOR_COLORS = {
  'Energia':            '#f59e0b',
  'Mineração':          '#6366f1',
  'Bancos':             '#3b82f6',
  'Industrial':         '#06b6d4',
  'Consumo':            '#ec4899',
  'Saúde':              '#22c55e',
  'Varejo':             '#f97316',
  'Financeiro':         '#8b5cf6',
  'Bebidas':            '#84cc16',
  'Papel e Celulose':   '#14b8a6',
  'Telecom':            '#64748b',
  'FIIs':               '#a855f7',
  'Renda Fixa':         '#4f7ef8',
  'Crypto':             '#f59e0b',
};

// ── Helpers ────────────────────────────────────────────────────

/** Total invested in stocks (at avg price) */
export function totalAcoesInvested() {
  return acoes.reduce((s, a) => s + a.qty * a.avgPrice, 0);
}

/** Total invested in FIIs */
export function totalFIIsInvested() {
  return fiis.reduce((s, f) => s + f.qty * f.avgPrice, 0);
}

/** Total in renda fixa (market value) */
export function totalRendaFixa() {
  return rendaFixa.reduce((s, r) => s + r.value, 0);
}

/** P&L % given current price and average price */
export function calcPL(currentPrice, avgPrice) {
  if (!avgPrice || avgPrice === 0) return 0;
  return ((currentPrice - avgPrice) / avgPrice) * 100;
}

/** Current market value of a position */
export function positionValue(qty, currentPrice) {
  return qty * currentPrice;
}

/** Allocation % given position value and total portfolio value */
export function allocationPct(posValue, totalValue) {
  if (!totalValue || totalValue === 0) return 0;
  return (posValue / totalValue) * 100;
}

/** Build portfolio summary (uses live quote data merged in) */
export function buildSummary(quotes = {}) {
  const acoesCurrent = acoes.map((a) => {
    const q = quotes[a.ticker];
    const currentPrice = q?.regularMarketPrice ?? a.avgPrice;
    const value = positionValue(a.qty, currentPrice);
    const invested = a.qty * a.avgPrice;
    return { ...a, currentPrice, value, invested, pl: calcPL(currentPrice, a.avgPrice) };
  });

  const fiisCurrent = fiis.map((f) => {
    const q = quotes[f.ticker];
    const currentPrice = q?.regularMarketPrice ?? f.avgPrice;
    const value = positionValue(f.qty, currentPrice);
    const invested = f.qty * f.avgPrice;
    return { ...f, currentPrice, value, invested, pl: calcPL(currentPrice, f.avgPrice) };
  });

  const totalAcoes = acoesCurrent.reduce((s, a) => s + a.value, 0);
  const totalFIIs  = fiisCurrent.reduce((s, f) => s + f.value, 0);
  const totalRF    = totalRendaFixa();
  const totalCrypto = crypto.reduce((s, c) => s + c.qty * c.avgPrice, 0);
  const total = totalAcoes + totalFIIs + totalRF + totalCrypto;

  const investedAcoes = acoesCurrent.reduce((s, a) => s + a.invested, 0);
  const investedFIIs  = fiisCurrent.reduce((s, f) => s + f.invested, 0);
  const investedRF    = rendaFixa.reduce((s, r) => s + r.invested, 0);
  const totalInvested = investedAcoes + investedFIIs + investedRF + totalCrypto;

  return {
    acoes: acoesCurrent,
    fiis: fiisCurrent,
    rendaFixa,
    crypto,
    totals: {
      acoes:     totalAcoes,
      fiis:      totalFIIs,
      rendaFixa: totalRF,
      crypto:    totalCrypto,
      total,
      invested:  totalInvested,
      plAbsolute: total - totalInvested,
      plPct: totalInvested > 0 ? ((total - totalInvested) / totalInvested) * 100 : 0,
    },
    allocation: {
      acoes:     totalAcoes  / total * 100,
      fiis:      totalFIIs   / total * 100,
      rendaFixa: totalRF     / total * 100,
      crypto:    totalCrypto / total * 100,
    },
  };
}
