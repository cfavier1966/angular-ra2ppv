import { Component } from '@angular/core';
import { products } from '../products';
/**
 * @Component => decoration 
 *  provides metada about the component such as:
 *    - selector (the component itself)
 *    - template (html)
 *    - style (css)
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

/**
 * Export of the class
 */
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

