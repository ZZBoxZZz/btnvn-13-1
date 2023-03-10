import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSinhVien extends Component {




    renderSinhVien =() => {
        const {mangSinhVien} = this.props;
        return mangSinhVien.map((sinhVien,index)=>{
            return(
                <tr key={index}>
                    <td>
                        {sinhVien.maSV}
                    </td>
                    <td>
                        {sinhVien.hoTen}
                    </td>
                    <td>
                        {sinhVien.soDienThoai}
                    </td>
                    <td>
                        {sinhVien.email}
                    </td>
                </tr>
            )
        })
    }

  render() {
    console.log(this.props.mangSinhVien)
    return (
      <div className='container'>
        <table className="table">
            <thead>
                <tr className='bg-dark text-white'>
                    <th>Ma Sv</th>
                    <th>Ho va Ten</th>
                    <th>SDT</th>
                    <th>Email</th>         
                </tr>
                {this.renderSinhVien()}
            </thead>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps,null)(TableSinhVien)