import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-100 grid min-h-full grid-flow-col">
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-3xl text-white">Swing</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/swing/widget/swap" className="btn">
              Swap{" "}
            </Link>
            <Link href="/swing/widget/gas" className="btn">
              Gas
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-3xl text-white">Squid</h1>
          <Link href="/squid/widget/swap" className="btn">
            Swap{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
