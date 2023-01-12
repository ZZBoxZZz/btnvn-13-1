const stateDefault = {
    mangSinhVien: [{maSV:1, hoTen:'nguyen cong trd', soDienThoai:'09972397320', email:'dwa@gmail.com'}]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) =>{

    switch(action.type){
        case 'THEM_SINH_VIEN':{
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return {...state}
            
        };break;
        default:{
            return {...state}
        }
    }
    
}