import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiSevice: UiService) {
    this.subscription = this.uiSevice.onToggle().subscribe(
        value => this.showAddTask = value
      );
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiSevice.toggleAddTask();
  }

}
