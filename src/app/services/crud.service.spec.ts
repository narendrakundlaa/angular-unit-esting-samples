import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


import { CrudService } from './crud.service';

describe('CrudService', () => {
  let httpMock: HttpTestingController;
  let crudService: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [CrudService]
    });
    crudService = TestBed.get(CrudService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });


  it('should have getData function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.getEmployees).toBeTruthy();
  });
  it('should have add function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.addEmployee).toBeTruthy();
  });
  it('should have update function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.updateEmployee).toBeTruthy();
  });
  it('should have delete function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.deleteItems).toBeTruthy();
  });
  it('should have getById function', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.getEmployeeId).toBeTruthy();
  });

  it('getData() should http GET names', () => {

    const names = [
      { name: 'Narendra' }, { name: 'Chintu' }
    ];

    crudService.getEmployees().subscribe((res: any) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:3000/employee');
    expect(req.request.method).toEqual("GET");
    req.flush(names);

    httpMock.verify();
  });

  it('addData() should http POST names', () => {

    const names = { id: 1, name: 'Narendra' }


    crudService.addEmployee(names).subscribe((res: any) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:3000/employee');
    expect(req.request.method).toEqual("POST");
    req.flush(names);

    httpMock.verify();
  });


  it('getByID() should http GET id', () => {

    const names = { id: 1 }


    crudService.getEmployeeId(names.id).subscribe((res: any) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:3000/employee/1');
    expect(req.request.method).toEqual("GET");
    req.flush(names);

    httpMock.verify();
  });


  it('delete() should http Delete id', () => {

    const names = { id: 1 }


    crudService.deleteItems(names.id).subscribe((res: any) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:3000/employee/1');
    expect(req.request.method).toEqual("DELETE");
    req.flush(names);

    httpMock.verify();
  });


  it('update() should http PUT names', () => {

    const names = { id: 1, name: 'Narendra' }


    crudService.updateEmployee(names).subscribe((res: any) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('http://localhost:3000/employee/1');
    expect(req.request.method).toEqual("PUT");
    req.flush(names);

    httpMock.verify();
  });
});
