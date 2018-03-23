import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent 
{   
    jugachiDescription = "jugachis description";
    lordmausDescription = "lordmau5s description";
    nicDescription = "nics description"
    buffetDescription = "buffets description";
    konasumiDescription = "konasumis description";
    dqfanDescription = "dqfans description";
    speedyDescription = "speedys description";

    constructor(private dialog: MatDialog) {}

    openSettings(description: string, name: string) 
    {
      let dialogRef:MatDialogRef<DescriptionDialog> = this.dialog.open(DescriptionDialog);
      dialogRef.componentInstance.description = description;
      dialogRef.componentInstance.name = name;
    }
} 


@Component({
  selector: 'description-dialog',
  templateUrl: '../dialogs/staff.description.dialog.html',
  styleUrls: ['../dialogs/staff.description.dialog.css']
})
export class DescriptionDialog 
{
  description: string;
  name: string;
  constructor( @Optional() public dialogRef: MatDialogRef<DescriptionDialog>) { }

  ngOnInit()
  {
    document.getElementById("title").innerHTML = this.name;
    document.getElementById("description").innerHTML = this.description;
  }
} 