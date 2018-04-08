import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule
    ]
})
export class MaterialImportModule {}