import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true)
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem est, auctor vel fringilla non, condimentum at nibh. Etiam accumsan est suscipit nisl tempus, ut commodo eros facilisis. Nunc sapien ipsum, rhoncus sit amet libero ut, dictum pellentesque nunc. Nullam eget elit neque. Vestibulum varius nisi sed erat luctus pharetra. Mauris commodo lorem vel erat venenatis egestas. Etiam tempus, tellus at porttitor maximus, felis arcu porttitor augue, non euismod metus nisl in urna. Duis neque arcu, porttitor nec est non, eleifend suscipit neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem est, auctor vel fringilla non, condimentum at nibh. Etiam accumsan est suscipit nisl tempus, ut commodo eros facilisis. Nunc sapien ipsum, rhoncus sit amet libero ut, dictum pellentesque nunc. Nullam eget elit neque. Vestibulum varius nisi sed erat luctus pharetra. Mauris commodo lorem vel erat venenatis egestas. Etiam tempus, tellus at porttitor maximus, felis arcu porttitor augue, non euismod metus nisl in urna. Duis neque arcu, porttitor nec est non, eleifend suscipit neque.

Nulla aliquam imperdiet eros ut commodo. In ut lobortis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id tempus ligula. Praesent vestibulum sapien lectus. Sed lacinia ut lectus nec consectetur. Donec vel maximus risus.

Etiam at nibh sed dui elementum malesuada vel scelerisque ante. Fusce vel elit orci. In at commodo velit. Etiam dapibus facilisis efficitur. Suspendisse potenti. Nullam pulvinar in sem sed varius. Morbi fringilla consequat tempus. Nullam vitae bibendum mauris. Nullam congue quam lacus, ac imperdiet dolor mattis nec. Nunc imperdiet justo quis erat hendrerit, non consectetur quam sagittis. Nulla tincidunt felis id quam gravida sagittis. Sed ut interdum urna. Vivamus tristique nisl eget est laoreet, vitae aliquet augue ultricies. Pellentesque gravida id quam nec facilisis.

Proin eget porta turpis, vel eleifend ipsum. Phasellus sed malesuada tortor, sit amet euismod turpis. Sed vulputate, leo nec ornare sodales, turpis diam dictum eros, eu pharetra sem nisl ac tellus. Vivamus dictum, massa a blandit sodales, ex arcu lacinia felis, vel pretium libero dolor vitae dolor. Phasellus varius pulvinar libero, sed vehicula nisi blandit id. Ut venenatis, nulla quis imperdiet imperdiet, nisi nunc eleifend purus, ac ornare quam mauris vel dui. Curabitur sagittis augue turpis, ac accumsan eros lacinia ut. Nunc magna magna, feugiat nec rhoncus at, efficitur eu odio. Aliquam nibh felis, aliquet at aliquet facilisis, rutrum at enim. Pellentesque massa justo, feugiat convallis erat facilisis, elementum fringilla turpis.

Phasellus a luctus magna. Fusce placerat arcu ante, sagittis tempus leo scelerisque nec. Integer dolor massa, rutrum ut iaculis sed, dignissim vel mauris. Praesent dapibus leo lacus, a vulputate ipsum suscipit sed. Ut malesuada bibendum massa at rutrum. Nam commodo enim neque, vitae lacinia turpis lacinia suscipit. Vestibulum cursus arcu ut arcu dignissim, non condimentum purus iaculis. Cras non urna a eros malesuada malesuada at ac massa. Nullam eu accumsan eros, id bibendum risus. Donec imperdiet erat scelerisque, mattis est et, egestas elit. Donec quis lectus arcu. Mauris efficitur sed leo et vulputate.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem est, auctor vel fringilla non, condimentum at nibh. Etiam accumsan est suscipit nisl tempus, ut commodo eros facilisis. Nunc sapien ipsum, rhoncus sit amet libero ut, dictum pellentesque nunc. Nullam eget elit neque. Vestibulum varius nisi sed erat luctus pharetra. Mauris commodo lorem vel erat venenatis egestas. Etiam tempus, tellus at porttitor maximus, felis arcu porttitor augue, non euismod metus nisl in urna. Duis neque arcu, porttitor nec est non, eleifend suscipit neque.

Nulla aliquam imperdiet eros ut commodo. In ut lobortis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id tempus ligula. Praesent vestibulum sapien lectus. Sed lacinia ut lectus nec consectetur. Donec vel maximus risus.

