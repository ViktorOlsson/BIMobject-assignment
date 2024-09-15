import { MaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { DialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
    declarations: [DialogComponent],
    imports: [MaterialModule],
    exports: [MaterialModule, DialogComponent]
})
export class SharedModule {}