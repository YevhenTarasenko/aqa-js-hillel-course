export class BookInfo {
	
	private _title: string;
	private _author: string;
	private _year: number;

	constructor(title: string, author: string, year: number) {
		this.title = title;
		this.author = author;
		this.year = year;
	};

	get title(): string {
		return this._title;
	};

	get author(): string {
		return this._author;
	};

	get year(): number {
		return this._year;
	};

	get bookInfo(): { title: string, author: string, year: number } {
		return {
			title: this._title,
			author: this._author,
		    year: this._year
		}
	}

	set title(value: string) {
		if (value.length > 0) this._title = value;
		else throw new Error("Title cannot be empty"); 
	};

	set author(value: string) {
		if (value.length > 0) this._author = value;
		else throw new Error("Author cannot be empty"); 
	};

	set year(value: number) {
		if (value > 0) this._year = value;
		else throw new Error("Year must be a positive number"); 
	};

	printInfo(): void {
		console.log(`Book info: \nTitle - ${this._title}, \nAuthor - ${this._author}, \nYear - ${this._year}\n`)
	};

	static returnTheOldestBook (books: BookInfo[]): BookInfo {
        if (books.length === 0) {
            throw new Error("The array of books is empty");
        }

        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
	}
	
};

const book1 = new BookInfo("Software Testing: Principles and Practices", "Srinivasan Desikan, Gopalaswamy Ramesh", 2006);
const book2 = new BookInfo("Lessons Learned in Software Testing", "Cem Kaner, James Bach, Bret Pettichord", 2002);
const book3 = new BookInfo("Exploratory Software Testing: Tips, Tricks, Tours, and Techniques to Guide Test Design", "James A. Whittaker", 2009);

book1.printInfo();
book2.printInfo();
book3.printInfo();