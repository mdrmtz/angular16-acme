import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { HomeComponent } from './home.component';
import { SeoService } from 'src/app/services/seo/seo.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'testId' }),
          },
        },
        {
          provide: ApiService,
          useValue: {
            getBlogPosts: () => Promise.resolve({ blogs: ['blog1', 'blog2'] }),
            getBlogDetail: () => Promise.resolve({ blog: { title: 'Test Blog' } }),
          },
        },
        { provide: SeoService, useValue: {} },
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
