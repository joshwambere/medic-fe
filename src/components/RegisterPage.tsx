import Register from "@/components/forms/Register";
import AuthPageWrapper from "@/components/wrappers/AuthPageWrapper";


const RegisterPage = (): JSX.Element => {
  return (
    <div>
      <AuthPageWrapper>
        <Register />
      </AuthPageWrapper>
    </div>
  );

};

export default RegisterPage;