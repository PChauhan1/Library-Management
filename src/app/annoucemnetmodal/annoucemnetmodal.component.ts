import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annoucemnetmodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annoucemnetmodal.component.html',
  styleUrl: './annoucemnetmodal.component.css'
})
export class AnnoucemnetmodalComponent {
 
  isOpen = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.getModalState('modal1').subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.close('modal1');
  }

}


