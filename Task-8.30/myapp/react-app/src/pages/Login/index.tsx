import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.less';

import NormalLoginForm from '../../components/Form_Login'

function Login() {
  
  return (
    <div className={style.container_form_login}>
        <img alt="知乎 LOGO" className={style.SignFlowHomepage_logo} src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"/>
        <div className={style.container_form_login_item}>
          <NormalLoginForm/>
        </div>
        <footer className="SignFlowHomepage-footer">
            <div className="ZhihuLinks">
              <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com">知乎专栏</a>
              <a target="_blank" rel="noopener noreferrer" href="/roundtable">圆桌</a>
              <a target="_blank" rel="noopener noreferrer" href="/explore">发现</a>
              <a target="_blank" rel="noopener noreferrer" href="/app">移动应用</a>
              <a target="_blank" rel="noopener noreferrer" href="/contact">联系我们</a>
              <a target="_blank" rel="noopener noreferrer" href="https://app.mokahr.com/apply/zhihu">来知乎工作</a>
              <a target="_blank" rel="noopener noreferrer" href="/org/signup">注册机构号</a>
              <a target="_blank" rel="noopener noreferrer" href="//ir.zhihu.com">Investor Relations</a>
            </div>
            <div className="ZhihuRights">
              <span>© 2021 知乎</span>
              <a target="_blank" rel="noopener noreferrer" href="https://tsm.miit.gov.cn/dxxzsp/">京 ICP 证 110745 号</a>
              <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/">京 ICP 备 13052560 号 - 1</a>
              <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
                <img alt="" src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"/>京公网安备 11010802020088 号
              </a>
              <a href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank" rel="noopener noreferrer">出版物经营许可证</a>
              <span>互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</span>
            </div>
            <div className="ZhihuReports">
              <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/28852607">侵权举报</a>
              <a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn">网上有害信息举报专区</a>
              <a target="_blank" rel="noopener noreferrer" href="/term/child-jubao">儿童色情信息举报专区</a>
              <span>违法和不良信息举报：010-82716601</span>
            </div>
          </footer>
    </div>
  );   
}

export default Login;