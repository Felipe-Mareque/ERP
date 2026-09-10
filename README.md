# Verdant ERP

Sistema de gestão empresarial (ERP) genérico, desenvolvido do zero como projeto de aprendizado, cobrindo desde o design das telas até o desenvolvimento completo do front-end e back-end.

Este é um projeto solo, construído em paralelo ao aprendizado de HTML, CSS, JavaScript, TypeScript, Angular e C#. O código evolui junto com o estudo — por isso o repositório passa por diferentes fases, documentadas abaixo.

---

## 📌 Sobre o projeto

O Verdant ERP é pensado para ser **genérico**: atende tanto empresas que vendem produtos físicos (com controle de estoque) quanto empresas que vendem serviços (sem estoque, com cobrança por hora/pacote/valor fixo). Essa decisão de arquitetura foi tomada cedo, e reflete em como os módulos de cadastro e vendas foram desenhados.

### Stack planejada

| Camada | Tecnologia |
|---|---|
| Front-end | Angular + TypeScript |
| Back-end | ASP.NET Core Web API (C#) |
| Banco de dados | Oracle |

> **Atualizações de rota**: o projeto passou por duas mudanças de stack em relação ao planejamento inicial.
> - **Front-end**: começou avaliando React 19 vs Angular 22. Após pesquisa sobre curva de aprendizado, ecossistema de dependências e adequação a um projeto de longa vida útil mantido sozinho, a decisão final foi por **Angular + TypeScript**.
> - **Back-end**: planejado inicialmente como Spring Boot (Java), passou para **ASP.NET Core Web API (C#)**. A pasta `front/` (scaffold inicial em React/Vite/Tailwind) será refeita com Angular CLI, e a pasta `back/` seguirá com ASP.NET Core em vez de Spring Boot.

---

## 🗂️ Estrutura do repositório

### Por que existem `estética/` e `frontTemporario/` separados?

- **`estética/`** guarda os mockups originais, feitos rapidamente com CSS inline, só para validar o visual antes de escrever código de verdade.
- **`frontTemporario/`** é a implementação real: mesmo visual, mas com HTML semântico e CSS organizado em arquivos separados — o código que efetivamente evolui.

O nome "Temporário" é proposital: essa pasta existe só até o projeto migrar para Angular (pasta `front/`). Depois da migração, ela deixa de ser necessária.

---

## 🖥️ Telas já desenhadas

| Tela | Status |
|---|---|
| Login | ✅ |
| Dashboard | ✅ |
| Configurações → Menu do sistema | ✅ |
| Listagem de Produtos | ✅ |
| Cadastro/Edição de Produto | ✅ |
| Listagem de Clientes | ✅ |
| Cadastro/Edição de Cliente | ✅ |
| Pedidos de Venda (listagem) | ✅ |
| Novo Pedido de Venda | ✅ |
| Cadastro de Item (Produto/Serviço) | ✅ |
| Listagem de Usuários | ✅ |
| Cadastro/Edição de Usuário | ✅ |
| Detalhes do Usuário | ✅ |
| Perfis e Permissões | ✅ |

Módulos ainda não desenhados: Fornecedores, Compras, Financeiro. Ficam para depois da fase atual de consolidação (ver Roteiro abaixo).

---

## ⚙️ Progresso em JavaScript

Diferente da fase de HTML/CSS (onde a maior parte das telas foi gerada com apoio de IA), o JavaScript é escrito manualmente, como exercício deliberado de aprendizado, usando as próprias telas do ERP como material de prática.

Funcionalidades já implementadas:
- **Login**: validação de campos e credenciais, redirecionamento
- **Cadastro de Produto**: validação de campos obrigatórios, cálculo de margem de lucro em tempo real, criação de produtos em um array em memória
- **Listagem de Produtos**: busca por nome/código, filtro por status (pills), renderização da tabela a partir de um array de objetos (`.map()` + template literals)
- **Listagem de Clientes**: filtro por status usando `.filter()`, renderização via `createElement`
- **Sidebar/TreeView**: expandir/recolher seções de navegação via JavaScript (`nextElementSibling` + `classList.toggle`), aplicado em todas as páginas

Em andamento / próximos passos técnicos:
- Editar e remover itens de uma listagem (fechando o ciclo de CRUD em memória)
- Refatoração para Programação Orientada a Objetos (classes com herança, para reaproveitar lógica repetida entre listagens de diferentes módulos)
- Persistência local via `localStorage` (para os dados sobreviverem ao recarregar a página, antes de existir um backend)

> Nenhuma dessas funcionalidades usa banco de dados ainda — os dados vivem em arrays na memória do navegador, e são perdidos ao recarregar a página (exceto onde `localStorage` for implementado).

---

## 🧭 Roteiro de desenvolvimento

O projeto segue uma progressão deliberada, com o objetivo de sempre entender o que está sendo escrito (nada de copiar/colar código sem compreender):

1. **HTML + CSS** — todas as telas montadas como site estático, sem interatividade ✅ concluído
2. **JavaScript** (fase atual) — interatividade sobre as telas já prontas: validação, filtros, busca, criação/edição/remoção de dados em memória, treeview de navegação
3. **TypeScript + Angular** — conversão das telas para componentes Angular, com tipagem estática e gerenciamento de estado
4. **C# + ASP.NET Core + Oracle** — back-end real, conectando as telas a um banco de dados de verdade

A meta de curto prazo (~3 meses, 20h/semana) não é ter o ERP completo, mas sim um fluxo fino e 100% funcional de ponta a ponta (ex: cadastro de produto conectado ao banco), servindo de base sólida para expandir os demais módulos depois. Como o projeto trocou tanto o front-end (React → Angular) quanto o back-end (Spring Boot → ASP.NET Core) em relação ao plano original, o cronograma de 3 meses está sendo revisado para refletir as curvas de aprendizado de TypeScript, Angular e C#.

---

## 🎨 Princípios de design adotados

- Paleta de cores discreta: verde escuro (`#14311f`) e verde musgo (`#5f7f62`), sem cores vivas
- Formulários organizados em seções na mesma página, evitando abas desnecessárias
- Listagens com paginação (nunca rolagem infinita)
- Ações destrutivas usam "Desativar" em vez de "Excluir" (soft delete, preserva histórico)
- Histórico de alterações sempre presente, mas separado do fluxo principal
- Status exibido como badge discreto com indicador colorido, nunca pintando a linha inteira

---

## 🚀 Como visualizar as telas atuais

As páginas em `frontTemporario/pages/` são HTML completos, organizados em subpastas por módulo — basta abrir qualquer arquivo `.html` diretamente no navegador. Elas já carregam o CSS e o JavaScript correto automaticamente via caminho relativo.

### Status de Navegação das Telas

- ✅ Todas as páginas têm sidebar com a árvore de navegação completa, com seções expansíveis/recolhíveis via JavaScript
- ⏳ A navegação entre páginas ainda usa links reais (`<a href>`), sem persistência de estado entre uma página e outra — isso será resolvido naturalmente na migração para Angular (SPA)

---

## 📄 Licença

Projeto pessoal de estudo. Sem licença definida ainda.