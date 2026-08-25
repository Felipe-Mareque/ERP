# Como testar localmente

Cada arquivo em /telas é um FRAGMENTO html (sem <head>), pensado pra ser incluído dentro de uma página completa.

Para visualizar uma tela isolada no navegador, crie um arquivo teste.html assim:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
  <link rel="stylesheet" href="estilos/base.css">
  <link rel="stylesheet" href="estilos/layout.css">
  <link rel="stylesheet" href="estilos/componentes.css">
  <style>body{margin:0;padding:20px;background:#ddd}</style>
</head>
<body>
  <!-- cole aqui o conteúdo de telas/login.html, por exemplo -->
</body>
</html>
