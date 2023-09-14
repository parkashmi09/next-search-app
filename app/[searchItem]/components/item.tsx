/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type Props = {
  result: Result;
};

const Item = (props: Props) => {
  const { result } = props;
  const renderItemCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result?.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result?.title}
        </Link>
      </h2>
      <p>{result?.extract}</p>
    </div>
  );

  const renderContent = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {renderItemCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{renderItemCol}</article>
  );
  return renderContent;
};

export default Item;
