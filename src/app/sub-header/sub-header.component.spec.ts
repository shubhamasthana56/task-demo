import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubHeaderComponent } from './sub-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentProviderService } from 'app/services/content-provider.service';


describe('SubHeaderComponent', () => {
  let component: SubHeaderComponent;
  let fixture: ComponentFixture<SubHeaderComponent>;
  let cps: Partial<ContentProviderService>;
  beforeEach(async(() => {
    cps = new ContentProviderService();
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot()],
      providers: [{ provide: ContentProviderService, useValue: cps }],
      declarations: [SubHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(cps, 'getContentType').and.returnValue(Promise.resolve({}));
    fixture = TestBed.createComponent(SubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stick the filter component', () => {
    spyOnProperty(window, 'pageYOffset').and.returnValue(415);
    window.dispatchEvent(new Event('scroll'));
    expect(component.touchedCeiling).toBe(true);
  });

  it('should not stick the filter component', () => {
    spyOnProperty(window, 'pageYOffset').and.returnValue(200);
    window.dispatchEvent(new Event('scroll'));
    expect(component.touchedCeiling).toBe(false);
  });

});
