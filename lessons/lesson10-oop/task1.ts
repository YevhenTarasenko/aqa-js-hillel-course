import { BookInfo } from "./BookInfo";
import { EBook } from "./EBook";

const books: (BookInfo | EBook)[] = [
    new BookInfo("Book Title 1", "Author 1", 2000),
    new BookInfo("Book Title 2", "Author 2", 1990),
    new EBook("EBook Title 1", "Author 3", 1985, "pdf"),
    new EBook("EBook Title 2", "Author 4", 2005, "epub")
];

const oldestBook = BookInfo.returnTheOldestBook(books);
console.log("Oldest Book:", oldestBook);

const book = new BookInfo("Тестова книга", "Тестовий автор", 2024);
const ebook = EBook.createEBookFromBook(book, "pdf");
ebook.printInfo();