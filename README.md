<br>
<p align="center">
<a href= "https://flourishing-elf-04cbc3.netlify.app"><img src="./src/assets/logo-explorer.svg" border="0"></a>
</p>

## 📝 Descrição

O projeto Food Explorer é o projeto final do programa Explorer da Rocketseat. Ele consiste em um aplicativo de cardápio digital para um restaurante fictício e conta com dois tipos de usuários: o administrador e o cliente, cada um com suas próprias funcionalidades.

O front-end do projeto, que cuida da interface do usuário, pode ser encontrado neste repositório. Já o back-end, responsável pela lógica e pelo armazenamento dos dados, está disponível neste <a href="https://github.com/wilsontestoni/foodexplorer-api">repositório</a>.

Link do projeto: <a href= "https://flourishing-elf-04cbc3.netlify.app">Food explorer</a>

## 📃 Páginas do projeto
### Paginas disponíveis para usuário cliente:
- Login
- Cadastro
- Home
- Histórico de pedidos
- Pedidos
- Favoritos
- Detalhes do prato

### Paginas disponíveis para usuário administrador:
- Login
- Cadastro
- Home
- Histórico de pedidos
- Novo prato
- Editar prato
- Detalhes do prato

![image](https://github.com/user-attachments/assets/3954565c-0925-46f8-9ce2-11b57ad2f4a9)
![image](https://github.com/user-attachments/assets/1ba3a44f-5d60-40ba-88de-fe303c2c33ec)
![image](https://github.com/user-attachments/assets/f735ad13-00c9-43b8-bd3e-e1258efef9bf)



## 🛠️ Funcionalidades: <br>

Você encontra as seguintes funcionalidades nesse projeto

### Usuário Cliente:

- Visualizar pratos
- Visualizar detalhes do prato
- Filtrar pratos
- Favoritar pratos
- Remover favorito
- Adicionar pratos ao pedido
- Visualizar valor total do pedido
- Visualizar histórico de pedidos
- Acompanhar status do pedido

<strong>Importante</strong>: Na página de pedidos, há uma simulação de pagamento. Você não precisa inserir dados reais; pode inventar informações apenas para acompanhar o processo. O status do pedido passa por três etapas:

1. Processando pagamento
2. Pagamento realizado
3. Preparando

Quando o status muda para "Preparando", o sistema faz requisições periódicas ao backend para verificar se o administrador já alterou o status para "Entregue". Assim que o administrador marcar o pedido como entregue, um componente aparecerá na tela mostrando que o status é "Entregue", acompanhado de uma imagem. Após 5 segundos, seu carrinho será esvaziado e você será redirecionado para a página inicial. Você poderá consultar seu histórico de pedidos na aba correspondente.

### Usuário Administrador:

- Visualizar pratos
- Visualizar detalhes do prato
- Filtrar pratos
- Adicionar um novo prato
- Editar pratos existentes
- Excluir pratos
- Visualizar pedidos
- Alterar o status dos pedidos (pendente, preparando e entregue)

Usuários para teste das funcionalidades:

Cliente: <br>
email: user@email.com
senha: 12341234

Administrador:<br>
email: userwork@email.com
senha: 12341234

Caso queira criar sua própria conta, fique avontade! porém só é possível o cadastro para o usuário do tipo cliente.

## 💻 Tecnologias utilizadas: <br>
- Vite
- Typescript
- React
- React Router
- Axios
- Swiper
- Styled Components
- Styled Media Query
- Phosphor Icons

## ⚙ Instalação Local

### Requisitos: NodeJS 

Instalação local do front-end.

Clone o repositório:
```sh
git clone https://github.com/wilsontestoni/foodexplorer-frontend.git
```

Abra o console no repositório clonado e instale as dependências:
```sh
npm install
```

Depois de finalizar as instalações, inicie o servidor:
```sh
npm run dev
```
<br>
<strong>Importante</strong>: Como está sendo usado um opção gratuita para hospedar a api do projeto, pode ocorrer alguma lentidão nas respostas, caso queira instalar a api
localmente para ter uma velocidade de resposta melhor, entre no repositório da <a href="https://github.com/wilsontestoni/foodexplorer-api">API</a> e faça os passos da instação local.
<br>
<br>
