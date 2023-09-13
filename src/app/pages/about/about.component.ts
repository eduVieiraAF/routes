import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
    ) {

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params['id'], params['username'], params);
    })

    this.activeRoute.queryParams.subscribe((params) => {
      console.log(params);
    })

    // setInterval(() => {
    //   this.router.navigate(['404']);
    // }, 5000)
  }
}
