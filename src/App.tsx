import type { Component } from 'solid-js';
import { Router, Routes, Route, Outlet, Link } from 'solid-app-router';


const LoginForm: Component = () =>
(
  <div class='w-full flex'>
    <div class="basis-full h-fit flex flex-col items-center justify-center gap-8 p-2 pt-10 pb-3">

      <h1 class='text-white text-4xl ml-5 self-start '>Rafacho's SyS</h1>

      <h1 class='text-white text-3xl'>Login</h1>

      <div class='w-full h-fit flex flex-col px-3 gap-5'> { /*md:w-3/5 lg:w-1/5*/}
        <div class="basis-full">
          <input type="email" class='input' placeholder='exemplo@gmail.com' />
        </div>

        <div class="basis-full">
          <input type="password" class='input' placeholder='******************' />
        </div>
      </div>

      <div class='w-full h-fit flex flex-col px-3 gap-5'> { /*md:w-3/5 lg:w-1/5*/}
        <Link href='/' class='' />
        <Link href='/' class='' />
      </div>

      <Link href='/app' class='bg-sky-600 hover:opacity-80 p-2 rounded-md text-white w-32 text-center'>Login</Link>

    </div>
  </div>
)

const Image: Component = () =>
(
  <div>
    <h1>Image</h1>
  </div>
)

const Login: Component = () =>
(
  <div class='w-screen h-screen bg-stone-800'>
    <div class="flex flex-wrap">

      <div class="w-full md:w-1/2 lg:w-2/6 h-fit">
        <LoginForm />
      </div>

      <div class="w-full md:w-1/2 lg:w-4/6 bg-fuchsia-300 md:h-screen">
        <Image />
      </div>

    </div>
  </div>
)

const Grid: Component = () =>
(
  <div>

  </div>
)
const Home: Component = () =>
(
  <div>
    <h1 class='text-white'>Home</h1><br /><br />
    <Link href='produtos/cadastrar/' class='text-white'>Produtos</Link> <br />
    <Link href='empresas/cadastrar/' class='text-white'>Empresas</Link> <br />
    <Link href='agrupamentos1/cadastrar/' class='text-white'>Agrupamentos1</Link> <br />
    <Link href='agrupamentos2/cadastrar/' class='text-white'>Agrupamentos2</Link> <br />
    <Link href='agrupamentos3/cadastrar/' class='text-white'>Agrupamentos3</Link> <br />
    <Link href='agrupamentos4/cadastrar/' class='text-white'>Agrupamentos4</Link> <br />
    <Link href='agrupamentos5/cadastrar/' class='text-white'>Agrupamentos5</Link> <br /> <br />

    <Link href='entidades1/cadastrar/' class='text-white'>Entidade1</Link> <br />
    <Link href='entidades2/cadastrar/' class='text-white'>Entidade2</Link> <br />
    <Link href='entidades3/cadastrar/' class='text-white'>Entidade3</Link> <br />
    <Link href='entidades4/cadastrar/' class='text-white'>Entidade4</Link> <br /> <br />

    <Link href='tabelas-preco/cadastrar/' class='text-white'>Tabelas de Preço</Link> <br />
    <Link href='inventarios/cadastrar/' class='text-white'>Inventários</Link> <br /><br />

    <Grid />
  </div>
)

const SideBar: Component = () =>
(
  <div class='w-24 h-screen bg-slate-500 md:flex flex-col justify-center items-center gap-8 p-2 hidden'>
    {/* <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1> */}
  </div>
)

const BottomBar: Component = () =>
(
  <div class='w-full h-12 absolute bottom-0 bg-slate-500 flex justify-center items-center p-2 gap-5 md:none md:hidden'>
    {/* <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1> */}
  </div>
)

const InventoryForm: Component = () =>
(
  <div class='w-full h-full'>

    <div class="w-full">

      <div class="w-full flex flex-row flex-wrap gap-5">

        <div class="basis-full md:basis-1/2">
          <label class="label">Produto</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-full md:basis-1/5">
          <label class="label">Unidade 1</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-full md:basis-1/5">
          <label class="label">Quantidade</label>
          <input type="text" class='input' placeholder='Quantidade' />
        </div>

        <div class="basis-full md:basis-1/5">
          <label class="label">Unidade 2</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-full md:basis-1/5">
          <label class="label">Quantidade</label>
          <input type="text" class='input' placeholder='Quantidade' />
        </div>

      </div>
    </div>
  </div>
)

const CrudButtons: Component = () =>
(
  <div>

    <div class="flex flex-wrap justify-end gap-5">
      {/* <button class="btn">Salvar</button> */}
      {/* <button class="btn">Editar</button> */}
      {/* <button class="btn">Deletar</button> */}
      <Link href='/app/' class='btn'>Voltar</Link> <br />
    </div>

  </div>
)

