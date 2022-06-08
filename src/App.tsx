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

const Home: Component = () =>
(
  <div><h1 class='text-white'>Home</h1></div>
)

const SideBar: Component = () =>
(
  <div class='w-20 h-screen bg-slate-500 md:flex flex-col justify-start items-center gap-8 p-2 hidden'>
    <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1>
  </div>
)

const BottomBar: Component = () =>
(
  <div class='w-full h-12 absolute bottom-0 bg-slate-500 flex justify-center items-center p-2 gap-5 md:none md:hidden'>
    <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1>
  </div>
)

const EstoqueForm: Component = () =>
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
      <button class="btn">Voltar</button>
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
            <option selected></option>
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
        <div class='w-full h-screen overflow-y-auto bg-gray-900 pb-24'>
          <div class="p-5"><Outlet /></div>
          {/* <SideBar /> */}
          <BottomBar />
        </div>
      }>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path="produtos/cadastrar/" element={<ProdutoForm />} />
        <Route path="/fornecedores" element={<Home />} />
      </Route>

    </Routes>
  </Router>

);


export default App;
