import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrls: ['expansion-expand-collapse-all-example.css'],
})
export class ExpansionExpandCollapseAllExample {
  @ViewChild(MatAccordion) accordion: MatAccordion;
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */