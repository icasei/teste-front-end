import { Injectable } from '@angular/core';
import { SummarizedDetailsLoad } from 'src/app/shared/interfaces/summarized-details-load';

@Injectable()
export class CacheService {

    private _cache: SummarizedDetailsLoad & { termToSearch: string };

    constructor() { }

    public get cache() {
      return this._cache;
    }

    public set cache(cache: SummarizedDetailsLoad & { termToSearch: string }) {
      if (this._cache) {
        this._cache.nextPageToken = cache.nextPageToken;
        this._cache.items.concat(cache.items)
        this._cache.termToSearch = cache.termToSearch
      } else {
        this._cache = cache;
      }
    }

    public clearCache() {
      this._cache = undefined;
    }
}