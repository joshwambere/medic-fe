import LoginPage from "./forms/Login";
import AuthPageWrapper from "@/components/wrappers/AuthPageWrapper";

const Home = (): JSX.Element => {
  return <div>
    <AuthPageWrapper>
      <LoginPage />
    </AuthPageWrapper>
  </div>;
};

export default Home;

