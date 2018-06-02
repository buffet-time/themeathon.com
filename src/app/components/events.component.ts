import { Component, Optional } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatDialogRef, MatDialog } from '@angular/material';


@Component({
  selector: 'events-component',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent 
{
	constructor(public snackBar: MatSnackBar, private dialog: MatDialog) {}

	displayName = '';
	discordName = '';
	subject = '';
	body = '';

	submit() 
	{
		if ( this.displayName && this.discordName && this.subject &&  this.body)
		{
			if ( this.displayName.length < 31 && this.discordName.length < 31 && this.subject.length < 51 && this.body.length < 1001) 
			{
				console.log("good");
				this.dialog.open(EventsConfirmationDialog);
			}
			else 
			{
				this.openSnackBar("The length of one or more of the inputs were too large.");
			}
		}
		else
		{
			this.openSnackBar("Every box is required to submit.");
		}
	}

	// binds the value of the textarea to the variable body upon every key press.
	textAreaUpdate()
	{
		this.body = (<HTMLInputElement>document.getElementById("messageBodyTextArea")).value;
	}

	openSnackBar( message ) 
	{
		const config = this.createConfig();
		this.snackBar.open(message, "", config);
	}

	createConfig()
	{
		const config = new MatSnackBarConfig();
		config.duration = 3500;
		return config;
	}
}


@Component({
    templateUrl: '../dialogs/events.confirmation.dialog.html',
    styleUrls: ['../dialogs/events.confirmation.dialog.css']
})
export class EventsConfirmationDialog 
{
	constructor(@Optional() public dialogRef: MatDialogRef<EventsConfirmationDialog>){}
}