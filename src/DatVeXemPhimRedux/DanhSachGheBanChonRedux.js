import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachGheBanChonRedux extends Component {
    render() {
        return (
            <div className="col-4">
                <h3 className='text-info'>DANH SÁCH GHẾ BẠN CHỌN</h3>
                <div className='row my-5' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <div>
                        <button className='gheDuocChon'></button>
                        <span className='text-white' style={{ fontSize: '25px' }}>ghế đã đặt</span>
                    </div>
                    <div>
                        <button className='gheDangChon my-3'></button>
                        <span className='text-white' style={{ fontSize: '25px' }}>ghế đang chọn</span>
                    </div>
                    <div>
                        <button className='ghe' style={{ marginLeft: '0' }}></button>
                        <span className='text-white' style={{ fontSize: '25px' }}>ghế chưa đặt</span>
                    </div>
                </div>
                <table className="table" border='2'>
                    <thead>
                        <tr className='text-white' style={{ fontSize: '20px' }}>
                            <th scope="col">số ghế</th>
                            <th scope="col">giá</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {this.props.dsGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia.toLocaleString()}</td>
                                <td>
                                    <button onClick={() => {
                                        this.props.dispatch({
                                            type: 'HUY_GHE',
                                            soGhe: gheDangDat.soGhe
                                        })

                                    }}>
                                        hủy
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td className='text-info'>Tổng tiền</td>
                            <td className='text-success'>
                                {this.props.dsGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        dsGheDangDat: rootReducer.DatVeXemPhimReducer.dsGheDangDat
    }
}
export default connect(mapStateToProps)(DanhSachGheBanChonRedux)