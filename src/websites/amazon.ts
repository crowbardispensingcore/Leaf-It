import { ProductInfoType, Website } from "../interface";
import { availableCategories } from "../data";


export class Amazon implements Website {

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

    this.productInfo.source = "amazon";
    this.productInfo.product_link = currentURL;
    this.setName();
    this.setCategory();
    this.setDetails();
    this.setImgURL();
    this.setPrice();
    console.log(this.productInfo.product_name);
    console.log(this.productInfo.product_category);
    console.log(this.productInfo.product_model);
    console.log(this.productInfo.product_img_url);
    console.log(this.productInfo.product_price);
  }

  private setCategory() {
    let keywords = "";
    document.querySelectorAll(".a-link-normal.a-color-tertiary").forEach( (element) => {
      keywords += (element.textContent?.trim().toLowerCase());
    } );

    for (let [category, keywordCollection] of Object.entries(availableCategories)) {
      if (keywordCollection.some( (availableKeyword) => keywords.includes(availableKeyword) )) {
        this.productInfo.product_category = category;
      };
    }

    // for (let i = 0; i < availableCategories.length; i++) {
    //   if (keywords.includes(availableCategories[i])) {
    //     this.productInfo.product_category = availableCategories[i];
    //   }
    // }
  }

  private setDetails() {
    document.querySelectorAll(".a-color-secondary.a-size-base.prodDetSectionEntry").forEach( (element) => {
      // console.log(element);
      // console.log(element.parentElement?.children[1]);
      if (element.textContent?.includes("Brand Name")) {
        this.productInfo.product_brand = element.parentElement?.children[1].textContent?.replace("&lrm", "").trim().toLowerCase();
      }
      else if (element.textContent?.includes("Item model number")) {
        this.productInfo.product_model = element.parentElement?.children[1].textContent?.replace("&lrm", "").trim().toLowerCase();
      }
    });
  }
  
  private setImgURL() {
    this.productInfo.product_img_url = document.getElementById("imgTagWrapperId")?.getElementsByTagName("img")[0].getAttribute("src") ?? undefined;
  }

  private setPrice() {
    if (document.getElementsByClassName("priceBlockStrikePriceString a-text-strike").length != 0) {
      this.productInfo.product_price = parseFloat(document.getElementsByClassName("priceBlockStrikePriceString a-text-strike")[0].textContent?.trim().replace("$", "").replace(",", "") ?? "");
    }
    else if (document.getElementById("priceblock_ourprice")) {
      let priceStr = document.getElementById("priceblock_ourprice")?.textContent?.trim().replace("$", "").replace(",", "");
      this.productInfo.product_price = parseFloat(priceStr ?? "");
    }
    else if (document.getElementById("priceblock_saleprice")) {
      let priceStr = document.getElementById("priceblock_saleprice")?.textContent?.trim().replace("$", "").replace(",", "");
      this.productInfo.product_price = parseFloat(priceStr ?? "");
    }
  }

  private setName() {
    this.productInfo.product_name = document.getElementById("productTitle")?.textContent?.trim();
  }
}