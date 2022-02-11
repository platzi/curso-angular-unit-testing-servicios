import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './product.service';
import { Product } from '../models/product.model';
import { environment } from './../../environments/environment';

fdescribe('ProductsService', () => {
  let productService: ProductsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ProductsService
      ]
    });
    productService = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be create', () => {
    expect(productService).toBeTruthy();
  });

  describe('tests for getAllSimple', () => {
    it('should return a product list', (doneFn) => {
      //Arrange
      const mockData: Product[] = [
        {
          id: '123',
          title: 'title',
          price: 12,
          description: 'blabla',
          category: {
            id: 112,
            name: 'as'
          },
          images: ['img','img']
        }
      ];
      //Act
      productService.getAllSimple()
      .subscribe((data)=> {
        //Assert
        expect(data.length).toEqual(mockData.length);
        expect(data).toEqual(mockData);
        doneFn();
      });

      // http config
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      httpController.verify();
    });
  });

});
