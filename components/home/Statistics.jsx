import FunFactCounter from "@/components/FunFactCounter";


const Statistics = () => {
    return (
        <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Company Fun Fact
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Learn Our Company Statistics
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>
    )
};
export default Statistics;