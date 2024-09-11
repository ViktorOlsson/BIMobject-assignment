import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const angularMaterialModules = [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
];

@NgModule({
    declarations: [],
    imports: [],
    exports: [...angularMaterialModules]
})
export class MaterialModule {}