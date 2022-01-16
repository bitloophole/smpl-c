import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelfAssessmentDashboardComponent } from "./self-assessment-dashboard.component";

describe("UserRegisterComponent", () => {
  let component: SelfAssessmentDashboardComponent;
  let fixture: ComponentFixture<SelfAssessmentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelfAssessmentDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAssessmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
