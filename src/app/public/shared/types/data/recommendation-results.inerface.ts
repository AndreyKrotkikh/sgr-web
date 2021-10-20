export interface RecommendationResultsInterface {
  current: ResultInterface[],
  prev: ResultInterface[]
}

export interface ResultInterface {
  name: string;
  score: string;
  rate: string;
}
