import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

const angularMaterialModules = [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatListModule
];

@NgModule({
    declarations: [],
    imports: [],
    exports: [angularMaterialModules]
})
export class MaterialModule {}