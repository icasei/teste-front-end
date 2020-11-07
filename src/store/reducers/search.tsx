export interface SearchState {
  isSearching?: boolean;
  searchTerm?: string;
  searchResult?: any;
}

const initialState: SearchState = {
  isSearching: false,
  searchTerm: '',
  searchResult: null
};

export enum SearchActionType {
  ON_SEARCH,
  ON_SEARCH_RESULT,
  ON_SEARCH_NEXTPAGE,
  DELETE
}
interface SearchAction {
  type: SearchActionType;
  searchTerm: string;
  searchResult: any;
}

export default function SearchReducer(
  state = initialState,
  action: SearchAction
) {
  switch (action.type) {
      case SearchActionType.ON_SEARCH:
          console.log('mudei', action);

          return {
              ...state,
              isSearching: true,
              searchTerm: action.searchTerm
          };

      case SearchActionType.ON_SEARCH_RESULT:
          return { ...state, searchResult: action.searchResult };

      case SearchActionType.DELETE:
          return { ...state, searchResult: initialState.searchResult }
      default:
          return state;
  }
}