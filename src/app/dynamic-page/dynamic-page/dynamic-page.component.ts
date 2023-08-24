import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TaskDirective } from 'src/directives/task.directive';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent implements OnInit {
  @Input() tasks: TaskComponent[] = [];

  @ViewChild('inputText') input!: ElementRef;

  @ViewChild(TaskDirective, {static: true}) taskContent!: TaskDirective;

  ngOnInit(): void {
    this.loadComponent();
  }

  // @see https://angular.io/guide/dynamic-component-loader
  loadComponent()
  {
    if (this.taskContent != null)
      this.taskContent.viewRef.clear();
    // We can use any component that's zero or don't have any view as the type<> -> createComponent
    let inst = this.taskContent.viewRef.createComponent<TaskComponent>(TaskComponent);
    // The 2nd parameter should be the type of class we can to create, so... it will be the real component that will be rendered!
    // Then we can get the instance
    let task = inst.instance;
    // Then fill the data that needed!
    // @see https://angular.io/generated/live-examples/dynamic-component-loader/stackblitz.html
    task.taskName = "abc";
    task.finished = true;
    console.log(inst.instance.taskName);
  }

  public btnAlert()
  {
    let input = this.input.nativeElement as HTMLInputElement;

    alert(input.value);
  }
}
