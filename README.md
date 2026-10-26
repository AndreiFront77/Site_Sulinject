# Sulinject

Site institucional da Sulinject, empresa de soluções industriais em injeção plástica, moldes, usinagem e metalização.

## Sobre o projeto

Este projeto é um site estático desenvolvido com HTML, CSS e JavaScript puro. A navegação utiliza rotas com hash, permitindo que o site seja aberto localmente ou publicado em qualquer hospedagem estática.

## Estrutura

```text
.
├── index.html       # Estrutura principal da página
├── style.css        # Estilos, responsividade e tema visual
├── script.js        # Rotas, conteúdos e interações
├── imagens/         # Imagens otimizadas utilizadas pelo site
└── originais/       # Arquivos originais do material visual
```

## Funcionalidades

- Página inicial institucional.
- Seções sobre a empresa, serviços, produtos e contato.
- Rotas internas com hash, sem necessidade de backend.
- Menu sanduíche para dispositivos móveis.
- Layout responsivo para telefones, tablets e desktops.
- Formulário de solicitação de orçamento com validação no navegador.
- Botão de contato via WhatsApp.
- Suporte a preferência de esquema de cores claro/escuro do sistema.
- Animações reduzidas automaticamente quando o usuário solicita menos movimento.

## Como executar localmente

Não há dependências ou etapa de compilação. Abra o arquivo `index.html` diretamente no navegador ou utilize um servidor HTTP local:

```bash
python -m http.server 8000
```

Em seguida, acesse <http://localhost:8000>.

Também é possível publicar a pasta diretamente em serviços de hospedagem estática, como Vercel, Netlify ou GitHub Pages.

## Observações

- O formulário atual é uma demonstração e simula o envio no navegador.
- O envio real dependerá da implementação de um endpoint seguro.
- Endereço, e-mail, CNPJ, horários, logo oficial e fotos reais ainda precisam ser confirmados pela Sulinject.
- As imagens disponíveis são ilustrativas e devem ser substituídas por materiais oficiais quando aprovadas.

## Publicação

O projeto está preparado para publicação como site estático. Para a Vercel, basta selecionar a raiz do projeto e utilizar as configurações padrão, sem build command ou output directory.
