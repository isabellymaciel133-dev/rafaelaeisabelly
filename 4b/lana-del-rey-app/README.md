# Vintage Paradise — Lana Del Rey 🌹

Aplicativo escolar em **React Native + Expo**, com três abas e navegação usando **React Navigation Bottom Tabs**.

## Telas
- **Início:** apresentação e botões para navegar.
- **Álbuns:** discografia selecionada e botões para favoritar/desfavoritar.
- **Favoritos:** lista atualizada automaticamente a partir das escolhas.

## Organização
- `App.js`: ponto de entrada.
- `src/navigation`: navegação entre abas.
- `src/screens`: uma tela por arquivo.
- `src/components`: botões e cartões reutilizáveis.
- `src/context`: estado compartilhado dos favoritos.
- `src/data`: lista de álbuns.
- `src/theme`: paleta de cores.

## Executar
No terminal, dentro desta pasta:

```bash
npm install
npx expo start --web
```

Para testar no celular, use `npx expo start` e abra pelo Expo Go.

**Observação:** favoritos são mantidos enquanto o app está aberto; não há persistência em banco de dados. Os títulos de músicas são apenas texto, sem reprodução de áudio.
