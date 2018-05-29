import { Component } from '@angular/core';

@Component({
  selector: 'events-component',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent 
{
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