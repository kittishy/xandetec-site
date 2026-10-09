# Direção Visual e Sistema de Design — XandeTEC Soluções e Treinamentos

Documento de referência técnica e visual baseado nos padrões **Solara Webcraft** e **Impeccable Design System v4.5.2**.

---

## 1. Identidade e Princípios de Autoria

- **Voz da marca**: Técnica, direta, autoritativa e fundamentada na experiência real de campo desde 2012 em Jaraguá do Sul e região.
- **Lema oficial**: «*Fazer bem feito, para fazer sempre!*»
- **Eliminação de AI-Slop**:
  - Zero cards brancos flutuantes bloqueando a fotografia principal.
  - Zero "side-tabs" (bordas grossas coloridas de um único lado de cards).
  - Zero numerações arbitrárias (`01 / 02 / 03`) em listas de serviços.
  - Zero sombras coloridas com halos artificiais (`dark-glow`); uso exclusivo de sombras neutras de elevação (`rgba(0, 0, 0, alpha)`).
  - Zero fontes genéricas repetitivas (Inter/Roboto); uso uniforme e nativo da tipografia técnica **Archivo**.
  - Zero gradientes com padrão de grade decorativa de papel milimetrado.

---

## 2. Paleta de Cores e Tokens Visuais

| Token | Valor Hex | Finalidade / Contraste |
| :--- | :--- | :--- |
| `--navy-980` | `#030c1d` | Fundo ultra-escuro (utility bar e CTA final) |
| `--navy-950` | `#051329` | Fundo principal escuro (hero) |
| `--navy-900` | `#081e3f` | Superfícies escuras e galeria técnica |
| `--blue-600` | `#0b6cbd` | Azul primário da identidade visual |
| `--cyan-400` | `#35bde9` | Acentos luminosos, tags de evidência e destaques |
| `--green-600`| `#097b41` | Verde de conversão do WhatsApp (**5.36:1** WCAG AA aprovado) |
| `--green-500`| `#0c8a4b` | Verde de hover / suporte |
| `--ink` | `#0c1a2e` | Texto principal em fundos claros |
| `--ink-600` | `#2c415c` | Texto secundário / parágrafos explicativos |
| `--paper` | `#f4f7fb` | Alternância suave de seções institucionais |
| `--line` | `#dde4ed` | Divisores sutis e bordas de containers |

---

## 3. Tipografia (Archivo Latin)

- Fonte única autohospedada: `public/fonts/archivo-latin.woff2`.
- `H1`: `clamp(1.85rem, 5vw, 3.85rem)` com `letter-spacing: -0.035em`, quebra balanceada e destaque na ênfase (*com quem faz bem feito*).
- `H2`: `clamp(1.75rem, 3.2vw, 3.25rem)` com `letter-spacing: -0.03em`.
- `H3`: `clamp(1.15rem, 1.8vw, 1.35rem)`.
- `Lead`: `clamp(1rem, 0.4vw + 0.95rem, 1.25rem)` com medida confortável para leitura (`max-width: 62ch`).
- Piso de legibilidade Impeccable: todos os micro-rótulos e tags funcionais operam a $\ge 12\text{px}$ com tracking de `0.04em` a `0.12em`.

---

## 4. Iconografia Oficial

- **WhatsApp**: Glifo oficial com preenchimento sólido proporcional.
- **Instagram**: Glifo vetorial clássico da câmera fotográfica (`rect` arredondado + lente concêntrica + sensor), sincronizado com o asset oficial da Meta e com a espessura da linha dos demais ícones.
- **Navegação & Apoio**: Ícones vetoriais enxutos com `currentColor` para herança temática harmônica.

---

## 5. Acervo Fotográfico e Transparência de Evidências

Todos os arquivos residem localmente em `public/images/`:
- `display/equipe-em-servico.jpg`: Fotografia técnica da equipe uniformizada em campo com manifold e condensadora (Hero).
- `higienizacao-ar-condicionado.jpg`: Fotografia real de serviço de higienização de evaporadora com produto bactericida (Galeria).
- `display/frota-identificada.jpg`: Veículo da frota própria caracterizada (seção Sobre).
- `manutencao-tecnica.jpg`: Ferramental de refrigeração e manifolds durante manutenção (Galeria).
- `equipamentos-intelbras.webp`: Equipamentos oficiais de segurança e CFTV Intelbras (Galeria).
- `logo-xandetec.webp` & `logo-xandetec-alpha.webp`: Logotipos oficiais aplicados sobre superfícies com alto contraste.
- `instagram-glyph.png`: Ícone de referência oficial do perfil da empresa.

---

## 6. Arquitetura das Seções e Hierarquia Comercial

- **Abertura (Hero)**:
  - Mensagem direta: "Climatização, segurança e elétrica em Jaraguá do Sul."
  - Apoio sucinto com destaque para equipe identificada e atendimento técnico de ponta a ponta.
  - Fotografia oficial da equipe em execução com proporção equilibrada (16:11).
  - Ações comerciais imediatas: Orçamento no WhatsApp e Conhecer os serviços.
- **Serviços com Hierarquia Visual**:
  - Destaque principal: **Climatização** (bloco de destaque com escopo completo, entregáveis técnicos e CTA específico).
  - Frentes complementares: Grade compacta de 5 blocos (Segurança, Elétrica, Portão Eletrônico, PMOC & Laudos, Treinamentos).
- **Sobre (Trajetória & Estrutura)**:
  - Foco em fatos verificados: Desde 2012 em Jaraguá do Sul e região, frota própria identificada e responsabilidade técnica.
- **Galeria Técnica**:
  - Grid equilibrado de 4 registros reais de campo com legendas em duas linhas (categoria e descrição com espaçamento legível).
- **Marcas & Equipamentos**:
  - Principais marcas atendidas sem qualificações infladas ou falsas autorizações.
- **Chamada Final (CTA)**:
  - Placa branca com alto contraste para o logotipo oficial, lema da empresa e ligação direta via `tel:+5547999412086`.

---

## 7. Garantias de Qualidade e Gates Aprovados

1. **Testes de Contrato** (`tests/contract.test.mjs`): **9/9 aprovados**.
   - Preservação estrita dos dados oficiais da empresa.
   - Centralização e formatação correta de links telefônicos (`tel:+5547999412086` sem duplicação de DDI).
   - Remoção de claims infundados e rótulos de prévia da interface pública.
   - Metadados de prévia com `robots: noindex, nofollow`.
   - Âncoras e links funcionais direcionados ao WhatsApp oficial e seções reais.
2. **Detector Impeccable** (`impeccable detect`):
   - 0 anti-patterns no código-fonte (`src/`).
   - 0 anti-patterns no DOM do navegador real (`http://localhost:3000`).
   - 0 avisos de contraste ou texto abaixo do piso de legibilidade.
3. **Verificação Multidispositivo**:
   - Desktop 1440px: 0 overflow (`overflowCount: 0`).
   - Tablet 1024px e 768px: 0 overflow (`overflowCount: 0`).
   - Mobile 390px e 360px: 0 overflow (`overflowCount: 0`), toque acessível $\ge 44\text{px}$.
4. **Build de Produção** (`next build`):
   - Exportação estática autônoma para `out/`.
