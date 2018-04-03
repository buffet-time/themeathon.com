import {Component, Optional} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'stream-component',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent {
    jugachiDescription = 'Jugachi Description';

    lordmausDescription = 'Themeathon is something I do want to invest a lot of time in as I personally see a bright future in it.' +
        "As for what I helped out with: Mostly things in the background that the viewer won't really notice that much.";

    nicDescription = "I'm Nic, one of the front end developers for Themeathon," +
        'and the thing I appreciate most about themeathon is that it shows that people' +
        'can accomplish great things with the right amount of effort!';

    buffetDescription = "I'm Buffet Time, I'm one of the Website developers so I made what you\'re using right now lol," +
        "I'm very big fan of the non copy paste feel of Themeathon and also the great charity.";

    konasumiDescription = "I've been participating in Themeathon since their first online event," +
        "and now I'm working on the moderation team.";

    dqfanDescription = "Hello, my name is Felix, also known as Alveo or dqfan. I'm in the Themeathon team since the very beginning." +
        'My work includes mostly moderation of twitch chat and discord, but I also set up the runners during the events,' +
        'help with the scheduling and several other tasks. I think Themeathon is a great way for smaller Runners to' +
        'have the opportunity to run their favorite game on a marathon while also benefiting charity.' +
        'You should definitely check us out and donate! wink wink nudge nudge';

    speedyDescription = 'I am the main editor of Themeathon, meaning I am responsible for handling all the YouTube videos and making sure' +
        'everything is correct. I also help moderating the Twitch channel and Discord server.' +
        "Themeathon is a very unique marathon and I haven't seen anything like it, it really is something special!";

	foxDescription = 'Good day ladies and gentlemen and that colorful rainbow in between, my name is Luka “Fox van Black” Wilde, but people usually call me Fox.' +
		'I am one of the hosts for Themathon, and head of the twitch mod team.' +
		'My duties are entertaining the viewers between runs and leading the twitch mod team which will uphold order in the chat, I am also the' +
		'lovable asshole of the team roasting everyone when the situation is right, or they just don’t deserve it any other way.' +
		'I hope to see you all during the marathon and wish you a good remaining day.' +
		'This is Fox signing out.'

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

    constructor(@Optional() public dialogRef: MatDialogRef<DescriptionDialog>) {}

	ngOnInit() 
	{
        document.getElementById('title').innerHTML = this.name;
        document.getElementById('description').innerHTML = this.description;
    }
}