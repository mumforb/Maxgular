import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  // this is only necessary for the ondestroy method - it's imported from rxjs as a helpful addon
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // load the user from the URL
    // .snapshot is good for initial init, but not changing data once its been loaded
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // subscribe, takes 3 arguments
    // this is only necessary if you might be reloading data in the same route/component view
    // two and three are optional and who cares what they are
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  // this is optional, but useful for illustration
  // this whole rxjs Subscription apparatus and such, i mean
  // when i say not necessary
  // tslint:disable-next-line:one-line
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}
