import type { Component } from 'solid-js';
import { Router, Routes, Route, Outlet, Link } from 'solid-app-router';


const LoginForm: Component = () => (
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

      <Link href='/home' class='bg-sky-600 hover:opacity-80 p-2 rounded-md text-white w-32 text-center'>Login</Link>

    </div>
  </div>
)

const Image: Component = () => (
  <div>
    <h1>Image</h1>
  </div>
)
const Login: Component = () => (
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

const Home: Component = () => (
  <div class='flex gap-0'>
    <SideBar />
    <BottomBar />
    <Content />
  </div>
)


const SideBar: Component = () => (
  <div class='w-20 h-screen bg-slate-500 md:flex flex-col justify-start items-center gap-8 p-2 hidden'>
    {/* <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1> */}
  </div>
)


const BottomBar: Component = () => (
  <div class='w-full h-12 absolute bottom-0 bg-slate-500 flex justify-center items-center p-2 gap-5 md:none md:hidden'>
    {/* <h1>Compras</h1>
    <h1>Vendas</h1>
    <h1>Vendas</h1>
    <h1>Finanças</h1> */}
  </div>
)


const Content: Component = () => (
  <div class='w-full h-screen bg-gray-900 p-5 pb-24'>
    <h1>Content</h1>
    <EstoqueForm />
  </div>
)

const EstoqueForm: Component = () => (
  <div class='w-full h-full'>

    <div class="w-full">

      <div class="w-full flex flex-row flex-wrap gap-5">

        <div class="basis-1 md:basis-1/2">
          <label class="block text-white">Produto</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-1 md:basis-1/5">
          <label class="block text-white">Unidade 1</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-1 md:basis-1/5">
          <label class="block text-white">Quantidade</label>
          <input type="text" class='input' placeholder='Quantidade' />
        </div>



        <div class="basis-1 md:basis-1/5">
          <label class="block text-white">Unidade 2</label>
          <input type="text" class='input' placeholder='Produto' />
        </div>

        <div class="basis-1 md:basis-1/5">
          <label class="block text-white">Quantidade</label>
          <input type="text" class='input' placeholder='Quantidade' />
        </div>

      </div>

    </div>

  </div>
)

const App: Component = () =>
(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>

);


export default App;
