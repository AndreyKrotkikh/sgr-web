export interface RecommendationResultsInterface {
  current: ResultInterface[],
  prev: ResultInterface[]
}

export interface ResultInterface {
  name: string;
  rating: string;
  rate: string;
  type: string;
  site: string;
}
