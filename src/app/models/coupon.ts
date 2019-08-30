

export class Coupon {
    private couponId: number;
    private title: string;
    private start_date: string;
    private end_date: string;
    private amount: number;
    private type: couponType;
    private message: string;
    private price: number;
    private image: string;

    constructor(private coupon?: Coupon) {
        if (this.coupon != null) {
            this.couponId = coupon.couponId;
            this.title = coupon.title;
            this.start_date = coupon.start_date;
            this.end_date = coupon.end_date;
            this.amount = coupon.amount;
            this.type = coupon.type;
            this.message = coupon.message;
            this.price = coupon.price;
            this.image = coupon.image;
        }
    }
    public get getcouponId(): number {
        return this.couponId;
    }
    public set setcouponId(couponId: number) {
        this.couponId = this.couponId;
    }
    public get getTitle(): string {
        return this.title;
    }
    public set setTitle(title: string) {
        this.title = title;
    }
    public get getStart_date(): string {
        return this.start_date;
    }
    public set setStart_date(start_date: string) {
        this.start_date = start_date;
    }
    public get getEnd_date(): string {
        return this.end_date;
    }
    public set setEnd_date(end_date: string) {
        this.end_date = end_date;
    }

    public get getAmount(): number {
        return this.amount;
    }
    public set setAmount(amount: number) {
        this.amount = amount;
    }

    public get getType(): couponType {
        return this.type;
    }
    public set setType(type: couponType) {
        this.type = type;
    }

    public get getMessage(): string {
        return this.message;
    }
    public set setMessage(message: string) {
        this.message = message;
    }

    public get getPrice(): number {
        return this.price;
    }
    public set setPrice(price: number) {
        this.price = price;
    }

    public get getImage(): string {
        return this.image;
    }
    public set setImage(image: string) {
        this.image = image;
    }

}


    