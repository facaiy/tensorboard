/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State, getActivePlugin} from './core/core.reducers';
import {changePlugin} from './core/core.actions';
import {PluginId} from './types/api';

@Component({
  selector: 'tf-ng-tensorboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    // TODO(stephanwlee): Instead of hardcoding it, consider reading it off of the
    // tf_dashboard.registry. It is current infeasible unless Angular source is also
    // compiled with JSCompiler.
    this.store.dispatch(changePlugin({plugin: 'Core'}));
  }
}
