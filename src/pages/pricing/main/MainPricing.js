import Ticked from '../../../assets/shared/desktop/icon-check.svg'
const Main = () => {
    return (
        <main className="main main__pricing">
            <div className="sub__pricing">
                <h2 className="pricing__title">Free Plan</h2>
                <p className="pricing__summary">Build and test
                using our core set of products with up to 100 API requests
                </p>
                <strong>$0.00</strong>
            </div>
            <div className="sub__pricing sub__pricing__list">                
                <ul className="plan__list">
                    <li className="plan__list__item"><img src={Ticked} alt="checked item" /> Transactions</li>
                    <li className="plan__list__item"><img src={Ticked} alt="checked item" /> Auth</li>
                    <li className="plan__list__item"><img src={Ticked} alt="checked item" /> Identity</li>
                    <li className="plan__list__item"> Investments</li>
                    <li className="plan__list__item"> Assets</li>
                    <li className="plan__list__item">Liabilities</li>
                    <li className="plan__list__item">Income</li>
                </ul>
            </div>
            
            <a className="link--btn pricing__link--btn" href="/">Request Access </a>
        </main>
    )
}
export default Main