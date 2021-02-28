import {TestBed} from '@angular/core/testing';

import {ItemService} from './item.service';
import {ItemModel} from '../models/item-model';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ItemServiceService', () => {
  let service: ItemService;
  let httpController: HttpTestingController;

  const PRODUCTS: ItemModel[] = [
    new ItemModel('uuid-1', 'product-1', 1.99),
    new ItemModel('uuid-2', 'product-2', 2.99),
    new ItemModel('uuid-3', 'product-3', 5.99)
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService]
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll()', () => {
    it('should use correct URL', () => {
      service.getAll().subscribe();

      const req = httpController.expectOne(`${ItemService.URL_API}/products`);
      req.flush(PRODUCTS);
      httpController.verify();

      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual(`${ItemService.URL_API}/products`);
    });

    // DON'T KNOW HOW TO PROPERLY TEST IT
    // it('should throw exception while service not available', () => {
    //   let apiResponse: any;
    //
    //   service.getAll().subscribe(resp => {
    //   }, error => {
    //     apiResponse = error;
    //   });
    //
    //   const req = httpController.expectOne(`${ItemService.URL_API}/products`);
    //   req.error(new ErrorEvent(''), {status: 503, statusText: 'Service not available'});
    //   httpController.verify();
    //
    //   expect(req.request.method).toEqual('GET');
    //   expect(req.request.url).toEqual(`${ItemService.URL_API}/products`);
    // });

    it('should fetch list', () => {
      service.getAll().subscribe(response => {
        expect(response.length).toBe(3);
      });

      const req = httpController.expectOne(`${ItemService.URL_API}/products`);
      req.flush(PRODUCTS);
      httpController.verify();

      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual(`${ItemService.URL_API}/products`);
    });

    it('should fetch empty list', () => {
      service.getAll().subscribe(response => {
        expect(response.length).toBe(0);
      });

      const req = httpController.expectOne(`${ItemService.URL_API}/products`);
      req.flush([]);
      httpController.verify();

      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual(`${ItemService.URL_API}/products`);
    });
  });
});
