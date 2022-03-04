import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';




 



const materialComponents = [
                                MatButtonModule,
                                MatButtonToggleModule,
                                MatToolbarModule,
                                MatSidenavModule,
                                MatIconModule,
                                MatMenuModule,
                                MatListModule

];
@NgModule({
 
  imports: [materialComponents ],
  exports: [materialComponents
  ]
})
export class MaterialModule { }
