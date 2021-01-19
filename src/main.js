import * as preact from 'preact';
import Calender from './Calender';


document.addEventListener('DOMContentLoaded', function() {
    preact.render(
        preact.createElement(Calender),
      document.getElementById('calender-container')
    );
  });


  