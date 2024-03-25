import Image from "next/image";

export default function Home() {
  return (
    <>

      <body>
        <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
          <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
            <div class="flex items-center gap-2">
              <Image
                src={'/assets/svg/menu.svg'}
                alt="menu"
                width={20}
                height={20}
              />
              <a href="./index.html">
                <img src="./assets/lws-logo-black.svg" class="h-10" alt="" />
              </a>
            </div>
          </div>
          <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
            <Image
              src={'/assets/svg/avatar.svg'}
              alt="menu"
              width={40}
              height={40}
              className="hidden lg:block w-[18px] h-[18px]"
            />

            <Image src={'/assets/svg/shopping-Cart.svg'} width={20} height={20} className="block w-5 h-5" alt="shopping cart icon" />
          </div>
        </nav>

        <header
          className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"
          style={{ backgroundImage: "url('/assets/header.webp')" }}
        >
          <div class="mb-5 w-10/12 max-w-7xl text-white mx-auto">
            <h1 class="text-2xl lg:text-3xl font-serif">Introducing LWS Shop Center</h1>
            <p>Your whole week at a glance</p>
            <button
              class="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
              Get the Weekly Kit
            </button>
          </div>
        </header>
      </body>

    </>
  );
}