const Form: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

      </div>
    </div>

  </div>

)
const CompanyForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <label class="label">CNPJ</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-8 lg:col-span-4 xl:col-span-4">
          <label class="label">Nome</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-9 lg:col-span-5 xl:col-span-4">
          <label class="label">Nome Fantasia</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-4">
          <label class="label">CEP</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-4">
          <label class="label">Estado</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
          <label class="label">Cidade</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-4">
          <label class="label">Bairro</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
          <label class="label">Rua</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-4">
          <label class="label">Número</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
          <label class="label">Complemento</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-4">
          <label class="label">Código IBGE</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
          <label class="label">Email</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-4">
          <label class="label">Telefone</label>
          <input type="text" class='input' />
        </div>

      </div>
      <div class="h-48 col-span-12 md:col-span-6 lg:col-span-3 bg-stone-500" />


    </div>

  </div>
)


const PriceListForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <label class="label">Código</label>
          <input type="text" class='input' />
        </div>

      </div>
    </div>

  </div>
)

const GroupingForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <label class="label">Código</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-9 lg:col-span-5 xl:col-span-4">
          <label class="label">Nome</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
          <label class="label">Filial</label>
          <input type="text" class='input' />
        </div>

      </div>
    </div>

  </div>
)

const UserForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Email</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4">
          <label class="label">Nome</label>
          <input type="text" class='input' />
        </div>

      </div>
    </div>

  </div>
)


const SpentEntityForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Código</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4">
          <label class="label">Nome</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-3 xl:col-span-2">
          <label class="label">Tipo Conversão</label>
          <select class='input'>
            <option selected>Multiplicar</option>
            <option>Dividir</option>
          </select>
        </div>

        <div class="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4">
          <label class="label">Filial</label>
          <input type="text" class='input' />
        </div>

      </div>
    </div>

  </div>
)

const ProdutoForm: Component = () =>
(
  <div class='w-full h-full'>

    <CrudButtons />
    <h1 class='title'>Dados Principais</h1>

    <div class="w-full">
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Código</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-8 lg:col-span-5 xl:col-span-4">
          <label class="label">Nome</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <label class="label">Tipo</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-3 xl:col-span-2">
          <label class="label">Estoque</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Código de barras</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2">
          <label class="label">Tipo de origem</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-1">
          <label class="label">Unidade</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2">
          <label class="label">Preço</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Filial</label>
          <input type="text" class='input text-right' />
        </div>

      </div>

      <h1 class='title-2 mt-8'>Dados Adicionais</h1>
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-1">
          <label class="label">Unidade 2</label>
          <input type="text" class='input' />
        </div>

        <div class="col-span-12 md:col-span-5 lg:col-span-3 xl:col-span-2">
          <label class="label">Tipo Conversão</label>
          <select class='input'>
            <option selected>Multiplicar</option>
            <option selected>Dividir</option>
          </select>
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Conversão</label>
          <input type="text" class='input' />
        </div>

      </div>

      <h1 class='title-2 mt-8'>Lógistica</h1>
      <div class="inputs-container">

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Comprimento</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Altura</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-4 lg:col-span-2 xl:col-span-2">
          <label class="label">Largura</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span- xl:col-span-2">
          <label class="label">Peso Liquído</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span- xl:col-span-2">
          <label class="label">Peso Bruto</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-3 lg:col-span- xl:col-span-2">
          <label class="label">Quanidade por Embalagem</label>
          <input type="text" class='input text-right' />
        </div>

        <div class="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3">
          <label class="label">Quantidade Mínima de Estoque</label>
          <input type="text" class='input text-right' />
        </div>

      </div>

      <h1 class='title-2 mt-8'>Fotos</h1>
      <div class="grid grid-cols-12 gap-5">
        <div class="h-48 col-span-12 md:col-span-6 lg:col-span-3 bg-stone-500" />
        <div class="h-48 col-span-12 md:col-span-6 lg:col-span-3 bg-stone-500" />
        <div class="h-48 col-span-12 md:col-span-6 lg:col-span-3 bg-stone-500" />
        <div class="h-48 col-span-12 md:col-span-6 lg:col-span-3 bg-stone-500" />
      </div>

    </div>
  </div>
)

const App: Component = () =>
(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/app/*" element={
        <div class='w-full h-screen bg-gray-900 pb-24 md:pb-5 flex gap-0'>
          <SideBar />
          <div class="p-5 overflow-y-auto"><Outlet /></div>
          <BottomBar />
        </div>
      }>
        <Route path='/' element={<Home />} />
        <Route path="produtos/cadastrar/" element={<ProdutoForm />} />
        <Route path="entidade-gastos/cadastrar/" element={<SpentEntityForm />} />
        <Route path="empresas/cadastrar/" element={<CompanyForm />} />

        <Route path="entidades1/cadastrar/" element={<SpentEntityForm />} />
        <Route path="agrupamentos1/cadastrar/" element={<GroupingForm />} />

        <Route path="tabelas-preco/cadastrar/" element={<PriceListForm />} />
        <Route path="inventarios/cadastrar/" element={<InventoryForm />} />
      </Route>

    </Routes>
  </Router>

);


export default App;