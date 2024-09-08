import Image from "next/image";
import Logo from "../public/xam.gif";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex justify-between items-center gap-8">
        <Image src={Logo} alt="XamHub Logo" width={80} height={80} />
        <h1 className="text-white text-2xl font-bold">XamHub</h1>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to XamHub</h1>
      </main>

      <footer>
        Made by <a href="https://github.com/XamHub/" target="_blank">XamHub</a>
      </footer>
    </div>
  );
}
