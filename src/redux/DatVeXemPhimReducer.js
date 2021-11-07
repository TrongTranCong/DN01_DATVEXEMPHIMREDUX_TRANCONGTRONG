
const stateDefault = {
    dsGheDangDat: [

    ]
}

export const DatVeXemPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let dsGheDangDatUpdate = [...state.dsGheDangDat];
            let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {//khi user click vào ghế đang đặt đã có trong mảng  =>remove đi
                dsGheDangDatUpdate.splice(index, 1);
            } else {//khi user click vào ghế chưa có trong mảng => push trong mảng
                dsGheDangDatUpdate.push(action.ghe)
            }
            //cập nhật lại state => render lại UI
            state.dsGheDangDat = dsGheDangDatUpdate;
            return { ...state };
        }
        case 'HUY_GHE':{
            let dsGheDangDatUpdate = [...state.dsGheDangDat];
            let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {//khi user click vào ghế đang đặt đã có trong mảng  =>remove đi
                dsGheDangDatUpdate.splice(index, 1);
            } else {//khi user click vào ghế chưa có trong mảng => push trong mảng
                dsGheDangDatUpdate.push(action.ghe)
            }
            //cập nhật lại state => render lại UI
            state.dsGheDangDat = dsGheDangDatUpdate;
            return{...state}
        }
        default:
            return { ...state };
    }
}