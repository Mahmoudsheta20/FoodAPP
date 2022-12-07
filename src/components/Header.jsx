import React,{useState} from "react";
import { avatar, logo } from "../assets";
import { IoBasket,IoAddOutline,IoLogIn,IoArrowDownCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import {useStateValue} from "../context/StateProvider"
import {actionType} from "../context/reducer"
const Header = () => {

  const [{user}, dispatch] = useStateValue()
console.log(user)
const [isMenu, setisMenu] = useState(false);
  const Auth = getAuth(app);

  const provider = new GoogleAuthProvider();
const login = async ()=>{
if(!user){
  try{
    const {user: {refreshToken ,providerData} }  = await signInWithPopup(Auth,provider)
dispatch({
  type:actionType.SET_USER,
  user: providerData[0]
})
localStorage.setItem('user',JSON.stringify(providerData[0]))

  }catch(err){
    console.log(err)
  }

}


}

const logOut = ()=>{
  setisMenu(false)
  localStorage.clear()
  dispatch({
    type:actionType.SET_USER,
    user:null
  })
}


  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Food</p>
        </Link>

        <div className="flex item-center gap-8"> 
          <motion.ul 
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:200}}
          className="flex items-center gap-8 ">
            <li className="hover:text-headingColor duration-100 text-base cursor-pointer text-textColor">
              Home
            </li>
            <li className="hover:text-headingColor duration-100 text-base cursor-pointer text-textColor">
              menu
            </li>
            <li className="hover:text-headingColor duration-100 text-base cursor-pointer text-textColor">
              About Us
            </li>
            <li className="hover:text-headingColor duration-100 text-base cursor-pointer text-textColor">
              Service
            </li>
          </motion.ul>
          <div className=" flex items-center justify-center relative">
            <IoBasket className="text-textColor text-2xl  cursor-pointer hover:text-headingColor duration-100" />
            <div className="w-4 h-4 absolute -top-2 -right-2 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative flex items-center gap-4">
            <motion.img
            whileTap={{ scale: 0.6 }}
            src={user? user.photoURL: avatar}
            alt="avatar"
            onClick={login}
            className="w-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer"
          />

          {isMenu && 
          
          <motion.div 
          initial={{opacity:0, scale:0.6}}
          animate = {{opacity:1, scale:1}}
          exit={{opacity:0, scale:0.6}}
          className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  px-2 py-2" >
{ user && user.email === "shetamahmoud463@gmail.com" &&  
<Link to={'/createItem'}>
   <p className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">NEW item <IoAddOutline/> </p>

</Link>
}
  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor text-base" onClick={logOut}>LogOUt <IoLogIn/> </p>
</motion.div>
          }

<IoArrowDownCircleOutline className="text-textColor text-2xl  cursor-pointer hover:text-headingColor duration-100" onClick={()=> setisMenu(!isMenu)}/>

          </div>
          
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-between">
      <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 object-cover" />
          <p className="text-headingColor text-xl font-bold">Food</p>
        </Link>
        <div className="relative flex items-center gap-4">
            <motion.img
            whileTap={{ scale: 0.6 }}
            src={user? user.photoURL: avatar}
            alt="avatar"
            onClick={login}
            className="w-10 min-w-[40px] min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer"
          />

          {isMenu && 
          
          <motion.div 
          initial={{opacity:0, scale:0.6}}
          animate = {{opacity:1, scale:1}}
          exit={{opacity:0, scale:0.6}}
          className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  px-2 py-2" >
{user &&  user.email === "shetamahmoud463@gmail.com" &&  
<Link to={'/createItem'}>
   <p className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">NEW item <IoAddOutline/> </p>

</Link>
}
<motion.ul 
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:200}}
          className="flex flex-col gap-3 ">
            <li className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
              Home
            </li>
            <li className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
              menu
            </li>
            <li className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
              About Us
            </li>
            <li className="px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
              Service
            </li>
          </motion.ul>



  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor text-base" onClick={logOut} >LogOUt <IoLogIn/> </p>



</motion.div>
          }

<IoArrowDownCircleOutline className="text-textColor text-2xl  cursor-pointer hover:text-headingColor duration-100" onClick={()=> setisMenu(prev => !prev)}/>

          </div>
      </div>
    </div>
  );
};

export default Header;
