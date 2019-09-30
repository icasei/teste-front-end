import { SummarizedDetails } from 'src/app/shared/interfaces/summarized-details';

export interface SummarizedDetailsLoad {
  nextPageToken: string;
  items: SummarizedDetails[];
}