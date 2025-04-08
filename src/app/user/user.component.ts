import { Component, EventEmitter, Input, Output} from '@angular/core';

import { User } from './user.model';

// interface User{
//     id: string;
//     name: string;
//     avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
  
export class UserComponent {
//using signal
  //on doit utiliser la fonction input
  // avatar = input.required<string>()
  
  @Input({ required: true }) user!: User
  @Input ({required:true}) selected!:boolean
  @Output() select = new EventEmitter<string>()

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
