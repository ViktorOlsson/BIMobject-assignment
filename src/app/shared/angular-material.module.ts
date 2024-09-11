import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const angularMaterialModules = [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
];

@NgModule({
    declarations: [],
    imports: [],
    exports: [...angularMaterialModules]
})
export class MaterialModule {}