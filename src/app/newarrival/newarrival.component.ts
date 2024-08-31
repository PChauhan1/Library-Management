import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newarrival',
  standalone: true,
  imports: [CommonModule],
  
  templateUrl: './newarrival.component.html',
  styleUrl: './newarrival.component.css'
})
export class NewarrivalComponent {

  isOpen = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.getModalState('modal2').subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.close('modal2');
  }

}
