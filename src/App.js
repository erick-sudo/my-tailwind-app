import './App.css';
import { BsWechat, BsFolderPlus } from 'react-icons/bs'
import dp from "./assets/woman1.jpg"
import { ImSearch } from 'react-icons/im'

function App() {
  return (
    <>
    <div className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
      <p className='p-4 first-line:text-white first-line:uppercase first-letter:text-7xl first-letter:text-amber-700 first-letter:mr-3 first-letter:float-left text-justify'>
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment,<br />
    I <em>was</em> a marine biologist.
      </p>

      <dialog className='backdrop:bg-gray-50'>
        <form method='dialog'></form>
      </dialog>
    </div>
    <div className="App  sm:flex sm:flex-wrap sm:items-center sm:justify-items-start bg-sky-300">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className='shrink-0'>
            <BsWechat className='h-12 w-12 ' />
          </div>
          <div>
            <div className='text-xl font-bold text-black'>Chit Chat</div>
            <p className='text-slate-500'>You have a new message!</p>
          </div>
      </div>

      <div className='py-8 px-8 max-w-sm mx-auto my-1 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 border'>
        <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 animate-pulse' src={dp} alt="Woman's Face" />
        <div className='text-center space-y-2 sm:text-left'>
          <div className='space-y-o.5'>
            <p className="text-xl text-black font-semibold">Erin Lindford</p>
            <p className='text-slate-500 font-medium'>Product Engineer</p>
          </div>
          <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-purple-700 hover:border-transparent focus:outline-none'>Message</button>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg animate-spin">
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>

    <a href='#' className="group block bg-white rounded-lg max-w-xs mx-auto ring-4 ring-slate-900 p-5 m-4 hover:bg-sky-900 hover:ring-sky-500">
      <div className='flex items-center space-x-3 my-4'>
        <BsFolderPlus className='h-6 w-6 stroke-sky-500 font-bold group-hover:text-white' />
        <h3 className='text-slate-900 font-semibold text-sm group-hover:text-white'>New Project</h3>
      </div>
      <p className='text-sm group-hover:text-white'>Create a new project from a variety of starting templates.</p>
    </a>

    <div className='flex'>
      <div className='text-center p-4 rounded-lg hover:bg-sky-500 bg-slate-400 ml-2'>01</div>
      <div className='text-center p-4 hover:bg-sky-500 bg-slate-400 rounded-lg grow mx-2 animate-pulse'>02</div>
      <div className='text-center p-4 rounded-lg hover:bg-sky-500 mr-2 bg-slate-400'>03</div>
    </div>
    <h1 className="shadow-md w-90 bg-emerald-700 m-4 shadow-red-900 h-32 font-bolder text-white flex justify-center items-center text-4xl drop-shadow-lg decoration-purple-700 rounded-md">Moringa School</h1>
    <form className='bg-sky-500 max-w-xs mx-auto p-3 fixed top-1 z-3 bottom-1 rounded-xl left-5 shadow-md shadow-black'>
      <label className='block'>
        <span className='block text-sm font-medium text-slate-700 after:content-["*"] after:text-red-500 after:ml-0.5'>Email</span>
        <input type="email" name="email" className='peer invalid:text-pink-600 invalid:ring-1 invalid:ring-pink-700 focus:outline-none shadow-md shadow-red-900 px-2 w-full' />
        <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
          Please provide a valid email address.
        </p>
      </label>

      <label className='relative block'>
        <span>Search</span>
        <div className='flex bg-white shadow-md shadow-red-900 p-1'>
          <span className='flex justify-center items-center'>
            <ImSearch className='fill-slate-400 text-sm' />
          </span>
          <input className='pl-3 text-sm w-full focus:outline-none' placeholder='Search...'/>
        </div>
      </label>

      <div className='bg-transparent flex items-center p-4'>
        <img className='h-12 ring-4 ring-amber-700 rounded-full hover:animate-spin' src={dp} />
        <label className='bg-transparent'>
          <input type="file" name="photo" className='text-sm file:mr-4file-py-2 file:px-4 file:ml-4 w-full file:rounded-full file:text-violet-700 hover:file:bg-violet-100 file:border file:border-solid' />
        </label>
      </div>
    </form>

    <ul role="list" className='bg-black/70 mx-auto max-w-xs m-4 pl-5 marker:text-sky-400 space-y-3 list-disc text-slate-500'>
      <li>5 cups chopped Porcini mushrooms</li>
      <li>1/2 cup of olive oil</li>
      <li>3lb of celery</li>
    </ul>
    </>
    
  );
}

export default App;
