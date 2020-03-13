class Box {
	//static properties and methods
	private static counter: number = 0;
	public static collection: Box[] = [];

	//class properties
	public value: number;
	public div: JQuery<HTMLDivElement>;

	constructor() {
		this.value = Box.counter;
		this.div = $(`<div class="box shadow-lg">${this.value}</div>`);
		this.render();
		Box.collection.push(this);
		Box.counter++;
		this.changeBGColor();
	}

	private render(): void {
		$<HTMLDivElement>('#box-container').append(this.div);
	}

	public changeBGColor(): void {
		this.div.css('background-color', this.generateRandoColor());
	}

	private generateRandoColor(): string {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = Math.random();
		return `rgba(${r}, ${g}, ${b}, ${a})`;
	}
}

$<HTMLButtonElement>('#add-box').click(() => new Box());
$<HTMLButtonElement>('#mixup').click(() => Box.collection.forEach(box => box.changeBGColor()));