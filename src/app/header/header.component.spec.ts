import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';
import { ContentProviderService } from 'app/services/content-provider.service';
import { Header } from 'app/header/Header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cps: Partial<ContentProviderService>;

  beforeEach(async(() => {
    cps = new ContentProviderService();
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [NgbModule.forRoot()],
      providers: [{ provide: ContentProviderService, useValue: cps }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load content', fakeAsync(() => {
    const contentType = {
      title: '', primary_link: [{ title: '', link: {} }], login_submenu: [{ title: '', link: {} }]
    };
    spyOn(cps, 'getContentType').and.returnValue(Promise.resolve([contentType]));
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    const header = new Header(contentType);
    expect(component.headerModel).toEqual(header);
  }));
  });

