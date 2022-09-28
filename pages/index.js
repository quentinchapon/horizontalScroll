import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    });
  }, []);

  return (
    <div className="container">
      <section className="panel">
        <h1>SCROLL DOWN</h1>
      </section>
      <section className="panel">
        <h2>ONE</h2>
      </section>
      <section className="panel">
        <h2>TWO</h2>
      </section>
      <section className="panel">
        <h2>THREE</h2>
      </section>

      <style jsx global>{`
        html,
        body {
          margin: 0;

          padding: 0;

          width: 100%;

          height: 100%;

          overflow-x: hidden;

          font-family: "Signika Negative", sans-serif, Arial;

          overflow-scrolling: touch;
        }

        html {
          background: #333;

          height: 100%;

          overflow-y: scroll;
        }

        body {
          position: relative;

          height: unset;

          overflow-x: hidden;
          overflow-y: visible;
        }

        .panel {
          display: flex;
          position: relative;

          align-items: center;

          justify-content: center;

          margin: 0;

          background: #333;

          padding: 0;

          width: 100vw;

          height: 100%;

          text-align: center;

          color: white;

          font-size: 1.5em;
          font-weight: 600;
        }

        h1,
        h2,
        p,
        li {
          max-width: 800px;
        }

        .container {
          display: flex;

          flex-wrap: nowrap;

          width: 400%;

          height: 100vh;
        }
      `}</style>
    </div>
  );
}
