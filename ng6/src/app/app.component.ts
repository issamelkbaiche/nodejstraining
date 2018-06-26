/*ici on importe le composant et apres on definit le component decorator sous peu*/

import { Component } from '@angular/core';
/**voilà le component decorator */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /**specifie l'emplacement de l'html du composant */
  styleUrls: ['./app.component.scss']
  /**specifie l'emplacement du style du component */
})

/**this is all about the logic of the app, this is where all the properties go, define custom methods an
 * functions
 */
export class AppComponent {
  title = 'app';
}


/**let's create or generate our own component with cli, back to the cmd, ng generate component NAME */