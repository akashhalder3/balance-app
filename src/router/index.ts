import { Path } from "@cppay/mvc-server";
import { home} from "../controller/HomeController";
import { UserController } from "../controller/UserController";
import { getBalance } from "../controller/AccountController";

export const routes:Path[] = [
    {path:'/',handlerFunction:home,type:'get',name:'home'},
    {path:'/getbalance',handlerFunction:getBalance,type:'get',name:'getBalance'},


    {path:'/account/signup',handlerFunction:UserController.signup,type:'post',name:'signup'},
    {path:'/account/login',handlerFunction:UserController.login,type:'post',name:'login'},
]