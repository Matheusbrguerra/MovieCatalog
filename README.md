# MovieCatalog

<h3>API de um sistema de Catálogos de Filmes</h3>

<h4> Cadastro e autenticação dos usuários</h4>

|Rotas     |Tipo  |Descrição|
|----------|------|-------- |
|"/user"   |POST  |Rota responsável pelo cadastro dos usuários|
|"/session"|POST  |Rota responsável pelo login/autenticação dos usuários retorna um token|

<h4>⚠️ Todas essas rotas abaixo só conseguem ser acessadas com o header 'Authorization' e o 'token'</h4>

<h4> CRUD dos Atores</h4>

|Rotas     |Tipo  |Descrição|
|----------|------|-------- |
|"/actors"|GET  |Rota responsável por listar todos os atores|
|"/actors"|POST  |Rota responsável por cadastrar atores, recebe somente um name|
|"/actors/:id"|PUT  |Rota responsável por editar atores recebe um id por parâmetro e edita o mesmo|
|"/actors/:id"|DELETE  |Rota responsável por deletar atores recebe um id por parâmetro e deleta o mesmo|
|"/actors/:id"|GET  |Rota responsável exibir somente um ator|

<h4> CRUD dos Diretores</h4>

|Rotas     |Tipo  |Descrição|
|----------|------|-------- |
|"/directors"|GET  |Rota responsável por listar todos os diretores|
|"/directors"|POST  |Rota responsável por cadastrar diretores, recebe somente um name|
|"/directors/:id"|PUT  |Rota responsável por editar diretores recebe um id por parâmetro e edita o mesmo|
|"/directors/:id"|DELETE  |Rota responsável por deletar diretores recebe um id  por parâmetro e deleta o mesmo|
|"/directors/:id"|GET  |Rota responsável exibir somente um diretor|

<h4> CRUD dos Filmes</h4>

|Rotas     |Tipo  |Descrição|
|----------|------|-------- |
|"/movies"|GET  |Rota responsável por listar todos os filmes|
|"/movies"|POST  |Rota responsável por cadastrar filmes, recebe somente um name|
|"/movies/:id"|PUT  |Rota responsável por editar filmes recebe um id por parâmetro , name, synopsis, release_date via body e edita o mesmo|
|"/movies/:id"|DELETE  |Rota responsável por deletar filmes recebe um id por parâmetro e deleta o mesmo|
|"/directors/:id"|GET  |Rota responsável exibir somente um filme|


