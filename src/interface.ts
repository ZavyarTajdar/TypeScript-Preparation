interface user {
    name: string;
    age: number;
    readonly dbId: number
    isAdmin: boolean;
    googleId?: string;
    // starttrial?: () => string;
    starttrial?(): string;
    getCoupon?(couponname: string, value: number): number
}

interface user {
    githubToken: string
}

interface Admin extends user {
    role: "admin" | "ta" | "learner"
}

const user1: Admin = {
    name: "Alice",
    age: 30,
    dbId: 12345,
    isAdmin: true,
    githubToken: "ghp_ABC1234567890",
    role: "admin",
    getCoupon(couponname: "zara", value: 10) {
        return 10;
    }
    
};

export {}