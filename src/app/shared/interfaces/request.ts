export interface Request {
  [key: string]: any; 
  params: { [key: string]: string | string[] };
}
