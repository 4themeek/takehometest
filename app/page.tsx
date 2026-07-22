export default function Home() {
  return (
    <>
      <svg className="defs" aria-hidden="true">
        <symbol id="thtlogo" viewBox="0 0 120 120">
          <path
            d="M60 14 L108 54 L100 54 L100 100 C100 104 97 107 93 107 L73 107 L73 74 L47 74 L47 107 L27 107 C23 107 20 104 20 100 L20 54 L12 54 Z"
            fill="none"
            stroke="#0c2a4d"
            strokeWidth={6}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <rect x={47} y={47} width={18} height={34} rx={5} fill="#fff" stroke="#0c2a4d" strokeWidth={4.5} />
          <line x1={51} y1={55} x2={61} y2={55} stroke="#0c2a4d" strokeWidth={3} strokeLinecap="round" />
          <circle cx={56} cy={73} r={2.6} fill="#1fb3c4" />
          <rect x={38} y={30} width={9} height={9} rx={2} fill="#1fb3c4" />
          <rect x={51} y={30} width={9} height={9} rx={2} fill="#1fb3c4" />
          <path
            d="M28 70 L44 90 L96 30"
            fill="none"
            stroke="#1fb3c4"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </svg>

      <nav>
        <div className="wrap">
          <div className="logo-lockup">
            <svg className="logo-mark">
              <use href="#thtlogo" />
            </svg>
            <div className="logo-word">
              <span className="lt">takehome</span>
              <span className="lb">test</span>
            </div>
          </div>
          <div className="navlinks">
            <a href="#market">Market</a>
            <a href="#fit">Positioning</a>
            <a href="#acquire">Acquisition</a>
          </div>
          <a className="pill" href="#acquire">
            <span className="dot"></span>Offers Invited
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Premium Domain · DTC Diagnostics
          </div>
          <img
            src="https://raw.githubusercontent.com/4themeek/takehometest/main/2TakeHomeTest.png"
            alt="TakeHomeTest.com"
            className="hero-logo"
          />
          <p className="lede">
            The exact-match domain for the fast growing at-home testing category — limited time offering to the
            pharmaceutical and health-tech acquirer building billions in added revenue, with the next flagship in
            direct-to-consumer diagnostics.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#acquire">
              Review Acquisition Paths
            </a>
            <a className="btn btn-ghost" href="#market">
              View Growth Market Data
            </a>
          </div>
          <div className="hero-strap">
            <span>Category-Defining</span>
            <span className="sep"></span>
            <span>Exact-Match .com</span>
            <span className="sep"></span>
            <span>
              <b>Offers Invited</b>
            </span>
          </div>
          <div className="check-divider">
            <svg className="check-svg" viewBox="0 0 220 44">
              <path d="M14 24 L70 40 L206 6" />
            </svg>
          </div>
        </div>
      </header>

      <section className="statement">
        <div className="wrap">
          <blockquote>
            A single, plain-English name for a category that no longer needs{" "}
            <i>explaining</i> — only <i>owning</i>.
          </blockquote>
          <cite>Positioning Note — TakeHomeTest.com</cite>
        </div>
      </section>

      <section className="market" id="market">
        <div className="wrap">
          <div className="eyebrow">Market Data</div>
          <h2>The DTC testing category is compounding, not cooling.</h2>
          <div className="stat-row">
            <div className="stat-col">
              <h3>$15.8B</h3>
              <p>Global at-home diagnostics &amp; consumer lab testing market, 2026</p>
            </div>
            <div className="stat-col">
              <h3>10.19%</h3>
              <p>Forecast CAGR, DTC laboratory testing, 2026–2031</p>
            </div>
            <div className="stat-col">
              <h3>$985M</h3>
              <p>Quest Diagnostics&rsquo; acquisition of LifeLabs — active sector consolidation</p>
            </div>
            <div className="stat-col">
              <h3>$525M</h3>
              <p>LetsGetChecked&rsquo;s acquisition of Truepill to extend its DTC platform</p>
            </div>
          </div>
          <p className="source-note">
            Sources: Mordor Intelligence, Direct-to-Consumer Laboratory Testing Market
            &amp; DTC Testing Market reports · MedTech Dive, &ldquo;Quest eyes $2B DTC
            testing potential&rdquo; · Business Wire, LetsGetChecked–Truepill completion
            notice · MedTech Dive, &ldquo;Quest to buy LifeLabs for $985M.&rdquo; Figures
            vary by methodology across research providers and are presented as
            directional market context, not warranted projections.
          </p>
        </div>
      </section>

      <section className="fit" id="fit">
        <div className="wrap">
          <div className="eyebrow">Positioning</div>
          <h2>Why this name, and not another.</h2>
          <div className="fit-rows">
            <div className="fit-row">
              <div className="fit-roman">I</div>
              <div className="fit-body">
                <h4>Exact-Match, Instantly Memorable, Consumer Intent</h4>
                <p>
                  &ldquo;Take home test&rdquo; is the simple phrase consumers
                  already search for at-home diagnostics — infectious disease,
                  fertility, hormone, and chronic-condition screening alike. The domain
                  matches demand as it already exists, not as a brand hopes to shape it.
                </p>
              </div>
            </div>
            <div className="fit-row">
              <div className="fit-roman">II</div>
              <div className="fit-body">
                <h4>Category-Agnostic, Portfolio-Ready</h4>
                <p>
                  Not bound to a single test type. Equally suited as a flagship
                  consumer brand or as an umbrella portal spanning an entire
                  diagnostics portfolio — with room to grow into adjacent categories
                  without a rebrand.
                </p>
              </div>
            </div>
            <div className="fit-row">
              <div className="fit-roman">III</div>
              <div className="fit-body">
                <h4>Instant Institutional Credibility</h4>
                <p>
                  A precise, plain-English .com reads as an established clinical brand
                  on first impression — the trust signal a consumer diagnostics
                  product needs before a single test is sold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="acquire" id="acquire">
        <div className="wrap">
          <div className="eyebrow">Acquisition</div>
          <h2>Three ways to open a conversation.</h2>
          <p>
            This listing is available directly and through two established domain
            marketplaces. Choose the path that fits your procurement process.
          </p>
          <div className="paths">
            <div className="path">
              <span className="pidx">Path I</span>
              <h4>Atom</h4>
              <p>
                Review verified listing details and submit an offer through Atom&rsquo;s
                brokered marketplace, with escrow and transfer handled end-to-end.
              </p>
              <a href="https://domains.atom.com/lpd/name/www.takehometest.com">
                Offer via Atom's platform
              </a>
            </div>
            <div className="path">
              <span className="pidx">Path II</span>
              <h4>Sedo</h4>
              <p>
                Search TakeHomeTest.com on Sedo, the world&rsquo;s largest domain
                marketplace, to submit an offer directly.
              </p>
              <a href="https://sedo.com" target="_blank" rel="noopener">
                Offer via Sedo's platform
              </a>
            </div>
            <div className="path featured">
              <span className="pidx">Path III</span>
              <h4>Private Inquiry</h4>
              <p>
                Prefer a direct, confidential conversation? Reach the owner directly to
                discuss terms without an intermediary. All purchases made confidently via Escrow.com
              </p>
              <a href="mailto:4online@nym.hush.com?subject=TakeHomeTest.com%20%E2%80%94%20Acquisition%20Inquiry">
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <div className="logo-lockup">
              <svg className="logo-mark">
                <use href="#thtlogo" />
              </svg>
              <div className="logo-word">
                takehome<span className="lb">test</span>.com
              </div>
            </div>
            <p className="legal">
              A premium, category-defining domain offered for sale to pharmaceutical
              and health-tech acquirers building in direct-to-consumer diagnostics.
              Offers invited prior to Auction in Fall of 2026. Don't miss it.
            </p>
          </div>
          <div className="flinks">
            <a href="https://atom.com" target="_blank" rel="noopener">
              Atom
            </a>
            <a href="https://sedo.com" target="_blank" rel="noopener">
              Sedo
            </a>
            <a href="mailto:4online@nym.hush.com?subject=TakeHomeTest.com%20%E2%80%94%20Acquisition%20Inquiry">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
