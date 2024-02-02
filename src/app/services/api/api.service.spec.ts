import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ApiService],
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });
});
