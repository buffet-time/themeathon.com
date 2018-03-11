import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule
    ]
})
export class MaterialImportModule {
}