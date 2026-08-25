# Verdant ERP

Sistema de gestão empresarial (ERP) genérico, desenvolvido do zero como projeto de aprendizado, cobrindo desde o design das telas até o desenvolvimento completo do front-end e back-end.

Este é um projeto solo, construído em paralelo ao aprendizado de HTML, CSS, JavaScript, React e Spring Boot. O código evolui junto com o estudo — por isso o repositório passa por diferentes fases, documentadas abaixo.

---

## 📌 Sobre o projeto

O Verdant ERP é pensado para ser **genérico**: atende tanto empresas que vendem produtos físicos (com controle de estoque) quanto empresas que vendem serviços (sem estoque, com cobrança por hora/pacote/valor fixo). Essa decisão de arquitetura foi tomada cedo, e reflete em como os módulos de cadastro e vendas foram desenhados.

### Stack planejada

| Camada | Tecnologia |
|---|---|
| Front-end | React 19 + TypeScript + Vite |
| Back-end | Spring Boot |
| Banco de dados | Oracle |
| Framework alternativo avaliado | Angular 22 (teste prático de 2 semanas antes da decisão final) |

.

---

## 🗂️ Estrutura do repositório


### Por que existem `estética/` e `frontTemporario/` separados?

- **`estética/`** guarda os mockups originais, feitos rapidamente com CSS inline, só para validar o visual antes de escrever código de verdade.
- **`frontTemporario/`** é a implementação real: mesmo visual, mas com HTML semântico e CSS organizado em arquivos separados — o código que efetivamente evolui.

O nome "Temporário" é proposital: essa pasta existe só até o projeto migrar para React (pasta `front/`). Depois da migração, ela deixa de ser necessária.

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
| Usuários/Permissões | ⏳ Pendente |

---

## 🧭 Roteiro de desenvolvimento

O projeto segue uma progressão deliberada, com o objetivo de sempre entender o que está sendo escrito (nada de copiar/colar código sem compreender):

1. **HTML + CSS** (fase atual) — todas as telas montadas como site estático, sem interatividade
2. **JavaScript** — interatividade básica sobre as telas já prontas (filtros, cálculos, toggles) e montagem da treeview de navegação da sidebar
3. **React** — conversão das telas para componentes, com estado e dados dinâmicos
4. **Spring Boot + Oracle** — back-end real, conectando as telas a um banco de dados de verdade

A meta de curto prazo (~3 meses, 20h/semana) não é ter o ERP completo, mas sim um fluxo fino e 100% funcional de ponta a ponta (ex: cadastro de produto conectado ao banco), servindo de base sólida para expandir os demais módulos depois.

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

As páginas em `frontTemporario/pages/` são HTML completos — basta abrir qualquer arquivo `.html` diretamente no navegador. Elas já carregam o CSS correto automaticamente via caminho relativo.



> Apenas o Dashboard tem links reais de navegação entre as telas por enquanto. As demais páginas ainda serão conectadas quando a treeview em JavaScript estiver pronta.

---

## 📄 Licença

Projeto pessoal de estudo. Sem licença definida ainda.