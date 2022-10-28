import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";
import Date from "components/date";
import NextLink from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Post({ postData }) {
  return (
    <div className="container mx-auto flex justify-between selection:bg-primary">
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content="This is a my writing. Sometimes I'm writing things about of my days or weeks."
          key="description"
        />
      </Head>
      <div className="flex flex-col gap-4 pt-20 max-w-[550px]">
        <div className="">
          <NextLink href="/">
            <a className="text-primary transition duration-300 hover:text-primary/80 flex items-center gap-1">
              {<HiOutlineChevronLeft />} Back to Home
            </a>
          </NextLink>
        </div>
        <article>
          <h1 className="text-lg text-white font-bold">{postData.title}</h1>
          <div className="text-gray-400">
            <Date dateString={postData.date} />
          </div>
          <div
            className="text-gray-300 font-regular mt-8 leading-[1.55] postContent"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </div>
      <div></div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
