import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  public routeList: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.printpath('', this.router.config);
  }

  // Finds all app and feature routes (supposedly doesn't work for lazy loaded routes)
  // Taken from https://stackoverflow.com/a/45492930/2184266: How to list / output all routes in @Routes in my Angular2 App
  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      this.routeList.push(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }

}
