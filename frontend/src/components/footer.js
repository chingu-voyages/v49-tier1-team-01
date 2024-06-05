export default function Footer(props) {
  return (
    <footer className="text-center" style={{backgroundColor : props.backgroundColor}}>
    <p className="footer-text">
      Repository here: {" "}<a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/chingu-voyages/v49-tier1-team-01"
      >https://github.com/chingu-voyages/v49-tier1-team-01
      </a>
      </p>
    </footer>
  )
}
