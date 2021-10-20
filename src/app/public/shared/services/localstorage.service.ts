import { ResultInterface } from './../types/data/recommendation-results.inerface';
import { Injectable } from '@angular/core';
import { RecommendationResultsInterface } from '../types/data/recommendation-results.inerface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  public setDetailedDraft(draft: any) {
    const detailedDraft = JSON.stringify(draft);
    localStorage.setItem('detailed-draft', detailedDraft);
  }

  public getDetailedDraft() {
    const jsonDetailedDraft = localStorage.getItem('detailed-draft');
    return JSON.parse(jsonDetailedDraft!);
  }

  public setResults(results: ResultInterface[]) {
    const currentResults = this.getResults();
    let newResults: RecommendationResultsInterface = {
      current: [],
      prev: []
    };

    newResults.prev = currentResults.current;
    newResults.current = results;

    const detailedDraft = JSON.stringify(newResults);
    localStorage.setItem('recommendation-results', detailedDraft);
  }

  public getResults(): RecommendationResultsInterface {
    const jsonResults = localStorage.getItem('recommendation-results');
    const results: RecommendationResultsInterface = JSON.parse(jsonResults!);
    return results;
  }
}
