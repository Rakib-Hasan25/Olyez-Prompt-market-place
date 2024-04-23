import { SignUp } from "@clerk/nextjs";
 
// const SignUpPage = () => (
//   <SignUp />
// );




export default function Page() {
    return( 
    <div className="w-full h-screen flex items-center justify-center">
       <SignUp path="/sign-up" />;
    </div>
    );
   
  }
// export default SignUpPage;