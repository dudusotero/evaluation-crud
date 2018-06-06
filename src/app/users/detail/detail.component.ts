import { UsersService } from './../users.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  form: FormGroup;
  isEdit: boolean;
  roles: any[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute
  ) {

    this.roles = [
      { id: 'ADMIN', name: 'Admin' },
      { id: 'NORMAL', name: 'Normal user' }
    ];

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.service.getById(params.id).subscribe((res: any) => {
          this.isEdit = true;
          Object.keys(res.data).forEach((i) => {
            if (i !== 'id' && this.form.controls[i]) {
              this.form.controls[i].setValue(res.data[i]);
            }
          });
        });
      }
    });

  }

  goBack() {
    this.router.navigate(['/app/users']);
  }

  cancel() {
    this.goBack();
  }

  save(form: FormGroup) {
    this.route.params.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.service.edit(params.id, form.value).subscribe(() => {
          this.goBack();
        });
      } else {
        this.service.add(form.value).subscribe(() => {
          this.goBack();
        });
      }
    });
  }

}
