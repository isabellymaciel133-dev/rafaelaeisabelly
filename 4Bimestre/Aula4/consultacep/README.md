# Consulta de CEP

Aplicativo em React Native com Expo para encontrar um endereço pelo CEP. O visual usa rosa-claro e marrom-cacau.

## Abrir no GitHub Codespaces

Use Node.js 20.19 ou superior. No terminal, a partir da raiz do repositório:

```bash
cd 4Bimestre/Aula4/consultacep
npm install
npm run web
```

Na aba **Portas**, abra no navegador a porta indicada no terminal (normalmente 8081). Para experimentar a busca, digite `01310-100`.

## Organização

- `App.js` contém a interface, o formulário e o cartão de resultado.
- `rsc/funcoes.js` formata e valida o CEP e consulta a [BrasilAPI](https://brasilapi.com.br/docs) pela rota `/api/cep/v1/{cep}`.
- `rsc/estilo.js` reúne as cores e os estilos.
