import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
data:any
  constructor(private http:HttpClient) { }
  public postdata(data:any)
  {
    return this.http.put("http://172.17.15.235:8080/updateprofile",data);
  }
}
