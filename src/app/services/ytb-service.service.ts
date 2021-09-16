import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YtbService {
  

  constructor() {}

  public getDatas(keyword: string): Promise<any> {
    const API_YTB_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyCCeDwqFMVAlM-Vqi5gfG9hoJvBTrL1vuI';
    const params = [
      `q=${keyword}`,
      `key=${API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&');

    return fetch(`${API_YTB_URL}?${params}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          return;
        }

        return data.items.map((item: any) => {
          return item.snippet
        });
      });
  }
}
