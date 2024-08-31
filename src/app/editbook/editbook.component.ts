import { Component ,Output,EventEmitter,Input} from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

interface Book {
  id:number;
  title: string;
  author: string;
  publication_year: number;
  image_url:string;
  price:number;
  rating:number;
}

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.css'
})
export class EditbookComponent {
  books: Book[] = [];
  selectedBook: Book | null = null; // For editing

  @Input() book: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  onSave() {
    this.save.emit(this.book);
  }

  onClose() {
    this.close.emit();
  }

  

}
