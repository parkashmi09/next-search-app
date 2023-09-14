import getWikiResult from "@/lib/getWikiResult";
import Item from "./components/item";
import React from "react";

type Props = {
  params: {
    searchItem: string;
  };
};

export async function generateMetaData({ params: { searchItem } }: Props) {
  const wikiData: Promise<SearcResult> = getWikiResult(searchItem);
  const data = await wikiData;
  const displayItem = searchItem.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${displayItem} Not Found`,
    };
  }
  return {
    title: displayItem,
    description: `Search results for ${displayItem}`,
  };
}

const SearchResult = async ({ params: { searchItem } }: Props) => {
  const wikiData: Promise<SearcResult> = getWikiResult(searchItem);
  const data = await wikiData;
  // console.log("wiki datas are", JSON.stringify(data));
  const results: Result[] | undefined = data?.query?.pages;

  const renderContent = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          // eslint-disable-next-line react/jsx-key
          return <Item key={result?.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl ">{`${searchItem} Not Found`}</h2>
      )}
    </main>
  );
  console.log("results are", JSON.stringify(results));
  return renderContent;
};

export default SearchResult;
