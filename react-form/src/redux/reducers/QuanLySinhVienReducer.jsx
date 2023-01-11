const stateDefault = {
    mangSinhVien: [{maSV:1, hoTen:'nguyen cong trd', soDienThoai:'09972397320', email:'dwa@gmail.com'}]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) =>{
    return {...state}
}