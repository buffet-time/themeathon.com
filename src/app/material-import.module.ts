import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
	MatDialogModule,
	MatInputModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSnackBarModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSnackBarModule
    ]
})
export class MaterialImportModule {}