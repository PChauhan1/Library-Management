import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModalService } from '../modal.service';
import { NewarrivalComponent } from '../newarrival/newarrival.component';
import { AnnoucemnetmodalComponent } from '../annoucemnetmodal/annoucemnetmodal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,NewarrivalComponent,AnnoucemnetmodalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  
  modal1Open = false;
  modal2Open = false;

  constructor(private modalService: ModalService) {}

  openModal(modalType: string) {
    if (modalType === 'Modal1') {
      this.modalService.open('modal1');
      this.modal2Open = false; // Ensure only one modal is open at a time
    } else if (modalType === 'Modal2') {
      this.modalService.open('modal2');
      this.modal1Open = false; // Ensure only one modal is open at a time
    }
  }

  ngOnInit() {
    this.modalService.getModalState('modal1').subscribe(isOpen => {
      this.modal1Open = isOpen;
    });

    this.modalService.getModalState('modal2').subscribe(isOpen => {
      this.modal2Open = isOpen;
    });
  }
}

