import './App.css';
import Home from '../pages/Home';
import Header from '../widgets/Header/Header';
import { useQuery } from '@tanstack/react-query';
import { userAuthController } from '../entities/User/api/controller/user-auth.controller';
import { queryKeys } from '../shared/lib/constants';

function App() {
  useQuery({
    queryKey: [queryKeys.token],
    queryFn: () => userAuthController.getToken(),
  });

  return (
    <>
      <Header />
      <div className="root-layout">
        <Home />
      </div>
    </>
  );
}

export default App;
