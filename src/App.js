import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import PersonalLoan from "./components/pages/personal-loan";
import Header from "./components/sections/header";
import Footer from "./components/sections/footer";
import FormComponent from "./components/sections/formComponent";
import "./App.css";
import Formsection from "./components/SteperForm/Formsection";
import DebtConsolidadtionLoans from "./components/pages/debt-consolidation-loans";
import LoansforBadCredit from "./components/pages/loans-for-bad-credit";
import AutoLoans from "./components/pages/auto-loans";
import BestCreditCardsInMay2024 from "./components/pages/Blog-best-credit-cards-in-may-2024";
import BlogDebtConsolidation from "./components/pages/Blog-debt-consolidation";
import BlogBestBalanceTransferCC from "./components/pages/Blog-best-balance-transfer-CC";
import BlogMillennialsDebtFree from "./components/pages/Blog-milllennials-are-debt-free";
import StudentLoan from "./components/pages/student-loans";
import BlogRefinancePersonalLoan from "./components/pages/Blog-refinance-personal-loan";
import CreditCard from "./components/pages/CreditCard";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const isOnFormPage = location.pathname === "/form";

  return (
    <>
      {!isOnFormPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route
          path="/debt-consolidation"
          element={<DebtConsolidadtionLoans />}
        />
        <Route
          path="/loan-for-bad-credit-score"
          element={<LoansforBadCredit />}
        />

        <Route path="/auto-loans" element={<AutoLoans />} />
        <Route path="/student-loans" element={<StudentLoan />} />

        {/* form routes */}
        <Route path="/form-personal-loan" element={<Formsection />} />
        <Route path="/form-equity-loan" element={<Formsection />} />
        <Route path="/form-home-purchase-loan" element={<Formsection />} />
        <Route path="/form-business-loan" element={<Formsection />} />
        <Route path="/form-debt-relief-loan" element={<Formsection />} />
        <Route path="/form-home-refinance" element={<Formsection />} />
        <Route path="/form-auto-loan" element={<Formsection />} />
        <Route path="/credit-card" element={<CreditCard />} />

        <Route
          path="/credit-cards/best/rewards"
          element={<BestCreditCardsInMay2024 />}
        />
        <Route
          path="/debt-consolidation-rewards"
          element={<BlogDebtConsolidation />}
        />
        <Route
          path="/best-balance-transfer-credit-card"
          element={<BlogBestBalanceTransferCC />}
        />
        <Route
          path="/debt-free-millennials"
          element={<BlogMillennialsDebtFree />}
        />
        <Route path="blog-bad-credit-loans" element={<LoansforBadCredit />} />
        <Route
          path="/refinance-personal-loan/"
          element={<BlogRefinancePersonalLoan />}
        />
      </Routes>
      {!isOnFormPage && <Footer />}
    </>
  );
}

export default App;

