import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatDialogModule
    ]
})
export class MaterialImportModule {
}