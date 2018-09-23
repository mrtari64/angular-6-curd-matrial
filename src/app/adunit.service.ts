import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  private forgotUrl = 'http://localhost:8000/' + 'add';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price, textarea) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price,
      textarea: textarea
    };
    this.http.post(this.forgotUrl, obj)
      .subscribe(res => console.log('Done'));
  }

}
