
import { Route, Routes, Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Index from './pages/index';
import Home from './pages/layouts/home';
import Contact from './pages/layouts/contact';
import Introduce from './pages/layouts/introduce';
import Huongdandatve from './pages/layouts/huongdandatve';
import Thuexe from './pages/layouts/thuexe';

import CompletlyPayment from './pages/layouts/completlyPayment';
import Recruitment from './pages/layouts/recruitment';
import Posts from './pages/layouts/posts';
import RoutersBus from './pages/layouts/routersBus';
import RoutersBusSingle from './pages/layouts/routersBusSingle';
import PaymentSingle from './pages/layouts/paymentSingle';
import Payment from './pages/layouts/payment';
import BookTicketPage from './pages/layouts/bookTicketPage';
import BookTicketPageSingle from './pages/layouts/bookTicketPageSingle';
import ChairChoose from './pages/layouts/chair';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import LoginGG from './componets/auth/loginGG';

import ChangePassword from './pages/auth/changePassword';
import ForgotPassword from './pages/auth/forgotPassword';
import ResetPassword from './pages/auth/resetPassword';
import PostDetail from './pages/layouts/postDetail';
import Test from './pages/layouts/test';

// import Slideshows from './componets/home/slide';
// import Indexs from './pages/layouts/auth';

function App() {

  return (
    <>
    
    <Routes>
      <Route element={<Index/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/gioithieu' element={<Introduce/>}/>
          <Route path='/tuyendung' element={<Recruitment/>}/>
          <Route path='/tintuc' element={<Posts/>}/>
          <Route path='/thuexe' element={<Thuexe/>}/>
          <Route path='/lienhe' element={<Contact/>}/>
          <Route path='/test' element={<Test/>}/>

          <Route path='/lichtrinh' element={<RoutersBus/>}/>

          <Route path='/lichtrinh1chieu' element={<RoutersBusSingle/>}/>
          <Route path='/test' element={<ChairChoose/>}/>
 
          <Route path='/tinchitiet' element={<PostDetail/>}/>
          <Route path='/datve1chieu' element={<BookTicketPageSingle/>}/>
          <Route path='/datve' element={<BookTicketPage/>}/>
          <Route path='/thanhtoan1chieu' element={<PaymentSingle/>}/>
          <Route path='/thanhtoan' element={<Payment/>}/>
          <Route path='/dathanhtoan' element={<CompletlyPayment/>}/>

          {/* <Route path='/slide' element={<Slideshows/>}/> */}
        



          <Route path='/huongdandatve' element={<Huongdandatve/>}/>


          <Route path='/user/change_password' element={<ChangePassword/>}/>

          {/* <Route path='/callback' element={<Navigate to="/" />} /> */}
      </Route>
      
      <Route path='/login' element={<Signin/>}/>
      {/* <Route path='/logins' element={<Indexs/>}/> */}

      <Route path='/signup' element={<Signup/>}/>
      <Route exact path="/auth/google" element={<LoginGG/>} />
      <Route exact path="/forgot_password" element={<ForgotPassword/>} />
      <Route exact path="/reset_password" element={<ResetPassword/>} />

      {/* <Route exact path="/testlogin"    element={<Testlogin/>}/> */}

    </Routes>
    
    </>
  );
}

export default App;
 