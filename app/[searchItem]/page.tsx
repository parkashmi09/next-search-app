import getWikiResult from "@/lib/getWikiResult";
import Item from "./components/item";
import React from "react";

type Props = {
  params: {
    searchItem: string;
  };
};

export async function generateMetaData({ params }: Props) {
  const { searchItem } = params;
  try {
    const wikiData: Promise<SearcResult> = getWikiResult(searchItem);
    const data = await wikiData;
    if (!data?.query?.pages) {
      return {
        title: `${searchItem} Not Found`,
        description: "No search results or an error occurred.",
      };
    }

    const displayItem = searchItem.replaceAll("%20", " ");
    return {
      title: displayItem,
      description: `Search results for ${displayItem}`,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    throw error;
  }
}
const SearchResult = async ({ params: { searchItem } }: Props) => {
  const wikiData: Promise<SearcResult> = getWikiResult(searchItem);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const renderContent = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results)?.map((result) => {
          return <Item key={result?.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl ">{`${searchItem} Not Found`}</h2>
      )}
    </main>
  );
  return renderContent;
};

export default SearchResult;
