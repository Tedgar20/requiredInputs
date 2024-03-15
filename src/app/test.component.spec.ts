import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let fixture: ComponentFixture<TestComponent>
  let component: TestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.componentRef.setInput('name', 'edgar')
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // This test "passes" but still throws the error
  it('should contain a name', () => {
    expect(component.name()).toEqual('edgar');
  });
  //This test fails
  it('should update the count to 1', () => {
    expect(component.count()).toEqual(1);
  });
});


@Component({
  selector: 'parent',
  standalone: true,
  imports: [TestComponent],
  template: `
    <app-test [name]="name"></app-test>
  `
})
class ParentComponent {
  name = 'edgar';
}
describe('TestComponent', () => {
  let fixture: ComponentFixture<ParentComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, ParentComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ParentComponent);
  });

  // This test fails
  it('should update the childs name', () => {
    const testComponent = fixture.debugElement.query(By.directive(TestComponent)).componentInstance;
    expect(testComponent.name()).toEqual('edgar');
  });
});

