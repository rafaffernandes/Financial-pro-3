# Finanças Pro v3

Dashboard financeiro completo para investidores brasileiros.

## Funcionalidades

- **Dashboard** — visão geral do patrimônio, rentabilidade e gráficos
- **Carteira** — ações, FIIs e renda fixa com cotações em tempo real
- **Mercado** — cotações da B3, índices e maiores movimentações
- **Câmbio** — taxas de câmbio (USD, EUR, BTC, GBP, ARS)
- **Indicadores** — SELIC, CDI, IPCA, IGP-M e outros indicadores macroeconômicos

## APIs utilizadas

| API | Dados |
|-----|-------|
| [brapi.dev](https://brapi.dev) | Cotações de ações e FIIs da B3 |
| [AwesomeAPI](https://docs.awesomeapi.com.br) | Taxas de câmbio em tempo real |
| [BCB / SGS](https://www.bcb.gov.br/estatisticas/sgs) | Indicadores econômicos (SELIC, CDI, IPCA…) |

## Como executar

```bash
npm start
# ou
npm run dev
```

Abra `http://localhost:3000` no navegador.

> **Nota:** O app usa ES Modules nativos. Precisa ser servido via HTTP (não funciona com `file://`).

## Estrutura

```
financas-pro-v3/
├── index.html          ← app completo (SPA)
├── package.json
└── src/
    ├── api/market.js   ← módulos de API
    ├── data/portfolio.js ← dados do portfólio
    └── styles/theme.css  ← design system
```
