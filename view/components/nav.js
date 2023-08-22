const navbar = document.querySelector('#navbar');

const createNavHome = () => {
  navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a href="/" class="font-bold text-xl text-white hover:text-zinc-200">Contacts App</a>
            <!-- version movil -->

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-blue-800 rounded-lg"
            >

                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>
              
              <!-- Version de escritorio -->

            <div class="hidden md:flex flex-row gap-4">

                <a href="/login" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">Login</a>
                <a href="/signup" class="font-bold bg-violet-100 hover:bg-neutral-300 py-2 px-4 rounded-lg transition ease-in-out">SignUp</a>
                
            </div>

            <!-- Menu Movil -->

            <div class="bg-neutral-800/70 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <a href="/login" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">Login</a>
            <a href="/signup" class="font-bold bg-violet-100 hover:bg-neutral-300 py-2 px-4 rounded-lg transition ease-in-out">SignUp</a>

            </div>
        </div>
    `;
};
const createNavSignUp = () => {
  navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <a href="/" class="font-bold text-xl text-white hover:text-zinc-200">Contacts App</a>
    <!-- version movil -->

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-blue-800 rounded-lg"
            >

                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>
              
              <!-- Version de escritorio -->

            <div class="hidden md:flex flex-row gap-4">
                <a href="/login" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">Login</a>                
            </div>

            <!-- Menu Movil -->

            <div class="bg-neutral-800/70 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <a href="/login" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">Login</a>

            </div>
        </div>
    `;
};
const createNavLogin = () => {
  navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <a href="/" class="font-bold text-xl text-white hover:text-zinc-200">Contacts App</a>
    <!-- version movil -->

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-blue-800 rounded-lg"
            >

                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>
              
              <!-- Version de escritorio -->

            <div class="hidden md:flex flex-row gap-4">
                <a href="/signup" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">SignUp</a>                
            </div>

            <!-- Menu Movil -->

            <div class="bg-neutral-800/70 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <a href="/signup" class="text-white font-bold hover:bg-blue-800 py-2 px-4 rounded-lg transition ease-in-out">SignUp</a>

            </div>
        </div>
    `;
};
const createNavContacts = () => {
  navbar.innerHTML = `
     <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
     <a href="/" class="font-bold text-xl text-white hover:text-zinc-200">Contacts App</a>
     <!-- version movil -->

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                stroke="currentColor" 
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-violet-950 rounded-lg"
            >

                <path 
                    stroke-linecap="round"
                    stroke-linejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>
              
              <!-- Version de escritorio -->

            <div class="hidden md:flex flex-row gap-4">
                <button id="close-btn" class="text-white font-bold hover:bg-violet-950 py-2 px-4 rounded-lg transition ease-in-out">Cerrar Sesion</button>                
            </div>

            <!-- Menu Movil -->

            <div class="bg-neutral-800/70 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
              <button id="close-btn" class="text-white font-bold hover:bg-violet-950 py-2 px-4 rounded-lg transition ease-in-out">Cerrar Sesion</button>                
            </div>
        </div>
    `;
};
if (window.location.pathname === '/') {
  createNavHome();
} else if (window.location.pathname === '/signup/') {
  createNavSignUp();
} else if (window.location.pathname === '/login/') {
  createNavLogin();
} else if (window.location.pathname === '/contact/') {
  // createNavContacts();
}

const navBtn = navbar.children[0].children[1];
const menuMovil = navbar.children[0].children[3];

navBtn.addEventListener('click', e => {
  if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBtn.innerHTML = `  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  `;
    menuMovil.classList.remove('hidden');
    menuMovil.classList.add('flex');

  } else {
    navBtn.classList.remove('active');
    navBtn.innerHTML = `<path 
stroke-linecap="round"
stroke-linejoin="round" 
d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
/>`;
    menuMovil.classList.add('hidden');
    menuMovil.classList.remove('flex');
  }


});


// puede haber un error?
const closeBtnDesktop = navbar.children[0].children[2].children[0];
const closeBtnMobile = navbar.children[0].children[3].children[0];


closeBtnDesktop.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});
closeBtnMobile.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});