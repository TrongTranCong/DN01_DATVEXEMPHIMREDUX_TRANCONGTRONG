import React, { Component } from 'react'
import { connect } from 'react-redux';
class ChonChoRedux extends Component {
    renderGhe = () => {
        return this.props.hangGhe_input.danhSachGhe.map((ghe, index) => {
            //trạng thái ghế đã được đặt rồi
            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }
            //xét trạng thái ghế đang đặt
            //gheDangDat là những cái ghế trong tương lai có trong mảng dsGheDangDat
            //soGhe
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.dsGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe===ghe.soGhe);
            if (indexGheDangDat !== -1 ){//ghe đang được render ra mà nằm trong dsGheDangDat 
                cssGheDangDat='gheDangChon';
            }
            return <button onClick={(params) => {
                        {this.props.datGhe(ghe)}
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe_input.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber' key={index}>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe_input === 0) {
            return <div>
                {this.props.hangGhe_input.hang}{this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe_input.hang}{this.renderGhe()}
            </div>
        }
    }

    render() {
        // let { hangGhe_input } = this.props;
        return (
            <div className='text-light text-left ml-5 mt-3 '>
                {/* {this.props.hangGhe_input.hang} */}
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe:(ghe) => {
            dispatch({
                type:'DAT_GHE',
                ghe
            })
        }
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        dsGheDangDat: rootReducer.DatVeXemPhimReducer.dsGheDangDat
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChonChoRedux)