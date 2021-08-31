import { ProductInfoType, Website } from "../interface";
import { availableCategories } from "../data";


export class Lowes implements Website {

  public productInfo: ProductInfoType;

  constructor(currentURL: string) {

    this.productInfo = {
      product_category: undefined,
      product_brand: undefined,
      product_name: undefined,
      product_model: undefined,
      product_price: undefined,
      product_link: undefined,
      product_img_url: undefined,
      source: undefined
    };

    this.productInfo.source = "lowes";
    this.productInfo.product_link = currentURL;
    this.setCategory();
    this.setModel();
    this.setImgURL();
    this.setPrice();
    // alert(this.productInfo.product_category);
    // alert(this.productInfo.product_model);
    // alert(this.productInfo.product_img_url);
    // alert(this.productInfo.product_price);
  }

  private setCategory() {
    let keywords = "";
    document.querySelectorAll(".sc-iJuUWI.bBQWsA > li > a")?.forEach( (element) => {
      keywords += (element.getAttribute("aria-label")?.trim().toLocaleLowerCase());
    } );

    for (let [category, keywordCollection] of Object.entries(availableCategories)) {
      if (keywordCollection.some( (availableKeyword) => keywords.includes(availableKeyword) )) {
        this.productInfo.product_category = category;
      };
    }
  }

  private setModel() {
    console.log(document.querySelectorAll(".modelNo > span"));
    this.productInfo.product_model = document.querySelectorAll(".modelNo > span")[1]?.textContent?.trim().replace("Model #", "");
  }

  private setImgURL() {
    this.productInfo.product_img_url = document.querySelector(".imgContainer > img")?.getAttribute("src") ?? undefined;
  }

  private setPrice() {
    if (document.getElementsByClassName("was").length != 0) {
      this.productInfo.product_price = parseFloat(document.getElementsByClassName("was")[0].children[0].textContent?.trim().replace("$", "") ?? "");
    }
    else if (document.getElementsByClassName("aPrice large").length != 0) {
      let priceStr = document.getElementsByClassName("aPrice large")[0].children[2].textContent?.trim().replace(",", "") ?? "";
      priceStr += document.getElementsByClassName("aPrice large")[0].children[3].textContent?.trim();
      this.productInfo.product_price = parseFloat(priceStr);
    }
  }

  private setName() {
    
  }
}