import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

export default function IndexPage() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  }, []);

  return (
    <div className="page">
      <h1>About Page</h1>
      <div className="box" ref={boxRef}>
        About
      </div>
      <p>
        <Link href="/">Back home</Link>
      </p>

      <style jsx global>{`
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }

        .box {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #28a92b;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
