import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <>
      <article>
        <HeadPost meta={meta} link={link} />
      </article>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </>
  );
};
