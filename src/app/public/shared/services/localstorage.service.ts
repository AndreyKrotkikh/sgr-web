import { ResultInterface } from './../types/data/recommendation-results.inerface';
import { Injectable } from '@angular/core';
import { RecommendationResultsInterface } from '../types/data/recommendation-results.inerface';
import { DetailedFormInterface } from '../types/common/detailed-form.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  public setDetailedDraft(draft: DetailedFormInterface) {
    const detailedDraft = JSON.stringify(draft);
    localStorage.setItem('detailed-draft', detailedDraft);
  }

  public getDetailedDraft(): DetailedFormInterface {
    const jsonDetailedDraft = localStorage.getItem('detailed-draft');
    const result: DetailedFormInterface = JSON.parse(jsonDetailedDraft!);
    return result;
  }

  public setResults(results: ResultInterface[]) {
    const currentResults = this.getResults();
    let newResults: RecommendationResultsInterface = {
      current: [],
      prev: [],
    };

    newResults.prev = currentResults?.current;
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
