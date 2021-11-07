import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ChonChoRedux from './ChonChoRedux';
import DanhSachGheBanChonRedux from './DanhSachGheBanChonRedux';
import danhSachGhe from '../data/danhSachGhe.json'
export default class DatVeXemPhimRedux extends Component {
    renderChonCho = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <div key={index}>
                <ChonChoRedux hangGhe_input={hangGhe} soHangGhe_input={index} />
            </div>
        })


    }

    render() {
        return (
            <div className='bg-ticket'>
                <div className='bg-overlay'></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <h3 className='text-warning text-center'>ĐẶT VÉ XEM PHIM ARENA</h3>
                            <div className='screen text-center'>Màn hình</div>
                            {this.renderChonCho()}
                        </div>
                        <DanhSachGheBanChonRedux />
                    </div>
                </div>

            </div>
        )
    }
}
