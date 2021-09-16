import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YtbServiceService {

  constructor() { }

  async getDatas(keyword: string){
    const API_YTB_URL = 'https://www.googleapis.com/youtube/v3/search'
    const API_KEY = 'AIzaSyCCeDwqFMVAlM-Vqi5gfG9hoJvBTrL1vuI';
    const params = [
      `q=${keyword}`,
      `key=${API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    await fetch(`${API_YTB_URL}?${params}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.items);
    })
  }
}
