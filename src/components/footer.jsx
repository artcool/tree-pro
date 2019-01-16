import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Hideen from '@material-ui/core/Hidden';
// import PropTypes from 'prop-types'
import RQImg from '../assets/images/201703031157165716.jpg'
import CS from '../assets/style/common.styl'
import callUs from '../pages/callus/titleData'
const links = [
  { name: '网站地图', link: '' },
  { name: '法律申明', link: '' },
  { name: '站长统计', link: '' },
  { name: '友情链接', link: '' }
];
const linksItmes = links.map((o, index) => {
  return (
    <li key={index}><a href={o.link}>{o.name}</a></li>
  )
});
const footerHeaders = Object.keys(callUs).map((key,index) => {
  const ddItems = callUs[key].map((o,k) => {
    return (
      <dd key={k}><a href={o.link}>{o.name}</a></dd>
    );
  });
  return (
    <li key={index}>
      <dl>
        <dt>{key}</dt>
        {ddItems}
      </dl>
    </li>
  );
});
class Footer extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="footer-container">
        <Hideen smDown>
          <ul styleName="footer-header">{footerHeaders}</ul>
          <div styleName='footer-body'>
            <ul>{linksItmes}</ul>
            <div styleName='QR-box'>
              <p>扫一扫<br />关注我们了解最新资讯</p>
              <img src={RQImg} alt="二维码" />
            </div>
            <p>Copyright © 2017 深圳市四季青园林股份有限公司 All Rights Reserved. Designed by Wanhu</p>
          </div>
        </Hideen>
        <Hideen mdUp>
          <div styleName='footer-body mobile'>
            <ul>{linksItmes}</ul>
            <p>Copyright © 2017 深圳市四季青园林股份有限公司 All Rights Reserved. Designed by Wanhu</p>
            <img src={RQImg} alt="二维码" />
          </div>
        </Hideen>
      </div>
    );
  }
}
export default CSSModules(Footer, CS, { "allowMultiple": true });