import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallDataServiceService {

  constructor() { }

callEndPoint() {

const options = new HttpHeaders()
                .set('applicationName', 'pmapp');

return this.http.get()

}
}
