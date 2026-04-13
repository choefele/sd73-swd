import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Component from "./Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto box-border flex min-h-screen w-full max-w-[1126px] flex-col border-x border-[#e5e4e7] bg-white text-center text-[18px] leading-[145%] tracking-[0.18px] text-[#6b6375] antialiased [font-family:system-ui,'Segoe_UI',Roboto,sans-serif] max-[1024px]:text-[16px] dark:border-[#2e303a] dark:bg-[#16171d] dark:text-[#9ca3af]">
      <Component text="<text>" number={25} />
      <section className="flex grow flex-col place-content-center place-items-center gap-[25px] max-[1024px]:gap-[18px] max-[1024px]:px-5 max-[1024px]:py-8">
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-[34px] z-10 mx-auto h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="m-0 mb-8 text-[56px] font-medium tracking-[-1.68px] text-[#08060d] max-[1024px]:my-5 max-[1024px]:text-[36px] dark:text-[#f3f4f6]">
            Get started
          </h1>
          <p>
            Edit{" "}
            <code className="inline-flex rounded bg-[#f4f3ec] px-2 py-1 text-[15px] leading-[135%] text-[#08060d] [font-family:ui-monospace,Consolas,monospace] dark:bg-[#1f2028] dark:text-[#f3f4f6]">
              src/App.tsx
            </code>{" "}
            and save to test{" "}
            <code className="inline-flex rounded bg-[#f4f3ec] px-2 py-1 text-[15px] leading-[135%] text-[#08060d] [font-family:ui-monospace,Consolas,monospace] dark:bg-[#1f2028] dark:text-[#f3f4f6]">
              HMR
            </code>
          </p>
        </div>
        <button
          className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-[rgba(170,59,255,0.1)] px-[10px] py-[5px] text-[16px] text-[#aa3bff] transition-colors hover:border-[rgba(170,59,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa3bff] dark:bg-[rgba(192,132,252,0.15)] dark:text-[#c084fc] dark:hover:border-[rgba(192,132,252,0.5)] [font-family:ui-monospace,Consolas,monospace]"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full">
        <span className="absolute top-[-4.5px] left-0 block h-0 w-0 border-[5px] border-transparent border-l-[#e5e4e7] dark:border-l-[#2e303a]" />
        <span className="absolute top-[-4.5px] right-0 block h-0 w-0 border-[5px] border-transparent border-r-[#e5e4e7] dark:border-r-[#2e303a]" />
      </div>

      <section className="flex border-t border-[#e5e4e7] text-left max-[1024px]:flex-col max-[1024px]:text-center dark:border-[#2e303a]">
        <div className="flex-1 border-r border-[#e5e4e7] p-8 max-[1024px]:border-r-0 max-[1024px]:border-b max-[1024px]:border-[#e5e4e7] max-[1024px]:px-5 max-[1024px]:py-6 dark:border-[#2e303a]">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 text-2xl leading-[118%] tracking-[-0.24px] text-[#08060d] max-[1024px]:text-[20px] dark:text-[#f3f4f6]">
            Documentation
          </h2>
          <p>Your questions, answered</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-[1024px]:mt-5 max-[1024px]:flex-wrap max-[1024px]:justify-center">
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <img
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  src={reactLogo}
                  alt=""
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 max-[1024px]:px-5 max-[1024px]:py-6">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 text-2xl leading-[118%] tracking-[-0.24px] text-[#08060d] max-[1024px]:text-[20px] dark:text-[#f3f4f6]">
            Connect with us
          </h2>
          <p>Join the Vite community</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-[1024px]:mt-5 max-[1024px]:flex-wrap max-[1024px]:justify-center">
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="max-[1024px]:basis-[calc(50%_-_8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[rgba(244,243,236,0.5)] px-3 py-1.5 text-[16px] text-[#08060d] no-underline transition-shadow hover:shadow-[rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.05)_0_4px_6px_-2px] max-[1024px]:w-full max-[1024px]:justify-center dark:bg-[rgba(47,48,58,0.5)] dark:text-[#f3f4f6] dark:hover:shadow-[rgba(0,0,0,0.4)_0_10px_15px_-3px,rgba(0,0,0,0.25)_0_4px_6px_-2px]"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full">
        <span className="absolute top-[-4.5px] left-0 block h-0 w-0 border-[5px] border-transparent border-l-[#e5e4e7] dark:border-l-[#2e303a]" />
        <span className="absolute top-[-4.5px] right-0 block h-0 w-0 border-[5px] border-transparent border-r-[#e5e4e7] dark:border-r-[#2e303a]" />
      </div>
      <section className="h-[88px] border-t border-[#e5e4e7] max-[1024px]:h-12 dark:border-[#2e303a]"></section>
    </div>
  );
}

export default App;
