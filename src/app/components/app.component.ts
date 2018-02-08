import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    constructor(private dialog: MatDialog) {}
    
    openSubmitDialog() {
      const dialogRef = this.dialog.open(DialogContentComponent);
    }

    navigateToDiscord() 
    {
      window.open("https://discordapp.com/invite/wd5GwXK");
    }
    
    navigateToTwitch() 
    {
      window.open("https://www.twitch.tv/Themeathon");
    }
    
    navigateToTwitter() 
    {
      window.open("https://twitter.com/Themeathon");
    }

    navigateToYoutube() 
    {
      window.open("https://www.youtube.com/channel/UCoeWJ8x6jM_tN5AnBqLzQfg");
    }
}


@Component({
  selector: 'submit-dialog',
  templateUrl: '../dialogs/submit.dialog.html',
  styleUrls: ['../dialogs/submit.dialog.css']
})
export class DialogContentComponent 
{
  constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>) { }

  navigateToSubmission()
  {
    window.open("https://submit.themeathon.com/");
  }
} 
