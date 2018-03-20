import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialImportModule {
}