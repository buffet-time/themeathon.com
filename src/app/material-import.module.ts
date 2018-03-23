import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class MaterialImportModule {
}