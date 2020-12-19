import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IStoreItem } from "./storeItem.interface";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  constructor(private http: HttpClient) {}

  private _list;

  public get list() {
    return this._list;
  }

  public get() {
    const request = this.http.get(
      "https://fakestoreapi.com/products?sort=desc"
    );

    request.subscribe(this.handleList);
  }

  private handleList = (response: IStoreItem[]) => {
    this._list = response;
  };
}
