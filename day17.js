// let hocSinh1 = {
//     chaoHoi: function () {
//         console.log("tui ten la " + this.ten + ", tui la " + this.gioiTinh);
//     },
//     thayDoiGioiTinh: function(gioiTinhMoi) {
//         this.gioiTinh = gioiTinhMoi;
//     },
//     thayDoi: function(maSoMoi, gioiTinhMoi, tenMoi) {
//         this.maSo = maSoMoi;
//         this.gioiTinh = gioiTinhMoi;
//         this.ten = tenMoi;
//     }
// };

// hocSinh1.thayDoi(25, "nam", "Long");
// hocSinh1.chaoHoi();

// let hocSinh2 = {
//     chaoHoi: function () {
//         console.log("tui ten la " + this.ten + ", tui la " + this.gioiTinh);
//     },
//     thayDoiGioiTinh: function(gioiTinhMoi) {
//         this.gioiTinh = gioiTinhMoi;
//     },
//     thayDoi: function(maSoMoi, gioiTinhMoi, tenMoi) {
//         this.maSo = maSoMoi;
//         this.gioiTinh = gioiTinhMoi;
//         this.ten = tenMoi;
//     }
// };
// hocSinh2.thayDoi(201, "flexible", "EIN");
// hocSinh2.chaoHoi();

class HocSinh {
    chaoHoi() {
        console.log("tui ten la " + this.ten + ", tui la " + this.gioiTinh);
    }
    thayDoiGioiTinh(gioiTinhMoi) {
        this.gioiTinh = gioiTinhMoi;
    }
    constructor(maSoMoi, gioiTinhMoi, tenMoi) {
        console.log("ham o tren cua HocSinh");
        this.maSo = maSoMoi;
        this.gioiTinh = gioiTinhMoi;
        this.ten = tenMoi;
    }
}

class SinhVien extends HocSinh {
    chaoHoi() {
        console.log("tui ten la " + this.ten + ", tui no", this.soMonNo);
    }
    thayDoiGioiTinh(gioiTinhMoi) {
        this.gioiTinh = gioiTinhMoi;
    }
    constructor(maSoMoi, gioiTinhMoi, tenMoi, soMonNoMoi) {
        console.log("ham constructor cua SinhVien");
        super(maSoMoi, gioiTinhMoi, tenMoi);
        this.soMonNo = soMonNoMoi;
    }
}

let sinhVien1 = new SinhVien(10, "flexible", "Hoang Tu Co Don", 11);
sinhVien1.chaoHoi();

class HocSinhKhac {
    gioiTinh;
    chaoHoi() {
        console.log("tui co gioi tinh la ", this.gioiTinh);
        console.log("tui ten la " + this.ten + ", tui la " + this.gioiTinh);
    }
    thayDoiGioiTinh(gioiTinhMoi) {
        this.gioiTinh = gioiTinhMoi;
    }
    constructor(gioiTinhMoi, tenMoi) {
        console.log("ham khac co gioi tinh " + this.gioiTinh);
        this.gioiTinh = gioiTinhMoi;
        this.ten = tenMoi;
    }
}

// let hocSinh1 = new HocSinh(25, "nam", "Long");
// hocSinh1 = new HocSinhKhac("nam", "Long khac");
// hocSinh1.chaoHoi();

// let hocSinh2 = new HocSinh(213, "nam", "Khoa");
// hocSinh2.chaoHoi();

// function chaoHoi(hocSinh) {
//     console.log("tui ten la " + hocSinh.ten + ", tui la " + hocSinh.gioiTinh);
// }

// chaoHoi(hocSinh2);

let laptop1 = {
    hang: "CASIO",
    cauHinh: "i999"
};

let laptop2 = {
    hang: "NOKIA",
    cauHinh: "NVDIA-1945"
};

// function chaoHang(laptop) {
//     console.log("day la may", laptop.hang, "thong so la", laptop.cauHinh);
// }

// chaoHang(hocSinh1);
// chaoHoi(laptop1);