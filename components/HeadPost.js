import Link from "next/link";
export const HeadPost = ({ meta, isBlogPost, link }) => (
  <>
    <h1 className={isBlogPost ? "great-title" : null}>
      <Link href={"/blog" + link}>
        <a>{meta.title}</a>
      </Link>
    </h1>
    <div className="details">
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + " min read"}
      </span>
      {isBlogPost ? null : <p>{meta.description}</p>}
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
          margin-bottom: 0;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #333;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
        .details p {
          margin-top: 0.2rem;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
  </>
);
