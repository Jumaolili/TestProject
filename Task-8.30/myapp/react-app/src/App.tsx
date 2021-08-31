import React from 'react';
import './App.module.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//引入页面组件
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
        {/* <Nav /> */}
        <div className='container'>
          {/* 根据URL路径匹配路由组件，渲染到该位置 */}
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            {/* <Route path='/addCapsule' component={} /> */}
            {/* 这是一个默认页面，如果前面的路由都没有被匹配到，就会渲染这个组件，相当于404，一定要放到最后 */}
            
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
