import React from 'react'

// 导入路由组件：router，route，link
// pages中创建home/index.js和citylist/index.js
// 使用route组件配置首页和城市选择页面
import{BrowserRouter as Router,Route} from 'react-router-dom'
// 导入首页和城市选择两个组件
import Home from './pages/Home'
import CityList from './pages/CityList'





function App() {
  return (
   <Router>
      <div className="App">
    
     
     {/* 路由配置 */}
     <Route path='/home' component={Home}></Route>
     <Route path='/citylist' component={CityList}></Route>
     <Route exact path='/'  component={Home}></Route>
     </div>
   </Router>
  );
}

export default App;
