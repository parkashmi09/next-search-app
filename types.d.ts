type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: string;
    height: string;
  };
};

type SearcResult = {
  query?: {
    pages?: Result[];
  };
};
