import { Component, EventEmitter, input, Input, output, Output} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// interface User{
//     id: string;
//     name: string;
//     avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
  
export class UserComponent {
//using signal
  //on doit utiliser la fonction input
  // avatar = input.required<string>()
  
  @Input({ required: true }) user!: User

  // user = input.required<string>()
  @Input ({required:true}) selected!:boolean
  @Output() select = new EventEmitter<string>()

  //  show = output<string>() 

  //quand on implemente  le input function  on doit pas utiliser le get pour les methodes on peut faire

  // imagePath = computed(()=>{
  //  return "assets/users/" + this.user.avatar
//    })


  get imagePath() {
   return "assets/users/" + this.user.avatar
  }

  onSelectUser() {
   this.select.emit(this.user.id)
  }
  

  
}
