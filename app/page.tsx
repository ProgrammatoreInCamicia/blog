import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Stefan</span>
        </span>
      </p>

      <Posts />

    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1>Hello world!</h1>
    // </main>
  );
}
