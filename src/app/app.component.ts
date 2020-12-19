import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";
import { StoreService } from "./store.service";
import { IStoreItem } from "./storeItem.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  public cartTotal: number = 0;
  public cartItem: IStoreItem[] = [];

  public isCartOpen: boolean = false;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.get();
  }

  public get list() {
    return this.storeService.list;
  }

  public addItemToCart(item: IStoreItem) {
    this.cartTotal += item.price;
    this.cartTotal = Number(this.cartTotal.toFixed(2));

    this.cartItem.push(item);
  }

  public openCart() {
    this.isCartOpen = true;
  }

  public closeCart() {
    this.isCartOpen = false;
  }
}
