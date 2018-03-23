import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  // activatedroute is another custom method from the router service
  // it keeps metainformation about the route you're on
  // probably good for accessing bits of information you're carrying around in the URL
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this makes the path relative to wherever you are now
    // this would be useful for nested areas and the like
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
