import React from 'react';
import './Footer.scss';
import BackgroundFooter from '../../assets/images/footer-bg.jpg';

function Footer(props) {
    const bgFooter = {
        background: `url(${BackgroundFooter})`
    }
    return (
        <footer className="footer" style={bgFooter}>
            <div className="container">
                <p className="footer__heading">Phim chất lượng cao online của <a href="# ">XemPhim</a> khác gì so với các
                    trang phim khác?
                </p>
                <ul className="footer__list">
                    <li className="footer__info">
                        Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các
                        trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất
                    </li>
                    <li className="footer__info">Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim
                    online
                    thông thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân
                    giải)
                    </li>
                    <li className="footer__info">Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác
                    (kể
                        cả Youtube)</li>
                    <li className="footer__info">Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
                    <li className="footer__info">Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng
                        mình để xem online</li>
                    <li className="footer__info">Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng
                        Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim</li>
                    <li className="footer__info">Vì trang web mới được lập ra nên còn nhiều phim chưa được up, chúng tôi
                    đang xử
                        lý 1 số lượng lớn phim & sẽ up dần trong thời gian tới (xem <a href="# ">tất cả phim</a>).</li>
                </ul>
                <span className="footer__contact">
                    <a href="# ">Liên hệ</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;