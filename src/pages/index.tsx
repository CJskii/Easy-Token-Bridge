import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-3xl text-white">Swing</h1>
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/swing/widget/swap"
            className="rounded-lg border-2 border-black px-4 py-2 text-white"
          >
            Swap{" "}
          </Link>
          <Link
            href="/swing/widget/gas"
            className="rounded-lg border-2 border-black px-4 py-2 text-white"
          >
            Gas
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-3xl text-white">Squid</h1>
        <Link
          href="/squid/widget/swap"
          className="rounded-lg border-2 border-black px-4 py-2 text-white"
        >
          Swap{" "}
        </Link>
      </div>
    </>
  );
}
