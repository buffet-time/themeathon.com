import { Component } from '@angular/core';

@Component({
  selector: 'stream-component',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent 
{   
    scheduleOnLoad()
    {
      var iframe = document.getElementById("twitch-frame"); // working
      var element = iframe.getElementsByTagName("NAV"); // not getting shit hecc
      // trying to remove the <nav><nav/> and <footer><footer/>
      console.log(iframe);
      console.log(element);
    }
}