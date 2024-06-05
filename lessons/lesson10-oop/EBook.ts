import { BookInfo } from './BookInfo';

export class EBook extends BookInfo {
  private _fileType: string;

  constructor(title: string, author: string, year: number, fileType: string) {
    super(title, author, year);
    this.fileType = fileType;
  }

  get fileType(): string {
    return this._fileType;
  }

  get bookInfo(): {
    title: string;
    author: string;
    year: number;
    fileType: string;
  } {
    return {
      ...super.bookInfo,
      fileType: this._fileType,
    };
  }

  set fileType(value: string) {
    if (value.length > 0) this._fileType = value;
    else throw new Error('File type cannot be empty');
  }

  printInfo(): void {
    super.printInfo();
    console.log(`File type: ${this._fileType}\n`);
  }

  static createEBookFromBook(book: BookInfo, fileType: string): EBook {
    return new EBook(book.title, book.author, book.year, fileType);
  }
}

// const book4 = new EBook('Software Testing: Principles and Practices', 'Srinivasan Desikan, Gopalaswamy Ramesh', 2006, 'pdf');

// book4.printInfo();
