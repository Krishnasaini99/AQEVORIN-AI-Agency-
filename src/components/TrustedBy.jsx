const logos = ['NEXORA', 'VERTEX LABS', 'QUANTIQ', 'HELIXWORKS', 'STRATOS', 'KRYON']

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-label">Trusted by forward-thinking companies</p>
        <div className="trusted-logos">
          {logos.map(logo => <span className="trusted-logo" key={logo}>{logo}</span>)}
        </div>
      </div>
    </section>
  )
}
