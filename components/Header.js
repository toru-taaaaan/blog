import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <h1>
          <Link href="/">
            <a>脱毛システムBLOG</a>
          </Link>
        </h1>
        <div>
          <Link href="http://datsumo.site/">
            <a>公式サイト</a>
          </Link>
          <Link href="http://datsumo.site/">
            <a>Twitter</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background-image: url(https://sf.ezoiccdn.com/ezoimgfmt/optimizedude.com/wp-content/uploads/2015/02/Cool-Twitter-Header-idea-4.jpg?ezimgfmt=ng:webp/ngcb2);
          background-repeat: no-repeat;
          box-shadow: 0 2px 3px #000;
          height: 7rem;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
          color: white;
        }
        nav a:hover{
          text-decoration: none;s
        }
      `}</style>
    </>
  );
}
