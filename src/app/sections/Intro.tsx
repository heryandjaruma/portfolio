import {
  Alagard,
  Bello,
  Genty,
  Grotesk400,
  HelveticaRoman,
} from "../utils/fonts";

export default function Intro() {
  return (
    <div className="bg-njblue-500 text-white p-4">
      <p className="tracking-wider text-3xl">
        <span className={Genty.className}>A</span>
        <span className={HelveticaRoman.className}>tt</span>
        <span className={HelveticaRoman.className}>e</span>
        <span className={HelveticaRoman.className}>n</span>
        <span className={Bello.className}>t</span>
        <span className={HelveticaRoman.className}>io</span>
        <span className={Alagard.className}>n</span>
      </p>
      <p className={Grotesk400.className}>
        I&apos;m <span className="opacity-20">He</span>
        <span className="underline">ryan</span>. <br />
        Currently in my junior year. My interests are mobile development and
        cloud. You can find some of my works in this page.
      </p>
      <p className="mt-2">
        To view my full profile, visit my{" "}
        <a
          className="bg-neon-500 px-1 text-njblue-700 underline"
          target="_blank"
          href="https://www.linkedin.com/in/heryandjaruma/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <p className={Grotesk400.className}>
        Find my projects on{" "}
        <a
          className="bg-neon-500 px-1 underline text-njblue-700"
          target="_blank"
          href="https://github.com/heryandjaruma"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