Etiam at nibh sed dui elementum malesuada vel scelerisque ante. Fusce vel elit orci. In at commodo velit. Etiam dapibus facilisis efficitur. Suspendisse potenti. Nullam pulvinar in sem sed varius. Morbi fringilla consequat tempus. Nullam vitae bibendum mauris. Nullam congue quam lacus, ac imperdiet dolor mattis nec. Nunc imperdiet justo quis erat hendrerit, non consectetur quam sagittis. Nulla tincidunt felis id quam gravida sagittis. Sed ut interdum urna. Vivamus tristique nisl eget est laoreet, vitae aliquet augue ultricies. Pellentesque gravida id quam nec facilisis.

Proin eget porta turpis, vel eleifend ipsum. Phasellus sed malesuada tortor, sit amet euismod turpis. Sed vulputate, leo nec ornare sodales, turpis diam dictum eros, eu pharetra sem nisl ac tellus. Vivamus dictum, massa a blandit sodales, ex arcu lacinia felis, vel pretium libero dolor vitae dolor. Phasellus varius pulvinar libero, sed vehicula nisi blandit id. Ut venenatis, nulla quis imperdiet imperdiet, nisi nunc eleifend purus, ac ornare quam mauris vel dui. Curabitur sagittis augue turpis, ac accumsan eros lacinia ut. Nunc magna magna, feugiat nec rhoncus at, efficitur eu odio. Aliquam nibh felis, aliquet at aliquet facilisis, rutrum at enim. Pellentesque massa justo, feugiat convallis erat facilisis, elementum fringilla turpis.

Phasellus a luctus magna. Fusce placerat arcu ante, sagittis tempus leo scelerisque nec. Integer dolor massa, rutrum ut iaculis sed, dignissim vel mauris. Praesent dapibus leo lacus, a vulputate ipsum suscipit sed. Ut malesuada bibendum massa at rutrum. Nam commodo enim neque, vitae lacinia turpis lacinia suscipit. Vestibulum cursus arcu ut arcu dignissim, non condimentum purus iaculis. Cras non urna a eros malesuada malesuada at ac massa. Nullam eu accumsan eros, id bibendum risus. Donec imperdiet erat scelerisque, mattis est et, egestas elit. Donec quis lectus arcu. Mauris efficitur sed leo et vulputate.
        Nulla aliquam imperdiet eros ut commodo. In ut lobortis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id tempus ligula. Praesent vestibulum sapien lectus. Sed lacinia ut lectus nec consectetur. Donec vel maximus risus.

        Etiam at nibh sed dui elementum malesuada vel scelerisque ante. Fusce vel elit orci. In at commodo velit. Etiam dapibus facilisis efficitur. Suspendisse potenti. Nullam pulvinar in sem sed varius. Morbi fringilla consequat tempus. Nullam vitae bibendum mauris. Nullam congue quam lacus, ac imperdiet dolor mattis nec. Nunc imperdiet justo quis erat hendrerit, non consectetur quam sagittis. Nulla tincidunt felis id quam gravida sagittis. Sed ut interdum urna. Vivamus tristique nisl eget est laoreet, vitae aliquet augue ultricies. Pellentesque gravida id quam nec facilisis.

        Proin eget porta turpis, vel eleifend ipsum. Phasellus sed malesuada tortor, sit amet euismod turpis. Sed vulputate, leo nec ornare sodales, turpis diam dictum eros, eu pharetra sem nisl ac tellus. Vivamus dictum, massa a blandit sodales, ex arcu lacinia felis, vel pretium libero dolor vitae dolor. Phasellus varius pulvinar libero, sed vehicula nisi blandit id. Ut venenatis, nulla quis imperdiet imperdiet, nisi nunc eleifend purus, ac ornare quam mauris vel dui. Curabitur sagittis augue turpis, ac accumsan eros lacinia ut. Nunc magna magna, feugiat nec rhoncus at, efficitur eu odio. Aliquam nibh felis, aliquet at aliquet facilisis, rutrum at enim. Pellentesque massa justo, feugiat convallis erat facilisis, elementum fringilla turpis.

        Phasellus a luctus magna. Fusce placerat arcu ante, sagittis tempus leo scelerisque nec. Integer dolor massa, rutrum ut iaculis sed, dignissim vel mauris. Praesent dapibus leo lacus, a vulputate ipsum suscipit sed. Ut malesuada bibendum massa at rutrum. Nam commodo enim neque, vitae lacinia turpis lacinia suscipit. Vestibulum cursus arcu ut arcu dignissim, non condimentum purus iaculis. Cras non urna a eros malesuada malesuada at ac massa. Nullam eu accumsan eros, id bibendum risus. Donec imperdiet erat scelerisque, mattis est et, egestas elit. Donec quis lectus arcu. Mauris efficitur sed leo et vulputate.
        </p>
      </main>
    </React.Fragment>
  );
}

export default App;
