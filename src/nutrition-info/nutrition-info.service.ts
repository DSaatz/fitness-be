import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NutritionInfoService {
  private readonly searchApiUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  async searchProducts(searchTerm: string): Promise<any[]> {
    try {
      const response = await axios.get(this.searchApiUrl, {
        params: {
          search_terms: searchTerm,
          action: 'process',
          json: true, 
        },
      });

      const products = response.data.products;

      if (!products || products.length === 0) {
        throw new Error('No products found');
      }

      return products; 
    } catch (error) {
      throw new Error(`Failed to search products: ${error.message}`);
    }
  }
}